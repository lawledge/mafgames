import { CHECK_PLAYER_STATS } from "./playerActionType";

interface Action {
  type: string;
  payload: string;
}

const defaultState = {
  stats: [],
};

export const playerReducer = (state = defaultState, action: Action) => {
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
