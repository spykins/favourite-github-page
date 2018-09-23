import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {Provider} from 'react-redux'
import {mount} from 'enzyme';
import configureMockStore from 'redux-mock-store';
import SearchRepo from './search_repo';

configure({ adapter: new Adapter() });

let store;

describe("Test SearchRepo component", () => {

    beforeEach(() => {
        const mockStore = configureMockStore();
        store = mockStore({});
      });

    it("Should update the state when the input text types", () => {
        const wrapper = mount( <Provider store={store}><SearchRepo /></Provider>);
        expect(wrapper.find('FormControl').exists()).toBe(true)
        const input = wrapper.find("FormControl");
        input.simulate('focus');
        input.simulate('change', { target: { value: 'Hello' }});
        wrapper.update();
        //expect(wrapper.find('FormControl').value).toEqual("Hello")


    })
})
