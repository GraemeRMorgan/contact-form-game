import styles from "./GameStart.module.css";
import { useState, useEffect } from "react";
import { useKeyPress } from "../../../app/hooks/useKeyPress.js";
import { motion, px } from "framer-motion";
import soundsManager, { SFX } from "../../classes/Sounds";
import Image from "next/image";
import inmate from "../../../../public/characters/inmate.png";
import hero from "../../../../public/characters/hero.png";
import guard from "../../../../public/characters/guard.png";
import { X } from "react-feather";

const Conversation = ({ level }) => {
  const [isVisible, setIsVisible] = useState(true);

  

  const handleHoverStart = () => {
    soundsManager.playSfx(SFX.HOVER);
  };

  const handleClick = () => {
    level.conversation = null;
    level.setConversation(null);
  };

  useKeyPress("Enter", () => {
    handleClick();
  });

  const handleDialogue = (current) => {
    let currentConvo = current;
    let title = null;
    let dialogue = null;
    let image = null;

    switch (current) {
      case "AJ_CONVO_1":
        title = "AJ";
        dialogue =
          "The guard always leaves his keycard in the bathroom. I guess he needs it for a security panel in the next hallway.";
        image = inmate;
        break;
      case "TOILET_THOUGHT":
        title = "TOILET";
        dialogue =
          "The guard always leaves his keycard in the bathroom. I guess he needs it for a security panel in the next hallway.";
        image = null;
        break;
      case "LASER_THOUGHT":
        title = "LASER";
        dialogue = "Those are lasers. I'll need to disable them somehow...";
        image = hero;
        break;
      case "OOZE_THOUGHT":
        title = "OOZE";
        dialogue =
          "I believe this is real acid, I'll need safety goggles to go in there.";
        image = hero;
        break;
      case "GUARD_CONVO":
        title = "GUARD";
        dialogue =
          "Guy down at the end of the hallway thought he could smuggle in cheetos. Not on my watch.";
        image = guard;
        break;
      default:
        return null;
    }

    return { title, dialogue, image };
  };

  const dialogueData = handleDialogue(level.conversation);

  return (
    <>
      {level.conversation && (
        <div className={styles.conversationWrapper} onClick={() => {
          handleClick();
          setIsVisible(false);
        }}>
          <div className={styles.conversationGrid}>
            <div className={styles.characterIcon}>
              <Image
                src={dialogueData.image}
                alt={"A thumbnail of a character"}
                width={75}
                height={75}
                quality={100}
                loading="eager"
              />
            </div>
            <div className={styles.dialogue}>
              <p>{dialogueData.dialogue}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Conversation;
