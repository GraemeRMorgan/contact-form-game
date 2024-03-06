import { Placement } from './Placement';
import Hero from '../components/object-graphics/Hero';
import { DIRECTION_RIGHT, directionUpdateMap } from '../helpers/consts';

export class HeroPlacement extends Placement {

    

    controllerMoveRequested(direction){
        // Attempt to start moving

        // This if is specific to grid based movement. Otherwise you'll end up off of the map.
        if(this.movingPixelsRemaining > 0){
            return;
        }
        // Start the move
        this.movingPixelsRemaining = 16;
        this.movingPixelDirection = direction;
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

    onDoneMoving(){
        const {x, y} = directionUpdateMap[this.movingPixelDirection];
        this.x += x;
        this.y += y;
    }

    renderComponent() {
        return <Hero />
    }
}
