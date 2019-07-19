// @ts-nocheck
const from = require('from');
const ezs = require('ezs');
const { removeQueryAndFilters } = require('../utils');

const script = removeQueryAndFilters(__dirname + '/not-transformed.ini');

test('export two resources uri in a two-lines CSV', done => {
    let res = [];
    const input = [
        {
            uri: 'http://resource.uri/1',
            title: 'first resource',
        },
        {
            uri: 'http://resource.uri/2',
            title: 'second resource',
        }
    ];
    from(input)
        .pipe(ezs('delegate', { script }))
        .on('data', data => {
            res.push(data);
        })
        .on('end', () => {
            res = JSON.parse(res.join(''));
            expect(res).toEqual(input);
            done();
        })
        .on('error', done);
});

