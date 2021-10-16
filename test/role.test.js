const Role = require('../role');

describe('Role', () => {
    describe('Manager', () => {
        it('should create an object with a name, id, email, and office number', () => {
            const manager = new Manager('Exarch', 1, 'crystal@tower.gov', 12);

            expect(manager).toEqual({name: 'Exarch', id: 1, email: 'crystal@tower.gov', office: 12});
        });
    });

    describe('Engineer', () => {
        it('should create an object with a name, id, email, and GitHub username', () => {
            const engineer = new Engineer('Yshtola', 2, 'yshtola@scions.org', 'Matoya');

            expect(engineer).toEqual({name: 'Yshtola', id: 2, email: 'yshtola@scions.org', gitHub: 'Matoya'});
        });
    });

    describe('Intern', () => {
        it('should create an object with a name, id, email, and school', () => {
            const intern = new Intern('Ryne', 3, 'ryne@first.org', 'Eulmore');

            expect(intern).toEqual({name: 'Ryne', id: 3, email: 'ryne@first.org', school: 'Eulmore'});
        });
    });
});