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
    let size = 16;
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
        wallTileCoord = TILES.WALL_LEFT_CORNER;
        break;
      case WALL_TYPES.WALL_RIGHT_CORNER:
        wallTileCoord = TILES.WALL_RIGHT_CORNER;
        break;
      case WALL_TYPES.WALL_END:
        wallTileCoord = TILES.WALL_END;
        break;
      case WALL_TYPES.WALL_END_TOP:
        wallTileCoord = TILES.WALL_END_TOP;
        break;
      case WALL_TYPES.WALL_INT_VERT:
        wallTileCoord = TILES.WALL_INT_VERT;
        break;
      case WALL_TYPES.WALL_INT_HOR:
        wallTileCoord = TILES.WALL_INT_HOR;
        break;
      case WALL_TYPES.WALL_INT_BL:
        wallTileCoord = TILES.WALL_INT_BL;
        break;
      case WALL_TYPES.WALL_INT_BR:
        wallTileCoord = TILES.WALL_INT_BR;
        break;
      case WALL_TYPES.WALL_INT_VERT_B_END:
        wallTileCoord = TILES.WALL_INT_VERT_B_END;
        break;
      case WALL_TYPES.WALL_INT_VERT_T_END:
        wallTileCoord = TILES.WALL_INT_VERT_T_END;
        break;
      case WALL_TYPES.WALL_INT_HOR_END_L:
        wallTileCoord = TILES.WALL_INT_HOR_END_L;
        break;
      case WALL_TYPES.WALL_INT_HOR_END_R:
        wallTileCoord = TILES.WALL_INT_HOR_END_R;
        break;
      case WALL_TYPES.WALL_BLUE_DOOR_LEFT:
        wallTileCoord = TILES.WALL_BLUE_DOOR_LEFT;
        break;
      case WALL_TYPES.WALL_BLUE_DOOR_RIGHT:
        wallTileCoord = TILES.WALL_BLUE_DOOR_RIGHT;
        break;
      case WALL_TYPES.WALL_ORANGE_DOOR_LEFT:
        wallTileCoord = TILES.WALL_ORANGE_DOOR_LEFT;
        break;
      case WALL_TYPES.WALL_ORANGE_DOOR_RIGHT:
        wallTileCoord = TILES.WALL_ORANGE_DOOR_RIGHT;
        break;
      case WALL_TYPES.WALL_PINK_DOOR_LEFT:
        wallTileCoord = TILES.WALL_PINK_DOOR_LEFT;
        break;
      case WALL_TYPES.WALL_PINK_DOOR_RIGHT:
        wallTileCoord = TILES.WALL_PINK_DOOR_RIGHT;
        break;
      case WALL_TYPES.WALL_INT_JUNCTION_TOP:
        wallTileCoord = TILES.WALL_INT_JUNCTION_TOP;
        break;
      case WALL_TYPES.WALL_CELL_DOORS:
        wallTileCoord = TILES.WALL_CELL_DOORS;
        break;
      default:
        wallTileCoord = TILES.WALL_VERTICAL;
        break;
    }
    return <Sprite frameCoord={wallTileCoord} size={size} />;
  }
}
