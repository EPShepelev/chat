const initialState = {
  data: null,
  token: window.localStorage.token,
  isAuth: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "ATTACHMENTS:ADD_FILE":
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case "ATTACHMENTS:REMOVE_FILE":
      return {
        ...state,
        isAuth: payload,
      };
    default:
      return state;
  }
};
