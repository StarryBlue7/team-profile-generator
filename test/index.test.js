const inquirer = require('inquirer');
const { Manager, Engineer, Intern } = require('../role');
const index = require('../index');
const pageGenerator = require('../pageGenerator');

// jest.mock('inquirer');

describe('Team builder', () => {
    // describe.each([
    //     {role: 'manager'},
    //     {role: 'engineer'},
    //     {role: 'intern'}
    // ])('queryTeammate', ({role}) => {
    //     it('should change prompt with the a question specific to the role', () => {
    //         const team = {};
    //         const question1 = {question: 1};
    //         const questions = [question1, question1, question1, question1, question1];
    //         const roleQuestions = {manager: 'managerQ', engineer: 'engineerQ', intern: 'internQ'};

    //         inquirer.prompt.mockReturnValue(new Promise(function(resolve) {
    //             resolve({ answer: 'set' });
    //         }));
    //         index.queryTeammate(team, role, questions, roleQuestions);

    //         expect(inquirer.prompt).lastCalledWith([question1, question1, question1, roleQuestions[role], question1], team)
    //     });
    // });
    
    describe.each([
        { role: 'manager', obj: {name: 'Exarch', id: 1, email: 'crystal@tower.gov', office: 12}, type: Manager },
        { role: 'engineer', obj: {name: 'Yshtola', id: 2, email: 'yshtola@scions.org', gitHub: 'Matoya'}, type: Engineer },
        { role: 'intern', obj: {name: 'Ryne', id: 3, email: 'ryne@first.org', school: 'Eulmore'}, type: Intern }
    ])('addTeammate function', ({role, obj, type}) => {
        it('should add a teammate to team object in new role array if it does not already exist', () => {
            const team = {};
        
            const teammate = index.addTeammate(team, role, obj);

            expect(teammate).toEqual(obj);
            expect(teammate).toBeInstanceOf(type);
            expect(team[role]).toEqual([obj]);
        });
        
        it('should push new teammates to existing role arrays', () => {
            const firstTeammate = {first: 'teammate'}

            let team = {
                manager: [firstTeammate],
                engineer: [firstTeammate],
                intern: [firstTeammate]
            };
        
            const teammate = index.addTeammate(team, role, obj);

            expect(teammate).toEqual(obj);
            expect(teammate).toBeInstanceOf(type);
            expect(team[role]).toEqual([firstTeammate, obj]);
        });
    });

    describe.each([
        {role: 'engineer'},
        {role: 'intern'}
    ])('nextQuery function', (role) => {
        it('should generate the HTML page when Finished adding is chosen', () => {
            const team = {team: 'set'};
            const answers = {next: 'Finished adding'};
            jest.spyOn(pageGenerator, 'generatePage');

            index.nextQuery(answers, team);

            expect(pageGenerator.generatePage).toHaveBeenCalledWith(team);
        });

        // it('should query for the selected role if not finished adding', () => {
        //     const team = {team: 'set'};
        //     const answers = {next: role};
        //     jest.spyOn(index, 'queryTeammate');

        //     index.nextQuery(answers, team);

        //     expect(index.queryTeammate).toHaveBeenCalledWith(team, role, index.questions, index.roleQuestions);
        // });
    });
});