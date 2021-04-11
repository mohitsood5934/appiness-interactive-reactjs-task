import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_FAILED,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER,
} from "../constants/userConstants";

export const login = (username, password) => (dispatch) => {
  dispatch({ type: USER_LOGIN_REQUEST });

  if (USER.username === username && USER.password === password) {
    dispatch({ type: USER_LOGIN_SUCCESS, payload: USER });
    localStorage.setItem("isLoggedIn", true);
  } else {
    const errorMessage =
      username.length === 0 && password.length === 0
        ? "Please enter username and password"
        : username.length === 0
        ? "Please enter username"
        : password.length === 0
        ? "Please enter password"
        : "Invalid username or password";
    dispatch({
      type: USER_LOGIN_FAILED,
      payload: errorMessage,
    });
  }
};

export const logout = () => (dispatch) => {
  dispatch({ type: USER_LOGOUT });
  localStorage.removeItem("isLoggedIn");
};
