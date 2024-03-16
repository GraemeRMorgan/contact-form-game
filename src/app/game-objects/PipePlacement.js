import { Placement } from "./Placement";
import Sprite from "../components/object-graphics/Sprite";
import { PIPE_TYPES } from "../helpers/consts";
import { TILES } from "../helpers/tiles";

export class PipePlacement extends Placement {
  constructor(properties, level) {
    super(properties, level);
    this.variation = properties.variation;
  }

  isSolidForBody(_body) {
    return true;
  }

  renderComponent() {
    let pipeCoord = this.variation;

    switch (pipeCoord) {
      case PIPE_TYPES.PIPE_VERT:
        pipeCoord = TILES.PIPE_VERT;
        break;
      case PIPE_TYPES.PIPE_VERT_OUT:
        pipeCoord = TILES.PIPE_VERT_OUT;
        break;
      case PIPE_TYPES.PIPE_VERT_IN:
        pipeCoord = TILES.PIPE_VERT_IN;
        break;
      case PIPE_TYPES.PIPE_TURN1:
        pipeCoord = TILES.PIPE_TURN1;
        break;
      case PIPE_TYPES.PIPE_TURN2:
        pipeCoord = TILES.PIPE_TURN2;
        break;
      case PIPE_TYPES.PIPE_HOR1:
        pipeCoord = TILES.PIPE_HOR1;
        break;
      case PIPE_TYPES.PIPE_HOR2:
        pipeCoord = TILES.PIPE_HOR2;
        break;
      case PIPE_TYPES.PIPE_DRAIN:
        pipeCoord = TILES.PIPE_DRAIN;
        break;
      default:
        pipeCoord = TILES.ERROR;
    }


    if (pipeCoord === TILES.PIPE_DRAIN) {
        pipeCoord = this.level.animatedFrames.pipeDrainFrames.activeFrame;
        return <Sprite frameCoord={pipeCoord} />
    } else {
        return <Sprite frameCoord={pipeCoord} />
    }
  }
}
