# lodex-routine

This repository contains routines for [ezs](https://github.com/touv/node-ezs).

They are aimed to be served by a static web server, that an ezs server can also execute.

## Install

```bash
git checkout https://github.com/Inist-CNRS/lodex-extented
npm install ezs ezs-basics
```

## Run exemples

1. Choose, Edit an query file
2. Run it

```bash
ezs init.ini run.ini < examples/vdlodex-anim100-dump.json


# or ...
jq '.[15:]' examples/localhost-lodex-anim100.json|ezs init.ini run.ini|jq .
jq '.[2:]' examples/vdlodex-graphiquef2-anim100.json |ezs init.ini run.ini|jq .
```

## Usage from a distant server

One can execute all the routines in this repository through a dedicated ezs
server, like [lodex-workers](https://github.com/Inist-CNRS/lodex-workers).

Let's say you have a lodex-worker, which address is
<http://lodex.worker.ezs:80/>, you have to adapt a `config.json` containing:

```json
[{
    "instance": "graphiquef2-anim100",
    "server": "lodex.worker.ezs:80",
    "routine": "/api/run/all-documents",
    "maxSize": 1,
    "orderBy": "id/desc"
}]
```

Note that `instance` is a parameter specific to
[lodex](https://github.com/Inist-CNRS/lodex), it contains the name of the mongo
database used by an instance of lodex (on the `lodex.worker.ezs` machine).

Moreover, `maxSize` and `orderBy` are parameters to the `routine` we will use.

To run the `all-documents` routine on the distant machine, type:

```bash
ezs init.ini run.ini < config.json
```

from the root of this repository.
