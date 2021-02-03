let universe = {
	nyx:{
		name: 'Nyx',
		type: 'System',
		parrent: null,
		child: ['delamar'],
		description: '',
		law: '',
		buy: null,
		sell: null,
		shop: null,
		image: '',
	},
      		delamar:{
      			name: 'Delamar',
      			type: 'Planet',
      			parrent: 'nyx',
      			child: ['levski'],
      			description: '',
      			law: '',
      			buy: null,
      			sell: null,
      			shop: null,
      			image: '',
      		},
            			levski:{
            				name: 'Levski',
            				type: 'Base',
            				parrent: 'delamar',
            				child: null,
            				description: '',
            				law: '',
            				buy: [['Agricultural Supplies',1],['Aluminum',1.11],['Hydrogen',0.9],['Iodine',0.35],['Quartz',1.28],['Waste',0.01]],
            				sell: [['Agricium',27.5],['Astatine',9],['Beryl',4.29],['Chlorine',1.71],['Corundum',2.71],['Diamond',6.77],['Distilled spirits',5.3],['Fluorine',2.91],['Gold',6.41],['Laranite',28.33],['Medical Supplies',17.83],['Processed food',1.5],['Scrap',1.78],['Stims',3.57],['Titanium',8.9],['Tungsten',4.06]],
            				shop: null,
            				image: '',
            			},
      stanton:{
            name: 'Stanton',
            type: 'System',
            parrent: null,
            child: ['arcCorp','crusader','hurston','microTech'],
            description: '',
            law: '',
            buy: null,
            sell: null,
            shop: null,
            image: '',
      },
                  arcCorp:{
                        name: 'ArcCorp',
                        type: 'Planet',
                        parrent: 'stanton',
                        child: ['ARC_L1','area18','baijini_Point','lyria','wala'],
                        description: '',
                        law: '',
                        buy: null,
                        sell: null,
                        shop: null,
                        image: '',
                  },
                              ARC_L1:{
                                    name: 'ARC-L1',
                                    type: 'asteroidField',
                                    parrent: 'arcCorp',
                                    child: ['R_and_R_ARC_L1'],
                                    description: '',
                                    law: '',
                                    buy: null,
                                    sell: null,
                                    shop: null,
                                    image: '',
                              },
                                          R_and_R_ARC_L1:{
                                                name: 'R&R ARC-L1',
                                                type: 'Station',
                                                parrent: 'ARC_L1',
                                                child: null,
                                                description: '',
                                                law: '',
                                                buy: null,
                                                sell: null,
                                                shop: null,
                                                image: '',
                                          },
                              area18:{
                                    name: 'Area18',
                                    type: 'Planet',
                                    parrent: 'arcCorp',
                                    child: ['area18_IO_North_Tower','area18_TDD'],
                                    description: '',
                                    law: '',
                                    buy: null,
                                    sell: null,
                                    shop: null,
                                    image: '',
                              },
                                          area18_IO_North_Tower:{
                                                name: 'Area18 IO North Tower',
                                                type: 'Base',
                                                parrent: 'area18',
                                                child: null,
                                                description: '',
                                                law: '',
                                                buy: null,
                                                sell: null,
                                                shop: null,
                                                image: '',
                                          },
                                          area18_TDD:{
                                                name: 'Area18 TDD',
                                                type: 'Base',
                                                parrent: 'area18',
                                                child: null,
                                                description: '',
                                                law: '',
                                                buy: null,
                                                sell: null,
                                                shop: null,
                                                image: '',
                                          },
                              baijini_Point:{
                                    name: 'Baijini Point',
                                    type: 'Station',
                                    parrent: 'arcCorp',
                                    child: null,
                                    description: '',
                                    law: '',
                                    buy: null,
                                    sell: null,
                                    shop: null,
                                    image: '',
                              },
                              lyria:{
                                    name: 'Lyria',
                                    type: 'Moon',
                                    parrent: 'arcCorp',
                                    child: ['humboldt_Mines','loveridge_Mineral_Reserve','paradise_Cove','shubin_Mining_Facility_SAL_2','shubin_Mining_Facility_SAL_5','the_Orphanage'],
                                    description: '',
                                    law: '',
                                    buy: null,
                                    sell: null,
                                    shop: null,
                                    image: '',
                              },
                                          humboldt_Mines:{
                                                name: 'Humboldt Mines',
                                                type: 'Outpost',
                                                parrent: 'lyria',
                                                child: null,
                                                description: '',
                                                law: '',
                                                buy: null,
                                                sell: null,
                                                shop: null,
                                                image: '',
                                          },
                                          loveridge_Mineral_Reserve:{
                                                name: 'Loveridge Mineral Reserve',
                                                type: 'Outpost',
                                                parrent: 'lyria',
                                                child: null,
                                                description: '',
                                                law: '',
                                                buy: null,
                                                sell: null,
                                                shop: null,
                                                image: '',
                                          },
                                          paradise_Cove:{
                                                name: 'Paradise Cove',
                                                type: 'Outpost',
                                                parrent: 'lyria',
                                                child: null,
                                                description: '',
                                                law: '',
                                                buy: null,
                                                sell: null,
                                                shop: null,
                                                image: '',
                                          },
                                          shubin_Mining_Facility_SAL_2:{
                                                name: 'Shubin Mining Facility SAL-2',
                                                type: 'Outpost',
                                                parrent: 'lyria',
                                                child: null,
                                                description: '',
                                                law: '',
                                                buy: null,
                                                sell: null,
                                                shop: null,
                                                image: '',
                                          },
                                          shubin_Mining_Facility_SAL_5:{
                                                name: 'Shubin Mining Facility SAL-5',
                                                type: 'Outpost',
                                                parrent: 'lyria',
                                                child: null,
                                                description: '',
                                                law: '',
                                                buy: null,
                                                sell: null,
                                                shop: null,
                                                image: '',
                                          },
                                          the_Orphanage:{
                                                name: 'THe Orphanage',
                                                type: 'Outpost',
                                                parrent: 'lyria',
                                                child: null,
                                                description: '',
                                                law: '',
                                                buy: null,
                                                sell: null,
                                                shop: null,
                                                image: '',
                                          },
                              wala:{
                                    name: 'Wala',
                                    type: 'Moon',
                                    parrent: 'arcCorp',
                                    child: ['arcCorp_Mining_Area_045','arcCorp_Mining_Area_048','arcCorp_Mining_Area_056','arcCorp_Mining_Area_061','Samson_and_Sons_Salvage_Center'],
                                    description: '',
                                    law: '',
                                    buy: null,
                                    sell: null,
                                    shop: null,
                                    image: '',
                              },
                                          arcCorp_Mining_Area_045:{
                                                name: 'ArcCorp Mining Area 045',
                                                type: 'Outpost',
                                                parrent: 'wala',
                                                child: null,
                                                description: '',
                                                law: '',
                                                buy: null,
                                                sell: null,
                                                shop: null,
                                                image: '',
                                          },
                                          arcCorp_Mining_Area_048:{
                                                name: 'ArcCorp Mining Area 048',
                                                type: 'Outpost',
                                                parrent: 'wala',
                                                child: null,
                                                description: '',
                                                law: '',
                                                buy: null,
                                                sell: null,
                                                shop: null,
                                                image: '',
                                          },
                                          arcCorp_Mining_Area_056:{
                                                name: 'ArcCorp Mining Area 056',
                                                type: 'Outpost',
                                                parrent: 'wala',
                                                child: null,
                                                description: '',
                                                law: '',
                                                buy: null,
                                                sell: null,
                                                shop: null,
                                                image: '',
                                          },
                                          arcCorp_Mining_Area_061:{
                                                name: 'ArcCorp Mining Area 061',
                                                type: 'Outpost',
                                                parrent: 'wala',
                                                child: null,
                                                description: '',
                                                law: '',
                                                buy: null,
                                                sell: null,
                                                shop: null,
                                                image: '',
                                          },
                                          Samson_and_Sons_Salvage_Center:{
                                                name: 'Samson & Sons Salvage Center',
                                                type: 'Outpost',
                                                parrent: 'wala',
                                                child: null,
                                                description: '',
                                                law: '',
                                                buy: null,
                                                sell: null,
                                                shop: null,
                                                image: '',
                                          },
                  crusader:{
                        name: 'Crusader',
                        type: 'Planet',
                        parrent: 'stanton',
                        child: ['CRU_L1','CRU_L4','CRU_L5','port_Olisar','cellin','daymar','yela'],
                        description: '',
                        law: '',
                        buy: null,
                        sell: null,
                        shop: null,
                        image: '',
                  },
                              CRU_L1:{
                                    name: 'CRU-L1',
                                    type: 'asteroidField',
                                    parrent: 'crusader',
                                    child: ['R_and_R_CRU_L1'],
                                    description: '',
                                    law: '',
                                    buy: null,
                                    sell: null,
                                    shop: null,
                                    image: '',
                              },
                                          R_and_R_CRU_L1:{
                                                name: 'R&R CRU-L1',
                                                type: 'Station',
                                                parrent: 'CRU_L1',
                                                child: null,
                                                description: '',
                                                law: '',
                                                buy: null,
                                                sell: null,
                                                shop: null,
                                                image: '',
                                          },
                              CRU_L4:{
                                    name: 'CRU_L4',
                                    type: 'asteroidField',
                                    parrent: 'crusader',
                                    child: ['R_and_R_CRU_L4','R_and_R_CRU_L4_Hidden_Terminal'],
                                    description: '',
                                    law: '',
                                    buy: null,
                                    sell: null,
                                    shop: null,
                                    image: '',

                              },
                                          R_and_R_CRU_L4:{
                                                name: 'R&R CRU-L4',
                                                type: 'Station',
                                                parrent: 'CRU_L4',
                                                child: null,
                                                description: '',
                                                law: '',
                                                buy: null,
                                                sell: null,
                                                shop: null,
                                                image: '',
                                          },
                                          R_and_R_CRU_L4_Hidden_Terminal:{
                                                name: 'R&R CRU-L4 Hidden Terminal',
                                                type: 'Station',
                                                parrent: 'CRU_L4',
                                                child: null,
                                                description: '',
                                                law: '',
                                                buy: null,
                                                sell: null,
                                                shop: null,
                                                image: '',
                                          },
                              CRU_L5:{
                                    name: 'CRU-L5',
                                    type: 'asteroidField',
                                    parrent: 'crusader',
                                    child: ['R_and_R_CRU_L5','R_and_R_CRU_L5_Hidden_Terminal'],
                                    description: '',
                                    law: '',
                                    buy: null,
                                    sell: null,
                                    shop: null,
                                    image: '',
                              },
                                          R_and_R_CRU_L5:{
                                                name: 'R&R CRU-L5',
                                                type: 'Station',
                                                parrent: 'CRU_L5',
                                                child: null,
                                                description: '',
                                                law: '',
                                                buy: null,
                                                sell: null,
                                                shop: null,
                                                image: '',
                                          },
                                          R_and_R_CRU_L5_Hidden_Terminal:{
                                                name: 'R&R CRU-L5 Hidden Terminal',
                                                type: 'Station',
                                                parrent: 'CRU_L5',
                                                child: null,
                                                description: '',
                                                law: '',
                                                buy: null,
                                                sell: null,
                                                shop: null,
                                                image: '',
                                          },
                              port_Olisar:{
                                    name: 'Port Olisar',
                                    type: 'Station',
                                    parrent: 'crusader',
                                    child: null,
                                    description: '',
                                    law: '',
                                    buy: null,
                                    sell: null,
                                    shop: null,
                                    image: '',
                              },
                              cellin:{
                                    name: 'Cellin',
                                    type: 'Moon',
                                    parrent: 'crusader',
                                    child: ['gallete_Family_Farms','hickes_Research','private_Property','terra_Mills_HydroFarm','tram_and_Myers_Mining'],
                                    description: '',
                                    law: '',
                                    buy: null,
                                    sell: null,
                                    shop: null,
                                    image: '',
                              },
                                          gallete_Family_Farms:{
                                                name: 'Gallete Family Farms',
                                                type: 'Outpost',
                                                parrent: 'cellin',
                                                child: null,
                                                description: '',
                                                law: '',
                                                buy: null,
                                                sell: null,
                                                shop: null,
                                                image: '',
                                          },
                                          hickes_Research:{
                                                name: 'Hickes Research',
                                                type: 'Outpost',
                                                parrent: 'cellin',
                                                child: null,
                                                description: '',
                                                law: '',
                                                buy: null,
                                                sell: null,
                                                shop: null,
                                                image: '',
                                          },
                                          private_Property:{
                                                name: 'Private Property',
                                                type: 'Outpost',
                                                parrent: 'cellin',
                                                child: null,
                                                description: '',
                                                law: '',
                                                buy: null,
                                                sell: null,
                                                shop: null,
                                                image: '',
                                          },
                                          terra_Mills_HydroFarm:{
                                                name: 'Terra Mills HydroFarm',
                                                type: 'Outpost',
                                                parrent: 'cellin',
                                                child: null,
                                                description: '',
                                                law: '',
                                                buy: null,
                                                sell: null,
                                                shop: null,
                                                image: '',
                                          },
                                          tram_and_Myers_Mining:{
                                                name: 'Tram & Myers Mining',
                                                type: 'Outpost',
                                                parrent: 'cellin',
                                                child: null,
                                                description: '',
                                                law: '',
                                                buy: null,
                                                sell: null,
                                                shop: null,
                                                image: '',
                                          },
                              daymar:{
                                    name: 'Daymar',
                                    type: 'Moon',
                                    parrent: 'crusader',
                                    child: ['arcCorp_Mining_141','bountiful_Harvest_Hydroponics','brios_Breaker_Yard','kudre_Ore','nuen_Waste_Management','shubin_Mining_Facility_SCD_1'],
                                    description: '',
                                    law: '',
                                    buy: null,
                                    sell: null,
                                    shop: null,
                                    image: '',
                              },
                                          arcCorp_Mining_141:{
                                                name: 'ArcCorp Mining 141',
                                                type: 'Outpost',
                                                parrent: 'daymar',
                                                child: null,
                                                description: '',
                                                law: '',
                                                buy: null,
                                                sell: null,
                                                shop: null,
                                                image: '',
                                          },
                                          bountiful_Harvest_Hydroponics:{
                                                name: 'Bountiful Harvest Hydroponics',
                                                type: 'Outpost',
                                                parrent: 'daymar',
                                                child: null,
                                                description: '',
                                                law: '',
                                                buy: null,
                                                sell: null,
                                                shop: null,
                                                image: '',
                                          },
                                          brios_Breaker_Yard:{
                                                name: 'Brios Breaker Yard',
                                                type: 'Outpost',
                                                parrent: 'daymar',
                                                child: null,
                                                description: '',
                                                law: '',
                                                buy: null,
                                                sell: null,
                                                shop: null,
                                                image: '',
                                          },
                                          kudre_Ore:{
                                                name: 'Kudre Ore',
                                                type: 'Outpost',
                                                parrent: 'daymar',
                                                child: null,
                                                description: '',
                                                law: '',
                                                buy: null,
                                                sell: null,
                                                shop: null,
                                                image: '',
                                          },
                                          nuen_Waste_Management:{
                                                name: 'Nuen Waste Management',
                                                type: 'Outpost',
                                                parrent: 'daymar',
                                                child: null,
                                                description: '',
                                                law: '',
                                                buy: null,
                                                sell: null,
                                                shop: null,
                                                image: '',
                                          },
                                          shubin_Mining_Facility_SCD_1:{
                                                name: 'Shubin Mining Facility SCD-1',
                                                type: 'Outpost',
                                                parrent: 'daymar',
                                                child: null,
                                                description: '',
                                                law: '',
                                                buy: null,
                                                sell: null,
                                                shop: null,
                                                image: '',
                                          },
                              yela:{
                                    name: 'Yela',
                                    type: 'Moon',
                                    parrent: 'crusader',
                                    child: ['arcCorp_Mining_157','benson_Mining_Outpost','deakins_Research','grimHEX','jumptown','NT_999_XX'],
                                    description: '',
                                    law: '',
                                    buy: null,
                                    sell: null,
                                    shop: null,
                                    image: '',
                              },
                                          arcCorp_Mining_157:{
                                                name: 'ArcCorp Mining 157',
                                                type: 'Outpost',
                                                parrent: 'yela',
                                                child: null,
                                                description: '',
                                                law: '',
                                                buy: null,
                                                sell: null,
                                                shop: null,
                                                image: '',
                                          },
                                          benson_Mining_Outpost:{
                                                name: 'Benson Mining Outpost',
                                                type: 'Outpost',
                                                parrent: 'yela',
                                                child: null,
                                                description: '',
                                                law: '',
                                                buy: null,
                                                sell: null,
                                                shop: null,
                                                image: '',
                                          },
                                          deakins_Research:{
                                                name: 'Deakins Research',
                                                type: 'Outpost',
                                                parrent: 'yela',
                                                child: null,
                                                description: '',
                                                law: '',
                                                buy: null,
                                                sell: null,
                                                shop: null,
                                                image: '',
                                          },
                                          grimHEX:{
                                                name: 'GrimHEX',
                                                type: 'Station',
                                                parrent: 'yela',
                                                child: null,
                                                description: '',
                                                law: '',
                                                buy: null,
                                                sell: null,
                                                shop: null,
                                                image: '',
                                          },
                                          jumptown:{
                                                name: 'Jumptown',
                                                type: 'Outpost',
                                                parrent: 'yela',
                                                child: null,
                                                description: '',
                                                law: '',
                                                buy: null,
                                                sell: null,
                                                shop: null,
                                                image: '',
                                          },
                                          NT_999_XX:{
                                                name: 'NT_999_XX',
                                                type: 'Outpost',
                                                parrent: 'yela',
                                                child: null,
                                                description: '',
                                                law: '',
                                                buy: null,
                                                sell: null,
                                                shop: null,
                                                image: '',
                                          },
                  hurston:{
                        name: 'Hurston',
                        type: 'Planet',
                        parrent: 'stanton',
                        child: ['everus_Harbor','HDMS_Edmond','HDMS_Hadley','HDMS_Oparei','HDMS_Pinewood','HDMS_Stanhope','HDMS_Thedus','HUR_L1','HUR_L2','HUR_L3','HUR_L4','HUR_L5','lorville','aberdeen','arial','ita','magda','reclamation_and_Disposal_Orinth'],
                        description: '',
                        law: '',
                        buy: null,
                        sell: null,
                        shop: null,
                        image: '',
                  },
                              everus_Harbor:{
                                    name: 'Everus Harbor',
                                    type: 'Station',
                                    parrent: 'hurston',
                                    child: null,
                                    description: '',
                                    law: '',
                                    buy: null,
                                    sell: null,
                                    shop: null,
                                    image: '',
                              },
                              HDMS_Edmond:{
                                    name: 'HDMS Edmond',
                                    type: 'Outpost',
                                    parrent: 'hurston',
                                    child: null,
                                    description: '',
                                    law: '',
                                    buy: null,
                                    sell: null,
                                    shop: null,
                                    image: '',
                              },
                              HDMS_Hadley:{
                                    name: 'HDMS Hadley',
                                    type: 'Outpost',
                                    parrent: 'hurston',
                                    child: null,
                                    description: '',
                                    law: '',
                                    buy: null,
                                    sell: null,
                                    shop: null,
                                    image: '',
                              },
                              HDMS_Oparei:{
                                    name: 'HDMS Oparei',
                                    type: 'Outpost',
                                    parrent: 'hurston',
                                    child: null,
                                    description: '',
                                    law: '',
                                    buy: null,
                                    sell: null,
                                    shop: null,
                                    image: '',
                              },
                              HDMS_Pinewood:{
                                    name: 'HDMS Pinewood',
                                    type: 'Outpost',
                                    parrent: 'hurston',
                                    child: null,
                                    description: '',
                                    law: '',
                                    buy: null,
                                    sell: null,
                                    shop: null,
                                    image: '',
                              },
                              HDMS_Stanhope:{
                                    name: 'HDMS Stanhope',
                                    type: 'Outpost',
                                    parrent: 'hurston',
                                    child: null,
                                    description: '',
                                    law: '',
                                    buy: null,
                                    sell: null,
                                    shop: null,
                                    image: '',
                              },
                              HDMS_Thedus:{
                                    name: 'HDMS Thedus',
                                    type: 'Outpost',
                                    parrent: 'hurston',
                                    child: null,
                                    description: '',
                                    law: '',
                                    buy: null,
                                    sell: null,
                                    shop: null,
                                    image: '',
                              },
                              HUR_L1:{
                                    name: 'HUR-L1',
                                    type: 'asteroidField',
                                    parrent: 'hurston',
                                    child: ['R_and_R_HUR_L1'],
                                    description: '',
                                    law: '',
                                    buy: null,
                                    sell: null,
                                    shop: null,
                                    image: '',
                              },
                                          R_and_R_HUR_L1:{
                                                name: 'R&R HUR-L1',
                                                type: 'Station',
                                                parrent: 'HUR_L1',
                                                child: null,
                                                description: '',
                                                law: '',
                                                buy: null,
                                                sell: null,
                                                shop: null,
                                                image: '',
                                          },
                              HUR_L2:{
                                    name: 'HUR-L2',
                                    type: 'asteroidField',
                                    parrent: 'hurston',
                                    child: ['R_and_R_HUR_L2'],
                                    description: '',
                                    law: '',
                                    buy: null,
                                    sell: null,
                                    shop: null,
                                    image: '',
                              },
                                          R_and_R_HUR_L2:{
                                                name: 'R&R HUR-L2',
                                                type: 'Station',
                                                parrent: 'HUR_L2',
                                                child: null,
                                                description: '',
                                                law: '',
                                                buy: null,
                                                sell: null,
                                                shop: null,
                                                image: '',
                                          },
                              HUR_L3:{
                                    name: 'HUR-L3',
                                    type: 'asteroidField',
                                    parrent: 'hurston',
                                    child: ['R_and_R_HUR_L3'],
                                    description: '',
                                    law: '',
                                    buy: null,
                                    sell: null,
                                    shop: null,
                                    image: '',
                              },
                                          R_and_R_HUR_L3:{
                                                name: 'R&R HUR-L3',
                                                type: 'Station',
                                                parrent: 'HUR_L3',
                                                child: null,
                                                description: '',
                                                law: '',
                                                buy: null,
                                                sell: null,
                                                shop: null,
                                                image: '',
                                          },
                              HUR_L4:{
                                    name: 'HUR-L4',
                                    type: 'asteroidField',
                                    parrent: 'hurston',
                                    child: ['R_and_R_HUR_L4'],
                                    description: '',
                                    law: '',
                                    buy: null,
                                    sell: null,
                                    shop: null,
                                    image: '',
                              },
                                          R_and_R_HUR_L4:{
                                                name: 'R&R HUR-L4',
                                                type: 'Station',
                                                parrent: 'HUR_L4',
                                                child: null,
                                                description: '',
                                                law: '',
                                                buy: null,
                                                sell: null,
                                                shop: null,
                                                image: '',
                                          },
                              HUR_L5:{
                                    name: 'HUR-L5',
                                    type: 'asteroidField',
                                    parrent: 'hurston',
                                    child: ['R_and_R_HUR_L5'],
                                    description: '',
                                    law: '',
                                    buy: null,
                                    sell: null,
                                    shop: null,
                                    image: '',
                              },
                                          R_and_R_HUR_L5:{
                                                name: 'R&R HUR-L5',
                                                type: 'Station',
                                                parrent: 'HUR_L5',
                                                child: null,
                                                description: '',
                                                law: '',
                                                buy: null,
                                                sell: null,
                                                shop: null,
                                                image: '',
                                          },
                              lorville:{
                                    name: 'Lorville',
                                    type: 'Base',
                                    parrent: 'hurston',
                                    child: ['lorville_CBD','lorville_L19_Admin_Office'],
                                    description: '',
                                    law: '',
                                    buy: null,
                                    sell: null,
                                    shop: null,
                                    image: '',
                              },
                                          lorville_CBD:{
                                                name: 'Lorville-CBD',
                                                type: 'Base',
                                                parrent: 'lorville',
                                                child: null,
                                                description: '',
                                                law: '',
                                                buy: null,
                                                sell: null,
                                                shop: null,
                                                image: '',
                                          },
                                          lorville_L19_Admin_Office:{
                                                name: 'Lorville L19 Admin Office',
                                                type: 'Base',
                                                parrent: 'lorville',
                                                child: null,
                                                description: '',
                                                law: '',
                                                buy: null,
                                                sell: null,
                                                shop: null,
                                                image: '',
                                          },
                              aberdeen:{
                                    name: 'Aberdeen',
                                    type: 'Moon',
                                    parrent: 'hurston',
                                    child: ['HDMS_Anderson','HDMS_Norgaard'],
                                    description: '',
                                    law: '',
                                    buy: null,
                                    sell: null,
                                    shop: null,
                                    image: '',
                              },
                                          HDMS_Anderson:{
                                                name: 'HDMS Anderson',
                                                type: 'Outpost',
                                                parrent: 'aberdeen',
                                                child: null,
                                                description: '',
                                                law: '',
                                                buy: null,
                                                sell: null,
                                                shop: null,
                                                image: '',
                                          },
                                          HDMS_Norgaard:{
                                                name: 'HDMS Norgaard',
                                                type: 'Outpost',
                                                parrent: 'aberdeen',
                                                child: null,
                                                description: '',
                                                law: '',
                                                buy: null,
                                                sell: null,
                                                shop: null,
                                                image: '',
                                          },
                              arial:{
                                    name: 'Arial',
                                    type: 'Moon',
                                    parrent: 'hurston',
                                    child: ['HDMS_Bezdek','HDMS_Lathan'],
                                    description: '',
                                    law: '',
                                    buy: null,
                                    sell: null,
                                    shop: null,
                                    image: '',
                              },
                                          HDMS_Bezdek:{
                                                name: 'HDMS Bezdek',
                                                type: 'Outpost',
                                                parrent: 'arial',
                                                child: null,
                                                description: '',
                                                law: '',
                                                buy: null,
                                                sell: null,
                                                shop: null,
                                                image: '',
                                          },
                                          HDMS_Lathan:{
                                                name: 'HDMS Lathan',
                                                type: 'Outpost',
                                                parrent: 'arial',
                                                child: null,
                                                description: '',
                                                law: '',
                                                buy: null,
                                                sell: null,
                                                shop: null,
                                                image: '',
                                          },
                              ita:{
                                    name: 'Ita',
                                    type: 'Moon',
                                    parrent: 'hurston',
                                    child: ['HDMS_Ryder','HDMS_Woodruff'],
                                    description: '',
                                    law: '',
                                    buy: null,
                                    sell: null,
                                    shop: null,
                                    image: '',
                              },
                                          HDMS_Ryder:{
                                                name: 'HDMS Ryder',
                                                type: 'Outpost',
                                                parrent: 'ita',
                                                child: null,
                                                description: '',
                                                law: '',
                                                buy: null,
                                                sell: null,
                                                shop: null,
                                                image: '',
                                          },
                                          HDMS_Woodruff:{
                                                name: 'HDMS Woodruff',
                                                type: 'Outpost',
                                                parrent: 'ita',
                                                child: null,
                                                description: '',
                                                law: '',
                                                buy: null,
                                                sell: null,
                                                shop: null,
                                                image: '',
                                          },
                              magda:{
                                    name: 'Magda',
                                    type: 'Moon',
                                    parrent: 'hurston',
                                    child: ['HDMS_Hahn','HDMS_Perlman'],
                                    description: '',
                                    law: '',
                                    buy: null,
                                    sell: null,
                                    shop: null,
                                    image: '',
                              },
                                          HDMS_Hahn:{
                                                name: 'HDMS Hahn',
                                                type: 'Outpost',
                                                parrent: 'magda',
                                                child: null,
                                                description: '',
                                                law: '',
                                                buy: null,
                                                sell: null,
                                                shop: null,
                                                image: '',
                                          },
                                          HDMS_Perlman:{
                                                name: 'HDMS Perlman',
                                                type: 'Outpost',
                                                parrent: 'magda',
                                                child: null,
                                                description: '',
                                                law: '',
                                                buy: null,
                                                sell: null,
                                                shop: null,
                                                image: '',
                                          },
                              reclamation_and_Disposal_Orinth:{
                                    name: 'Reclamation & Disposal Orinth',
                                    type: 'Outpost',
                                    parrent: 'hurston',
                                    child: null,
                                    description: '',
                                    law: '',
                                    buy: null,
                                    sell: null,
                                    shop: null,
                                    image: '',
                                          },
                  microTech:{
                        name: 'microTech',
                        type: 'Planet',
                        parrent: 'stanton',
                        child: ['MIC_L1','new_Babbage','outpost_54','port_Tressler','rayari_Deltana_Research_Outpost','shubin_Mining_Facility_SM0_10','shubin_Mining_Facility_SM0_13','shubin_Mining_Facility_SM0_18','shubin_Mining_Facility_SM0_22','calliope','clio','euterpe'],
                        description: '',
                        law: '',
                        buy: null,
                        sell: null,
                        shop: null,
                        image: '',
                  },
                              MIC_L1:{
                                    name: 'MIC-L1',
                                    type: 'asteroidField',
                                    parrent: 'microTech',
                                    child: ['R_and_R_MIC_L1'],
                                    description: '',
                                    law: '',
                                    buy: null,
                                    sell: null,
                                    shop: null,
                                    image: '',
                              },
                                          R_and_R_MIC_L1:{
                                                name: 'R&R MIC-L1',
                                                type: 'Station',
                                                parrent: 'MIC_L1',
                                                child: null,
                                                description: '',
                                                law: '',
                                                buy: null,
                                                sell: null,
                                                shop: null,
                                                image: '',
                                          },
                              new_Babbage:{
                                    name: 'New Babbage',
                                    type: 'Base',
                                    parrent: 'microTech',
                                    child: ['new_Babbage_MT_Planetary_Services','new_Babbage_TDD'],
                                    description: '',
                                    law: '',
                                    buy: null,
                                    sell: null,
                                    shop: null,
                                    image: '',
                              },
                                          new_Babbage_MT_Planetary_Services:{
                                                name: 'New Babbage MT Planetary Services',
                                                type: 'Base',
                                                parrent: 'microTech',
                                                child: null,
                                                description: '',
                                                law: '',
                                                buy: null,
                                                sell: null,
                                                shop: null,
                                                image: '',
                                          },
                                          new_Babbage_TDD:{
                                                name: 'New Babbage TDD',
                                                type: 'Base',
                                                parrent: 'microTech',
                                                child: null,
                                                description: '',
                                                law: '',
                                                buy: null,
                                                sell: null,
                                                shop: null,
                                                image: '',
                                          },
                              outpost_54:{
                                    name: 'Outpost 54',
                                    type: 'Outpost',
                                    parrent: 'microTech',
                                    child: null,
                                    description: '',
                                    law: '',
                                    buy: null,
                                    sell: null,
                                    shop: null,
                                    image: '',
                              },
                              port_Tressler:{
                                    name: 'Port Tressler',
                                    type: 'Station',
                                    parrent: 'microTech',
                                    child: null,
                                    description: '',
                                    law: '',
                                    buy: null,
                                    sell: null,
                                    shop: null,
                                    image: '',
                              },
                              rayari_Deltana_Research_Outpost:{
                                    name: 'Rayari Deltana Research Outpost',
                                    type: 'Outpost',
                                    parrent: 'microTech',
                                    child: null,
                                    description: '',
                                    law: '',
                                    buy: null,
                                    sell: null,
                                    shop: null,
                                    image: '',
                              },
                              shubin_Mining_Facility_SM0_10:{
                                    name: 'Shubin Mining Facility SM0-10',
                                    type: 'Outpost',
                                    parrent: 'microTech',
                                    child: null,
                                    description: '',
                                    law: '',
                                    buy: null,
                                    sell: null,
                                    shop: null,
                                    image: '',
                              },
                              shubin_Mining_Facility_SM0_13:{
                                    name: 'Shubin Mining Facility SM0-13',
                                    type: 'Outpost',
                                    parrent: 'microTech',
                                    child: null,
                                    description: '',
                                    law: '',
                                    buy: null,
                                    sell: null,
                                    shop: null,
                                    image: '',
                              },
                              shubin_Mining_Facility_SM0_18:{
                                    name: 'Shubin Mining Facility SM0-18',
                                    type: 'Outpost',
                                    parrent: 'microTech',
                                    child: null,
                                    description: '',
                                    law: '',
                                    buy: null,
                                    sell: null,
                                    shop: null,
                                    image: '',
                              },
                              shubin_Mining_Facility_SM0_22:{
                                    name: 'Shubin Mining Facility SM0-22',
                                    type: 'Outpost',
                                    parrent: 'microTech',
                                    child: null,
                                    description: '',
                                    law: '',
                                    buy: null,
                                    sell: null,
                                    shop: null,
                                    image: '',
                              },
                              calliope:{
                                    name: 'Calliope',
                                    type: 'Moon',
                                    parrent: 'microTech',
                                    child: ['ravens_Roost','rayari_Anvik_Research_Outpost','rayari_Kaltag_Research_Outpost','shubin_Mining_Facility_SMCa_6','shubin_Mining_Facility_SMCa_8'],
                                    description: '',
                                    law: '',
                                    buy: null,
                                    sell: null,
                                    shop: null,
                                    image: '',
                              },
                                          ravens_Roost:{
                                                name: 'Ravens Roost',
                                                type: 'Outpost',
                                                parrent: 'microTech',
                                                child: null,
                                                description: '',
                                                law: '',
                                                buy: null,
                                                sell: null,
                                                shop: null,
                                                image: '',
                                          },
                                          rayari_Anvik_Research_Outpost:{
                                                name: 'Rayari Anvik Research Outpost',
                                                type: 'Outpost',
                                                parrent: 'microTech',
                                                child: null,
                                                description: '',
                                                law: '',
                                                buy: null,
                                                sell: null,
                                                shop: null,
                                                image: '',
                                          },
                                          rayari_Kaltag_Research_Outpost:{
                                                name: 'Rayari Kaltag Research Outpost',
                                                type: 'Outpost',
                                                parrent: 'microTech',
                                                child: null,
                                                description: '',
                                                law: '',
                                                buy: null,
                                                sell: null,
                                                shop: null,
                                                image: '',
                                          },
                                          shubin_Mining_Facility_SMCa_6:{
                                                name: 'Shubin Mining Facility SMCa-6',
                                                type: 'Outpost',
                                                parrent: 'microTech',
                                                child: null,
                                                description: '',
                                                law: '',
                                                buy: null,
                                                sell: null,
                                                shop: null,
                                                image: '',
                                          },
                                          shubin_Mining_Facility_SMCa_8:{
                                                name: 'Shubin Mining Facility SMCa-8',
                                                type: 'Outpost',
                                                parrent: 'microTech',
                                                child: null,
                                                description: '',
                                                law: '',
                                                buy: null,
                                                sell: null,
                                                shop: null,
                                                image: '',
                                          },
                              clio:{
                                    name: 'Clio',
                                    type: 'Moon',
                                    parrent: 'microTech',
                                    child: ['rayari_Cantwell_Research_Outpost','rayari_McGrath_Research_Outpost'],
                                    description: '',
                                    law: '',
                                    buy: null,
                                    sell: null,
                                    shop: null,
                                    image: '',
                              },
                                          rayari_Cantwell_Research_Outpost:{
                                                name: 'Rayari Cantwell Research Outpost',
                                                type: 'Moon',
                                                parrent: 'microTech',
                                                child: null,
                                                description: '',
                                                law: '',
                                                buy: null,
                                                sell: null,
                                                shop: null,
                                                image: '',
                                          },
                                          rayari_McGrath_Research_Outpost:{
                                                name: 'Rayari McGrath Research Outpost',
                                                type: 'Moon',
                                                parrent: 'microTech',
                                                child: null,
                                                description: '',
                                                law: '',
                                                buy: null,
                                                sell: null,
                                                shop: null,
                                                image: '',
                                          },
                              euterpe:{
                                    name: 'Euterpe',
                                    type: 'Moon',
                                    parrent: 'microTech',
                                    child: ['buds_Growery'],
                                    description: '',
                                    law: '',
                                    buy: null,
                                    sell: null,
                                    shop: null,
                                    image: '',
                              },
                                          buds_Growery:{
                                                name: 'Buds Growery',
                                                type: 'Moon',
                                                parrent: 'euterpe',
                                                child: null,
                                                description: '',
                                                law: '',
                                                buy: null,
                                                sell: null,
                                                shop: null,
                                                image: '',
                                          },
}

let itemTrade = {
	agricium:{
		name: 'Agricium',
		description: '',
		image: '',
		getTradeItemLocation(how){
			let arr = []
			for(i in universe){
				if(universe[i][how]){
					let itemList = universe[i][how]
					for(a of itemList){
						if(a[0] == this.name){arr.push(universe[i].name)}
					}
				}
			}
			return arr
		}
	},
	agricultural_supplies:{
		name: 'Agricultural Supplies',
		description: '',
		image: '',
		getTradeItemLocation(how){
			let arr = []
			for(i in universe){
				if(universe[i][how]){
					let itemList = universe[i][how]
					for(a of itemList){
						if(a[0] == this.name){arr.push(universe[i].name)}
					}
				}
			}
			return arr
		}
	},
	altruciatoxin:{
		name: 'altruciatoxin',
		description: '',
		image: '',
		getTradeItemLocation(how){
			let arr = []
			for(i in universe){
				if(universe[i][how]){
					let itemList = universe[i][how]
					for(a of itemList){
						if(a[0] == this.name){arr.push(universe[i].name)}
					}
				}
			}
			return arr
		}
	},
	aluminum:{
		name: 'Aluminum',
		description: '',
		image: '',
		getTradeItemLocation(how){
			let arr = []
			for(i in universe){
				if(universe[i][how]){
					let itemList = universe[i][how]
					for(a of itemList){
						if(a[0] == this.name){arr.push(universe[i].name)}
					}
				}
			}
			return arr
		}
	},
	astatine:{
		name: 'Astatine',
		description: '',
		image: '',
		getTradeItemLocation(how){
			let arr = []
			for(i in universe){
				if(universe[i][how]){
					let itemList = universe[i][how]
					for(a of itemList){
						if(a[0] == this.name){arr.push(universe[i].name)}
					}
				}
			}
			return arr
		}
	},
	beryl:{
		name: 'Beryl',
		description: '',
		image: '',
		getTradeItemLocation(how){
			let arr = []
			for(i in universe){
				if(universe[i][how]){
					let itemList = universe[i][how]
					for(a of itemList){
						if(a[0] == this.name){arr.push(universe[i].name)}
					}
				}
			}
			return arr
		}
	},
	chlorine:{
		name: 'Chlorine',
		description: '',
		image: '',
		getTradeItemLocation(how){
			let arr = []
			for(i in universe){
				if(universe[i][how]){
					let itemList = universe[i][how]
					for(a of itemList){
						if(a[0] == this.name){arr.push(universe[i].name)}
					}
				}
			}
			return arr
		}
	},
	corundum:{
		name: 'Corundum',
		description: '',
		image: '',
		getTradeItemLocation(how){
			let arr = []
			for(i in universe){
				if(universe[i][how]){
					let itemList = universe[i][how]
					for(a of itemList){
						if(a[0] == this.name){arr.push(universe[i].name)}
					}
				}
			}
			return arr
		}
	},
	diamond:{
		name: 'Diamond',
		description: '',
		image: '',
		getTradeItemLocation(how){
			let arr = []
			for(i in universe){
				if(universe[i][how]){
					let itemList = universe[i][how]
					for(a of itemList){
						if(a[0] == this.name){arr.push(universe[i].name)}
					}
				}
			}
			return arr
		}
	},
	distilled_spirits:{
		name: 'Distilled spirits',
		description: '',
		image: '',
		getTradeItemLocation(how){
			let arr = []
			for(i in universe){
				if(universe[i][how]){
					let itemList = universe[i][how]
					for(a of itemList){
						if(a[0] == this.name){arr.push(universe[i].name)}
					}
				}
			}
			return arr
		}
	},
	etam:{
		name: 'Etam',
		description: '',
		image: '',
		getTradeItemLocation(how){
			let arr = []
			for(i in universe){
				if(universe[i][how]){
					let itemList = universe[i][how]
					for(a of itemList){
						if(a[0] == this.name){arr.push(universe[i].name)}
					}
				}
			}
			return arr
		}
	},
	fluorine:{
		name: "Fluorine",
		description: '',
		image: '',
		getTradeItemLocation(how){
			let arr = []
			for(i in universe){
				if(universe[i][how]){
					let itemList = universe[i][how]
					for(a of itemList){
						if(a[0] == this.name){arr.push(universe[i].name)}
					}
				}
			}
			return arr
		}
	},
	gold:{
		name: "Gold",
		description: '',
		image: '',
		getTradeItemLocation(how){
			let arr = []
			for(i in universe){
				if(universe[i][how]){
					let itemList = universe[i][how]
					for(a of itemList){
						if(a[0] == this.name){arr.push(universe[i].name)}
					}
				}
			}
			return arr
		}
	},
	hydrogen:{
		name: "Hydrogen",
		description: '',
		image: '',
		getTradeItemLocation(how){
			let arr = []
			for(i in universe){
				if(universe[i][how]){
					let itemList = universe[i][how]
					for(a of itemList){
						if(a[0] == this.name){arr.push(universe[i].name)}
					}
				}
			}
			return arr
		}
	},
	iodine:{
		name: "Iodine",
		description: '',
		image: '',
		getTradeItemLocation(how){
			let arr = []
			for(i in universe){
				if(universe[i][how]){
					let itemList = universe[i][how]
					for(a of itemList){
						if(a[0] == this.name){arr.push(universe[i].name)}
					}
				}
			}
			return arr
		}
	},
	laranite:{
		name: "Laranite",
		description: '',
		image: '',
		getTradeItemLocation(how){
			let arr = []
			for(i in universe){
				if(universe[i][how]){
					let itemList = universe[i][how]
					for(a of itemList){
						if(a[0] == this.name){arr.push(universe[i].name)}
					}
				}
			}
			return arr
		}
	},
	maze:{
		name: "Maze",
		description: '',
		image: '',
		getTradeItemLocation(how){
			let arr = []
			for(i in universe){
				if(universe[i][how]){
					let itemList = universe[i][how]
					for(a of itemList){
						if(a[0] == this.name){arr.push(universe[i].name)}
					}
				}
			}
			return arr
		}
	},
	medical_supplies:{
		name: "Medical Supplies",
		description: '',
		image: '',
		getTradeItemLocation(how){
			let arr = []
			for(i in universe){
				if(universe[i][how]){
					let itemList = universe[i][how]
					for(a of itemList){
						if(a[0] == this.name){arr.push(universe[i].name)}
					}
				}
			}
			return arr
		}
	},
	neon:{
		name: "Neon",
		description: '',
		image: '',
		getTradeItemLocation(how){
			let arr = []
			for(i in universe){
				if(universe[i][how]){
					let itemList = universe[i][how]
					for(a of itemList){
						if(a[0] == this.name){arr.push(universe[i].name)}
					}
				}
			}
			return arr
		}
	},
	processed_food:{
		name: "Processed food",
		description: '',
		image: '',
		getTradeItemLocation(how){
			let arr = []
			for(i in universe){
				if(universe[i][how]){
					let itemList = universe[i][how]
					for(a of itemList){
						if(a[0] == this.name){arr.push(universe[i].name)}
					}
				}
			}
			return arr
		}
	},
	quartz:{
		name: "Quartz",
		description: '',
		image: '',
		getTradeItemLocation(how){
			let arr = []
			for(i in universe){
				if(universe[i][how]){
					let itemList = universe[i][how]
					for(a of itemList){
						if(a[0] == this.name){arr.push(universe[i].name)}
					}
				}
			}
			return arr
		}
	},
	revenant_tree_pollen:{
		name: "Revenant Tree Pollen",
		description: '',
		image: '',
		getTradeItemLocation(how){
			let arr = []
			for(i in universe){
				if(universe[i][how]){
					let itemList = universe[i][how]
					for(a of itemList){
						if(a[0] == this.name){arr.push(universe[i].name)}
					}
				}
			}
			return arr
		}
	},
	scrap:{
		name: "Scrap",
		description: '',
		image: '',
		getTradeItemLocation(how){
			let arr = []
			for(i in universe){
				if(universe[i][how]){
					let itemList = universe[i][how]
					for(a of itemList){
						if(a[0] == this.name){arr.push(universe[i].name)}
					}
				}
			}
			return arr
		}
	},
	slam:{
		name: "SLAM",
		description: '',
		image: '',
		getTradeItemLocation(how){
			let arr = []
			for(i in universe){
				if(universe[i][how]){
					let itemList = universe[i][how]
					for(a of itemList){
						if(a[0] == this.name){arr.push(universe[i].name)}
					}
				}
			}
			return arr
		}
	},
	stims:{
		name: "Stims",
		description: '',
		image: '',
		getTradeItemLocation(how){
			let arr = []
			for(i in universe){
				if(universe[i][how]){
					let itemList = universe[i][how]
					for(a of itemList){
						if(a[0] == this.name){arr.push(universe[i].name)}
					}
				}
			}
			return arr
		}
	},
	titanium:{
		name: "Stims",
		description: '',
		image: '',
		getTradeItemLocation(how){
			let arr = []
			for(i in universe){
				if(universe[i][how]){
					let itemList = universe[i][how]
					for(a of itemList){
						if(a[0] == this.name){arr.push(universe[i].name)}
					}
				}
			}
			return arr
		}
	},
	tungsten:{
		name: "Tungsten",
		description: '',
		image: '',
		getTradeItemLocation(how){
			let arr = []
			for(i in universe){
				if(universe[i][how]){
					let itemList = universe[i][how]
					for(a of itemList){
						if(a[0] == this.name){arr.push(universe[i].name)}
					}
				}
			}
			return arr
		}
	},
	waste:{
		name: "Waste",
		description: '',
		image: '',
		getTradeItemLocation(how){
			let arr = []
			for(i in universe){
				if(universe[i][how]){
					let itemList = universe[i][how]
					for(a of itemList){
						if(a[0] == this.name){arr.push(universe[i].name)}
					}
				}
			}
			return arr
		}
	},
	widow:{
		name: "WiDoW",
		description: '',
		image: '',
		getTradeItemLocation(how){
			let arr = []
			for(i in universe){
				if(universe[i][how]){
					let itemList = universe[i][how]
					for(a of itemList){
						if(a[0] == this.name){arr.push(universe[i].name)}
					}
				}
			}
			return arr
		}
	},
}


const http = require('http');                               //берем модуль http
const fs = require("fs");

const server = http.createServer((req, res) => {            //метод отвечающий за событийность
      res.setHeader('Access-Control-Allow-Origin', '*')
      res.end(JSON.stringify(universe))                     //метод для завершения ответа
}).listen(3000, () => console.log('серв слушает для universe'))          //запускаем прослушивание ()порт и ip)

const server2 = http.createServer((req, res) => {            //метод отвечающий за событийность
      res.setHeader('Access-Control-Allow-Origin', '*')
      res.end(JSON.stringify(itemTrade))                     //метод для завершения ответа
}).listen(3001, () => console.log('серв слушает для itemTrade'))          //запускаем прослушивание ()порт и ip)

const server3 = http.createServer((req, res) => {            //метод отвечающий за событийность
      res.setHeader('Access-Control-Allow-Origin', '*')
      res.end()                    					 //метод для завершения ответа
}).listen(3002, () => console.log('серв слушает для получения'))          //запускаем прослушивание ()порт и ip)
