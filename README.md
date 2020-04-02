# lodex-extended

Ce dépôt permet d’étendre les fonctionnalités de l’outil LODEX à l’aide de fichiers de configuration au format .ini

Le dépôt propose plusieurs branches, chacune proposant divers configuration. 
Les configurations ayant un impact direct sur le fonctionnement de l’outil, celle-ci sont versionnées
afin de pouvoir les faire évoluer sans risquer de modifier le comportement d’instances LODEX préexistantes.

Il est possible d’ajouter des configurations dans différentes catégories  :

-  “exporters” : les formats d’export des ressources
-  “loaders” : les formats d’import des données
-  “routines” :  vision/requêtage spécifique des ressources 

Pour chaque catégories, les fichiers sont à stocker dans un répertoire du nom de la catégorie.

## Utilisation

### directement dans lodex

Dans la configuration Lodex, il suffit de choisir la version :

Exemple dans le fichier config.json
```json
...
  "pluginsURL": "https://raw.githubusercontent.com/Inist-CNRS/lodex-extended/v4.0.0/public/",
...
```

### indirectement dans lodex

Il est possible de transformer toutes les configurations en API autonome.
Dans ce cas, les programmes iront checrher les données directement dans la base MongDB

```bash
npm install
npm start
```

ATTENTION: la base MongoDB doit être accessible !
NOTE : Il est possible de présiser la chaine de connexion à mongo dans les parametres URL.

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
