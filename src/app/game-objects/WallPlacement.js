import { Placement } from "./Placement";
import Sprite from "../components/object-graphics/Sprite";
import { WALL_TYPES } from "../helpers/consts";
import { TILES } from "../helpers/tiles";

export class WallPlacement extends Placement {
  constructor(properties, level) {
    super(properties, level);
    this.variation = properties.variation;
  }
  isSolidForBody(_body) {
    return true;
  }

  renderComponent() {
    let wallTileCoord = this.variation;
    switch (wallTileCoord) {
      case WALL_TYPES.WALL_TOP:
        wallTileCoord = TILES.WALL_TOP;
        break;
      case WALL_TYPES.WALL_VERTICAL:
        wallTileCoord = TILES.WALL_VERTICAL;
        break;
      case WALL_TYPES.WALL_HORIZONTAL:
        wallTileCoord = TILES.WALL_HORIZONTAL;
        break;
      case WALL_TYPES.WALL_LEFT_CORNER:
        wallTileCoord = TILES.WALL_LEFT_CORNER
        break;
      case WALL_TYPES.WALL_RIGHT_CORNER:
        wallTileCoord = TILES.WALL_RIGHT_CORNER
        break;
      case WALL_TYPES.WALL_END:
        wallTileCoord = TILES.WALL_END
        break;
      case WALL_TYPES.WALL_END_TOP:
        wallTileCoord = TILES.WALL_END_TOP
        break;
      default:
        wallTileCoord = TILES.WALL_VERTICAL;
        break;
    }
    return <Sprite frameCoord={wallTileCoord} />;
  }
}
