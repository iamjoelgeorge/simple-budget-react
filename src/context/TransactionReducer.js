export default (state, action) => {
  switch (action.type) {
    case 'ADD_TRANSACTION':
      return {
        ...state,
        transactions: [...state.transactions, action.payload]
      };
    case 'TO_DELETE':
      return {
        ...state,
        transactions: [...action.payload]
      };
    case 'IS_MODAL_OPEN':
      return {
        ...state,
        isModalOpen: !state.isModalOpen
      };
    case 'DELETE_TRANSACTIONS':
      return {
        ...state,
        transactions: [...action.payload]
      };
    default:
      return state;
  }
};
