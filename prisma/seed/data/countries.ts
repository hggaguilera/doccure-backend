import IDS from './_constants';

const countries = [
  {
    name: 'Afganistán',
    abbreviationTwo: 'AF',
    abbreviationThree: 'AFG',
  },
  {
    name: 'Albania',
    abbreviationTwo: 'AL',
    abbreviationThree: 'ALB',
  },
  {
    name: 'Alemania',
    abbreviationTwo: 'DE',
    abbreviationThree: 'DEU',
  },
  {
    name: 'Algeria',
    abbreviationTwo: 'DZ',
    abbreviationThree: 'DZA',
  },
  {
    name: 'Andorra',
    abbreviationTwo: 'AD',
    abbreviationThree: 'AND',
  },
  {
    name: 'Angola',
    abbreviationTwo: 'AO',
    abbreviationThree: 'AGO',
  },
  {
    name: 'Anguila',
    abbreviationTwo: 'AI',
    abbreviationThree: 'AIA',
  },
  {
    name: 'Antártida',
    abbreviationTwo: 'AQ',
    abbreviationThree: 'ATA',
  },
  {
    name: 'Antigua y Barbuda',
    abbreviationTwo: 'AG',
    abbreviationThree: 'ATG',
  },
  {
    name: 'Antillas Neerlandesas',
    abbreviationTwo: 'AN',
    abbreviationThree: 'ANT',
  },
  {
    name: 'Arabia Saudita',
    abbreviationTwo: 'SA',
    abbreviationThree: 'SAU',
  },
  {
    name: 'Argentina',
    abbreviationTwo: 'AR',
    abbreviationThree: 'ARG',
  },
  {
    name: 'Armenia',
    abbreviationTwo: 'AM',
    abbreviationThree: 'ARM',
  },
  {
    name: 'Aruba',
    abbreviationTwo: 'AW',
    abbreviationThree: 'ABW',
  },
  {
    name: 'Australia',
    abbreviationTwo: 'AU',
    abbreviationThree: 'AUS',
  },
  {
    name: 'Austria',
    abbreviationTwo: 'AT',
    abbreviationThree: 'AUT',
  },
  {
    name: 'Azerbayán',
    abbreviationTwo: 'AZ',
    abbreviationThree: 'AZE',
  },
  {
    name: 'Bélgica',
    abbreviationTwo: 'BE',
    abbreviationThree: 'BEL',
  },
  {
    name: 'Bahamas',
    abbreviationTwo: 'BS',
    abbreviationThree: 'BHS',
  },
  {
    name: 'Bahrein',
    abbreviationTwo: 'BH',
    abbreviationThree: 'BHR',
  },
  {
    name: 'Bangladesh',
    abbreviationTwo: 'BD',
    abbreviationThree: 'BGD',
  },
  {
    name: 'Barbados',
    abbreviationTwo: 'BB',
    abbreviationThree: 'BRB',
  },
  {
    name: 'Belice',
    abbreviationTwo: 'BZ',
    abbreviationThree: 'BLZ',
  },
  {
    name: 'Benín',
    abbreviationTwo: 'BJ',
    abbreviationThree: 'BEN',
  },
  {
    name: 'Bhután',
    abbreviationTwo: 'BT',
    abbreviationThree: 'BTN',
  },
  {
    name: 'Bielorrusia',
    abbreviationTwo: 'BY',
    abbreviationThree: 'BLR',
  },
  {
    name: 'Birmania',
    abbreviationTwo: 'MM',
    abbreviationThree: 'MMR',
  },
  {
    name: 'Bolivia',
    abbreviationTwo: 'BO',
    abbreviationThree: 'BOL',
  },
  {
    name: 'Bosnia y Herzegovina',
    abbreviationTwo: 'BA',
    abbreviationThree: 'BIH',
  },
  {
    name: 'Botsuana',
    abbreviationTwo: 'BW',
    abbreviationThree: 'BWA',
  },
  {
    name: 'Brasil',
    abbreviationTwo: 'BR',
    abbreviationThree: 'BRA',
  },
  {
    name: 'Brunéi',
    abbreviationTwo: 'BN',
    abbreviationThree: 'BRN',
  },
  {
    name: 'Bulgaria',
    abbreviationTwo: 'BG',
    abbreviationThree: 'BGR',
  },
  {
    name: 'Burkina Faso',
    abbreviationTwo: 'BF',
    abbreviationThree: 'BFA',
  },
  {
    name: 'Burundi',
    abbreviationTwo: 'BI',
    abbreviationThree: 'BDI',
  },
  {
    name: 'Cabo Verde',
    abbreviationTwo: 'CV',
    abbreviationThree: 'CPV',
  },
  {
    name: 'Camboya',
    abbreviationTwo: 'KH',
    abbreviationThree: 'KHM',
  },
  {
    name: 'Camerún',
    abbreviationTwo: 'CM',
    abbreviationThree: 'CMR',
  },
  {
    name: 'Canadá',
    abbreviationTwo: 'CA',
    abbreviationThree: 'CAN',
  },
  {
    name: 'Chad',
    abbreviationTwo: 'TD',
    abbreviationThree: 'TCD',
  },
  {
    name: 'Chile',
    abbreviationTwo: 'CL',
    abbreviationThree: 'CHL',
  },
  {
    name: 'China',
    abbreviationTwo: 'CN',
    abbreviationThree: 'CHN',
  },
  {
    name: 'Chipre',
    abbreviationTwo: 'CY',
    abbreviationThree: 'CYP',
  },
  {
    name: 'Ciudad del Vaticano',
    abbreviationTwo: 'VA',
    abbreviationThree: 'VAT',
  },
  {
    name: 'Colombia',
    abbreviationTwo: 'CO',
    abbreviationThree: 'COL',
  },
  {
    name: 'Comoras',
    abbreviationTwo: 'KM',
    abbreviationThree: 'COM',
  },
  {
    name: 'Congo',
    abbreviationTwo: 'CG',
    abbreviationThree: 'COG',
  },
  {
    name: 'Congo',
    abbreviationTwo: 'CD',
    abbreviationThree: 'COD',
  },
  {
    name: 'Corea del Norte',
    abbreviationTwo: 'KP',
    abbreviationThree: 'PRK',
  },
  {
    name: 'Corea del Sur',
    abbreviationTwo: 'KR',
    abbreviationThree: 'KOR',
  },
  {
    name: 'Costa de Marfil',
    abbreviationTwo: 'CI',
    abbreviationThree: 'CIV',
  },
  {
    name: 'Costa Rica',
    abbreviationTwo: 'CR',
    abbreviationThree: 'CRI',
  },
  {
    name: 'Croacia',
    abbreviationTwo: 'HR',
    abbreviationThree: 'HRV',
  },
  {
    name: 'Cuba',
    abbreviationTwo: 'CU',
    abbreviationThree: 'CUB',
  },
  {
    name: 'Dinamarca',
    abbreviationTwo: 'DK',
    abbreviationThree: 'DNK',
  },
  {
    name: 'Dominica',
    abbreviationTwo: 'DM',
    abbreviationThree: 'DMA',
  },
  {
    name: 'Ecuador',
    abbreviationTwo: 'EC',
    abbreviationThree: 'ECU',
  },
  {
    name: 'Egipto',
    abbreviationTwo: 'EG',
    abbreviationThree: 'EGY',
  },
  {
    name: 'El Salvador',
    abbreviationTwo: 'SV',
    abbreviationThree: 'SLV',
  },
  {
    name: 'Emiratos Árabes Unidos',
    abbreviationTwo: 'AE',
    abbreviationThree: 'ARE',
  },
  {
    name: 'Eritrea',
    abbreviationTwo: 'ER',
    abbreviationThree: 'ERI',
  },
  {
    name: 'Eslovaquia',
    abbreviationTwo: 'SK',
    abbreviationThree: 'SVK',
  },
  {
    name: 'Eslovenia',
    abbreviationTwo: 'SI',
    abbreviationThree: 'SVN',
  },
  {
    name: 'España',
    abbreviationTwo: 'ES',
    abbreviationThree: 'ESP',
  },
  {
    name: 'Estados Unidos de América',
    abbreviationTwo: 'US',
    abbreviationThree: 'USA',
  },
  {
    name: 'Estonia',
    abbreviationTwo: 'EE',
    abbreviationThree: 'EST',
  },
  {
    name: 'Etiopía',
    abbreviationTwo: 'ET',
    abbreviationThree: 'ETH',
  },
  {
    name: 'Filipinas',
    abbreviationTwo: 'PH',
    abbreviationThree: 'PHL',
  },
  {
    name: 'Finlandia',
    abbreviationTwo: 'FI',
    abbreviationThree: 'FIN',
  },
  {
    name: 'Fiyi',
    abbreviationTwo: 'FJ',
    abbreviationThree: 'FJI',
  },
  {
    name: 'Francia',
    abbreviationTwo: 'FR',
    abbreviationThree: 'FRA',
  },
  {
    name: 'Gabón',
    abbreviationTwo: 'GA',
    abbreviationThree: 'GAB',
  },
  {
    name: 'Gambia',
    abbreviationTwo: 'GM',
    abbreviationThree: 'GMB',
  },
  {
    name: 'Georgia',
    abbreviationTwo: 'GE',
    abbreviationThree: 'GEO',
  },
  {
    name: 'Ghana',
    abbreviationTwo: 'GH',
    abbreviationThree: 'GHA',
  },
  {
    name: 'Gibraltar',
    abbreviationTwo: 'GI',
    abbreviationThree: 'GIB',
  },
  {
    name: 'Granada',
    abbreviationTwo: 'GD',
    abbreviationThree: 'GRD',
  },
  {
    name: 'Grecia',
    abbreviationTwo: 'GR',
    abbreviationThree: 'GRC',
  },
  {
    name: 'Groenlandia',
    abbreviationTwo: 'GL',
    abbreviationThree: 'GRL',
  },
  {
    name: 'Guadalupe',
    abbreviationTwo: 'GP',
    abbreviationThree: 'GLP',
  },
  {
    name: 'Guam',
    abbreviationTwo: 'GU',
    abbreviationThree: 'GUM',
  },
  {
    name: 'Guatemala',
    abbreviationTwo: 'GT',
    abbreviationThree: 'GTM',
  },
  {
    name: 'Guayana Francesa',
    abbreviationTwo: 'GF',
    abbreviationThree: 'GUF',
  },
  {
    name: 'Guernsey',
    abbreviationTwo: 'GG',
    abbreviationThree: 'GGY',
  },
  {
    name: 'Guinea',
    abbreviationTwo: 'GN',
    abbreviationThree: 'GIN',
  },
  {
    name: 'Guinea Ecuatorial',
    abbreviationTwo: 'GQ',
    abbreviationThree: 'GNQ',
  },
  {
    name: 'Guinea-Bissau',
    abbreviationTwo: 'GW',
    abbreviationThree: 'GNB',
  },
  {
    name: 'Guyana',
    abbreviationTwo: 'GY',
    abbreviationThree: 'GUY',
  },
  {
    name: 'Haití',
    abbreviationTwo: 'HT',
    abbreviationThree: 'HTI',
  },
  {
    name: 'Honduras',
    abbreviationTwo: 'HN',
    abbreviationThree: 'HND',
  },
  {
    name: 'Hong kong',
    abbreviationTwo: 'HK',
    abbreviationThree: 'HKG',
  },
  {
    name: 'Hungría',
    abbreviationTwo: 'HU',
    abbreviationThree: 'HUN',
  },
  {
    name: 'India',
    abbreviationTwo: 'IN',
    abbreviationThree: 'IND',
  },
  {
    name: 'Indonesia',
    abbreviationTwo: 'ID',
    abbreviationThree: 'IDN',
  },
  {
    name: 'Irán',
    abbreviationTwo: 'IR',
    abbreviationThree: 'IRN',
  },
  {
    name: 'Irak',
    abbreviationTwo: 'IQ',
    abbreviationThree: 'IRQ',
  },
  {
    name: 'Irlanda',
    abbreviationTwo: 'IE',
    abbreviationThree: 'IRL',
  },
  {
    name: 'Isla Bouvet',
    abbreviationTwo: 'BV',
    abbreviationThree: 'BVT',
  },
  {
    name: 'Isla de Man',
    abbreviationTwo: 'IM',
    abbreviationThree: 'IMN',
  },
  {
    name: 'Isla de Navidad',
    abbreviationTwo: 'CX',
    abbreviationThree: 'CXR',
  },
  {
    name: 'Isla Norfolk',
    abbreviationTwo: 'NF',
    abbreviationThree: 'NFK',
  },
  {
    name: 'Islandia',
    abbreviationTwo: 'IS',
    abbreviationThree: 'ISL',
  },
  {
    name: 'Islas Bermudas',
    abbreviationTwo: 'BM',
    abbreviationThree: 'BMU',
  },
  {
    name: 'Islas Caimán',
    abbreviationTwo: 'KY',
    abbreviationThree: 'CYM',
  },
  {
    name: 'Islas Cocos (Keeling)',
    abbreviationTwo: 'CC',
    abbreviationThree: 'CCK',
  },
  {
    name: 'Islas Cook',
    abbreviationTwo: 'CK',
    abbreviationThree: 'COK',
  },
  {
    name: 'Islas de Åland',
    abbreviationTwo: 'AX',
    abbreviationThree: 'ALA',
  },
  {
    name: 'Islas Feroe',
    abbreviationTwo: 'FO',
    abbreviationThree: 'FRO',
  },
  {
    name: 'Islas Georgias del Sur y Sandwich del Sur',
    abbreviationTwo: 'GS',
    abbreviationThree: 'SGS',
  },
  {
    name: 'Islas Heard y McDonald',
    abbreviationTwo: 'HM',
    abbreviationThree: 'HMD',
  },
  {
    name: 'Islas Maldivas',
    abbreviationTwo: 'MV',
    abbreviationThree: 'MDV',
  },
  {
    name: 'Islas Malvinas',
    abbreviationTwo: 'FK',
    abbreviationThree: 'FLK',
  },
  {
    name: 'Islas Marianas del Norte',
    abbreviationTwo: 'MP',
    abbreviationThree: 'MNP',
  },
  {
    name: 'Islas Marshall',
    abbreviationTwo: 'MH',
    abbreviationThree: 'MHL',
  },
  {
    name: 'Islas Pitcairn',
    abbreviationTwo: 'PN',
    abbreviationThree: 'PCN',
  },
  {
    name: 'Islas Salomón',
    abbreviationTwo: 'SB',
    abbreviationThree: 'SLB',
  },
  {
    name: 'Islas Turcas y Caicos',
    abbreviationTwo: 'TC',
    abbreviationThree: 'TCA',
  },
  {
    name: 'Islas Ultramarinas Menores de Estados Unidos',
    abbreviationTwo: 'UM',
    abbreviationThree: 'UMI',
  },
  {
    name: 'Islas Vírgenes Británicas',
    abbreviationTwo: 'VG',
    abbreviationThree: 'VG',
  },
  {
    name: 'Islas Vírgenes de los Estados Unidos',
    abbreviationTwo: 'VI',
    abbreviationThree: 'VIR',
  },
  {
    name: 'Israel',
    abbreviationTwo: 'IL',
    abbreviationThree: 'ISR',
  },
  {
    name: 'Italia',
    abbreviationTwo: 'IT',
    abbreviationThree: 'ITA',
  },
  {
    name: 'Jamaica',
    abbreviationTwo: 'JM',
    abbreviationThree: 'JAM',
  },
  {
    name: 'Japón',
    abbreviationTwo: 'JP',
    abbreviationThree: 'JPN',
  },
  {
    name: 'Jersey',
    abbreviationTwo: 'JE',
    abbreviationThree: 'JEY',
  },
  {
    name: 'Jordania',
    abbreviationTwo: 'JO',
    abbreviationThree: 'JOR',
  },
  {
    name: 'Kazajistán',
    abbreviationTwo: 'KZ',
    abbreviationThree: 'KAZ',
  },
  {
    name: 'Kenia',
    abbreviationTwo: 'KE',
    abbreviationThree: 'KEN',
  },
  {
    name: 'Kirgizstán',
    abbreviationTwo: 'KG',
    abbreviationThree: 'KGZ',
  },
  {
    name: 'Kiribati',
    abbreviationTwo: 'KI',
    abbreviationThree: 'KIR',
  },
  {
    name: 'Kuwait',
    abbreviationTwo: 'KW',
    abbreviationThree: 'KWT',
  },
  {
    name: 'Líbano',
    abbreviationTwo: 'LB',
    abbreviationThree: 'LBN',
  },
  {
    name: 'Laos',
    abbreviationTwo: 'LA',
    abbreviationThree: 'LAO',
  },
  {
    name: 'Lesoto',
    abbreviationTwo: 'LS',
    abbreviationThree: 'LSO',
  },
  {
    name: 'Letonia',
    abbreviationTwo: 'LV',
    abbreviationThree: 'LVA',
  },
  {
    name: 'Liberia',
    abbreviationTwo: 'LR',
    abbreviationThree: 'LBR',
  },
  {
    name: 'Libia',
    abbreviationTwo: 'LY',
    abbreviationThree: 'LBY',
  },
  {
    name: 'Liechtenstein',
    abbreviationTwo: 'LI',
    abbreviationThree: 'LIE',
  },
  {
    name: 'Lituania',
    abbreviationTwo: 'LT',
    abbreviationThree: 'LTU',
  },
  {
    name: 'Luxemburgo',
    abbreviationTwo: 'LU',
    abbreviationThree: 'LUX',
  },
  {
    name: 'México',
    abbreviationTwo: 'MX',
    abbreviationThree: 'MEX',
  },
  {
    name: 'Mónaco',
    abbreviationTwo: 'MC',
    abbreviationThree: 'MCO',
  },
  {
    name: 'Macao',
    abbreviationTwo: 'MO',
    abbreviationThree: 'MAC',
  },
  {
    name: 'Macedônia',
    abbreviationTwo: 'MK',
    abbreviationThree: 'MKD',
  },
  {
    name: 'Madagascar',
    abbreviationTwo: 'MG',
    abbreviationThree: 'MDG',
  },
  {
    name: 'Malasia',
    abbreviationTwo: 'MY',
    abbreviationThree: 'MYS',
  },
  {
    name: 'Malawi',
    abbreviationTwo: 'MW',
    abbreviationThree: 'MWI',
  },
  {
    name: 'Mali',
    abbreviationTwo: 'ML',
    abbreviationThree: 'MLI',
  },
  {
    name: 'Malta',
    abbreviationTwo: 'MT',
    abbreviationThree: 'MLT',
  },
  {
    name: 'Marruecos',
    abbreviationTwo: 'MA',
    abbreviationThree: 'MAR',
  },
  {
    name: 'Martinica',
    abbreviationTwo: 'MQ',
    abbreviationThree: 'MTQ',
  },
  {
    name: 'Mauricio',
    abbreviationTwo: 'MU',
    abbreviationThree: 'MUS',
  },
  {
    name: 'Mauritania',
    abbreviationTwo: 'MR',
    abbreviationThree: 'MRT',
  },
  {
    name: 'Mayotte',
    abbreviationTwo: 'YT',
    abbreviationThree: 'MYT',
  },
  {
    name: 'Micronesia',
    abbreviationTwo: 'FM',
    abbreviationThree: 'FSM',
  },
  {
    name: 'Moldavia',
    abbreviationTwo: 'MD',
    abbreviationThree: 'MDA',
  },
  {
    name: 'Mongolia',
    abbreviationTwo: 'MN',
    abbreviationThree: 'MNG',
  },
  {
    name: 'Montenegro',
    abbreviationTwo: 'ME',
    abbreviationThree: 'MNE',
  },
  {
    name: 'Montserrat',
    abbreviationTwo: 'MS',
    abbreviationThree: 'MSR',
  },
  {
    name: 'Mozambique',
    abbreviationTwo: 'MZ',
    abbreviationThree: 'MOZ',
  },
  {
    name: 'Namibia',
    abbreviationTwo: 'NA',
    abbreviationThree: 'NAM',
  },
  {
    name: 'Nauru',
    abbreviationTwo: 'NR',
    abbreviationThree: 'NRU',
  },
  {
    name: 'Nepal',
    abbreviationTwo: 'NP',
    abbreviationThree: 'NPL',
  },
  {
    id: IDS.COUNTRIES.NICARAGUA,
    name: 'Nicaragua',
    abbreviationTwo: 'NI',
    abbreviationThree: 'NIC',
  },
  {
    name: 'Niger',
    abbreviationTwo: 'NE',
    abbreviationThree: 'NER',
  },
  {
    name: 'Nigeria',
    abbreviationTwo: 'NG',
    abbreviationThree: 'NGA',
  },
  {
    name: 'Niue',
    abbreviationTwo: 'NU',
    abbreviationThree: 'NIU',
  },
  {
    name: 'Noruega',
    abbreviationTwo: 'NO',
    abbreviationThree: 'NOR',
  },
  {
    name: 'Nueva Caledonia',
    abbreviationTwo: 'NC',
    abbreviationThree: 'NCL',
  },
  {
    name: 'Nueva Zelanda',
    abbreviationTwo: 'NZ',
    abbreviationThree: 'NZL',
  },
  {
    name: 'Omán',
    abbreviationTwo: 'OM',
    abbreviationThree: 'OMN',
  },
  {
    name: 'Países Bajos',
    abbreviationTwo: 'NL',
    abbreviationThree: 'NLD',
  },
  {
    name: 'Pakistán',
    abbreviationTwo: 'PK',
    abbreviationThree: 'PAK',
  },
  {
    name: 'Palau',
    abbreviationTwo: 'PW',
    abbreviationThree: 'PLW',
  },
  {
    name: 'Palestina',
    abbreviationTwo: 'PS',
    abbreviationThree: 'PSE',
  },
  {
    name: 'Panamá',
    abbreviationTwo: 'PA',
    abbreviationThree: 'PAN',
  },
  {
    name: 'Papúa Nueva Guinea',
    abbreviationTwo: 'PG',
    abbreviationThree: 'PNG',
  },
  {
    name: 'Paraguay',
    abbreviationTwo: 'PY',
    abbreviationThree: 'PRY',
  },
  {
    name: 'Perú',
    abbreviationTwo: 'PE',
    abbreviationThree: 'PER',
  },
  {
    name: 'Polinesia Francesa',
    abbreviationTwo: 'PF',
    abbreviationThree: 'PYF',
  },
  {
    name: 'Polonia',
    abbreviationTwo: 'PL',
    abbreviationThree: 'POL',
  },
  {
    name: 'Portugal',
    abbreviationTwo: 'PT',
    abbreviationThree: 'PRT',
  },
  {
    name: 'Puerto Rico',
    abbreviationTwo: 'PR',
    abbreviationThree: 'PRI',
  },
  {
    name: 'Qatar',
    abbreviationTwo: 'QA',
    abbreviationThree: 'QAT',
  },
  {
    name: 'Reino Unido',
    abbreviationTwo: 'GB',
    abbreviationThree: 'GBR',
  },
  {
    name: 'República Centroafricana',
    abbreviationTwo: 'CF',
    abbreviationThree: 'CAF',
  },
  {
    name: 'República Checa',
    abbreviationTwo: 'CZ',
    abbreviationThree: 'CZE',
  },
  {
    name: 'República Dominicana',
    abbreviationTwo: 'DO',
    abbreviationThree: 'DOM',
  },
  {
    name: 'Reunión',
    abbreviationTwo: 'RE',
    abbreviationThree: 'REU',
  },
  {
    name: 'Ruanda',
    abbreviationTwo: 'RW',
    abbreviationThree: 'RWA',
  },
  {
    name: 'Rumanía',
    abbreviationTwo: 'RO',
    abbreviationThree: 'ROU',
  },
  {
    name: 'Rusia',
    abbreviationTwo: 'RU',
    abbreviationThree: 'RUS',
  },
  {
    name: 'Sahara Occidental',
    abbreviationTwo: 'EH',
    abbreviationThree: 'ESH',
  },
  {
    name: 'Samoa',
    abbreviationTwo: 'WS',
    abbreviationThree: 'WSM',
  },
  {
    name: 'Samoa Americana',
    abbreviationTwo: 'AS',
    abbreviationThree: 'ASM',
  },
  {
    name: 'San Bartolomé',
    abbreviationTwo: 'BL',
    abbreviationThree: 'BLM',
  },
  {
    name: 'San Cristóbal y Nieves',
    abbreviationTwo: 'KN',
    abbreviationThree: 'KNA',
  },
  {
    name: 'San Marino',
    abbreviationTwo: 'SM',
    abbreviationThree: 'SMR',
  },
  {
    name: 'San Martín (Francia)',
    abbreviationTwo: 'MF',
    abbreviationThree: 'MAF',
  },
  {
    name: 'San Pedro y Miquelón',
    abbreviationTwo: 'PM',
    abbreviationThree: 'SPM',
  },
  {
    name: 'San Vicente y las Granadinas',
    abbreviationTwo: 'VC',
    abbreviationThree: 'VCT',
  },
  {
    name: 'Santa Elena',
    abbreviationTwo: 'SH',
    abbreviationThree: 'SHN',
  },
  {
    name: 'Santa Lucía',
    abbreviationTwo: 'LC',
    abbreviationThree: 'LCA',
  },
  {
    name: 'Santo Tomé y Príncipe',
    abbreviationTwo: 'ST',
    abbreviationThree: 'STP',
  },
  {
    name: 'Senegal',
    abbreviationTwo: 'SN',
    abbreviationThree: 'SEN',
  },
  {
    name: 'Serbia',
    abbreviationTwo: 'RS',
    abbreviationThree: 'SRB',
  },
  {
    name: 'Seychelles',
    abbreviationTwo: 'SC',
    abbreviationThree: 'SYC',
  },
  {
    name: 'Sierra Leona',
    abbreviationTwo: 'SL',
    abbreviationThree: 'SLE',
  },
  {
    name: 'Singapur',
    abbreviationTwo: 'SG',
    abbreviationThree: 'SGP',
  },
  {
    name: 'Siria',
    abbreviationTwo: 'SY',
    abbreviationThree: 'SYR',
  },
  {
    name: 'Somalia',
    abbreviationTwo: 'SO',
    abbreviationThree: 'SOM',
  },
  {
    name: 'Sri lanka',
    abbreviationTwo: 'LK',
    abbreviationThree: 'LKA',
  },
  {
    name: 'Sudáfrica',
    abbreviationTwo: 'ZA',
    abbreviationThree: 'ZAF',
  },
  {
    name: 'Sudán',
    abbreviationTwo: 'SD',
    abbreviationThree: 'SDN',
  },
  {
    name: 'Suecia',
    abbreviationTwo: 'SE',
    abbreviationThree: 'SWE',
  },
  {
    name: 'Suiza',
    abbreviationTwo: 'CH',
    abbreviationThree: 'CHE',
  },
  {
    name: 'Surinám',
    abbreviationTwo: 'SR',
    abbreviationThree: 'SUR',
  },
  {
    name: 'Svalbard y Jan Mayen',
    abbreviationTwo: 'SJ',
    abbreviationThree: 'SJM',
  },
  {
    name: 'Swazilandia',
    abbreviationTwo: 'SZ',
    abbreviationThree: 'SWZ',
  },
  {
    name: 'Tadjikistán',
    abbreviationTwo: 'TJ',
    abbreviationThree: 'TJK',
  },
  {
    name: 'Tailandia',
    abbreviationTwo: 'TH',
    abbreviationThree: 'THA',
  },
  {
    name: 'Taiwán',
    abbreviationTwo: 'TW',
    abbreviationThree: 'TWN',
  },
  {
    name: 'Tanzania',
    abbreviationTwo: 'TZ',
    abbreviationThree: 'TZA',
  },
  {
    name: 'Territorio Británico del Océano Índico',
    abbreviationTwo: 'IO',
    abbreviationThree: 'IOT',
  },
  {
    name: 'Territorios Australes y Antárticas Franceses',
    abbreviationTwo: 'TF',
    abbreviationThree: 'ATF',
  },
  {
    name: 'Timor Oriental',
    abbreviationTwo: 'TL',
    abbreviationThree: 'TLS',
  },
  {
    name: 'Togo',
    abbreviationTwo: 'TG',
    abbreviationThree: 'TGO',
  },
  {
    name: 'Tokelau',
    abbreviationTwo: 'TK',
    abbreviationThree: 'TKL',
  },
  {
    name: 'Tonga',
    abbreviationTwo: 'TO',
    abbreviationThree: 'TON',
  },
  {
    name: 'Trinidad y Tobago',
    abbreviationTwo: 'TT',
    abbreviationThree: 'TTO',
  },
  {
    name: 'Tunez',
    abbreviationTwo: 'TN',
    abbreviationThree: 'TUN',
  },
  {
    name: 'Turkmenistán',
    abbreviationTwo: 'TM',
    abbreviationThree: 'TKM',
  },
  {
    name: 'Turquía',
    abbreviationTwo: 'TR',
    abbreviationThree: 'TUR',
  },
  {
    name: 'Tuvalu',
    abbreviationTwo: 'TV',
    abbreviationThree: 'TUV',
  },
  {
    name: 'Ucrania',
    abbreviationTwo: 'UA',
    abbreviationThree: 'UKR',
  },
  {
    name: 'Uganda',
    abbreviationTwo: 'UG',
    abbreviationThree: 'UGA',
  },
  {
    name: 'Uruguay',
    abbreviationTwo: 'UY',
    abbreviationThree: 'URY',
  },
  {
    name: 'Uzbekistán',
    abbreviationTwo: 'UZ',
    abbreviationThree: 'UZB',
  },
  {
    name: 'Vanuatu',
    abbreviationTwo: 'VU',
    abbreviationThree: 'VUT',
  },
  {
    name: 'Venezuela',
    abbreviationTwo: 'VE',
    abbreviationThree: 'VEN',
  },
  {
    name: 'Vietnam',
    abbreviationTwo: 'VN',
    abbreviationThree: 'VNM',
  },
  {
    name: 'Wallis y Futuna',
    abbreviationTwo: 'WF',
    abbreviationThree: 'WLF',
  },
  {
    name: 'Yemen',
    abbreviationTwo: 'YE',
    abbreviationThree: 'YEM',
  },
  {
    name: 'Yibuti',
    abbreviationTwo: 'DJ',
    abbreviationThree: 'DJI',
  },
  {
    name: 'Zambia',
    abbreviationTwo: 'ZM',
    abbreviationThree: 'ZMB',
  },
  {
    name: 'Zimbabue',
    abbreviationTwo: 'ZW',
    abbreviationThree: 'ZWE',
  },
];

export default countries;
