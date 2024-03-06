import { useEffect } from "react";
import { SPRITE_SHEET_SRC } from "./helpers/consts";
import RenderLevel from "./components/level-layout/RenderLevel";
import { spriteSheetImageAtom } from "./atoms/spriteSheetImageAtom";
import { useRecoilState } from "recoil";

const App = () => {
  const [spriteSheetImage, setSpriteSheetImage] = useRecoilState(spriteSheetImageAtom)   

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
       <RenderLevel />
    </div>
  );
}
export default App;
