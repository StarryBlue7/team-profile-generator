const Employee = require('../Employee');

describe('Employee', () => {
    it('should create an object with a name, id, email, and role of Employee', () => {
        const employee = new Employee('Ardbert', 1, 'WoD@ffxiv.com');

        expect(employee).toEqual({name: 'Ardbert', id: 1, email: 'WoD@ffxiv.com', role: 'Employee'});
        expect(employee).toBeInstanceOf(Employee);
    });

    describe('get methods', () => {
        it('should return the property values', () => {
            const employee = new Employee('Ardbert', 1, 'WoD@ffxiv.com');

            const name = employee.getName();
            const id = employee.getId();
            const email = employee.getEmail();
            const role = employee.getRole();

            expect(name).toBe('Ardbert');
            expect(id).toBe(1);
            expect(email).toBe('WoD@ffxiv.com');
            expect(role).toBe('Employee');
        });
    });
});