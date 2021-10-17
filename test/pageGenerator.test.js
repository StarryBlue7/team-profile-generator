const fs = require('fs');
const pageGenerator = require('../pageGenerator')

jest.mock('fs');

describe('Page generator', () => {
    describe('generateFile function', () => {
        it('should create an HTML file from the file name and HTML string', () => {
            const fileName = 'index.html';
            const inputHTML = '<html></html>';

            pageGenerator.generateFile(fileName, inputHTML);

            expect(fs.writeFileSync).lastCalledWith(fileName, inputHTML);
        });
    });

    describe('generateCards function', () => {
        it('should generate a string with HTML cards of team data', () => {
            const team = {};

            const cards = pageGenerator.generateCards(team);

            expect(cards).toEqual('')
        });
    });
});