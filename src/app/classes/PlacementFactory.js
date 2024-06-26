/**
 * This file controls the placement for all sprites in the game. 
 * Anytime a new placement type is added in the consts or tiles, it must be added here.
 */

const {
    PLACEMENT_TYPE_HERO,
    PLACEMENT_TYPE_GOAL,
    PLACEMENT_TYPE_WALL,
    PLACEMENT_TYPE_FLOUR,
    PLACEMENT_TYPE_CELEBRATION,
    PLACEMENT_TYPE_KEY,
    PLACEMENT_TYPE_LOCK,
    PLACEMENT_TYPE_WATER,
    PLACEMENT_TYPE_SWITCH,
    PLACEMENT_TYPE_SWITCH_DOOR,
    PLACEMENT_TYPE_WATER_PICKUP,
    PLACEMENT_TYPE_GROUND_ENEMY,
    PLACEMENT_TYPE_FLYING_ENEMY,
    PLACEMENT_TYPE_LEFT,
    PLACEMENT_TYPE_RIGHT,
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



} = require("../helpers/consts");
import { WallPlacement } from "../game-objects/WallPlacement";
import { HeroPlacement } from "../game-objects/HeroPlacement";
import { GoalPlacement } from "../game-objects/GoalPlacement";
import { FlourPlacement } from "../game-objects/FlourPlacement";
import { CelebrationPlacement } from "../game-objects/CelebrationPlacement";
import { LockPlacement } from "../game-objects/LockPlacement";
import { KeyPlacement } from "../game-objects/KeyPlacement";
import { WaterPlacement } from "../game-objects/WaterPlacement";
import { WaterPickupPlacement } from "../game-objects/WaterPickupPlacement";
import { GroundEnemyPlacement } from "../game-objects/GroundEnemyPlacement";
import { FlyingEnemyPlacement } from "../game-objects/FlyingEnemyPlacement";
import { SwitchableDoorPlacement } from "../game-objects/SwitchableDoorPlacement";
import { DoorSwitchPlacement } from "../game-objects/DoorSwitchPlacement";
import { CarpetPlacement } from "../game-objects/CarpetPlacement";
import { TreasureChest } from "../game-objects/TreasueChest";
import { SetDressing } from "../game-objects/SetDressing";
import { ColliderPlacement } from "../game-objects/ColliderPlacement";
import { FloorTilesPlacement } from "../game-objects/FloorTilesPlacement";
import { LaserPlacement } from "../game-objects/LaserPlacement";
import { ConversationPlacement } from "../game-objects/ConversationPlacement";
import { DeathColliderPlacement } from "../game-objects/DeathColliderPlacement";
import { AjPlacement } from "../game-objects/AjPlacement";
import { BactaTanksPlacement } from "../game-objects/BactaTanksPlacement";
import { PipePlacement } from "../game-objects/PipePlacement";
import { LaserThoughtPlacement } from "../game-objects/LaserThoughtPlacement";
import { OozeThoughtPlacement } from "../game-objects/OozeThoughtPlacement";




const placementTypeClassMap = {
    [PLACEMENT_TYPE_HERO]: HeroPlacement,
    [PLACEMENT_TYPE_GOAL]: GoalPlacement,
    [PLACEMENT_TYPE_WALL]: WallPlacement,
    [PLACEMENT_TYPE_FLOUR]: FlourPlacement,
    [PLACEMENT_TYPE_CELEBRATION]: CelebrationPlacement,
    [PLACEMENT_TYPE_LOCK]: LockPlacement,
    [PLACEMENT_TYPE_KEY]: KeyPlacement,
    [PLACEMENT_TYPE_WATER]: WaterPlacement,
    [PLACEMENT_TYPE_WATER_PICKUP]: WaterPickupPlacement,
    [PLACEMENT_TYPE_GROUND_ENEMY]: GroundEnemyPlacement,
    [PLACEMENT_TYPE_FLYING_ENEMY]: FlyingEnemyPlacement,
    [PLACEMENT_TYPE_SWITCH_DOOR]: SwitchableDoorPlacement,
    [PLACEMENT_TYPE_SWITCH]: DoorSwitchPlacement,
    [PLACEMENT_TYPE_LEFT] : GoalPlacement,
    [PLACEMENT_TYPE_RIGHT] : GoalPlacement,
    [PLACEMENT_TYPE_CARPET] : CarpetPlacement,
    [PLACEMENT_TYPE_TREASURE] : TreasureChest,
    [PLACEMENT_TYPE_SETDRESSING] : SetDressing,
    [PLACEMENT_TYPE_COLLIDER] : ColliderPlacement,
    [PLACEMENT_TYPE_FLOOR] : FloorTilesPlacement,
    [PLACEMENT_TYPE_LASERS] : LaserPlacement,
    [PLACEMENT_TYPE_CONVERSATION] : ConversationPlacement,
    [PLACEMENT_TYPE_DEATH_COLLIDER] : DeathColliderPlacement,
    [PLACEMENT_TYPE_AJ] : AjPlacement,
    [PLACEMENT_TYPE_BACTA] : BactaTanksPlacement,
    [PLACEMENT_TYPE_PIPE] : PipePlacement,
    [PLACEMENT_TYPE_LASER_THOUGHT] : LaserThoughtPlacement,
    [PLACEMENT_TYPE_OOZE_THOUGHT] : OozeThoughtPlacement,




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