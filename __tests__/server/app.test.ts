import app from '../../src/index';
import request from 'supertest'

describe('GET /',()=>{
    test('Testing get request /',async ()=>{
        const response = await request(app).get('/');
        console.log(response.text);
        expect(response.status).toBe(200);
        // expect(response.text).toEqual({"msg":"This is home route..."})
    })
})

describe('POST /',()=>{
    test('Testing post request /',async ()=>{
        const response = await request(app).post('/').send({
            name:"Subhajit Ghosh"
        });
        console.log(response.text);
        expect(response.status).toBe(200);
        expect(response.text).toBe("{\"msg\":{\"name\":\"Subhajit Ghosh\"}}")
    })
})