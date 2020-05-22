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
    case 'UPDATE_INCOME_SUB_CATEGORIES_TOTAL':
      return {
        ...state,
        incomeSubCategories: { ...action.payload }
      };
    case 'UPDATE_EXPENSE_SUB_CATEGORIES_TOTAL':
      return {
        ...state,
        expenseSubCategories: { ...action.payload }
      };
    case 'TOTAL_INCOME_EXPENSES':
      return {
        ...state,
        totalIncome: action.payload.totalIncome,
        totalExpenses: action.payload.totalExpenses
      };
    default:
      return state;
  }
};
