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
