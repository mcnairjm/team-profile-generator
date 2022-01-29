const Intern = require('../lib/intern')

describe('new Intern class', () => {
    it('should return new parameters given', () => {
        const intern = new Intern ('Bob', 1, 'bob@gmail.com', 'UNC')
        expect(intern.name).toBe('Bob')
        expect(intern.id).toBe(1)
        expect(intern.email).toBe('bob@gmail.com')
        expect(intern.school).toBe('UNC')
    })


    describe('get Intern role', () => {
        it('should return role as "Intern"', () => {
            const intern = new Intern ('Bob', 1, 'bob@gmail.com', 9194143440).getRole()
            expect(intern).toBe('Intern');
        })
    }) 
})