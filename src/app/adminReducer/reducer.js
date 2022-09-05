const initialState = {
  students: [],
  teachers: [],
};

export const adminReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "SET_STUDENTS":
      return {
        ...state,
        students: payload,
      };
    case "SET_TEACHERS":
      return {
        ...state,
        teachers: payload,
      };
    case "DELETE_STUDENT":
      return state
    default:
      return state;
  }
};
