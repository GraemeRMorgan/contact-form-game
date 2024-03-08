import { useEffect } from "react";
import { SPRITE_SHEET_SRC } from "./helpers/consts";
import RenderLevel from "./components/level-layout/RenderLevel";
import { spriteSheetImageAtom } from "./atoms/spriteSheetImageAtom";
import { useRecoilState } from "recoil";
import { useState } from "react";

const App = () => {
  const [spriteSheetImage, setSpriteSheetImage] = useRecoilState(spriteSheetImageAtom)  
  const [start, setStart] = useState(false); 

  useEffect(() => {
    const image = new Image();
    image.src = SPRITE_SHEET_SRC;
    image.onload = () => {
      setSpriteSheetImage(image);
    };
  }, []);

  if (!spriteSheetImage) {
    return null;
  }

  return (
    <div>
      <button onClick={() => setStart(!start)}>Would you like to start the game?</button>
      {start ? <RenderLevel /> : null}
       {/* <RenderLevel /> */}
    </div>
  );
}
export default App;
