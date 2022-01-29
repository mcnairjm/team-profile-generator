const Engineer = require('../lib/engineer')

describe('new Engineer class', () => {
    it('should return new parameters given', () => {
        const engineer = new Engineer ('Bob', 1, 'bob@gmail.com', 'bobbyg')
        expect(engineer.name).toBe('Bob')
        expect(engineer.id).toBe(1)
        expect(engineer.email).toBe('bob@gmail.com')
        expect(engineer.github).toBe('bobbyg')
    })


    describe('get Engineer role', () => {
        it('should return role as "Engineer"', () => {
            const engineer = new Engineer ('Bob', 1, 'bob@gmail.com', 9194143440).getRole()
            expect(engineer).toBe('Engineer');
        })
    }) 
})