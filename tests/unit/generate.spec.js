import Generate from '../../src/components/Generate'
import { shallowMount } from '@vue/test-utils'

describe('<Generate />', () => {
    it('should render correctly component', () => {
        const wrapper = shallowMount(Generate, {
            props: { name: 'charizard', id: '6' }
        })
        expect(wrapper.html()).toMatchSnapshot()
        expect(wrapper.find('li').exists()).toBe(true)
        expect(wrapper.find('img').exists()).toBe(true)
        expect(wrapper.find('.infos').exists()).toBe(true)
        expect(wrapper.find('p').exists()).toBe(true)
    })
    it('should render correctly the components itens', () => {
        const wrapper = shallowMount(Generate, {
            props: { name: 'charizard', id: '6' }
        })
        expect(wrapper.find('p').text()).toBe('charizard')
        expect(wrapper.find('p:nth-child(2)').text()).toBe('#6')
        expect(wrapper.find('img').attributes('alt')).toBe('charizard')
        expect(wrapper.find('img').attributes('src')).toBe('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png')
    })
})