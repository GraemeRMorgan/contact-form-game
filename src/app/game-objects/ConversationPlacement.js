import { Placement } from "./Placement";
import Sprite from "../components/object-graphics/Sprite";
import { PLACEMENT_TYPE_HERO, WALL_TYPES } from "../helpers/consts";
import { TILES } from "../helpers/tiles";

export class ConversationPlacement extends Placement {
    conversationOnCollide(body){
        return body.type === PLACEMENT_TYPE_HERO;
    }

    renderComponent(){
        return <Sprite frameCoord={TILES.CONVERSATION} />
    }
}