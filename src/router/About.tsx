import React from "react";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import { Paper, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexWrap: "wrap",
      "& > *": {
        margin: theme.spacing(1),
        width: theme.spacing(16),
        height: theme.spacing(16),
      },
      paddingTop: 20,
      alignItems: "center",
      justifyContent: "center",
    },
    paper: {
      textAlign: "center",
      width: "100vh",
      height: "60vh",
      alignSelf: "flex-end",
      // justifyContent: "center",

      // fontFamily: "Arial",
    },
    textgroup: {
      padding: "10px 20px 20px 20px",
    },
    typography: {
      maxWidth: 700,
    },
  })
);

export const About: React.FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Paper elevation={3} className={classes.paper}>
        <div className={classes.textgroup}>
          <Typography variant="h4" component="h2">
            About
          </Typography>
          <Typography
            variant="h6"
            component="h2"
            className={classes.typography}
          >
            With this project you can get list of game via Mafia Online API
          </Typography>
          <Typography
            variant="h6"
            component="h2"
            className={classes.typography}
          >
            Also you can add games to favorites
          </Typography>
        </div>
      </Paper>
    </div>
  );
};
