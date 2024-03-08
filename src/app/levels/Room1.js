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
} from "../helpers/consts";

const level = {
  theme: LEVEL_THEMES.BLUE,
  tilesWidth: 20,
  tilesHeight: 12,
  placements: [
    { x: 10, y: 6, type: PLACEMENT_TYPE_HERO },
    { x: 10, y: 1, type: PLACEMENT_TYPE_GOAL },

    // Chest
    {x: 10, y:1, type: PLACEMENT_TYPE_LOCK, color: "GREEN"},

    // Water
    { x: 5, y: 1, type: PLACEMENT_TYPE_WATER },
    { x: 5, y: 2, type: PLACEMENT_TYPE_WATER },
    { x: 5, y: 3, type: PLACEMENT_TYPE_WATER },
    { x: 5, y: 4, type: PLACEMENT_TYPE_WATER },
    { x: 5, y: 10, type: PLACEMENT_TYPE_WATER },
    { x: 5, y: 11, type: PLACEMENT_TYPE_WATER },
    { x: 5, y: 12, type: PLACEMENT_TYPE_WATER },
    { x: 4, y: 1, type: PLACEMENT_TYPE_WATER },
    { x: 4, y: 2, type: PLACEMENT_TYPE_WATER },
    { x: 4, y: 3, type: PLACEMENT_TYPE_WATER },
    { x: 4, y: 4, type: PLACEMENT_TYPE_WATER },
    { x: 4, y: 5, type: PLACEMENT_TYPE_WATER },
    { x: 4, y: 6, type: PLACEMENT_TYPE_WATER },
    { x: 4, y: 7, type: PLACEMENT_TYPE_WATER },
    { x: 4, y: 8, type: PLACEMENT_TYPE_WATER },
    { x: 4, y: 9, type: PLACEMENT_TYPE_WATER },
    { x: 4, y: 10, type: PLACEMENT_TYPE_WATER },
    { x: 4, y: 11, type: PLACEMENT_TYPE_WATER },
    { x: 4, y: 12, type: PLACEMENT_TYPE_WATER },
    { x: 3, y: 1, type: PLACEMENT_TYPE_WATER },
    { x: 3, y: 2, type: PLACEMENT_TYPE_WATER },
    { x: 3, y: 3, type: PLACEMENT_TYPE_WATER },
    { x: 3, y: 4, type: PLACEMENT_TYPE_WATER },
    { x: 3, y: 5, type: PLACEMENT_TYPE_WATER },
    { x: 3, y: 6, type: PLACEMENT_TYPE_WATER },
    { x: 3, y: 7, type: PLACEMENT_TYPE_WATER },
    { x: 3, y: 8, type: PLACEMENT_TYPE_WATER },
    { x: 3, y: 9, type: PLACEMENT_TYPE_WATER },
    { x: 3, y: 10, type: PLACEMENT_TYPE_WATER },
    { x: 3, y: 11, type: PLACEMENT_TYPE_WATER },
    { x: 3, y: 12, type: PLACEMENT_TYPE_WATER },
    { x: 2, y: 1, type: PLACEMENT_TYPE_WATER },
    { x: 2, y: 2, type: PLACEMENT_TYPE_WATER },
    { x: 2, y: 3, type: PLACEMENT_TYPE_WATER },
    { x: 2, y: 4, type: PLACEMENT_TYPE_WATER },
    { x: 2, y: 10, type: PLACEMENT_TYPE_WATER },
    { x: 2, y: 11, type: PLACEMENT_TYPE_WATER },
    { x: 2, y: 12, type: PLACEMENT_TYPE_WATER },
    { x: 1, y: 1, type: PLACEMENT_TYPE_WATER },
    { x: 1, y: 2, type: PLACEMENT_TYPE_WATER },
    { x: 1, y: 3, type: PLACEMENT_TYPE_WATER },
    { x: 1, y: 4, type: PLACEMENT_TYPE_WATER },
    { x: 1, y: 10, type: PLACEMENT_TYPE_WATER },
    { x: 1, y: 11, type: PLACEMENT_TYPE_WATER },
    { x: 1, y: 12, type: PLACEMENT_TYPE_WATER },

    // Key Placement
    {x: 1, y: 7, type: PLACEMENT_TYPE_KEY, color: "GREEN"},
    {x: 18, y:11, type: PLACEMENT_TYPE_KEY, color: "BLUE"},

    // Walls Left
    {x: 5, y:1, type: PLACEMENT_TYPE_WALL},
    {x: 5, y:2, type: PLACEMENT_TYPE_WALL},
    {x: 5, y:3, type: PLACEMENT_TYPE_WALL},
    {x: 5, y:4, type: PLACEMENT_TYPE_WALL},
    {x: 5, y:5, type: PLACEMENT_TYPE_WALL},
    {x: 5, y:6, type: PLACEMENT_TYPE_WALL},
    {x: 5, y:8, type: PLACEMENT_TYPE_WALL},
    {x: 5, y:9, type: PLACEMENT_TYPE_WALL},
    {x: 5, y:10, type: PLACEMENT_TYPE_WALL},
    {x: 5, y:11, type: PLACEMENT_TYPE_WALL},
    {x: 5, y:12, type: PLACEMENT_TYPE_WALL},


    // Walls Right
    {x: 15, y:1, type: PLACEMENT_TYPE_WALL},
    {x: 15, y:2, type: PLACEMENT_TYPE_WALL},
    {x: 15, y:3, type: PLACEMENT_TYPE_WALL},
    {x: 15, y:4, type: PLACEMENT_TYPE_WALL},
    {x: 15, y:5, type: PLACEMENT_TYPE_WALL},
    {x: 15, y:6, type: PLACEMENT_TYPE_WALL},
    {x: 15, y:8, type: PLACEMENT_TYPE_WALL},
    {x: 15, y:9, type: PLACEMENT_TYPE_WALL},
    {x: 15, y:10, type: PLACEMENT_TYPE_WALL},
    {x: 15, y:11, type: PLACEMENT_TYPE_WALL},
    {x: 15, y:12, type: PLACEMENT_TYPE_WALL},

    {x: 20, y:4, type: PLACEMENT_TYPE_WALL},
    {x: 19, y:4, type: PLACEMENT_TYPE_WALL},
    {x: 18, y:4, type: PLACEMENT_TYPE_LOCK, color: "BLUE"},
    {x: 17, y:4, type: PLACEMENT_TYPE_WALL},
    {x: 16, y:4, type: PLACEMENT_TYPE_WALL},

    // Wall Switch
    {x: 15, y:7, type: PLACEMENT_TYPE_SWITCH},

    // Moveable Walls
    {x: 20, y: 9, type: PLACEMENT_TYPE_SWITCH_DOOR, isRaised: false},
    {x: 19, y: 9, type: PLACEMENT_TYPE_SWITCH_DOOR, isRaised: false},
    {x: 18, y: 9, type: PLACEMENT_TYPE_SWITCH_DOOR, isRaised: false},
    {x: 17, y: 9, type: PLACEMENT_TYPE_SWITCH_DOOR, isRaised: false},
    {x: 16, y: 9, type: PLACEMENT_TYPE_SWITCH_DOOR, isRaised: false},

    // Water Pickup
    { x: 18, y: 2, type: PLACEMENT_TYPE_WATER_PICKUP },


    
    
  ],
};

export default level;