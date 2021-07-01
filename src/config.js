export default {
    map: {
        geoserverUrl: process.env.GEOSERVER_URL,
        zoom: 6,
        center: [-9397690.175308002, 5582164.274953878],
        clusterExpandCountThreshold: 10,
        clusterExpandZoomThreshold: 12

    },
    geostreamingEndpoint: process.env.GEOSTREAMS_URL,
    sensors: {
        displayOnlineStatus: true
    },
    source: {
        'epa': {
            label: 'EPA Offshore',
            order: 1,
            color: '#0D71BA',
            description: 'These locations contain data related to EPA Pollutant Loading.',
            more_info: 'Click here for more information about EPA Pollutant Loading',
            link : 'https://cfpub.epa.gov/dmr/',
            useSeasonFilter: true
        },
        'glfmsp': {
            label: 'Great Lakes Fish Monitoring and Surveillance Program',
            color: '#F7941E',
            order: 2,
            description:
                '<p>The Great Lakes Fish Monitoring and Surveillance Program (GLFMSP) collects fish from each of the ' +
                'Great Lakes and analyze them for contaminants on an annual basis. This analysis helps identify trends ' +
                'of chemicals of concern and to identify emerging chemicals that may pose a threat to the health of the ' +
                'Great Lakes.  The GLFMSP has a complimentary program in Environment and Climate Change Canada and ' +
                'strives to provide information to State, Tribal, and Federal Agency partners.</p><br/>' +
                '<p>This long term monitoring and surveillance program was established in the late 1970s and has ' +
                'collected top predator fish (lake trout and walleye) from consistent locations in each of the ' +
                'lakes in the fall of every year. Fish samples are collected in a target size range to limit ' +
                'variation in the results and produce high quality data.  Fish age has recently been added as ' +
                'a variable to composite fish, prior to analysis, as a way to account for changes in the Great ' +
                'Lakes food web.  Annual averages from whole fish samples are available on this site for the' +
                ' contaminants listed below.</p><br/>' +
                '<p>The fish are collected over the course of several months each fall. The date, Oct. 15<sup>th</sup>, ' +
                'was chosen for the time series since it is the mid-point of the sampling season.</p>',
            more_info: 'More Information about GLFMSP',
            link: 'https://www.epa.gov/great-lakes-monitoring/great-lakes-fish-monitoring-and-surveillance'
        },
        'greon': {
            label: 'Great Rivers Ecological Observation Network',
            color: '#BDBFA6',
            description:
                'The GREON℠ program seeks to establish a network of real-time water quality monitoring platforms ' +
                'on great rivers around the world. NGRREC℠ partnered with YSI Inc. to design and launch a monitoring ' +
                'buoy capable of real-time, continuous collection of water quality and phytoplankton data. The first ' +
                'YSI PISCES (Pontoon for In-situ Characterization of Environmental Systems) buoy launched in May 2013 ' +
                'on the Upper Mississippi River System, but the program aims to expand to deploy platforms across the ' +
                'globe on other international great river systems.',
            qaqc: 'Note: This data is not QA/QC.',
            more_info: 'More information about GREON',
            link: 'http://www.ngrrec.org/GREON/'
        },
        'gac': {
            label: 'Gustavus Adolphus College',
            color: '#8c1ace',
            description: 'Spreadsheet data from 2016'
        },
        'heidelberg': {
            label: 'Heidelberg University',
            color: '#CC2128',
            order: 3,
            description:
                'Started by Professor of Biology Dr. David B. Baker as the River Laboratory in 1969, ' +
                'the laboratory was renamed the Water Quality Laboratory in 1974. Early research projects centered ' +
                'on nutrient and sediment loadings from Ohio rivers flowing into Lake Erie. The lab extended its ' +
                'studies to Lake Erie in 1978 as a participant in the binational Lake Erie Intensive Study, added ' +
                'pesticide analyses to its monitoring programs in 1980, and incorporated three major tributaries ' +
                'of the Ohio River to its loading studies in 1996. Through a resolution of the U.S. House of ' +
                'Representatives introduced by Ohio’s Representative Paul E. Gillmor, the name changed to the ' +
                'National Center for Water Quality Research in 2004.',
            more_info: 'Heidelberg University, National Center for Water Quality Research, Tributary Loading Website',
            link: 'https://www.heidelberg.edu/academics/research-and-centers/national-center-for-water-quality-research'
        },
        'iadn': {
            label: 'Integrated Atmospheric Deposition Network',
            color: '#8A2BE2',
            order: 4,
            description:
                'Integrated Atmospheric Deposition Network (IADN) has been monitoring atmospheric deposition ' +
                'of pollutants (in air and precipitation) to the Great Lakes basin since the early 1990s. The program ' +
                'is run by USEPA Great Lakes National Program Office , Environment Canada\'s (EC) Health Division of' +
                ' Ontario Region and EC\'s Meteorological Service of Canada. This website contains data from seven ' +
                'stations: five Master Stations (one on each of the Great Lakes) and two Satellite Stations in the' +
                ' urban centers of Chicago, IL and Cleveland, OH. Annual averages from each station are provided for' +
                ' the parameters.',
            more_info: 'More Information about IADN',
            link: 'https://www.epa.gov/great-lakes-monitoring/great-lakes-integrated-atmospheric-deposition-network'
        },
        'illinois-epa': {
            label: 'IEPA Ambient Water Quality Monitoring Network',
            color: '#d89b0d',
            description: 'These locations contain data related to the IEPA Ambient Water Quality Monitoring Network.',
            more_info: 'Click here for more information about the IEPA Ambient Water Quality Monitoring Network (AWQMN)',
            link: 'http://www.epa.illinois.gov/topics/water-quality/monitoring/river-and-stream/'
        },
        'iwqis': {
            label: 'Iowa Water Quality Information System',
            color: '#31CFC1',
            description:
                'The IWQIS allows access to real-time water-quality data and information such as nitrate, pH, and ' +
                'dissolved oxygen concentrations, discharge rates, and temperature.',
            more_info: 'Click here for more information about IWQIS',
            link : 'http://iwqis.iowawis.org/'
        },
        'lec': {
            label: 'Lake Erie Committee Forage Task Group',
            color: '#4D6363',
            order: 5,
            description:
                'Lake Erie Forage Task Group is part of the Lake Erie Committee (LEC), which is a member of ' +
                'the Great Lakes Fisheries Commission. LEC is a bi-national group with members from Ontario, Michigan, ' +
                'Ohio, Pennsylvania and New York who administer the fisheries of Lake Erie. In 1999, the Forage Task ' +
                'Group of the LEC initiated a lower trophic level assessment program within Lake Erie and Lake St. ' +
                'Clair. The program monitors total phosphorus and chlorophyll a, along with several other variables' +
                ' that characterize ecosystem health across Lake Erie. A total of 21 nearshore stations are sampled ' +
                'every two weeks from May through September each year.',
            more_info: 'More Information about LEC',
            link: 'http://www.glfc.org/lakecom/lec/FTG.htm'
        },
        'metc': {
            label: 'Metropolitan Council',
            color: '#D2E11D',
            description:
                'These locations contain data related to the ' +
                'Metropolitan Council Environmental Information Management Systems.',
            more_info: 'Click here for more information about the Metropolitan Council',
            link : 'https://eims.metc.state.mn.us/'
        },
        'noaa': {
            label: 'National Oceanic and Atmospheric Administration',
            order: 7,
            color: '#043C82',
            description:
                "NOAA's National Data Buoy Center (NDBC) collects wind, wave, and other marine data. The data are " +
                'collected from NDBC moored buoys and from C-MAN (Coastal-Marine Automated Network) stations located ' +
                'on piers, offshore towers, lighthouses, and beaches. Parameters reported by both buoys and C-MAN ' +
                'stations include air temperature and pressure, wind speed and direction, wind gust, and sea surface ' +
                'temperature. The buoys (and a few C-MAN stations located on offshore towers) also report wave data, ' +
                "usually including wave height, wave period, and wave spectra. We've chosen to focus on buoys on the " +
                'Mississippi River that are equipped with continuous water quality sensors for this website.',
            more_info: 'For more information and for access to all NOAA buoy data.',
            link : 'http://www.nodc.noaa.gov/'
        },
        'sierra-club': {
            label: 'Fox River Study Group',
            color: '#9C2C1A',
            description:  'These locations contain data related to the Fox River Study Group.',
            more_info: 'Click here for more information about the Fox River Study Group',
            link : 'http://foxriverstudygroup.org/'
        },
        'tennessee': {
            label: 'Tennessee',
            color: '#d80d50',
            description: 'These locations contain data related to Tennessee.'
        },
        'usgs': {
            label: 'United States Geological Survey',
            order: 6,
            color: '#39B54A',
            description:
                'The USGS investigates the occurrence, quantity, quality, distribution, and movement of surface and ' +
                'underground waters and disseminates the data to the public, State and local governments, public and ' +
                'private utilities, and other Federal agencies involved with managing our water resources. U.S. ' +
                'Geological Survey conducts long-term monitoring of lakes and rivers nationwide. They have gauges ' +
                "throughout many rivers in the Mississippi River basin. We've chosen to focus on gauges on the " +
                'Mississippi River and its tributaries that are equipped with continuous nitrate sensors for this website.',
            more_info: 'For more information and for access to all USGS water quantity and quality data.',
            link : 'http://waterdata.usgs.gov/nwis'
        },
        'usgs-sg': {
            label: 'United States Geological Survey (Supergauge)',
            color: '#228e31',
            description:
                'The USGS investigates the occurrence, quantity, quality, distribution, and movement of surface and ' +
                'underground waters and disseminates the data to the public, State and local governments, public and ' +
                'private utilities, and other Federal agencies involved with managing our water resources. U.S. ' +
                'Geological Survey conducts long-term monitoring of lakes and rivers nationwide. They have gauges ' +
                "throughout many rivers in the Mississippi River basin. We've chosen to focus on gauges on the " +
                'Mississippi River and its tributaries that are equipped with continuous nitrate sensors for this website.',
            more_info: 'For more information and for access to all USGS water quantity and quality data.',
            link : 'http://waterdata.usgs.gov/nwis'
        },
        'umrr-ltrm': {
            label: 'Upper Mississippi River Restoration',
            color: '#5F99C1',
            description:
                'The UMRR LTRM water quality sampling design focuses on a subset of limnological variables related ' +
                'to habitat quality and ecosystem function that includes physicochemical features, suspended sediment, ' +
                "and major plant nutrients known to be significant to aquatic habitat in this system. We've chosen to " +
                'focus on long term nitrate data sets available on the Mississippi River for this website.',
            more_info: 'Click here for more information and for access to all original UMRR LTRM data.',
            link : 'http://www.umesc.usgs.gov/data_library/water_quality/water1_query.shtml'
        },
        'wqp': {
            label: 'Water Quality Portal',
            color: '#F28E1E',
            description:
                'The Water Quality Portal (WQP) is a cooperative service sponsored by the United States Geological ' +
                'Survey (USGS), the Environmental Protection Agency (EPA) and the National Water Quality Monitoring ' +
                'Council (NWQMC) that integrates publicly available water quality data from the USGS National Water ' +
                'Information System (NWIS) the EPA STOrage and RETrieval (STORET) Data Warehouse, and the USDA ARS ' +
                "Sustaining The Earth’s Watersheds - Agricultural Research Database System (STEWARDS). We've chosen " +
                'to focus on available Water Quality Portal long term (5 years) nitrate data sets available on the ' +
                'Mississippi River and its tributaries for this website.',
            more_info: 'Click here for more information and for access to all WQP data.',
            link : 'http://waterqualitydata.us/'
        }
    },
    trends: {
        // The trend sample config is from GLM
        map: {
            geoserverUrl: process.env.GEOSERVER_URL,
            zoom: 6,
            center: [-9397690.175308002, 5582164.274953878]
        },
        boundaries: [
            {
                type: 'Feature',
                properties: {
                    title: 'Lake Superior',
                    region: 'SU',
                    id: 'su',
                    sortOrder: 1,
                    threshold: {
                        'total-phosphorus-glenda': 5
                    }
                },
                geometry: {
                    type: 'Polygon',
                    coordinates: [
                        [
                            [-88.1982421875, 48.9513664709477],
                            [-92.8125, 46.78501604269254],
                            [-92.52685546875, 46.51351558059737],
                            [-84.462890625, 46.51351558059737],
                            [-84.70458984375, 47.916342040161155],
                            [-86.220703125, 48.8936153614802],
                            [-88.1982421875, 48.9513664709477]
                        ]
                    ],
                    region_coordinate: [-87.5, 47.5, 0]
                }
            },
            {
                type: 'Feature',
                properties: {
                    title: 'Lake Huron',
                    region: 'HU',
                    id: 'hu',
                    sortOrder: 3,
                    threshold: {
                        'total-phosphorus-glenda': 5
                    }
                },
                geometry: {
                    type: 'Polygon',
                    coordinates: [
                        [
                            [-84.66064453125, 46.057985244793024],
                            [-84.0673828125, 46.46813299215554],
                            [-80.70556640625, 46.027481852486645],
                            [-79.47509765625, 44.68427737181225],
                            [-80.13427734374999, 44.37098696297173],
                            [-81.2109375, 44.84029065139799],
                            [-81.73828125, 43.30919109985686],
                            [-82.46337890625, 42.956422511073335],
                            [-82.96875, 43.97700467496408],
                            [-84.0673828125, 43.1811470593997],
                            [-84.55078125, 43.88205730390537],
                            [-83.4521484375, 44.54350521320822],
                            [-84.5068359375, 45.61403741135093],
                            [-84.66064453125, 46.057985244793024]
                        ]
                    ],
                    region_coordinate: [-82.0, 45.0, 0]
                }
            },
            {
                type: 'Feature',
                properties: {
                    title: 'Lake Michigan',
                    region: 'MI',
                    id: 'mi',
                    sortOrder: 2,
                    threshold: {
                        'total-phosphorus-glenda': 7
                    }
                },
                geometry: {
                    type: 'Polygon',
                    coordinates: [
                        [
                            [-86.98974609375, 46.01985337287631],
                            [-88.143310546875, 44.73892994307368],
                            [-87.890625, 41.590796851056005],
                            [-85.97900390625, 41.5579215778042],
                            [-86.220703125, 44.213709909702054],
                            [-84.814453125, 45.72152152227954],
                            [-85.078125, 46.255846818480336],
                            [-86.98974609375, 46.01985337287631]
                        ]
                    ],
                    region_coordinate: [-87.0, 43.5, 0]
                }
            },
            {
                type: 'Feature',
                properties: {
                    title: 'Lake St. Clair',
                    region: 'CL',
                    id: 'cl',
                    sortOrder: 4,
                    threshold: {
                        'total-phosphorus-glenda': 5
                    }
                },
                geometry: {
                    type: 'Polygon',
                    coordinates: [
                        [
                            [-82.65289306640624, 42.726839149554394],
                            [-82.85614013671875, 42.67233920753354],
                            [-82.99072265625, 42.34433533786168],
                            [-82.584228515625, 42.259016415705766],
                            [-82.3974609375, 42.32403179535469],
                            [-82.38922119140625, 42.53486817758702],
                            [-82.65289306640624, 42.726839149554394]
                        ]
                    ],
                    region_coordinate: [-82.7, 42.5, 0]
                }
            },
            {
                type: 'Feature',
                properties: {
                    title: 'Lake Erie Eastern Basin',
                    region: 'ER',
                    id: 'er-east',
                    sortOrder: 6,
                    threshold: {
                        'total-phosphorus-glenda': 10
                    }
                },
                geometry: {
                    type: 'Polygon',
                    coordinates: [
                        [
                            [-80.46524047851562,
                                42.61172761665585
                            ],
                            [-80.06149291992188,
                                42.545998432501825
                            ],
                            [-79.95849609375,
                                42.178670521216
                            ],
                            [-78.90106201171875,
                                42.61779143282346
                            ],
                            [-78.68682861328125,
                                42.87596410238254
                            ],
                            [-78.97796630859375,
                                42.94838139765314
                            ],
                            [-80.25787353515625,
                                42.84173746978783
                            ],
                            [-80.46524047851562,
                                42.61172761665585
                            ]
                        ]
                    ],
                    region_coordinate: [-79.5, 42.7, 0]
                }
            },
            {
                type: 'Feature',
                properties: {
                    title: 'Lake Erie Central Basin',
                    region: 'ER',
                    id: 'er-center',
                    sortOrder: 7,
                    threshold: {
                        'total-phosphorus-glenda': 10
                    }
                },
                geometry: {
                    type: 'Polygon',
                    coordinates: [
                        [
                            [-82.50457763671874,
                                41.92169436589449
                            ],
                            [-82.69134521484374,
                                41.44993208042259
                            ],
                            [-82.49771118164062,
                                41.36031866306708
                            ],
                            [-81.73828125,
                                41.43346072687072
                            ],
                            [-79.95986938476562,
                                42.17663512119453
                            ],
                            [-80.0628662109375,
                                42.54701017547383
                            ],
                            [-81.2548828125,
                                42.73087427928485
                            ],
                            [-82.54714965820312,
                                42.058469844272544
                            ],
                            [-82.50457763671874,
                                41.92169436589449
                            ]
                        ]
                    ],
                    region_coordinate: [-81.5, 42.0, 0]
                }
            },
            {
                type: 'Feature',
                properties: {
                    title: 'Lake Erie Western Basin',
                    region: 'ER',
                    id: 'er-west',
                    sortOrder: 8,
                    threshold: {
                        'total-phosphorus-glenda': 15
                    }
                },
                geometry: {
                    type: 'Polygon',
                    coordinates: [
                        [
                            [-82.50595092773438,
                                41.92271616673924
                            ],
                            [-82.69271850585938,
                                41.448902743309674
                            ],
                            [-83.935546875,
                                41.475660200278234
                            ],
                            [-83.21319580078125,
                                42.120635949743644
                            ],
                            [-82.54852294921875,
                                42.05745022024682
                            ],
                            [-82.50595092773438,
                                41.92271616673924
                            ]
                        ]
                    ],
                    region_coordinate: [-83.2, 41.7, 0]
                }
            },
            {
                type: 'Feature',
                properties: {
                    title: 'Lake Ontario',
                    region: 'ON',
                    id: 'on',
                    sortOrder: 9,
                    threshold: {
                        'total-phosphorus-glenda': 10
                    }
                },
                geometry: {
                    type: 'Polygon',
                    coordinates: [
                        [
                            [-79.82666015625,
                                43.29320031385282
                            ],
                            [-79.16748046874999,
                                43.810747313446996
                            ],
                            [-76.5087890625,
                                44.166444664458595
                            ],
                            [-76.124267578125,
                                43.937461690316646
                            ],
                            [-76.1572265625,
                                43.50872101129684
                            ],
                            [-76.9482421875,
                                43.25320494908846
                            ],
                            [-78.541259765625,
                                43.37311218382002
                            ],
                            [-79.332275390625,
                                43.16512263158296
                            ],
                            [-79.82666015625,
                                43.29320031385282
                            ]
                        ]
                    ],
                    region_coordinate: [-77.8, 43.6, 0]
                }
            }
        ],
        seasons: [
            {
                id: 'spring',
                title: 'Spring'
            },
            {
                id: 'summer',
                title: 'Summer'
            }
        ],
        regions: {
            parameters: [
                {
                    id: 'alkalinity-glenda',
                    title: 'Alkalinity (mg/L)'
                },
                {
                    id: 'ammonia-nitrogen-glenda',
                    title: 'Ammonia-Nitrogen (ug/l)'
                },
                {
                    id: 'ammonium-glenda',
                    title: 'Ammonium (ug/l)'
                },
                {
                    id: 'chloride-glenda',
                    title: 'Chloride (mg/l)'
                },
                {
                    id: 'chlorophyll-a-glenda',
                    title: 'Chlorophyll <i>a</i> (ug/L)'
                },
                {
                    id: 'conductivity-glenda',
                    title: 'Conductivity (umho/cm)'
                },
                {
                    id: 'total-hardness-glenda',
                    title: 'Hardness, Total as CaCO3 (mg/l)'
                },
                {
                    id: 'nitrogen-glenda',
                    title: 'Nitrite-Nitrate (mg/L)'
                },
                {
                    id: 'ph-glenda',
                    title: 'pH'
                },
                {
                    id: 'phosphorus-orthophosphorus-glenda',
                    title: 'Phosphorus, Orthophosphorus as P (ug/l)'
                },
                {
                    id: 'secchi-disc-transparency-glenda',
                    title: 'Secchi Disc Transparency (uS/cm)'
                },
                {
                    id: 'silica-glenda',
                    title: 'Silica (mg/L)'
                },
                {
                    id: 'silica-dissolved-glenda',
                    title: 'Silica, Dissolved as Si (mg/l)'
                },
                {
                    id: 'silica-total-glenda',
                    title: 'Silica, Total (mg/l)'
                },
                {
                    id: 'temperature-glenda',
                    title: 'Temperature (C)'
                },
                {
                    id: 'total-phosphorus-glenda',
                    title: 'Total Phosphorus (ug/L)'
                },
                {
                    id: 'turbidity-glenda',
                    title: 'Turbidity (NTU)'
                },
                {
                    id: 'zooplankton-biomass',
                    title: 'Zooplankton Biovolume Total'
                },
                {
                    id: 'zooplankton-density',
                    title: 'Zooplankton Density Total'
                },
                {
                    id: 'phytoplankton-biovolume',
                    title: 'Phytoplankton Biovolume Total'
                }
            ]
        }
    }
};
