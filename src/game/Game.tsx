import React, { useState } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import {
  Box,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Fab,
} from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { GameResponse } from "./gameInterface";
import { PlayerContainer } from "../player/PlayerContainer";
import { setGame } from "./gameActionCreator";
import FavoriteIcon from "@material-ui/icons/Favorite";
import Replay from "@material-ui/icons/Replay";

interface RootState {
  game: GameResponse;
  player: object;
}

interface Props {
  selectIsChanged: () => void;
  loadedGameList: GameResponse;
  currentIsSet: number;
}

const useStyles = makeStyles((theme) => ({
  root: {
    // display: 'flex',
    // flexWrap: 'wrap',
  },
  formControl: {
    // margin: theme.spacing(1),
    minWidth: 130,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  fab: {
    margin: "0 10px 0",
  },
}));

export const Game: React.FC<Props> = (props) => {
  const checkState = (state: RootState) => state;
  // прокинуть через пропсы
  const state = useSelector(checkState);
  const dispatch = useDispatch();

  console.log(state);
  // const counter = useSelector((state) => state.game);
  const classes = useStyles();

  const inputLabel = React.useRef<HTMLLabelElement>(null);
  const [labelWidth, setLabelWidth] = React.useState(0);

  const changeLabelWidth = () => {
    setLabelWidth(inputLabel.current!.offsetWidth);
  };

  const handleChange = (e: React.ChangeEvent<{ value: unknown }>) => {
    if (e.target.value != "none") {
      const clickedGame = state.game.games.filter(
        ({ id }) => id === e.target.value
      );
      // setCurrentGame
      dispatch(setGame(clickedGame[0]));
      console.log(clickedGame[0]);
    }
  };

  return (
    <Box m={2}>
      <Grid
        container
        style={{ alignItems: "center", justifyContent: "center" }}
      >
        {props.currentIsSet != 0 ? (
          <Fab
            onClick={() => console.log("2")}
            size="small"
            color="primary"
            aria-label="favorites"
            className={classes.fab}
          >
            <FavoriteIcon />
          </Fab>
        ) : (
          ""
        )}

        <Grid item xs={6}>
          <FormControl
            fullWidth
            variant="outlined"
            className={classes.formControl}
          >
            <InputLabel ref={inputLabel} htmlFor="outlined-age-simple">
              Choose game!
            </InputLabel>
            <Select
              //   value={props.game.id}
              onChange={handleChange}
              // onChange={props.selectIsChanged}
              labelWidth={labelWidth}
              inputProps={{
                name: "value",
                id: "outlined-age-simple",
              }}
              onOpen={changeLabelWidth}
              style={{ display: "flex" }}
            >
              {/* {console.log(typeof props.loadedGameList.games)} */}

              {props.loadedGameList.games.length === 0 ||
              props.loadedGameList.games.length === null ? (
                <MenuItem value="none">
                  <em>Нет игр</em>
                </MenuItem>
              ) : (
                props.loadedGameList.games.map(({ id }) => (
                  <MenuItem key={id} value={id}>
                    {id}
                  </MenuItem>
                ))
              )}
            </Select>

            {/* флексами лого и кнопку */}
          </FormControl>
        </Grid>
        <Fab
          onClick={() => console.log("2")}
          size="small"
          color="primary"
          aria-label="reload"
          className={classes.fab}
        >
          <Replay />
        </Fab>
      </Grid>
      <Grid item xs={12}>
        {/* <ExtraButton /> */}
        <PlayerContainer />
      </Grid>
    </Box>
  );
};
