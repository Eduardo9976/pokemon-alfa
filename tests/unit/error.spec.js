import Error from '../../src/components/Error'
import { shallowMount } from '@vue/test-utils'

describe('<Error />', () => {
    it('should render correctly component', () => {
        const wrapper = shallowMount(Error, {
            
        })
        expect(wrapper.html()).toMatchSnapshot()
        expect(wrapper.find('.error').exists()).toBe(true)
        expect(wrapper.find('img').exists()).toBe(true)
        expect(wrapper.find('p').exists()).toBe(true)
    })
    it('should render an error message', () => {
        const wrapper = shallowMount(Error, {
            
        })
        expect(wrapper.find('p').text()).toBe('Ops...Serviço Indisponível no momento. Por favor, tente novamente mais tarde.')
        expect(wrapper.find('img').attributes('alt')).toBe('Atenção')
    })  
})