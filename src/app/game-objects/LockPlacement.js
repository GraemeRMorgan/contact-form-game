
import { Placement } from "./Placement";
import { LOCK_KEY_COLORS } from "../helpers/consts";
import { TILES } from "../helpers/tiles";
import Sprite from "../components/object-graphics/Sprite";
import soundsManager, { SFX } from "../classes/Sounds";


export class LockPlacement extends Placement {
  constructor(properties, level) {
    super(properties, level);
    this.color = properties.color ?? LOCK_KEY_COLORS.BLUE;
    this.collectInFrames = 0;
  }

  isSolidForBody(_body) {
    return true;
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
    let size = 16;

    let lockColorCoord = this.color;

    switch(lockColorCoord){
      case LOCK_KEY_COLORS.BLUE:
        lockColorCoord = TILES.BLUE_LOCK;
        break;
      case LOCK_KEY_COLORS.GREEN:
        lockColorCoord = TILES.GREEN_LOCK;
        break;
      case LOCK_KEY_COLORS.PINK:
        lockColorCoord = TILES.PINK_LOCK;
        break;
      case LOCK_KEY_COLORS.ORANGE:
        lockColorCoord = TILES.ORANGE_LOCK;
        break;
      case LOCK_KEY_COLORS.TREASURE:
        lockColorCoord = TILES.TREASURE_LOCK;
        break;
      case LOCK_KEY_COLORS.WHITE:
        lockColorCoord = TILES.WHITE_LOCK;
        break;
      default:
        lockColorCoord = TILES.GREEN_LOCK;
        break;
    }
    
    return <Sprite frameCoord={lockColorCoord} size={size} />;
  }
}