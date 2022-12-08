const Employee = require('../lib/employee');

describe('Employee', () => {
    it('it should return the correct values', () => {
        const name = 'Bob';
        const id = 1;
        const email = 'bob@email.com'
        const actual = new Employee(name, id, email);
        expect(actual.name).toEqual(name);
        expect(actual.id).toEqual(id);
        expect(actual.email).toEqual(email);
        expect(actual.getRole()).toEqual('Employee');
    })
});