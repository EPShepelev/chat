const initialState = {
  items: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "ATTACHMENTS:ADD_FILE":
      return {
        ...state,
        items: [...state.items, payload],
      };
    case "ATTACHMENTS:REMOVE_FILE":
      return {
        ...state,
        isAuth: state.items.filter((file) => file.__id !== payload),
      };
    default:
      return state;
  }
};
