const Teammate = require('./teammate');

class Manager extends Teammate {
    constructor(name, id, email, office) {
        super(name, id, email);
        this.office = office;
    }
}

class Engineer extends Teammate {
    constructor(name, id, email, gitHub) {
        super(name, id, email);
        this.gitHub = gitHub;
    }
}

class Intern extends Teammate {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }
}

module.exports = { Manager, Engineer, Intern }