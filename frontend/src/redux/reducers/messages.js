const initialState = {
  items: null,
  isLoading: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "MESSAGES:SET_ITEMS":
      return {
        ...state,
        items: payload,
      };
    default:
      return state;
  }
};
