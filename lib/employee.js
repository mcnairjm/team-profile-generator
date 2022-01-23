class Employee {
    constructor(name, id, email, phone) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.phone = phone;
    }
    getName() {
        return this.name;
    }

    getID() {
        return this.id;
    }
    getEmail() {
        return this.email;
    }
    getRole() {
        return 'Employee';
    }
};

module.exports = Employee;