import React from 'react';
import App from './App';
import Header from './components/Header/Header';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';

describe('rendering components', () => {
  it('Render App component without crashing', () => {
    shallow(<App />);
  });

  it('Render Header without crashing', () => {
    const wrapper = shallow(<App />);
    const header = <Header />

    expect(wrapper.contains(header)).toEqual(true);
  });


});

describe('snapshots', () => {
  it('App snapshots', () => {
    const tree = shallow(<App />);
    expect(toJson(tree)).toMatchSnapshot();
  });
});