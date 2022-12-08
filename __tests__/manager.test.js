const Manager = require('../lib/manager');

describe('Manager', () => {
    it('it should return the correct values', () => {
        const name = 'Joe';
        const id = 5;
        const email = 'joe@email.com';
        const officeNumber = 1;
        const actual = new Manager(name, id, email, officeNumber);
        expect(actual.name).toEqual(name);
        expect(actual.id).toEqual(id);
        expect(actual.email).toEqual(email);
        expect(actual.officeNumber).toEqual(officeNumber);
    })
});