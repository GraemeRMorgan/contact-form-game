
import styles from './Hero.module.css';
import Sprite from "./Sprite";
import { TILES } from "@/app/helpers/tiles";

export default function Body({ frameCoord, yTranslate, showShadow }) {
  return (
    <div className={styles.hero}>
      <div>{showShadow && <Sprite frameCoord={TILES.SHADOW} />}</div>

      <div className={styles.heroBody} style={{
        transform: `translateY(${yTranslate}px)`,
      }}>
        <Sprite frameCoord={frameCoord} size={32} />
      </div>
    </div>
  );
}


