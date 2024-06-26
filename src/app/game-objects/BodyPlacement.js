import { Placement } from "./Placement";
 import {
   BODY_SKINS,
   DIRECTION_LEFT,
   DIRECTION_RIGHT,
   directionUpdateMap,
   PLACEMENT_TYPE_CELEBRATION,
   Z_INDEX_LAYER_SIZE,
 } from "../helpers/consts";
 import { Collision } from "../classes/Collision";
 import soundsManager, { SFX } from "../classes/Sounds";

 
 export class BodyPlacement extends Placement {
   getCollisionAtNextPosition(direction) {
     const { x, y } = directionUpdateMap[direction];
     const nextX = this.x + x;
     const nextY = this.y + y;
     return new Collision(this, this.level, {
       x: nextX,
       y: nextY,
     });

   }
 
   getLockAtNextPosition(direction) {
     const collision = this.getCollisionAtNextPosition(direction);
     return collision.withLock();
   }
 
   isSolidAtNextPosition(direction) {
     const collision = this.getCollisionAtNextPosition(direction);
     const isOutOfBounds = this.level.isPositionOutOfBounds(
       collision.x,
       collision.y
     );
     if (isOutOfBounds) {
       return true;
     }
     return Boolean(collision.withSolidPlacement());
   }
 
   updateFacingDirection() {
     if (
       this.movingPixelDirection === DIRECTION_LEFT ||
       this.movingPixelDirection === DIRECTION_RIGHT
     ) {
       this.spriteFacingDirection = this.movingPixelDirection;
     }
   }
 
   updateWalkFrame() {
     this.spriteWalkFrame = this.spriteWalkFrame === 1 ? 0 : 1;
   }
 
   tick() {
     this.tickMovingPixelProgress();
     this.tickAttemptAiMove();
   }
 
   tickMovingPixelProgress() {
     if (this.movingPixelsRemaining === 0) {
       return;
     }
     this.movingPixelsRemaining -= this.travelPixelsPerFrame;
     if (this.movingPixelsRemaining <= 0) {
       this.movingPixelsRemaining = 0;
       this.onDoneMoving();
     }
   }
 
   onDoneMoving() {
     //Update my x/y!
     const { x, y } = directionUpdateMap[this.movingPixelDirection];
     this.x += x;
     this.y += y;
     soundsManager.playSfx(SFX.STEP1);

     this.handleCollisions();
   }
 
   handleCollisions() {
     // handle collisions!
     const collision = new Collision(this, this.level);
 
     this.skin = BODY_SKINS.NORMAL;
     const changesHeroSkin = collision.withChangesHeroSkin();
     if (changesHeroSkin) {
       this.skin = changesHeroSkin.changesHeroSkinOnCollide();
     }
 
     const collideThatAddsToInventory = collision.withPlacementAddsToInventory();
     if (collideThatAddsToInventory) {
       collideThatAddsToInventory.collect();
       this.level.addPlacement({
         type: PLACEMENT_TYPE_CELEBRATION,
         x: this.x,
         y: this.y,
       });
       soundsManager.playSfx(SFX.COLLECT);
     }

     if (collision.withDoorSwitch()) {
      this.level.switchAllDoors();
      soundsManager.playSfx(SFX.OPEN_DOOR);

    }
 
     const takesDamages = collision.withSelfGetsDamaged();
     if (takesDamages) {
       this.level.setDeathOutcome(takesDamages.type);
       soundsManager.playSfx(SFX.WATER_DEATH);
     }
 
     const completesLevel = collision.withCompletesLevel();
     if (completesLevel) {
       this.level.completeLevel();
       soundsManager.playSfx(SFX.WIN);
     }

     const conversationStart = collision.withConversation();
     if(conversationStart) {
      this.level.setConversation(conversationStart.variation);

     }

   }
 
   getYTranslate() {
     // Stand on ground when not moving
     if (this.movingPixelsRemaining === 0 || this.skin !== BODY_SKINS.NORMAL) {
       return 0;
     }
 
     //Elevate ramp up or down at beginning/end of movement
     const PIXELS_FROM_END = 2;
     if (
       this.movingPixelsRemaining < PIXELS_FROM_END ||
       this.movingPixelsRemaining > 16 - PIXELS_FROM_END
     ) {
       return -1;
     }
 
     // Highest in the middle of the movement
     return -2;
   }
 
   zIndex() {
     return this.y * Z_INDEX_LAYER_SIZE;
   }
 }