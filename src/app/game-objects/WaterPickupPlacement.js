import { Placement } from "./Placement";
 import Sprite from "../components/object-graphics/Sprite";
 import { TILES } from "../helpers/tiles";
import ElevatedSprite from "../components/object-graphics/ElevatedSprite";
 
 export class WaterPickupPlacement extends Placement {
   addsItemToInventoryOnCollide() {
     return this.type;
   }
 
   renderComponent() {
     return <ElevatedSprite frameCoord={TILES.WATER_PICKUP} />;
   }
 }