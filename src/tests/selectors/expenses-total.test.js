import expenses from '../fixtures/expenses';
import selectExpensesTotal from '../../selectors/expenses-total.js';

test('should return 0 if no expenses', () => {
    const total = selectExpensesTotal([]);
    expect(total).toBe(0);
});

test('should correctly add up a single expense', () => {
    const singleExpenseArray = [expenses[0]];
    const total = selectExpensesTotal(singleExpenseArray);
    expect(total).toBe(expenses[0].amount);
});

test('should correctly add up multiple expenses', () => {
    const total = selectExpensesTotal(expenses);
    expect(total).toBe(114195);
});