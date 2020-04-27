import React from "react";
import { TopBar } from "../ui/TopBar";
import { GameContainer } from "../game/GameContainer";

const App: React.FC = () => {
  return (
    <>
      <TopBar />
      <GameContainer />
    </>
  );
};

export default App;
