import userSlice from "../redux/userSlice";
const action = userSlice.actions;

export const fetchUserMiddleWare = (param) => {
  return async (dispatch) => {
    try {
      dispatch(action.userLoading());
      const resp = await fetch(
        `https://jsonplaceholder.typicode.com/users/${param}`,
      );
      const user = await resp.json();
      console.log("User: ", user);
      dispatch(action.userData(user));
    } catch (err) {
      dispatch(action.userError());
    }
  };
};
