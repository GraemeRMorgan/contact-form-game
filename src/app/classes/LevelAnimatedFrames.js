import { TILES } from "../helpers/tiles";
import { PlacementTypeAnimationFrames } from "./PlacementTypeAnimationFrames";

const WATER_SEQUENCE = [TILES.WATER1, TILES.WATER2];
const WATER_ANIMATION_SPEED = 30;

const FIRE_SEQUENCE = [TILES.FIRE1, TILES.FIRE2, TILES.FIRE3];
const FIRE_ANIMATION_SPEED = 30;

const REGULAR_DOOR_SEQUENCE = [TILES.REGULAR1, TILES.REGULAR2, TILES.REGULAR3];
const REGULAR_DOOR_SPEED = 30;

const AJ_SEQUENCE = [TILES.AJ_1, TILES.AJ_2, TILES.AJ_1, TILES.AJ_1, TILES.AJ_3, TILES.AJ_1];
const AJ_ANIMATION_SPEED = 40;

const BACTA_GREEN_SEQUENCE = [TILES.BACTA_GREEN1, TILES.BACTA_GREEN2, TILES.BACTA_GREEN3, TILES.BACTA_GREEN4, TILES.BACTA_GREEN5];
const BACTA_ANIMATION_SPEED = 10;

const BACTA_PINK_SEQUENCE = [TILES.BACTA_PINK1, TILES.BACTA_PINK2];
const BACTA_PINK_ANIMATION_SPEED = 40;

const PIPE_DRAIN_SEQUENCE = [TILES.PIPE_DRAIN1, TILES.PIPE_DRAIN2, TILES.PIPE_DRAIN3, TILES.PIPE_DRAIN4, TILES.PIPE_DRAIN5]
const PIPE_DRAIN_ANIMATION_SPEED = 40;

const WATER_BUBBLES_SEQUENCE = [TILES.WATER_ANIM_A, TILES.WATER_ANIM_A1, TILES.WATER_ANIM_A2, TILES.WATER_ANIM_A3, TILES.WATER_ANIM_A4, TILES.WATER_ANIM_A5, TILES.WATER_ANIM_A6, TILES.WATER_ANIM_A7, TILES.WATER_ANIM_A, TILES.WATER_ANIM_A, TILES.WATER_ANIM_A, TILES.WATER_ANIM_A, TILES.WATER_ANIM_A]
const WATER_BUBBLES_ANIMATION_SPEED = 30;

const WATER_BUBBLES_SEQUENCE2 = [TILES.WATER_ANIM_A1, TILES.WATER_ANIM_A2, TILES.WATER_ANIM_A2, TILES.WATER_ANIM_A1, TILES.WATER_ANIM_A1, TILES.WATER_ANIM_A1, TILES.WATER_ANIM_A, TILES.WATER_ANIM_A, TILES.WATER_ANIM_A, TILES.WATER_ANIM_A]
const WATER_BUBBLES_ANIMATION_SPEED2 = 20;

const WATER_BUBBLES_SEQUENCE3 = [TILES.WATER_ANIM_A, TILES.WATER_ANIM_A1, TILES.WATER_ANIM_A2, TILES.WATER_ANIM_A3, TILES.WATER_ANIM_A4, TILES.WATER_ANIM_A5, TILES.WATER_ANIM_A6, TILES.WATER_ANIM_A7, TILES.WATER_ANIM_A, TILES.WATER_ANIM_A, TILES.WATER_ANIM_A, TILES.WATER_ANIM_A, TILES.WATER_ANIM_A]
const WATER_BUBBLES_ANIMATION_SPEED3 = 20;

const SCREEN_TEXT_SEQUENCE = [TILES.SCREEN_TEXT1, TILES.SCREEN_TEXT2, TILES.SCREEN_TEXT2 ]
const SCREEN_TEXT_ANIMATION_SPEED = 80;

export class LevelAnimatedFrames {
  constructor() {
    this.waterFrames = new PlacementTypeAnimationFrames(
      WATER_SEQUENCE,
      WATER_ANIMATION_SPEED
    );
    this.fireFrames = new PlacementTypeAnimationFrames(
      FIRE_SEQUENCE,
      FIRE_ANIMATION_SPEED
    );
    this.ajFrames = new PlacementTypeAnimationFrames(
      AJ_SEQUENCE,
      AJ_ANIMATION_SPEED
    )
    this.bactaGreenFrames = new PlacementTypeAnimationFrames(
      BACTA_GREEN_SEQUENCE,
      BACTA_ANIMATION_SPEED
    )

    this.bactaPinkFrames = new PlacementTypeAnimationFrames(
      BACTA_PINK_SEQUENCE,
      BACTA_PINK_ANIMATION_SPEED
    )

    this.pipeDrainFrames = new PlacementTypeAnimationFrames(
      PIPE_DRAIN_SEQUENCE,
      PIPE_DRAIN_ANIMATION_SPEED
    )

    this.waterBubblesFrames = new PlacementTypeAnimationFrames(
      WATER_BUBBLES_SEQUENCE,
      WATER_BUBBLES_ANIMATION_SPEED
    )

    this.waterBubblesFrames2 = new PlacementTypeAnimationFrames(
      WATER_BUBBLES_SEQUENCE2,
      WATER_BUBBLES_ANIMATION_SPEED2
    )

    this.waterBubblesFrames3 = new PlacementTypeAnimationFrames(
      WATER_BUBBLES_SEQUENCE3,
      WATER_BUBBLES_ANIMATION_SPEED3
    )

    this.screenTextFrames = new PlacementTypeAnimationFrames(
      SCREEN_TEXT_SEQUENCE,
      SCREEN_TEXT_ANIMATION_SPEED
    )
    
  }

  // Public method for progressing in animation
  tick() {
    this.waterFrames.tick();
    this.fireFrames.tick();
    this.ajFrames.tick();
    this.bactaGreenFrames.tick();
    this.bactaPinkFrames.tick();
    this.pipeDrainFrames.tick();
    this.waterBubblesFrames.tick();
    this.waterBubblesFrames2.tick();
    this.waterBubblesFrames3.tick();
    this.screenTextFrames.tick();
  }

  // Public getters for knowing which frame is current
  get waterFrame() {
    return this.waterFrames.activeFrame;
  }

  get fireFrame() {
    return this.fireFrames.activeFrame;
  }

  get ajFrame(){
    return this.ajFrames.activeFrame;
  }
  get bactaGreenFrame(){
    return this.bactaGreenFrames.activeFrame;
  }
  get bactaPinkFrame(){
    return this.bactaPinkFrames.activeFrame;
  }
  get pipeDrainFrame(){
    return this.pipeDrainFrames.activeFrame;
  }
  get waterBubblesFrame(){
    return this.waterBubblesFrames.activeFrame;
  }
  get waterBubblesFrame2(){
    return this.waterBubblesFrames2.activeFrame;
  }
  get waterBubblesFrame3(){
    return this.waterBubblesFrames3.activeFrame;
  }
  get screenTextFrame(){
    return this.screenTextFrames.activeFrame;
  }
}