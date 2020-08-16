//const MenuItems = require('./MenuItems')
import { MenuItems } from './MenuItems'
test('Testing menu items', () => {
    const expected = [{
        id: '0',
        title: 'Speakers',
        url: '#',
        cName: 'nav-links'
    },
    {
        id: '1',
        title: 'Register',
        url: '#',
        cName: 'nav-links'
    },
    {
        id: '2',
        title: 'Sponsors',
        url: '#',
        cName: 'nav-links'
    }]
    expect(MenuItems).toEqual(expect.arrayContaining(expected));
})