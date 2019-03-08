const request = require('supertest');
const server = require('./server');
const db = require('./data/knexConfig.js');

describe('server.js tests', () => {
    afterEach( async () => {
        await db('games').truncate()
    });

    describe('GET', () => {
        it('should return hello', async () => {
            const hello = await request(server).get('/')
            expect(hello.text).toBe('hello')
        });

        it('should return status 200', async () => {
            const res = await request(server).get('/games');
    
            expect(res.status).toEqual(200);
        });

        it('should return empty array', async () => {
            const res = await request(server).get('/games');
    
            expect(res.body).toEqual([]);
        });

        it('should return an array with length 2', async () => {
            await request(server).post('/games').send({name:'Mario', genre:'Arcade', releaseYear:1983});
            await request(server).post('/games').send({name:'Mario World', genre:'Arcade', releaseYear:2000});
    
            const res = await request(server).get('/games');
    
            expect(res.body).toHaveLength(2);
        });
    });

    describe('POST', () => {
        it('should return the posted game with an id', async () => {
            const res = await request(server).post('/games').send({name:'Mario', genre:'Arcade', releaseYear:1983});
    
            expect(res.body).toEqual({name:'Mario', genre:'Arcade', releaseYear:1983, id:1})
        });

        it('should return a status of 200', async () => {
            const res = await request(server).post('/games').send({name:'Mario', genre:'Arcade', releaseYear:1983});
            
            expect(res.status).toBe(200)
        });

        it('should return a status of 500', async () => {
            const res = await request(server).post('/games').send({title:'Mario', genre:'Arcade', releaseYear:1983});
            
            expect(res.status).toBe(500)
        });        
    });
});