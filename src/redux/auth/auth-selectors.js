const getIsLoggedIn = (state) => state.auth.isLoggedIn;

const getUsername = (state) => state.auth.user.name;

const getIsFetchingCurrent = (state) => state.auth.isFetchingCurrentUser;

const authSelectors = {
  getIsLoggedIn,
  getUsername,
  getIsFetchingCurrent,
};
export default authSelectors;
// export const getIsLoggedIn = (state) => state.auth.isLoggedIn;
// export const getUsername = (state) => state.auth.user.name;
// export const getIsFetchingCurrent = (state) => state.auth.isFetchingCurrent;
// export const getUserEmail = (state) => state.auth.user.email;
// export const getError = (state) => state.error;
