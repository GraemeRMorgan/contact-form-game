import { Placement } from './Placement';
import Hero from '../components/object-graphics/Hero';
import { DIRECTION_LEFT, DIRECTION_RIGHT, directionUpdateMap, BODY_SKINS, HERO_RUN_1, HERO_RUN_2 } from '../helpers/consts';
import { TILES } from '../helpers/tiles';
import { Collision } from '../classes/Collision';
const heroSkinMap = {
    [BODY_SKINS.NORMAL]: [TILES.HERO_LEFT, TILES.HERO_RIGHT],
    [HERO_RUN_1]: [TILES.HERO_RUN_1_LEFT, TILES.HERO_RUN_1_RIGHT],
    [HERO_RUN_2]: [TILES.HERO_RUN_2_LEFT, TILES.HERO_RUN_2_RIGHT],
};

export class HeroPlacement extends Placement {



    controllerMoveRequested(direction) {
        // Attempt to start moving

        // This if is specific to grid based movement. Otherwise you'll end up off of the map.
        if (this.movingPixelsRemaining > 0) {
            return;
        }
        // Make sure the next space is available
        const canMove = this.canMoveToNextDestination(direction);
        if (!canMove) {
            return;
        }
        // Start the move
        this.movingPixelsRemaining = 16;
        this.movingPixelDirection = direction;
        this.updateFacingDirection();
        this.updateWalkFrame();
    }

    canMoveToNextDestination(direction) {
        // Is the next space in bournds?
        const { x, y } = directionUpdateMap[direction];
        const nextX = this.x + x;
        const nextY = this.y + y;
        const isOutOfBounds = this.level.isPositionOutOfBounds(nextX, nextY);
        if (isOutOfBounds) {
            return false;
        }
        // Is there a solid thing here?
        const collision = new Collision(this, this.level, {
            x: nextX,
            y: nextY,
        });
        if (collision.withSolidPlacement()) {
            return false;
        }

        // Default to allowing move
        return true;
    }

    updateFacingDirection() {
        if (this.movingPixelDirection === DIRECTION_LEFT || this.movingPixelDirection === DIRECTION_RIGHT) {
            this.spriteFacingDirection = this.movingPixelDirection;
        }
    }

    updateWalkFrame() {
        this.spriteWalkFrame = this.spriteWalkFrame === 1 ? 0 : 1;
    }

    tick() {
        this.tickMovingPixelProgress();
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
        const { x, y } = directionUpdateMap[this.movingPixelDirection];
        this.x += x;
        this.y += y;
    }

    getFrame() {
        // Which frame to use in the walk cycle
        const index = this.spriteFacingDirection == DIRECTION_LEFT ? 0 : 1;

        // Use correct walkeding frame per direction
        if (this.movingPixelsRemaining > 0) {
            const walkKey = this.spriteWalkFrame === 0 ? HERO_RUN_1 : HERO_RUN_2;
            return heroSkinMap[walkKey][index];
        }
        return heroSkinMap[BODY_SKINS.NORMAL][index];
    }

    getYTranslate() {
        // Idle Position
        if (this.movingPixelsRemaining === 0) {
            return 0;
        }
        // Elevate ramp up or down at tail and head of movement. 
        const PIXELS_FROM_END = 2;
        if (this.movingPixelsRemaining < PIXELS_FROM_END || this.movingPixelsRemaining > 16 - PIXELS_FROM_END) {
            return -1;
        }

        // Peak of movement
        return -2;
    }

    renderComponent() {
        return <Hero frameCoord={this.getFrame()} yTranslate={this.getYTranslate()} />
    }
}
