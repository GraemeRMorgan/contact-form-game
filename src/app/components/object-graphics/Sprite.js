import React from "react";
import { useEffect, useRef } from "react";
import { CELL_SIZE } from "@/app/helpers/consts";
import { useRecoilValue } from "recoil";
import { spriteSheetImageAtom } from "@/app/atoms/spriteSheetImageAtom";

const Sprite = ({ frameCoord, size = 16 }) => {

  // The sprite sheet needs to be visible throughout the application
  const spriteSheetImage = useRecoilValue(spriteSheetImageAtom);
  const canvasRef = useRef();
  useEffect(() => {
    /** @type {HTMLCanvasElement} */
    const canvasEl = canvasRef.current;
    const ctx = canvasEl.getContext("2d");

    //Clear out anything in the canvas tag
    ctx.clearRect(0, 0, canvasEl.width, canvasEl.height);

    //Draw a graphic to the canvas tag
    const tileSheetX = Number(frameCoord.split("x")[0]);
    const tileSheetY = Number(frameCoord.split("x")[1]);

    ctx.drawImage(
      spriteSheetImage, 
      tileSheetX * CELL_SIZE, 
      tileSheetY * CELL_SIZE, 
      size, // x crop from spritesheet
      size, //y crop from spritesheet
      0, //Where to place this on canvas tag X (0)
      0, //Where to place this on canvas tag Y (0)
      size, // x scale
      size // y scale
    );
  }, [spriteSheetImage, frameCoord, size]);

  return <canvas width={size} height={size} ref={canvasRef} />;
}

// Exporting as a memoized element, so that it only rerenders on a change in state. 
const MemoizedSprite = React.memo(Sprite);
export default MemoizedSprite;
