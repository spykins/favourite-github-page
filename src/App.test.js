import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {Provider} from 'react-redux'
import configureMockStore from 'redux-mock-store';


configure({ adapter: new Adapter() });
import ReactDOM from 'react-dom';

import App from './App';

const mockStore = configureMockStore();
let store = mockStore({});

it('renders without crashing', () => {
  const div = document.createElement('div');
  const wrapper = <Provider store={store}><App/></Provider>
  ReactDOM.render(wrapper, div);
  ReactDOM.unmountComponentAtNode(div);
});
