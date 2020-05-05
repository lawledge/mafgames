import React from "react";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Divider from "@material-ui/core/Divider";
import PersonIcon from "@material-ui/icons/Person";
import { GameFromServer } from "../game/gameInterface";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    minWidth: 360,
    backgroundColor: theme.palette.background.paper,
    textAlign: "center",
  },
  button: {
    marginBottom: 4,
  },
}));

interface RootState {
  // curGame: CurrentGame;
  fav: {
    favorite: GameFromServer[];
  };
}

const checkState = (state: RootState) => state;

export const Fav: React.FC = () => {
  const state = useSelector(checkState);
  console.log(state);
  console.log(state.fav.favorite.length);
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <List>
        Favorite Games ({state.fav.favorite.length - 1})
        {state.fav.favorite.length > 1 ? (
          state.fav.favorite.map(({ id, users }) =>
            id === 0 ? (
              ""
            ) : (
              <div key={id}>
                <ListItem>
                  {/* {console.log(userMapping)} */}

                  <ListItemText
                    primary={`Game ID: ${id}`}
                    secondary={`Players count: ${users.length}`}
                  />
                </ListItem>
                {users.map((userMapping: any) =>
                  Object.keys(userMapping).map((id) => (
                    <div key={id}>
                      <ListItem>
                        <ListItemAvatar>
                          <Avatar>
                            <PersonIcon />
                          </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                          primary={userMapping[id]}
                          secondary={`id: ${id === "-1" ? "скрыт" : id}`}
                        />
                      </ListItem>
                      <Divider variant="middle" component="li" />
                    </div>
                  ))
                )}
                <Divider variant="inset" component="li" />
              </div>
            )
          )
        ) : (
          <h3>Add game to favorites</h3>
        )}
      </List>
    </div>
  );
};
