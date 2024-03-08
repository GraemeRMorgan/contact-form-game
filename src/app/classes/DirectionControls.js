
import {
  DIRECTION_UP,
  DIRECTION_DOWN,
  DIRECTION_RIGHT,
  DIRECTION_LEFT,
} from "../helpers/consts";

export class DirectionControls {
  constructor() {
    this.directionKeys = {
      ArrowDown: DIRECTION_DOWN,
      ArrowUp: DIRECTION_UP,
      ArrowLeft: DIRECTION_LEFT,
      ArrowRight: DIRECTION_RIGHT,
      s: DIRECTION_DOWN,
      w: DIRECTION_UP,
      a: DIRECTION_LEFT,
      d: DIRECTION_RIGHT,
    };
    this.heldDirections = [];
    this.touchStartX = 0;
    this.touchStartY = 0;

    this.directionKeyDownHandler = (e) => {
      const dir = this.directionKeys[e.key];
      if (dir && this.heldDirections.indexOf(dir) === -1) {
        this.heldDirections.unshift(dir);
      }
    };

    this.directionKeyUpHandler = (e) => {
      const dir = this.directionKeys[e.key];
      const index = this.heldDirections.indexOf(dir);
      if (index > -1) {
        this.heldDirections.splice(index, 1);
      }
    };

    this.touchStartHandler = (e) => {
      this.touchStartX = e.touches[0].clientX;
      this.touchStartY = e.touches[0].clientY;
    };

    this.touchMoveHandler = (e) => {
      const touchEndX = e.changedTouches[0].clientX;
      const touchEndY = e.changedTouches[0].clientY;
      const diffX = this.touchStartX - touchEndX;
      const diffY = this.touchStartY - touchEndY;

      if (Math.abs(diffX) > Math.abs(diffY)) {
        // Horizontal swipe
        if (diffX > 0) {
          this.heldDirections.unshift(DIRECTION_LEFT);
        } else {
          this.heldDirections.unshift(DIRECTION_RIGHT);
        }
      } else {
        // Vertical swipe
        if (diffY > 0) {
          this.heldDirections.unshift(DIRECTION_UP);
        } else {
          this.heldDirections.unshift(DIRECTION_DOWN);
        }
      }
    };

    this.touchEndHandler = () => {
      this.heldDirections = [];
    };

    document.addEventListener("keydown", this.directionKeyDownHandler);
    document.addEventListener("keyup", this.directionKeyUpHandler);
    document.addEventListener("touchstart", this.touchStartHandler);
    document.addEventListener("touchmove", this.touchMoveHandler);
    document.addEventListener("touchend", this.touchEndHandler);
  }

  get direction() {
    return this.heldDirections[0];
  }

  unbind() {
    document.removeEventListener("keydown", this.directionKeyDownHandler);
    document.removeEventListener("keyup", this.directionKeyUpHandler);
    document.removeEventListener("touchstart", this.touchStartHandler);
    document.removeEventListener("touchmove", this.touchMoveHandler);
    document.removeEventListener("touchend", this.touchEndHandler);
  }
}