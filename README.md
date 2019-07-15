# lodex-extended

Ce dépôt permet d’étendre les fonctionnalités de l’outil LODEX à l’aide de fichiers de configuration au format .ini

Le dépôt propose plusieurs branches, chacune proposant divers configuration. Les configurations ayant un impact direct sur le fonctionnement de l’outil, l’objectif est de versionner les configurations afin de pouvoir les faire évoluer sans risquer de modifier le comportement d’instances LODEX préexistantes.

Il est possible d’ajouter des configurations de différentes catégories  :

-  “exporters” : formats d’export des ressources
-  “loaders” : formats d’import des données
-  “routines” :  vision/requêtage spécifique des ressources 

Pour chaque catégories, les fichiers sont à stocker dans un répertoire du nom de la catégories.