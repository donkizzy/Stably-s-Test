import request from 'supertest';
import app from '../Index';

describe("Test the root path", () => {
    test("It should check the response for the GET method", done => {
        request(app)
            .get("/")
            .then(response => {
                expect(response.statusCode).toBe(200);
                done();
            });
    });
});

describe("Test the Highest Prime Number path", () => {
    test("It should check the response for the highest prime number method", done => {
        request(app)
            .post("/")
            .send({ num: 55 })
            .then(response => {
                expect(response.statusCode).toBe(200);
                expect(response.body).toEqual({ primeNumber: 53 });
                done();
            });
    });
});