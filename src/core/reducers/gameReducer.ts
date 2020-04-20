import {
  SET_CURRENT_GAME,
  LOAD_LIST_OF_GAMES,
} from "../actionTypes/gameActionTypes";

interface Iaction {
  type: string;
  payload: string;
}

const defaultState = {
  game: {
    id: [],
  },
};

export const gameReducer = (state = defaultState, action: Iaction) => {
  console.log(state);
  switch (action.type) {
    case SET_CURRENT_GAME:
      return {
        ...state,
        game: action.payload,
      };
    case LOAD_LIST_OF_GAMES:
      return {
        ...state,
        game: "123",
      };
  }
  return state;
};

// game => users => stats
