const Employee = require('../lib/employee');


describe('Employee Class', () => {
    describe('parameters given to new employees', () => {
    it('parameters should match', () => {
    const employee = new Employee('John', 1, 'mcnairjm@gmail.com', 9194143440);

    expect(employee.name).toBe('John');
    expect(employee.id).toBe(1);
    expect(employee.email).toBe('mcnairjm@gmail.com');
    expect(employee.phone).toBe(9194143440);
    })
    })
});

describe('getName function', () => {
    it('should retrieve the name parameter', () => {

   
    const employee = new Employee('John', 1, 'mcnairjm@gmail.com', 9194143440).getName();

    expect(employee).toBe('John');
    })
})

describe('getID function', () => {
    it('should retrieve the name paramter', () => {
        const employee = new Employee('John', 1, 'mcnairjm@gmail.com', 9194143440).getID();
        expect(employee).toBe(1);
    })
});

describe('getEmail function', () => {
    it('should retrieve the email paramter', () => {
        const employee = new Employee('John', 1, 'mcnairjm@gmail.com', 9194143440).getEmail();
        expect(employee).toBe('mcnairjm@gmail.com');
    })
});

describe('getRole function', () => {
    it('should retrieve the role parameter', () => {
        const employee = new Employee('John', 1, 'mcnairjm@gmail.com', 9194143440).getRole();
        expect(employee).toBe('Employee');
    })
})