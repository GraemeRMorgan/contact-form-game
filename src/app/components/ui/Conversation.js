import styles from "./GameStart.module.css";
import { useState, useEffect } from "react";
import { useKeyPress } from "@/app/hooks/useKeyPress";

const Conversation = ({ level }) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClick = () => {
    level.conversation = null;
    level.setConversation(null)
  };

  return (
    <>
      {level.conversation && (
        <div className={styles.conversationWrapper}>
          <h1>Start the Conversation </h1>
          <p>{level.conversation}</p>
          <p>{level.conversation.copy}</p>
          <button onClick={handleClick}>Close Window</button>
        </div>
      )}
    </>
  );
};

export default Conversation;
