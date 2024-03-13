import { TILES } from "../helpers/tiles";
import Sprite from "../components/object-graphics/Sprite";
import { Placement } from "./Placement";

export class ColliderPlacement extends Placement {
    isSolidForBody(_body) {
        return true;
      }
      
      renderComponent(){
        const frameCoord = TILES.COLLIDER;
        return <Sprite frameCoord={frameCoord} />
      }
}