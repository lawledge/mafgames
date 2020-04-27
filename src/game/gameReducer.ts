import {
  SET_CURRENT_GAME,
  LOAD_GAME_LIST,
  PUT_GAME_LIST,
} from "./gameActionTypes";

interface Iaction {
  type: string;
  payload: string;
}

const defaultState = {
  games: {
    id: "0",
  },
};

export const gameReducer = (state = defaultState, action: Iaction) => {
  // console.log(state);
  switch (action.type) {
    // case SET_CURRENT_GAME:
    //   return {
    //     ...state,
    //     game: action.payload,
    //   };
    case PUT_GAME_LIST:
      return {
        ...state,
        games: action.payload,
      };
    // case LOAD_GAME_LIST:
    //   return {
    //     ...state,
    //     game: "123",
    //   };
  }
  return state;
};

// game => users => stats
