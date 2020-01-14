var greenLight = false;
var filtSetCells = [],
	filtSet = [];

function GreenLight() {
	var bonusPerks = [];
	if (greenLight == false) {
		for (j = 1; j < perkListLength.length; j++) {
			for (k = 0; k < perkListLength[j]; k++)
				bonusPerks.push({ stringID: String(j) + "_" + String(k), value: 2 });
		}
		greenLight = true;
		this.postMessage({ bonusPerks: bonusPerks });
	}
}
const sortMatrix = (a, b) => {
	for (let i = 0; i < a.length; ++i) {
		if (a[i] < b[i])
			return -1
		if (a[i] > b[i])
			return 1
	}
	return 0
}

function indexOfPerk(perkObject, list) {
	let listLength = list.length;
	for (let g = 0; g < listLength; g++) {
		if (perkObject.k == list[g].k && perkObject.j == list[g].j)
			return g;
	}
	return -1;
}
var lockBool = [];
var lock = [];

function checkLockbyID(WeaponOrArmor, g) {
	for (let i = 0; i < lock[g].length; i++)
		if (WeaponOrArmor.id == lock[g][i])
			return true;
	return false;
}
iweapon = [[{ id: 0, cell: [3, 1], perk: { j: 2, k: 1 } }, { id: 1, cell: [1, 4], perk: { j: 3, k: 0 } }, { id: 2, cell: [3, 4], perk: { j: 5, k: 1 } }, { id: 3, cell: [2, 4], perk: { j: 4, k: 6 } }, { id: 4, cell: [0, 0], perk: { j: 0, k: 0 } }, { id: 5, cell: [4, 5], perk: { j: 3, k: 7 } }, { id: 6, cell: [3, 3], perk: { j: 3, k: 4 } }, { id: 7, cell: [4, 2], perk: { j: 4, k: 4 } }, { id: 8, cell: [3, 5], perk: { j: 3, k: 8 } }, { id: 9, cell: [4, 5], perk: { j: 4, k: 10 } }, { id: 10, cell: [4, 1], perk: { j: 3, k: 3 } }, { id: 11, cell: [4, 1], perk: { j: 4, k: 0 } }, { id: 12, cell: [4, 3], perk: { j: 4, k: 5 } }, { id: 13, cell: [4, 5], perk: { j: 4, k: 12 } }, { id: 14, cell: [4, 2], perk: { j: 2, k: 1 } }, { id: 15, cell: [4, 5], perk: { j: 4, k: 5 } }, { id: 16, cell: [4, 1], perk: { j: 3, k: 3 } }, { id: 17, cell: [4, 2], perk: { j: 2, k: 5 } }, { id: 18, cell: [4, 2], perk: { j: 5, k: 1 } }, { id: 19, cell: [3, 5], perk: { j: 3, k: 0 } }], [{ id: 0, cell: [3, 1], perk: { j: 2, k: 1 } }, { id: 1, cell: [1, 3], perk: { j: 3, k: 0 } }, { id: 2, cell: [3, 1], perk: { j: 5, k: 1 } }, { id: 3, cell: [2, 3], perk: { j: 4, k: 6 } }, { id: 4, cell: [0, 0], perk: { j: 0, k: 0 } }, { id: 5, cell: [3, 5], perk: { j: 3, k: 7 } }, { id: 6, cell: [3, 3], perk: { j: 3, k: 4 } }, { id: 7, cell: [3, 4], perk: { j: 3, k: 1 } }, { id: 8, cell: [3, 5], perk: { j: 3, k: 8 } }, { id: 9, cell: [3, 5], perk: { j: 4, k: 10 } }, { id: 10, cell: [3, 1], perk: { j: 3, k: 3 } }, { id: 11, cell: [3, 1], perk: { j: 4, k: 0 } }, { id: 12, cell: [3, 2], perk: { j: 4, k: 5 } }, { id: 13, cell: [4, 5], perk: { j: 4, k: 12 } }, { id: 14, cell: [3, 2], perk: { j: 2, k: 1 } }, { id: 15, cell: [3, 5], perk: { j: 4, k: 5 } }, { id: 16, cell: [3, 1], perk: { j: 3, k: 3 } }, { id: 17, cell: [3, 2], perk: { j: 2, k: 5 } }, { id: 18, cell: [3, 2], perk: { j: 5, k: 4 } }, { id: 19, cell: [3, 5], perk: { j: 3, k: 0 } }], [{ id: 0, cell: [3, 1], perk: { j: 2, k: 1 } }, { id: 1, cell: [4, 1], perk: { j: 3, k: 0 } }, { id: 2, cell: [4, 3], perk: { j: 5, k: 1 } }, { id: 3, cell: [4, 2], perk: { j: 4, k: 6 } }, { id: 4, cell: [0, 0], perk: { j: 0, k: 0 } }, { id: 5, cell: [4, 5], perk: { j: 3, k: 7 } }, { id: 6, cell: [3, 3], perk: { j: 3, k: 4 } }, { id: 7, cell: [4, 2], perk: { j: 4, k: 4 } }, { id: 8, cell: [3, 5], perk: { j: 3, k: 8 } }, { id: 9, cell: [4, 5], perk: { j: 4, k: 2 } }, { id: 10, cell: [4, 1], perk: { j: 4, k: 11 } }, { id: 11, cell: [4, 1], perk: { j: 4, k: 0 } }, { id: 12, cell: [4, 3], perk: { j: 4, k: 5 } }, { id: 13, cell: [4, 5], perk: { j: 4, k: 12 } }, { id: 14, cell: [4, 2], perk: { j: 2, k: 1 } }, { id: 15, cell: [4, 5], perk: { j: 4, k: 5 } }, { id: 16, cell: [4, 1], perk: { j: 4, k: 11 } }, { id: 17, cell: [4, 2], perk: { j: 2, k: 5 } }, { id: 18, cell: [4, 2], perk: { j: 5, k: 4 } }, { id: 19, cell: [3, 5], perk: { j: 3, k: 0 } }], [{ id: 0, cell: [3, 1], perk: { j: 2, k: 1 } }, { id: 1, cell: [3, 1], perk: { j: 3, k: 0 } }, { id: 20, cell: [3, 1], perk: { j: 0, k: 0 } }, { id: 2, cell: [3, 1], perk: { j: 5, k: 1 } }, { id: 3, cell: [3, 2], perk: { j: 4, k: 6 } }, { id: 4, cell: [0, 0], perk: { j: 0, k: 0 } }, { id: 5, cell: [3, 5], perk: { j: 3, k: 7 } }, { id: 6, cell: [3, 3], perk: { j: 3, k: 4 } }, { id: 7, cell: [3, 4], perk: { j: 3, k: 1 } }, { id: 8, cell: [3, 5], perk: { j: 3, k: 8 } }, { id: 9, cell: [3, 5], perk: { j: 4, k: 10 } }, { id: 10, cell: [3, 1], perk: { j: 3, k: 3 } }, { id: 11, cell: [3, 1], perk: { j: 4, k: 0 } }, { id: 12, cell: [3, 2], perk: { j: 4, k: 5 } }, { id: 13, cell: [4, 5], perk: { j: 4, k: 12 } }, { id: 14, cell: [3, 2], perk: { j: 2, k: 1 } }, { id: 15, cell: [3, 5], perk: { j: 4, k: 5 } }, { id: 16, cell: [3, 1], perk: { j: 3, k: 3 } }, { id: 17, cell: [3, 2], perk: { j: 2, k: 5 } }, { id: 18, cell: [3, 2], perk: { j: 5, k: 1 } }, { id: 19, cell: [3, 5], perk: { j: 3, k: 0 } }], [{ id: 4, cell: [4, 2], perk: { j: 0, k: 0 } }, { id: 4, cell: [4, 2], perk: { j: 0, k: 0 } }], [{ id: 0, cell: [3, 1], perk: { j: 2, k: 1 } }, { id: 1, cell: [3, 1], perk: { j: 3, k: 0 } }, { id: 2, cell: [3, 5], perk: { j: 5, k: 1 } }, { id: 3, cell: [4, 2], perk: { j: 4, k: 6 } }, { id: 4, cell: [0, 0], perk: { j: 0, k: 0 } }, { id: 4, cell: [0, 0], perk: { j: 0, k: 0 } }, { id: 5, cell: [1, 5], perk: { j: 3, k: 7 } }, { id: 6, cell: [3, 3], perk: { j: 3, k: 4 } }, { id: 7, cell: [4, 2], perk: { j: 4, k: 4 } }, { id: 8, cell: [3, 5], perk: { j: 3, k: 8 } }, { id: 9, cell: [2, 5], perk: { j: 4, k: 2 } }, { id: 10, cell: [3, 1], perk: { j: 3, k: 3 } }, { id: 11, cell: [4, 1], perk: { j: 4, k: 0 } }, { id: 12, cell: [4, 5], perk: { j: 4, k: 5 } }, { id: 13, cell: [4, 5], perk: { j: 4, k: 12 } }, { id: 14, cell: [2, 2], perk: { j: 2, k: 1 } }, { id: 21, cell: [3, 5], perk: { j: 0, k: 0 } }, { id: 15, cell: [3, 5], perk: { j: 4, k: 5 } }, { id: 16, cell: [3, 1], perk: { j: 3, k: 3 } }, { id: 17, cell: [4, 2], perk: { j: 2, k: 5 } }, { id: 18, cell: [4, 2], perk: { j: 5, k: 4 } }, { id: 19, cell: [3, 5], perk: { j: 3, k: 0 } }], [{ id: 0, cell: [3, 1], perk: { j: 2, k: 1 } }, { id: 1, cell: [4, 1], perk: { j: 3, k: 0 } }, { id: 2, cell: [4, 3], perk: { j: 5, k: 1 } }, { id: 3, cell: [4, 2], perk: { j: 4, k: 6 } }, { id: 4, cell: [0, 0], perk: { j: 0, k: 0 } }, { id: 5, cell: [4, 5], perk: { j: 3, k: 7 } }, { id: 6, cell: [3, 3], perk: { j: 3, k: 4 } }, { id: 7, cell: [4, 2], perk: { j: 4, k: 4 } }, { id: 8, cell: [3, 5], perk: { j: 3, k: 8 } }, { id: 9, cell: [4, 5], perk: { j: 4, k: 2 } }, { id: 10, cell: [4, 1], perk: { j: 4, k: 11 } }, { id: 11, cell: [4, 1], perk: { j: 4, k: 0 } }, { id: 12, cell: [4, 3], perk: { j: 4, k: 5 } }, { id: 22, cell: [4, 3], perk: { j: 0, k: 0 } }, { id: 13, cell: [4, 5], perk: { j: 4, k: 12 } }, { id: 14, cell: [4, 2], perk: { j: 2, k: 1 } }, { id: 15, cell: [4, 5], perk: { j: 4, k: 5 } }, { id: 16, cell: [4, 1], perk: { j: 4, k: 11 } }, { id: 17, cell: [4, 2], perk: { j: 2, k: 5 } }, { id: 18, cell: [4, 2], perk: { j: 5, k: 4 } }, { id: 19, cell: [3, 5], perk: { j: 3, k: 0 } }], [{ id: 127, cell: [1, 3], perk: { j: 0, k: 0 } }, { id: 127, cell: [1, 4], perk: { j: 0, k: 0 } }, { id: 127, cell: [1, 5], perk: { j: 0, k: 0 } }, { id: 127, cell: [2, 2], perk: { j: 0, k: 0 } }, { id: 127, cell: [2, 3], perk: { j: 0, k: 0 } }, { id: 127, cell: [2, 4], perk: { j: 0, k: 0 } }, { id: 127, cell: [2, 5], perk: { j: 0, k: 0 } }, { id: 127, cell: [3, 3], perk: { j: 0, k: 0 } }, { id: 127, cell: [3, 4], perk: { j: 0, k: 0 } }, { id: 127, cell: [3, 5], perk: { j: 0, k: 0 } }, { id: 127, cell: [4, 5], perk: { j: 0, k: 0 } }]]; iarmor = [[{ id: 0, cell: 5, perk: { j: 2, k: 1 } }, { id: 20, cell: 1, perk: { j: 0, k: 0 } }, { id: 1, cell: 1, perk: { j: 1, k: 2 } }, { id: 2, cell: 3, perk: { j: 5, k: 1 } }, { id: 3, cell: 2, perk: { j: 4, k: 6 } }, { id: 4, cell: 0, perk: { j: 0, k: 0 } }, { id: 5, cell: 1, perk: { j: 1, k: 1 } }, { id: 6, cell: 4, perk: { j: 3, k: 7 } }, { id: 7, cell: 2, perk: { j: 1, k: 8 } }, { id: 8, cell: 4, perk: { j: 2, k: 0 } }, { id: 9, cell: 5, perk: { j: 5, k: 7 } }, { id: 10, cell: 3, perk: { j: 3, k: 3 } }, { id: 11, cell: 1, perk: { j: 4, k: 10 } }, { id: 12, cell: 4, perk: { j: 5, k: 3 } }, { id: 22, cell: 4, perk: { j: 0, k: 0 } }, { id: 13, cell: 5, perk: { j: 5, k: 1 } }, { id: 14, cell: 4, perk: { j: 2, k: 3 } }, { id: 15, cell: 3, perk: { j: 3, k: 6 } }, { id: 21, cell: 3, perk: { j: 0, k: 0 } }, { id: 16, cell: 1, perk: { j: 1, k: 11 } }, { id: 17, cell: 2, perk: { j: 2, k: 4 } }, { id: 18, cell: 4, perk: { j: 5, k: 4 } }, { id: 19, cell: 3, perk: { j: 5, k: 6 } }, { id: 127, cell: 1, perk: { j: 0, k: 0 } }, { id: 127, cell: 2, perk: { j: 0, k: 0 } }, { id: 127, cell: 3, perk: { j: 0, k: 0 } }, { id: 127, cell: 4, perk: { j: 0, k: 0 } }, { id: 127, cell: 5, perk: { j: 0, k: 0 } }], [{ id: 0, cell: 1, perk: { j: 3, k: 6 } }, { id: 1, cell: 5, perk: { j: 3, k: 0 } }, { id: 2, cell: 3, perk: { j: 5, k: 1 } }, { id: 3, cell: 2, perk: { j: 4, k: 6 } }, { id: 4, cell: 0, perk: { j: 0, k: 0 } }, { id: 5, cell: 1, perk: { j: 1, k: 11 } }, { id: 6, cell: 4, perk: { j: 4, k: 8 } }, { id: 7, cell: 4, perk: { j: 4, k: 4 } }, { id: 8, cell: 5, perk: { j: 4, k: 9 } }, { id: 9, cell: 1, perk: { j: 5, k: 7 } }, { id: 10, cell: 3, perk: { j: 1, k: 3 } }, { id: 11, cell: 4, perk: { j: 4, k: 10 } }, { id: 12, cell: 5, perk: { j: 4, k: 5 } }, { id: 13, cell: 5, perk: { j: 5, k: 3 } }, { id: 14, cell: 2, perk: { j: 2, k: 3 } }, { id: 15, cell: 3, perk: { j: 3, k: 6 } }, { id: 16, cell: 1, perk: { j: 1, k: 4 } }, { id: 17, cell: 2, perk: { j: 4, k: 1 } }, { id: 18, cell: 2, perk: { j: 5, k: 4 } }, { id: 19, cell: 3, perk: { j: 1, k: 7 } }, { id: 127, cell: 1, perk: { j: 0, k: 0 } }, { id: 127, cell: 2, perk: { j: 0, k: 0 } }, { id: 127, cell: 3, perk: { j: 0, k: 0 } }, { id: 127, cell: 4, perk: { j: 0, k: 0 } }, { id: 127, cell: 5, perk: { j: 0, k: 0 } }], [{ id: 0, cell: 3, perk: { j: 3, k: 6 } }, { id: 1, cell: 5, perk: { j: 3, k: 6 } }, { id: 2, cell: 5, perk: { j: 3, k: 8 } }, { id: 3, cell: 4, perk: { j: 1, k: 2 } }, { id: 4, cell: 0, perk: { j: 0, k: 0 } }, { id: 5, cell: 3, perk: { j: 3, k: 7 } }, { id: 6, cell: 3, perk: { j: 4, k: 8 } }, { id: 7, cell: 2, perk: { j: 2, k: 1 } }, { id: 8, cell: 3, perk: { j: 4, k: 6 } }, { id: 9, cell: 5, perk: { j: 5, k: 1 } }, { id: 10, cell: 1, perk: { j: 3, k: 3 } }, { id: 11, cell: 4, perk: { j: 4, k: 2 } }, { id: 12, cell: 4, perk: { j: 5, k: 3 } }, { id: 13, cell: 2, perk: { j: 2, k: 3 } }, { id: 14, cell: 2, perk: { j: 4, k: 11 } }, { id: 15, cell: 5, perk: { j: 5, k: 7 } }, { id: 16, cell: 1, perk: { j: 1, k: 3 } }, { id: 17, cell: 2, perk: { j: 1, k: 12 } }, { id: 18, cell: 2, perk: { j: 1, k: 6 } }, { id: 19, cell: 1, perk: { j: 5, k: 6 } }, { id: 127, cell: 1, perk: { j: 0, k: 0 } }, { id: 127, cell: 2, perk: { j: 0, k: 0 } }, { id: 127, cell: 3, perk: { j: 0, k: 0 } }, { id: 127, cell: 4, perk: { j: 0, k: 0 } }, { id: 127, cell: 5, perk: { j: 0, k: 0 } }], [{ id: 0, cell: 4, perk: { j: 1, k: 5 } }, { id: 1, cell: 3, perk: { j: 3, k: 6 } }, { id: 2, cell: 5, perk: { j: 2, k: 4 } }, { id: 3, cell: 1, perk: { j: 2, k: 3 } }, { id: 4, cell: 0, perk: { j: 0, k: 0 } }, { id: 5, cell: 3, perk: { j: 1, k: 11 } }, { id: 6, cell: 3, perk: { j: 1, k: 3 } }, { id: 7, cell: 3, perk: { j: 2, k: 1 } }, { id: 8, cell: 5, perk: { j: 4, k: 9 } }, { id: 9, cell: 1, perk: { j: 1, k: 6 } }, { id: 10, cell: 1, perk: { j: 1, k: 12 } }, { id: 11, cell: 4, perk: { j: 1, k: 8 } }, { id: 12, cell: 2, perk: { j: 2, k: 0 } }, { id: 13, cell: 2, perk: { j: 5, k: 3 } }, { id: 14, cell: 2, perk: { j: 1, k: 1 } }, { id: 15, cell: 5, perk: { j: 1, k: 7 } }, { id: 16, cell: 1, perk: { j: 1, k: 4 } }, { id: 17, cell: 5, perk: { j: 4, k: 1 } }, { id: 18, cell: 2, perk: { j: 5, k: 2 } }, { id: 19, cell: 5, perk: { j: 3, k: 0 } }, { id: 127, cell: 1, perk: { j: 0, k: 0 } }, { id: 127, cell: 2, perk: { j: 0, k: 0 } }, { id: 127, cell: 3, perk: { j: 0, k: 0 } }, { id: 127, cell: 4, perk: { j: 0, k: 0 } }, { id: 127, cell: 5, perk: { j: 0, k: 0 } }]]; perkListLength = [1, 13, 8, 9, 13, 11];

function search(indexPerk, indexPerkRank) {
	var fweapon = [];
	var farmor = [];
	var tempcell = [0, 0, 0, 0, 0, 0];
	var resetcell = [0, 0, 0, 0, 0, 0];
	var weaponLength = [];
	var armorLength = [];
	var isALL = [false, false, false, false, false];
	var farmorLength = [];
	var isBuild = true;
	var cellChecked = [false, false, false];
	filtSet = [];
	var tempcell = [0, 0, 0, 0, 0, 0];
	var tempscore = [0, 0, 0, 0, 0];
	var counter = 0;
	var score = 0;
	var totalScore = 0;
	var resetPerk = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
	var resetCell = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
	var resetScore = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
	tempperk = [];
	var weaponTypeLength = iweapon.length;
	for (i = 0; i < weaponTypeLength; i++)
		weaponLength.push(iweapon[i].length);
	var armorTypeLength = iarmor.length;
	for (i = 0; i < armorTypeLength; i++)
		armorLength.push(iarmor[i].length);
	for (i = 0; i < armorTypeLength; i++)
		farmor.push([]), cellChecked.push(false);
	var indexPerkLength = indexPerk.length;
	//add Empty
	for (j = 0; j < weaponTypeLength; j++)
		for (k = 0; k < weaponLength[j]; k++)
			if (iweapon[j][k].id == 127)
				fweapon.push({ e: j, f: k })
	for (j = 0; j < armorTypeLength; j++)
		for (k = 0; k < armorLength[j]; k++)
			if (iarmor[j][k].id == 127)
				farmor[j].push(k)
	//filter weapons/armors by locks
	for (h = 0; h < indexPerkLength; h++) {
		for (j = 0; j < weaponTypeLength; j++)
			for (k = 0; k < weaponLength[j]; k++)
				if (iweapon[j][k].perk.j == indexPerk[h].j && iweapon[j][k].perk.k == indexPerk[h].k)
					fweapon.push({ e: j, f: k })
		for (j = 0; j < armorTypeLength; j++)
			for (k = 0; k < armorLength[j]; k++)
				if (iarmor[j][k].perk.j == indexPerk[h].j && iarmor[j][k].perk.k == indexPerk[h].k)
					farmor[j].push(k)
	}
	//empty out filtered arrays with locks and replace with lock ids
	for (let i = 0; i < lock.length; i++) {
		if (lockBool[i] == true) {
			if (i == 0) //if lock on weapon type
			{
				fweapon.splice(0); //clear fweapons array
				//add locked item(s) to fweapons "type"
				for (let m = 0; m < lock[0].length; m++)
					for (k = 0; k < weaponLength[lock[0][m]]; k++)
						fweapon.push({ e: lock[0][m], f: k });
			}
			else if (i == 1) //if lock on weapon ID
			{
				fweapon.splice(0); //clear fweapons array
				//add locked item(s) to fweapons "ID"
				for (j = 0; j < weaponTypeLength; j++)
					for (k = 0; k < weaponLength[j]; k++)
						if (checkLockbyID(iweapon[j][k], 1))
							fweapon.push({ e: j, f: k });
			}
			else if (i > 1) //if lock on armor ID
			{
				farmor[i - 2].splice(0); //clear specifc farmor array
				//add locked item(s) to farmor
				for (k = 0; k < armorLength[i - 2]; k++) {
					if (checkLockbyID(iarmor[i - 2][k], i))
						farmor[i - 2].push(k);
				}
			}
		}
	}
	//if both weapon type and behemoth are locked, reset fweapons and add just the specific weapon
	if (lockBool[0] && lockBool[1]) {
		fweapon.splice(0);
		for (let m = 0; m < lock[0].length; m++)
			for (let k = 0; k < weaponLength[lock[0][m]]; k++)
				if (checkLockbyID(iweapon[lock[0][m]][k], 1))
					fweapon.push({ e: lock[0][m], f: k })
	}
	//Clone indexrank for resetting
	var resetperkrank = indexPerkRank.slice();
	//lengths for filtered list
	var fweaponLength = fweapon.length;
	for (i = 0; i < armorTypeLength; i++)
		farmorLength.push(farmor[i].length);
	//Check filtered lists for builds
	for (i = 0; i < indexPerkRank.length; i++)
		totalScore += indexPerkRank[i];
	score = 12 - totalScore;
	for (i = 0; i < indexPerkLength; i++)
		tempcell[indexPerk[i].j] += indexPerkRank[i];
	if (tempcell[5] > 0) {
		tempcell[5]--;
		score++;
	}
	for (i = 0; i < indexPerkRank.length; i++)
		tempperk.push(indexPerkRank[i]);
	this.console.time("search")
	if (legendaryWeapon)
		score += 2;
	//-----------------------------------------------------SEARCH!
	//-----------------------------------------------------SEARCH!
	//-----------------------------------------------------SEARCH!
	//-----------------------------------------------------SEARCH!
	//-----------------------------------------------------SEARCH!
	if (score > 11)
		GreenLight();
	for (e = 0; e < fweaponLength; e++) {
		tempscore[4] = score;
		for (h = 0; h < indexPerkLength; h++) {
			if (iweapon[fweapon[e].e][fweapon[e].f].perk.k == indexPerk[h].k && iweapon[fweapon[e].e][fweapon[e].f].perk.j == indexPerk[h].j) {
				if (tempcell[indexPerk[h].j] > 0 && tempperk[h] > 0)
					score++;
				tempcell[indexPerk[h].j]--;
				tempperk[h]--;
				resetCell[4] = indexPerk[h].j;
				resetPerk[4] = h;
				break;
			}
			else
				resetCell[4] = 0, resetPerk[4] = 20;
		}
		if (!legendaryWeapon) {
			if (tempcell[iweapon[fweapon[e].e][fweapon[e].f].cell[0]] > 0)
				score++;
			tempcell[iweapon[fweapon[e].e][fweapon[e].f].cell[0]]--;
			if (tempcell[iweapon[fweapon[e].e][fweapon[e].f].cell[1]] > 0)
				score++;
			tempcell[iweapon[fweapon[e].e][fweapon[e].f].cell[1]]--;
		}
		if (greenLight == false && score > 11)
			GreenLight();
		if (score > 3) {
			for (a = 0; a < farmorLength[0]; a++) {
				tempscore[0] = score;
				for (h = 0; h < indexPerkLength; h++) {
					if (iarmor[0][farmor[0][a]].perk.k == indexPerk[h].k && iarmor[0][farmor[0][a]].perk.j == indexPerk[h].j) {
						if (tempcell[indexPerk[h].j] > 0 && tempperk[h] > 0)
							score++;
						tempcell[indexPerk[h].j]--;
						tempperk[h]--;
						resetCell[0] = indexPerk[h].j;
						resetPerk[0] = h;
						break;
					}
					else
						resetCell[0] = 0, resetPerk[0] = 20;
				}
				if (tempcell[iarmor[0][farmor[0][a]].cell] > 0)
					score++;
				tempcell[iarmor[0][farmor[0][a]].cell]--;
				if (greenLight == false && score > 11)
					GreenLight();
				if (score > 5) {
					for (b = 0; b < farmorLength[1]; b++) {
						tempscore[1] = score;
						for (h = 0; h < indexPerkLength; h++) {
							if (iarmor[1][farmor[1][b]].perk.k == indexPerk[h].k && iarmor[1][farmor[1][b]].perk.j == indexPerk[h].j) {
								if (tempcell[indexPerk[h].j] > 0 && tempperk[h] > 0)
									score++;
								tempcell[indexPerk[h].j]--;
								tempperk[h]--;
								resetCell[1] = indexPerk[h].j;
								resetPerk[1] = h;
								break;
							}
							else
								resetCell[1] = 0, resetPerk[1] = 20;
						}
						if (tempcell[iarmor[1][farmor[1][b]].cell] > 0)
							score++;
						tempcell[iarmor[1][farmor[1][b]].cell]--;
						if (greenLight == false && score > 11)
							GreenLight();
						if (score > 7) {
							tempscore[2] = score;
							for (c = 0; c < farmorLength[2]; c++) {
								for (h = 0; h < indexPerkLength; h++) {
									if (iarmor[2][farmor[2][c]].perk.k == indexPerk[h].k && iarmor[2][farmor[2][c]].perk.j == indexPerk[h].j) {
										if (tempcell[indexPerk[h].j] > 0 && tempperk[h] > 0)
											score++;
										tempcell[indexPerk[h].j]--;
										tempperk[h]--;
										resetCell[2] = indexPerk[h].j;
										resetPerk[2] = h;
										break;
									}
									else
										resetCell[2] = 0, resetPerk[2] = 20;
								}
								if (tempcell[iarmor[2][farmor[2][c]].cell] > 0)
									score++;
								tempcell[iarmor[2][farmor[2][c]].cell]--;
								if (score > 9) {
									tempscore[3] = score;
									for (d = 0; d < farmorLength[3]; d++) {
										for (h = 0; h < indexPerkLength; h++) {
											if (iarmor[3][farmor[3][d]].perk.k == indexPerk[h].k && iarmor[3][farmor[3][d]].perk.j == indexPerk[h].j) {
												if (tempcell[indexPerk[h].j] > 0 && tempperk[h] > 0)
													score++;
												tempcell[indexPerk[h].j]--;
												tempperk[h]--;
												resetCell[3] = indexPerk[h].j;
												resetPerk[3] = h;
												break;
											}
											else
												resetCell[3] = 0, resetPerk[3] = 20;
										}
										if (tempcell[iarmor[3][farmor[3][d]].cell] > 0)
											score++;
										tempcell[iarmor[3][farmor[3][d]].cell]--;
										if (score > 11) {
											filtSet.push([farmor[0][a], farmor[1][b], farmor[2][c], farmor[3][d], fweapon[e].e, fweapon[e].f])
											counter++;
											//Test out using if(isALL[4] == false) break; at the end of the loop
										}
										score = tempscore[3];
										if (resetCell[3] != 0)
											tempcell[resetCell[3]]++;
										tempcell[iarmor[3][farmor[3][d]].cell]++;
										if (resetPerk[3] != 20)
											tempperk[resetPerk[3]]++;
									}
								}
								score = tempscore[2];
								if (resetCell[2] != 0)
									tempcell[resetCell[2]]++;
								tempcell[iarmor[2][farmor[2][c]].cell]++;
								if (resetPerk[2] != 20)
									tempperk[resetPerk[2]]++;
							}
						}
						score = tempscore[1];
						if (resetCell[1] != 0)
							tempcell[resetCell[1]]++;
						tempcell[iarmor[1][farmor[1][b]].cell]++;
						if (resetPerk[1] != 20)
							tempperk[resetPerk[1]]++;
					}
				}
				score = tempscore[0];
				if (resetCell[0] != 0)
					tempcell[resetCell[0]]++;
				tempcell[iarmor[0][farmor[0][a]].cell]++;
				if (resetPerk[0] != 20)
					tempperk[resetPerk[0]]++;
			}
		}
		score = tempscore[4];
		if (resetCell[4] != 0)
			tempcell[resetCell[4]]++;
		if (!legendaryWeapon) {
			tempcell[iweapon[fweapon[e].e][fweapon[e].f].cell[0]]++;
			tempcell[iweapon[fweapon[e].e][fweapon[e].f].cell[1]]++;
		}
		if (resetPerk[4] != 20)
			tempperk[resetPerk[4]]++;
	}
	filtSet = filtSet.sort(sortMatrix);
	this.console.timeEnd("search")
	this.console.time("bonuses")
	//Cell calculations----------------------
	//init variables
	var bonusCells = [],
		tempbonusCells = [];
	var bonusPerks = [],
		tempbonusPerkMat = [],
		tempbonusPerk;
	var matSizeCount = -1;
	var dbLinks = [];
	var filtSetLength = filtSet.length;
	var cellFilled = [];
	var setWidth = armorTypeLength + 3;
	var perkTypeLength = perkListLength.length;
	for (i = 0; i < setWidth; i++)
		cellFilled.push(false), tempbonusCells.push(0);
	for (i = 0; i < perkTypeLength; i++)
		bonusCells.push(0);
	for (i = 0; i < indexPerkLength; i++) {
		tempperk[i] = indexPerkRank[i];
	}
	var idk = 0;
	//calculate bonus perks if greenlight == false
	if (greenLight == false) {
		//generate bonusPerks array
		for (j = 1; j < perkListLength.length; j++) {
			for (k = 0; k < perkListLength[j]; k++)
				bonusPerks.push({ j: j, k: k, value: 0 })
		}
		//process cells
		for (let i = 0; i < filtSetLength; i++) {
			//init/reset
			filtSetCells.push([]);
			tempbonusPerkMat = [], tempbonusPerk = [];
			for (j = 0; j < setWidth; j++)
				filtSetCells[i].push({ j: 0, k: 0 }), cellFilled[j] = false, tempbonusCells[j] = 0;
			for (h = 0; h < indexPerkLength; h++)
				tempperk[h] = indexPerkRank[h];
			//calculate tempperk
			for (h = 0; h < indexPerkLength; h++) {
				//temperk weapon
				if (iweapon[filtSet[i][armorTypeLength]][filtSet[i][armorTypeLength + 1]].perk.k == indexPerk[h].k && iweapon[filtSet[i][armorTypeLength]][filtSet[i][armorTypeLength + 1]].perk.j == indexPerk[h].j)
					tempperk[h]--;
				for (j = 0; j < armorTypeLength; j++) {
					//temperk armor
					if (iarmor[j][filtSet[i][j]].perk.k == indexPerk[h].k && iarmor[j][filtSet[i][j]].perk.j == indexPerk[h].j)
						tempperk[h]--;
				}
			}
			//fill in cells
			for (h = 0; h < indexPerkLength; h++) {
				//fill armor cells
				for (j = 0; j < armorTypeLength; j++) {
					if (iarmor[j][filtSet[i][j]].cell == indexPerk[h].j && tempperk[h] > 0 && cellFilled[j] == false) {
						filtSetCells[i][j].j = indexPerk[h].j,
							filtSetCells[i][j].k = indexPerk[h].k,
							cellFilled[j] = true,
							tempperk[h]--;
					}
				}
				//fill weapon cells
				if (iweapon[filtSet[i][armorTypeLength]][filtSet[i][armorTypeLength + 1]].cell[0] == indexPerk[h].j && tempperk[h] > 0 && cellFilled[armorTypeLength] == false) {
					filtSetCells[i][armorTypeLength].j = indexPerk[h].j,
						filtSetCells[i][armorTypeLength].k = indexPerk[h].k,
						cellFilled[armorTypeLength] = true;
					tempperk[h]--;
				}
				if (iweapon[filtSet[i][armorTypeLength]][filtSet[i][armorTypeLength + 1]].cell[1] == indexPerk[h].j && tempperk[h] > 0 && cellFilled[armorTypeLength + 1] == false) {
					filtSetCells[i][armorTypeLength + 1].j = indexPerk[h].j,
						filtSetCells[i][armorTypeLength + 1].k = indexPerk[h].k,
						cellFilled[armorTypeLength + 1] = true,
						tempperk[h]--;
				}
				//fill lantern cells
				if (5 == indexPerk[h].j && tempperk[h] > 0 && cellFilled[armorTypeLength + 2] == false)
					filtSetCells[i][armorTypeLength + 2].j = indexPerk[h].j,
						filtSetCells[i][armorTypeLength + 2].k = indexPerk[h].k,
						cellFilled[armorTypeLength + 2] = true,
						tempperk[h]--;
			}
			//bonus cells from armor
			for (j = 0; j < armorTypeLength; j++) {
				if (cellFilled[j] == false) {
					tempbonusCells[iarmor[j][filtSet[i][j]].cell]++;
					if (bonusCells[iarmor[j][filtSet[i][j]].cell] < tempbonusCells[iarmor[j][filtSet[i][j]].cell])
						bonusCells[iarmor[j][filtSet[i][j]].cell] = tempbonusCells[iarmor[j][filtSet[i][j]].cell]
				}
			}
			//bonus cells from weapon 1
			if (cellFilled[armorTypeLength] == false) {
				tempbonusCells[iweapon[filtSet[i][armorTypeLength]][filtSet[i][armorTypeLength + 1]].cell[0]]++;
				if (bonusCells[iweapon[filtSet[i][armorTypeLength]][filtSet[i][armorTypeLength + 1]].cell[0]] < tempbonusCells[iweapon[filtSet[i][armorTypeLength]][filtSet[i][armorTypeLength + 1]].cell[0]]) {
					bonusCells[iweapon[filtSet[i][armorTypeLength]][filtSet[i][armorTypeLength + 1]].cell[0]] = tempbonusCells[iweapon[filtSet[i][armorTypeLength]][filtSet[i][armorTypeLength + 1]].cell[0]]
				}
			}
			//bonus cells from weapon 2
			if (cellFilled[armorTypeLength + 1] == false) {
				tempbonusCells[iweapon[filtSet[i][armorTypeLength]][filtSet[i][armorTypeLength + 1]].cell[1]]++;
				if (bonusCells[iweapon[filtSet[i][armorTypeLength]][filtSet[i][armorTypeLength + 1]].cell[1]] < tempbonusCells[iweapon[filtSet[i][armorTypeLength]][filtSet[i][armorTypeLength + 1]].cell[1]]) {
					bonusCells[iweapon[filtSet[i][armorTypeLength]][filtSet[i][armorTypeLength + 1]].cell[1]] = tempbonusCells[iweapon[filtSet[i][armorTypeLength]][filtSet[i][armorTypeLength + 1]].cell[1]]
				}
			}
			//bonus cells from lantern
			if (cellFilled[armorTypeLength + 2] == false) {
				tempbonusCells[5]++;
				if (tempbonusCells[5] > bonusCells[5])
					bonusCells[5] = tempbonusCells[5]
			}
			//bonus perks calc
			//generate bonusPerkmat
			//armor bonusperkmat
			for (j = 0; j < armorTypeLength; j++) {
				if (iarmor[j][filtSet[i][j]].id == 127) {
					for (k = 0; k < armorLength[j]; k++) {
						if (iarmor[j][k].cell == iarmor[j][filtSet[i][j]].cell && (iarmor[j][k].perk.j != 0 && iarmor[j][k].perk.k != 0))
							tempbonusPerkMat.push([iarmor[j][k].perk.j, iarmor[j][k].perk.k, j]);
					}
				}
				else {
					tempbonusPerkMat.push([iarmor[j][filtSet[i][j]].perk.j, iarmor[j][filtSet[i][j]].perk.k, j]);
				}
			}
			//weapon bonusperkmat
			if (iweapon[filtSet[i][armorTypeLength]][filtSet[i][armorTypeLength + 1]].id == 127) {
				for (j = 0; j < weaponTypeLength; j++) {
					for (k = 0; k < weaponLength[j]; k++) {
						if (((iweapon[filtSet[i][armorTypeLength]][filtSet[i][armorTypeLength + 1]].cell[0] == iweapon[j][k].cell[0] && iweapon[filtSet[i][armorTypeLength]][filtSet[i][armorTypeLength + 1]].cell[1] == iweapon[j][k].cell[1]) || (iweapon[filtSet[i][armorTypeLength]][filtSet[i][armorTypeLength + 1]].cell[1] == iweapon[j][k].cell[0] && iweapon[filtSet[i][armorTypeLength]][filtSet[i][armorTypeLength + 1]].cell[0] == iweapon[j][k].cell[1])) && (iweapon[j][k].perk.j != 0 && iweapon[j][k].perk.k != 0)) {
							tempbonusPerkMat.push([iweapon[j][k].perk.j, iweapon[j][k].perk.k, 5]);
						}
					}
				}
			}
			else {
				//add weapon innate perk to bonusPerks
				tempbonusPerkMat.push([iweapon[filtSet[i][armorTypeLength]][filtSet[i][armorTypeLength + 1]].perk.j, iweapon[filtSet[i][armorTypeLength]][filtSet[i][armorTypeLength + 1]].perk.k, 5]);
			}
			//sort for more managable matrix
			tempbonusPerkMat.sort(sortMatrix)
			//filter out weapon dupes
			//tally tempbonusPerksmat and tempbonuscells
			let tempbonusPerkMatLength = tempbonusPerkMat.length;
			let tempbonusPerkMatLengthless1 = tempbonusPerkMat.length - 1;
			if (tempbonusPerkMat[0] != undefined) {
				let k = -1;
				for (j = 0; j < tempbonusPerkMatLength; j++) {
					if (j < tempbonusPerkMatLengthless1 && tempbonusPerkMat[j][1] == tempbonusPerkMat[j + 1][1] && tempbonusPerkMat[j][0] == tempbonusPerkMat[j + 1][0] && tempbonusPerkMat[j + 1][2] != tempbonusPerkMat[j][2]) {
						tempbonusPerk.push({ j: tempbonusPerkMat[j][0], k: tempbonusPerkMat[j][1], value: 2 });
						j++ , k++;
					}
					else {
						tempbonusPerk.push({ j: tempbonusPerkMat[j][0], k: tempbonusPerkMat[j][1], value: 1 });
						k++;
						tempbonusPerk[k].value += tempbonusCells[tempbonusPerk[k].j]; //add tempBonusCells
					}
					if (tempbonusPerk[k].j != 0 && tempbonusPerk[k].k != 0) {
						let indexOfBonusPerk = indexOfPerk(tempbonusPerk[k], bonusPerks)
						if (bonusPerks[indexOfBonusPerk].value < tempbonusPerk[k].value)
							bonusPerks[indexOfBonusPerk].value = tempbonusPerk[k].value;
					}
				}
			}
		}
		//tally bonusCells to bonusPerks and convert	bonusPerks to stringIDs
		var bonusPerksStringID = [];
		for (let i = 0, bonusPerksLength = bonusPerks.length; i < bonusPerks.length; i++) {
			if (bonusPerks[i].value < bonusCells[bonusPerks[i].j])
				bonusPerks[i].value = bonusCells[bonusPerks[i].j];
			bonusPerksStringID.push({ stringID: String(bonusPerks[i].j) + "_" + String(bonusPerks[i].k), value: bonusPerks[i].value })
		}
		//send to main UI thread
		this.postMessage({ bonusPerks: bonusPerksStringID })
	}
}

function ExpandfiltSetelem(filtSetelem, processIndex) {
	let tempSet = [];
	let tempelem;
	let filtSetelemLength = filtSetelem.length;
	if (processIndex == armorTypeLength) {
		for (let i = 0; i < filtSetelemLength; i++) {
			for (let j = 0; j < weaponTypeLength; j++) {
				for (let k = 0; k < weaponLength[j]; k++) {
					// weaponTypeLength-1 should be == filtSetelem[i][armorTypeLength
					if (((iweapon[j][k].cell[0] == iweapon[filtSetelem[i][armorTypeLength]][filtSetelem[i][armorTypeLength + 1]].cell[0] && iweapon[j][k].cell[1] == iweapon[filtSetelem[i][armorTypeLength]][filtSetelem[i][armorTypeLength + 1]].cell[1]) || (iweapon[j][k].cell[1] == iweapon[filtSetelem[i][armorTypeLength]][filtSetelem[i][armorTypeLength + 1]].cell[0] && iweapon[j][k].cell[0] == iweapon[filtSetelem[i][armorTypeLength]][filtSetelem[i][armorTypeLength + 1]].cell[1])) && iweapon[j][k].id != 127) {
						tempelem = filtSetelem[i].slice();
						tempelem[armorTypeLength] = j;
						tempelem[armorTypeLength + 1] = k;
						tempSet.push(tempelem)
					}
				}
			}
		}
	}
	else {
		for (let i = 0; i < filtSetelemLength; i++) {
			for (let j = 0; j < armorLength[processIndex]; j++) {
				if (iarmor[processIndex][filtSetelem[i][processIndex]].cell == iarmor[processIndex][j].cell && iarmor[processIndex][j].id != 127) {
					tempelem = filtSetelem[i].slice();
					tempelem[processIndex] = j;
					tempSet.push(tempelem);
				}
			}
		}
	}
	return tempSet;
}

function ExpandRecursivefiltSetelem(filtSetelem, processIndexarray) {
	let processIndexarrayLength = processIndexarray.length;
	let tempSet = ExpandfiltSetelem(filtSetelem, processIndexarray[0]);
	for (let i = 1; i < processIndexarrayLength; i++)
		tempSet = ExpandfiltSetelem(tempSet, processIndexarray[i]);
	return tempSet;
}
const sortFunction = (a, b) => {
	let iMax = a.length;
	for (let i = 0; i < iMax; i++) {
		if (a[i] < b[i])
			return -1
		else
			return 1
	}
	return 0
}

function processFiltSetelem(i) {
	let cellFilled = [],
		processIndex = [],
		isSet = true;
	if (greenLight == true) {
		//generate cell array for set    
		//init/reset
		filtSetCells.push([]);
		tempbonusPerkMat = [], tempbonusPerk = [];
		for (j = 0; j < setWidth; j++)
			filtSetCells[i].push({ j: 0, k: 0 }), cellFilled[j] = false;
		for (h = 0; h < indexPerkLength; h++)
			tempperk[h] = indexPerkRank[h];
		//fill cell slots    //calculate tempperk
		for (h = 0; h < indexPerkLength; h++) {
			//temperk weapon
			if (iweapon[filtSet[i][armorTypeLength]][filtSet[i][armorTypeLength + 1]].perk.k == indexPerk[h].k && iweapon[filtSet[i][armorTypeLength]][filtSet[i][armorTypeLength + 1]].perk.j == indexPerk[h].j)
				tempperk[h]--;
			for (j = 0; j < armorTypeLength; j++) {
				//temperk armor
				if (iarmor[j][filtSet[i][j]].perk.k == indexPerk[h].k && iarmor[j][filtSet[i][j]].perk.j == indexPerk[h].j)
					tempperk[h]--;
			}
		}
		//fill in cells
		for (h = 0; h < indexPerkLength; h++) {
			//fill armor cells
			for (j = 0; j < armorTypeLength; j++) {
				if (iarmor[j][filtSet[i][j]].cell == indexPerk[h].j && tempperk[h] > 0 && cellFilled[j] == false) {
					filtSetCells[i][j].j = indexPerk[h].j,
						filtSetCells[i][j].k = indexPerk[h].k,
						cellFilled[j] = true,
						tempperk[h]--;
				}
			}
			//fill weapon cells
			if (iweapon[filtSet[i][armorTypeLength]][filtSet[i][armorTypeLength + 1]].cell[0] == indexPerk[h].j && tempperk[h] > 0 && cellFilled[armorTypeLength] == false) {
				filtSetCells[i][armorTypeLength].j = indexPerk[h].j,
					filtSetCells[i][armorTypeLength].k = indexPerk[h].k,
					cellFilled[armorTypeLength] = true;
				tempperk[h]--;
			}
			if (iweapon[filtSet[i][armorTypeLength]][filtSet[i][armorTypeLength + 1]].cell[1] == indexPerk[h].j && tempperk[h] > 0 && cellFilled[armorTypeLength + 1] == false) {
				filtSetCells[i][armorTypeLength + 1].j = indexPerk[h].j,
					filtSetCells[i][armorTypeLength + 1].k = indexPerk[h].k,
					cellFilled[armorTypeLength + 1] = true,
					tempperk[h]--;
			}
			//fill lantern cells
			if (5 == indexPerk[h].j && tempperk[h] > 0 && cellFilled[armorTypeLength + 2] == false)
				filtSetCells[i][armorTypeLength + 2].j = indexPerk[h].j,
					filtSetCells[i][armorTypeLength + 2].k = indexPerk[h].k,
					cellFilled[armorTypeLength + 2] = true,
					tempperk[h]--;
		}
	}
	//generate processIndex armor
	for (let j = 0; j < armorTypeLength; j++)
		if (iarmor[j][filtSet[i][j]].id == 127)
			isSet = false, processIndex.push(j)
	//generate processIndex weapon
	if (iweapon[filtSet[i][armorTypeLength]][filtSet[i][armorTypeLength + 1]].id == 127) {
		isSet = false, processIndex.push(armorTypeLength);
	}
	//process set
	if (isSet == false)
		saveSet = { id: ExpandRecursivefiltSetelem([filtSet[i]], processIndex), cell: filtSetCells[i] };
	else
		saveSet = { id: [filtSet[i]], cell: filtSetCells[i] };
	//sort and post message
	if (saveSet.id.length > 1 && saveSet.id[0][0] != undefined) {
		saveSet.id = saveSet.id.sort(sortFunction);
		//this.postMessage({bonusPerks:bonusPerks,bonusCells:bonusCells,saveSet:saveSet});
	}
	//reset
	processIndex.splice(0), isSet = true;
	return saveSet;
}
var legendaryWeapon = false;
var indexPerk, indexPerkRank;
var filtSetCount = 0,
	filtSetLength = 0;
var cacheSet = [],
	cacheSetCount = 0,
	cacheSetLength = 0,
	setCount = 0;
//lengths
var indexPerkLength;
var weaponLength = [];
var armorLength = [];
var setWidth = iarmor.length + 3;
var armorTypeLength = iarmor.length;
var weaponTypeLength = iweapon.length;
for (i = 0; i < weaponTypeLength; i++)
	weaponLength.push(iweapon[i].length);
var armorTypeLength = iarmor.length;
for (i = 0; i < armorTypeLength; i++)
	armorLength.push(iarmor[i].length);
this.onmessage = function (e) {
	if (e.data.indexPerk != undefined) {
		//reset
		indexPerk = e.data.indexPerk;
		indexPerkRank = e.data.indexPerkRank;
		indexPerkLength = indexPerk.length;
		legendaryWeapon = e.data.legendaryWeapon;
		lock = e.data.lock;
		if (lock != -1) //generate lockbool array
		{
			for (i = 0; i < lock.length; i++) {
				if (lock[i].length > 0)
					lockBool.push(true);
				else
					lockBool.push(false);
			}
		}
		else //generate lock bool array with all false if no locks exist
			for (i = 0; i < setWidth.length; i++)
				lockBool.push(false);
		greenLight = false;
		filtSetCells = [];
		filtSet = [];
		labelCount = 0;
		//search
		search(indexPerk, indexPerkRank, lock);
		filtSetLength = filtSet.length;
		cacheSet = processFiltSetelem(filtSetCount);
		cacheSetLength = cacheSet.id.length;
		filtSetCount++;
		this.postMessage({ set: { id: cacheSet.id[cacheSetCount], cell: cacheSet.cell } });
		cacheSetCount++;
	}
	if (e.data == -23) //main thread asked for more list
	{
		if (filtSetCount < filtSetLength && setCount < 100) {
			if (cacheSetCount < cacheSetLength && setCount < 100) {
				this.postMessage({ set: { id: cacheSet.id[cacheSetCount], cell: cacheSet.cell } });
				cacheSetCount++;
				setCount++;
			}
			else {
				cacheSetCount = 0;
				cacheSet = processFiltSetelem(filtSetCount);
				cacheSetLength = cacheSet.id.length - 3;
				filtSetCount++;
				this.postMessage({ set: { id: cacheSet.id[cacheSetCount], cell: cacheSet.cell } });
				cacheSetCount++;
			}
		}
		else
			self.close();
	}
}