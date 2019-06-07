# lodex-routines

Ce répertoire contient les routines pour [ezs](https://github.com/touv/node-ezs).
Elles sont destinées à fonctionner sur un serveur web statique et un serveur ezs peut les exécuter aussi.

## all-documents.ini 
Donne, pour tout le corpus, le contenu de tous les documents en JSON.

[exemple] (http://lodex-cop21.dpi.inist.fr/api/run/all-documents/)

## classif-by.ini



## count-all.ini
Compte le nombre de documents du corpus.

Elle peut être utilisée, par exemple, avec le format Text - Emphased Number (Texte - Chiffre en gras) pour afficher le nombre de documents sur la page d'accueil de l'instance.

Elle doit alors être déclarée dans Value (Valeur) selon : /api/run/count-all/

[exemple] (http://lodex-cop21.dpi.inist.fr/api/run/count-all/)

## count-by-fields.ini
Compte le nombre de documents du corpus pour chacun des identifiants des champs déclarés dans le modèle.

[exemple] (http://lodex-cop21.dpi.inist.fr/api/run/count-by-fields/)


## cross-by.ini
Compte, pour chaque élément du champ représenté (identifiant), le nombre de fois où cet élément apparaît selon son :

    - nombre d'occurrences si le champ n'est pas dédoublonné
    - nombre de documents si le champ est dédoublonné

Cette routine peut être utilisée avec les formats graphiques :

    [Bubble Chart] (https://user-doc.lodex.inist.fr/administration/modele/format/bubblechart.html)(Graphe à bulles)
    [Bar Chart] (https://user-doc.lodex.inist.fr/administration/modele/format/distribution-charts/barchart.html)(Diagramme à barres et histogramme)
    [Pie Chart] (https://user-doc.lodex.inist.fr/administration/modele/format/distribution-charts/piechart.html)(Camembert)
    [Radar Chart] (https://user-doc.lodex.inist.fr/administration/modele/format/distribution-charts/radarchart.html)(Diagramme Radar)
    [Cartography] (https://user-doc.lodex.inist.fr/administration/modele/format/cartography.html)(Cartographie) (si code ISO 3 ou code ISO 2 des pays)

Elle doit alors être déclarée dans Value (Valeur) selon :

/api/run/distinct-by/**identifiant**/

où

`identifiant` est le code attribué par LODEX au champ représenté.

[exemple] (http://lodex-cop21.dpi.inist.fr/api/run/distinct-by/Yq6u/) où `Yq6u = Year`


## decompose-by.ini




## distinct-ISO3166-1-alpha2-from.ini
Fournit le nombre de fois où un pays apparaît selon son :

    - nombre d'occurrences si le champ n'est pas dédoublonné
    - nombre de documents si le champ est dédoublonné

Elle est, en particulier, utilisée avec le format [Cartography] (https://user-doc.lodex.inist.fr/administration/modele/format/cartography.html) pour représenter les pays du corpus sur une carte du monde.

    **Attention** : avant d’utiliser cette routine, il peut être utile de vérifier que les formes d’écriture des pays verbalisés du corpus correspondent bien aux formes d’écriture des pays dans la [table de correspondance] (https://raw.githubusercontent.com/Inist-CNRS/lodex-use-cases/master/country/data.json).

[exemple] (http://lodex-cop21.dpi.inist.fr/api/run/distinct-ISO3166-1-alpha2-from/g61g/) où `g61g` = PaysENGRSansFrance (pays verbalisé en anglais: Algeria, Argentina, Australia, etc.)


## distinct-ISO3166-1-alpha3-from.ini
Transforme les pays verbalisés du champ représenté en leurs **codes ISO 3** et compte le nombre de fois où ce pays apparaît (code ISO 3), selon son :

    - nombre d'occurrences si le champ n'est pas dédoublonné
    - nombre de documents si le champ est dédoublonné

Elle est, en particulier, utilisée avec le format [Cartography] (https://user-doc.lodex.inist.fr/administration/modele/format/cartography.html) (Cartographie) pour représenter les pays du corpus sur une carte du monde.

    **Attention** : avant d’utiliser cette routine, il peut être utile de vérifier que les formes d’écriture des pays verbalisés du corpus correspondent bien aux formes d’écriture des pays dans la [table de correspondance] (https://raw.githubusercontent.com/Inist-CNRS/lodex-use-cases/master/country/data.json).

[exemple] (http://lodex-cop21.dpi.inist.fr/api/run/distinct-ISO3166-1-alpha3-from/g61g/) où `g61g` = PaysENGRSansFrance (pays verbalisé en anglais: Algeria, Argentina, Australia, etc.).



## distinct-alpha-2-alpha3-from.ini
Transforme les **codes ISO 2** des pays du champ représenté en leurs codes ISO 3 et compte le nombre de fois où ce pays apparaît (identifiant),  selon son :

    - nombre d'occurrences si le champ n'est pas dédoublonné
    - nombre de documents si le champ est dédoublonné

Elle est, en particulier, utilisée avec le format [Cartography] (https://user-doc.lodex.inist.fr/administration/modele/format/cartography.html) (Cartographie) pour représenter les pays du corpus sur une carte du monde.

   **Attention** : avant d’utiliser cette routine, il peut être utile de vérifier que les codes ISO 2 des pays du corpus correspondent bien aux **codes ISO 2** dans la [table de correspondance] (https://raw.githubusercontent.com/Inist-CNRS/lodex-use-cases/master/country/data.json).



## distinct-alpha-3-ISO3166-1-from.ini



## distinct-alpha-3-alpha2-from.ini
Transforme les codes ISO 3 des pays du champ représenté en leurs codes ISO 2 et compte le nombre de fois où ce pays (identifiant) apparaît selon son :

    - nombre d'occurrences si le champ n'est pas dédoublonné
    - nombre de documents si le champ est dédoublonné

   **Attention** : avant d’utiliser cette routine, il peut être utile de vérifier que les codes **ISO 3** des pays du corpus correspondent bien aux codes ISO 3 dans la [table de correspondance] (https://raw.githubusercontent.com/Inist-CNRS/lodex-use-cases/master/country/data.json).


## distinct-by-field.ini

## distinct-by.ini



## distinct-with-quote-rate.ini

## distribute-by-date.ini

## distribute-by-decadal.ini

## distribute-by-interval.ini

## [graph-by.ini] (https://user-doc.lodex.inist.fr/configuration/routines/graphby.html)

crée les paires (`source et target`) entre les éléments de 1 champ ou plusieurs champs (champs identiques ou différents) selon :

/api/run/graph-by/**identifiant1**/

/api/run/graph-by/**identifiant1/identifiant2**/

et compte, pour chaque paire, le nombre de co-occurrences.

Elle peut, en particulier, être utilisée avec les formats [Network] (https://user-doc.lodex.inist.fr/administration/modele/format/network.html) (Réseau) et [Heat Map] (https://user-doc.lodex.inist.fr/administration/modele/format/heatmap.html) (carte de chaleur)

    **Attention** : dans le cas où cette routine s'applique à plusieurs champs (/api/run/graph-by/identifiant1/identifiant2/), elle crée les paires identifiant1/identifiant2 mais aussi identifiant1/identifiant1 et identifiant2/identifiant2, ce qui peut ne pas être adapté pour un réseau.

[exemple 1] (http://lodex-cop21.dpi.inist.fr/api/run/graph-by/Xmzn/) où Xmzn = CodeCNRS2015 Résultat de la routine graph-by avec un seul paramètre
[exemple 2] (http://lodex-cop21.dpi.inist.fr/api/run/graph-by/Xmzn/WXcA/) où Xmzn = CodeCNRS2015 et WXcA = Web of Science Category(ies) Résultat de la routine graph-by avec deux paramètres




## hello-world.ini

## nquads.ini

## pairing-with.ini
crée les paires (`source` et `target`) entre les éléments de 2 champs (champs identiques ou différents) déclarés selon :

- /api/run/pairing-with/**identifiant1/identifiant1**/

- /api/run/pairing-with/**identifiant1/identifiant2**/

et compte, pour chaque paire, le nombre de co-occurrences.

Elle peut, en particulier, être utilisée avec les formats [Network] (https://user-doc.lodex.inist.fr/administration/modele/format/network.html) (Réseau) et [Heat Map] (https://user-doc.lodex.inist.fr/administration/modele/format/heatmap.html) (carte de chaleur).

   **Attention** : dans le cas où cette routine s'applique à un seul champ (/api/run/pairing-with/identifiant1/identifiant1/), elle conserve les *auto-paires* (source et cible identiques). Cela peut être intéressant avec le format [Heat Map] (https://user-doc.lodex.inist.fr/administration/modele/format/heatmap.html) pour visualiser la diagonale, mais peut être gênant avec d'autres formats.

[exemple] (http://lodex-cop21.dpi.inist.fr/api/run/pairing-with/Xmzn/Xmzn/)


## syndication-from.ini

## syndication.ini

Récupère les champs paramétrés dans `Syndication` dans la configuration du modèle.

Elle est, en particulier, utilisée avec le format [Resources Grid] (https://user-doc.lodex.inist.fr/administration/modele/format/resourcesgrid.html) pour représenter sur la page d'accueil les champs paramétrés dans `Syndication`.

Elle doit alors être déclarée dans `Value` (Valeur) selon :

`/api/run/syndication`

[exemple] (http://lodex-cop21.dpi.inist.fr/api/run/syndication/)


## total-of.ini

## tree-by.ini

