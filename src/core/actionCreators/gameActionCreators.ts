import { SET_CURRENT_GAME } from "../actionTypes/gameActionTypes";

// interface Igame {
//   game: {
//     id: number;
//   };
//   // etc
// }

// type Game = {
//   id: number;
// };

// interface GameInterface {
//   game?: Game;
// }

interface ISetGame {
  type: string;
  // payload?: GameInterface;
}

export const setGame = (): ISetGame => ({
  type: SET_CURRENT_GAME,
  // payload: game,
});
