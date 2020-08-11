import { shallow } from 'enzyme';
import React from 'react';
import { ExpensesSummary } from '../../components/ExpensesSummary';


test('Should display ExpensesSummary correctly with no expenses', () => {
    const wrapper = shallow(<ExpensesSummary />);
    expect(wrapper).toMatchSnapshot();
});

test('Should display ExpensesSummary correctly with expenses', () => {
    const wrapper = shallow(<ExpensesSummary numOfExpenses={2} expensesTotal={150} />);
    expect(wrapper).toMatchSnapshot();
});