import styles from "./InventoryList.module.css";
import {
  PLACEMENT_TYPE_WATER_PICKUP, LOCK_KEY_COLORS, PLACEMENT_TYPE_KEY
} from "../../helpers/consts";
import { TILES } from "../../helpers/tiles";
import Sprite from "../object-graphics/Sprite";

const showInventory = [
  {
    key: PLACEMENT_TYPE_WATER_PICKUP,
    tile: TILES.WATER_PICKUP,
  },
  {
    key: "KEY_BLUE",
    tile: TILES.BLUE_KEY,
  },
  {
    key: "KEY_GREEN",
    tile: TILES.GREEN_KEY,
  },
  {
    key: "KEY_ORANGE",
    tile: TILES.ORANGE_KEY,
  },
  {
    key: "KEY_WHITE",
    tile: TILES.WHITE_KEY,
  },
  {
    key: "KEY_CHEETOS",
    tile: TILES.CHEETOS_KEY,
  },
  {
    key: "KEY_TREASURE",
    tile: TILES.TREASURE_KEY,
  },
];

export default function InventoryList({ level }) {
  return (
    <div className={styles.inventory}>
      {showInventory
        .filter((i) => {
          return level.inventory.has(i.key);
        })
        .map((i) => {
          return (
            <div key={i.key} className={styles.inventoryEntry}>
              <Sprite frameCoord={i.tile} />
            </div>
          );
        })}
    </div>
  );
}