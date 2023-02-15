export const ADD_EXPENSE = 'ADD_EXPENSE';
export const PLAN_EXPENSE = 'PLAN_EXPENSE';

export function addExpense(designation: string, type: string ) {
    console.log("from actions", designation, type)
  return { type: ADD_EXPENSE, payload: { designation, type } };
}

export function planExpense(recurrence: string, startDate: string, endDate: string) {
  console.log("from actions", startDate, endDate,recurrence)

  return { type: PLAN_EXPENSE, payload: { recurrence, startDate, endDate } };
}
