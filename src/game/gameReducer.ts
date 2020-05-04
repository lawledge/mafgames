import {
  SET_CURRENT_GAME,
  PUT_GAME_LIST,
  SET_FAVORITE_GAME,
} from "./gameActionTypes";

import { GameFromServer } from "./gameInterface";

interface Action {
  type: string;
  payload?: GameFromServer;
}

const defaultGameReducerState = {
  games: [
    {
      id: 0,
    },
  ],
};

export const defaultCurrentGameReducerState = {
  currentGame: {
    id: 0,
    users: [{ 100000: "0" }],
  },
};

const defaultFavState = {
  favorite: [
    {
      id: 0,
      start: 0,
    },
  ],
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

export const setFavGameReducer = (state = defaultFavState, action: Action) => {
  switch (action.type) {
    case SET_FAVORITE_GAME:
      return {
        ...state,
        favorite: [...state.favorite, action.payload],
      };
  }
  return state;
};
