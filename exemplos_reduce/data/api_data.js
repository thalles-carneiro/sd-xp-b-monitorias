const acidAntId = 'bb2a76d8-5fe3-4d03-84b7-dba9cfc048b5';
const airElementalId = 'e8481c1d-42ea-4610-8e11-1752cfc05a46';

const emeryId = 'b0dc644a-5335-489b-8a2c-4e086c7819a2';

const scimitarId = '0938aa23-f153-4937-9f88-4858b24d6bce';
const clubId = '56d43ba3-a5a7-40f6-8dd7-cbb05082383f';
const lanceId = '9e7d4524-363c-416a-8759-8aa7e50c0992';

module.exports = {
  monsters: [
    {
      id: acidAntId,
      name: 'Acid Ant',
      size: 'Small',
      type: 'monstrosity',
      exp_by_defeating: 100,
      stats: {
        health_points: 13,
        strength: 8,
        dexterity: 13,
        constitution: 12,
        intelligence: 1,
        wisdom: 7,
        charisma: 3,
      },
      special_abilities: [
        {
          name: 'Explosive Death',
          damage: 10,
        },
        {
          name: 'Acid Spit',
          damage: 5,
        },
        {
          name: 'Bite',
          damage: 3,
        }
      ]
    },
    {
      id: '78460a91-f4da-4dea-a469-86fd2b8ccc84',
      name: 'Adult Black Dragon',
      size: 'Huge',
      type: 'dragon',
      exp_by_defeating: 500,
      stats: {
        health_points: 195,
        strength: 23,
        dexterity: 14,
        constitution: 21,
        intelligence: 14,
        wisdom: 13,
        charisma: 17,
      },
      special_abilities: [
        {
          name: 'Acid Breath',
          damage: 25,
        },
        {
          name: 'Tail',
          damage: 10,
        },
        {
          name: 'Bite',
          damage: 15,
        }
      ]
    },
    {
      id: airElementalId,
      name: 'Air Elemental',
      size: 'Large',
      type: 'elemental',
      exp_by_defeating: 250,
      stats: {
        health_points: 90,
        strength: 14,
        dexterity: 20,
        constitution: 14,
        intelligence: 6,
        wisdom: 10,
        charisma: 6,
      },
      special_abilities: [
        {
          name: 'Multiattack',
          damage: 15,
        },
        {
          name: 'Slam',
          damage: 7,
        },
      ]
    },
    {
      id: '533bebf3-6bbe-41d8-9cdf-46f7d13b62ae',
      name: 'Alabaster Tree',
      size: 'Huge',
      type: 'celestial',
      exp_by_defeating: 300,
      stats: {
        health_points: 105,
        strength: 20,
        dexterity: 10,
        constitution: 18,
        intelligence: 10,
        wisdom: 14,
        charisma: 10,
      },
      special_abilities: [
        {
          name: 'Cloud of Needles',
          damage: 20,
        },
        {
          name: 'Slam',
          damage: 12,
        },
        {
          name: 'Toss',
          damage: 16,
        },
      ]
    },
    {
      id: 'baa6e93a-f295-44e7-8f70-2bcdc6f6948d',
      name: 'Acolyte',
      size: 'Medium',
      type: 'humanoid',
      exp_by_defeating: 50,
      stats: {
        health_points: 9,
        strength: 10,
        dexterity: 10,
        constitution: 10,
        intelligence: 10,
        wisdom: 14,
        charisma: 11,
      },
      special_abilities: [
        {
          name: 'Spellcasting',
          damage: 8,
        },
        {
          name: 'Club',
          damage: 3,
        },
      ]
    },
  ],
  adventurers: [
    {
      id: 'c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1',
      name: 'Nigel Bethea',
      class: 'Barbarian',
      race: 'Human',
      weapons: [
        '89be95b3-47e4-4c5b-b687-1fabf2afa274',
        clubId,
      ],
      level: 5,
      defeatedMonsters: [acidAntId, airElementalId],
    },
    {
      id: 'fdb2543b-5662-46a7-badc-93d960fdc0a8',
      name: 'Wilburn Orloff',
      class: 'Druid',
      race: 'Elf',
      weapons: [scimitarId],
      level: 3,
      defeatedMonsters: [acidAntId],
    },
    {
      id: '4b40a139-d4dc-4f09-822d-ec25e819a5ad',
      name: 'Ardith Spry',
      class: 'Paladin',
      race: 'Dragonborn',
      weapons: [
        '0e7b460e-acf4-4e17-bcb3-ee472265db83',
        lanceId,
      ],
      level: 12,
      defeatedMonsters: [
        '533bebf3-6bbe-41d8-9cdf-46f7d13b62ae',
        '78460a91-f4da-4dea-a469-86fd2b8ccc84',
        airElementalId,
      ],
    },
    {
      id: emeryId,
      name: 'Emery Spry',
      class: 'Fighter',
      race: 'Dwarf',
      weapons: [
        '89be95b3-47e4-4c5b-b687-1fabf2afa274',
      ],
      level: 7,
      defeatedMonsters: [
        'baa6e93a-f295-44e7-8f70-2bcdc6f6948d',
        airElementalId,
      ],
    },
  ],
  weapons: [
    {
      id: '89be95b3-47e4-4c5b-b687-1fabf2afa274',
      name: 'Greataxe',
      category: 'Martial Melee Weapons',
      weight: '7 lb.',
      damage: 15,
      properties: [
        'heavy',
        'two-handed',
      ],
    },
    {
      id: scimitarId,
      name: 'Scimitar',
      category: 'Martial Melee Weapons',
      weight: '3 lb.',
      damage: 12,
      properties: [
        'finesse',
        'light',
      ],
    },
    {
      id: clubId,
      name: 'Club',
      category: 'Simple Melee Weapons',
      weight: '2 lb.',
      damage: 5,
      properties: [
        'light',
      ],
    },
    {
      id: '0e7b460e-acf4-4e17-bcb3-ee472265db83',
      name: 'Halberd',
      category: 'Martial Melee Weapons',
      weight: '6 lb.',
      damage: 18,
      properties: [
        'heavy',
        'reach',
        'two-handed',
      ],
    },
    {
      id: lanceId,
      name: 'Lance',
      category: 'Martial Melee Weapons',
      weight: '6 lb.',
      damage: 14,
      properties: [
        'reach',
        'special',
      ],
    },
  ],
};