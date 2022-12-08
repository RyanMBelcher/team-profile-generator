const Intern = require('../lib/intern');

describe('Intern', () => {
    it('it should return the correct values', () => {
        const name = 'Julie';
        const id = 3;
        const email = 'julie@email.com';
        const school = 'Penn';
        const actual = new Intern(name, id, email, school);
        expect(actual.name).toEqual(name);
        expect(actual.id).toEqual(id);
        expect(actual.email).toEqual(email);
        expect(actual.school).toEqual(school);
    })
});