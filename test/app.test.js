const request = require('supertest');
const app = require('../lib/app');

describe('app routes', () => {
    it('has an index page', () => {
        return request(app)
            .get('/')
            .then(res => {
                expect(res.text).toEqual(expect.stringContaining('Colors'));
            });
    });
    
    it('has a colors route', () => {
        return request(app)
            .get('/api/v1/colors')
            .then(res => {
                expect(res.body).toEqual([
                    { name: 'red', hex: 'FF0000', r: 255, g: 0, b: 0 },
                    { name: 'green', hex: '008000', r: 0, g: 128, b: 0 },
                    { name: 'blue', hex: '0000FF', r: 0, g: 0, b: 255 }
                ]);
            });
    });
    
    it('has a specfic color route', () => {
        return request(app)
            .get('/api/v1/colors/red')
            .then(res => {
                expect(res.body).toEqual( { name: 'red', hex: 'FF0000', r: 255, g: 0, b: 0 } )
            });
    });
});
