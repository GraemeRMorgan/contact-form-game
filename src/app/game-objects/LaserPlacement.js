import { Placement } from "./Placement";
import { LASER_TYPES, PLACEMENT_TYPE_HERO } from "../helpers/consts";
import { TILES } from "../helpers/tiles";
import Sprite from "../components/object-graphics/Sprite";
import soundsManager, { SFX } from "../classes/Sounds";

export class LaserPlacement extends Placement {
  constructor(properties, level) {
    super(properties, level);
    this.variation = properties.variation;
  }

  damagesBodyOnCollide(body) {
    const { inventory } = this.level;
    return (
      body.type === PLACEMENT_TYPE_HERO 
    );
  }

  isSolidForBody(_body) {
    return true;
  }



  renderComponent() {
    let laserCoord = this.variation;

    switch (laserCoord) {
      case LASER_TYPES.LASER_ON:
        laserCoord = TILES.LASER_ON;
        break;
      case LASER_TYPES.LASER_WALL_ON:
        laserCoord = TILES.LASER_WALL_ON;
        break;
      case LASER_TYPES.LASER_WALL_OFF:
        laserCoord = TILES.LASER_WALL_OFF;
        break;
      default:
        laserCoord = TILES.GOAL_ENABLED;
        break;
    }

    if(this.level.getLaserValue() === false){
      this.level.deletePlacement(this);
    }
    
    return (
      <Sprite frameCoord={laserCoord} />
    );
  }
}
