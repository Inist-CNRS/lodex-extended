// @ts-nocheck
const from = require('from');
const ezs = require('ezs');
const { removeQueryAndFilters } = require('../utils');

const script = removeQueryAndFilters(__dirname + '/refs.ini');

test('export two resources uri in a two-lines CSV', done => {
    let outputString = '';
    from([
        {
            uri: 'http://resource.uri/1',
            title: 'first resource',
        },
        {
            uri: 'http://resource.uri/2',
            title: 'second resource',
        }
    ])
        .pipe(ezs('delegate', { script }))
        .on('data', data => {
            if (data) outputString += data;
        })
        .on('end', () => {
            const res = outputString.split('\r\n');
            expect(res).toHaveLength(3);
            expect(res).toEqual([
                'http://resource.uri/1',
                'http://resource.uri/2',
                '',
            ]);
            done();
        })
        .on('error', done);
});

