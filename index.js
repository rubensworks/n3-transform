#!/usr/bin/env node
/* Transforms an RDF input stream in one format to another RDF format */

const N3 = require('n3');
const parameters = require('parameters');
const path = require('path');

let params = parameters({
    options: [{
        name: 'formatIn',
        shortcut: 'i',
        description: 'The input stream format'
    }, {
        name: 'formatOut',
        shortcut: 'o',
        description: 'The output stream format'
    }, {
      name: 'prefixes',
      shortcut: 'p',
      description: 'The path of the file with the prefixes'
    }
    ]
}).parse();

let prefixes = {};

// check if the path for the prefixes file is given
if (params.prefixes) {

  // check if the file path is absolute or not
  if(!path.isAbsolute(params.prefixes)) {
    params.prefixes = path.join(process.cwd(), params.prefixes);
  }

  // load the prefixes
  prefixes = require(params.prefixes);
}

process.stdin
    .pipe(new N3.StreamParser({ format: params.formatIn   }))
    .pipe(new N3.StreamWriter({ format: params.formatOut, prefixes  }))
    .pipe(process.stdout);

