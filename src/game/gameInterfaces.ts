export interface GameResponse {
  games: Array<GameFromServer>;
}

export interface GameFromServer {
  id: number;
  start: Date;
  ul: string;
  vip: boolean;
  player_count: number;
  constructor: boolean;
  users: UserId[];
}

export interface UserId {
  [key: number]: string;
}
