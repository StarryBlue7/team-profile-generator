const Intern = require('../Intern');

describe('Intern', () => {
    it('should create an object with a name, id, email, and school', () => {
        const intern = new Intern('Ryne', 3, 'ryne@first.org', 'Eulmore');

        expect(intern).toEqual({name: 'Ryne', id: 3, email: 'ryne@first.org', school: 'Eulmore', role: 'Intern'});
        expect(intern).toBeInstanceOf(Intern);
    });

    describe('getOffice', () => {
        it('should return the GitHub username', () => {
            const intern = new Intern('Ryne', 3, 'ryne@first.org', 'Eulmore');

            const school = intern.getSchool();

            expect(school).toEqual('Eulmore');
        });
    });
});