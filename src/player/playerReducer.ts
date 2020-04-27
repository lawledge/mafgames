import { CHECK_PLAYER_STATS } from "./playerActionTypes";

interface Iaction {
  type: string;
  payload: string;
}

const defaultState = {
  stats: [],
};

export const playerReducer = (state = defaultState, action: Iaction) => {
  switch (action.type) {
    case CHECK_PLAYER_STATS:
      return {
        // ...state,
        // games: action.payload,
      };
  }

  return state;
};

// game => users => stats
