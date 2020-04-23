import React from 'react'
import {shallow, mount, render} from 'enzyme';
import {Todos} from './Todos'

let wrapper

beforeEach(() => {
  wrapper = shallow(<Todos />)
})

describe('<Todos /> rendering', () => {
  it("should render You have no todo's left, yay!",()=>{
      const p=wrapper.find('p.center').text()
      const resualt=p.text()
      expect(resualt).toBe('You have no todos left, yay!')
  })
})
