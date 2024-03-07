// import styles from './LevelPlacementsLayer.module.css';

const LevelPlacementsLayer = ({ level }) => {
  return level.placements.map((placement) => {
    // Wrap each Sprite in a positioned div
    const [x,y] = placement.displayXY();
    // const x = placement.x * CELL_SIZE + "px";
    // const y = placement.y * CELL_SIZE + "px";
    const style = {
      position: "absolute",
      transform: `translate3d(${x}px, ${y}px, 0)`,
    };

    return (
      <div key={placement.id} style={style}>
        {placement.renderComponent()}
      </div>
    );
  });
};

export default LevelPlacementsLayer;
