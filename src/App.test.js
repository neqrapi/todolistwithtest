
import React from 'react'
import {shallow} from 'enzyme';
import {App} from './App'
it("should render You have no todo's left, yay!",()=>{
    const wrapper=shallow(<App/>)
    const p=wrapper.find('h1.center blue-text').text()
    const resualt=p.text()
    expect(resualt).toBe('Todos')
})