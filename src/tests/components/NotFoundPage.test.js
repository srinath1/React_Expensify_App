import React from 'react';
//import ReactShallowRenderer from 'react-test-renderer/shallow';
import { shallow } from 'enzyme';
//import toJSON from 'enzyme-to-json'
import NotFoundPage from '../../components/NotFoundPage'
test('should renderer NotFoundPage correctly',()=>{



    // const renderer=new ReactShallowRenderer()
    // renderer.render(<Header />)
    // expect(renderer.getRenderOutput()).toMatchSnapshot();

     const wrapper=shallow(<NotFoundPage />);
     expect(wrapper).toMatchSnapshot()

    // expect(wrapper.find('h1').text()).toBe('Expensify')

})