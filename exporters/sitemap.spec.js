// @ts-nocheck
const ezs = require('ezs');
const from = require('from');
const { removeQueryAndFilters } = require('../utils');

const script = removeQueryAndFilters(__dirname + '/sitemap.ini');

test('export an xml', done => {
    let outputString = '';
    from([{
        uri: 'http://exemple.com',
        publicationDate: Date.now(),
    }])
        .pipe(ezs('delegate', { script }))
        .on('data', data => {
            if (data) outputString += data;
        })
        .on('end', () => {
            expect(outputString).toContain('<loc>http://exemple.com');
            done();
        })
        .on('error', done);
});
