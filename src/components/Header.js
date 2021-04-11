import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  makeStyles,
} from "@material-ui/core";
import { logout } from "../actions/userActions";

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

const Header = () => {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();

  const logOutHandler = async () => {
    await dispatch(logout());
    history.push("/");
  };

  const isLoggedIn = localStorage.getItem("isLoggedIn") || false;

  return (
    <div className={classes.root}>
      <AppBar>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Appiness
          </Typography>
          {isLoggedIn && (
            <>
              <Button color="inherit" href="/dashboard">
                Dashboard
              </Button>
              <Button color="inherit" onClick={logOutHandler}>
                Logout
              </Button>
            </>
          )}
          {!isLoggedIn && (
            <Button color="inherit" href="/login">
              Login
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
