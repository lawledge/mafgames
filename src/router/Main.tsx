import React from "react";
import { TopBar } from "../ui/TopBar";
import { GameContainer } from "../game/GameContainer";
import { Footer } from "../ui/BottomNav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export const Main: React.FC = () => {
  return (
    <>
      <GameContainer />
    </>
  );
};
