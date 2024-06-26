import { useEffect } from "react";
import { SPRITE_SHEET_SRC } from "./helpers/consts";
import RenderLevel from "./components/level-layout/RenderLevel";
import { spriteSheetImageAtom } from "./atoms/spriteSheetImageAtom";
import { useRecoilState } from "recoil";
import { useState } from "react";
import soundsManager from "./classes/Sounds";

// Downloads sound effects for Sounds.js
soundsManager.init();

const App = () => {
  const [spriteSheetImage, setSpriteSheetImage] =
    useRecoilState(spriteSheetImageAtom);
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
      {/* <button onClick={() => setStart(!start)}>Contact Details</button>
      {start ? <RenderLevel /> : null} */}
      <RenderLevel />
    </div>
  );
};
export default App;
