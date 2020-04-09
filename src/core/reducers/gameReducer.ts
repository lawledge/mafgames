import { CHANGE_CURRENT_GAME } from "../actionTypes/gameActionTypes";

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
  // console.log(state);
  switch (action.type) {
    case CHANGE_CURRENT_GAME:
      return {
        ...state,
        game: action.payload,
      };
  }

  return state;
};

// game => users => stats
