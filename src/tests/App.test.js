import ReactDOM from 'react-dom';
import React from 'react';
import { configure, mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../App';

configure({ adapter: new Adapter() });

describe('Rendering', () => {
  it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<App/>, div);
  });
  it('renders without crashing using mount', () => {
    mount(<App />);
  });
  it('renders without crashing using shallow', () => {
   shallow(<App />);
  });
});

describe('App', () => {
  it('should have h1 header', () => {
    let wrapper = shallow(<App />);
    expect(wrapper.find('h1').text()).toEqual('TDD Todo App');
  });

  it('should have an array of todo items', () => {
    let wrapper = shallow(<App />);
    let todos = wrapper.state('todos');
    expect(Array.isArray(todos)).toEqual(true);
  });
});

xdescribe('Todo Manipulation', () => {
  test('should be able to add todos', () =>{
    expect('something').toEqual('something else');
  });
  
  test('should be able to remove todos', () =>{
    expect('something').toEqual('something else');
  });
  
  test('should be able to edit todos', () =>{
    expect('something').toEqual('something else');
  });
  
  test('should be able to complete todos', () =>{
    expect('something').toEqual('something else');
  });
});

