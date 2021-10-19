const Engineer = require('../Engineer');

describe('Engineer', () => {
    it('should create an object with a name, id, email, and GitHub username', () => {
        const engineer = new Engineer('Yshtola', 2, 'yshtola@scions.org', 'Matoya');

        expect(engineer).toEqual({name: 'Yshtola', id: 2, email: 'yshtola@scions.org', gitHub: 'Matoya', role: 'Engineer'});
        expect(engineer).toBeInstanceOf(Engineer);
    });

    describe('getOffice', () => {
        it('should return the GitHub username', () => {
            const engineer = new Engineer('Yshtola', 2, 'yshtola@scions.org', 'Matoya');

            const gitHub = engineer.getGitHub();

            expect(gitHub).toEqual('Matoya');
        });
    });
});
