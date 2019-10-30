# lodex-extended

Ce dépôt permet d’étendre les fonctionnalités de l’outil LODEX à l’aide de fichiers de configuration au format .ini

Le dépôt propose plusieurs branches, chacune proposant divers configuration. Les configurations ayant un impact direct sur le fonctionnement de l’outil, l’objectif est de versionner les configurations afin de pouvoir les faire évoluer sans risquer de modifier le comportement d’instances LODEX préexistantes.

Il est possible d’ajouter des configurations de différentes catégories  :

-  “exporters” : formats d’export des ressources
-  “loaders” : formats d’import des données
-  “routines” :  vision/requêtage spécifique des ressources 

Pour chaque catégories, les fichiers sont à stocker dans un répertoire du nom de la catégories.


## Install

```bash
git checkout https://github.com/Inist-CNRS/lodex-extended
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

## Contribute

First install:

```bash
npm install
```

Write your scripts.

Then, write and use tests:

```bash
npm test
```
