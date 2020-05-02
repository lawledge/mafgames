import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { GameFromServer } from "../game/gameInterface";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    minWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

export const About: React.FC = () => {
  return <h1> It's favorites! </h1>;
};
