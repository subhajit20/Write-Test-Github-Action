import app from '../../src/app';
import request from 'supertest'

describe('GET /',()=>{
    test('Testing get request /',async ()=>{
        const response = await request(app).get('/');
        expect(response.status).toBe(200);
        
    })
})

describe('POST /',()=>{
    test('Testing post request /',async ()=>{
        const response = await request(app).post('/').send({
            name:"Subhajit Ghosh"
        });
        expect(response.status).toBe(200);
        expect(response.text).toBe("{\"msg\":{\"name\":\"Subhajit Ghosh\"}}")
    })
})