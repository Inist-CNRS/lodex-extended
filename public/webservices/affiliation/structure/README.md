# Web service dédié aux affliation


## Structurer une affliation texte
Exemple d'utilisation :

```bash
 
cat <<EOF |jq .|curl -N --proxy "" -X POST --data-binary @- "http://localhost:31976/expand?indent=true"
[
    { "value": "Baran, N (reprint author), Univ Zagreb, Dept Phys, Bijenieka Cesta 32, Zagreb 10000, Croatia."},
     { "value": "Harikane, Y (reprint author), Univ Tokyo, Inst Cosm Ray Res, 5-1-5 Kashiwanoha, Kashiwa, Chiba 2778582, Japan.; Harikane, Y (reprint author), Univ Tokyo, Grad Sch Sci, Dept Phys, Bunkyo Ku, 7-3-1 Hongo, Tokyo 1130033, Japan."},
     { "value": "Davidzon, I (reprint author), Aix Marseille Univ, LAM, CNRS, UMR 7326, F-13388 Marseille, France.; Davidzon, I (reprint author), INAF Osservatorio Astron Bologna, Via Ranzani 1, I-40127 Bologna, Italy."},
     { "value": "Zolotukhin, I (reprint author), IRAP, CNRS, 9 Ave Colonel Roche,BP 44346, F-31028 Toulouse 4, France.; Zolotukhin, I (reprint author), Moscow MV Lomonosov State Univ, Sternberg Astron Inst, Univ Skij Pr 13, Moscow 119992, Russia."},
     { "value": "Cooke, J (reprint author), Swinburne Univ Technol, Ctr Astrophys & Supercomp, Hawthorn, Vic 3122, Australia."},
     { "value": "van Uitert, E (reprint author), Argelander Inst Astron, Hugel 71, D-53121 Bonn, Germany."},
     { "value": "Harnois-Deraps, J (reprint author), Univ British Columbia, Dept Phys & Astron, Vancouver, BC V6T 1Z1, Canada."},
	 { "value": "Ford, J (reprint author), Univ British Columbia, Dept Phys & Astron, 6224 Agr Rd, Vancouver, BC V6T 1Z1, Canada."},
     { "value": "Laigle, C (reprint author), Univ Paris 06, Sorbonne Univ, 98b Bd Arago, F-75014 Paris, France.; Laigle, C (reprint author), CNRS, UMR 7095, IAP, 98b Bd Arago, F-75014 Paris, France."}
]
EOF
```



