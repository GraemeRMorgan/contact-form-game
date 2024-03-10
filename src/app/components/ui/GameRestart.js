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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className={isVisible ? styles.wrapper : styles.hide}>
        <h1>You are Dead</h1>
        <p>
          You can&apos;t open your eyes under water... You need to use goggles.
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
            transition: { duration: 0.1 },
          }}
          onHoverStart={handleHoverStart}
          exit={{
            opacity: 0.8,
            boxShadow: "10px 10px 0 black",
          }}
          onClick={() => {
            handleButtonClick();
            setIsVisible(false);
            level.restart();
          }}
        >
          Try Again
        </motion.button>
      </div>
    </motion.div>
  );
};

export default GameRestart;
