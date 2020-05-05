import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography } from "@material-ui/core/";
import { Menu } from "./Menu";

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
  // const ref = useRef<HTMLButtonElement>(null);

  const classes = useStyles();

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          {/* флексами лого и кнопку */}
          <Typography variant="h6" className={classes.title}>
            mafgames
          </Typography>

          <Menu />
        </Toolbar>
      </AppBar>
    </>
  );
};
