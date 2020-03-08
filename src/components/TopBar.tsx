import React, { useEffect, useRef, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  Typography,
  TextField,
  Fab
} from "@material-ui/core/";
import Replay from "@material-ui/icons/Replay";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

// const getFinishedLog = (logId, onsuccess, onerror) => {

//   mafiaApiQuery('action=log&param=log&id=' + encodeURIComponent(logId), onsuccess, onerror);

// }

// getCurrentLogs()

export const TopBar: React.FC = () => {
  const ref = useRef<HTMLButtonElement>(null);

  const classes = useStyles();

  const [button, setButton] = useState(false);

  const buttonPressHandler = () => {
    setButton(prevState => !prevState);
    console.log(button);
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          {/* флексами лого и кнопку */}
          <Typography variant="h6" className={classes.title}>
            MAFstats
          </Typography>
          {console.log("check")}
          {/* кнопку */}
          <Fab
            onClick={buttonPressHandler}
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
