import React, { useEffect, useRef, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  Typography,
  TextField,
  Fab,
} from "@material-ui/core/";
import Replay from "@material-ui/icons/Replay";
import { useDispatch } from "react-redux";
import { loadGames } from "../game/gameActionCreator";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export const TopBar: React.FC = () => {
  const ref = useRef<HTMLButtonElement>(null);

  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          {/* флексами лого и кнопку */}
          <Typography variant="h6" className={classes.title}>
            mafia.stats
          </Typography>

          <Fab
            onClick={() => dispatch(loadGames())}
            size="small"
            color="primary"
            aria-label="reload"
          >
            <Replay />
          </Fab>
        </Toolbar>
      </AppBar>
    </>
  );
};
