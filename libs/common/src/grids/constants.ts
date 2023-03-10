import {GameSpace} from './GameSpace';
import {isValidGrid} from './isValidGrid';

export const gameGrid = [
  [
    GameSpace.water,
    GameSpace.water,
    GameSpace.water,
    GameSpace.water,
    GameSpace.water,
    GameSpace.water,
    GameSpace.water,
    GameSpace.water,
    GameSpace.water,
    GameSpace.water,
    GameSpace.water,
    GameSpace.water,
    GameSpace.water,
    GameSpace.water,
    GameSpace.water,
  ],
  [
    GameSpace.water,
    GameSpace.water,
    GameSpace.field,
    GameSpace.forest,
    GameSpace.road,
    GameSpace.road,
    GameSpace.road,
    GameSpace.road,
    GameSpace.road,
    GameSpace.field,
    GameSpace.forest,
    GameSpace.building,
    GameSpace.field,
    GameSpace.building,
    GameSpace.water,
  ],
  [
    GameSpace.water,
    GameSpace.field,
    GameSpace.field,
    GameSpace.forest,
    GameSpace.road,
    GameSpace.forest,
    GameSpace.water,
    GameSpace.field,
    GameSpace.road,
    GameSpace.building,
    GameSpace.field,
    GameSpace.field,
    GameSpace.building,
    GameSpace.building,
    GameSpace.water,
  ],
  [
    GameSpace.water,
    GameSpace.building,
    GameSpace.building,
    GameSpace.road,
    GameSpace.road,
    GameSpace.water,
    GameSpace.water,
    GameSpace.water,
    GameSpace.road,
    GameSpace.field,
    GameSpace.mountain,
    GameSpace.field,
    GameSpace.road,
    GameSpace.building,
    GameSpace.water,
  ],
  [
    GameSpace.water,
    GameSpace.field,
    GameSpace.field,
    GameSpace.road,
    GameSpace.field,
    GameSpace.water,
    GameSpace.water,
    GameSpace.water,
    GameSpace.road,
    GameSpace.building,
    GameSpace.mountain,
    GameSpace.building,
    GameSpace.road,
    GameSpace.field,
    GameSpace.water,
  ],
  [
    GameSpace.water,
    GameSpace.building,
    GameSpace.road,
    GameSpace.road,
    GameSpace.building,
    GameSpace.water,
    GameSpace.water,
    GameSpace.forest,
    GameSpace.road,
    GameSpace.road,
    GameSpace.road,
    GameSpace.road,
    GameSpace.road,
    GameSpace.building,
    GameSpace.water,
  ],
  [
    GameSpace.water,
    GameSpace.building,
    GameSpace.building,
    GameSpace.field,
    GameSpace.field,
    GameSpace.field,
    GameSpace.field,
    GameSpace.forest,
    GameSpace.forest,
    GameSpace.field,
    GameSpace.water,
    GameSpace.water,
    GameSpace.road,
    GameSpace.water,
    GameSpace.water,
  ],
  [
    GameSpace.water,
    GameSpace.water,
    GameSpace.building,
    GameSpace.building,
    GameSpace.field,
    GameSpace.field,
    GameSpace.field,
    GameSpace.field,
    GameSpace.field,
    GameSpace.field,
    GameSpace.water,
    GameSpace.water,
    GameSpace.field,
    GameSpace.field,
    GameSpace.water,
  ],
  [
    GameSpace.water,
    GameSpace.water,
    GameSpace.water,
    GameSpace.water,
    GameSpace.mountain,
    GameSpace.building,
    GameSpace.mountain,
    GameSpace.forest,
    GameSpace.field,
    GameSpace.field,
    GameSpace.water,
    GameSpace.field,
    GameSpace.building,
    GameSpace.building,
    GameSpace.water,
  ],
  [
    GameSpace.water,
    GameSpace.water,
    GameSpace.water,
    GameSpace.water,
    GameSpace.water,
    GameSpace.water,
    GameSpace.water,
    GameSpace.water,
    GameSpace.water,
    GameSpace.water,
    GameSpace.water,
    GameSpace.water,
    GameSpace.water,
    GameSpace.water,
    GameSpace.water,
  ],
];

isValidGrid(gameGrid);
