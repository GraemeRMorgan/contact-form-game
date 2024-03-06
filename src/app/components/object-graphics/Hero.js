
import styles from './Hero.module.css';
import Sprite from "../object-graphics/Sprite";
import { TILES } from "@/app/helpers/tiles";

const Hero = () => {
  return (
    <div className={styles.hero}>
        <div>
            <Sprite frameCoord={TILES.SHADOW} />
        </div>
        <div className={styles.heroBody}>
            <Sprite frameCoord={TILES.HERO_RIGHT} size={32} />
        </div>
    </div>
  );
}

export default Hero;


