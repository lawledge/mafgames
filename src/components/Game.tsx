import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import {
  Box,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem
} from "@material-ui/core";
import Brightness3Icon from "@material-ui/icons/Brightness3";
// import ExtraButton from "./ExtraButtons";
// import PlayerContainer from "../containers/PlayerContainer";
// import Player from "./Player";
// import { setGame } from "../store/game/actions";

const useStyles = makeStyles(theme => ({
  root: {
    // display: 'flex',
    // flexWrap: 'wrap',
  },
  formControl: {
    // margin: theme.spacing(1),
    minWidth: 130
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}));

export default function Game() {
  const classes = useStyles();

  const inputLabel = React.useRef<HTMLInputElement>(null);
  const [labelWidth, setLabelWidth] = React.useState(0);

  const changeLabelWidth = () => {
    setLabelWidth(inputLabel.current!.offsetWidth);
  };

  const handleChange = () => {
    console.log("213");
  };

  return (
    <Box m={2}>
      <Grid container>
        <Grid item xs={6}>
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel ref={inputLabel} htmlFor="outlined-age-simple">
              Логи
            </InputLabel>
            <Select
              //   value={props.game.id}
              onChange={handleChange}
              labelWidth={labelWidth}
              inputProps={{
                name: "value",
                id: "outlined-age-simple"
              }}
              onOpen={changeLabelWidth}
            >
              <MenuItem value="none">
                <em>Нет партий</em>
              </MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={6}>
          {/* <ExtraButton /> */}
        </Grid>
      </Grid>
      {/* <PlayerContainer game={props.game} /> */}
    </Box>
  );
}