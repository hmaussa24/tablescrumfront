export const authLogin = token => ({
  type: "LOGIN",
  token
});

export const authLogOut = token => ({
  type: "LOGOUT",
  token
});