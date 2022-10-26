export const toggleSidebar = (payload) => {
  return (dispatch) => {
    dispatch({ type: "TOGGLE", payload });
  };
};
