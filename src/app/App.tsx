import React from "react";
import { TopBar } from "../ui/TopBar";
import { GameContainer } from "../game/GameContainer";
import { Footer } from "../ui/BottomNav";

const App: React.FC = () => {
  return (
    <>
      <TopBar />
      <GameContainer />
      <Footer />
    </>
  );
};

export default App;
