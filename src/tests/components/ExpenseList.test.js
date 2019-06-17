// import React from 'react';
// import { shallow } from 'enzyme';
// import { ExpenseList } from '../../components/ExpenseList';
// import expenses from '../fixtures/expenses'
// test('should render expenselist with expense',()=>{

//     const wrapper=shallow(<ExpenseList expenses={expenses} />)
//     expect(wrapper).toMatchSnapshot()
// })

import React from 'react';
//import ReactShallowRenderer from 'react-test-renderer/shallow';
import { shallow } from 'enzyme';
//import toJSON from 'enzyme-to-json'
import {ExpenseList} from '../../components/ExpenseList'
import expenses from '../fixtures/expenses'
test('should renderer correctly',()=>{



    // const renderer=new ReactShallowRenderer()
    // renderer.render(<Header />)
    // expect(renderer.getRenderOutput()).toMatchSnapshot();

     const wrapper=shallow(<ExpenseList expenses={expenses} />);
     expect(wrapper).toMatchSnapshot()

    // expect(wrapper.find('h1').text()).toBe('Expensify')

})

test('testing with a empty array',()=>{

const wrapper=shallow(<ExpenseList  expenses={[]} />)
expect(wrapper).toMatchSnapshot()

})