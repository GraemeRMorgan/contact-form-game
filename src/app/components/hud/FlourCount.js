
// import styles from './FlourCount.module.css';
import { PLACEMENT_TYPE_FLOUR } from "@/app/helpers/consts";

const FlourCount = ({ level }) => {

    const count = level.placements.filter((p) => {
        return p.type === PLACEMENT_TYPE_FLOUR && !p.hasBeenCollected;
    }).length;

    return (
        <p style={{
            position: "absolute",
            left: 0,
            top: 0,
            color: "white",
        }}>Flour Remaining: {count}</p>
    );
}

export default FlourCount;