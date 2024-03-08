import {
  LEVEL_THEMES,
  PLACEMENT_TYPE_FLOUR,
  PLACEMENT_TYPE_GOAL,
  PLACEMENT_TYPE_HERO,
  PLACEMENT_TYPE_WALL,
  PLACEMENT_TYPE_LOCK,
  PLACEMENT_TYPE_KEY,
  PLACEMENT_TYPE_WATER,
  PLACEMENT_TYPE_WATER_PICKUP,
  PLACEMENT_TYPE_GROUND_ENEMY,
  PLACEMENT_TYPE_FLYING_ENEMY,
  PLACEMENT_TYPE_SWITCH_DOOR,
  PLACEMENT_TYPE_SWITCH,
} from "../helpers/consts";

const level = {
  theme: LEVEL_THEMES.GREEN,
  tilesWidth: 9,
  tilesHeight: 8,
  placements: [
    { x: 2, y: 2, type: PLACEMENT_TYPE_HERO },
    // { x: 2, y: 1, type: PLACEMENT_TYPE_GROUND_ENEMY },
    { x: 7, y: 4, type: PLACEMENT_TYPE_GOAL },

    { x: 7, y: 1, type: PLACEMENT_TYPE_SWITCH_DOOR, isRaised: false },
    { x: 4, y: 3, type: PLACEMENT_TYPE_SWITCH_DOOR, isRaised: true },
    { x: 4, y: 1, type: PLACEMENT_TYPE_SWITCH },

    { x: 8, y: 2, type: PLACEMENT_TYPE_WALL },
    { x: 8, y: 1, type: PLACEMENT_TYPE_FLOUR },

    { x: 6, y: 8, type: PLACEMENT_TYPE_WATER_PICKUP },
    { x: 7, y: 8, type: PLACEMENT_TYPE_WATER },
  ],
};

export default level;