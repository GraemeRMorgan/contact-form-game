

import {
  DIRECTION_RIGHT, CELL_SIZE, DIRECTION_LEFT, DIRECTION_UP, BODY_SKINS,
} from "../helpers/consts";

export class Placement {
  constructor(properties, level) {
    this.id = properties.id;
    this.type = properties.type;
    this.x = properties.x;
    this.y = properties.y;
    this.level = level;

    this.skin = BODY_SKINS.NORMAL;
    this.travelPixelsPerFrame = 1.5;
    this.movingPixelsRemaining = 0;
    this.movingPixelDirection = DIRECTION_RIGHT;
    this.spriteFacingDirection = DIRECTION_RIGHT;
    this.spriteWalkFrame = 0;

    this.hasBeenCollected = false;
    this.laserValue = true;
  }

  tick() { }

  tickAttemptAiMove() {
    return null;
  }

  setLaserValue(value){
    this.laserValue = value;
  }
  getLaserValue(){
    return this.laserValue;
  }

  consoleDeactivated(){
    return this.consoleDeactivated;
  }

  isSolidForBody(_body) {
    return false;
  }

  addsItemToInventoryOnCollide() {
    return null;
  }

  switchesDoorsOnCollide() {
    return null;
  }
  
  damagesBodyOnCollide(_body) {
    return null;
  }

  changesHeroSkinOnCollide() {
    return null;
  }

  completesLevelOnCollide() {
    return false;
  }
  conversationOnCollide(){
    return null;
  }

  

  displayXY() {
    if (this.movingPixelsRemaining > 0) {
      return this.displayMovingXY();
    }
    const x = this.x * CELL_SIZE;
    const y = this.y * CELL_SIZE;
    return [x, y];
  }

  displayMovingXY() {
    const x = this.x * CELL_SIZE;
    const y = this.y * CELL_SIZE;
    const progressPixels = CELL_SIZE - this.movingPixelsRemaining;
    switch (this.movingPixelDirection) {
      case DIRECTION_LEFT:
        return [x - progressPixels, y];
      case DIRECTION_RIGHT:
        return [x + progressPixels, y];
      case DIRECTION_UP:
        return [x, y - progressPixels];
      default:
        return [x, y + progressPixels];
    }
  }

  collect() {
    this.hasBeenCollected = true;
    this.level.inventory.add(this.addsItemToInventoryOnCollide());

  }

  canBeUnlocked() {
    return false;
  }

  zIndex() {


    return 1;

  }

  renderComponent() {
    return null;
  }
}