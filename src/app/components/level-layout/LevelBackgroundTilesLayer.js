/**
 * This file sets up the basics of the level. Exterior walls and floor.
 */
import { THEME_TILES_MAP } from "@/app/helpers/consts";
import MapCell from "./MapCell"

const LevelBackgroundTilesLayer = ({ level }) => {
    const widthWithWalls = level.tilesWidth + 1;
    const heightWithWalls = level.tilesHeight + 1;
    const tiles = THEME_TILES_MAP[level.theme];

    function getBackgroundTile(x, y) {
        if (x === 0) {
            return tiles.LEFT;
        }
        if (x === widthWithWalls) {
            return tiles.RIGHT;
        }
        if (y === 0) {
            return tiles.TOP;
        }
        
        if (y === heightWithWalls) {
            return tiles.BOTTOM;
        }

        return tiles.FLOOR;
        // return null;
    }

    let canvases = [];
    for (let y = 0; y <= heightWithWalls; y++) {
        for (let x = 0; x <= widthWithWalls; x++) {
            // Skip the bottom corners
            if (y === heightWithWalls) {
                if (x === 0 || x === widthWithWalls) {
                    continue;
                }
            }

            // Add a cell to the map
            canvases.push(<MapCell
                key={`${x}_${y}`}
                x={x}
                y={y}
                frameCoord={getBackgroundTile(x, y)}
            />);
        }
    }
    return (
        <div>
            {canvases}
        </div>
    )
}
export default LevelBackgroundTilesLayer;