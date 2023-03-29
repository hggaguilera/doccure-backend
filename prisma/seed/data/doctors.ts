import IDS from './_constants';

const doctors = [
  {
    firstName: 'Laiz',
    lastName: 'Medina',
    email: 'laiz.medina@msdental.com',
    isSystemUser: true,
    doctor: {
      create: {
        id: IDS.DOCTORS.LAIZ,
        prefix: 'BDS, DMD',
        specializations: {
          create: [
            {
              specialtyId: IDS.SPECIALTY.GENERAL_DENTISTRY,
            },
            {
              specialtyId: IDS.SPECIALTY.ORTHODONTIST,
            },
          ],
        },
      },
    },
  },
  {
    firstName: 'Erick',
    lastName: 'Collado',
    email: 'erick.collado@msdental.com',
    isSystemUser: true,
    doctor: {
      create: {
        id: IDS.DOCTORS.ERICK,
        prefix: 'BDS, DDS',
        specializations: {
          create: [
            {
              specialtyId: IDS.SPECIALTY.GENERAL_DENTISTRY,
            },
            {
              specialtyId: IDS.SPECIALTY.ENDODONTIST,
            },
          ],
        },
      },
    },
  },
  {
    firstName: 'Norma',
    lastName: 'Fuentes',
    email: 'norma.fuentes@msdental.com',
    isSystemUser: true,
    doctor: {
      create: {
        id: IDS.DOCTORS.NORMA,
        prefix: 'BDS, DDS',
        specializations: {
          create: [
            {
              specialtyId: IDS.SPECIALTY.GENERAL_DENTISTRY,
            },
            {
              specialtyId: IDS.SPECIALTY.COSMETIC_DENTISTRY,
            },
          ],
        },
      },
    },
  },
  {
    firstName: 'Josue',
    lastName: 'Munguia',
    email: 'josue.munguia@msdental.com',
    isSystemUser: true,
    doctor: {
      create: {
        id: IDS.DOCTORS.JOSUE,
        prefix: 'BDS, DDS',
        specializations: {
          create: [
            {
              specialtyId: IDS.SPECIALTY.GENERAL_DENTISTRY,
            },
            {
              specialtyId: IDS.SPECIALTY.PERIODONTIST,
            },
          ],
        },
      },
    },
  },
  {
    firstName: 'Marian',
    lastName: 'Somarriba',
    email: 'marian.somarriba@msdental.com',
    isSystemUser: true,
    doctor: {
      create: {
        id: IDS.DOCTORS.MARIAN,
        prefix: 'BDS, DMD',
        specializations: {
          create: [
            {
              specialtyId: IDS.SPECIALTY.GENERAL_DENTISTRY,
            },
            {
              specialtyId: IDS.SPECIALTY.ORAL_MEDICINE,
            },
            {
              specialtyId: IDS.SPECIALTY.COSMETIC_DENTISTRY,
            },
          ],
        },
      },
    },
  },
];

export default doctors;
