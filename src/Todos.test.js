import React from 'react'
import {shallow} from enzyme;
import {Todos} from './Todos'
it("should render You have no todo's left, yay!",()=>{
    const wrapper=shallow(<Todos/>)
    const span=wrapper.find('span')
    const resualt=span.text()
    expect(resualt).toBe('You have no todos left, yay!')
})