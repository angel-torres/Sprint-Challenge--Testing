const request = require('supertest');
const server = require('./server');

describe('server', () => {
    it('should return hello', async () => {
        const hello = await request(server).get('/')
        expect(hello.text).toBe('hello')
    })

    
})