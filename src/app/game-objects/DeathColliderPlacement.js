import { TILES } from "../helpers/tiles";
import Sprite from "../components/object-graphics/Sprite";
import { Placement } from "./Placement";
import {
  BODY_SKINS,
  PLACEMENT_TYPE_HERO,
  PLACEMENT_TYPE_WATER_PICKUP,
} from "../helpers/consts";

export class DeathColliderPlacement extends Placement {
//   changesHeroSkinOnCollide() {
//     return BODY_SKINS.WATER;
//   }
  damagesBodyOnCollide(body) {
    const { inventory } = this.level;
    return (
      body.type === PLACEMENT_TYPE_HERO &&
      !inventory.has(PLACEMENT_TYPE_WATER_PICKUP)
    );
  }

  renderComponent() {
    const frameCoord = TILES.DEATH_COLLIDER;
    return <Sprite frameCoord={frameCoord} />;
  }
}
