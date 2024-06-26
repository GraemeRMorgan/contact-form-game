import styles from "./GameStart.module.css";
import { motion } from "framer-motion";
import { useState } from "react";
import { useKeyPress } from "@/app/hooks/useKeyPress";
import soundsManager, { SFX } from "../../classes/Sounds";


const GameFinished = ({ level }) => {
  const [isVisible, setIsVisible] = useState(true);
  const handleHoverStart = () => {
    soundsManager.playSfx(SFX.HOVER);
  };
  const handleButtonClick = () => {
    soundsManager.playSfx(SFX.CLICK);
  };

  

  return (
    <div className={isVisible ? styles.wrapper : styles.hide}>
      <h1>Complete!</h1>
      <p>
        Great work at finishing the game! I am located on Vancouver Island in Western Canada (PST).
      </p>
      <p>I look forward to hearing from you.</p>
      <h3>morgan.graeme@gmail.com</h3>
     <div className={styles.buttonLayout}>
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
          soundsManager.playSfx(SFX.THEME);
          level.restart();
        }}
      >
        Play Again?
      </motion.button>
      
       <motion.button
        layout
        className={`${styles.button} ${styles.goBack}`}
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
          window.close();
        }}
      >
        Go Back?
      </motion.button>
      </div>
    </div>
  );
};

export default GameFinished;


