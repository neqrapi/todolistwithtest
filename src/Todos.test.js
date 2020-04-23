import React from 'react';
import {shallow,mount} from 'enzyme';
import Todos from './Todos';

describe('<Todos /> rendering', () => {
  it("should render You have no todo's left, yay!", () => {
    const todos = []
    const params = {todos, undefined}
    const wrapper = shallow(<Todos {...params}/>);
    const p = wrapper.find('p.center')
    const result = p.text();
    
    expect(result).toBe('You have no todos left, yay!');
  });
  it("should render  only todo if only one  was added ",()=>{
    const todos=[{id:1,content:'test'}]
    const props={todos,undefined}
    const wrapper=mount(<Todos {...props}/>)
    const div=wrapper.find({className: 'todos'})
		console.log(div.html())
    expect(div.children()).to.have.lengthOf(1)
  })
});
