import styles from "./GameStart.module.css";
import { useState, useEffect } from "react";
import { useKeyPress}  from "../../../app/hooks/useKeyPress.js";
import { motion } from "framer-motion";
import soundsManager, { SFX } from "../../classes/Sounds";


const Conversation = ({ level }) => {
  const [isVisible, setIsVisible] = useState(true);
  
  const handleHoverStart = () => {
    soundsManager.playSfx(SFX.HOVER);
  };

  const handleClick = () => {
    level.conversation = null;
    level.setConversation(null)
  };

  useKeyPress("Enter", () => {
    handleClick();
  })

   const handleDialogue = (current) => {
    let currentConvo = current;
    let title = null;
    let dialogue =  null;
    

    switch(current){
      case "AJ_CONVO_1":
        title = "AJ"
        dialogue = "The guard always leaves his keycard in the bathroom. I guess he needs it for a security panel in the next hallway."
        break;
      case "TOILET_THOUGHT":
        title = "TOILET"
        dialogue = "The guard always leaves his keycard in the bathroom. I guess he needs it for a security panel in the next hallway."
        break;
      case "LASER_THOUGHT":
        title = "LASER"
        dialogue = "Those are lasers. I'll need to disable them somehow..."
        break;
      case "OOZE_THOUGHT":
        title = "OOZE"
        dialogue = "I believe this is real acid, I'll need safety goggles to go in there."
        break;
      case "GUARD_CONVO":
        title = "GUARD"
        dialogue = "Guy down at the end of the hallway thought he could smuggle in cheetos. Not on my watch."
        break;
      default:
        return null;
    }

    return {title, dialogue};

  }

  const dialogueData = handleDialogue(level.conversation);

  

  return (
    <>
      {level.conversation && (
        <div className={styles.conversationWrapper}>
          {/* <h1>{dialogueData.title}</h1> */}
          <p>{dialogueData.dialogue}</p>
          {/* <p>{level.conversation}</p> */}
          <p>{level.conversation.copy}</p>
          {/* <button onClick={handleClick}>Close Window</button> */}
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
          handleClick();
          setIsVisible(false);
        }}
      >
        Close
      </motion.button>
        </div>
      )}
    </>
  );
};

export default Conversation;
