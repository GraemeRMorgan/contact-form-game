import { useState } from "react";
import styles from "./GameStart.module.css";
import { motion } from "framer-motion";
import soundsManager, { SFX } from "../../classes/Sounds";

const GameRestart = ({ level }) => {
    const [isVisible, setIsVisible] = useState(true);
    const handleHoverStart = () => {
      soundsManager.playSfx(SFX.HOVER);
    };
    const handleButtonClick = () => {
      soundsManager.playSfx(SFX.CLICK);
    };
  
    return (
      <div className={isVisible ? styles.wrapper : styles.hide}>
        <h1>You are Dead</h1>
        <p>
          Where are your water wings?
        </p>
        <motion.button
          layout
          className={styles.button}
          initial={{
            opacity: 1,
            boxShadow: "3px 3px 0 black",
            background: "hsla(101, 53%, 71%, 1)",
          }}
          whileHover={{
            boxShadow: "8px 8px 0 black",
            background: "hsla(101, 66%, 55%, 1)",
            transition: { duration: 0.1 }
          }}
          onHoverStart={handleHoverStart}
          exit={{
            opacity: 0.8,
            boxShadow: "10px 10px 0 black",
          }}
          onClick={() => {
            handleButtonClick();
            setIsVisible(false);
            soundsManager.playSfx(SFX.THEME);
            level.restart();
          }}
        >
          Try Again
        </motion.button>

        
      </div>
  );
}

export default GameRestart;