import { Placement } from "./Placement";
import Sprite from "../components/object-graphics/Sprite";
import { BACTA_TYPES } from "../helpers/consts";

import { TILES } from "../helpers/tiles";

export class BactaTanksPlacement extends Placement {
  constructor(properties, level) {
    super(properties, level);
    this.variation = properties.variation;
  }

  isSolidForBody(_body) {
    return true;
  }

  renderComponent() {
    const size = 32;
    let bactaCoord = this.variation;
    
    if (bactaCoord === BACTA_TYPES.BACTA_GREEN) {
      bactaCoord = this.level.animatedFrames.bactaGreenFrames.activeFrame;
      return <Sprite frameCoord={bactaCoord} size={size}/>;
    } else {
      bactaCoord = this.level.animatedFrames.bactaPinkFrames.activeFrame;
      return <Sprite frameCoord={bactaCoord} size={size}/>;
    }

  }
}
