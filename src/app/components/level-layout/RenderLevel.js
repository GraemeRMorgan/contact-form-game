import styles from "./RenderLevel.module.css";
import { LEVEL_THEMES, THEME_BACKGROUNDS } from "@/app/helpers/consts";
import LevelBackgroundTilesLayer from "./LevelBackgroundTilesLayer";
import LevelPlacementsLayer from "./LevelPlacementsLayer";
import { useEffect, useState } from "react";
import { LevelState } from "@/app/classes/LevelState";
// import FlourCount from "../hud/FlourCount";
import LevelCompleteMessage from "../hud/LevelCompleteMessage";
import { useRecoilValue } from "recoil";
import { currentLevelIdAtom } from "@/app/atoms/currentLevelIdAtom";
import DeathMessage from "../hud/DeathMessage";
import TopHud from "../hud/TopHud";
import GameStart from "../ui/GameStart";
import GameFinished from "../ui/GameFinished";
import GameRestart from "../ui/GameRestart";
import Menu from "../ui/Menu";

const RenderLevel = () => {
  const [level, setLevel] = useState(null);
  const currentLevelId = useRecoilValue(currentLevelIdAtom);
  useEffect(() => {
    // Create and subscribe to state changes
    const levelState = new LevelState(currentLevelId, (newState) => {
      setLevel(newState);
    });

    // Get initial state
    setLevel(levelState.getState());

    //Destroy
    return () => {
      levelState.destroy();
    };
  }, [currentLevelId]);

  if (!level) {
    return null;
  }

  const cameraTranslate = `translate3d(${level.cameraTransformX}, ${level.cameraTransformY}, 0)`;

  return (
    <>
      <Menu />
      {/* <GameStart level={level} /> */}
      {/* This is where the Death Popup is called. */}
      {level.isCompleted && <GameFinished level={level} />}
      {/* {level.deathOutcome && <DeathMessage level={level} />} */}
      {level.deathOutcome && <GameRestart level={level} />}
      <div
        className={styles.fullScreenContainer}
        style={{
          background: THEME_BACKGROUNDS[level.theme],
        }}
      >
        <div className={styles.gameScreen}>
          {/* <LevelBackgroundTilesLayer level={level} />
         <LevelPlacementsLayer level={level} /> */}
          <div
            style={{
              transform: cameraTranslate,
            }}
          >
            <LevelBackgroundTilesLayer level={level} />
            <LevelPlacementsLayer level={level} />
          </div>
          {/* This is where the Death Popup is called. */}
          {/* {level.isCompleted && <LevelCompleteMessage />} */}
          {/* {level.deathOutcome && <DeathMessage level={level} />} */}
          {/* {level.deathOutcome && <DeathMessage level={level} />} */}
        </div>
        {/* <FlourCount level={level} /> */}
        <TopHud level={level} />
        {/* {level.isCompleted && <LevelCompleteMessage />}
      {level.deathOutcome && <DeathMessage level={level} />} */}
      </div>
    </>
  );
};

export default RenderLevel;
