app.factory('airports', [function() {
  var defaults = [
    {
      code: 'AAL',
      country: 'dk',
      display: 'Aalborg'
    },
    {
      code: 'AAR',
      country: 'dk',
      display: 'Aarhus'
    },
    {
      code: 'ABZ',
      country: 'gb',
      display: 'Aberdeen'
    },
    {
      code: 'AGA',
      country: 'ma',
      display: 'Agadir'
    },
    {
      code: 'AHO',
      country: 'it',
      display: 'Alghero'
    },
    {
      code: 'ALC',
      country: 'es',
      display: 'Alicante'
    },
    {
      code: 'LEI',
      country: 'es',
      display: 'Almeria'
    },
    {
      code: 'AMM',
      country: 'jo',
      display: 'Amman Jordan'
    },
    {
      code: 'AMS',
      country: 'nl',
      display: 'Amsterdam'
    },
    {
      code: 'AOI',
      country: 'it',
      display: 'Ancona'
    },
    {
      code: 'AQJ',
      country: 'jo',
      display: 'Aqaba Jordan'
    },
    {
      code: 'ATH',
      country: 'gr',
      display: 'Athens'
    },
    {
      code: 'BNX',
      country: 'ba',
      display: 'Banja Luka'
    },
    {
      code: 'BCN',
      country: 'es',
      display: 'Barcelona'
    },
    {
      code: 'GRO',
      country: 'es',
      display: 'Barcelona Girona'
    },
    {
      code: 'REU',
      country: 'es',
      display: 'Barcelona Reus'
    },
    {
      code: 'BRI',
      country: 'it',
      display: 'Bari'
    },
    {
      code: 'BSL',
      country: 'ch',
      display: 'Basel'
    },
    {
      code: 'BFS',
      country: 'gb',
      display: 'Belfast International'
    },
    {
      code: 'EGC',
      country: 'fr',
      display: 'Bergerac'
    },
    {
      code: 'SXF',
      country: 'de',
      display: 'Berlin Schönefeld'
    },
    {
      code: 'TXL',
      country: 'de',
      display: 'Berlin Tegel'
    },
    {
      code: 'BZR',
      country: 'fr',
      display: 'Beziers'
    },
    {
      code: 'BIQ',
      country: 'fr',
      display: 'Biarritz'
    },
    {
      code: 'BIO',
      country: 'es',
      display: 'Bilbao'
    },
    {
      code: 'BLL',
      country: 'dk',
      display: 'Billund'
    },
    {
      code: 'BHX',
      country: 'gb',
      display: 'Birmingham'
    },
    {
      code: 'BJV',
      country: 'tr',
      display: 'Bodrum'
    },
    {
      code: 'BLQ',
      country: 'it',
      display: 'Bologna'
    },
    {
      code: 'BOD',
      country: 'fr',
      display: 'Bordeaux'
    },
    {
      code: 'BOH',
      country: 'gb',
      display: 'Bournemouth'
    },
    {
      code: 'BTS',
      country: 'sk',
      display: 'Bratislava'
    },
    {
      code: 'BRE',
      country: 'de',
      display: 'Bremen'
    },
    {
      code: 'BES',
      country: 'fr',
      display: 'Brest'
    },
    {
      code: 'BDS',
      country: 'it',
      display: 'Brindisi'
    },
    {
      code: 'BRS',
      country: 'gb',
      display: 'Bristol'
    },
    {
      code: 'BVE',
      country: 'fr',
      display: 'Brive'
    },
    {
      code: 'BRQ',
      country: 'cz',
      display: 'Brno'
    },
    {
      code: 'BRU',
      country: 'be',
      display: 'Brussels'
    },
    {
      code: 'CRL',
      country: 'be',
      display: 'Brussels Charleroi'
    },
    {
      code: 'OTP',
      country: 'ro',
      display: 'Bucharest'
    },
    {
      code: 'BUD',
      country: 'hu',
      display: 'Budapest'
    },
    {
      code: 'BOJ',
      country: 'bg',
      display: 'Burgas'
    },
    {
      code: 'BZG',
      country: 'pl',
      display: 'Bydgoszcz'
    },
    {
      code: 'CAG',
      country: 'it',
      display: 'Cagliari'
    },
    {
      code: 'CCF',
      country: 'fr',
      display: 'Carcassonne'
    },
    {
      code: 'CWL',
      country: 'gb',
      display: 'Cardiff'
    },
    {
      code: 'CMN',
      country: 'ma',
      display: 'Casablanca'
    },
    {
      code: 'CDT',
      country: 'es',
      display: 'Castellon (Valencia)'
    },
    {
      code: 'CTA',
      country: 'it',
      display: 'Catania'
    },
    {
      code: 'CHQ',
      country: 'gr',
      display: 'Chania'
    },
    {
      code: 'CFE',
      country: 'fr',
      display: 'Clermont'
    },
    {
      code: 'CLJ',
      country: 'ro',
      display: 'Cluj'
    },
    {
      code: 'CGN',
      country: 'de',
      display: 'Cologne'
    },
    {
      code: 'CIY',
      country: 'it',
      display: 'Comiso'
    },
    {
      code: 'CPH',
      country: 'dk',
      display: 'Copenhagen'
    },
    {
      code: 'CFU',
      country: 'gr',
      display: 'Corfu'
    },
    {
      code: 'ORK',
      country: 'ie',
      display: 'Cork'
    },
    {
      code: 'CRA',
      country: 'ro',
      display: 'Craiova'
    },
    {
      code: 'CRV',
      country: 'it',
      display: 'Crotone'
    },
    {
      code: 'CUF',
      country: 'it',
      display: 'Cuneo'
    },
    {
      code: 'DLM',
      country: 'tr',
      display: 'Dalaman'
    },
    {
      code: 'LDY',
      country: 'gb',
      display: 'Derry'
    },
    {
      code: 'DNR',
      country: 'fr',
      display: 'Dinard'
    },
    {
      code: 'DLE',
      country: 'fr',
      display: 'Dole'
    },
    {
      code: 'DTM',
      country: 'de',
      display: 'Dortmund'
    },
    {
      code: 'DRS',
      country: 'de',
      display: 'Dresden'
    },
    {
      code: 'DUB',
      country: 'ie',
      display: 'Dublin'
    },
    {
      code: 'DBV',
      country: 'hr',
      display: 'Dubrovnik'
    },
    {
      code: 'DUS',
      country: 'de',
      display: 'Dusseldorf Int.'
    },
    {
      code: 'NRN',
      country: 'de',
      display: 'Dusseldorf Weeze'
    },
    {
      code: 'EMA',
      country: 'gb',
      display: 'East Midlands'
    },
    {
      code: 'EDI',
      country: 'gb',
      display: 'Edinburgh'
    },
    {
      code: 'ETM',
      country: 'il',
      display: 'Eilat Ramon'
    },
    {
      code: 'EIN',
      country: 'nl',
      display: 'Eindhoven'
    },
    {
      code: 'ERF',
      country: 'de',
      display: 'Erfurt'
    },
    {
      code: 'ESU',
      country: 'ma',
      display: 'Essaouira'
    },
    {
      code: 'EXT',
      country: 'gb',
      display: 'Exeter'
    },
    {
      code: 'FAO',
      country: 'pt',
      display: 'Faro'
    },
    {
      code: 'FEZ',
      country: 'ma',
      display: 'Fez'
    },
    {
      code: 'FSC',
      country: 'fr',
      display: 'Figari'
    },
    {
      code: 'HHN',
      country: 'de',
      display: 'Frankfurt Hahn'
    },
    {
      code: 'FRA',
      country: 'de',
      display: 'Frankfurt International'
    },
    {
      code: 'FDH',
      country: 'de',
      display: 'Friedrichshafen'
    },
    {
      code: 'FUE',
      country: 'es',
      display: 'Fuerteventura'
    },
    {
      code: 'GDN',
      country: 'pl',
      display: 'Gdansk'
    },
    {
      code: 'GVA',
      country: 'ch',
      display: 'Geneva'
    },
    {
      code: 'GOA',
      country: 'it',
      display: 'Genoa'
    },
    {
      code: 'GLA',
      country: 'gb',
      display: 'Glasgow'
    },
    {
      code: 'PIK',
      country: 'gb',
      display: 'Glasgow Prestwick'
    },
    {
      code: 'GOT',
      country: 'se',
      display: 'Göteborg Landvetter'
    },
    {
      code: 'LPA',
      country: 'es',
      display: 'Gran Canaria'
    },
    {
      code: 'GRZ',
      country: 'at',
      display: 'Graz'
    },
    {
      code: 'GNB',
      country: 'fr',
      display: 'Grenoble'
    },
    {
      code: 'HAM',
      country: 'de',
      display: 'Hamburg'
    },
    {
      code: 'HAJ',
      country: 'de',
      display: 'Hannover'
    },
    {
      code: 'HAU',
      country: 'no',
      display: 'Haugesund'
    },
    {
      code: 'HER',
      country: 'gr',
      display: 'Heraklion Crete'
    },
    {
      code: 'IBZ',
      country: 'es',
      display: 'Ibiza'
    },
    {
      code: 'INN',
      country: 'at',
      display: 'Innsbruck'
    },
    {
      code: 'XRY',
      country: 'es',
      display: 'Jerez'
    },
    {
      code: 'KLX',
      country: 'gr',
      display: 'Kalamata'
    },
    {
      code: 'FKB',
      country: 'de',
      display: 'Karlsruhe / Baden-Baden'
    },
    {
      code: 'KTW',
      country: 'pl',
      display: 'Katowice'
    },
    {
      code: 'KUN',
      country: 'lt',
      display: 'Kaunas'
    },
    {
      code: 'EFL',
      country: 'gr',
      display: 'Kefalonia'
    },
    {
      code: 'KIR',
      country: 'ie',
      display: 'Kerry'
    },
    {
      code: 'NOC',
      country: 'ie',
      display: 'Knock'
    },
    {
      code: 'KGS',
      country: 'gr',
      display: 'Kos'
    },
    {
      code: 'KSC',
      country: 'sk',
      display: 'Kosice'
    },
    {
      code: 'KRK',
      country: 'pl',
      display: 'Krakow'
    },
    {
      code: 'KBP',
      country: 'ua',
      display: 'Kyiv-Boryspil'
    },
    {
      code: 'LRH',
      country: 'fr',
      display: 'La Rochelle'
    },
    {
      code: 'SUF',
      country: 'it',
      display: 'Lamezia'
    },
    {
      code: 'ACE',
      country: 'es',
      display: 'Lanzarote'
    },
    {
      code: 'LPP',
      country: 'fi',
      display: 'Lappeenranta'
    },
    {
      code: 'LCA',
      country: 'cy',
      display: 'Larnaca'
    },
    {
      code: 'LBA',
      country: 'gb',
      display: 'Leeds Bradford'
    },
    {
      code: 'LEJ',
      country: 'de',
      display: 'Leipzig'
    },
    {
      code: 'LIL',
      country: 'fr',
      display: 'Lille'
    },
    {
      code: 'LIG',
      country: 'fr',
      display: 'Limoges'
    },
    {
      code: 'LNZ',
      country: 'at',
      display: 'Linz'
    },
    {
      code: 'LIS',
      country: 'pt',
      display: 'Lisbon'
    },
    {
      code: 'LPL',
      country: 'gb',
      display: 'Liverpool'
    },
    {
      code: 'LCJ',
      country: 'pl',
      display: 'Lodz'
    },
    {
      code: 'LGW',
      country: 'gb',
      display: 'London Gatwick'
    },
    {
      code: 'LTN',
      country: 'gb',
      display: 'London Luton'
    },
    {
      code: 'SEN',
      country: 'gb',
      display: 'London Southend'
    },
    {
      code: 'STN',
      country: 'gb',
      display: 'London Stansted'
    },
    {
      code: 'LRT',
      country: 'fr',
      display: 'Lorient'
    },
    {
      code: 'LDE',
      country: 'fr',
      display: 'Lourdes'
    },
    {
      code: 'LUZ',
      country: 'pl',
      display: 'Lublin'
    },
    {
      code: 'LUX',
      country: 'lu',
      display: 'Luxembourg'
    },
    {
      code: 'LWO',
      country: 'ua',
      display: 'Lviv'
    },
    {
      code: 'LYS',
      country: 'fr',
      display: 'Lyon'
    },
    {
      code: 'MST',
      country: 'nl',
      display: 'Maastricht'
    },
    {
      code: 'MAD',
      country: 'es',
      display: 'Madrid'
    },
    {
      code: 'AGP',
      country: 'es',
      display: 'Malaga'
    },
    {
      code: 'MMX',
      country: 'se',
      display: 'Malmo'
    },
    {
      code: 'MLA',
      country: 'mt',
      display: 'Malta'
    },
    {
      code: 'MAN',
      country: 'gb',
      display: 'Manchester'
    },
    {
      code: 'RAK',
      country: 'ma',
      display: 'Marrakesh'
    },
    {
      code: 'MRS',
      country: 'fr',
      display: 'Marseille'
    },
    {
      code: 'FMM',
      country: 'de',
      display: 'Memmingen'
    },
    {
      code: 'MAH',
      country: 'es',
      display: 'Menorca'
    },
    {
      code: 'BGY',
      country: 'it',
      display: 'Milan Bergamo'
    },
    {
      code: 'MXP',
      country: 'it',
      display: 'Milan Malpensa'
    },
    {
      code: 'MPL',
      country: 'fr',
      display: 'Montpellier'
    },
    {
      code: 'SVO',
      country: 'ru',
      display: 'Moscow Sheremetyevo'
    },
    {
      code: 'MUC',
      country: 'de',
      display: 'Munich'
    },
    {
      code: 'FMO',
      country: 'de',
      display: 'Münster'
    },
    {
      code: 'MJV',
      country: 'es',
      display: 'Murcia'
    },
    {
      code: 'RMU',
      country: 'es',
      display: 'Murcia International'
    },
    {
      code: 'JMK',
      country: 'gr',
      display: 'Mykonos'
    },
    {
      code: 'NDR',
      country: 'ma',
      display: 'Nador'
    },
    {
      code: 'NTE',
      country: 'fr',
      display: 'Nantes'
    },
    {
      code: 'NAP',
      country: 'it',
      display: 'Naples'
    },
    {
      code: 'NCL',
      country: 'gb',
      display: 'Newcastle'
    },
    {
      code: 'NQY',
      country: 'gb',
      display: 'Newquay Cornwall'
    },
    {
      code: 'NCE',
      country: 'fr',
      display: 'Nice'
    },
    {
      code: 'FNI',
      country: 'fr',
      display: 'Nimes'
    },
    {
      code: 'INI',
      country: 'rs',
      display: 'Nis'
    },
    {
      code: 'NUE',
      country: 'de',
      display: 'Nuremberg'
    },
    {
      code: 'SZY',
      country: 'pl',
      display: 'Olsztyn - Mazury'
    },
    {
      code: 'OMR',
      country: 'ro',
      display: 'Oradea'
    },
    {
      code: 'OSL',
      country: 'no',
      display: 'Oslo'
    },
    {
      code: 'TRF',
      country: 'no',
      display: 'Oslo Torp'
    },
    {
      code: 'OSR',
      country: 'cz',
      display: 'Ostrava'
    },
    {
      code: 'OZZ',
      country: 'ma',
      display: 'Ouarzazate'
    },
    {
      code: 'OUD',
      country: 'ma',
      display: 'Oujda'
    },
    {
      code: 'VDA',
      country: 'il',
      display: 'Ovda'
    },
    {
      code: 'PAD',
      country: 'de',
      display: 'Paderborn'
    },
    {
      code: 'PLQ',
      country: 'lt',
      display: 'Palanga'
    },
    {
      code: 'PMO',
      country: 'it',
      display: 'Palermo'
    },
    {
      code: 'PMI',
      country: 'es',
      display: 'Palma de Mallorca'
    },
    {
      code: 'PFO',
      country: 'cy',
      display: 'Paphos'
    },
    {
      code: 'PED',
      country: 'cz',
      display: 'Pardubice'
    },
    {
      code: 'BVA',
      country: 'fr',
      display: 'Paris Beauvais'
    },
    {
      code: 'XCR',
      country: 'fr',
      display: 'Paris Vatry'
    },
    {
      code: 'PMF',
      country: 'it',
      display: 'Parma'
    },
    {
      code: 'PGF',
      country: 'fr',
      display: 'Perpignan'
    },
    {
      code: 'PEG',
      country: 'it',
      display: 'Perugia'
    },
    {
      code: 'PSR',
      country: 'it',
      display: 'Pescara'
    },
    {
      code: 'PSA',
      country: 'it',
      display: 'Pisa'
    },
    {
      code: 'PDV',
      country: 'bg',
      display: 'Plovdiv'
    },
    {
      code: 'TGD',
      country: 'me',
      display: 'Podgorica'
    },
    {
      code: 'PIS',
      country: 'fr',
      display: 'Poitiers'
    },
    {
      code: 'PDL',
      country: 'pt',
      display: 'Ponta Delgada'
    },
    {
      code: 'OPO',
      country: 'pt',
      display: 'Porto'
    },
    {
      code: 'POZ',
      country: 'pl',
      display: 'Poznan'
    },
    {
      code: 'PRG',
      country: 'cz',
      display: 'Prague'
    },
    {
      code: 'PUY',
      country: 'hr',
      display: 'Pula'
    },
    {
      code: 'RBA',
      country: 'ma',
      display: 'Rabat'
    },
    {
      code: 'RHO',
      country: 'gr',
      display: 'Rhodes'
    },
    {
      code: 'RIX',
      country: 'lv',
      display: 'Riga'
    },
    {
      code: 'RJK',
      country: 'hr',
      display: 'Rijeka'
    },
    {
      code: 'RMI',
      country: 'it',
      display: 'Rimini'
    },
    {
      code: 'RDZ',
      country: 'fr',
      display: 'Rodez'
    },
    {
      code: 'CIA',
      country: 'it',
      display: 'Rome Ciampino'
    },
    {
      code: 'FCO',
      country: 'it',
      display: 'Rome Fiumicino'
    },
    {
      code: 'RLG',
      country: 'de',
      display: 'Rostock'
    },
    {
      code: 'RZE',
      country: 'pl',
      display: 'Rzeszow'
    },
    {
      code: 'SZG',
      country: 'at',
      display: 'Salzburg'
    },
    {
      code: 'SDR',
      country: 'es',
      display: 'Santander'
    },
    {
      code: 'SCQ',
      country: 'es',
      display: 'Santiago'
    },
    {
      code: 'JTR',
      country: 'gr',
      display: 'Santorini'
    },
    {
      code: 'SVQ',
      country: 'es',
      display: 'Seville'
    },
    {
      code: 'SNN',
      country: 'ie',
      display: 'Shannon'
    },
    {
      code: 'SOF',
      country: 'bg',
      display: 'Sofia'
    },
    {
      code: 'SPU',
      country: 'hr',
      display: 'Split'
    },
    {
      code: 'LED',
      country: 'ru',
      display: 'St. Petersburg'
    },
    {
      code: 'NYO',
      country: 'se',
      display: 'Stockholm Skavsta'
    },
    {
      code: 'VST',
      country: 'se',
      display: 'Stockholm Västerås'
    },
    {
      code: 'SXB',
      country: 'fr',
      display: 'Strasbourg'
    },
    {
      code: 'STR',
      country: 'de',
      display: 'Stuttgart'
    },
    {
      code: 'SZZ',
      country: 'pl',
      display: 'Szczecin'
    },
    {
      code: 'TLL',
      country: 'ee',
      display: 'Tallinn'
    },
    {
      code: 'TMP',
      country: 'fi',
      display: 'Tampere'
    },
    {
      code: 'TNG',
      country: 'ma',
      display: 'Tangier'
    },
    {
      code: 'TLV',
      country: 'il',
      display: 'Tel Aviv'
    },
    {
      code: 'TFN',
      country: 'es',
      display: 'Tenerife North'
    },
    {
      code: 'TFS',
      country: 'es',
      display: 'Tenerife South'
    },
    {
      code: 'TER',
      country: 'pt',
      display: 'Terceira Lajes'
    },
    {
      code: 'TTU',
      country: 'ma',
      display: 'Tétouan'
    },
    {
      code: 'SKG',
      country: 'gr',
      display: 'Thessaloniki'
    },
    {
      code: 'TSR',
      country: 'ro',
      display: 'Timisoara'
    },
    {
      code: 'TLS',
      country: 'fr',
      display: 'Toulouse'
    },
    {
      code: 'TUF',
      country: 'fr',
      display: 'Tours Loire Valley'
    },
    {
      code: 'TPS',
      country: 'it',
      display: 'Trapani'
    },
    {
      code: 'TRS',
      country: 'it',
      display: 'Trieste'
    },
    {
      code: 'TUN',
      country: 'tn',
      display: 'Tunis'
    },
    {
      code: 'TRN',
      country: 'it',
      display: 'Turin'
    },
    {
      code: 'VLC',
      country: 'es',
      display: 'Valencia'
    },
    {
      code: 'VLL',
      country: 'es',
      display: 'Valladolid'
    },
    {
      code: 'VAR',
      country: 'bg',
      display: 'Varna'
    },
    {
      code: 'VXO',
      country: 'se',
      display: 'Växjö Småland'
    },
    {
      code: 'VCE',
      country: 'it',
      display: 'Venice M.Polo'
    },
    {
      code: 'TSF',
      country: 'it',
      display: 'Venice Treviso'
    },
    {
      code: 'VRN',
      country: 'it',
      display: 'Verona'
    },
    {
      code: 'VIE',
      country: 'at',
      display: 'Vienna'
    },
    {
      code: 'VGO',
      country: 'es',
      display: 'Vigo'
    },
    {
      code: 'VNO',
      country: 'lt',
      display: 'Vilnius'
    },
    {
      code: 'VIT',
      country: 'es',
      display: 'Vitoria (Basque Country)'
    },
    {
      code: 'WAW',
      country: 'pl',
      display: 'Warsaw Chopin'
    },
    {
      code: 'WMI',
      country: 'pl',
      display: 'Warsaw Modlin'
    },
    {
      code: 'WRO',
      country: 'pl',
      display: 'Wroclaw'
    },
    {
      code: 'ZAD',
      country: 'hr',
      display: 'Zadar'
    },
    {
      code: 'ZTH',
      country: 'gr',
      display: 'Zakynthos'
    },
    {
      code: 'ZAZ',
      country: 'es',
      display: 'Zaragoza'
    },
    {
      code: 'ZRH',
      country: 'ch',
      display: 'Zurich'
    }
  ];
  var data = defaults;
  return {
    getDisplay: function(code) {
      return data.find(x => x.code == code).display;
    },
    getCode: function(display) {
      return data.find(x => x.display == display).code;
    },
    list: function() {
      return data;
    }
  }
}]);
