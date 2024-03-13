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
  PLACEMENT_TYPE_LEFT,
  PLACEMENT_TYPE_RIGHT,
  WATER_TYPES,
  PLACEMENT_TYPE_CARPET,
  PLACEMENT_TYPE_TREASURE,
  PLACEMENT_TYPE_SETDRESSING,
  PLACEMENT_TYPE_COLLIDER,
  PLACEMENT_TYPE_FLOOR,
} from "../helpers/consts";

import { waterArea } from "./WaterArea";

const level = {
  theme: LEVEL_THEMES.BLUE,
  tilesWidth: 20,
  tilesHeight: 30,
  placements: [
    

    /**
     * ROOM 1
     */
    { x: 6, y: 4, type: PLACEMENT_TYPE_WALL, variation: "WALL_INT_HOR" },
    { x: 7, y: 4, type: PLACEMENT_TYPE_WALL, variation: "WALL_INT_HOR" },
    { x: 8, y: 4, type: PLACEMENT_TYPE_WALL, variation: "WALL_INT_HOR" },
    {
      x: 9,
      y: 4,
      type: PLACEMENT_TYPE_WALL,
      variation: "WALL_ORANGE_DOOR_LEFT",
    },
    { x: 10, y: 4, type: PLACEMENT_TYPE_LOCK, color: "ORANGE" },
    {
      x: 11,
      y: 4,
      type: PLACEMENT_TYPE_WALL,
      variation: "WALL_ORANGE_DOOR_RIGHT",
    },
    { x: 12, y: 4, type: PLACEMENT_TYPE_WALL, variation: "WALL_INT_HOR" },
    { x: 13, y: 4, type: PLACEMENT_TYPE_WALL, variation: "WALL_INT_HOR" },
    { x: 14, y: 4, type: PLACEMENT_TYPE_WALL, variation: "WALL_INT_HOR" },
    // Lower Wall
    { x: 6, y: 10, type: PLACEMENT_TYPE_WALL, variation: "WALL_INT_HOR" },
    { x: 7, y: 10, type: PLACEMENT_TYPE_WALL, variation: "WALL_INT_HOR" },
    { x: 8, y: 10, type: PLACEMENT_TYPE_WALL, variation: "WALL_INT_HOR" },
    { x: 9, y: 10, type: PLACEMENT_TYPE_WALL, variation: "WALL_INT_HOR" },
    { x: 10, y: 10, type: PLACEMENT_TYPE_WALL, variation: "WALL_INT_HOR" },
    { x: 11, y: 10, type: PLACEMENT_TYPE_WALL, variation: "WALL_INT_HOR" },
    { x: 12, y: 10, type: PLACEMENT_TYPE_WALL, variation: "WALL_INT_HOR" },
    { x: 13, y: 10, type: PLACEMENT_TYPE_WALL, variation: "WALL_INT_HOR" },
    { x: 14, y: 10, type: PLACEMENT_TYPE_WALL, variation: "WALL_INT_HOR" },



    /**
     * TREASURE ROOM
     */

  



    /**
     * MASK ROOM
     */

    { x: 15, y: 0, type: PLACEMENT_TYPE_WALL, variation: "WALL_INT_VERT" },
    { x: 15, y: 1, type: PLACEMENT_TYPE_WALL, variation: "WALL_INT_VERT" },
    { x: 15, y: 2, type: PLACEMENT_TYPE_WALL, variation: "WALL_INT_VERT" },
    { x: 15, y: 3, type: PLACEMENT_TYPE_WALL, variation: "WALL_INT_VERT" },
    { x: 15, y: 4, type: PLACEMENT_TYPE_WALL, variation: "WALL_INT_VERT" },
    { x: 15, y: 5, type: PLACEMENT_TYPE_WALL, variation: "WALL_INT_VERT" },
    {
      x: 15,
      y: 6,
      type: PLACEMENT_TYPE_WALL,
      variation: "WALL_INT_VERT_B_END",
    },
    {
      x: 15,
      y: 8,
      type: PLACEMENT_TYPE_WALL,
      variation: "WALL_INT_VERT_T_END",
    },
    { x: 15, y: 9, type: PLACEMENT_TYPE_WALL, variation: "WALL_INT_VERT" },
    { x: 15, y: 10, type: PLACEMENT_TYPE_WALL, variation: "WALL_INT_BL" },

    { x: 20, y: 4, type: PLACEMENT_TYPE_WALL, variation: "WALL_HORIZONTAL" },
    { x: 19, y: 4, type: PLACEMENT_TYPE_WALL, variation: "WALL_HORIZONTAL" },
    { x: 17, y: 4, type: PLACEMENT_TYPE_WALL, variation: "WALL_HORIZONTAL" },
    { x: 16, y: 4, type: PLACEMENT_TYPE_WALL, variation: "WALL_HORIZONTAL" },
    // Mask Room Floor Tiles
    // { x: 16, y: 3, type: PLACEMENT_TYPE_FLOOR, variation: "FLOOR_DARK" },
    // { x: 17, y: 3, type: PLACEMENT_TYPE_FLOOR, variation: "FLOOR_RED" },
    // { x: 18, y: 3, type: PLACEMENT_TYPE_FLOOR, variation: "FLOOR_CLEAN" },
    // { x: 19, y: 3, type: PLACEMENT_TYPE_FLOOR, variation: "FLOOR_DIRTY" },
    // { x: 20, y: 3, type: PLACEMENT_TYPE_FLOOR, variation: "FLOOR_WARNING2" },
    { x: 16, y: 5, type: PLACEMENT_TYPE_FLOOR, variation: "FLOOR_WARNING1" },
    { x: 17, y: 5, type: PLACEMENT_TYPE_FLOOR, variation: "FLOOR_WARNING2" },
    { x: 18, y: 5, type: PLACEMENT_TYPE_FLOOR, variation: "FLOOR_WARNING3" },
    { x: 19, y: 5, type: PLACEMENT_TYPE_FLOOR, variation: "FLOOR_WARNING1" },
    { x: 20, y: 5, type: PLACEMENT_TYPE_FLOOR, variation: "FLOOR_WARNING2" },


    /**
     * WATER ROOM
     */
    // Walls
    { x: 5, y: 0, type: PLACEMENT_TYPE_WALL, variation: "WALL_INT_VERT" },
    { x: 5, y: 1, type: PLACEMENT_TYPE_WALL, variation: "WALL_INT_VERT" },
    { x: 5, y: 2, type: PLACEMENT_TYPE_WALL, variation: "WALL_INT_VERT" },
    { x: 5, y: 3, type: PLACEMENT_TYPE_WALL, variation: "WALL_INT_VERT" },
    { x: 5, y: 4, type: PLACEMENT_TYPE_WALL, variation: "WALL_INT_VERT" },
    { x: 5, y: 5, type: PLACEMENT_TYPE_WALL, variation: "WALL_INT_VERT" },
    { x: 5, y: 6, type: PLACEMENT_TYPE_WALL, variation: "WALL_INT_VERT" },
    { x: 5, y: 7, type: PLACEMENT_TYPE_WALL, variation: "WALL_INT_VERT" },
    { x: 5, y: 8, type: PLACEMENT_TYPE_WALL, variation: "WALL_INT_VERT" },
    { x: 5, y: 9, type: PLACEMENT_TYPE_WALL, variation: "WALL_INT_VERT" },
    { x: 5, y: 10, type: PLACEMENT_TYPE_WALL, variation: "WALL_INT_VERT" },
    { x: 5, y: 11, type: PLACEMENT_TYPE_WALL, variation: "WALL_INT_VERT" },
    { x: 5, y: 12, type: PLACEMENT_TYPE_WALL, variation: "WALL_INT_VERT" },
    { x: 5, y: 13, type: PLACEMENT_TYPE_WALL, variation: "WALL_INT_VERT" },
    { x: 5, y: 14, type: PLACEMENT_TYPE_WALL, variation: "WALL_INT_VERT" },
    { x: 5, y: 15, type: PLACEMENT_TYPE_WALL, variation: "WALL_INT_BR" },
    { x: 6, y: 15, type: PLACEMENT_TYPE_WALL, variation: "WALL_INT_HOR_END_L" },
    { x: 8, y: 15, type: PLACEMENT_TYPE_WALL, variation: "WALL_INT_HOR_END_R" },
    // Floor
    { x: 1, y: 13, type: PLACEMENT_TYPE_FLOOR, variation: "FLOOR_WARNING1" },
    { x: 2, y: 13, type: PLACEMENT_TYPE_FLOOR, variation: "FLOOR_WARNING2" },
    { x: 3, y: 13, type: PLACEMENT_TYPE_FLOOR, variation: "FLOOR_WARNING3" },
    { x: 4, y: 13, type: PLACEMENT_TYPE_FLOOR, variation: "FLOOR_WARNING1" },



    // Mind Control Room
    { x: 9, y: 14, type: PLACEMENT_TYPE_WALL, variation: "WALL_END_TOP" },
    { x: 10, y: 14, type: PLACEMENT_TYPE_WALL, variation: "WALL_HORIZONTAL" },
    { x: 11, y: 14, type: PLACEMENT_TYPE_WALL, variation: "WALL_HORIZONTAL" },
    { x: 12, y: 14, type: PLACEMENT_TYPE_WALL, variation: "WALL_HORIZONTAL" },
    { x: 13, y: 14, type: PLACEMENT_TYPE_WALL, variation: "WALL_HORIZONTAL" },
    { x: 14, y: 14, type: PLACEMENT_TYPE_WALL, variation: "WALL_HORIZONTAL" },
    { x: 15, y: 14, type: PLACEMENT_TYPE_WALL, variation: "WALL_HORIZONTAL" },
    { x: 9, y: 15, type: PLACEMENT_TYPE_WALL, variation: "WALL_VERTICAL" },
    { x: 9, y: 16, type: PLACEMENT_TYPE_WALL, variation: "WALL_VERTICAL" },
    { x: 9, y: 17, type: PLACEMENT_TYPE_WALL, variation: "WALL_VERTICAL" },
    { x: 9, y: 18, type: PLACEMENT_TYPE_WALL, variation: "WALL_VERTICAL" },
    { x: 9, y: 19, type: PLACEMENT_TYPE_WALL, variation: "WALL_LEFT_CORNER" },
    { x: 15, y: 14, type: PLACEMENT_TYPE_WALL, variation: "WALL_END_TOP" },
    { x: 15, y: 15, type: PLACEMENT_TYPE_WALL, variation: "WALL_VERTICAL" },
    { x: 15, y: 16, type: PLACEMENT_TYPE_WALL, variation: "WALL_VERTICAL" },
    { x: 15, y: 17, type: PLACEMENT_TYPE_WALL, variation: "WALL_VERTICAL" },
    { x: 15, y: 18, type: PLACEMENT_TYPE_WALL, variation: "WALL_VERTICAL" },
    { x: 15, y: 19, type: PLACEMENT_TYPE_WALL, variation: "WALL_VERTICAL" },
    { x: 15, y: 19, type: PLACEMENT_TYPE_WALL, variation: "WALL_RIGHT_CORNER" },
    { x: 14, y: 19, type: PLACEMENT_TYPE_WALL, variation: "WALL_HORIZONTAL" },
    { x: 13, y: 19, type: PLACEMENT_TYPE_WALL, variation: "WALL_HORIZONTAL" },
    { x: 12, y: 19, type: PLACEMENT_TYPE_LOCK, color: "ORANGE"},
    { x: 11, y: 19, type: PLACEMENT_TYPE_WALL, variation: "WALL_HORIZONTAL" },
    { x: 10, y: 19, type: PLACEMENT_TYPE_WALL, variation: "WALL_HORIZONTAL" },

    // Wall closing off access to water
    { x: 9, y: 19, type: PLACEMENT_TYPE_WALL, variation: "WALL_HORIZONTAL" },
    { x: 8, y: 19, type: PLACEMENT_TYPE_WALL, variation: "WALL_HORIZONTAL" },
    { x: 7, y: 19, type: PLACEMENT_TYPE_WALL, variation: "WALL_HORIZONTAL" },
    { x: 6, y: 19, type: PLACEMENT_TYPE_WALL, variation: "WALL_HORIZONTAL" },
    { x: 5, y: 19, type: PLACEMENT_TYPE_WALL, variation: "WALL_HORIZONTAL" },
    { x: 4, y: 19, type: PLACEMENT_TYPE_WALL, variation: "WALL_HORIZONTAL" },
    { x: 3, y: 19, type: PLACEMENT_TYPE_WALL, variation: "WALL_HORIZONTAL" },
    { x: 2, y: 19, type: PLACEMENT_TYPE_WALL, variation: "WALL_HORIZONTAL" },
    { x: 1, y: 19, type: PLACEMENT_TYPE_WALL, variation: "WALL_HORIZONTAL" },

    //Wall separating jail area
    { x: 1, y: 23, type: PLACEMENT_TYPE_WALL, variation: "WALL_HORIZONTAL" },
    { x: 2, y: 23, type: PLACEMENT_TYPE_WALL, variation: "WALL_HORIZONTAL" },
    { x: 3, y: 23, type: PLACEMENT_TYPE_WALL, variation: "WALL_HORIZONTAL" },
    { x: 4, y: 23, type: PLACEMENT_TYPE_WALL, variation: "WALL_HORIZONTAL" },
    { x: 5, y: 23, type: PLACEMENT_TYPE_WALL, variation: "WALL_HORIZONTAL" },
    { x: 6, y: 23, type: PLACEMENT_TYPE_WALL, variation: "WALL_HORIZONTAL" },
    { x: 7, y: 23, type: PLACEMENT_TYPE_WALL, variation: "WALL_HORIZONTAL" },
    { x: 8, y: 23, type: PLACEMENT_TYPE_WALL, variation: "WALL_HORIZONTAL" },
    { x: 9, y: 23, type: PLACEMENT_TYPE_WALL, variation: "WALL_HORIZONTAL" },
    { x: 10, y: 23, type: PLACEMENT_TYPE_WALL, variation: "WALL_HORIZONTAL" },
    { x: 11, y: 23, type: PLACEMENT_TYPE_WALL, variation: "WALL_HORIZONTAL" },
    { x: 12, y: 23, type: PLACEMENT_TYPE_WALL, variation: "WALL_HORIZONTAL" },
    { x: 13, y: 23, type: PLACEMENT_TYPE_WALL, variation: "WALL_HORIZONTAL" },
    { x: 14, y: 23, type: PLACEMENT_TYPE_WALL, variation: "WALL_HORIZONTAL" },
    { x: 15, y: 23, type: PLACEMENT_TYPE_WALL, variation: "WALL_HORIZONTAL" },

    // Jail Area
    { x: 1, y: 27, type: PLACEMENT_TYPE_WALL, variation: "WALL_HORIZONTAL" },
    { x: 2, y: 27, type: PLACEMENT_TYPE_WALL, variation: "WALL_HORIZONTAL" },
    { x: 3, y: 27, type: PLACEMENT_TYPE_WALL, variation: "WALL_HORIZONTAL" },
    { x: 4, y: 27, type: PLACEMENT_TYPE_WALL, variation: "WALL_HORIZONTAL" },
    { x: 5, y: 27, type: PLACEMENT_TYPE_WALL, variation: "WALL_HORIZONTAL" },
    { x: 6, y: 27, type: PLACEMENT_TYPE_WALL, variation: "WALL_HORIZONTAL" },
    { x: 7, y: 27, type: PLACEMENT_TYPE_WALL, variation: "WALL_HORIZONTAL" },
    { x: 8, y: 27, type: PLACEMENT_TYPE_WALL, variation: "WALL_HORIZONTAL" },
    { x: 9, y: 27, type: PLACEMENT_TYPE_WALL, variation: "WALL_HORIZONTAL" },
    { x: 10, y: 27, type: PLACEMENT_TYPE_WALL, variation: "WALL_HORIZONTAL" },
    { x: 11, y: 27, type: PLACEMENT_TYPE_WALL, variation: "WALL_HORIZONTAL" },
    { x: 12, y: 27, type: PLACEMENT_TYPE_WALL, variation: "WALL_HORIZONTAL" },
    { x: 13, y: 27, type: PLACEMENT_TYPE_WALL, variation: "WALL_HORIZONTAL" },
    { x: 14, y: 27, type: PLACEMENT_TYPE_WALL, variation: "WALL_HORIZONTAL" },
    { x: 15, y: 27, type: PLACEMENT_TYPE_WALL, variation: "WALL_HORIZONTAL" },
    { x: 16, y: 27, type: PLACEMENT_TYPE_WALL, variation: "WALL_HORIZONTAL" },
    { x: 17, y: 27, type: PLACEMENT_TYPE_WALL, variation: "WALL_HORIZONTAL" },
    { x: 18, y: 27, type: PLACEMENT_TYPE_WALL, variation: "WALL_HORIZONTAL" },
    { x: 19, y: 27, type: PLACEMENT_TYPE_WALL, variation: "WALL_HORIZONTAL" },
    { x: 20, y: 27, type: PLACEMENT_TYPE_WALL, variation: "WALL_HORIZONTAL" },

    // AJ Cell

    // Middle Cell

    // Guard Lounge

    // Water

    { x: 4, y: 4, type: PLACEMENT_TYPE_WATER, color: "TOP_RIGHT" },
    { x: 4, y: 5, type: PLACEMENT_TYPE_WATER, color: "FLAT_RIGHT1" },
    { x: 4, y: 6, type: PLACEMENT_TYPE_WATER, color: "FLAT_RIGHT1" },
    { x: 4, y: 7, type: PLACEMENT_TYPE_WATER, color: "FLAT_RIGHT1" },
    { x: 4, y: 8, type: PLACEMENT_TYPE_WATER, color: "FLAT_RIGHT1" },
    { x: 4, y: 9, type: PLACEMENT_TYPE_WATER, color: "FLAT_RIGHT1" },
    { x: 4, y: 10, type: PLACEMENT_TYPE_WATER, color: "FLAT_RIGHT1" },
    { x: 4, y: 11, type: PLACEMENT_TYPE_WATER, color: "FLAT_RIGHT1" },
    { x: 4, y: 12, type: PLACEMENT_TYPE_WATER, color: "FLAT_RIGHT1" },

    { x: 3, y: 4, type: PLACEMENT_TYPE_WATER, color: "WATER_TOP1" },
    { x: 3, y: 5, type: PLACEMENT_TYPE_WATER, color: "WATER_PLAIN" },
    { x: 3, y: 6, type: PLACEMENT_TYPE_WATER, color: "WATER_PLAIN" },
    { x: 3, y: 7, type: PLACEMENT_TYPE_WATER, color: "WATER_PLAIN" },
    { x: 3, y: 8, type: PLACEMENT_TYPE_WATER, color: "WATER_PLAIN" },
    { x: 3, y: 9, type: PLACEMENT_TYPE_WATER, color: "WATER_PLAIN" },
    { x: 3, y: 10, type: PLACEMENT_TYPE_WATER, color: "WATER_PLAIN" },
    { x: 3, y: 11, type: PLACEMENT_TYPE_WATER, color: "WATER_PLAIN" },
    { x: 3, y: 12, type: PLACEMENT_TYPE_WATER, color: "WATER_PLAIN" },

    { x: 2, y: 4, type: PLACEMENT_TYPE_WATER, color: "WATER_TOP1" },
    { x: 2, y: 5, type: PLACEMENT_TYPE_WATER, color: "WATER_PLAIN" },
    { x: 2, y: 6, type: PLACEMENT_TYPE_WATER, color: "WATER_PLAIN" },
    { x: 2, y: 7, type: PLACEMENT_TYPE_WATER, color: "WATER_PLAIN" },
    { x: 2, y: 8, type: PLACEMENT_TYPE_WATER, color: "WATER_PLAIN" },
    { x: 2, y: 9, type: PLACEMENT_TYPE_WATER, color: "WATER_PLAIN" },
    { x: 2, y: 10, type: PLACEMENT_TYPE_WATER, color: "WATER_PLAIN" },
    { x: 2, y: 11, type: PLACEMENT_TYPE_WATER, color: "WATER_PLAIN" },
    { x: 2, y: 12, type: PLACEMENT_TYPE_WATER, color: "WATER_BOTTOM" },

    { x: 1, y: 4, type: PLACEMENT_TYPE_WATER, color: "TOP_LEFT" },
    { x: 1, y: 5, type: PLACEMENT_TYPE_WATER, color: "FLAT_LEFT1" },
    { x: 1, y: 6, type: PLACEMENT_TYPE_WATER, color: "FLAT_LEFT1" },
    { x: 1, y: 7, type: PLACEMENT_TYPE_WATER, color: "FLAT_LEFT1" },
    { x: 1, y: 8, type: PLACEMENT_TYPE_WATER, color: "FLAT_LEFT1" },
    { x: 1, y: 9, type: PLACEMENT_TYPE_WATER, color: "FLAT_LEFT1" },
    { x: 1, y: 10, type: PLACEMENT_TYPE_WATER, color: "FLAT_LEFT1" },
    { x: 1, y: 10, type: PLACEMENT_TYPE_WATER, color: "FLAT_LEFT1" },
    { x: 1, y: 11, type: PLACEMENT_TYPE_WATER, color: "FLAT_LEFT1" },
    { x: 1, y: 12, type: PLACEMENT_TYPE_WATER, color: "FLAT_LEFT1" },

    /**
     * 
     * 
     * 
     * DECORATIONS
     * 
     * 
     * 
     * 
     */

    /**
     * MAIN ROOM
     */
    { x: 6, y: 4, type: PLACEMENT_TYPE_SETDRESSING, variation: "TABLE_HOR" },
    { x: 12, y: 4, type: PLACEMENT_TYPE_SETDRESSING, variation: "WALL_CHART_LARGE" },
    /**
     * HALLWAY BELOW MAIN ROOM
     */
    { x: 8, y: 10, type: PLACEMENT_TYPE_SETDRESSING, variation: "WALL_CHART_SMALL1" },
    { x: 9, y: 10, type: PLACEMENT_TYPE_SETDRESSING, variation: "WALL_CHART_SMALL1" },
    

    /**
     * MASK ROOM
     */
    // Water Pickup
    { x: 16, y: 0, type: PLACEMENT_TYPE_SETDRESSING, variation: "BOOK_SHELF" },
    { x: 19, y: 0, type: PLACEMENT_TYPE_SETDRESSING, variation: "BOOK_SHELF" },
    { x: 16, y: 1, type: PLACEMENT_TYPE_COLLIDER},
    { x: 17, y: 1, type: PLACEMENT_TYPE_COLLIDER},
    { x: 19, y: 1, type: PLACEMENT_TYPE_COLLIDER},
    { x: 20, y: 1, type: PLACEMENT_TYPE_COLLIDER},
    { x: 18, y: 2, type: PLACEMENT_TYPE_WATER_PICKUP },
    { x: 20, y: 6, type: PLACEMENT_TYPE_SETDRESSING, variation: "TABLE_VERT" },

    /**
     * MIND CONTROL ROOM
     */
    { x: 10, y: 14, type: PLACEMENT_TYPE_SETDRESSING, variation: "TIGHE_BED" },
    { x: 14, y: 14, type: PLACEMENT_TYPE_SETDRESSING, variation: "BACTA_TANK_PINK_TR" },
    { x: 10, y: 14, type: PLACEMENT_TYPE_SETDRESSING, variation: "BACTA_TANK_GREEN_TL" },
    { x: 10, y: 16, type: PLACEMENT_TYPE_SETDRESSING, variation: "TABLE_VERT" },






    /**
     * ACTORS
     */

    // Hero
    { x: 10, y: 10, type: PLACEMENT_TYPE_HERO },
    // Goal
    { x: 10, y: 2, type: PLACEMENT_TYPE_GOAL },

    // Key Placement
    { x: 3, y: 3, type: PLACEMENT_TYPE_KEY, color: "TREASURE" },
    { x: 18, y: 11, type: PLACEMENT_TYPE_KEY, color: "BLUE" },

    // Chest
    { x: 10, y: 2, type: PLACEMENT_TYPE_LOCK, color: "TREASURE" },

    // Lock Placement
    { x: 18, y: 4, type: PLACEMENT_TYPE_LOCK, color: "BLUE" },

    // Wall Switch
    { x: 15, y: 7, type: PLACEMENT_TYPE_SWITCH },

    // Moveable Walls
    { x: 20, y: 9, type: PLACEMENT_TYPE_SWITCH_DOOR, isRaised: false },
    { x: 19, y: 9, type: PLACEMENT_TYPE_SWITCH_DOOR, isRaised: false },
    { x: 18, y: 9, type: PLACEMENT_TYPE_SWITCH_DOOR, isRaised: false },
    { x: 17, y: 9, type: PLACEMENT_TYPE_SWITCH_DOOR, isRaised: false },
    { x: 16, y: 9, type: PLACEMENT_TYPE_SWITCH_DOOR, isRaised: false },

  ],
};

export default level;
