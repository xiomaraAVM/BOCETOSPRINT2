const chileCenter = [-35.5, -71.0];

const cvtData = [
    {
        "id": 1,
        "region": "Tarapacá",
        "comuna": "Iquique",
        "nombre": "Paz y Alegría para vivir",
        "viviendas": 20,
        "construccion": "2009-2014",
        "inauguracion": "2015*",
        "direccion": "Pje. Playa Quinteros esq. Pdte. Eduardo Frei Montalva, Iquique.",
        "coords": [
            -20.258189695898,
            -70.12617693828871
        ],
        "administracion": "Público",
        "foto": "",
        "pagina": "paginas/cvt-1.html"
    },
    {
        "id": 2,
        "region": "Atacama",
        "comuna": "Caldera",
        "nombre": "Valles del Desierto",
        "viviendas": 16,
        "construccion": "2010-2011",
        "inauguracion": "2012*",
        "direccion": "Esmeralda 193, Caldera, Atacama",
        "coords": [
            -27.074411918794585,
            -70.8223713397812
        ],
        "administracion": "Público",
        "foto": "",
        "pagina": "paginas/cvt-2.html"
    },
    {
        "id": 3,
        "region": "Atacama",
        "comuna": "Diego de Almagro",
        "nombre": "Florece el Desierto",
        "viviendas": 30,
        "construccion": "---",
        "inauguracion": "2011",
        "direccion": "Chile 1700 Diego de Almagro, Atacama",
        "coords": [
            -26.385513564188017,
            -70.0497944543108
        ],
        "administracion": "Público",
        "foto": "",
        "pagina": "paginas/cvt-3.html"
    },
    {
        "id": 4,
        "region": "Coquimbo",
        "comuna": "Andacollo",
        "nombre": "Haroldo Zepeda Urquieta",
        "viviendas": 15,
        "construccion": "---",
        "inauguracion": "2012",
        "direccion": "El Salitre esq. Calle Urmeneta, Andacollo",
        "coords": [
            -30.226460035904672,
            -71.08548439373298
        ],
        "administracion": "Público",
        "foto": "",
        "pagina": "paginas/cvt-4.html"
    },
    {
        "id": 5,
        "region": "Valparaíso",
        "comuna": "San Antonio",
        "nombre": "San Antonio 1",
        "viviendas": 20,
        "construccion": "2012",
        "inauguracion": "2013*",
        "direccion": "2661641 San Antonio, Valparaíso",
        "coords": [
            -33.56751465973957,
            -71.60671908683531
        ],
        "administracion": "Público",
        "foto": "",
        "pagina": "paginas/cvt-5.html"
    },
    {
        "id": 6,
        "region": "Valparaíso",
        "comuna": "Llay Llay",
        "nombre": "Santa Teresa",
        "viviendas": 15,
        "construccion": "---",
        "inauguracion": "2012",
        "direccion": "2220290 Llay-Llay, Llaillay, Valparaíso",
        "coords": [
            -32.8417127938784,
            -70.94039453331101
        ],
        "administracion": "Público",
        "foto": "",
        "pagina": "paginas/Ficha_Llay_Llay_Santa_Teresa.html"
    },
    {
        "id": 7,
        "region": "Valparaíso",
        "comuna": "Quillota",
        "nombre": "Quillota Paraíso",
        "viviendas": 30,
        "construccion": "---",
        "inauguracion": "2018",
        "direccion": "Agustín Avezón N° 1069, Sector el Bajo Quillota calle jose miguel carrera S/N con pasaje yungay",
        "coords": [
            -32.883196,
            -71.264137
        ],
        "administracion": "Público",
        "foto": "",
        "pagina": "paginas/cvt-7.html"
    },
    {
        "id": 8,
        "region": "Valparaíso",
        "comuna": "El Tabo",
        "nombre": "La Reserva de los Años Nuevo Amanecer",
        "viviendas": 20,
        "construccion": "---",
        "inauguracion": "2018",
        "direccion": "Av. Las Salinas 105, 2691693 Las Cruces, El Tabo, Valparaíso",
        "coords": [
            -33.49210467875411,
            -71.62123929650537
        ],
        "administracion": "Público",
        "foto": "",
        "pagina": "paginas/cvt-8.html"
    },
    {
        "id": 9,
        "region": "Valparaíso",
        "comuna": "La Ligua",
        "nombre": "El Edén",
        "viviendas": 20,
        "construccion": "2012",
        "inauguracion": "2014",
        "direccion": "Manuel Antonio Gaete, 2030000 La Ligua, Valparaíso",
        "coords": [
            -32.4511921960521,
            -71.23972379314674
        ],
        "administracion": "Público",
        "foto": "",
        "pagina": "paginas/cvt-9.html"
    },
    {
        "id": 10,
        "region": "Metropolitana",
        "comuna": "Buin",
        "nombre": "Bajos de Matte",
        "viviendas": 12,
        "construccion": "---",
        "inauguracion": "2012",
        "direccion": "47 Hectáreas 1435, 9501101 Maipo, Buin, Región Metropolitana",
        "coords": [
            -33.714483878368334,
            -70.74142403464681
        ],
        "administracion": "Público",
        "foto": "",
        "pagina": "paginas/cvt-10.html"
    },
    {
        "id": 11,
        "region": "Metropolitana",
        "comuna": "Cerrillos",
        "nombre": "Raúl Silva Henríquez",
        "viviendas": 20,
        "construccion": "---",
        "inauguracion": "---",
        "direccion": "C. Francia 4093, 9240345 Cerrillos, Región Metropolitana",
        "coords": [
            -33.47957563727855,
            -70.72051523096998
        ],
        "administracion": "Público",
        "foto": "",
        "pagina": "paginas/cvt-11.html"
    },
    {
        "id": 12,
        "region": "Metropolitana",
        "comuna": "Colina",
        "nombre": "Centenario I",
        "viviendas": 12,
        "construccion": "---",
        "inauguracion": "2008*",
        "direccion": "Patriota José Miguel Carrera 515, 9351351 Colina, Región Metropolitana",
        "coords": [
            -33.19112313006992,
            -70.66953840333112
        ],
        "administracion": "Público",
        "foto": "",
        "pagina": "paginas/cvt-12.html"
    },
    {
        "id": 13,
        "region": "Metropolitana",
        "comuna": "Colina",
        "nombre": "Centenario II",
        "viviendas": 12,
        "construccion": "---",
        "inauguracion": "2012*",
        "direccion": "Pdte. Arturo Alessandri Palma 70, 9351140 Colina, Región Metropolitana",
        "coords": [
            -33.18801232269265,
            -70.6625077101371
        ],
        "administracion": "Público",
        "foto": "",
        "pagina": "paginas/cvt-13.html"
    },
    {
        "id": 14,
        "region": "Metropolitana",
        "comuna": "La Pintana",
        "nombre": "Villa La Primavera",
        "viviendas": 46,
        "construccion": "---",
        "inauguracion": "1999*",
        "direccion": "Pasaje El Ombu # 3406,La Pintanta",
        "coords": [
            -33.59417626843742,
            -70.61349176862689
        ],
        "administracion": "Público",
        "foto": "",
        "pagina": "paginas/Ficha_La_Pintana_Villa_La_Primavera.html"
    },
    {
        "id": 15,
        "region": "Metropolitana",
        "comuna": "Lampa",
        "nombre": "El Pellín",
        "viviendas": 12,
        "construccion": "---",
        "inauguracion": "---",
        "direccion": "Sebastián Yañez 172, 9380386 Lampa, Región Metropolitana",
        "coords": [
            -33.29085349070557,
            -70.88004277957724
        ],
        "administracion": "Público",
        "foto": "",
        "pagina": "paginas/Ficha_Lampa_El_Pellín.html"
    },
    {
        "id": 16,
        "region": "Metropolitana",
        "comuna": "Maipú",
        "nombre": "Santa Teresita de Los Andes",
        "viviendas": 16,
        "construccion": "---",
        "inauguracion": "---",
        "direccion": "Pasaje Seminario # 3030",
        "coords": [
            -33.51541592841375,
            -70.79736817099455
        ],
        "administracion": "Público",
        "foto": "",
        "pagina": "paginas/Ficha_Maipú_Santa_Teresita_de_Los_Andes.html"
    },
    {
        "id": 17,
        "region": "Metropolitana",
        "comuna": "Melipilla",
        "nombre": "Benjamín Vicuña Mackenna",
        "viviendas": 10,
        "construccion": "---",
        "inauguracion": "2011",
        "direccion": "Teodora Allende 2078, 9581678 Melipilla, Región Metropolitana",
        "coords": [
            -33.67868850796969,
            -71.23092354241051
        ],
        "administracion": "Público",
        "foto": "",
        "pagina": "paginas/Ficha_Melipilla_Benjamín_Vicuña_Mackenna.html"
    },
    {
        "id": 18,
        "region": "Metropolitana",
        "comuna": "Paine",
        "nombre": "18 de septiembre",
        "viviendas": 10,
        "construccion": "---",
        "inauguracion": "---",
        "direccion": "Av. Bernardo O'Higgins 126, 9540690 Paine, Región Metropolitana",
        "coords": [
            -33.80598374929179,
            -70.73658083388833
        ],
        "administracion": "Público",
        "foto": "",
        "pagina": "paginas/Ficha_Paine_18_de_septiembre.html"
    },
    {
        "id": 19,
        "region": "Metropolitana",
        "comuna": "Puente Alto",
        "nombre": "Troncal San Francisco",
        "viviendas": 16,
        "construccion": "---",
        "inauguracion": "2005*",
        "direccion": "Salar de Imalac 4191, Puente Alto, Región Metropolitana",
        "coords": [
            -33.57042057661346,
            -70.60940031041287
        ],
        "administracion": "Público",
        "foto": "",
        "pagina": "paginas/Ficha_Puente_Alto_Troncal_San_Francisco.html"
    },
    {
        "id": 20,
        "region": "Metropolitana",
        "comuna": "Puente Alto",
        "nombre": "El Nocedal",
        "viviendas": 16,
        "construccion": "---",
        "inauguracion": "2005*",
        "direccion": "C. Valle Central 1050, Puente Alto",
        "coords": [
            -33.62740446619671,
            -70.59450846867051
        ],
        "administracion": "Público",
        "foto": "",
        "pagina": "paginas/Ficha_Puente_Alto_El_Nocedal.html"
    },
    {
        "id": 21,
        "region": "Metropolitana",
        "comuna": "Quilicura",
        "nombre": "Beato Padre Alberto Hurtado",
        "viviendas": 8,
        "construccion": "---",
        "inauguracion": "2003*",
        "direccion": "Parroquia Sagrada Familia 681, 8731679 Quilicura, Región Metropolitana",
        "coords": [
            -33.36163783162168,
            -70.75780941118418
        ],
        "administracion": "Público",
        "foto": "",
        "pagina": "paginas/cvt-21.html"
    },
    {
        "id": 22,
        "region": "Metropolitana",
        "comuna": "Quilicura",
        "nombre": "Cardenal Raúl Silva Henríquez",
        "viviendas": 24,
        "construccion": "---",
        "inauguracion": "2001",
        "direccion": "Pje. Seis 661, Quilicura, Santiago, Región Metropolitana",
        "coords": [
            -33.364038835306104,
            -70.7562649427095
        ],
        "administracion": "Público",
        "foto": "",
        "pagina": "paginas/cvt-22.html"
    },
    {
        "id": 23,
        "region": "Metropolitana",
        "comuna": "San Ramón",
        "nombre": "La Bandera / CVT Nuevo Amanecer",
        "viviendas": 15,
        "construccion": "---",
        "inauguracion": "2011",
        "direccion": "Aurora de Chile 9518, San Ramón, Región Metropolitana",
        "coords": [
            -33.54858177888312,
            -70.64038094015795
        ],
        "administracion": "Público",
        "foto": "",
        "pagina": "paginas/cvt-23.html"
    },
    {
        "id": 24,
        "region": "O´Higgins",
        "comuna": "Rancagua",
        "nombre": "El Edén",
        "viviendas": 20,
        "construccion": "---",
        "inauguracion": "2011",
        "direccion": "Fray Jorge 620, Rancagua",
        "coords": [
            -34.168176984693304,
            -70.7022582877617
        ],
        "administracion": "Público",
        "foto": "",
        "pagina": "paginas/cvt-24.html"
    },
    {
        "id": 26,
        "region": "O´Higgins",
        "comuna": "Rancagua",
        "nombre": "El Pilar",
        "viviendas": 25,
        "construccion": "2014",
        "inauguracion": "2016*",
        "direccion": "Los Tilos esq. Los Alces S/N, Rancagua. / Los Alces 697",
        "coords": [
            -34.169225939882296,
            -70.701610408715
        ],
        "administracion": "Público",
        "foto": "",
        "pagina": "paginas/cvt-26.html"
    },
    {
        "id": 28,
        "region": "O´Higgins",
        "comuna": "San Fernando",
        "nombre": "Los Lingues",
        "viviendas": 36,
        "construccion": "---",
        "inauguracion": "2014",
        "direccion": "Manuel Isaac 531, San Fernando, O'Higgins",
        "coords": [
            -34.57564238297704,
            -71.00092584766065
        ],
        "administracion": "Público",
        "foto": "",
        "pagina": "paginas/cvt-28.html"
    },
    {
        "id": 29,
        "region": "O´Higgins",
        "comuna": "Marchigue",
        "nombre": "CVT Marchigue",
        "viviendas": 25,
        "construccion": "2016",
        "inauguracion": "2017*",
        "direccion": "Calle Casanova S/N esq. San José, Marchigue.",
        "coords": [
            -34.398247097035295,
            -71.61394741715958
        ],
        "administracion": "Público",
        "foto": "",
        "pagina": "paginas/Ficha_Marchigue_CVT_Marchigue.html"
    },
    {
        "id": 31,
        "region": "Ñuble",
        "comuna": "El Carmen",
        "nombre": "CVT El Carmen",
        "viviendas": 20,
        "construccion": "---",
        "inauguracion": "2022",
        "direccion": "Calle Isabel Riquelme N° 61",
        "coords": [
            -36.90074162996309,
            -72.03354343815245
        ],
        "administracion": "Público",
        "foto": "",
        "pagina": "paginas/cvt-31.html"
    },
    {
        "id": 32,
        "region": "Ñuble",
        "comuna": "Quillón",
        "nombre": "CVT Quillón",
        "viviendas": 20,
        "construccion": "---",
        "inauguracion": "2022",
        "direccion": "Pasaje Las Azucenas N°118, Quillón",
        "coords": [
            -36.74097159206953,
            -72.46763601368315
        ],
        "administracion": "Público",
        "foto": "",
        "pagina": "paginas/cvt-32.html"
    },
    {
        "id": 30,
        "region": "O´Higgins",
        "comuna": "Santa Cruz",
        "nombre": "Vidas Integradas",
        "viviendas": 20,
        "construccion": "2010",
        "inauguracion": "2011*",
        "direccion": "Gobernador Nibaldo Mujica Rubio esq. Av. Ignacio Carrera Pinto, Santa Cruz",
        "coords": [
            -34.624540362599895,
            -71.3525246182266
        ],
        "administracion": "Público",
        "foto": "",
        "pagina": "paginas/cvt-30.html"
    },
    {
        "id": 31,
        "region": "Ñuble",
        "comuna": "El Carmen",
        "nombre": "CVT El Carmen",
        "viviendas": 20,
        "construccion": "---",
        "inauguracion": "2022",
        "direccion": "Calle Isabel Riquelme N° 61",
        "coords": [
            -36.90074162996309,
            -72.03354343815245
        ],
        "administracion": "Público",
        "foto": "",
        "pagina": "paginas/cvt-31.html"
    },
    {
        "id": 32,
        "region": "Ñuble",
        "comuna": "Quillón",
        "nombre": "CVT Quillón",
        "viviendas": 20,
        "construccion": "---",
        "inauguracion": "2022",
        "direccion": "Pasaje Las Azucenas N°118, Quillón",
        "coords": [
            -36.74097159206953,
            -72.46763601368315
        ],
        "administracion": "Público",
        "foto": "",
        "pagina": "paginas/cvt-32.html"
    },
    {
        "id": 33,
        "region": "Maule",
        "comuna": "Talca",
        "nombre": "CVT de Talca",
        "viviendas": 30,
        "construccion": "2012",
        "inauguracion": "2018*",
        "direccion": "5 Oriente esquina Circunvalación Norte",
        "coords": [
            -35.3965811905484,
            -71.65227840797517
        ],
        "administracion": "Público",
        "foto": "",
        "pagina": "paginas/cvt-33.html"
    },
    {
        "id": 34,
        "region": "Biobío",
        "comuna": "Contulmo",
        "nombre": "Renacer",
        "viviendas": 15,
        "construccion": "---",
        "inauguracion": "2018",
        "direccion": "Notros 132, Contulmo, Bío Bío",
        "coords": [
            -38.01171585170459,
            -73.22871865918876
        ],
        "administracion": "Público",
        "foto": "",
        "pagina": "paginas/cvt-34.html"
    },
    {
        "id": 35,
        "region": "Biobío",
        "comuna": "Coronel",
        "nombre": "Sol en el Ocaso",
        "viviendas": 20,
        "construccion": "---",
        "inauguracion": "2012",
        "direccion": "Esmeralda 940, 4201524 Concepción, Coronel, Bío Bío",
        "coords": [
            -37.03077300743715,
            -73.14012040009543
        ],
        "administracion": "Público",
        "foto": "",
        "pagina": "paginas/cvt-35.html"
    },
    {
        "id": 36,
        "region": "Biobío",
        "comuna": "Hualqui",
        "nombre": "Las Vegas de Hualqui",
        "viviendas": 20,
        "construccion": "---",
        "inauguracion": "2015",
        "direccion": "Cardenal Caro 750, 4180283 Hualqui, Bío Bío",
        "coords": [
            -36.965724265457276,
            -72.92837304875165
        ],
        "administracion": "Público",
        "foto": "",
        "pagina": "paginas/cvt-36.html"
    },
    {
        "id": 37,
        "region": "Biobío",
        "comuna": "Nacimiento",
        "nombre": "CVT Nacimiento",
        "viviendas": 15,
        "construccion": "2015-2016",
        "inauguracion": "2018*",
        "direccion": "Pablo Neruda 1211, Nacimiento",
        "coords": [
            -37.50401530219216,
            -72.68205911583213
        ],
        "administracion": "Público",
        "foto": "",
        "pagina": "paginas/Ficha_Nacimiento_CVT_Nacimiento.html"
    },
    {
        "id": 38,
        "region": "Biobío",
        "comuna": "Penco",
        "nombre": "Unidos por un Vinculo",
        "viviendas": 10,
        "construccion": "---",
        "inauguracion": "2012",
        "direccion": "Esteban de Sosa 400, Penco, Bío Bío",
        "coords": [
            -36.746269866085974,
            -72.99963815888621
        ],
        "administracion": "Público",
        "foto": "",
        "pagina": "paginas/Ficha_Penco_Unidos_por_un_Vinculo.html"
    },
    {
        "id": 39,
        "region": "Biobío",
        "comuna": "San Pedro de la Paz",
        "nombre": "CVT de Michaihue",
        "viviendas": 20,
        "construccion": "---",
        "inauguracion": "2016",
        "direccion": "Diagonal Nueva Uno N°964",
        "coords": [
            -36.842784897439365,
            -73.13974338174683
        ],
        "administracion": "Público",
        "foto": "",
        "pagina": "paginas/cvt-39.html"
    },
    {
        "id": 40,
        "region": "Araucanía",
        "comuna": "Angol",
        "nombre": "Condominio Nueva Esperanza",
        "viviendas": 40,
        "construccion": "---",
        "inauguracion": "2012",
        "direccion": "Rancagua 332, Angol, Araucanía",
        "coords": [
            -37.80778112777848,
            -72.69683115833054
        ],
        "administracion": "Público",
        "foto": "",
        "pagina": "paginas/cvt-40.html"
    },
    {
        "id": 41,
        "region": "Araucanía",
        "comuna": "Toltén",
        "nombre": "Alegría de Vivir",
        "viviendas": 20,
        "construccion": "---",
        "inauguracion": "2015",
        "direccion": "José María Caro 810, Nueva Toltén, Toltén, Araucanía",
        "coords": [
            -39.17677391686597,
            -73.16922406229642
        ],
        "administracion": "Público",
        "foto": "",
        "pagina": "paginas/cvt-41.html"
    },
    {
        "id": 42,
        "region": "Araucanía",
        "comuna": "Temuco",
        "nombre": "CVT Temuco",
        "viviendas": 20,
        "construccion": "2012",
        "inauguracion": "2011*",
        "direccion": "Quilla 1970, 4801593 Temuco, Araucanía",
        "coords": [
            -38.7133952640772,
            -72.62060178449889
        ],
        "administracion": "Público",
        "foto": "",
        "pagina": "paginas/cvt-42.html"
    },
    {
        "id": 43,
        "region": "Los Ríos",
        "comuna": "Lanco",
        "nombre": "CVT Lanco",
        "viviendas": 15,
        "construccion": "---",
        "inauguracion": "2012",
        "direccion": "Valparaiso, 5160056 Lanco, Los Ríos",
        "coords": [
            -39.45182916547691,
            -72.76933951997917
        ],
        "administracion": "Público",
        "foto": "",
        "pagina": "paginas/Ficha_Lanco_CVT_Lanco.html"
    },
    {
        "id": 44,
        "region": "Los Ríos",
        "comuna": "Valdivia",
        "nombre": "CVT Nueva Esperanza",
        "viviendas": 20,
        "construccion": "---",
        "inauguracion": "2012",
        "direccion": "Sta Inés 3681, 5091026 Valdivia, Los Ríos",
        "coords": [
            -39.84693277704051,
            -73.2216032898679
        ],
        "administracion": "Público",
        "foto": "",
        "pagina": "paginas/Ficha_Valdivia_CVT_Nueva_Esperanza.html"
    },
    {
        "id": 45,
        "region": "Los Ríos",
        "comuna": "Mariquina",
        "nombre": "CVT Años Dorados",
        "viviendas": 20,
        "construccion": "---",
        "inauguracion": "2014",
        "direccion": "Calle Jose Puchi S/N, San José de la Mariquina",
        "coords": [
            -39.539395913983796,
            -72.97604347195438
        ],
        "administracion": "Público",
        "foto": "",
        "pagina": "paginas/Ficha_Mariquina_CVT_Años_Dorados.html"
    },
    {
        "id": 46,
        "region": "Los Ríos",
        "comuna": "Río Bueno",
        "nombre": "CVT Esmeralda",
        "viviendas": 20,
        "construccion": "---",
        "inauguracion": "2015",
        "direccion": "Calle Miraflores con Calle Esmeralda, Rio Bueno, Los Ríos",
        "coords": [
            -40.33338157974452,
            -72.9616802057691
        ],
        "administracion": "Público",
        "foto": "",
        "pagina": "paginas/cvt-46.html"
    },
    {
        "id": 48,
        "region": "Los Lagos",
        "comuna": "Puerto Montt",
        "nombre": "CVT Puerto Montt",
        "viviendas": 20,
        "construccion": "---",
        "inauguracion": "2012",
        "direccion": "Av. Nte. Sur II, Puerto Montt, Los Lagos",
        "coords": [
            -41.39913900836024,
            -72.90317587841231
        ],
        "administracion": "Público",
        "foto": "",
        "pagina": "paginas/Ficha_Puerto_Montt_CVT_Puerto_Montt.html"
    },
    {
        "id": 49,
        "region": "Los Lagos",
        "comuna": "Purranque",
        "nombre": "Amistad y Esperanza",
        "viviendas": 20,
        "construccion": "---",
        "inauguracion": "2013",
        "direccion": "Avenida Circunvalación 579, Purranque, Los Lagos",
        "coords": [
            -40.91526828014838,
            -73.15232022275399
        ],
        "administracion": "Público",
        "foto": "",
        "pagina": "paginas/cvt-49.html"
    },
    {
        "id": 50,
        "region": "Los Lagos",
        "comuna": "Llanquihue",
        "nombre": "CVT Llanquihue",
        "viviendas": 20,
        "construccion": "---",
        "inauguracion": "2015",
        "direccion": "Achao 891, Llanquihue, Los Lagos",
        "coords": [
            -41.25303945157148,
            -73.01235273401552
        ],
        "administracion": "Público",
        "foto": "",
        "pagina": "paginas/Ficha_Llanquihue_CVT_Llanquihue.html"
    },
    {
        "id": 51,
        "region": "Los Lagos",
        "comuna": "Osorno",
        "nombre": "Monte Verde",
        "viviendas": 20,
        "construccion": "---",
        "inauguracion": "2012",
        "direccion": "Pje. Monte Verde 1882, Osorno, Los Lagos",
        "coords": [
            -40.55603211427361,
            -73.1755272119595
        ],
        "administracion": "Público",
        "foto": "",
        "pagina": "paginas/Ficha_Osorno_Monte_Verde.html"
    },
    {
        "id": 52,
        "region": "Los Lagos",
        "comuna": "Castro",
        "nombre": "CVT Castro",
        "viviendas": 20,
        "construccion": "2017",
        "inauguracion": "2019",
        "direccion": "Antonio Quintanilla / Cancha Rayada, Castro",
        "coords": [
            -42.470002475451004,
            -73.77374690025624
        ],
        "administracion": "Público",
        "foto": "",
        "pagina": "paginas/cvt-52.html"
    },
    {
        "id": 53,
        "region": "Los Lagos",
        "comuna": "Quellón",
        "nombre": "Sacerdote Juan Lipsky",
        "viviendas": 20,
        "construccion": "---",
        "inauguracion": "2019",
        "direccion": "Pasaje Padre Juan Lipski",
        "coords": [
            -43.112657,
            -73.61224
        ],
        "administracion": "Público",
        "foto": "",
        "pagina": "paginas/cvt-53.html"
    },
    {
        "id": 54,
        "region": "Aysén",
        "comuna": "Coyhaique",
        "nombre": "Yo quiero un nuevo Amanecer",
        "viviendas": 15,
        "construccion": "2012",
        "inauguracion": "2017*",
        "direccion": "Campos de Hielo esq/ Escuela agrícola, Coyhaique",
        "coords": [
            -45.576677,
            -72.030819
        ],
        "administracion": "Público",
        "foto": "",
        "pagina": "paginas/cvt-54.html"
    },
    {
        "id": 55,
        "region": "Magallanes",
        "comuna": "Puerto Natales",
        "nombre": "CVT Puerto Natales I / Jesús Nazareno",
        "viviendas": 15,
        "construccion": "2012",
        "inauguracion": "2013*",
        "direccion": "Calle Juan Gumas 1180, Puerto Natales.",
        "coords": [
            -51.73455,
            -72.478462
        ],
        "administracion": "Público",
        "foto": "",
        "pagina": "paginas/Ficha_Puerto_Natales_CVT_Puerto_Natales_I_-_Jesús_Nazareno.html"
    },
    {
        "id": 56,
        "region": "Magallanes",
        "comuna": "Puerto Natales",
        "nombre": "CVT Puerto Natales II",
        "viviendas": 20,
        "construccion": "---",
        "inauguracion": "2023",
        "direccion": "Av. Última Esperanza 1526, Puerto Natales, Natales, Magallanes y la Antártica Chilena",
        "coords": [
            -51.72600600646542,
            -72.47832299618923
        ],
        "administracion": "Público/Privado",
        "foto": "",
        "pagina": "paginas/cvt-56.html"
    },
    {
        "id": 58,
        "region": "Magallanes",
        "comuna": "Punta Arenas",
        "nombre": "Ester María Edén Wellington",
        "viviendas": 20,
        "construccion": "---",
        "inauguracion": "2022",
        "direccion": "Avenida Frei, Punta Arenas, Magallanes",
        "coords": [
            -53.13254620983064,
            -70.91085402221495
        ],
        "administracion": "Público/Privado",
        "foto": "",
        "pagina": "paginas/cvt-58.html"
    },
    {
        "id": 57,
        "region": "Magallanes",
        "comuna": "Porvenir",
        "nombre": "CVT Porvenir",
        "viviendas": 15,
        "construccion": "---",
        "inauguracion": "2023",
        "direccion": "Calle Pedro Silva, Porvenir",
        "coords": [
            -53.2974,
            -70.594508
        ],
        "administracion": "Público",
        "foto": "",
        "pagina": "paginas/Ficha_Porvenir_CVT_Porvenir.html"
    },
    {
        "id": 58,
        "region": "Magallanes",
        "comuna": "Punta Arenas",
        "nombre": "Ester María Edén Wellington",
        "viviendas": 20,
        "construccion": "---",
        "inauguracion": "2022",
        "direccion": "Avenida Frei, Punta Arenas, Magallanes",
        "coords": [
            -53.13254620983064,
            -70.91085402221495
        ],
        "administracion": "Público/Privado",
        "foto": "",
        "pagina": "paginas/cvt-58.html"
    }
];

let markers = [];
let largeMap = null;

const mapElement = document.getElementById("largeMap");
const searchInput = document.getElementById("searchInput");
const searchResults = document.getElementById("searchResults");
const clearSearch = document.getElementById("clearSearch");

function normalizarTexto(valor) {
    return String(valor ?? "").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim();
}

function escaparHTML(valor) {
    return String(valor ?? "").replace(/[&<>"']/g, caracter => ({
        "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
    })[caracter]);
}

function createIcon() {
    return L.divIcon({
        className: "cvt-map-marker",
        html: '<span class="cvt-map-marker__dot"></span>',
        iconSize: [22, 22],
        iconAnchor: [11, 11],
        popupAnchor: [0, -10]
    });
}

function popupContent(cvt) {
    return `
        <div class="cvt-popup">
            <strong>${escaparHTML(cvt.nombre)}</strong>
            <div>${escaparHTML(cvt.comuna)}, ${escaparHTML(cvt.region)}</div>
            <div>Viviendas: ${escaparHTML(cvt.viviendas)}</div>
        </div>
    `;
}

function setText(id, value) {
    const elemento = document.getElementById(id);
    if (elemento) elemento.textContent = value || "Sin dato";
}

function showCvtInfo(cvt) {
    setText("selectedName", cvt.nombre);
    setText("selectedRegion", `${cvt.comuna}, ${cvt.region}`);
    setText("infoRegion", cvt.region);
    setText("infoComuna", cvt.comuna);
    setText("infoViviendas", cvt.viviendas);
    setText("infoYear", cvt.inauguracion);
    setText("infoAddress", cvt.direccion);
    setText("infoConstruction", cvt.construccion);
    setText("infoAdministration", cvt.administracion);

    const infoLink = document.getElementById("infoLink");
    if (infoLink) {
        if (cvt.pagina) {
            infoLink.href = cvt.pagina;
            infoLink.style.display = "";
        } else {
            infoLink.href = "#";
            infoLink.style.display = "none";
        }
    }

    const infoImage = document.getElementById("infoImage");
    const noImage = document.getElementById("noImage");
    if (infoImage && noImage) {
        if (cvt.foto) {
            infoImage.src = cvt.foto;
            infoImage.alt = `Fotografía de ${cvt.nombre}`;
            infoImage.style.display = "block";
            noImage.style.display = "none";
        } else {
            infoImage.removeAttribute("src");
            infoImage.style.display = "none";
            noImage.style.display = "flex";
        }
    }
}

function selectCvt(cvt) {
    showCvtInfo(cvt);
    if (!largeMap || !cvt.coords) return;
    largeMap.setView(cvt.coords, 15, { animate: true });
    const encontrado = markers.find(item => item.cvt.id === cvt.id);
    if (encontrado) encontrado.marker.openPopup();
}

function addMarkers() {
    if (!largeMap) return;
    markers.forEach(item => item.marker.remove());
    markers = [];

    cvtData.forEach(cvt => {
        if (!cvt.coords || cvt.coords.length !== 2) return;
        const marker = L.marker(cvt.coords, { icon: createIcon() }).addTo(largeMap);
        marker.bindPopup(popupContent(cvt));
        marker.on("click", () => showCvtInfo(cvt));
        markers.push({ marker, cvt });
    });

    const bounds = L.latLngBounds(cvtData.filter(cvt => cvt.coords && cvt.coords.length === 2).map(cvt => cvt.coords));
    if (bounds.isValid()) {
        largeMap.fitBounds(bounds, { padding: [25, 25], maxZoom: 6 });
    }
}

function searchCvts(value) {
    if (!searchResults) return;
    const busqueda = normalizarTexto(value);
    searchResults.replaceChildren();

    if (!busqueda) {
        searchResults.classList.remove("show");
        if (clearSearch) clearSearch.style.display = "none";
        return;
    }

    if (clearSearch) clearSearch.style.display = "block";

    const resultados = cvtData.filter(cvt =>
        [cvt.nombre, cvt.comuna, cvt.region, cvt.direccion].some(campo =>
            normalizarTexto(campo).includes(busqueda)
        )
    );

    if (!resultados.length) {
        const mensaje = document.createElement("div");
        mensaje.className = "search-empty";
        mensaje.textContent = "No se encontraron CVT.";
        searchResults.appendChild(mensaje);
        searchResults.classList.add("show");
        return;
    }

    resultados.forEach(cvt => {
        const resultado = document.createElement("button");
        resultado.type = "button";
        resultado.className = "search-result";

        const nombre = document.createElement("strong");
        nombre.textContent = cvt.nombre;

        const ubicacion = document.createElement("span");
        ubicacion.textContent = `${cvt.comuna}, ${cvt.region}`;

        resultado.append(nombre, ubicacion);
        resultado.addEventListener("click", () => {
            selectCvt(cvt);
            if (searchInput) searchInput.value = cvt.nombre;
            searchResults.classList.remove("show");
        });
        searchResults.appendChild(resultado);
    });

    searchResults.classList.add("show");
}

function scrollToMap() {
    const mapSection = document.getElementById("mapa");
    if (!mapSection) return;
    mapSection.scrollIntoView({ behavior: "smooth", block: "start" });
    setTimeout(() => largeMap?.invalidateSize(), 500);
}

if (mapElement && typeof L !== "undefined") {
    largeMap = L.map("largeMap", {
        zoomControl: true,
        scrollWheelZoom: true
    }).setView(chileCenter, 4.5);

    L.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}", {
        attribution: "Tiles &copy; Esri",
        maxZoom: 19
    }).addTo(largeMap);

    addMarkers();
}

if (searchInput) {
    searchInput.addEventListener("input", function () {
        searchCvts(this.value);
    });
}

if (clearSearch) {
    clearSearch.addEventListener("click", () => {
        if (searchInput) {
            searchInput.value = "";
            searchInput.focus();
        }
        if (searchResults) {
            searchResults.replaceChildren();
            searchResults.classList.remove("show");
        }
        clearSearch.style.display = "none";
    });
}

document.addEventListener("click", event => {
    if (searchResults && !event.target.closest(".search-container")) {
        searchResults.classList.remove("show");
    }
});

window.addEventListener("resize", () => {
    largeMap?.invalidateSize();
});