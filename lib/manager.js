const Employee = require('./employee');

class Manager extends Employee {
    constructor (name, id, email, phone) {
        super (name, id, email, phone);
        
    }

    getRole() {
        return 'Manager';
    }
}

module.exports = Manager;