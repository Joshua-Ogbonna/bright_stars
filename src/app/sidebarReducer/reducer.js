const initialState = {
  isOpen: false,
};

export const sidebarReducer = (state = initialState, actions) => {
  const { type, payload } = actions;
  switch (type) {
    case "TOGGLE":
        return {
            ...state,
            isOpen: payload
        }
    default:
      return state;
  }
};
