import React from 'react';
import {shallow} from 'enzyme';
import Todos from './Todos';

describe('<Todos /> rendering', () => {
  it("should render You have no todo's left, yay!", () => {
    const todos = []
    const params = {todos, undefined}
    const wrapper = shallow(<Todos {...params}/>);
    const p = wrapper.find('p.center')
    const result = p.text();
    console.log(result)
    expect(result).toBe('You have no todos left, yay!');
  });
});
