import { ADD_EXPENSE, PLAN_EXPENSE } from '../actions/actionTypes';

export interface AddExpenseState {
  designation: string;
  type: string;
  recurrence: string;
  startDate: string;
  endDate: string;
}

const initialState: AddExpenseState = {
  designation: '',
  type: '',
  recurrence: '',
  startDate: '',
  endDate: '',
};

export function expenseReducer(state = initialState, action: any): AddExpenseState {
  switch (action.type) {
    case ADD_EXPENSE:
      return { ...state, designation: action.payload.designation, type: action.payload.type };
    case PLAN_EXPENSE:
      return {
        ...state,
        recurrence: action.payload.recurrence,
        startDate: action.payload.startDate,
        endDate: action.payload.endDate,
      };
    default:
      return state;
  }
}
