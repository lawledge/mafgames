import { STATS_COMPARE } from "../actionTypes/playerActionTypes";

interface Iaction {
  type: string;
  payload: string;
}

const defaultState = {
  stats: [],
};

export const statsReducer = (state = defaultState, action: Iaction) => {
  switch (action.type) {
    case STATS_COMPARE:
      return {
        ...state,
        games: action.payload,
      };
  }

  return state;
};

// game => users => stats
