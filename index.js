#!/usr/bin/env node
/* Transforms an RDF input stream in one format to another RDF format */

const N3 = require('n3');
const parameters = require('parameters');

let params = parameters({
    options: [{
        name: 'formatIn',
        shortcut: 'i',
        description: 'The input stream format'
    }, {
        name: 'formatOut',
        shortcut: 'o',
        description: 'The output stream format'
    }
    ]
}).parse();

process.stdin
    .pipe(new N3.StreamParser({ format: params.formatIn   }))
    .pipe(new N3.StreamWriter({ format: params.formatOut  }))
    .pipe(process.stdout);

