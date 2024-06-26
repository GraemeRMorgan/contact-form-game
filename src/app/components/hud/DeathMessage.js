import styles from "./PopupMessage.module.css";
import LevelFailedSvg from "../object-graphics/LevelFailedSvg";
import Sprite from "../object-graphics/Sprite";
import { TILES } from "../../helpers/tiles";
import {
  DEATH_TYPE_CLOCK,
  PLACEMENT_TYPE_GROUND_ENEMY,
  PLACEMENT_TYPE_FIRE,
  PLACEMENT_TYPE_FLYING_ENEMY,
  PLACEMENT_TYPE_ROAMING_ENEMY,
  PLACEMENT_TYPE_WATER,
} from "../../helpers/consts";
import { useKeyPress } from "../../hooks/useKeyPress";
import GameStart from "../ui/GameStart";

// const showDeathType = (deathType) => {
//   switch (deathType) {
//     case PLACEMENT_TYPE_FIRE:
//       return <Sprite frameCoord={TILES.FIRE1} />;
//     case PLACEMENT_TYPE_WATER:
//       return <Sprite frameCoord={TILES.WATER1} />;
//     case DEATH_TYPE_CLOCK:
//       return <Sprite frameCoord={TILES.CLOCK} />;
//     case PLACEMENT_TYPE_GROUND_ENEMY:
//       return (
//         <div
//           style={{
//             paddingBottom: 12,
//           }}
//         >
//           <Sprite frameCoord={TILES.ENEMY_RIGHT} size={32} />
//         </div>
//       );
//     case PLACEMENT_TYPE_ROAMING_ENEMY:
//       return (
//         <div
//           style={{
//             paddingBottom: 12,
//           }}
//         >
//           <Sprite frameCoord={TILES.ENEMY_ROAMING} size={32} />
//         </div>
//       );
//     case PLACEMENT_TYPE_FLYING_ENEMY:
//       return (
//         <div
//           style={{
//             paddingBottom: 12,
//           }}
//         >
//           <Sprite frameCoord={TILES.ENEMY_FLYING_RIGHT} size={32} />
//         </div>
//       );
//     default:
//       return null;
//   }
// };

export default function DeathMessage({ level }) {
  const handleRestartLevel = () => {
    level.restart();
  };

  useKeyPress("Enter", () => {
    handleRestartLevel();
  });

  return (
    <GameStart level={level}/>
    // <h1> Failed</h1>

    // <div className={styles.outerContainer}>
    //   <div className={styles.popupContainer}>
    //     <button onClick={handleRestartLevel} className={styles.quietButton}>
    //       <LevelFailedSvg />
    //       <div className={styles.deathTypeContainer}>
    //         {showDeathType(level.deathOutcome)}
    //       </div>
    //     </button>
    //   </div>
    // </div>
  );
}