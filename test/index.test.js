const inquirer = require('inquirer');
const Manager = require('../Manager');
const Engineer = require('../Engineer');
const Intern = require('../Intern');
const index = require('../index');
const pageGenerator = require('../pageGenerator');

describe('Team builder', () => {

    describe.each([
        { role: 'manager', answers: {name: 'Exarch', id: 1, email: 'crystal@tower.gov', office: 12}, object: new Manager('Exarch', 1, 'crystal@tower.gov', 12), type: Manager },
        { role: 'engineer', answers: {name: 'Yshtola', id: 2, email: 'yshtola@scions.org', gitHub: 'Matoya'}, object: new Engineer('Yshtola', 2, 'yshtola@scions.org', 'Matoya'), type: Engineer },
        { role: 'intern', answers: {name: 'Ryne', id: 3, email: 'ryne@first.org', school: 'Eulmore'}, object: new Intern('Ryne', 3, 'ryne@first.org', 'Eulmore'), type: Intern }
    ])('addTeammate function', ({role, answers, object, type}) => {
        it('should add a teammate to team object in new role array if it does not already exist', () => {
            const team = {};

            const teammate = index.addTeammate(team, role, answers);

            expect(teammate).toEqual(object);
            expect(teammate).toBeInstanceOf(type);
            expect(team[role]).toEqual([object]);
        });
        
        it('should push new teammates to existing role arrays', () => {
            const firstTeammate = {first: 'teammate'}

            let team = {
                manager: [firstTeammate],
                engineer: [firstTeammate],
                intern: [firstTeammate]
            };
        
            const teammate = index.addTeammate(team, role, answers);

            expect(teammate).toEqual(object);
            expect(teammate).toBeInstanceOf(type);
            expect(team[role]).toEqual([firstTeammate, object]);
        });
    });

    describe.each([
        {role: 'engineer'},
        {role: 'intern'}
    ])('nextQuery function', () => {
        it('should generate the HTML page when Finished adding is chosen', () => {
            const team = {team: 'set'};
            const answers = {next: 'Finished adding'};
            jest.spyOn(pageGenerator, 'generatePage');

            index.nextQuery(answers, team);

            expect(pageGenerator.generatePage).toHaveBeenCalledWith(team);
        });
    });
});