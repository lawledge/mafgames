import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
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
import { GameResponse, GameFromServer } from "./gameInterface";
import { PlayerContainer } from "../player/PlayerContainer";
import { setGame, setFav } from "./gameActionCreator";
import FavoriteIcon from "@material-ui/icons/Favorite";
import Replay from "@material-ui/icons/Replay";
import { loadGames } from "../game/gameActionCreator";

interface RootState {
  game: GameResponse;
  player: object;
}

// interface CurrentIsSet {
//   currentIsSet
// }
// selectIsChanged: () => void;
interface Props {
  loadedGameList: GameResponse;
  currentIsSet?: GameFromServer;
  // favIsSet: (curgame: number, fn: (check: boolean) => void) => void;
}

const useStyles = makeStyles((theme) => ({
  formControl: {
    // margin: theme.spacing(1),
    minWidth: 130,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  container: {
    alignItems: "center",
    justifyContent: "center",
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
  // const counter = useSelector((state) => state.game);
  const classes = useStyles();

  const inputLabel = React.useRef<HTMLLabelElement>(null);
  const [labelWidth, setLabelWidth] = React.useState(0);

  const [favInStore, setFavInStore] = React.useState(Boolean);

  const changeLabelWidth = () => {
    setLabelWidth(inputLabel.current!.offsetWidth);
  };

  const handleChange = (e: React.ChangeEvent<{ value: unknown }>) => {
    if (e.target.value !== "none") {
      const clickedGame = state.game.games.filter(
        ({ id }) => id === e.target.value
      );
      // setCurrentGame
      dispatch(setGame(clickedGame[0]));
    }
  };

  // const handleClick = () => {
  //   if (props.currentIsSet !== undefined) {
  //     props.favIsSet(props.currentIsSet.id, (check) => {
  //       console.log(check);
  //       return setFavInStore(check);
  //     });
  //   }
  // };

  useEffect(() => {
    dispatch(loadGames());
  }, []);
  return (
    <Box m={2}>
      {console.log(favInStore)}
      <Grid container className={classes.container}>
        {props.currentIsSet ? (
          <Fab
            onClick={() => {
              dispatch(setFav(props.currentIsSet));
              setFavInStore(true);
              // handleClick();
              // favInStore === false
              //   ? dispatch(setFav(props.currentIsSet))
              //   : alert("You've already added this game!");
              // props.favIsSet(
              //   props?.currentIsSet?.id ? props.currentIsSet.id : 0
              // );
            }}
            disabled={favInStore}
            size="small"
            color="primary"
            aria-label="favorite"
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
              Choose a game!
            </InputLabel>
            <Select
              //   value={props.game.id}
              onChange={handleChange}
              onClick={() => {
                favInStore === true ? setFavInStore(false) : console.log("cl");
              }}
              //  if (favInStore === true) setFavInStore(false);
              // onChange={props.selectIsChanged}
              labelWidth={labelWidth}
              inputProps={{
                name: "value",
                id: "outlined-age-simple",
              }}
              onOpen={changeLabelWidth}
            >
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
          </FormControl>
        </Grid>
        <Fab
          onClick={() => dispatch(loadGames())}
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
