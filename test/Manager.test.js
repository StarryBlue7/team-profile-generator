const Manager = require('../Manager');

describe('Manager', () => {
    it('should create an object with a name, id, email, and office number', () => {
        const manager = new Manager('Exarch', 1, 'crystal@tower.gov', 12);

        expect(manager).toEqual({name: 'Exarch', id: 1, email: 'crystal@tower.gov', office: 12, role: 'Manager'});
    });

    describe('getOffice', () => {
        it('should return the office number', () => {
            const manager = new Manager('Exarch', 1, 'crystal@tower.gov', 12);

            const office = manager.getOffice();

            expect(office).toEqual(12);
        });
    });
});
