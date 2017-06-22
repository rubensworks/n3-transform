# N3-Transform

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

