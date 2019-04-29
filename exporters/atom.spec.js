const ezs = require('ezs');
const from = require('from');

test.skip('export a feed', done => {
    let outputString = '';
    const localConfig = {
        cleanHost: 'http://project-study-1',
    };
    const fields = [];
    from([{}])
        .pipe(ezs('delegate', { file: __dirname + '/atom.ini' }, { localConfig, fields }))
        .on('data', data => {
            if (data) outputString += data;
        })
        .on('end', () => {
            expect(outputString).toContain('<feed xmlns');
            done();
        })
        .on('error', done);
});

test.skip('export a feed containing the last data', done => {
    let outputString = '';
    const localConfig = {
        cleanHost: 'http://project-study-1',
    };
    const fields = [
        { overview: 1, name: 'title' },
        { overview: 2, name: 'description' },
    ];
    from([{ uri: 'http://uri', title: 'Title', description: 'Description'}])
        .pipe(ezs('delegate', { file: __dirname + '/atom.ini' }, { localConfig, fields }))
        .on('data', data => {
            if (data) outputString += data;
        })
        .on('end', () => {
            expect(outputString).toContain('Title');
            expect(outputString).toContain('http://uri');
            done();
        })
        .on('error', done);
});
