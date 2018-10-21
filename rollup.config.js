import path from 'path';

function html() {
  return {
    transform( code, id ) {
      var transformedCode = code;
      var regex = /html`(([\s\S])*)`/;
      if ( regex.test( code ) === true ) {
        let match = code.match(regex);
        transformedCode = code.replace(match[0], match[0].replace((/  |\r\n|\n|\r/gm),""))
      };
      return {
        code: transformedCode,
        map: { mappings: '' }
      };
    }
  };
}

export default [
  {
    input: 'src/io-object.js',
    plugins: [html()],
    output: [
      {
        format: 'es',
        file: 'build/io-object.js',
        indent: '  '
      }
    ],
    external: [ path.resolve('../io/build/io.js') ]
  }
];
