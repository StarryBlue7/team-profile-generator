const Employee = require('../Employee');

describe('Employee', () => {
    it('should create an object with a name, id, and email', () => {
        const employee = new Employee('Ardbert', 1, 'WoD@ffxiv.com');

        expect(employee).toEqual({name: 'Ardbert', id: 1, email: 'WoD@ffxiv.com'});
    });

    describe('getName', () => {
        it('should return the name value')
    })
});