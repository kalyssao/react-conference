//const MenuItems = require('./MenuItems')
import { MenuItems } from './MenuItems'
test('Testing menu items', () => {
    const expected = [{
        title: 'Speakers',
        url: '#',
        cName: 'nav-links'
    },
    {
        title: 'Register',
        url: '#',
        cName: 'nav-links'
    },
    {
        title: 'Sponsors',
        url: '#',
        cName: 'nav-links'
    }]
    expect(MenuItems).toEqual(expect.arrayContaining(expected));
})