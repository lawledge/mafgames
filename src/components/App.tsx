import React from "react";
import { TopBar } from "./TopBar";
import { GameContainer } from "../containers/GameContainer";

const App: React.FC = () => {
  return (
    <>
      <TopBar />
      <GameContainer />
    </>
  );
};

export default App;
