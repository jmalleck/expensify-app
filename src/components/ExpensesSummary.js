import React from 'react';
import selectExpensesTotal from '../selectors/expenses-total';
import selectExpenses from '../selectors/expenses';
import numeral from 'numeral';
import { connect } from 'react-redux';

export const ExpensesSummary = ({ numOfExpenses, expensesTotal }) => (
    <div>
        <h1>
            Viewing {numOfExpenses}
            {numOfExpenses === 1 ? <span> expense </span> : <span> expenses </span>}
            totalling {numeral(expensesTotal / 100).format('$0,0.00')}
        </h1>
    </div>
);

const mapStateToProps = (state) => {
    const filteredExpenses = (selectExpenses(state.expenses, state.filters));
    return {
        numOfExpenses: filteredExpenses.length,
        expensesTotal: selectExpensesTotal(filteredExpenses)
    };
};

export default connect(mapStateToProps)(ExpensesSummary);