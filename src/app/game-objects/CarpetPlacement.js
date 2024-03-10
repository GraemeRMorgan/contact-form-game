import { Placement } from "./Placement";
import Sprite from "../components/object-graphics/Sprite";
import { TILES } from "../helpers/tiles";

export class CarpetPlacement extends Placement {
  isSolidForBody(_body) {
    return false;
  }

  renderComponent() {
    const wallTileCoord = TILES.CARPET;
    return <Sprite frameCoord={wallTileCoord} size={48}/>;
  }
}