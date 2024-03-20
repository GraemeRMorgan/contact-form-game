import { Howl } from "howler";
 
 export const SFX = {
   COLLECT: "COLLECT",
   WIN: "WIN",
   WATER_DEATH: "WATER_DEATH",
   OPEN_CHEST: "OPEN_CHEST",
   OPEN_DOOR: "OPEN_DOOR",
   THEME: "THEME",
   CLICK: "CLICK",
   HOVER: "HOVER",
   STEP1: "STEP1",

 };
 
 const SFX_FILES = {
   [SFX.COLLECT]: "/sfx/item.mp3",
   [SFX.WIN]: "/sfx/final_chest.mp3",
   [SFX.WATER_DEATH]: "/sfx/fall_water.mp3",
   [SFX.OPEN_CHEST]: "/sfx/door.mp3",
   [SFX.OPEN_DOOR]: "/sfx/switch.mp3",
   [SFX.THEME]: "/sfx/pixel-river.mp3",
   [SFX.CLICK]: "/sfx/click.mp3",
   [SFX.HOVER]: "/sfx/hover.mp3",
   [SFX.STEP1]: "/sfx/step1.mp3",



 };
 
 export class Sounds {
   constructor(type) {
     this.howls = {};
     this.sfxVolume = 0.2;
     this.footVolume = 0.1;
     this.musicVolume = 0.3;
     this.type = type;

   }
 
   init() {
     Object.keys(SFX_FILES).forEach((key) => {
       const file = SFX_FILES[key];
       this.howls[key] = new Howl({
         src: [file],
       });
     });
   }
 
   playSfx(key) {
     // Reference our sound in memory
     const howl = this.howls[key];
 
     // Play it with current volume setting
     howl.volume(this.sfxVolume);
     howl.play();
   }

   stopSfx(key){
    //Reference
    const howl = this.howls[key];
    // Stop current sound
    howl.stop();
   }

   mute(key){
    const howl = this.howls[key];
    howl.onMute();
   }
 }
 
 const soundsManager = new Sounds();
 
 export default soundsManager;