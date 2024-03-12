export const CELL_SIZE = 16;
export const Z_INDEX_LAYER_SIZE = 10;
export const SPRITE_SHEET_SRC = "/sprite-sheet.png";

// Character 
export const PLACEMENT_TYPE_HERO = "HERO";
export const PLACEMENT_TYPE_GOAL = "GOAL";
export const PLACEMENT_TYPE_WALL = "WALL";
export const PLACEMENT_TYPE_FLOUR = "FLOUR";
export const PLACEMENT_TYPE_CELEBRATION = "CELEBRATION";
export const PLACEMENT_TYPE_LOCK = "LOCK";
export const PLACEMENT_TYPE_KEY = "KEY";
export const PLACEMENT_TYPE_WATER = "WATER";
export const PLACEMENT_TYPE_WATER_PICKUP = "WATER_PICKUP";
export const PLACEMENT_TYPE_GROUND_ENEMY = "GROUND_ENEMY";
export const PLACEMENT_TYPE_FLYING_ENEMY = "FLYING_ENEMY";
export const PLACEMENT_TYPE_SWITCH_DOOR = "SWITCH_DOOR";
export const PLACEMENT_TYPE_SWITCH = "SWITCH";
export const PLACEMENT_TYPE_LEFT = "LEFT_ARROW";
export const PLACEMENT_TYPE_RIGHT = "RIGHT_ARROW";
export const PLACEMENT_TYPE_CARPET = "CARPET";
export const PLACEMENT_TYPE_TREASURE = "TREASUER";



export const DIRECTION_LEFT = "LEFT";
export const DIRECTION_RIGHT = "RIGHT";
export const DIRECTION_UP = "UP";
export const DIRECTION_DOWN = "DOWN";

export const directionUpdateMap = {
  [DIRECTION_LEFT]: { x: -1, y: 0 },
  [DIRECTION_RIGHT]: { x: 1, y: 0 },
  [DIRECTION_UP]: { x: 0, y: -1 },
  [DIRECTION_DOWN]: { x: 0, y: 1 }
}

export const BODY_SKINS = {
  NORMAL: "NORMAL",
  WATER: "WATER",
  ICE: "ICE",
  CONVEYOR: "CONVEYOR",
  FIRE: "FIRE",
  TELEPORT: "TELEPORT",
  SCARED: "SCARED",
  DEATH: "DEATH",
};

export const HERO_RUN_1 = "HERO_RUN_1";
export const HERO_RUN_2 = "HERO_RUN_2";

export const LOCK_KEY_COLORS = {
  BLUE: "BLUE",
  GREEN: "GREEN",
};


export const LEVEL_THEMES = {
  YELLOW: "YELLOW",
  BLUE: "BLUE",
  GREEN: "GREEN",
  PINK: "PINK",
  GRAY: "GRAY",
  LAB: "LAB"
};

export const THEME_BACKGROUNDS = {
  [LEVEL_THEMES.YELLOW]: "#2f2808",
  [LEVEL_THEMES.BLUE]: "#212a59",
  [LEVEL_THEMES.GREEN]: "#2f2808",
  [LEVEL_THEMES.PINK]: "#673d5e",
  [LEVEL_THEMES.GRAY]: "#96a1c7",
  [LEVEL_THEMES.LAB]: "#212a59",
};

export const WATER_TYPES = {
  FLAT_RIGHT1 : "FLAT_RIGHT1",
  FLAT_RIGHT2 : "FLAT_RIGHT2",
  FLAT_LEFT1: "FLAT_LEFT1",
  FLAT_LEFT2: "FLAT_LEFT2",
  TOP_RIGHT: "TOP_RIGHT",
  BOTTOM_RIGHT: "BOTTOM_RIGHT",
  BOTTOM_LEFT: "BOTTOM_LEFT",
  TOP_LEFT: "TOP_LEFT",
  TOP_LEFT_PEAK: "TOP_LEFT_PEAK",
  WATER_TOP1: "WATER_TOP1",
  WATER_TOP2: "WATER_TOP2",
  WATER_PLAIN: "WATER_PLAIN",
  WATER_BUBBLES1: "WATER_BUBBLES1",
  WATER_BUBBLES2: "WATER_BUBBLES2",
}

export const WALL_TYPES = {
  WALL_TOP : "WALL_TOP",
  WALL_VERTICAL : "WALL_VERTICAL",
  WALL_HORIZONTAL : "WALL_HORIZONTAL",
  WALL_LEFT_CORNER: "WALL_LEFT_CORNER",
  WALL_RIGHT_CORNER: "WALL_RIGHT_CORNER",
  WALL_END: "WALL_END",
  WALL_END_TOP: "WALL_END_TOP",
}


export const THEME_TILES_MAP = {
  [LEVEL_THEMES.YELLOW]: {
    FLOOR: "1x1",
    TOP: "1x0",
    LEFT: "0x1",
    RIGHT: "2x1",
    BOTTOM: "1x2",
    WALL: "0x2",
  },
  [LEVEL_THEMES.BLUE]: {
    FLOOR: "4x1",
    TOP: "4x0",
    LEFT: "3x1",
    RIGHT: "5x1",
    BOTTOM: "4x2",
    WALL: "3x2",
  },
  [LEVEL_THEMES.GREEN]: {
    FLOOR: "7x1",
    TOP: "7x0",
    LEFT: "6x1",
    RIGHT: "8x1",
    BOTTOM: "7x2",
    WALL: "6x2",
  },
  [LEVEL_THEMES.PINK]: {
    FLOOR: "10x1",
    TOP: "10x0",
    LEFT: "9x1",
    RIGHT: "11x1",
    BOTTOM: "10x2",
    WALL: "9x2",
  },
  [LEVEL_THEMES.GRAY]: {
    FLOOR: "13x1",
    TOP: "13x0",
    LEFT: "12x1",
    RIGHT: "14x1",
    BOTTOM: "13x2",
    WALL: "12x2",
  },
};
