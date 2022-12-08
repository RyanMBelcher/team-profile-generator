const Engineer = require('../lib/engineer');

describe('Engineer', () => {
    it('should return the correct values', () => {
        const name = 'Stan';
        const id = 2;
        const email = 'stan@email.com';
        const github = 'stangithub';
        const actual = new Engineer(name, id, email, github);
        expect(actual.name).toEqual(name);
        expect(actual.id).toEqual(id);
        expect(actual.email).toEqual(email);
        expect(actual.github).toEqual(github);
    })
})