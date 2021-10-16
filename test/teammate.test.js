const Teammate = require('../teammate');

describe('Teammate', () => {
    it('should create an object with a name, id, and email', () => {
        const teammate = new Teammate('Ardbert', 1, 'WoD@ffxiv.com');

        expect(teammate).toEqual({name: 'Ardbert', id: 1, email: 'WoD@ffxiv.com'});
    });
});