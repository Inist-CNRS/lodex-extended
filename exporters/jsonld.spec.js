const ezs = require('ezs');
const from = require('from');

const fields = [
    {
        cover: 'collection',
        label: 'title',
        scheme: 'http://purl.org/dc/terms/title',
        format: {
            name: 'None',
        },
        name: 'Q98n',
    },
];

test('export single property', done => {
    let outputString = '';
    const localConfig = {
        cleanHost: '',
        schemeForDatasetLink: '',
    };
    from([{
        uri: 'http://data.istex.fr',
        Q98n: 'Terminator',
    }])
        .pipe(ezs('delegate', { file: __dirname + '/jsonld.ini' }, { localConfig, fields }))
        .on('data', data => {
            if (data) outputString += data;
        })
        .on('end', () => {
            expect(outputString).toEqual('[{"@id":"http://data.istex.fr","Q98n":"Terminator","@context":{"Q98n":{"@id":"http://purl.org/dc/terms/title"}}}]');
            done();
        })
        .on('error', done);
});
