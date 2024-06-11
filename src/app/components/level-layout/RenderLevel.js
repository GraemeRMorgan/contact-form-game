
import styles from "./RenderLevel.module.css";
import { THEME_BACKGROUNDS } from "@/app/helpers/consts";
import LevelBackgroundTilesLayer from "./LevelBackgroundTilesLayer";
import LevelPlacementsLayer from "./LevelPlacementsLayer";
import { useEffect, useState } from "react";
import { LevelState } from "@/app/classes/LevelState";
import { useRecoilValue } from "recoil";
import { currentLevelIdAtom } from "@/app/atoms/currentLevelIdAtom";
import TopHud from "../hud/TopHud";
import GameStart from "../ui/GameStart";
import GameFinished from "../ui/GameFinished";
import GameRestart from "../ui/GameRestart";
import Conversation from "../ui/Conversation";
import Menu from "../ui/Menu";

const RenderLevel = () => {
  const [level, setLevel] = useState(null);
  
  // This game only has one level, but more could be added.
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
      <GameStart level={level} />
      {/* This is where the Death Popup is called. */}
      {level.isCompleted && <GameFinished level={level} />}
      {level.deathOutcome && <GameRestart level={level} />}
      <div
        className={styles.fullScreenContainer}
        style={{
          background: THEME_BACKGROUNDS[level.theme],
        }}
      >
        <div className={styles.gameScreen}>
          <div
            style={{
              transform: cameraTranslate,
            }}
          >
            {/* This places the background tiles - exterior walls and floor */}
            <LevelBackgroundTilesLayer level={level} />
            {/* This places all other tiles */}
            <LevelPlacementsLayer level={level} />
          </div>
        </div>
        {/* This is the menu at the upper right */}
        <TopHud level={level} />
        {level.conversation && <Conversation level={level} setConversation={level.setConversation}/>}
        {level.deathCollision && <GameRestart />}
      
      </div>
    </>
  );
};

export default RenderLevel;
