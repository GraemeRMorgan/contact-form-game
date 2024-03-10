import { Placement } from "./Placement";
import Sprite from "../components/object-graphics/Sprite";
import { TILES } from "../helpers/tiles";
import { LOCK_KEY_COLORS } from "../helpers/consts";
import soundsManager, { SFX } from "../classes/Sounds";


export class TreasureChest extends Placement {
  constructor(properties, level) {
    super(properties, level);
    this.color = properties.color ?? LOCK_KEY_COLORS.BLUE;
    this.collectInFrames = 0;
  }
  isSolidForBody(_body) {
    return false;
  }

  tick() {
    if (this.collectInFrames > 0) {
      this.collectInFrames -= 1;
      if (this.collectInFrames === 0) {
        this.level.deletePlacement(this);
        soundsManager.playSfx(SFX.OPEN_CHEST);

      }
    }
  }


  canBeUnlocked() {
    const requiredKey = `KEY_${this.color}`;
    return this.level.inventory.has(requiredKey);
  }

  unlock() {
    if (this.collectInFrames > 0) {
      return;
    }
    this.collectInFrames = 11;
  }

  renderComponent() {
    let wallTileCoord = TILES.TREASURE;
    if (this.collectInFrames > 0) {
      wallTileCoord = TILES.UNLOCKED_LOCK;
    }
    return <Sprite frameCoord={wallTileCoord} size={48} />;
  }
}
