/**
 * This places every sprite in the level except elements in LevelBackgroundTilesLayer. This file component
 * should have been called LevelTilesLayer.
 * 
 * Comment out the line `<LevelPlacementsLayer level={level} />` in RenderLevel to see what it's doing.
 */

const LevelPlacementsLayer = ({ level }) => {
  return level.placements.filter(placement => {
    return !placement.hasBeenCollected;
  }).map((placement) => {
    const [x,y] = placement.displayXY();
    const style = {
      position: "absolute",
      transform: `translate3d(${x}px, ${y}px, 0)`,
      zIndex: placement.zIndex(),
    };

    return (
      <div key={placement.id} style={style}>
        {placement.renderComponent()}
      </div>
    );
  });
};

export default LevelPlacementsLayer;
