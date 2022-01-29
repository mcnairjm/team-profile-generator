const Employee = require('../lib/employee');


descirbe('Employee Class', () => {
    const employee = new Employee('John', 1, 'mcnairjm@gmail.com', 9194143440);

    expect(employee.name).toBe('John');
    expect(employee.id).toBe(1);
    expect(employee.email).toBe('mcnairjm@gmail.com');
    expect(employee.phone).toBe(expect.any(Number));
});

describe('getName function', () => {
    const employee = new Employee('John', 1, 'mcnairjm@gmail.com', 9194143440);

    expect(employee.getName()).toBe(expect.any(String));
})