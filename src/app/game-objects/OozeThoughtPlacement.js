import { Placement } from "./Placement";
import Sprite from "../components/object-graphics/Sprite";
import { PLACEMENT_TYPE_HERO, THOUGHT_TYPES, PLACEMENT_TYPE_WATER_PICKUP } from "../helpers/consts";
import { TILES } from "../helpers/tiles";

export class OozeThoughtPlacement extends Placement {
    constructor(properties, level) {
        super(properties, level);
        this.variation = properties.variation;
      }
    
      conversationOnCollide(body) {
        return body.type === PLACEMENT_TYPE_HERO;
      }

      isSolidForBody() {
        if(this.variation === THOUGHT_TYPES.RIGID_BODY){
          return true;
        }
        return false;
      }
    
      renderComponent() {
        // if (this.level.getLaserValue() === false) {
        //   this.level.deletePlacement(this);
        // }

        const { inventory } = this.level
        if(inventory.has(PLACEMENT_TYPE_WATER_PICKUP)){
            this.level.deletePlacement(this)
        }

        
        return <Sprite frameCoord={TILES.OOZE_THOUGHT} />;
      }
}