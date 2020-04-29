import {
  SET_CURRENT_GAME,
  LOAD_GAME_LIST,
  PUT_GAME_LIST,
} from "./gameActionTypes";

interface Action {
  type: string;
  payload: string;
}

const defaultGameReducerState = {
  games: [
    {
      id: 0,
    },
  ],
};

const defaultCurrentGameReducerState = {
  currentGame: {
    id: 0,
    users: [{ 100000: "0" }],
  },
};

export const gameReducer = (
  state = defaultGameReducerState,
  action: Action
) => {
  // console.log(state);
  switch (action.type) {
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

export const currentGameReducer = (
  state = defaultCurrentGameReducerState,
  action: Action
) => {
  // console.log(state);
  switch (action.type) {
    case SET_CURRENT_GAME:
      return {
        ...state,
        currentGame: action.payload,
      };
  }
  return state;
};
