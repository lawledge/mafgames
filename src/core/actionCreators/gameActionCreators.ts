import * as actions from "../actionTypes/gameActionTypes";

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
  type: actions.SET_CURRENT_GAME,
  // payload: game,
});

export const loadGames = () => ({
  type: actions.LOAD_LIST_OF_GAMES,
});
