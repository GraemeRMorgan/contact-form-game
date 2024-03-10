import styles from "./Menu.module.css";
import { PauseCircle, PlayCircle } from "react-feather";
import { useState } from "react";
import soundsManager, { SFX } from "../../classes/Sounds";
import { Howler } from "howler";
import { motion } from "framer-motion";

const Menu = () => {
  const [audio, setAudio] = useState(true);
  const handleClick = () => {
    if (audio) {
      setAudio(!audio);
      Howler.mute(true);
    } else {
      setAudio(!audio);
      Howler.mute(false);
    }
  };
  return (
    <div className={styles.wrapper}>
      <motion.div
        initial={{ y: "-20vh" }} // Start off-screen
        animate={{ y: 0 }} // Animate to original position
        transition={{ duration: 1, ease: "easeOut" }} // Customize the animation
        className={styles.pause}
        onClick={handleClick}
      >
        {audio ? (
          <div>
            <PauseCircle color="#e1e4f4" size="2rem" />
          </div>
        ) : (
          <div>
            <PlayCircle color="#e1e4f4" size="2rem" />
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default Menu;
