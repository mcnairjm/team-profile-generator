const Manager = require('../lib/manager')

describe('new Manager class', () => {
    it('should return new parameters given', () => {
        const manager = new Manager ('Bob', 1, 'bob@gmail.com', 9194143440)
        expect(manager.name).toBe('Bob')
        expect(manager.id).toBe(1)
        expect(manager.email).toBe('bob@gmail.com')
        expect(manager.phone).toBe(9194143440)
    })


    describe('get Manager role', () => {
        it('should return role as "Manager"', () => {
            const manager = new Manager ('Bob', 1, 'bob@gmail.com', 9194143440).getRole()
            expect(manager).toBe('Manager');
        })
    }) 
})
    