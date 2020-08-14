import React from 'react';
import { Link } from 'react-router-dom';
import selectExpensesTotal from '../selectors/expenses-total';
import selectExpenses from '../selectors/expenses';
import numeral from 'numeral';
import { connect } from 'react-redux';

export const ExpensesSummary = ({ numOfExpenses, expensesTotal }) => (
    <div className="page-header">
        <div className="content-container">
            <h1 className="page-header__title">
                Viewing <span className="bold">{numOfExpenses}</span>
                {numOfExpenses === 1 ? <span> expense </span> : <span> expenses </span>}
            totalling <span className="bold">{numeral(expensesTotal / 100).format('$0,0.00')}</span>
            </h1>
            <div className="page-header__actions">
                <Link className="button" to="/create">Add Expense</Link>
            </div>
        </div>
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