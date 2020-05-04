import React from "react";
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

interface RootState {
  game: GameResponse;
  player: object;
}

// interface CurrentIsSet {
//   currentIsSet
// }

interface Props {
  selectIsChanged: () => void;
  loadedGameList: GameResponse;
  currentIsSet?: GameFromServer;
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

  console.log(state);
  // const counter = useSelector((state) => state.game);
  const classes = useStyles();

  const inputLabel = React.useRef<HTMLLabelElement>(null);
  const [labelWidth, setLabelWidth] = React.useState(0);

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
      console.log(clickedGame[0]);
    }
  };

  // const useLocalState = (localItem: string) => {
  //   const [local, setState] = useState(localStorage.getItem(localItem));
  //   const setLoc = (newItem: string) => {
  //     localStorage.setItem(localItem, newItem);
  //     setState(newItem);
  //   };
  //   return [local, setLoc] as const;
  // };

  // go id

  // const [fav, setFav] = useLocalState(
  //   props.currentIsSet ? props.currentIsSet.id.toString() : "undefined"
  // );
  return (
    <Box m={2}>
      <Grid container className={classes.container}>
        {console.log(props.currentIsSet)}
        {props.currentIsSet ? (
          // go all game info

          <Fab
            onClick={() => dispatch(setFav(props.currentIsSet))}
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
