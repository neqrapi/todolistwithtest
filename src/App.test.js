import React from 'react';
import {shallow,mount} from 'enzyme';
import App from './App'
import Todos from './Todos';
describe('Test App', () => {
    it('should render two todos on start',()=>{
        
        const wrapper=mount(<App />)
        const items= wrapper.find('div.collection-item')
        
        expect(items.length).toBe(2)



    }
)})   