import styles from './ConversationCard.module.css';
import { motion } from 'framer-motion';

const ConversationCard = () => {
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
}

export default ConversationCard;