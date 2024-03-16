import { Placement } from "./Placement";
import Sprite from "../components/object-graphics/Sprite";

export class AjPlacement extends Placement {

  renderComponent() {
    const ajFrame = this.level.animatedFrames.ajFrames.activeFrame;
    return <Sprite frameCoord={ajFrame} size={32}/>;
  }
}
