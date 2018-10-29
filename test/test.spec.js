import { mount } from '@vue/test-utils'
import Counter from '../pages/test.vue'

describe('Counter.vue', () => {
    test('Setup correctly', () => {
        expect(true).toBe(true)
    })
    test('increments the counter value when button is clicked', () => {
        const wrapper = mount(Counter)
        console.log(wrapper);
        wrapper.find('.myButton').trigger('click');
        console.log(wrapper.find('.myDiv').text())
        expect(wrapper.find('.myDiv').text()).toContain('Counter: 1')
    })
})