import styles from "./RenderLevel.module.css";
import { LEVEL_THEMES, THEME_BACKGROUNDS } from "@/app/helpers/consts";
import LevelBackgroundTilesLayer from "./LevelBackgroundTilesLayer";
import LevelPlacementsLayer from "./LevelPlacementsLayer";
import { useEffect, useState } from "react";
import { LevelState } from "@/app/classes/LevelState";

const RenderLevel = () => {
  const [level, setLevel] = useState(null);
  useEffect(() => {
    // Create and subscribe to state changes
    const levelState = new LevelState("1-1", newState => {
      setLevel(newState)
    })

    // Get initial state
    setLevel(levelState.getState());

    //Destroy
    return () => {
      levelState.destroy( );
    }

  }, [])

  if(!level){
    return null;
  }

  return (
    <div className={styles.fullScreenContainer} style={{
      background: THEME_BACKGROUNDS[level.theme]
    }}>
      <div className={styles.gameScreen}>

        <LevelBackgroundTilesLayer level={level} />

        <LevelPlacementsLayer level={level} />

      </div>
    </div>
  );
};

export default RenderLevel;