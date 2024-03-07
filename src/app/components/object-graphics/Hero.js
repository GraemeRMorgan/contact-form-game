
import styles from './Hero.module.css';
import Sprite from "../object-graphics/Sprite";
import { TILES } from "@/app/helpers/tiles";

const Hero = ({frameCoord, yTranslate}) => {
  return (
    <div className={styles.hero}>
        <div>
            <Sprite frameCoord={TILES.SHADOW} />
        </div>
        <div className={styles.heroBody} style={{
          transform: `translateY(${yTranslate}px)`,
        }}>
            <Sprite frameCoord={frameCoord} size={32} />
        </div>
    </div>
  );
}

export default Hero;


