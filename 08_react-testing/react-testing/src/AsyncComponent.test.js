import { shallow } from 'enzyme';
import AsyncComponent from './AsyncComponent';

const errorMessage = 'ERROR';
const successResult = 'Some data';

// mock functions
const getSuccess = jest.fn(() => Promise.resolve(successResult));
const getFailure = jest.fn(() => Promise.reject(errorMessage));

test('should display the string returned from the get function', async () => {
    const wrapper = shallow(<AsyncComponent get={getSuccess}/>);
    const dispplayBeforeClick = wrapper.find('.display');
    // test iif display element doesn't exist
    expect(dispplayBeforeClick.exists()).toBe(false);

    const getButton = wrapper.find('button');
    getButton.simulate('click');

    // Enzyme doesn't have a way to wait until element added
    // setImmediate, setTimeout
    setTimeout(() => {
        const dispplayAfterClick = wrapper.find('.display');
        expect(dispplayAfterClick.exists()).toBe(false);
        expect(dispplayAfterClick.text()).toBe(successResult);
        jest.done();
    },0)


})
