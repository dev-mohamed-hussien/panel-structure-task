const INITIAL_STATE = {
  token: localStorage.getItem("token") || "",
  user: JSON.parse(localStorage.getItem("profile")) || "",
};

const authReducder = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        token: action.token,
        user: action.payload,
      };
    case "LOGOUT_USEER":
      return {
        ...state,
        token: null,
        user: null,
      };
    default:
      return state;
  }
};

export default authReducder;
