const ezs = require('@ezs/core');
const from = require('from');

describe('json-conditor-2.ini', () => {
    it('should parse a JSON', done => {
        const res = [];
        const expected = [
            {
                // "abstract en": "",
                // "abstract fr": "",
                // "articleNumber": "",
                // "arxiv": "",
                "authors affiliations address": [["Some Laboratory of science", "Some University"]],
                "authors affiliations idRef": [[]],
                "authors affiliations isni": [["0000000123456789"]],
                // "authors affiliations ref": [[]],
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
                // "bibCode": "",
                // "cern": "",
                // "classification dewey": "",
                // "classification hal": "",
                // "classification tef": "",
                // "classification thesisDomain": "",
                // "creationDate": "",
                // "defenseOrganisms associatedLaboratory": [],
                // "defenseOrganisms associatedLaboratoryIdRef": [],
                // "defenseOrganisms degreeGrantor": [],
                // "defenseOrganisms degreeGrantorIdRef": [],
                // "defenseOrganisms doctoralSchool": [],
                // "defenseOrganisms doctoralSchoolIdRef": [],
                "documentType": "",
                "doi": ["10.5555/9876543210"],
                "duplicateRules": [],
                "duplicates source": ["database1", "database2"],
                "duplicates sourceUid": ["sourceId1$database1", "sourceId2$database2"],
                // "eisbn": "",
                "eissn": "",
                // "electronicPublicationDate": "",
                // "enrichments classifications bso": [],
                // "enrichments classifications scienceMetrix": [],
                // "enrichments classifications scopus": [],
                // "enrichments oa core": [],
                // "enrichments oa unpaywall": [],
                // "ensam": "",
                // "fulltextPath": "",
                // "funders grantNumber": [],
                // "funders name": [],
                // "halId": "",
                // "hasDoi": true,
                // "hasFulltext": "",
                // "hasTransDuplicate": "",
                // "idChain": "",
                // "idConditor": "",
                // "idProdinra": "",
                // "ineris": "",
                // "inspire": "",
                // "ird": "",
                // "irstea": "",
                // "isDeduplicable": "",
                // "isDuplicate": "",
                // "isNearDuplicate": "",
                // "isbn": "",
                "issn": "1234-1234",
                "issue": "",
                // "keywords en author": [],
                "keywords en mesh": [],
                // "keywords fr author": [],
                // "keywords fr mesh": [],
                // "keywords fr rameau": [],
                // "keywords undetermined author": [],
                "language": [],
                // "localRef": "",
                // "meetingAbstractNumber": "",
                // "nearDuplicates source": [],
                // "nearDuplicates sourceUid": [],
                // "nearDuplicatesDetectedBySimilarity source": [],
                // "nearDuplicatesDetectedBySimilarity sourceUid": [],
                // "nnt": "",
                // "oatao": "",
                // "okina": "",
                // "otherNumber": "",
                "pageRange": [],
                // "part": "",
                // "patentNumber": "",
                // "path": "",
                "pii": "",
                "pmId": "",
                // "pmc": "",
                // "ppn": "",
                // "provider": "", // ?
                "publicationDate": "",
                // "publisher": "",
                // "reportNumber": "",
                // "sciencespo": "",
                // "sessionName": "",
                // "source": "",
                // "sourceId": "", //?
                // "sourceUid": "",//?
                // "specialIssue": "",
                // "supplement": "",
                // "thesisAdvisor forename": [],
                // "thesisAdvisor idRef": [],
                // "thesisAdvisor surname": [],
                "title default": "french title of the doc",
                "title en": "english title",
                "title fr": "french title of the doc",
                "title journal": "My favourite journal",
                // "title meeting": "",
                // "title monography": "",
                // "typeConditor": "",
                "uri": "uid:/RJWprpeBG",
                // "utKey": "",
                "volume": ""
            },
            {
                //     "abstract en": "2. abstract.en",
                //     "abstract fr": "",
                //     "articleNumber": "",
                //     "arxiv": "",
                "authors affiliations address": [["Un labo scientifique", "Une université"]],
                "authors affiliations idRef": [[]],
                "authors affiliations isni": [["0000000987654321"]],
                //     "authors affiliations ref": [[null], [null, null]],
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
                //     "bibCode": "",
                //     "cern": "",
                //     "classification dewey": "",
                //     "classification hal": "",
                //     "classification tef": "",
                //     "classification thesisDomain": "",
                //     "creationDate": "",
                //     "defenseOrganisms associatedLaboratory": [],
                //     "defenseOrganisms associatedLaboratoryIdRef": [],
                //     "defenseOrganisms degreeGrantor": [],
                //     "defenseOrganisms degreeGrantorIdRef": [],
                //     "defenseOrganisms doctoralSchool": [],
                //     "defenseOrganisms doctoralSchoolIdRef": [],
                "documentType": "",
                "doi": ["10.5555/9876543212"],
                "duplicateRules": [],
                "duplicates source": ["database3", "database4"],
                "duplicates sourceUid": ["sourceId1$database3", "sourceId2$database4"],
                //     "eisbn": "",
                "eissn": "",
                //     "electronicPublicationDate": "",
                //     "enrichments classifications bso": "",
                //     "enrichments classifications scienceMetrix": "",
                //     "enrichments classifications scopus": "",
                //     "enrichments oa core": "",
                //     "enrichments oa unpaywall": "",
                //     "ensam": "",
                //     "fulltextPath": "",
                //     "funders grantNumber": [],
                //     "funders name": [],
                //     "halId": "",
                //     "hasDoi": "",
                //     "hasFulltext": "",
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
                //     "keywords en author": "",
                "keywords en mesh": [],
                //     "keywords fr author": "",
                //     "keywords fr mesh": "",
                //     "keywords fr rameau": "",
                //     "keywords undetermined author": "",
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
                "authors affiliations address": [
                    ["Section of Early Detection and Prevention, International Agency for Research on Cancer, Lyon, France."],
                    ["Department of Medicine, Stanford University Medical Center, Stanford, California."],
                    ["Division of Public Health Sciences, Fred Hutchinson Cancer Research Center, Seattle, Washington."]
                ],
                "authors affiliations idRef": [[], [], []],
                "authors affiliations isni": [[], [], []],
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
                "documentType": "Article",
                "doi": ["10.1001/jama.2014.10498"],
                "duplicateRules": [
                    "Article : 1ID:doi+TiC",
                    "Article : 1ID:doi+TiC_ENG",
                    "Article : 2Collation:TiC+Ti_Source+volume+issue+page+annee",
                    "Article : 2Collation:TiC_ENG+Ti_Source+volume+issue+page+annee"
                ],
                "duplicates source": [
                    "pubmed",
                    "crossref"
                ],
                "duplicates sourceUid": [
                    "pubmed$25247512",
                    "crossref$10.1001/jama.2014.10498"
                ],
                "eissn": "1538-3598",
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
                "host": {
                    "title": "JAMA",
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
    });
});
