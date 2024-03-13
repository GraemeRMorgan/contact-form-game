import { Placement } from "./Placement";
 import { LOCK_KEY_COLORS } from "../helpers/consts";
 import ElevatedSprite from "../components/object-graphics/ElevatedSprite";
 import { TILES } from "../helpers/tiles";
 
 export class KeyPlacement extends Placement {
   constructor(properties, level) {
     super(properties, level);
     this.color = properties.color ?? LOCK_KEY_COLORS.BLUE;
   }
 
   addsItemToInventoryOnCollide() {
     return `KEY_${this.color}`;
   }
 
   renderComponent() {

       let keyColorCoord = this.color;

       switch(keyColorCoord){
        case LOCK_KEY_COLORS.BLUE:
          keyColorCoord = TILES.BLUE_KEY;
          break;
        case LOCK_KEY_COLORS.GREEN:
          keyColorCoord = TILES.GREEN_KEY;
          break;
        case LOCK_KEY_COLORS.ORANGE:
          keyColorCoord = TILES.ORANGE_KEY;
          break;
        case LOCK_KEY_COLORS.PINK:
          keyColorCoord = TILES.PINK_KEY;
          break;
        case LOCK_KEY_COLORS.TREASURE:
          keyColorCoord = TILES.TREASURE_KEY;
          break;
        case LOCK_KEY_COLORS.WHITE:
          keyColorCoord = TILES.TREASURE_KEY;
          break;
        default:
          keyColorCoord = TILES.GREEN_KEY;
          break;
       }


     return <ElevatedSprite frameCoord={keyColorCoord} />;
   }
 }