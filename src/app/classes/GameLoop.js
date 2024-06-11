/**
 * This file runs the main game loop and ensures that the game plays at the 
 * same frame rate on all machines.
 */
import soundsManager, { SFX } from "../classes/Sounds";


export class GameLoop {
  constructor(onStep) {
    this.onStep = onStep;
    this.rafCallback = null;
    this.hasStopped = false;
    this.start();
  }

  start() {
    let previousMs;
    const step = 1 / 60;
    const tick = (timestampMs) => {
      if (this.hasStopped) {
        return;
      }
      if (previousMs === undefined) {
        previousMs = timestampMs;
      }
      let delta = (timestampMs - previousMs) / 1000;
      while (delta >= step) {
        this.onStep();
        delta -= step;
      }
      previousMs = timestampMs - delta * 1000;
      //Recapture the callback to be able to shut it off
      this.rafCallback = requestAnimationFrame(tick);
    };

    // Initial kickoff
    this.rafCallback = requestAnimationFrame(tick);
    // Play some tracks
    // soundsManager.playSfx(SFX.THEME);
  }

  stop() {
    this.hasStopped = true;
    cancelAnimationFrame(this.rafCallback);
    // Play some tracks
    soundsManager.stopSfx(SFX.THEME);
  }
}
