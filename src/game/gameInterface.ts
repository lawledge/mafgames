// Game list
export interface GameResponse {
  games: Array<GameFromServer>;
}

export interface CurrentGame {
  currentGame: GameFromServer;
}

export interface GameFromServer {
  id: number;
  start: Date;
  ul: string;
  vip: boolean;
  player_count: number;
  constructor: boolean;
  users: UserId;
}

export interface UserId {
  map(arg0: (userMapping: any) => void[]): import("react").ReactNode;
  [id: number]: string;
}

// Current game
