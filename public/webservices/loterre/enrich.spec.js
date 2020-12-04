const { resolve } = require('path');
const ezs = require('@ezs/core');
const from = require('from');

describe('enrich.ini', () => {
  it('should enrich key/value object', done => {
    const res = [];
    const file = resolve(__dirname, 'example/enrich.ini');
    const data = [
      { id: 0, value: 'non metal' },
      { id: 1, value: 'non métal' },
      { id: 2, value: 'métal pauvre' },
      { id: 3, value: 'Elemento químico' },
      { id: 4, value: 'Chemical element' },
      { id: 5, value: 'Zinc' },
    ];
    from(data)
      .pipe(ezs('dump'))
      .pipe(ezs.toBuffer())
      .pipe(ezs('delegate', { file }))
      .pipe(ezs('basics:JSONParse', { separator: '*' }))
      .pipe(ezs.catch())
      .on('error', done)
      .on('data', chunk => {
        res.push(chunk);
      })
      .on('end', () => {
        expect(res.length).toEqual(6); // eslint-disable-line
        expect(res[0].value.id).toEqual('non metal');
        expect(res[1].value.id).toEqual('non metal');
        done();
      });
  });
});
