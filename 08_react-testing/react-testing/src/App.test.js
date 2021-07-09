// import { render, screen } from '@testing-library/react';
// import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

import App from './App';
import { shallow } from 'enzyme';

// setup
const setup = () => shallow(<App/>);
const findByAttr = (wrapper, value) => wrapper.find(`[data-test='${value}']`);

test('renders App without an error', () => {
  const wrapper = setup();
  const appComponent = findByAttr(wrapper, 'component-app');
  //assertion
  expect(appComponent.length).toBe(1);
})

test('renders a button', () => {
  const wrapper = setup();
  const button = findByAttr(wrapper, 'increase-button');
  expect(button.length).toBe(1);
})

test('renders counter display', () => {
  const wrapper = setup();
  const display = findByAttr(wrapper, 'counter-display');
  expect(display.length).toBe(1);
})

// test initial state value
test('initial count should be 0', () => {
  const wrapper = setup();
  const count = findByAttr(wrapper, 'count').text(); // will return string
  expect(count).toBe('0');
})

// simulate click to increment
test('clicking the increment button should increment count by 1', () => {
  const wrapper = setup();
  const button = findByAttr(wrapper, 'increase-button');
  // simulate
  button.simulate('click');
  // find the display, test if the count is incremented
  const countDisplay = findByAttr(wrapper, 'count').text();
  expect(countDisplay).toBe('1');
})


