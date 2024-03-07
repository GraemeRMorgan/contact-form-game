import { CelebrationPlacement } from "../game-objects/CelebrationPlacement";
import { WallPlacement } from "../game-objects/WallPlacement";
const { GoalPlacement } = require("../game-objects/GoalPlacement");
const { HeroPlacement } = require("../game-objects/HeroPlacement");
const { FlourPlacement } = require("../game-objects/FlourPlacement");
const { PLACEMENT_TYPE_HERO, PLACEMENT_TYPE_GOAL, PLACEMENT_TYPE_WALL, PLACEMENT_TYPE_FLOUR, PLACEMENT_TYPE_CELEBRATION } = require("../helpers/consts");

const placementTypeClassMap = {
    [PLACEMENT_TYPE_HERO]: HeroPlacement,
    [PLACEMENT_TYPE_GOAL]: GoalPlacement,
    [PLACEMENT_TYPE_WALL]: WallPlacement,
    [PLACEMENT_TYPE_FLOUR]: FlourPlacement,
    [PLACEMENT_TYPE_CELEBRATION]: CelebrationPlacement,
};

class PlacementFactory {
    createPlacement(config, level) {
        const placementClass = placementTypeClassMap[config.type];
        if (!placementClass) {
            console.warn("NO TYPE FOUND", config.type);
        }
        // Generate a new instance with random ID
        const instance = new placementClass(config, level);
        instance.id = Math.floor(Math.random() * 9999999) + 1;
        return instance;
    }
}

export const placementFactory = new PlacementFactory();