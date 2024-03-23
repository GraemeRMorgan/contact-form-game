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
  PLACEMENT_TYPE_LASERS,
  PLACEMENT_TYPE_CONVERSATION,
  PLACEMENT_TYPE_DEATH_COLLIDER,
  PLACEMENT_TYPE_AJ,
  PLACEMENT_TYPE_BACTA,
  PLACEMENT_TYPE_PIPE,
  PLACEMENT_TYPE_LASER_THOUGHT,
  PLACEMENT_TYPE_OOZE_THOUGHT,
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
    { x: 6, y: 4, type: PLACEMENT_TYPE_WALL, variation: "WALL_BLUE_DOOR_LEFT" },
    { x: 8, y: 4, type: PLACEMENT_TYPE_WALL, variation: "WALL_BLUE_DOOR_RIGHT" },
    { x: 9, y: 4,type: PLACEMENT_TYPE_WALL,variation: "WALL_INT_T_BOTTOM",},
    { x: 10, y: 4, type: PLACEMENT_TYPE_WALL, variation: "WALL_INT_HOR_END_L" },
    { x: 11, y: 4, type: PLACEMENT_TYPE_SETDRESSING, variation: "ELEVATOR_DOOR_L" },
    { x: 12, y: 4, type: PLACEMENT_TYPE_SETDRESSING, variation: "ELEVATOR_DOOR_C" },
    { x: 13, y: 4, type: PLACEMENT_TYPE_SETDRESSING, variation: "ELEVATOR_DOOR_R" },
    { x: 14, y: 4, type: PLACEMENT_TYPE_WALL, variation: "WALL_INT_HOR_END_R" },
    { x: 13, y: 4, type: PLACEMENT_TYPE_COLLIDER },
    // Elevator
    { x: 10, y: 3, type: PLACEMENT_TYPE_FLOOR, variation: "FLOOR_RED" },
    { x: 11, y: 3, type: PLACEMENT_TYPE_FLOOR, variation: "FLOOR_RED" },
    { x: 12, y: 3, type: PLACEMENT_TYPE_FLOOR, variation: "FLOOR_RED" },
    { x: 13, y: 3, type: PLACEMENT_TYPE_FLOOR, variation: "FLOOR_RED" },
    { x: 14, y: 3, type: PLACEMENT_TYPE_FLOOR, variation: "FLOOR_RED" },
    { x: 10, y: 2, type: PLACEMENT_TYPE_FLOOR, variation: "FLOOR_RED" },
    { x: 11, y: 2, type: PLACEMENT_TYPE_FLOOR, variation: "FLOOR_RED" },
    { x: 12, y: 2, type: PLACEMENT_TYPE_FLOOR, variation: "FLOOR_RED" },
    { x: 13, y: 2, type: PLACEMENT_TYPE_FLOOR, variation: "FLOOR_RED" },
    { x: 14, y: 2, type: PLACEMENT_TYPE_FLOOR, variation: "FLOOR_RED" },
    { x: 10, y: 1, type: PLACEMENT_TYPE_FLOOR, variation: "FLOOR_RED" },
    { x: 11, y: 1, type: PLACEMENT_TYPE_FLOOR, variation: "FLOOR_RED" },
    { x: 12, y: 1, type: PLACEMENT_TYPE_FLOOR, variation: "FLOOR_RED" },
    { x: 13, y: 1, type: PLACEMENT_TYPE_FLOOR, variation: "FLOOR_RED" },
    { x: 14, y: 1, type: PLACEMENT_TYPE_FLOOR, variation: "FLOOR_RED" },


    { x: 9, y: 3, type: PLACEMENT_TYPE_WALL, variation: "WALL_INT_VERT" },
    { x: 9, y: 2, type: PLACEMENT_TYPE_WALL, variation: "WALL_INT_VERT" },
    { x: 9, y: 1, type: PLACEMENT_TYPE_WALL, variation: "WALL_INT_VERT" },
    { x: 9, y: 0, type: PLACEMENT_TYPE_WALL, variation: "WALL_INT_VERT" },
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
    { x: 15, y: 4, type: PLACEMENT_TYPE_WALL, variation: "WALL_INT_T_L" },
    { x: 15, y: 5, type: PLACEMENT_TYPE_WALL, variation: "WALL_INT_VERT" },
    {x: 15, y: 6,type: PLACEMENT_TYPE_WALL,variation: "WALL_INT_VERT_B_END",},
    {x: 15, y: 8,type: PLACEMENT_TYPE_WALL,variation: "WALL_INT_VERT_T_END",},
    { x: 15, y: 9, type: PLACEMENT_TYPE_WALL, variation: "WALL_INT_VERT" },
    { x: 15, y: 10, type: PLACEMENT_TYPE_WALL, variation: "WALL_INT_BL" },

    { x: 20, y: 4, type: PLACEMENT_TYPE_WALL, variation: "WALL_INT_HOR" },
    { x: 19, y: 4, type: PLACEMENT_TYPE_WALL, variation: "WALL_ORANGE_DOOR_RIGHT" },
    { x: 17, y: 4, type: PLACEMENT_TYPE_WALL, variation: "WALL_ORANGE_DOOR_LEFT" },
    { x: 16, y: 4, type: PLACEMENT_TYPE_WALL, variation: "WALL_INT_HOR" },
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
    { x: 5, y: 4, type: PLACEMENT_TYPE_WALL, variation: "WALL_INT_T_R" },
    { x: 5, y: 5, type: PLACEMENT_TYPE_WALL, variation: "WALL_INT_VERT" },
    { x: 5, y: 6, type: PLACEMENT_TYPE_WALL, variation: "WALL_INT_VERT" },
    { x: 5, y: 7, type: PLACEMENT_TYPE_WALL, variation: "WALL_INT_VERT" },
    { x: 5, y: 8, type: PLACEMENT_TYPE_WALL, variation: "WALL_INT_VERT" },
    { x: 5, y: 9, type: PLACEMENT_TYPE_WALL, variation: "WALL_INT_VERT" },
    { x: 5, y: 10, type: PLACEMENT_TYPE_WALL, variation: "WALL_INT_T_R" },
    { x: 5, y: 11, type: PLACEMENT_TYPE_WALL, variation: "WALL_INT_VERT" },
    { x: 5, y: 12, type: PLACEMENT_TYPE_WALL, variation: "WALL_INT_VERT" },
    { x: 5, y: 13, type: PLACEMENT_TYPE_WALL, variation: "WALL_INT_VERT" },
    { x: 5, y: 14, type: PLACEMENT_TYPE_WALL, variation: "WALL_INT_VERT" },
    { x: 5, y: 15, type: PLACEMENT_TYPE_WALL, variation: "WALL_INT_BR" },
    { x: 6, y: 15, type: PLACEMENT_TYPE_WALL, variation: "WALL_INT_HOR_END_L" },
    { x: 8, y: 15, type: PLACEMENT_TYPE_WALL, variation: "WALL_INT_HOR_END_R" },
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
    // Floor
    { x: 1, y: 13, type: PLACEMENT_TYPE_FLOOR, variation: "FLOOR_WARNING1" },
    { x: 2, y: 13, type: PLACEMENT_TYPE_FLOOR, variation: "FLOOR_WARNING2" },
    { x: 3, y: 13, type: PLACEMENT_TYPE_FLOOR, variation: "FLOOR_WARNING3" },
    { x: 4, y: 13, type: PLACEMENT_TYPE_FLOOR, variation: "FLOOR_WARNING1" },

    /**
     * MIND CONTROL ROOM
     */
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
    { x: 9, y: 19, type: PLACEMENT_TYPE_WALL, variation: "WALL_INT_HOR_END_R" },
    { x: 15, y: 14, type: PLACEMENT_TYPE_WALL, variation: "WALL_END_TOP" },
    { x: 15, y: 15, type: PLACEMENT_TYPE_WALL, variation: "WALL_VERTICAL" },
    { x: 15, y: 16, type: PLACEMENT_TYPE_WALL, variation: "WALL_VERTICAL" },
    { x: 15, y: 17, type: PLACEMENT_TYPE_WALL, variation: "WALL_VERTICAL" },
    { x: 15, y: 18, type: PLACEMENT_TYPE_WALL, variation: "WALL_VERTICAL" },
    { x: 15, y: 19, type: PLACEMENT_TYPE_WALL, variation: "WALL_VERTICAL" },
    { x: 15, y: 19, type: PLACEMENT_TYPE_WALL, variation: "WALL_INT_HOR_END_L" },
    { x: 14, y: 19, type: PLACEMENT_TYPE_WALL, variation: "WALL_INT_HOR" },
    { x: 13, y: 19, type: PLACEMENT_TYPE_WALL, variation: "WALL_BLUE_DOOR_RIGHT" },
    { x: 11, y: 19, type: PLACEMENT_TYPE_WALL, variation: "WALL_BLUE_DOOR_LEFT" },
    { x: 10, y: 19, type: PLACEMENT_TYPE_WALL, variation: "WALL_INT_HOR" },
    // Floor
    { x: 10, y: 15, type: PLACEMENT_TYPE_FLOOR, variation: "FLOOR_CLEAN" },
    { x: 11, y: 15, type: PLACEMENT_TYPE_FLOOR, variation: "FLOOR_CLEAN" },
    { x: 12, y: 15, type: PLACEMENT_TYPE_FLOOR, variation: "FLOOR_CLEAN" },
    { x: 13, y: 15, type: PLACEMENT_TYPE_FLOOR, variation: "FLOOR_CLEAN" },
    { x: 14, y: 15, type: PLACEMENT_TYPE_FLOOR, variation: "FLOOR_CLEAN" },
    { x: 10, y: 16, type: PLACEMENT_TYPE_FLOOR, variation: "FLOOR_CLEAN" },
    { x: 11, y: 16, type: PLACEMENT_TYPE_FLOOR, variation: "FLOOR_CLEAN" },
    { x: 12, y: 16, type: PLACEMENT_TYPE_FLOOR, variation: "FLOOR_CLEAN" },
    { x: 13, y: 16, type: PLACEMENT_TYPE_FLOOR, variation: "FLOOR_CLEAN" },
    { x: 14, y: 16, type: PLACEMENT_TYPE_FLOOR, variation: "FLOOR_CLEAN" },
    { x: 10, y: 17, type: PLACEMENT_TYPE_FLOOR, variation: "FLOOR_CLEAN" },
    { x: 11, y: 17, type: PLACEMENT_TYPE_FLOOR, variation: "FLOOR_CLEAN" },
    { x: 12, y: 17, type: PLACEMENT_TYPE_FLOOR, variation: "FLOOR_CLEAN" },
    { x: 13, y: 17, type: PLACEMENT_TYPE_FLOOR, variation: "FLOOR_CLEAN" },
    { x: 14, y: 17, type: PLACEMENT_TYPE_FLOOR, variation: "FLOOR_CLEAN" },
    { x: 10, y: 18, type: PLACEMENT_TYPE_FLOOR, variation: "FLOOR_CLEAN" },
    { x: 11, y: 18, type: PLACEMENT_TYPE_FLOOR, variation: "FLOOR_CLEAN" },
    { x: 12, y: 18, type: PLACEMENT_TYPE_FLOOR, variation: "FLOOR_CLEAN" },
    { x: 13, y: 18, type: PLACEMENT_TYPE_FLOOR, variation: "FLOOR_CLEAN" },
    { x: 14, y: 18, type: PLACEMENT_TYPE_FLOOR, variation: "FLOOR_CLEAN" },
    { x: 12, y: 19, type: PLACEMENT_TYPE_FLOOR, variation: "FLOOR_CLEAN" },

    /**
     * LASER HALLWAY
     */
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
    // Base Lasers
    {x: 6, y: 19,type: PLACEMENT_TYPE_SETDRESSING,variation: "LASER_WALL_OFF"},
    { x: 4, y: 19, type: PLACEMENT_TYPE_SETDRESSING, variation: "LASER_WALL_OFF" },
    { x: 9, y: 19, type: PLACEMENT_TYPE_SETDRESSING, variation: "CONSOLE_WALL_GREEN" },

    // Warning Tiles
    {x: 8, y: 20,type: PLACEMENT_TYPE_FLOOR,variation: "FLOOR_WARNING_VERT1",},
    {x: 8, y: 21,type: PLACEMENT_TYPE_FLOOR,variation: "FLOOR_WARNING_VERT2",},
    {x: 8, y: 22,type: PLACEMENT_TYPE_FLOOR,variation: "FLOOR_WARNING_VERT3",},

    /**
     * JAIL AREA
     */

    /**
     * AJ Cell
     */
    { x: 1, y: 27, type: PLACEMENT_TYPE_WALL, variation: "WALL_INT_HOR_END_L" },
    { x: 2, y: 27, type: PLACEMENT_TYPE_WALL, variation: "WALL_CELL_DOORS" },
    { x: 3, y: 27, type: PLACEMENT_TYPE_WALL, variation: "WALL_CELL_DOORS" },
    { x: 4, y: 27, type: PLACEMENT_TYPE_WALL, variation: "WALL_INT_HOR_END_R" },
    { x: 5, y: 27, type: PLACEMENT_TYPE_WALL, variation: "WALL_INT_HOR" },
    { x: 6, y: 27, type: PLACEMENT_TYPE_WALL, variation: "WALL_INT_HOR" },
    {
      x: 6,
      y: 27,
      type: PLACEMENT_TYPE_WALL,
      variation: "WALL_INT_JUNCTION_TOP",
    },
    { x: 6, y: 28, type: PLACEMENT_TYPE_WALL, variation: "WALL_INT_VERT" },
    { x: 6, y: 29, type: PLACEMENT_TYPE_WALL, variation: "WALL_INT_VERT" },
    { x: 6, y: 30, type: PLACEMENT_TYPE_WALL, variation: "WALL_INT_VERT" },
    // Floor
    { x: 1, y: 28, type: PLACEMENT_TYPE_FLOOR, variation: "FLOOR_DIRTY" },
    { x: 2, y: 28, type: PLACEMENT_TYPE_FLOOR, variation: "FLOOR_DIRTY" },
    { x: 3, y: 28, type: PLACEMENT_TYPE_FLOOR, variation: "FLOOR_DIRTY" },
    { x: 4, y: 28, type: PLACEMENT_TYPE_FLOOR, variation: "FLOOR_DIRTY" },
    { x: 5, y: 28, type: PLACEMENT_TYPE_FLOOR, variation: "FLOOR_DIRTY" },
    { x: 1, y: 29, type: PLACEMENT_TYPE_FLOOR, variation: "FLOOR_DIRTY" },
    { x: 2, y: 29, type: PLACEMENT_TYPE_FLOOR, variation: "FLOOR_DIRTY" },
    { x: 3, y: 29, type: PLACEMENT_TYPE_FLOOR, variation: "FLOOR_DIRTY" },
    { x: 4, y: 29, type: PLACEMENT_TYPE_FLOOR, variation: "FLOOR_DIRTY" },
    { x: 5, y: 29, type: PLACEMENT_TYPE_FLOOR, variation: "FLOOR_DIRTY" },
    { x: 1, y: 30, type: PLACEMENT_TYPE_FLOOR, variation: "FLOOR_DIRTY" },
    { x: 2, y: 30, type: PLACEMENT_TYPE_FLOOR, variation: "FLOOR_DIRTY" },
    { x: 3, y: 30, type: PLACEMENT_TYPE_FLOOR, variation: "FLOOR_DIRTY" },
    { x: 4, y: 30, type: PLACEMENT_TYPE_FLOOR, variation: "FLOOR_DIRTY" },
    { x: 5, y: 30, type: PLACEMENT_TYPE_FLOOR, variation: "FLOOR_DIRTY" },

    /**
     * Middle Cell
     */
    { x: 7, y: 27, type: PLACEMENT_TYPE_WALL, variation: "WALL_INT_HOR_END_L" },
    { x: 8, y: 27, type: PLACEMENT_TYPE_WALL, variation: "WALL_CELL_DOORS" },
    { x: 9, y: 27, type: PLACEMENT_TYPE_WALL, variation: "WALL_INT_HOR_END_R" },
    {
      x: 10,
      y: 27,
      type: PLACEMENT_TYPE_WALL,
      variation: "WALL_INT_JUNCTION_TOP",
    },
    { x: 10, y: 28, type: PLACEMENT_TYPE_WALL, variation: "WALL_INT_VERT" },
    { x: 10, y: 29, type: PLACEMENT_TYPE_WALL, variation: "WALL_INT_VERT" },
    { x: 10, y: 30, type: PLACEMENT_TYPE_WALL, variation: "WALL_INT_VERT" },
    // Floor
    { x: 7, y: 28, type: PLACEMENT_TYPE_FLOOR, variation: "FLOOR_DIRTY" },
    { x: 8, y: 28, type: PLACEMENT_TYPE_FLOOR, variation: "FLOOR_DIRTY" },
    { x: 9, y: 28, type: PLACEMENT_TYPE_FLOOR, variation: "FLOOR_DIRTY" },
    { x: 7, y: 29, type: PLACEMENT_TYPE_FLOOR, variation: "FLOOR_DIRTY" },
    { x: 8, y: 29, type: PLACEMENT_TYPE_FLOOR, variation: "FLOOR_DIRTY" },
    { x: 9, y: 29, type: PLACEMENT_TYPE_FLOOR, variation: "FLOOR_DIRTY" },
    { x: 7, y: 30, type: PLACEMENT_TYPE_FLOOR, variation: "FLOOR_DIRTY" },
    { x: 8, y: 30, type: PLACEMENT_TYPE_FLOOR, variation: "FLOOR_DIRTY" },
    { x: 9, y: 30, type: PLACEMENT_TYPE_FLOOR, variation: "FLOOR_DIRTY" },

    /**
     * Bathroom
     */
    {x: 11,y: 27,type: PLACEMENT_TYPE_WALL,variation: "BATHROOM_DOOR_L",},
    { x: 13, y: 27,type: PLACEMENT_TYPE_WALL,variation: "BATHROOM_DOOR_R",},
    { x: 14,y: 27,type: PLACEMENT_TYPE_WALL,variation: "WALL_INT_HOR",},
    { x: 15,y: 27,type: PLACEMENT_TYPE_WALL,variation: "WALL_INT_TR",},
    { x: 15, y: 28, type: PLACEMENT_TYPE_WALL, variation: "WALL_INT_VERT" },
    { x: 15, y: 29, type: PLACEMENT_TYPE_WALL, variation: "WALL_INT_VERT" },
    { x: 15, y: 30, type: PLACEMENT_TYPE_WALL, variation: "WALL_INT_VERT" },
  
    // Floor
    { x: 11, y: 28, type: PLACEMENT_TYPE_FLOOR, variation: "FLOOR_CLEAN" },
    { x: 12, y: 28, type: PLACEMENT_TYPE_FLOOR, variation: "FLOOR_CLEAN" },
    { x: 13, y: 28, type: PLACEMENT_TYPE_FLOOR, variation: "FLOOR_CLEAN" },
    { x: 14, y: 28, type: PLACEMENT_TYPE_FLOOR, variation: "FLOOR_CLEAN" },
    { x: 11, y: 29, type: PLACEMENT_TYPE_FLOOR, variation: "FLOOR_CLEAN" },
    { x: 12, y: 29, type: PLACEMENT_TYPE_FLOOR, variation: "FLOOR_CLEAN" },
    { x: 13, y: 29, type: PLACEMENT_TYPE_FLOOR, variation: "FLOOR_CLEAN" },
    { x: 14, y: 29, type: PLACEMENT_TYPE_FLOOR, variation: "FLOOR_CLEAN" },
    { x: 11, y: 30, type: PLACEMENT_TYPE_FLOOR, variation: "FLOOR_CLEAN" },
    { x: 12, y: 30, type: PLACEMENT_TYPE_FLOOR, variation: "FLOOR_CLEAN" },
    { x: 13, y: 30, type: PLACEMENT_TYPE_FLOOR, variation: "FLOOR_CLEAN" },
    { x: 14, y: 30, type: PLACEMENT_TYPE_FLOOR, variation: "FLOOR_CLEAN" },

    /**
     * Guard Area
     */
  
    
    { x: 16, y: 28, type: PLACEMENT_TYPE_FLOOR, variation: "FLOOR_DIRTY" },
    { x: 17, y: 28, type: PLACEMENT_TYPE_FLOOR, variation: "FLOOR_DIRTY" },
    { x: 18, y: 28, type: PLACEMENT_TYPE_FLOOR, variation: "FLOOR_DIRTY" },
    { x: 19, y: 28, type: PLACEMENT_TYPE_FLOOR, variation: "FLOOR_DIRTY" },
    { x: 20, y: 28, type: PLACEMENT_TYPE_FLOOR, variation: "FLOOR_DIRTY" },
    { x: 16, y: 29, type: PLACEMENT_TYPE_FLOOR, variation: "FLOOR_DIRTY" },
    { x: 17, y: 29, type: PLACEMENT_TYPE_FLOOR, variation: "FLOOR_DIRTY" },
    { x: 18, y: 29, type: PLACEMENT_TYPE_FLOOR, variation: "FLOOR_DIRTY" },
    { x: 19, y: 29, type: PLACEMENT_TYPE_FLOOR, variation: "FLOOR_DIRTY" },
    { x: 20, y: 29, type: PLACEMENT_TYPE_FLOOR, variation: "FLOOR_DIRTY" },
    { x: 16, y: 30, type: PLACEMENT_TYPE_FLOOR, variation: "FLOOR_DIRTY" },
    { x: 17, y: 30, type: PLACEMENT_TYPE_FLOOR, variation: "FLOOR_DIRTY" },
    { x: 18, y: 30, type: PLACEMENT_TYPE_FLOOR, variation: "FLOOR_DIRTY" },
    { x: 19, y: 30, type: PLACEMENT_TYPE_FLOOR, variation: "FLOOR_DIRTY" },
    { x: 20, y: 30, type: PLACEMENT_TYPE_FLOOR, variation: "FLOOR_DIRTY" },

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
    { x: 3, y: 6, type: PLACEMENT_TYPE_WATER, color: "WATER_ANIM_A" },
    { x: 3, y: 7, type: PLACEMENT_TYPE_WATER, color: "WATER_PLAIN" },
    { x: 3, y: 8, type: PLACEMENT_TYPE_WATER, color: "WATER_PLAIN" },
    { x: 3, y: 9, type: PLACEMENT_TYPE_WATER, color: "WATER_DANK" },
    { x: 3, y: 10, type: PLACEMENT_TYPE_WATER, color: "WATER_PLAIN" },
    { x: 3, y: 11, type: PLACEMENT_TYPE_WATER, color: "WATER_PLAIN" },
    { x: 3, y: 12, type: PLACEMENT_TYPE_WATER, color: "WATER_ANIM_C" },

    { x: 2, y: 4, type: PLACEMENT_TYPE_WATER, color: "WATER_TOP1" },
    { x: 2, y: 5, type: PLACEMENT_TYPE_WATER, color: "WATER_PLAIN" },
    { x: 2, y: 6, type: PLACEMENT_TYPE_WATER, color: "WATER_DANK" },
    { x: 2, y: 7, type: PLACEMENT_TYPE_WATER, color: "WATER_PLAIN" },
    { x: 2, y: 8, type: PLACEMENT_TYPE_WATER, color: "WATER_PLAIN" },
    { x: 2, y: 9, type: PLACEMENT_TYPE_WATER, color: "WATER_PLAIN" },
    { x: 2, y: 10, type: PLACEMENT_TYPE_WATER, color: "WATER_ANIM_B" },
    { x: 2, y: 11, type: PLACEMENT_TYPE_WATER, color: "WATER_DANK" },
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
    // { x: 8, y: 4, type: PLACEMENT_TYPE_SETDRESSING, variation: "TABLE_HOR" },
    // {x: 12, y: 4,type: PLACEMENT_TYPE_SETDRESSING,variation: "WALL_CHART_LARGE",},
    { x: 9, y: 4, type: PLACEMENT_TYPE_SETDRESSING, variation: "WALL_CHART_LARGE" },
    { x: 14, y: 8, type: PLACEMENT_TYPE_SETDRESSING, variation: "BOOKSHELF_VERT" },
    /**
     * HALLWAY BELOW MAIN ROOM
     */
    {x: 8,y: 10,type: PLACEMENT_TYPE_SETDRESSING,variation: "WALL_CHART_SMALL1",},
    {x: 9, y: 10,type: PLACEMENT_TYPE_SETDRESSING,variation: "WALL_CHART_SMALL1",},

    /**
     * MASK ROOM
     */
    { x: 16, y: 0, type: PLACEMENT_TYPE_SETDRESSING, variation: "BOOK_SHELF" },
    { x: 19, y: 0, type: PLACEMENT_TYPE_SETDRESSING, variation: "BOOK_SHELF" },
    { x: 16, y: 1, type: PLACEMENT_TYPE_COLLIDER },
    { x: 17, y: 1, type: PLACEMENT_TYPE_COLLIDER },
    { x: 19, y: 1, type: PLACEMENT_TYPE_COLLIDER },
    { x: 20, y: 1, type: PLACEMENT_TYPE_COLLIDER },
    { x: 18, y: 2, type: PLACEMENT_TYPE_WATER_PICKUP },
    { x: 20, y: 6, type: PLACEMENT_TYPE_SETDRESSING, variation: "TABLE_VERT" },

    /**
     * First Horizontal Hallway
     */
    { x: 12, y: 10, type: PLACEMENT_TYPE_SETDRESSING, variation: "COMPUTER_DESK" },
    { x: 6, y: 13, type: PLACEMENT_TYPE_SETDRESSING, variation: "SHELF_LEFT" },
    { x: 6, y: 14, type: PLACEMENT_TYPE_COLLIDER},
    { x: 6, y: 11, type: PLACEMENT_TYPE_SETDRESSING, variation: "SHELF_LEFT" },
    { x: 6, y: 12, type: PLACEMENT_TYPE_COLLIDER},


    /**
     * Main Vertical Hallway
     */
    { x: 20, y: 22, type: PLACEMENT_TYPE_SETDRESSING, variation: "BOOKSHELF_VERT" },
    { x: 20, y: 24, type: PLACEMENT_TYPE_SETDRESSING, variation: "BOOKSHELF_VERT" },
    { x: 20, y: 26, type: PLACEMENT_TYPE_SETDRESSING, variation: "BOOKSHELF_VERT" },

    /**
     * Laser Hallway
     */
    { x: 1, y: 19, type: PLACEMENT_TYPE_SETDRESSING, variation: "COMPUTER_DESK" },

    /**
     */






    /**
     * MIND CONTROL ROOM
     */
    { x: 10, y: 14, type: PLACEMENT_TYPE_SETDRESSING, variation: "TIGHE_BED" },
    { x: 12, y: 14, type: PLACEMENT_TYPE_SETDRESSING, variation: "SCREEN_TEXT1" },
    {x: 14, y: 14,type: PLACEMENT_TYPE_BACTA, variation: "BACTA_PINK",},
    {x: 9, y: 14,type: PLACEMENT_TYPE_BACTA, variation: "BACTA_GREEN"},
    {x: 10, y: 16,type: PLACEMENT_TYPE_SETDRESSING,variation: "TABLE_VERT",},

    /**
     * WATER AREA
     */
    
    { x: 4, y: 0, type: PLACEMENT_TYPE_PIPE, variation: "PIPE_VERT_IN" },
    { x: 4, y: 1, type: PLACEMENT_TYPE_PIPE, variation: "PIPE_TURN1" },
    { x: 3, y: 1, type: PLACEMENT_TYPE_PIPE, variation: "PIPE_HOR2" },
    { x: 2, y: 1, type: PLACEMENT_TYPE_PIPE, variation: "PIPE_HOR1" },
    { x: 1, y: 1, type: PLACEMENT_TYPE_PIPE, variation: "PIPE_TURN2" },
    { x: 1, y: 2, type: PLACEMENT_TYPE_PIPE, variation: "PIPE_VERT" },
    { x: 1, y: 3, type: PLACEMENT_TYPE_PIPE, variation: "PIPE_VERT_OUT" },
    { x: 1, y: 4, type: PLACEMENT_TYPE_PIPE, variation: "PIPE_DRAIN" },



    { x: 1, y: 13, type: PLACEMENT_TYPE_FLOOR, variation: "FLOOR_GOO" },
    { x: 5, y: 15, type: PLACEMENT_TYPE_SETDRESSING, variation: "TABLE_HOR" },
    { x: 1, y: 17, type: PLACEMENT_TYPE_SETDRESSING, variation: "TABLE_LEFT" },
   





    // Colliders
    { x: 10, y: 15, type: PLACEMENT_TYPE_COLLIDER},
    { x: 11, y: 15, type: PLACEMENT_TYPE_COLLIDER},
    { x: 12, y: 15, type: PLACEMENT_TYPE_COLLIDER},
    { x: 13, y: 15, type: PLACEMENT_TYPE_COLLIDER},
    { x: 12, y: 16, type: PLACEMENT_TYPE_COLLIDER},
    { x: 12, y: 17, type: PLACEMENT_TYPE_COLLIDER},

    /**
     * AJs ROOM
     */
    { x: 4, y: 29, type: PLACEMENT_TYPE_SETDRESSING, variation: "BED" },
    { x: 4, y: 28, type: PLACEMENT_TYPE_SETDRESSING, variation: "TOILET1" },
    { x: 5, y: 28, type: PLACEMENT_TYPE_SETDRESSING, variation: "TOILET2" },


    /**
     * Middle Cell
     */
    { x: 8, y: 29, type: PLACEMENT_TYPE_SETDRESSING, variation: "BED" },
    /**
     * GUARD AREA
     */
    // Couch
    { x: 16, y: 28, type: PLACEMENT_TYPE_SETDRESSING, variation: "COUCH" },
    { x: 16, y: 29, type: PLACEMENT_TYPE_COLLIDER},
    { x: 20, y: 28, type: PLACEMENT_TYPE_SETDRESSING, variation: "TV" },
    { x: 17 , y: 29, type: PLACEMENT_TYPE_SETDRESSING, variation: "CHEETOS_DRESSING" },


    /**
     * BATHROOM
     */
    // Sink
    {x: 11,y: 28,type: PLACEMENT_TYPE_SETDRESSING, variation: "SINK",},
    // Toilet
    {x: 13,y: 29,type: PLACEMENT_TYPE_SETDRESSING, variation: "TOILET1",},
    {x: 14,y: 29,type: PLACEMENT_TYPE_SETDRESSING, variation: "TOILET2",},
    {x: 14,y: 29,type: PLACEMENT_TYPE_COLLIDER,},
    {x: 11,y: 29,type: PLACEMENT_TYPE_COLLIDER,},

    // Other
    {x: 14,y: 28,type: PLACEMENT_TYPE_SETDRESSING, variation: "TRASH",},
    {x: 14,y: 30,type: PLACEMENT_TYPE_SETDRESSING, variation: "TP_ROLL",},
    {x: 14,y: 27,type: PLACEMENT_TYPE_SETDRESSING, variation: "BATH_SIGN",},



    /**
     *
     *
     *
     *
     *
     *
     *
     * ACTORS
     */

    // Hero
    { x: 7, y: 7, type: PLACEMENT_TYPE_HERO },
    // { x: 18, y: 22, type: PLACEMENT_TYPE_HERO },

    // AJ
    { x: 1, y: 27, type: PLACEMENT_TYPE_AJ},
    // Goal
    { x: 7, y: 2, type: PLACEMENT_TYPE_GOAL },
    //Conversation
    { x: 3, y: 26, type: PLACEMENT_TYPE_CONVERSATION, variation:"AJ_CONVO_1"},
    { x: 17, y: 28, type: PLACEMENT_TYPE_CONVERSATION, variation:"GUARD_CONVO"},
    { x: 7, y: 20, type: PLACEMENT_TYPE_LASER_THOUGHT, variation:"LASER_THOUGHT"},
    { x: 7, y: 21, type: PLACEMENT_TYPE_LASER_THOUGHT, variation:"LASER_THOUGHT"},
    { x: 7, y: 22, type: PLACEMENT_TYPE_LASER_THOUGHT, variation:"LASER_THOUGHT"},
    { x: 1, y: 13, type: PLACEMENT_TYPE_OOZE_THOUGHT, variation:"OOZE_THOUGHT"},
    { x: 2, y: 13, type: PLACEMENT_TYPE_OOZE_THOUGHT, variation:"OOZE_THOUGHT"},
    { x: 3, y: 13, type: PLACEMENT_TYPE_OOZE_THOUGHT, variation:"OOZE_THOUGHT"},
    { x: 4, y: 13, type: PLACEMENT_TYPE_OOZE_THOUGHT, variation:"OOZE_THOUGHT"},
    // { x: 18, y: 28, type: PLACEMENT_TYPE_CONVERSATION, variation:"TOILET_THOUGHT"},

    // Rigid Body Ooze 
    { x: 1, y: 12, type: PLACEMENT_TYPE_OOZE_THOUGHT, variation:"OOZE_THOUGHT", variation: "RIGID_BODY"},
    { x: 2, y: 12, type: PLACEMENT_TYPE_OOZE_THOUGHT, variation:"OOZE_THOUGHT", variation: "RIGID_BODY"},
    { x: 3, y: 12, type: PLACEMENT_TYPE_OOZE_THOUGHT, variation:"OOZE_THOUGHT", variation: "RIGID_BODY"},
    { x: 4, y: 12, type: PLACEMENT_TYPE_OOZE_THOUGHT, variation:"OOZE_THOUGHT", variation: "RIGID_BODY"},





    // Key Placement
    { x: 3, y: 3, type: PLACEMENT_TYPE_KEY, color: "TREASURE" },
    { x: 14, y: 18, type: PLACEMENT_TYPE_KEY, color: "ORANGE" },
    // { x: 17 , y: 29, type: PLACEMENT_TYPE_KEY, color: "CHEETOS" },
    { x: 11, y: 30, type: PLACEMENT_TYPE_KEY, color: "WHITE" },
    { x: 2, y: 21, type: PLACEMENT_TYPE_KEY, color: "BLUE" },

    // Chest
    { x: 7, y: 2, type: PLACEMENT_TYPE_LOCK, color: "TREASURE" },

    // Lock Placement
    { x: 18, y: 4, type: PLACEMENT_TYPE_LOCK, color: "ORANGE" },
    { x: 9, y: 19, type: PLACEMENT_TYPE_LOCK, color: "WHITE" },
    // { x: 3, y: 27, type: PLACEMENT_TYPE_LOCK, color: "CHEETOS" },

    // Mind Control
    { x: 12, y: 19, type: PLACEMENT_TYPE_LOCK, color: "BLUE" },
    // Main
    { x: 7, y: 4, type: PLACEMENT_TYPE_LOCK, color: "BLUE" },

    // Death Collider
    // { x: 6, y: 20, type: PLACEMENT_TYPE_DEATH_COLLIDER},
    // { x: 6, y: 21, type: PLACEMENT_TYPE_DEATH_COLLIDER},

    // Laser Placement
    {x: 6,y: 22,type: PLACEMENT_TYPE_LASERS,variation: "LASER_ON",isOn: true,},

    {x: 6, y: 19,type: PLACEMENT_TYPE_LASERS,variation: "LASER_WALL_ON",isOn: true,},
    {x: 6, y: 20,type: PLACEMENT_TYPE_LASERS,variation: "LASER_ON",isOn: true,},
    {x: 6,y: 21,type: PLACEMENT_TYPE_LASERS,variation: "LASER_ON",isOn: true,},
    {x: 6, y: 22,type: PLACEMENT_TYPE_LASERS,variation: "LASER_ON",isOn: true,},

    { x: 4, y: 19, type: PLACEMENT_TYPE_LASERS, variation: "LASER_WALL_ON" },
    { x: 4, y: 20, type: PLACEMENT_TYPE_LASERS, variation: "LASER_ON" },
    { x: 4, y: 21, type: PLACEMENT_TYPE_LASERS, variation: "LASER_ON" },
    { x: 4, y: 22, type: PLACEMENT_TYPE_LASERS, variation: "LASER_ON" },

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
