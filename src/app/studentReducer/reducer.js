const initialState = {
  student: sessionStorage.getItem("student"),
  profile: {}
};

export const studentReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "SET_STUDENTS":
      return { ...state, profile: payload };
    default:
      return state;
  }
};
