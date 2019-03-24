# lodex-routine

## Install

```
git checkout https://github.com/Inist-CNRS/lodex-extented
npm install
```

## Run exemples

1. Choose, Edit an query file
2. Run it

```
ezs init.ini run.ini < examples/localhost-lodex-dump.json |jq .

jq '.[15:]' examples/localhost-lodex-anim100.json|ezs init.ini run.ini|jq .
jq '.[2:]' examples/vdlodex-graphiquef2-anim100.json |ezs init.ini run.ini|jq .
```
