import React from 'react';
//import ReactShallowRenderer from 'react-test-renderer/shallow';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json'
import ExpenseDashboardPage from '../../components/ExpenseDashboardPage'
test('should renderer ExpenseDashboardPage correctly',()=>{



    // const renderer=new ReactShallowRenderer()
    // renderer.render(<Header />)
    // expect(renderer.getRenderOutput()).toMatchSnapshot();

     const wrapper=shallow(<ExpenseDashboardPage />);
     expect(toJSON(wrapper)).toMatchSnapshot()

    // expect(wrapper.find('h1').text()).toBe('Expensify')

})