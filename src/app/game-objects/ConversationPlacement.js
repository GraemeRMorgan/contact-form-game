import { Placement } from "./Placement";
import Sprite from "../components/object-graphics/Sprite";
import { PLACEMENT_TYPE_HERO, WALL_TYPES, PLACEMENT_TYPE_CONVERSATION, CONVERSATION_TYPES } from "../helpers/consts";
import { TILES } from "../helpers/tiles";

export class ConversationPlacement extends Placement {

    constructor(properties, level) {
        super(properties, level);
        this.variation = properties.variation;
      }
  
    conversationOnCollide(body){
      
        return body.type === PLACEMENT_TYPE_HERO;
    }

    renderComponent(){
        let convoCoord = this.variation;

        switch(convoCoord){
            case CONVERSATION_TYPES.AJ_CONVO_1:
                convoCoord = TILES.AJ_CONVO_1;
                break;
            case CONVERSATION_TYPES.GUARD_CONVO:
                convoCoord = TILES.GUARD_CONVO;
                break;
            case CONVERSATION_TYPES.LASER_THOUGHT:
                convoCoord = TILES.LASER_THOUGHT;
                break;
            case CONVERSATION_TYPES.OOZE_THOUGHT:
                convoCoord = TILES.OOZE_THOUGHT;
                break;
            case CONVERSATION_TYPES.TOILET1:
                convoCoord = TILES.OOZE_THOUGHT;
                break;
            default:
                convoCoord = TILES.ERROR;
                break;
        }

        // Move this to its own file and extend Placement. 

        // if(convoCoord === TILES.LASER_THOUGHT){
        //     if(this.level.getLaserValue() === false){
        //         console.log(this)
        //         this.level.deletePlacement(this.variation.LASER_THOUGHT);
        //       }
              
        // }
        return <Sprite frameCoord={convoCoord} />
    }
}