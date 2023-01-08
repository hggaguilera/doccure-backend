const countries = [
  {
    name: 'Afghanistan',
    abbreviationTwo: 'AF',
    abbreviationThree: 'AFG',
  },
  {
    name: 'Albania',
    abbreviationTwo: 'AL',
    abbreviationThree: 'ALB',
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
    name: 'Antigua and Barbuda',
    abbreviationTwo: 'AG',
    abbreviationThree: 'ATG',
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
    name: 'Azerbaijan',
    abbreviationTwo: 'AZ',
    abbreviationThree: 'AZE',
  },
  {
    name: 'Bahamas',
    abbreviationTwo: 'BS',
    abbreviationThree: 'BHS',
  },
  {
    name: 'Bahrain',
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
    name: 'Belarus',
    abbreviationTwo: 'BY',
    abbreviationThree: 'BLR',
  },
  {
    name: 'Belgium',
    abbreviationTwo: 'BE',
    abbreviationThree: 'BEL',
  },
  {
    name: 'Belize',
    abbreviationTwo: 'BZ',
    abbreviationThree: 'BLZ',
  },
  {
    name: 'Benin',
    abbreviationTwo: 'BJ',
    abbreviationThree: 'BEN',
  },
  {
    name: 'Bhutan',
    abbreviationTwo: 'BT',
    abbreviationThree: 'BTN',
  },
  {
    name: 'Bolivia',
    abbreviationTwo: 'BO',
    abbreviationThree: 'BOL',
  },
  {
    name: 'Bosnia and Herzegovina',
    abbreviationTwo: 'BA',
    abbreviationThree: 'BIH',
  },
  {
    name: 'Botswana',
    abbreviationTwo: 'BW',
    abbreviationThree: 'BWA',
  },
  {
    name: 'Brazil',
    abbreviationTwo: 'BR',
    abbreviationThree: 'BRA',
  },
  {
    name: 'Brunei',
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
    name: 'Cambodia',
    abbreviationTwo: 'KH',
    abbreviationThree: 'KHM',
  },
  {
    name: 'Cameroon',
    abbreviationTwo: 'CM',
    abbreviationThree: 'CMR',
  },
  {
    name: 'Canada',
    abbreviationTwo: 'CA',
    abbreviationThree: 'CAN',
  },
  {
    name: 'Cape Verde',
    abbreviationTwo: 'CV',
    abbreviationThree: 'CPV',
  },
  {
    name: 'Central African Republic',
    abbreviationTwo: 'CF',
    abbreviationThree: 'CAF',
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
    name: 'Colombia',
    abbreviationTwo: 'CO',
    abbreviationThree: 'COL',
  },
  {
    name: 'Comoros',
    abbreviationTwo: 'KM',
    abbreviationThree: 'COM',
  },
  {
    name: 'Costa Rica',
    abbreviationTwo: 'CR',
    abbreviationThree: 'CRI',
  },
  {
    name: 'Croatia',
    abbreviationTwo: 'HR',
    abbreviationThree: 'HRV',
  },
  {
    name: 'Cuba',
    abbreviationTwo: 'CU',
    abbreviationThree: 'CUB',
  },
  {
    name: 'Cyprus',
    abbreviationTwo: 'CY',
    abbreviationThree: 'CYP',
  },
  {
    name: 'Czech Republic',
    abbreviationTwo: 'CZ',
    abbreviationThree: 'CZE',
  },
  {
    name: 'Denmark',
    abbreviationTwo: 'DK',
    abbreviationThree: 'DNK',
  },
  {
    name: 'Djibouti',
    abbreviationTwo: 'DJ',
    abbreviationThree: 'DJI',
  },
  {
    name: 'Dominica',
    abbreviationTwo: 'DM',
    abbreviationThree: 'DMA',
  },
  {
    name: 'Dominican Republic',
    abbreviationTwo: 'DO',
    abbreviationThree: 'DOM',
  },
  {
    name: 'DR Congo',
    abbreviationTwo: 'CD',
    abbreviationThree: 'COD',
  },
  {
    name: 'Ecuador',
    abbreviationTwo: 'EC',
    abbreviationThree: 'ECU',
  },
  {
    name: 'Egypt',
    abbreviationTwo: 'EG',
    abbreviationThree: 'EGY',
  },
  {
    name: 'El Salvador',
    abbreviationTwo: 'SV',
    abbreviationThree: 'SLV',
  },
  {
    name: 'Equatorial Guinea',
    abbreviationTwo: 'GQ',
    abbreviationThree: 'GNQ',
  },
  {
    name: 'Eritrea',
    abbreviationTwo: 'ER',
    abbreviationThree: 'ERI',
  },
  {
    name: 'Estonia',
    abbreviationTwo: 'EE',
    abbreviationThree: 'EST',
  },
  {
    name: 'Eswatini',
    abbreviationTwo: 'SZ',
    abbreviationThree: 'SWZ',
  },
  {
    name: 'Ethiopia',
    abbreviationTwo: 'ET',
    abbreviationThree: 'ETH',
  },
  {
    name: 'Fiji',
    abbreviationTwo: 'FJ',
    abbreviationThree: 'FJI',
  },
  {
    name: 'Finland',
    abbreviationTwo: 'FI',
    abbreviationThree: 'FIN',
  },
  {
    name: 'France',
    abbreviationTwo: 'FR',
    abbreviationThree: 'FRA',
  },
  {
    name: 'French Guiana',
    abbreviationTwo: 'GF',
    abbreviationThree: 'GUF',
  },
  {
    name: 'Gabon',
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
    name: 'Germany',
    abbreviationTwo: 'DE',
    abbreviationThree: 'DEU',
  },
  {
    name: 'Ghana',
    abbreviationTwo: 'GH',
    abbreviationThree: 'GHA',
  },
  {
    name: 'Greece',
    abbreviationTwo: 'GR',
    abbreviationThree: 'GRC',
  },
  {
    name: 'Greenland',
    abbreviationTwo: 'GL',
    abbreviationThree: 'GRL',
  },
  {
    name: 'Grenada',
    abbreviationTwo: 'GD',
    abbreviationThree: 'GRD',
  },
  {
    name: 'Guadeloupe',
    abbreviationTwo: 'GP',
    abbreviationThree: 'GLP',
  },
  {
    name: 'Guatemala',
    abbreviationTwo: 'GT',
    abbreviationThree: 'GTM',
  },
  {
    name: 'Guinea',
    abbreviationTwo: 'GN',
    abbreviationThree: 'GIN',
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
    name: 'Haiti',
    abbreviationTwo: 'HT',
    abbreviationThree: 'HTI',
  },
  {
    name: 'Honduras',
    abbreviationTwo: 'HN',
    abbreviationThree: 'HND',
  },
  {
    name: 'Hong Kong',
    abbreviationTwo: 'HK',
    abbreviationThree: 'HKG',
  },
  {
    name: 'Hungary',
    abbreviationTwo: 'HU',
    abbreviationThree: 'HUN',
  },
  {
    name: 'Iceland',
    abbreviationTwo: 'IS',
    abbreviationThree: 'ISL',
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
    name: 'Iran',
    abbreviationTwo: 'IR',
    abbreviationThree: 'IRN',
  },
  {
    name: 'Iraq',
    abbreviationTwo: 'IQ',
    abbreviationThree: 'IRQ',
  },
  {
    name: 'Ireland',
    abbreviationTwo: 'IE',
    abbreviationThree: 'IRL',
  },
  {
    name: 'Israel',
    abbreviationTwo: 'IL',
    abbreviationThree: 'ISR',
  },
  {
    name: 'Italy',
    abbreviationTwo: 'IT',
    abbreviationThree: 'ITA',
  },
  {
    name: 'Ivory Coast',
    abbreviationTwo: 'CI',
    abbreviationThree: 'CIV',
  },
  {
    name: 'Jamaica',
    abbreviationTwo: 'JM',
    abbreviationThree: 'JAM',
  },
  {
    name: 'Japan',
    abbreviationTwo: 'JP',
    abbreviationThree: 'JPN',
  },
  {
    name: 'Jordan',
    abbreviationTwo: 'JO',
    abbreviationThree: 'JOR',
  },
  {
    name: 'Kazakhstan',
    abbreviationTwo: 'KZ',
    abbreviationThree: 'KAZ',
  },
  {
    name: 'Kenya',
    abbreviationTwo: 'KE',
    abbreviationThree: 'KEN',
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
    name: 'Kyrgyzstan',
    abbreviationTwo: 'KG',
    abbreviationThree: 'KGZ',
  },
  {
    name: 'Laos',
    abbreviationTwo: 'LA',
    abbreviationThree: 'LAO',
  },
  {
    name: 'Latvia',
    abbreviationTwo: 'LV',
    abbreviationThree: 'LVA',
  },
  {
    name: 'Lebanon',
    abbreviationTwo: 'LB',
    abbreviationThree: 'LBN',
  },
  {
    name: 'Lesotho',
    abbreviationTwo: 'LS',
    abbreviationThree: 'LSO',
  },
  {
    name: 'Liberia',
    abbreviationTwo: 'LR',
    abbreviationThree: 'LBR',
  },
  {
    name: 'Libya',
    abbreviationTwo: 'LY',
    abbreviationThree: 'LBY',
  },
  {
    name: 'Liechtenstein',
    abbreviationTwo: 'LI',
    abbreviationThree: 'LIE',
  },
  {
    name: 'Lithuania',
    abbreviationTwo: 'LT',
    abbreviationThree: 'LTU',
  },
  {
    name: 'Luxembourg',
    abbreviationTwo: 'LU',
    abbreviationThree: 'LUX',
  },
  {
    name: 'Madagascar',
    abbreviationTwo: 'MG',
    abbreviationThree: 'MDG',
  },
  {
    name: 'Malawi',
    abbreviationTwo: 'MW',
    abbreviationThree: 'MWI',
  },
  {
    name: 'Malaysia',
    abbreviationTwo: 'MY',
    abbreviationThree: 'MYS',
  },
  {
    name: 'Maldives',
    abbreviationTwo: 'MV',
    abbreviationThree: 'MDV',
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
    name: 'Marshall Islands',
    abbreviationTwo: 'MH',
    abbreviationThree: 'MHL',
  },
  {
    name: 'Martinique',
    abbreviationTwo: 'MQ',
    abbreviationThree: 'MTQ',
  },
  {
    name: 'Mauritania',
    abbreviationTwo: 'MR',
    abbreviationThree: 'MRT',
  },
  {
    name: 'Mauritius',
    abbreviationTwo: 'MU',
    abbreviationThree: 'MUS',
  },
  {
    name: 'Mayotte',
    abbreviationTwo: 'YT',
    abbreviationThree: 'MYT',
  },
  {
    name: 'Mexico',
    abbreviationTwo: 'MX',
    abbreviationThree: 'MEX',
  },
  {
    name: 'Micronesia',
    abbreviationTwo: 'FM',
    abbreviationThree: 'FSM',
  },
  {
    name: 'Moldova',
    abbreviationTwo: 'MD',
    abbreviationThree: 'MDA',
  },
  {
    name: 'Monaco',
    abbreviationTwo: 'MC',
    abbreviationThree: 'MCO',
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
    name: 'Morocco',
    abbreviationTwo: 'MA',
    abbreviationThree: 'MAR',
  },
  {
    name: 'Mozambique',
    abbreviationTwo: 'MZ',
    abbreviationThree: 'MOZ',
  },
  {
    name: 'Myanmar',
    abbreviationTwo: 'MM',
    abbreviationThree: 'MMR',
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
    name: 'Netherlands',
    abbreviationTwo: 'NL',
    abbreviationThree: 'NLD',
  },
  {
    name: 'New Zealand',
    abbreviationTwo: 'NZ',
    abbreviationThree: 'NZL',
  },
  {
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
    name: 'North Korea',
    abbreviationTwo: 'KP',
    abbreviationThree: 'PRK',
  },
  {
    name: 'North Macedonia',
    abbreviationTwo: 'MK',
    abbreviationThree: 'MKD',
  },
  {
    name: 'Norway',
    abbreviationTwo: 'NO',
    abbreviationThree: 'NOR',
  },
  {
    name: 'Oman',
    abbreviationTwo: 'OM',
    abbreviationThree: 'OMN',
  },
  {
    name: 'Pakistan',
    abbreviationTwo: 'PK',
    abbreviationThree: 'PAK',
  },
  {
    name: 'Palau',
    abbreviationTwo: 'PW',
    abbreviationThree: 'PLW',
  },
  {
    name: 'Palestine',
    abbreviationTwo: 'PS',
    abbreviationThree: 'PSE',
  },
  {
    name: 'Panama',
    abbreviationTwo: 'PA',
    abbreviationThree: 'PAN',
  },
  {
    name: 'Papua New Guinea',
    abbreviationTwo: 'PG',
    abbreviationThree: 'PNG',
  },
  {
    name: 'Paraguay',
    abbreviationTwo: 'PY',
    abbreviationThree: 'PRY',
  },
  {
    name: 'Peru',
    abbreviationTwo: 'PE',
    abbreviationThree: 'PER',
  },
  {
    name: 'Philippines',
    abbreviationTwo: 'PH',
    abbreviationThree: 'PHL',
  },
  {
    name: 'Poland',
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
    name: 'Republic of the Congo',
    abbreviationTwo: 'CG',
    abbreviationThree: 'COG',
  },
  {
    name: 'Reunion',
    abbreviationTwo: 'RE',
    abbreviationThree: 'REU',
  },
  {
    name: 'Romania',
    abbreviationTwo: 'RO',
    abbreviationThree: 'ROU',
  },
  {
    name: 'Russia',
    abbreviationTwo: 'RU',
    abbreviationThree: 'RUS',
  },
  {
    name: 'Rwanda',
    abbreviationTwo: 'RW',
    abbreviationThree: 'RWA',
  },
  {
    name: 'Saint Kitts and Nevis',
    abbreviationTwo: 'KN',
    abbreviationThree: 'KNA',
  },
  {
    name: 'Saint Lucia',
    abbreviationTwo: 'LC',
    abbreviationThree: 'LCA',
  },
  {
    name: 'Saint Vincent and the Grenadines',
    abbreviationTwo: 'VC',
    abbreviationThree: 'VCT',
  },
  {
    name: 'Samoa',
    abbreviationTwo: 'WS',
    abbreviationThree: 'WSM',
  },
  {
    name: 'San Marino',
    abbreviationTwo: 'SM',
    abbreviationThree: 'SMR',
  },
  {
    name: 'Sao Tome and Principe',
    abbreviationTwo: 'ST',
    abbreviationThree: 'STP',
  },
  {
    name: 'Saudi Arabia',
    abbreviationTwo: 'SA',
    abbreviationThree: 'SAU',
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
    name: 'Sierra Leone',
    abbreviationTwo: 'SL',
    abbreviationThree: 'SLE',
  },
  {
    name: 'Singapore',
    abbreviationTwo: 'SG',
    abbreviationThree: 'SGP',
  },
  {
    name: 'Slovakia',
    abbreviationTwo: 'SK',
    abbreviationThree: 'SVK',
  },
  {
    name: 'Slovenia',
    abbreviationTwo: 'SI',
    abbreviationThree: 'SVN',
  },
  {
    name: 'Solomon Islands',
    abbreviationTwo: 'SB',
    abbreviationThree: 'SLB',
  },
  {
    name: 'Somalia',
    abbreviationTwo: 'SO',
    abbreviationThree: 'SOM',
  },
  {
    name: 'South Africa',
    abbreviationTwo: 'ZA',
    abbreviationThree: 'ZAF',
  },
  {
    name: 'South Korea',
    abbreviationTwo: 'KR',
    abbreviationThree: 'KOR',
  },
  {
    name: 'South Sudan',
    abbreviationTwo: 'SS',
    abbreviationThree: 'SSD',
  },
  {
    name: 'Spain',
    abbreviationTwo: 'ES',
    abbreviationThree: 'ESP',
  },
  {
    name: 'Sri Lanka',
    abbreviationTwo: 'LK',
    abbreviationThree: 'LKA',
  },
  {
    name: 'Sudan',
    abbreviationTwo: 'SD',
    abbreviationThree: 'SDN',
  },
  {
    name: 'Suriname',
    abbreviationTwo: 'SR',
    abbreviationThree: 'SUR',
  },
  {
    name: 'Sweden',
    abbreviationTwo: 'SE',
    abbreviationThree: 'SWE',
  },
  {
    name: 'Switzerland',
    abbreviationTwo: 'CH',
    abbreviationThree: 'CHE',
  },
  {
    name: 'Syria',
    abbreviationTwo: 'SY',
    abbreviationThree: 'SYR',
  },
  {
    name: 'Taiwan',
    abbreviationTwo: 'TW',
    abbreviationThree: 'TWN',
  },
  {
    name: 'Tajikistan',
    abbreviationTwo: 'TJ',
    abbreviationThree: 'TJK',
  },
  {
    name: 'Tanzania',
    abbreviationTwo: 'TZ',
    abbreviationThree: 'TZA',
  },
  {
    name: 'Thailand',
    abbreviationTwo: 'TH',
    abbreviationThree: 'THA',
  },
  {
    name: 'Timor-Leste',
    abbreviationTwo: 'TL',
    abbreviationThree: 'TLS',
  },
  {
    name: 'Togo',
    abbreviationTwo: 'TG',
    abbreviationThree: 'TGO',
  },
  {
    name: 'Tonga',
    abbreviationTwo: 'TO',
    abbreviationThree: 'TON',
  },
  {
    name: 'Trinidad and Tobago',
    abbreviationTwo: 'TT',
    abbreviationThree: 'TTO',
  },
  {
    name: 'Tunisia',
    abbreviationTwo: 'TN',
    abbreviationThree: 'TUN',
  },
  {
    name: 'Turkey',
    abbreviationTwo: 'TR',
    abbreviationThree: 'TUR',
  },
  {
    name: 'Turkmenistan',
    abbreviationTwo: 'TM',
    abbreviationThree: 'TKM',
  },
  {
    name: 'Tuvalu',
    abbreviationTwo: 'TV',
    abbreviationThree: 'TUV',
  },
  {
    name: 'Uganda',
    abbreviationTwo: 'UG',
    abbreviationThree: 'UGA',
  },
  {
    name: 'Ukraine',
    abbreviationTwo: 'UA',
    abbreviationThree: 'UKR',
  },
  {
    name: 'United Arab Emirates',
    abbreviationTwo: 'AE',
    abbreviationThree: 'ARE',
  },
  {
    name: 'United Kingdom',
    abbreviationTwo: 'GB',
    abbreviationThree: 'GBR',
  },
  {
    name: 'United States',
    abbreviationTwo: 'US',
    abbreviationThree: 'USA',
  },
  {
    name: 'Uruguay',
    abbreviationTwo: 'UY',
    abbreviationThree: 'URY',
  },
  {
    name: 'Uzbekistan',
    abbreviationTwo: 'UZ',
    abbreviationThree: 'UZB',
  },
  {
    name: 'Vanuatu',
    abbreviationTwo: 'VU',
    abbreviationThree: 'VUT',
  },
  {
    name: 'Vatican City',
    abbreviationTwo: 'VA',
    abbreviationThree: 'VAT',
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
    name: 'Western Sahara',
    abbreviationTwo: 'EH',
    abbreviationThree: 'ESH',
  },
  {
    name: 'Yemen',
    abbreviationTwo: 'YE',
    abbreviationThree: 'YEM',
  },
  {
    name: 'Zambia',
    abbreviationTwo: 'ZM',
    abbreviationThree: 'ZMB',
  },
  {
    name: 'Zimbabwe',
    abbreviationTwo: 'ZW',
    abbreviationThree: 'ZWE',
  },
];

export default countries;
