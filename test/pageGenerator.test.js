const pageGenerator = require('../pageGenerator')

describe('Page generator', () => {

    describe.each([
        { team: {manager: [{name: 'Exarch', id: 1, email: 'crystal@tower.gov', office: 12, role: 'Manager'}]}, role: 'manager', info: 'office' },
        { team: {engineer: [{name: 'Yshtola', id: 2, email: 'yshtola@scions.org', gitHub: 'Matoya', role: 'Engineer'}]}, role: 'engineer', info: 'gitHub' },
        { team: {intern: [{name: 'Ryne', id: 3, email: 'ryne@first.org', school: 'Eulmore', role: 'Intern'}]}, role: 'intern', info: 'school' }
    ])('generateCards function', ({team, role, info}) => {
        it('should generate a string with HTML cards of team member info', () => {
            const cards = pageGenerator.generateCards(team, role);

            expect(cards).toEqual(expect.stringContaining(team[role][0].name));
            expect(cards).toEqual(expect.stringContaining(team[role][0].id.toString()));
            expect(cards).toEqual(expect.stringContaining(team[role][0].email));
            expect(cards).toEqual(expect.stringContaining(team[role][0][info].toString()));
            expect(cards).toEqual(expect.stringContaining(team[role][0].role));
        });
    });

    describe('generateHTML function', () => {
        it('should add the cards string to the main HTML template', () => {
            const cards = 'testString';

            const html = pageGenerator.generateHTML(cards);

            expect(html).toEqual(expect.stringContaining(cards));
            expect(html).toEqual(expect.stringContaining('Team Page'));
        });
    });
});