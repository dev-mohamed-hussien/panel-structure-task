export const onLogin = (token, user) => {
  localStorage.setItem("token", token);
  localStorage.setItem("profile", JSON.stringify(user));
  return { type: "LOGIN", token, payload: user };
};
export const Logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("profile");

  return { type: "LOGOUT_USEER" };
};
