import { Placement } from "./Placement";
import Sprite from "../components/object-graphics/Sprite";
import { SET_DRESSING_TYPES } from "../helpers/consts";
import { TILES } from "../helpers/tiles";
import GameRestart from "../components/ui/GameRestart";

export class SetDressing extends Placement {
  constructor(properties, level) {
    super(properties, level);
    this.variation = properties.variation;
  }

  isSolidForBody(_body) {
    // Bug where if you wak on a body that isn't solid it changes the value of conversation.
    // if(this.variation === SET_DRESSING_TYPES.TOILET){
    //   return false;
    // }
    return true;
  }

  conversationOnCollide() {
    return <GameRestart />;
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
        size = 32;
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
      case SET_DRESSING_TYPES.AJ:
        dressingCoord = TILES.AJ;
        size = 32;
        break;
      case SET_DRESSING_TYPES.TOILET:
        dressingCoord = TILES.TOILET;
        size = 32;
        break;
      case SET_DRESSING_TYPES.SINK:
        dressingCoord = TILES.SINK;
        size = 32;
        break;
      case SET_DRESSING_TYPES.HOR_BED:
        dressingCoord = TILES.HOR_BED;
        size = 32;
        break;
      case SET_DRESSING_TYPES.ELEVATOR_DOOR_L:
        dressingCoord = TILES.ELEVATOR_DOOR_L;
        break;
      case SET_DRESSING_TYPES.ELEVATOR_DOOR_C:
        dressingCoord = TILES.ELEVATOR_DOOR_C;
        break;
      case SET_DRESSING_TYPES.ELEVATOR_DOOR_R:
        dressingCoord = TILES.ELEVATOR_DOOR_R;
        break;
      case SET_DRESSING_TYPES.BATH_SIGN:
        dressingCoord = TILES.BATH_SIGN;
        break;
      case SET_DRESSING_TYPES.TP_ROLL:
        dressingCoord = TILES.TP_ROLL;
        break;
      case SET_DRESSING_TYPES.TRASH:
        dressingCoord = TILES.TRASH;
        break;
      case SET_DRESSING_TYPES.COMPUTER_DESK:
        dressingCoord = TILES.COMPUTER_DESK;
        size = 48;
        break;
      case SET_DRESSING_TYPES.BOOKSHELF_VERT:
        dressingCoord = TILES.BOOKSHELF_VERT;
        size = 32;
        break;
      case SET_DRESSING_TYPES.LASER_WALL_OFF:
        dressingCoord = TILES.LASER_WALL_OFF;
        break;
      case SET_DRESSING_TYPES.CONSOLE_WALL_GREEN:
        dressingCoord = TILES.CONSOLE_WALL_GREEN;
        break;
      case SET_DRESSING_TYPES.TABLE_LEFT:
        dressingCoord = TILES.TABLE_LEFT;
        size = 32;
        break;
      case SET_DRESSING_TYPES.SHELF_LEFT:
        dressingCoord = TILES.SHELF_LEFT;
        size = 32;
        break;

      default:
        dressingCoord = TILES.GOAL_ENABLED;
        break;
    }
    return <Sprite frameCoord={dressingCoord} size={size} />;
  }
}
