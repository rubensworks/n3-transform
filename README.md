# N3-Transform
[![npm version](https://badge.fury.io/js/n3-transform.svg)](https://www.npmjs.com/package/n3-transform)

This module does one thing only: transforming an RDF stream in one format to another format using UNIX streams.

## Install

```bash
npm install n3-transform
```

## Usage

```bash
cat some-file.ttl | n3-transform -i turtle -o nquads
```

The input (`-i`) and output (`-o`) format parameters are optional, and will default to turtle.
The other allowed format values are: turtle, trig, ntriples or nquads.

## License
Components.js is written by [Ruben Taelman](http://www.rubensworks.net/).

This code is copyrighted by [Ghent University – imec](http://idlab.ugent.be/)
and released under the [MIT license](http://opensource.org/licenses/MIT).