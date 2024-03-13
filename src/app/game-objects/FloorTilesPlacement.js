import { TILES } from "../helpers/tiles";
import { FLOOR_TYPES } from "../helpers/consts";
import Sprite from "../components/object-graphics/Sprite";
import { Placement } from "./Placement";
import { Flow_Rounded } from "next/font/google";

export class FloorTilesPlacement extends Placement {
  constructor(properties, level) {
    super(properties, level);
    this.variation = properties.variation;
  }

  renderComponent() {
    let floorCoord = this.variation;

    switch (floorCoord) {
      case FLOOR_TYPES.FLOOR_CLEAN:
        floorCoord = TILES.FLOOR_CLEAN;
        break;
      case FLOOR_TYPES.FLOOR_DARK:
        floorCoord = TILES.FLOOR_DARK;
        break;
    case FLOOR_TYPES.FLOOR_DIRTY:
        floorCoord = TILES.FLOOR_DIRTY;
        break;
    case FLOOR_TYPES.FLOOR_RED:
        floorCoord = TILES.FLOOR_RED;
        break;
    case FLOOR_TYPES.FLOOR_WARNING1:
        floorCoord = TILES.FLOOR_WARNING1;
        break;
    case FLOOR_TYPES.FLOOR_WARNING2:
        floorCoord = TILES.FLOOR_WARNING2;
        break;
    case FLOOR_TYPES.FLOOR_WARNING3:
        floorCoord = TILES.FLOOR_WARNING3;
        break;
    default:
        floorCoord = TILES.FLOOR_WARNING1;
        break;

    }

    return <Sprite frameCoord={floorCoord} />;
  }
}
