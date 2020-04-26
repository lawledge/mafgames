// export const fetchGames = () => {
//   return fetch(
//     "https://jsonplaceholder.typicode.com/todos/1"
//   ).then((response) => response.json());
// };
export interface gameRequest {
  r: string;
  games: Game;
}

export interface Game {
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

export const fetchGames = () => {
  try {
    const response = fetch(
      "https://www.mafiaonline.ru/api/api.php?action=log&param=current"
    ).then((res) => res.json());
    return response;
  } catch (error) {
    return error;
  }
};
