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
    this.frame = 1;
  }

  isSolidForBody(_body) {
    if (this.color === "CHEETOS") {
      return false;
    } else {
      return true;
    }
  }

  tick() {
    if (this.collectInFrames > 0) {
      this.collectInFrames -= 1;
      if (this.collectInFrames === 0) {
        this.level.deletePlacement(this);
        soundsManager.playSfx(SFX.OPEN_CHEST);
      }
    }

    // if(this.frame <= 3){
    //   this.frame += 0.5;
    //   if(this.frame === 3){
    //     this.level.deletePlacement(this)
    //   }
    //   return;
    // }
    // this.level.deletePlacement(this);
  }

  canBeUnlocked() {
    // if (this.color === "REGULAR") {
    //   return this.level.inventory.has(requiredKey);
    // } else {
    //   const requiredKey = `KEY_${this.color}`;
    //   return this.level.inventory.has(requiredKey);
    // }
    const requiredKey = `KEY_${this.color}`;
    return this.level.inventory.has(requiredKey);
  }

  unlock() {
    if (this.collectInFrames > 0) {
      return;
    }
    if (this.color === "WHITE") {
      // Disable the laser...
      this.level
      this.level.setLaserValue(false);
    }
    this.collectInFrames = 11;
  }

  renderComponent() {
    let size = 16;

    let lockColorCoord = this.color;

    switch (lockColorCoord) {
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
      case LOCK_KEY_COLORS.CHEETOS:
        lockColorCoord = TILES.CHEETOS_LOCK;
        break;
      case LOCK_KEY_COLORS.REGULAR:
        lockColorCoord = TILES[`REGULAR${Math.ceil(this.frame)}`];
        // lockColorCoord = TILES.REGULAR1
        break;
      default:
        lockColorCoord = TILES.GREEN_LOCK;
        break;
    }

    // return <Sprite frameCoord={lockColorCoord} size={size} />;
    // return lockColorCoord === `REGULAR${Math.ceil(this.frame)}` ? <Sprite frameCoord={TILES[lockColorCoord]} /> : <Sprite frameCoord={lockColorCoord} size={size} />;
    return <Sprite frameCoord={lockColorCoord} size={size} />;
  }
}
