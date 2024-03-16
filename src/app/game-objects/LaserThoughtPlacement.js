import { Placement } from "./Placement";
import Sprite from "../components/object-graphics/Sprite";
import { PLACEMENT_TYPE_HERO, PLACEMENT_TYPE_LASER_THOUGHT } from "../helpers/consts";
import { TILES } from "../helpers/tiles";

export class LaserThoughtPlacement extends Placement {
  constructor(properties, level) {
    super(properties, level);
    this.variation = properties.variation;
  }

  conversationOnCollide(body) {
    return body.type === PLACEMENT_TYPE_HERO;
  }

  renderComponent() {
    if (this.level.getLaserValue() === false) {
      this.level.deletePlacement(this);
    }
    return <Sprite frameCoord={TILES.LASER_THOUGHT} />;
  }
}
