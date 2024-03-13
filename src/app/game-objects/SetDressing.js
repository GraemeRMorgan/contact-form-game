import { Placement } from "./Placement";
import Sprite from "../components/object-graphics/Sprite";
import { SET_DRESSING_TYPES } from "../helpers/consts";
import { TILES } from "../helpers/tiles";

export class SetDressing extends Placement {
  constructor(properties, level) {
    super(properties, level);
    this.variation = properties.variation;
  }

  isSolidForBody(_body) {
    return true;
  }

  renderComponent() {
    let dressingCoord = this.variation;
    let size = 16;

    switch (dressingCoord) {
      case SET_DRESSING_TYPES.WALL_CHART_LARGE:
        dressingCoord = TILES.WALL_CHART_LARGE;
        break;
      case SET_DRESSING_TYPES.WALL_CHART_SMALL1:
        dressingCoord = TILES.WALL_CHART_SMALL1;
        break;
      case SET_DRESSING_TYPES.WALL_CHART_SMALL2:
        dressingCoord = TILES.WALL_CHART_SMALL2;
        break;
      case SET_DRESSING_TYPES.BOOK_SHELF:
        dressingCoord = TILES.BOOK_SHELF;
        size = 32;
        break;
      case SET_DRESSING_TYPES.TABLE_HOR:
        dressingCoord = TILES.TABLE_HOR;
        size = 48;
        break;
      case SET_DRESSING_TYPES.TABLE_VERT:
        dressingCoord = TILES.TABLE_VERT;
        size = 32;
        break;
      case SET_DRESSING_TYPES.TV:
        dressingCoord = TILES.TV;
        size = 32;
        break;
      case SET_DRESSING_TYPES.COUCH:
        dressingCoord = TILES.COUCH;
        size = 32;
        break;
      case SET_DRESSING_TYPES.BED:
        dressingCoord = TILES.BED;
        size = 32;
        break;
      case SET_DRESSING_TYPES.BACTA_TANK_BLUE:
        dressingCoord = TILES.BACTA_TANK_BLUE;
        size = 32;
        break;
      case SET_DRESSING_TYPES.BACTA_TANK_BLUE_TL:
        dressingCoord = TILES.BACTA_TANK_BLUE_TL;
        size = 32;
        break;
      case SET_DRESSING_TYPES.BACTA_TANK_PINK_TR:
        dressingCoord = TILES.BACTA_TANK_PINK_TR;
        size = 32;
        break;
      case SET_DRESSING_TYPES.BACTA_TANK_GREEN_TL:
        dressingCoord = TILES.BACTA_TANK_GREEN_TL;
        size = 32;
        break;
      case SET_DRESSING_TYPES.TIGHE_BED:
        dressingCoord = TILES.TIGHE_BED;
        size = 64;
        break;

      default:
        dressingCoord = TILES.GOAL_ENABLED;
        break;
    }
    return <Sprite frameCoord={dressingCoord} size={size} />;
  }
}
