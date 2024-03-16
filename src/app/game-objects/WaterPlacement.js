import { Placement } from "./Placement";
import Sprite from "../components/object-graphics/Sprite";
import {
  BODY_SKINS,
  PLACEMENT_TYPE_HERO,
  PLACEMENT_TYPE_WATER_PICKUP,
  WATER,
  WATER_TYPES
} from "../helpers/consts";

import { TILES } from "../helpers/tiles";

export class WaterPlacement extends Placement {
  constructor(properties, level) {
    super(properties, level);
    this.color = properties.color ?? WATER_TYPES.WATER_PLAIN;
  }
  changesHeroSkinOnCollide() {
    return BODY_SKINS.WATER;
  }
  damagesBodyOnCollide(body) {
    const { inventory } = this.level;
    return (
      body.type === PLACEMENT_TYPE_HERO &&
      !inventory.has(PLACEMENT_TYPE_WATER_PICKUP)
    );
  }

  renderComponent() {
    let waterFrame = this.color;
  
    switch (waterFrame) {
      case WATER_TYPES.WATER_BUBBLES1:
        waterFrame = TILES.WATER_BUBBLES1;
        break;
      case WATER_TYPES.FLAT_RIGHT1:
        waterFrame = TILES.WATER_FLAT_RIGHT1;
        break;
      case WATER_TYPES.FLAT_LEFT1:
        waterFrame = TILES.WATER_FLAT_LEFT1;
        break;
      case WATER_TYPES.TOP_RIGHT:
        waterFrame = TILES.WATER_TOP_RIGHT
        break;
      case WATER_TYPES.TOP_LEFT:
        waterFrame = TILES.WATER_TOP_LEFT
        break;
      case WATER_TYPES.BOTTOM_RIGHT:
        waterFrame = TILES.WATER_BOTOM_RIGHT
        break;
      case WATER_TYPES.BOTTOM_LEFT:
        waterFrame = TILES.WATER_BOTTOM_LEFT
        break;
      case WATER_TYPES.WATER_TOP1:
        waterFrame = TILES.WATER_TOP1
        break;
      case WATER_TYPES.TOP_LEFT_PEAK:
        waterFrame = TILES.TOP_LEFT_PEAK
        break;
      case WATER_TYPES.WATER_PLAIN:
        waterFrame = TILES.WATER_PLAIN
        break;
      case WATER_TYPES.WATER_ANIM_A:
        waterFrame = TILES.WATER_ANIM_A;
        break;
      case WATER_TYPES.WATER_ANIM_B:
        waterFrame = "BUBBLES2";
        break;
      case WATER_TYPES.WATER_ANIM_C:
        waterFrame = "BUBBLES3";
        break;
      case WATER_TYPES.WATER_DANK:
        waterFrame = TILES.WATER_DANK;
        break;
      default:
        waterFrame = TILES.WATER_PLAIN;
    }

  
    if(waterFrame === TILES.WATER_ANIM_A){
      waterFrame = this.level.animatedFrames.waterBubblesFrames.activeFrame;
      return <Sprite frameCoord={waterFrame} />
    } 
    else if(waterFrame === "BUBBLES2"){
      waterFrame = this.level.animatedFrames.waterBubblesFrames2.activeFrame;
      return <Sprite frameCoord={waterFrame} />
    } 
    else if(waterFrame === "BUBBLES3"){
      waterFrame = this.level.animatedFrames.waterBubblesFrames3.activeFrame;
      return <Sprite frameCoord={waterFrame} />
    } 
    
    else {
      return <Sprite frameCoord={waterFrame} />;
    }
  
    
  }

}