import Sprite from "../object-graphics/Sprite";
import { CELL_SIZE } from "@/app/helpers/consts";

const MapCell = ({ x, y, frameCoord}) => {
  return (
    <div
      style={{
        position: "absolute",
        left: x * CELL_SIZE ,
        top: y * CELL_SIZE,
      }}
    >
      <Sprite frameCoord={frameCoord} />
    </div>
  );
};

export default MapCell;
