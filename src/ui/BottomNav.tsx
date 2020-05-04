import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import InfoIcon from "@material-ui/icons/Info";
import FavoriteIcon from "@material-ui/icons/Favorite";
import HomeIcon from "@material-ui/icons/Home";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    width: 500,
    backgroundColor: "transparent",
  },
  action: {
    color: "#fff",
  },
});

export const Footer = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <Link to="/">
        <BottomNavigationAction
          className={classes.action}
          label="Main"
          icon={<HomeIcon />}
        />
      </Link>
      <Link to="/favorites">
        <BottomNavigationAction
          className={classes.action}
          label="Favorites"
          icon={<FavoriteIcon />}
        />
      </Link>
      <Link to="/about">
        <BottomNavigationAction
          className={classes.action}
          label="About"
          icon={<InfoIcon />}
        />
      </Link>
    </BottomNavigation>
  );
};
