const ezs = require('@ezs/core');
const from = require('from');

/**
 * @param {number} n
 */
const testMerged = (n) =>
    /**
     *
     * @param {function} done
     */
    (done) => {
        const mergedDocuments = require(`./fixtures/json-conditor-2/mergedDocuments-${n}.json`);
        const expected = require(`./fixtures/json-conditor-2/expected-${n}.json`)
            .map((notice, i) => ({ ...notice, uri: i }));
        const res = [];
        from([JSON.stringify(mergedDocuments)])
            .pipe(ezs('delegate', { file: __dirname + '/json-conditor-2.ini' }))
            .on('data', chunk => {
                res.push(chunk);
            })
            .on('end', () => {
                const withConstantUri = res.map((notice, i) => ({ ...notice, uri: i }))
                expect(withConstantUri).toEqual(expected);
                done();
            });
    };

describe('json-conditor-2.ini', () => {
    it('0 - should parse a JSON', done => {
        const res = [];
        const expected = [
            {
                "abstract en": "English abstract",
                "abstract fr": "French abstract",
                "articleNumber": "",
                "arxiv": "",
                "authors affiliations address": [["Some Laboratory of science", "Some University"]],
                "authors affiliations idRef": [[]],
                "authors affiliations isni": [["0000000123456789"]],
                "authors affiliations ref": [[]],
                "authors affiliations rnsr": [["1234321"]],
                "authors enrichments idHal": [],
                "authors enrichments idRef": [],
                "authors enrichments orcId": [],
                "authors forename & authors surname": ["Good John"],
                "authors halAuthorId": [],
                "authors idHal": [],
                "authors idRef": [],
                "authors isni": [],
                "authors orcId": ["0000-1111-2222-3333"],
                "authors researcherId": [],
                "authors viaf": [],
                "bibCode": "",
                "cern": "",
                // "classification dewey": "",
                // "classification hal": {},
                // "classification tef": "",
                // "classification thesisDomain": "",
                // "defenseOrganisms associatedLaboratory": [], // À réorganiser
                // "defenseOrganisms associatedLaboratoryIdRef": [], // À réorganiser
                // "defenseOrganisms degreeGrantor": [], // À réorganiser
                // "defenseOrganisms degreeGrantorIdRef": [], // À réorganiser
                // "defenseOrganisms doctoralSchool": [], // À réorganiser
                // "defenseOrganisms doctoralSchoolIdRef": [], // À réorganiser
                "documentType": "",
                "doi": "10.5555/9876543210",
                "duplicates source": ["database1", "database2"],
                "duplicates sourceUid": ["sourceId1$database1", "sourceId2$database2"],
                "eisbn": "",
                "eissn": "",
                "electronicPublicationDate": "",
                // "enrichments classifications bso": [], // +
                "enrichments classifications hal": {}, // À exploser en trois: * code, en, fr
                // "enrichments classifications scienceMetrix": [], // +
                // "enrichments classifications scopus": [], // +
                // "enrichments oa core": [], // -
                "enrichments oa unpaywall": {}, // À exploser: is_oa, oa_status, has_repository_copy, oa_locations.host_type
                // "ensam": "", // + (à la racine)
                "fulltextUrl": "",
                "funders grantNumber": [],
                "funders name": [],
                // "halId": "", // + (à la racine)
                "hasDoi": true,
                "hasFulltext": false,
                // "hasTransDuplicate": "", // -
                // "idChain": "", // + (business.sourceUidChain)
                // "idConditor": "", // -
                // "idProdinra": "", // + (à la racine)
                // "ineris": "", // +
                // "inspire": "", // +
                // "ird": "", // +
                // "irstea": "", // +
                // "isDeduplicable": "", // -
                // "isDuplicate": "", // + (déduit de la taille de duplicates sourceUid)
                // "isNearDuplicate": "", // -
                // "isbn": "", // +
                "issn": "1234-1234",
                "issue": "",
                "keywords en author": [],
                "keywords en mesh": [],
                "keywords fr author": [],
                "keywords fr mesh": [],
                "keywords fr rameau": [],
                "keywords undetermined author": [],
                "language": [], // Par défaut dans host, mais dans le futur: à la racine (donc à la racine d'abord)
                // "localRef": "", // -
                // "meetingAbstractNumber": "", // +
                // "nearDuplicates source": [], // -
                // "nearDuplicates sourceUid": [], // -
                // "nearDuplicatesDetectedBySimilarity source": [], // -
                // "nearDuplicatesDetectedBySimilarity sourceUid": [], // -
                // "nnt": "", // +
                // "oatao": "", // +
                // "okina": "", // +
                // "otherNumber": "", // + (où ?)
                "pageRange": [],
                // "part": "", // + racine
                // "patentNumber": "", // + racine
                // "path": "", // -
                "pii": "",
                "pmId": "",
                // "pmc": "", // +
                // "ppn": "", // +
                // "provider": "", // ?
                "publicationDate": "",
                // "publisher": "", // + (host)
                // "reportNumber": "", // + racine
                // "sciencespo": "", // + racine
                // "sessionName": "", // -
                // "source": "", // -
                // "sourceId": "", // -
                // "sourceUid": "",// -
                // "specialIssue": "", // + host
                // "supplement": "", // + host
                // "thesisAdvisor forename": [], // ?
                // "thesisAdvisor idRef": [], // ?
                // "thesisAdvisor surname": [], // ?
                "title default": "french title of the doc",
                "title en": "english title",
                "title fr": "french title of the doc",
                "title journal": "My favourite journal",
                // "title meeting": "", // + (host)
                // "title monography": "", // + (hosy)
                // "typeConditor": "", // + (business.duplicateGenre)
                "uri": "uid:/RJWprpeBG",
                // "utKey": "", //+ racine
                "volume": ""
            },
            {
                "abstract en": "2. abstract.en",
                "abstract fr": "",
                "articleNumber": "",
                "arxiv": "",
                "authors affiliations address": [["Un labo scientifique", "Une université"]],
                "authors affiliations idRef": [[]],
                "authors affiliations isni": [["0000000987654321"]],
                "authors affiliations ref": [[]],
                "authors affiliations rnsr": [["200612816J"]],
                "authors enrichments idHal": [],
                "authors enrichments idRef": [],
                "authors enrichments orcId": [],
                "authors forename & authors surname": ["Martin Jacques"],
                "authors halAuthorId": [],
                "authors idHal": [],
                "authors idRef": [],
                "authors isni": [],
                "authors orcId": ["3333-2222-1111-0000"],
                "authors researcherId": [],
                "authors viaf": [],
                "bibCode": "",
                "cern": "",
                //     "classification dewey": "",
                // "classification hal": {},
                //     "classification tef": "",
                //     "classification thesisDomain": "",
                //     "defenseOrganisms associatedLaboratory": [],
                //     "defenseOrganisms associatedLaboratoryIdRef": [],
                //     "defenseOrganisms degreeGrantor": [],
                //     "defenseOrganisms degreeGrantorIdRef": [],
                //     "defenseOrganisms doctoralSchool": [],
                //     "defenseOrganisms doctoralSchoolIdRef": [],
                "documentType": "",
                "doi": "10.5555/9876543212",
                "duplicates source": ["database3", "database4"],
                "duplicates sourceUid": ["sourceId1$database3", "sourceId2$database4"],
                "eisbn": "",
                "eissn": "",
                "electronicPublicationDate": "",
                //     "enrichments classifications bso": "",
                "enrichments classifications hal": {},
                //     "enrichments classifications scienceMetrix": "",
                //     "enrichments classifications scopus": "",
                //     "enrichments oa core": "",
                "enrichments oa unpaywall": {},
                //     "ensam": "",
                "fulltextUrl": "",
                "funders grantNumber": [],
                "funders name": [],
                //     "halId": "",
                "hasDoi": true,
                "hasFulltext": false,
                //     "hasTransDuplicate": "",
                //     "idChain": "",
                //     "idConditor": "",
                //     "idProdinra": "",
                //     "ineris": "",
                //     "inspire": "",
                //     "ird": "",
                //     "irstea": "",
                //     "isDeduplicable": "",
                //     "isDuplicate": "",
                //     "isNearDuplicate": "",
                //     "isbn": "",
                "issn": "4321-1234",
                "issue": "",
                "keywords en author": [],
                "keywords en mesh": [],
                "keywords fr author": [],
                "keywords fr mesh": [],
                "keywords fr rameau": [],
                "keywords undetermined author": [],
                "language": [],
                //     "localRef": "",
                //     "meetingAbstractNumber": "",
                //     "nearDuplicates source": [],
                //     "nearDuplicates sourceUid": [],
                //     "nearDuplicatesDetectedBySimilarity source": [],
                //     "nearDuplicatesDetectedBySimilarity sourceUid": [],
                //     "nnt": "",
                //     "oatao": "",
                //     "okina": "",
                //     "otherNumber": "",
                "pageRange": [],
                //     "part": "",
                //     "patentNumber": "",
                //     "path": "",
                "pii": "",
                "pmId": "",
                //     "pmc": "",
                //     "ppn": "",
                //     "provider": "doi2",
                "publicationDate": "",
                //     "publisher": "",
                //     "reportNumber": "",
                //     "sciencespo": "",
                //     "sessionName": "",
                //     "source": "",
                //     "sourceId": "",
                //     "sourceUid": "",
                //     "specialIssue": "",
                //     "supplement": "",
                //     "thesisAdvisor forename": [],
                //     "thesisAdvisor idRef": [],
                //     "thesisAdvisor surname": [],
                "title default": "Titre du document en français",
                "title en": "Titre en anglais",
                "title fr": "Titre du document en français",
                "title journal": "Mon journal favori",
                //     "title meeting": "",
                //     "title monography": "",
                //     "typeConditor": "",
                "uri": "uid:/xKifxAEzY",
                //     "utKey": "",
                "volume": ""
            },
            {
                "abstract en": "",
                "abstract fr": "",
                "articleNumber": "",
                "arxiv": "",
                "authors affiliations address": [
                    ["Section of Early Detection and Prevention, International Agency for Research on Cancer, Lyon, France."],
                    ["Department of Medicine, Stanford University Medical Center, Stanford, California."],
                    ["Division of Public Health Sciences, Fred Hutchinson Cancer Research Center, Seattle, Washington."]
                ],
                "authors affiliations idRef": [[], [], []],
                "authors affiliations isni": [[], [], []],
                "authors affiliations ref": [[], [], []],
                "authors affiliations rnsr": [[], [], []],
                "authors enrichments idHal": [],
                "authors enrichments idRef": [],
                "authors enrichments orcId": [],
                "authors forename & authors surname": [
                    "Herrero Rolando",
                    "Parsonnet Julie",
                    "Greenberg Edwin Robert"
                ],
                "authors halAuthorId": [],
                "authors idHal": [],
                "authors idRef": [],
                "authors isni": [],
                "authors orcId": [],
                "authors researcherId": [],
                "authors viaf": [],
                "bibCode": "",
                "cern": "",
                // "classification hal": {},
                "documentType": "Journal Article",
                "doi": "10.1001/jama.2014.10498",
                "duplicates source": [
                    "pubmed",
                    "crossref"
                ],
                "duplicates sourceUid": [
                    "pubmed$25247512",
                    "crossref$10.1001/jama.2014.10498"
                ],
                "eisbn": "",
                "eissn": "1538-3598",
                "electronicPublicationDate": "2014-09-24",
                "enrichments classifications hal": {
                    "code": "sdv",
                    "en": "Life Sciences [q-bio]",
                    "fr": "Sciences du Vivant [q-bio]"
                },
                "enrichments oa unpaywall": {},
                "fulltextUrl": "https://hal.archives-ouvertes.fr/hal-01391249/file/Guyot_16265.pdf",
                "funders grantNumber": [],
                "funders name": [],
                "hasDoi": true,
                "hasFulltext": true,
                "keywords en author": [],
                "keywords en mesh": [
                    "Health Policy",
                    "Helicobacter Infections",
                    "diagnosis",
                    "drug therapy",
                    "Humans",
                    "Randomized Controlled Trials as Topic",
                    "Stomach Neoplasms",
                    "microbiology",
                    "prevention & control",
                    "United States"
                ],
                "keywords fr author": [],
                "keywords fr mesh": [],
                "keywords fr rameau": [],
                "keywords undetermined author": [],
                "issn": "",
                "issue": "12",
                "language": ["English"],
                "pageRange": ["1197-8"],
                "pii": "1906623",
                "pmId": "25247512",
                "publicationDate": "2014-09-24",
                "title default": "Prevention of Gastric Cancer",
                "title en": "Prevention of Gastric Cancer",
                "title fr": "",
                "title journal": "JAMA",
                "volume": "312"
            },
            {
                "abstract en": "Abstract The effect of the lockdown imposed to limit the spread of SARS-CoV-2 in France between March 14 and May 11, 2020 on the wastewater characteristics of two large urban areas...",
                "abstract fr": "",
                "articleNumber": "",
                "arxiv": "",
                "authors affiliations address": [
                    [
                        "Laboratoire Réactions et Génie des Procédés, Université de Lorraine, CNRS, 1 rue Grandville, BP 20451, Nancy cedex F-54001, France",
                        "Laboratoire Réactions et Génie des Procédés, LTSER-Zone Atelier du Bassin de la Moselle, 1 rue Grandville, BP 20451, Nancy cedex F-54001, France"
                    ],
                    ["Laboratoire Réactions et Génie des Procédés, Université de Lorraine, CNRS, 1 rue Grandville, BP 20451, Nancy cedex F-54001, France"],
                    ["Laboratoire Interdisciplinaire des Environnements Continentaux, Université de Lorraine, CNRS, Campus Bridoux, Rue du Général Delestraint, Metz F-57070, France"]
                ],
                "authors affiliations idRef": [[], [], []],
                "authors affiliations isni": [[], [], []],
                "authors affiliations ref": [[], [], []],
                "authors affiliations rnsr": [[[], []], [[]], [[]]], // TODO: to be flattened
                "authors enrichments idHal": [],
                "authors enrichments idRef": [],
                "authors enrichments orcId": [],
                "authors forename & authors surname": [
                    "Marie-Noëlle Pons",
                    "Pauline Louis",
                    "Davide Vignati"
                ],
                "authors halAuthorId": [],
                "authors idHal": [],
                "authors idRef": [],
                "authors isni": [],
                "authors orcId": [],
                "authors researcherId": [],
                "authors viaf": [],
                "bibCode": "",
                "cern": "",
                "documentType": "Journal article",
                "doi": "10.2166/wst.2020.520",
                "duplicates source": ["crossref"],
                "duplicates sourceUid": ["crossref$10.2166/wst.2020.520"],
                "eisbn": "",
                "eissn": "1996-9732",
                "electronicPublicationDate": "2020-11-2",
                "enrichments classifications hal": {
                    "code": "sdv",
                    "en": "Life Sciences [q-bio]",
                    "fr": "Sciences du Vivant [q-bio]"
                },
                "enrichments oa unpaywall": {
                    "oa_locations": [
                        {
                            "license": null,
                            "url_for_landing_page": "https://doi.org/10.2166/wst.2020.520",
                            "is_best": true,
                            "url_for_pdf": "https://iwaponline.com/wst/article-pdf/82/12/2813/803022/wst082122813.pdf",
                            "host_type": "publisher",
                            "url": "https://iwaponline.com/wst/article-pdf/82/12/2813/803022/wst082122813.pdf"
                        },
                        {
                            "license": null,
                            "url_for_landing_page": "https://hal.univ-lorraine.fr/hal-03083964/file/HALL_version_WST%2082-12-2020-pp2813-2822.pdf",
                            "is_best": false,
                            "url_for_pdf": "https://hal.univ-lorraine.fr/hal-03083964/file/HALL_version_WST%2082-12-2020-pp2813-2822.pdf",
                            "host_type": "repository",
                            "url": "https://hal.univ-lorraine.fr/hal-03083964/file/HALL_version_WST%2082-12-2020-pp2813-2822.pdf"
                        },
                        {
                            "license": null,
                            "url_for_landing_page": "https://hal.univ-lorraine.fr/hal-03083964",
                            "is_best": false,
                            "url_for_pdf": "https://hal.univ-lorraine.fr/hal-03083964/document",
                            "host_type": "repository",
                            "url": "https://hal.univ-lorraine.fr/hal-03083964/document"
                        }
                    ],
                    "oa_status": "bronze",
                    "is_oa": true,
                    "has_repository_copy": true
                },
                "fulltextUrl": "",
                "funders grantNumber": ["ANR-16-CE34-0012-001"],
                "funders name": ["Agence Nationale de la Recherche"],
                "hasDoi": true,
                "hasFulltext": false,
                "issn": "0273-1223",
                "issue": "12",
                "keywords en author": [],
                "keywords en mesh": [],
                "keywords fr author": [],
                "keywords fr mesh": [],
                "keywords fr rameau": [],
                "keywords undetermined author": [],
                "language": ["English"],
                "pageRange": ["2813-2822"],
                "pii": "",
                "pmId": "",
                "publicationDate": "2020-12-15",
                "title default": "Effect of lockdown on wastewater characteristics: a comparison of two large urban areas",
                "title en": "Effect of lockdown on wastewater characteristics: a comparison of two large urban areas",
                "title fr": "",
                "title journal": "Water Science and Technology",
                "volume": "82"
            }
        ].map((notice, i) => ({ ...notice, uri: i }));
        const input = [
            {
                "title": {
                    "fr": "french title of the doc",
                    "en": "english title",
                    "default": "french title of the doc"
                },
                "doi": "10.5555/9876543210",
                "authors": [
                    {
                        "forename": "John",
                        "surname": "Good",
                        "orcId": "0000-1111-2222-3333",
                        "affiliations": [
                            {
                                "address": "Some Laboratory of science",
                                "isni": "0000000123456789"
                            },
                            {
                                "address": "Some University",
                                "rnsr": "1234321"
                            }
                        ],
                        "fullname": "Good John"
                    }
                ],
                "host": {
                    "title": "My favourite journal",
                    "issn": "1234-1234"
                },
                "sourceUids": [
                    "sourceId1$database1",
                    "sourceId2$database2"
                ],
                "origins": {
                    "sources": [
                        "database1",
                        "database2"
                    ]
                },
                "abstract": {
                    "default": "French abstract",
                    "en": "English abstract",
                    "fr": "French abstract"
                }
            },
            {
                "title": {
                    "fr": "Titre du document en français",
                    "en": "Titre en anglais",
                    "default": "Titre du document en français"
                },
                "doi": "10.5555/9876543212",
                "authors": [
                    {
                        "forename": "Jacques",
                        "surname": "Martin",
                        "orcId": "3333-2222-1111-0000",
                        "affiliations": [
                            {
                                "address": "Un labo scientifique",
                                "isni": "0000000987654321"
                            },
                            {
                                "address": "Une université",
                                "rnsr": "200612816J"
                            }
                        ],
                        "fullname": "Martin Jacques"
                    }
                ],
                "host": {
                    "title": "Mon journal favori",
                    "issn": "4321-1234"
                },
                "sourceUids": [
                    "sourceId1$database3",
                    "sourceId2$database4"
                ],
                "origins": {
                    "sources": [
                        "database3",
                        "database4"
                    ]
                },
                "abstract": {
                    "default": "2. abstract.en",
                    "en": "2. abstract.en",
                    "fr": ""
                }
            },
            {
                "authors": [
                    {
                        "forename": "Rolando",
                        "surname": "Herrero",
                        "affiliations": [
                            {
                                "address": "Section of Early Detection and Prevention, International Agency for Research on Cancer, Lyon, France."
                            }
                        ],
                        "fullname": "Herrero Rolando"
                    },
                    {
                        "forename": "Julie",
                        "surname": "Parsonnet",
                        "affiliations": [
                            {
                                "address": "Department of Medicine, Stanford University Medical Center, Stanford, California."
                            }
                        ],
                        "fullname": "Parsonnet Julie"
                    },
                    {
                        "forename": "Edwin Robert",
                        "surname": "Greenberg",
                        "affiliations": [
                            {
                                "address": "Division of Public Health Sciences, Fred Hutchinson Cancer Research Center, Seattle, Washington."
                            }
                        ],
                        "fullname": "Greenberg Edwin Robert"
                    }
                ],
                "classifications": {
                    "enrichments": {
                        "hal": {
                            "code": "sdv",
                            "en": "Life Sciences [q-bio]",
                            "fr": "Sciences du Vivant [q-bio]"
                        }
                    }
                },
                "doi": "10.1001/jama.2014.10498",
                "fulltextUrl": "https://hal.archives-ouvertes.fr/hal-01391249/file/Guyot_16265.pdf",
                "host": {
                    "title": "JAMA",
                    "electronicPublicationDate": "2014-09-24",
                    "eissn": "1538-3598",
                    "publicationDate": "2014-09-24",
                    "issue": "12",
                    "language": [
                        "English"
                    ],
                    "pages": [
                        {
                            "total": 0,
                            "range": "1197-8"
                        }
                    ],
                    "volume": "312"
                },
                "keywords": {
                    "en": {
                        "mesh": [
                            "Health Policy",
                            "Helicobacter Infections",
                            "diagnosis",
                            "drug therapy",
                            "Humans",
                            "Randomized Controlled Trials as Topic",
                            "Stomach Neoplasms",
                            "microbiology",
                            "prevention & control",
                            "United States"
                        ]
                    }
                },
                "language": [
                    "English"
                ],
                "pii": "1906623",
                "pmId": "25247512",
                "business": {
                    "duplicateGenre": "Article",
                    "sourceUidChain": "!crossref$10.1001/jama.2014.10498!pubmed$25247512!",
                    "duplicates": [
                        {
                            "sourceUid": "crossref$10.1001/jama.2014.10498",
                            "sessionName": "CROSSREF_2021-01-05_2014_1",
                            "rules": [
                                "Article : 2Collation:TiC_ENG+Ti_Source+volume+issue+page+annee",
                                "Article : 1ID:doi+TiC_ENG",
                                "Article : 1ID:doi+TiC",
                                "Article : 2Collation:TiC+Ti_Source+volume+issue+page+annee"
                            ],
                            "source": "crossref"
                        },
                        {
                            "sourceUid": "pubmed$25247512",
                            "sessionName": "PUBMED_2020-12-18_2014",
                            "rules": [
                                "Article : 2Collation:TiC_ENG+Ti_Source+volume+issue+page+annee",
                                "Article : 1ID:doi+TiC_ENG",
                                "Article : 1ID:doi+TiC",
                                "Article : 2Collation:TiC+Ti_Source+volume+issue+page+annee"
                            ],
                            "source": "pubmed"
                        }
                    ],
                    "duplicateRules": [
                        "Article : 1ID:doi+TiC",
                        "Article : 1ID:doi+TiC_ENG",
                        "Article : 2Collation:TiC+Ti_Source+volume+issue+page+annee",
                        "Article : 2Collation:TiC_ENG+Ti_Source+volume+issue+page+annee"
                    ]
                },
                "title": {
                    "default": "Prevention of Gastric Cancer",
                    "en": "Prevention of Gastric Cancer"
                },
                "sourceUids": [
                    "pubmed$25247512",
                    "crossref$10.1001/jama.2014.10498"
                ],
                "originalGenre": "Journal Article",
                "origins": {
                    "authors": "pubmed",
                    "classifications.enrichments": "pubmed",
                    "doi": "pubmed",
                    "host": "pubmed",
                    "keywords.en.mesh": [
                        "pubmed",
                        "crossref"
                    ],
                    "language": "pubmed",
                    "pii": "pubmed",
                    "pmId": "pubmed",
                    "business.duplicateGenre": "pubmed",
                    "business.sourceUidChain": "pubmed",
                    "business.duplicates": [
                        "pubmed",
                        "crossref"
                    ],
                    "business.duplicateRules": "pubmed",
                    "title.default": "crossref",
                    "title.en": "crossref",
                    "sourceUid": [
                        "pubmed",
                        "crossref"
                    ],
                    "originalGenre": "pubmed",
                    "sources": [
                        "pubmed",
                        "crossref"
                    ]
                }
            },
            {
                "abstract": {
                    "default": "Abstract The effect of the lockdown imposed to limit the spread of SARS-CoV-2 in France between March 14 and May 11, 2020 on the wastewater characteristics of two large urban areas...",
                    "en": "Abstract The effect of the lockdown imposed to limit the spread of SARS-CoV-2 in France between March 14 and May 11, 2020 on the wastewater characteristics of two large urban areas...",
                    "fr": ""
                },
                "authors": [
                    {
                        "forename": "Marie-Noëlle",
                        "isni": [],
                        "researcherId": [],
                        "surname": "Pons",
                        "affiliations": [
                            {
                                "ref": "",
                                "address": "Laboratoire Réactions et Génie des Procédés, Université de Lorraine, CNRS, 1 rue Grandville, BP 20451, Nancy cedex F-54001, France",
                                "isni": "",
                                "idRef": "",
                                "rnsr": [],
                                "enrichments": {
                                    "rnsr": [
                                        "201019324R",
                                        "201320573K"
                                    ]
                                }
                            },
                            {
                                "ref": "",
                                "address": "Laboratoire Réactions et Génie des Procédés, LTSER-Zone Atelier du Bassin de la Moselle, 1 rue Grandville, BP 20451, Nancy cedex F-54001, France",
                                "isni": "",
                                "idRef": "",
                                "rnsr": []
                            }
                        ],
                        "halAuthorId": [],
                        "orcId": [],
                        "fullname": "Marie-Noëlle Pons",
                        "idHal": [],
                        "idRef": [],
                        "viaf": [],
                        "rnsr": [
                            "201019324R",
                            "201320573K"
                        ]
                    },
                    {
                        "forename": "Pauline",
                        "isni": [],
                        "researcherId": [],
                        "surname": "Louis",
                        "affiliations": [
                            {
                                "ref": "",
                                "address": "Laboratoire Réactions et Génie des Procédés, Université de Lorraine, CNRS, 1 rue Grandville, BP 20451, Nancy cedex F-54001, France",
                                "isni": "",
                                "idRef": "",
                                "rnsr": [],
                                "enrichments": {
                                    "rnsr": [
                                        "201019324R",
                                        "201320573K"
                                    ]
                                }
                            }
                        ],
                        "halAuthorId": [],
                        "orcId": [],
                        "fullname": "Pauline Louis",
                        "idHal": [],
                        "idRef": [],
                        "viaf": [],
                        "rnsr": [
                            "201019324R",
                            "201320573K"
                        ]
                    },
                    {
                        "forename": "Davide",
                        "isni": [],
                        "researcherId": [],
                        "surname": "Vignati",
                        "affiliations": [
                            {
                                "ref": "",
                                "address": "Laboratoire Interdisciplinaire des Environnements Continentaux, Université de Lorraine, CNRS, Campus Bridoux, Rue du Général Delestraint, Metz F-57070, France",
                                "isni": "",
                                "idRef": "",
                                "rnsr": []
                            }
                        ],
                        "halAuthorId": [],
                        "orcId": [],
                        "fullname": "Davide Vignati",
                        "idHal": [],
                        "idRef": [],
                        "viaf": []
                    }
                ],
                "classifications": {
                    "enrichments": {
                        "hal": {
                            "code": "sdv",
                            "en": "Life Sciences [q-bio]",
                            "fr": "Sciences du Vivant [q-bio]"
                        }
                    }
                },
                "doi": "10.2166/wst.2020.520",
                "host": {
                    "electronicPublicationDate": "2020-11-2",
                    "editor": [],
                    "otherNumber": "",
                    "conference": {
                        "date": "",
                        "country": "",
                        "name": "",
                        "place": ""
                    },
                    "issue": "12",
                    "isbn": "",
                    "part": "",
                    "eissn": "1996-9732",
                    "language": [
                        "English"
                    ],
                    "specialIssue": "",
                    "title": "Water Science and Technology",
                    "volume": "82",
                    "pages": {
                        "range": "2813-2822"
                    },
                    "issn": "0273-1223",
                    "supplement": "",
                    "publisher": "IWA Publishing",
                    "eisbn": "",
                    "publicationDate": "2020-12-15"
                },
                "enrichments": {
                    "openAccess": {
                        "unpaywall": {
                            "oa_locations": [
                                {
                                    "license": null,
                                    "url_for_landing_page": "https://doi.org/10.2166/wst.2020.520",
                                    "is_best": true,
                                    "url_for_pdf": "https://iwaponline.com/wst/article-pdf/82/12/2813/803022/wst082122813.pdf",
                                    "host_type": "publisher",
                                    "url": "https://iwaponline.com/wst/article-pdf/82/12/2813/803022/wst082122813.pdf"
                                },
                                {
                                    "license": null,
                                    "url_for_landing_page": "https://hal.univ-lorraine.fr/hal-03083964/file/HALL_version_WST%2082-12-2020-pp2813-2822.pdf",
                                    "is_best": false,
                                    "url_for_pdf": "https://hal.univ-lorraine.fr/hal-03083964/file/HALL_version_WST%2082-12-2020-pp2813-2822.pdf",
                                    "host_type": "repository",
                                    "url": "https://hal.univ-lorraine.fr/hal-03083964/file/HALL_version_WST%2082-12-2020-pp2813-2822.pdf"
                                },
                                {
                                    "license": null,
                                    "url_for_landing_page": "https://hal.univ-lorraine.fr/hal-03083964",
                                    "is_best": false,
                                    "url_for_pdf": "https://hal.univ-lorraine.fr/hal-03083964/document",
                                    "host_type": "repository",
                                    "url": "https://hal.univ-lorraine.fr/hal-03083964/document"
                                }
                            ],
                            "oa_status": "bronze",
                            "is_oa": true,
                            "has_repository_copy": true
                        }
                    }
                },
                "funders": [
                    {
                        "name": "Agence Nationale de la Recherche",
                        "grantNumber": "ANR-16-CE34-0012-001",
                        "doi": ""
                    }
                ],
                "business": {
                    "duplicateGenre": "Article",
                    "sourceUidChain": "!crossref$10.2166/wst.2020.520!pubmed$33341772!",
                    "duplicates": [
                        {
                            "sourceUid": "pubmed$33341772",
                            "internalId": "13952F9BE480B1618B1C91E52174700C12304EC7",
                            "sessionName": "CROSSREF-PUBMED_2022-05-27_ADD-CLASSIF-HAL",
                            "source": "pubmed"
                        }
                    ]
                },
                "title": {
                    "default": "Effect of lockdown on wastewater characteristics: a comparison of two large urban areas",
                    "en": "Effect of lockdown on wastewater characteristics: a comparison of two large urban areas"
                },
                "sourceUids": [
                    "crossref$10.2166/wst.2020.520"
                ],
                "originalGenre": "Journal article",
                "origins": {
                    "abstract": "crossref",
                    "abstract.en": "crossref",
                    "abstract.default": "crossref",
                    "authors": "crossref",
                    "classifications.enrichments": "crossref",
                    "doi": "crossref",
                    "host": "crossref",
                    "enrichments": "crossref",
                    "funders": "crossref",
                    "business.duplicateGenre": "crossref",
                    "business.sourceUidChain": "crossref",
                    "business.duplicates": [
                        "crossref"
                    ],
                    "title.default": "crossref",
                    "title.en": "crossref",
                    "sourceUid": [
                        "crossref"
                    ],
                    "originalGenre": "crossref",
                    "sources": [
                        "crossref"
                    ]
                }
            }
        ];
        from([JSON.stringify(input)])
            .pipe(ezs('delegate', { file: __dirname + '/json-conditor-2.ini' }))
            .on('data', chunk => {
                res.push(chunk);
            })
            .on('end', () => {
                expect(res[0]).toHaveProperty("uri");
                expect(res[1]).toHaveProperty("uri");
                const withConstantUri = res.map((notice, i) => ({ ...notice, uri: i }))
                expect(withConstantUri).toEqual(expected);
                done();
            });
    }, 1_000);

    it('1 - should parse mergedDocuments-1', testMerged(1), 1_000);

    it('2 - should parse mergedDocuments-2', testMerged(2), 1_000);

    it('3 - should parse mergedDocuments3', testMerged(3), 1_000);

    it('4 - should parse mergedDocuments4', testMerged(4), 1_000);

    // WARNING: identifiers are not associated with authors
    // (not always as many identifiers as authors)
    it('5 - arxiv, authors enrichments identifiers, authors identifiers, classifications', testMerged(5), 1_000);

    it('6 - authors affiliations ref', testMerged(6), 1_000);

    it('7 - funders grantNumber / name', testMerged(7), 1_000);

    it('8 - keywords *', testMerged(8), 1_000);
});
