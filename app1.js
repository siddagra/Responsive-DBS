
console.time("Database parsing");
var request = new XMLHttpRequest();
request.open("GET", "dauntless-builder-data-fr-translated-V.3.json", false);
request.send(null);
var data = JSON.parse(request.responseText);


function groupBy(array, property) {
    return array.reduce(function (rv, x) {
        (rv[x[property]] = rv[x[property]] || []).push(x);
        return rv;
    }, {});
};

function objectToArray(object) {
    return Object.keys(object).map(i => object[i]);
}

const idList =
    [
        'Boreus',
        'Charrogg',
        'Drask',
        'Embermane',
        'Recrue',
        'Gnasher',
        'Hellion',
        'Kharabak',
        'Koshai',
        'Nayzaga',
        'Pangar',
        'Quillshot',
        'Rezakiri',
        'Riftstalker',
        'Shrike',
        'Shrowd',
        'Skarn',
        'Skraev',
        'Stormclaw',
        'Valomyr',
        'Charrogg Exotic',
        'Shrowd Exotic',
        'Rezakiri Exotic'
    ];
const cellType =
    [
        'Aucune',
        'Défense',
        'Mobilité',
        'Puissance',
        'Technique',
        'Utilitaire'
    ];
const perkList = [];
for (let i = 0; i < cellType.length; i++) {
    perkList.push([]);
}
for (const key in data.perks) {
    let perk = data.perks[key];
    perkList[cellType.indexOf(perk.type)].push(perk);
}
perkList[0].push(
    {
        name: 'Aucun',
        index: 0,
        type: {
            name: 'Aucun',
            index: 0
        },
        description: 'Pas d\'effet.',
        key: 'no_effect',
        effect: [
            {
                description: 'Pas d\'effet.',
                value: 0
            },
            {
                description: 'Pas d\'effet.',
                value: 0
            },
            {
                description: 'Pas d\'effet.',
                value: 0
            },
            {
                description: 'Pas d\'effet.',
                value: 0
            },
            {
                description: 'Pas d\'effet.',
                value: 0
            },
            {
                description: 'Pas d\'effet.',
                value: 0
            }
        ],
        map: 0,
        DBmap: 0
    }
);

let armorType = [
    "Tête",
    "Torse",
    "Bras",
    "Jambes"
];
const head = [], torso = [], legs = [], arms = [];
const armorType = [];
for (const key in data.armours) {
    let armor = data.armours[key];

    //armor perks and id
    if (armor.perks)
        armor.perk = armor.perks[0].name;
    else
        armor.perk = "None";
    armor.id = armor.icon.split("/")[4];

    //fit in appropriate array
    switch (armor.type) {
        case "Head":
        case "Tête":
            head.push(armor);
            break;
        case "Torso":
        case "Torse":
            torso.push(armor);
            break;
        case "Arms":
        case "Bras":
            legs.push(armor);
            break;
        case "Legs":
        case "Jambes":
            arms.push(armor);
            break;
    }
}
const weapon = [];
const weaponType =
    [
        'Cestes aethériques',
        'Hache',
        'Chaînes-lames',
        'Marteau',
        'Répéteurs',
        'Épée',
        'Aetherolance'
    ]
for (i = 0; i < weaponType.length; i++)
    weapon.push([]);
for (const key in data.weapons) {
    let weaponObj = data.weapons[key];

    //weapon perks and id
    if (weaponObj.perks)
        weaponObj.perk = weaponObj.perks[0].name;
    else
        weaponObj.perk = "None";
    weaponObj.id = weaponObj.icon.split("/")[4];

    weapon[weaponType.indexOf(weaponObj.type)].push(weaponObj);
}


var request = new XMLHttpRequest();
request.open("GET", "js/database-fr.json", false);
request.send(null);
var DBSdata = JSON.parse(request.responseText);

for (let i = 0; i < perkList.length; i++)
    for (let j = 0; j < perkList[i].length; j++)
        perkList[i][j].DBmap = DBSdata.perkList[i][j].DBmap;

for (let i = 0; i < weapon.length; i++)
    for (let j = 0; j < weapon[i].length; j++)
        weapon[i][j].DBmap = DBSdata.weapon[i][j].DBmap;

for (let i = 0; i < head.length; i++)
    head[i].DBmap = DBSdata.head[i].DBmap;
for (let i = 0; i < torso.length; i++)
    torso[i].DBmap = DBSdata.torso[i].DBmap;
for (let i = 0; i < legs.length; i++)
    legs[i].DBmap = DBSdata.legs[i].DBmap;
for (let i = 0; i < arms.length; i++)
    arms[i].DBmap = DBSdata.arms[i].DBmap;

console.log(JSON.stringify({ perkList: perkList, cellType: cellType, idList: idList, armorType: armorType, weaponType: weaponType, weapon: weapon, head: head, torso: torso, arms: arms, legs: legs }))
console.timeEnd("Database parsing");

