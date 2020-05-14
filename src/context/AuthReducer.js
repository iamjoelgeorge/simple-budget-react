export default (state, action) => {
  switch (action.type) {
    case 'NEW_USER':
      return {
        ...state,
        users: [...state.users, action.payload]
      };
    case 'VALIDATE_USER':
      return {
        ...state,
        isAuthenticated: action.payload
      };
    default:
      return state;
  }
};
