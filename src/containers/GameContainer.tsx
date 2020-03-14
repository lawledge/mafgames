import React, { useEffect } from "react";
import Game from "../components/Game";
// import axios from "axios";
// конфликт из-за отсутствия провайдера
// import { connect } from "react-redux";
// import { setGame } from "../store/game/actions";
// сюда надо импортнуть ф-ю из PlayerContainer, которую повесить потом на OnChange

export const GameContainer: React.FC = () => {
  return (
    <>
      <Game />
    </>
  );
};
