/**
 * This component runs on initial start of the game.
 */
import { useState } from "react";
import styles from "./GameStart.module.css";
import { motion } from "framer-motion";
import soundsManager, { SFX } from "../../classes/Sounds";

const GameStart = ({ level }) => {
  const [isVisible, setIsVisible] = useState(true);
  const handleHoverStart = () => {
    soundsManager.playSfx(SFX.HOVER);
  };
  const handleButtonClick = () => {
    soundsManager.playSfx(SFX.CLICK);
  };

  return (
    <div className={isVisible ? styles.wrapper : styles.hide}>
      <h1>Contact Information Madness</h1>
      <p>
        In an attempt to make my contact details just as hard to find as the
        average large corporation. I have crafted this game. Finish the level
        and you will have my contact details. There is music in this game, it can be muted
        in the menu in the upper right.
      </p>
      <p>
        Navigate with the{" "}
        <span className={styles.specialKeys}>directional arrows</span>,{" "}
        <span className={styles.specialKeys}>wasd</span>, or{" "}
        <span className={styles.specialKeys}>touch</span> controls on a mobile
        device.
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
          // level.restart();
        }}
      >
        Play the Game
      </motion.button>
    </div>
  );
};

export default GameStart;
