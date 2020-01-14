//set appropirate website scale
//window.addEventListener("resize", windowResize);
function windowResize()
{
	document.getElementsByTagName("html")[0].style.zoom = window.innerWidth / 1920;
}
windowResize();
//initialize sliding tabs
window.addEventListener("DOMContentLoaded", () =>
{
	let slidingTabsLists = document.getElementsByClassName("sliding-tabs");
	for (let n = 0; n < slidingTabsLists.length; n++)
	{
		let navWrapper = slidingTabsLists[n].getElementsByClassName("navWrapper")[0];
		let tabList = navWrapper.getElementsByTagName("a");
		let selector = navWrapper.getElementsByClassName("selector")[0];
		let activeTab = navWrapper.getElementsByClassName("active")[0];
		selector.style.left = activeTab.offsetLeft + "px";
		selector.style.width = activeTab.clientWidth + "px";
		for (let i = 0; i < tabList.length; i++)
			tabList[i].addEventListener("click", function(e)
			{
				e.preventDefault();
				setActiveTab(document.getElementById(e.target.href.split("#")[1]));
				updateTabSelector(e.target);
			});

		function updateTabSelector(targetTab)
		{
			activeTab.classList.remove("active");
			activeTab = targetTab;
			activeTab.classList.add("active");
			selector.style.left = activeTab.offsetLeft + "px";
			selector.style.width = activeTab.clientWidth + "px";
		}

		function setActiveTab(targetTab)
		{
			let slider = slidingTabsLists[n].getElementsByClassName("slider")[0];
			slider.scroll(targetTab.offsetLeft, 0);
		}
		let observer = new IntersectionObserver(
			function(entries, observer)
			{
				entries.forEach(entry =>
				{
					if (entry.isIntersecting)
					{
						for (let i = 0; i < tabList.length; i++)
						{
							if (tabList[i].href.split("#")[1] == entry.target.id)
							{
								updateTabSelector(tabList[i]);
							}
						}
					}
				});
			}, { root: slidingTabsLists[n].getElementsByClassName("slider")[0], threshold: 0.8 }
		);
		let slideList = document.getElementsByClassName("slide");
		for (i = 0; i < slideList.length; i++) observer.observe(slideList[i]);
	}
});
//add event listeners
//Perk Buttons
var perkButtonIdList = [];
perkButtonIdList.push("");
var perkButtonElems = document.querySelectorAll(".PerkButton");
for (let i = 0; i < perkButtonElems.length; i++)
{
	perkButtonElems[i].addEventListener("click", PerkClicked);
	perkButtonIdList.push(perkButtonElems[i].id);
}
//Lock Checkboxes
var LockCheckboxIdList = [];
LockCheckboxIdList.push("");
var LockCheckboxElems = document.querySelectorAll(".LockCheckbox");
for (let i = 0; i < LockCheckboxElems.length; i++)
{
	LockCheckboxElems[i].addEventListener("click", function(event)
	{
		if (event.target.id == "LockCheckbox 1_9")
			document.getElementById("MalkarionWeapon").click();
	});
	LockCheckboxElems[i].addEventListener("click", EmployWorkers);
	LockCheckboxIdList.push(LockCheckboxElems[i].id);
}
//query string variables
var urlVersion;
var urlRanks = [];
var urlPerks = [];
var urlLocks = [];
const encodingChars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-~";
//query string encoder
function encode(multArray, baseTo = encodingChars.length)
{
	let string = "1";
	for (let h = 0; h < multArray.length; h++)
	{
		if (h != 0) string += "_";
		let array = multArray[h];
		if (array.length == 0) continue;
		let baseFrom = Math.max.apply(null, array) + 1;
		//find best conversionRate
		let conversionRates = [];
		let conversionCosts = [];
		for (let i = 1; i < 10; i++)
		{
			conversionRates.push(i * (Math.log10(baseFrom) / Math.log10(baseTo)));
			conversionCosts.push(conversionRates[i - 1] % 1);
		}
		let minCost = Math.max.apply(null, conversionCosts);
		let convertFromRate = conversionCosts.indexOf(minCost) + 1;
		let convertToRate = Math.ceil(conversionRates[convertFromRate - 1]);
		//add base info to the first two letters of string
		let n = baseFrom;
		string += encodingChars.substr(n % baseTo, 1);
		n = Math.floor(n / baseTo);
		string += encodingChars.substr(n % baseTo, 1);
		//make array even multiple of conversionRate
		for (let i = array.length; i % convertFromRate !== 0; i++) array.push(0);
		//convert array to decimal number
		for (let i = 0; i < array.length; i += convertFromRate)
		{
			let n = 0;
			for (let j = 0; j < convertFromRate; j++) n = n * baseFrom + array[i + j];
			//convert decimal number to base 64
			for (let j = 0; j < convertToRate; j++)
			{
				string = string + encodingChars.substr(n % baseTo, 1);
				n = Math.floor(n / baseTo);
			}
		}
	}
	return string;
}
//query string decoder
function decode(encodedString, baseFrom = encodingChars.length)
{
	urlVersion = encodingChars.indexOf(encodedString[0]);
	if (encodedString[0] == "0" || encodedString[0] == "1")
	{
		encodedString = encodedString.substr(1);
		let decodedArray = [];
		encodedString = encodedString.split("_");
		for (let h = 0; h < encodedString.length; h++)
		{
			decodedArray.push([]);
			let array = encodedString[h].split("").map(c => encodingChars.indexOf(c));
			//find baseTo using first two elements of array
			let baseTo = 0;
			baseTo = baseTo * baseFrom + array[1];
			baseTo = baseTo * baseFrom + array[0];
			array.shift();
			array.shift();
			//find best conversionRate
			let conversionRates = [];
			let conversionCosts = [];
			for (let i = 1; i < 10; i++)
			{
				conversionRates.push(i * (Math.log10(baseTo) / Math.log10(baseFrom)));
				conversionCosts.push(conversionRates[i - 1] % 1);
			}
			let minCost = Math.max.apply(null, conversionCosts);
			let convertToRate = conversionCosts.indexOf(minCost) + 1;
			let convertFromRate = Math.ceil(conversionRates[convertToRate - 1]);
			//convert array to decimal number
			for (let i = 0; i < array.length; i += convertFromRate)
			{
				let n = 0;
				armorTypeLength;
				let tempArray = [];
				for (let j = convertFromRate - 1; 0 <= j; j--) n = n * baseFrom + array[i + j];
				//convert decimal number to base 64
				for (let j = 0; j < convertToRate; j++)
				{
					tempArray.push(n % baseTo);
					n = Math.floor(n / baseTo);
				}
				tempArray = tempArray.reverse();
				for (let j = 0; j < convertToRate && tempArray[j] != 0; j++)
				{
					decodedArray[h].push(tempArray[j]);
				}
			}
		}
		return decodedArray;
	}
	else return -1;
}
var workerList = [];
var armorTypeLength = 4;
//employ workers on changes
function EmployWorkers()
{
	//set scroll position to top
	if (window.scrollY > 367) window.scrollTo(0, 0);
	//process indexPerk and Ranks for postMessage
	//init
	var indexPerk = [];
	var indexPerkRank = [];
	urlPerks = [];
	urlLocks = [];
	var PerkCardList = document.getElementsByClassName("PerkCard");
	//process indexperks
	for (i = 0; i < PerkCardList.length; i++)
	{
		indexPerk.push({ j: parseInt(PerkCardList[i].id.split("_")[0]), k: parseInt(PerkCardList[i].id.split("_")[1]) });
		indexPerkRank.push(parseInt(PerkCardList[i].children[1].firstChild.textContent.split(" ")[0].substring(1)) / 3);
		urlPerks.push(perkButtonIdList.indexOf(PerkCardList[i].id));
	}
	if (urlPerks.length == 0) urlPerks.push(0);
	if (urlPerks.length == 0) urlPerks.push(0);
	//terminate all existing workers
	while (workerList.length > 0)
	{
		workerList[0].terminate();
		workerList.shift();
	}
	var worker = new Worker("./js/webWorker.min.js");
	workerList.push(worker);
	workerList[0].postMessage({ indexPerk: indexPerk, indexPerkRank: indexPerkRank, lock: getLockIndices(), legendaryWeapon: document.getElementById("LegendaryWeapon").checked });
	history.pushState(null, null, "/?" + encode([urlPerks, indexPerkRank, urlLocks]));
	//process messages from worker
	workerList[0].onmessage = function(e)
	{
		//apply bonusPerks
		if (e.data.bonusPerks != undefined)
		{
			var bonusPerks = e.data.bonusPerks;
			applyBonusPerksUI(bonusPerks);
		}
		//print out tables
		if (e.data.set != undefined)
		{
			var set = e.data.set;
			printTableUI(set);
		}
	};
}
//Malkarion Weapon
function MalkarionWeapon()
{
	if (document.getElementById("MalkarionWeapon").checked)
	{
		document.getElementById("LockCheckbox 1_2").checked = true;
		document.getElementById("LockCheckbox 1_10").checked = true;
		document.getElementById("LockCheckbox 1_19").checked = true;
		document.getElementById("LegendaryWeapon").checked = true;
	}
	else
	{
		document.getElementById("LockCheckbox 1_2").checked = false;
		document.getElementById("LockCheckbox 1_10").checked = false;
		document.getElementById("LockCheckbox 1_19").checked = false;
		document.getElementById("LegendaryWeapon").checked = false;
	}
	EmployWorkers();
}
//BONUS PERKS UI
function applyBonusPerksUI(bonusPerks)
{
	//apply color according to rank
	for (i = 0; i < bonusPerks.length; i++)
	{
		if (document.getElementById(bonusPerks[i].stringID).className != "btn disabled")
		{
			if (bonusPerks[i].value > 1)
				document.getElementById(bonusPerks[i].stringID).className = "PerkButton  waves-effect waves-light btn tooltipped plus6";
			else if (bonusPerks[i].value > 0)
				document.getElementById(bonusPerks[i].stringID).className = "PerkButton  waves-effect waves-light btn tooltipped plus3";
			else document.getElementById(bonusPerks[i].stringID).className = "PerkButton  waves-effect waves-light btn tooltipped plus0";
		}
	}
	//clear table for builds for printing
	document.getElementById("Builds Table Body").textContent = "";
}

function clearTableUI()
{
	let divTableAllTd = document.getElementsByTagName("td");
	let divTableAllTdLength = divTableAllTd.length;
	for (let i = 0; i < divTableAllTdLength; i++) document.getElementsByTagName("td")[i].textContent = "";
}
//PRINT TABLE UI
var BuildsFoundTable = document.getElementById("Builds Table Body");

function printArmorUI(armorObj, cellIndices, parentElem)
{
	let TableElem = document.createElement("td");
	//armor
	let Elem = document.createElement("div");
	Elem.className = "PrintEquipment";
	//icon
	let Icon = document.createElement("img");
	Icon.src = armorObj.icon;
	Icon.className = "ArmorIcon";
	Elem.appendChild(Icon);
	//text
	let Text = document.createElement("div");
	Text.textContent = armorObj.id;
	Elem.appendChild(Text);
	TableElem.appendChild(Elem);
	parentElem.appendChild(TableElem);
	/*
	//perk
	let PerkElem = document.createElement("div");
	PerkElem.className = "PrintEquipment";
	TableElem.appendChild(PerkElem);
	//icon
	let PerkIcon = document.createElement("img");
	PerkIcon.src = "/assets/icons/perks/" + armorObj.perk.type + ".png";
	PerkIcon.className = "ArmorIcon";
	PerkElem.appendChild(PerkIcon);
	//text
	let PerkText = document.createElement("div");
	PerkText.textContent = armorObj.perk.name;
	PerkElem.appendChild(PerkText);
	if (armorObj.cell.length == 2) {
		//if weapon
		//cell1
		let CellElem = document.createElement("div");
		CellElem.className = "PrintEquipment";
		TableElem.appendChild(CellElem);
		//icon1
		let CellIcon = document.createElement("img");
		CellIcon.src = "/assets/icons/perks/" + armorObj.cell[0] + ".png";
		CellIcon.className = "cellIcon";
		if (cellIndices[0].j != 0 && cellIndices[0].k != 0) CellIcon.style.backgroundColor = "#BA0AFB";
		else CellIcon.style.backgroundColor = "#808080";
		CellElem.appendChild(CellIcon);
		//text1
		let CellText = document.createElement("div");
		CellText.textContent = perkList[cellIndices[0].j][cellIndices[0].k].name;
		CellElem.appendChild(CellText);
		//cell2
		let cell2Elem = document.createElement("div");
		cell2Elem.className = "PrintEquipment";
		TableElem.appendChild(cell2Elem);
		//icon2
		let cell2Icon = document.createElement("img");
		cell2Icon.src = "/assets/icons/perks/" + armorObj.cell[1] + ".png";
		cell2Icon.className = "cellIcon";
		if (cellIndices[1].j != 0 && cellIndices[1].k != 0) cell2Icon.style.backgroundColor = "#BA0AFB";
		else cell2Icon.style.backgroundColor = "#808080";
		cell2Elem.appendChild(cell2Icon);
		//text2
		let cell2Text = document.createElement("div");
		cell2Text.textContent = perkList[cellIndices[1].j][cellIndices[1].k].name;
		cell2Elem.appendChild(cell2Text);
	} //if armor
	else {
		//cell
		let CellElem = document.createElement("div");
		CellElem.className = "PrintEquipment";
		TableElem.appendChild(CellElem);
		//icon
		let CellIcon = document.createElement("img");
		CellIcon.src = "/assets/icons/perks/" + armorObj.cell + ".png";
		CellIcon.className = "cellIcon";
		if (cellIndices.j == 0 && cellIndices.k == 0) CellIcon.style.backgroundColor = "#808080";
		else CellIcon.style.backgroundColor = "#BA0AFB";
		CellElem.appendChild(CellIcon);
		//text
		let CellText = document.createElement("div");
		CellText.textContent = perkList[cellIndices.j][cellIndices.k].name;
		CellElem.appendChild(CellText);
	}*/
}

function printWeaponUI(weaponObj, cellIndices, parentElem)
{
	let TableElem = document.createElement("td");
	//armor
	let Elem = document.createElement("div");
	Elem.className = "PrintEquipment";
	//icon
	let Icon = document.createElement("img");
	Icon.src = weaponObj.icon;
	Icon.className = "ArmorIcon";
	Elem.appendChild(Icon);
	//text id
	let TextId = document.createElement("div");
	if (!document.getElementById("LegendaryWeapon").checked)
		TextId.textContent =
		weaponObj.id +
		" " +
		weaponObj.type;
	else //Legendary Weapon
		TextId.textContent =
		"Legendary " +
		weaponObj.id +
		" " +
		weaponObj.type;
	/*+
		" " + 
		weaponObj.perk.name +
		"  " +
		perkList[cellIndices[0].j][cellIndices[0].k].name +
		"  " +
		perkList[cellIndices[1].j][cellIndices[1].k].name;*/
	Elem.appendChild(TextId);
	TableElem.appendChild(Elem);
	parentElem.appendChild(TableElem);
}
//Dauntless builder url exporter
//make hashids object
var hashids = new Hashids.default("spicy", 8, "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890");

function generateDBurl(set, parentElem)
{
	let DBarray = [3, weapon[set.id[4]][set.id[5]].DBmap, 15]; //version and weapon
	//weapon cells
	//check for cell order
	if (perkList[set.cell[4].j][set.cell[4].k].type.name == weapon[set.id[4]][set.id[5]].cell[0])
		//if order is correct
		DBarray.push(perkList[set.cell[4].j][set.cell[4].k].DBmap, perkList[set.cell[5].j][set.cell[5].k].DBmap);
	else if (perkList[set.cell[4].j][set.cell[4].k].type.name == weapon[set.id[4]][set.id[5]].cell[1])
		//reverse order otherwise
		DBarray.push(perkList[set.cell[5].j][set.cell[5].k].DBmap, perkList[set.cell[4].j][set.cell[4].k].DBmap);
	//both cells are empty/none
	else DBarray.push(perkList[set.cell[4].j][set.cell[4].k].DBmap, perkList[set.cell[5].j][set.cell[5].k].DBmap);
	//Legendary weapon
	if (weapon[set.id[4]][set.id[5]].type != "Repeater" && document.getElementById("LegendaryWeapon").checked)
	{
		if (weapon[set.id[4]][set.id[5]].type == "Aether Strikers")
			DBarray[1] = 132, DBarray.push(3, 2, 0, 0, weapon[set.id[4]][set.id[5]].DBmap, 0);
		else if (weapon[set.id[4]][set.id[5]].type == "Axe")
			DBarray[1] = 130, DBarray.push(5, 3, 0, 0, weapon[set.id[4]][set.id[5]].DBmap, 0);
		else if (weapon[set.id[4]][set.id[5]].type == "Sword")
			DBarray[1] = 127, DBarray.push(7, 6, 0, 0, weapon[set.id[4]][set.id[5]].DBmap, 0);
		else if (weapon[set.id[4]][set.id[5]].type == "Chain Blades")
			DBarray[1] = 128, DBarray.push(5, 3, 0, 0, weapon[set.id[4]][set.id[5]].DBmap, 0);
		else if (weapon[set.id[4]][set.id[5]].type == "War Pike")
			DBarray[1] = 131, DBarray.push(5, 8, 0, 0, weapon[set.id[4]][set.id[5]].DBmap, 0);
		else if (weapon[set.id[4]][set.id[5]].type == "Hammer")
			DBarray[1] = 129, DBarray.push(5, 1, 0, 0, weapon[set.id[4]][set.id[5]].DBmap, 0);
		else if (weapon[set.id[4]][set.id[5]].type == "Repeater")
			DBarray.push(0, 8, 9, 19, 0, 25);
		else DBarray.push(0, 0, 0, 0, 0, 0);
	}
	else //Not legendary
	{
		//fill with meta mods and specials
		if (weapon[set.id[4]][set.id[5]].type == "Aether Strikers") DBarray.push(3, 2, 0, 0, 0, 0);
		else if (weapon[set.id[4]][set.id[5]].type == "Axe") DBarray.push(5, 3, 0, 0, 0, 0);
		else if (weapon[set.id[4]][set.id[5]].type == "Sword") DBarray.push(7, 6, 0, 0, 0, 0);
		else if (weapon[set.id[4]][set.id[5]].type == "Chain Blades") DBarray.push(5, 3, 0, 0, 0, 0);
		else if (weapon[set.id[4]][set.id[5]].type == "War Pike") DBarray.push(5, 8, 0, 0, 0, 0);
		else if (weapon[set.id[4]][set.id[5]].type == "Hammer") DBarray.push(5, 1, 0, 0, 0, 0);
		else if (weapon[set.id[4]][set.id[5]].type == "Repeater") DBarray.push(0, 8, 9, 19, 0, 25);
		else DBarray.push(0, 0, 0, 0, 0, 0);
	}
	//fill in armor and its cells + embermane lantern and its cell
	DBarray.push(
		head[set.id[0]].DBmap,
		15,
		perkList[set.cell[0].j][set.cell[0].k].DBmap,
		torso[set.id[1]].DBmap,
		15,
		perkList[set.cell[1].j][set.cell[1].k].DBmap,
		arms[set.id[2]].DBmap,
		15,
		perkList[set.cell[2].j][set.cell[2].k].DBmap,
		legs[set.id[3]].DBmap,
		15,
		perkList[set.cell[3].j][set.cell[3].k].DBmap,
		2,
		perkList[set.cell[6].j][set.cell[6].k].DBmap
	);
	//print UI
	let TableElem = document.createElement("td");
	//DB url element a href
	let DBurlElem = document.createElement("a");
	DBurlElem.href = "https://www.dauntless-builder.com/b/" + hashids.encode(DBarray);
	DBurlElem.target = "_blank";
	//icon
	let Icon = document.createElement("img");
	Icon.src = "assets/export.png";
	Icon.className = "ArmorIcon";
	//append to DOM
	DBurlElem.appendChild(Icon);
	TableElem.appendChild(DBurlElem);
	parentElem.appendChild(TableElem);
}

function printTableUI(set)
{
	let ElementtrBuildsFound = document.createElement("tr");
	printArmorUI(head[set.id[0]], set.cell[0], ElementtrBuildsFound);
	printArmorUI(torso[set.id[1]], set.cell[1], ElementtrBuildsFound);
	printArmorUI(arms[set.id[2]], set.cell[2], ElementtrBuildsFound);
	printArmorUI(legs[set.id[3]], set.cell[3], ElementtrBuildsFound);
	printWeaponUI(weapon[set.id[4]][set.id[5]], [set.cell[4], set.cell[5]], ElementtrBuildsFound);
	generateDBurl(set, ElementtrBuildsFound);
	//ElementtrBuildsFound.appendChild(document.createElement('td')).textContent = +" "+weapon[set.id[4]][set.id[5]].type;
	BuildsFoundTable.appendChild(ElementtrBuildsFound);
	workerList[0].postMessage(-23); //ask worker for more lists
}
//add perk to desired perks list
function PerkClicked(event)
{
	let perkRank;
	if (event.target.classList.contains("plus6")) perkRank = 6;
	else perkRank = 3;
	event.target.className = "btn disabled";
	//heartbeat animation
	let divAnimationSelectedPerks = document.createElement("div");
	divAnimationSelectedPerks.className = "animated bounceInLeft faster";
	document.getElementById("SelectedPerks").appendChild(divAnimationSelectedPerks);
	//main container
	let divSelectedPerkContainer = document.createElement("div");
	divSelectedPerkContainer.className = "displayHorizontal";
	divSelectedPerkContainer.id = event.target.id;
	divAnimationSelectedPerks.appendChild(divSelectedPerkContainer);
	//add arrows and - to animation div
	let divRankChange = document.createElement("div");
	divRankChange.className = "rankChange";
	divSelectedPerkContainer.appendChild(divRankChange);
	//add arrow up
	let RankUpIcon = document.createElement("img");
	RankUpIcon.className = "rankIcon waves-effect";
	RankUpIcon.src = "assets/upArrow.png";
	RankUpIcon.addEventListener("click", PlusButtonCLicked);
	divRankChange.appendChild(RankUpIcon);
	//add arrow down
	let RankDownIcon = document.createElement("img");
	RankDownIcon.className = "rankIcon";
	RankDownIcon.src = "assets/downArrow.png";
	RankDownIcon.addEventListener("click", MinusButtonCLicked);
	divRankChange.appendChild(RankDownIcon);
	//card container
	let divPerkCard = document.createElement("div");
	divPerkCard.className = "PerkCard tooltipped";
	divPerkCard.setAttribute("data-position", "left");
	//form tooltip string for car
	let perkCardTooltip = "";
	for (let i = 0; i < perkList[parseInt(event.target.id.split("_")[0])][parseInt(event.target.id.split("_")[1])].effect.length; i++)
		perkCardTooltip =
		perkCardTooltip +
		String(i + 1) +
		": " +
		perkList[parseInt(event.target.id.split("_")[0])][parseInt(event.target.id.split("_")[1])].effect[i].description +
		"\n";
	divPerkCard.setAttribute("data-tooltip", perkCardTooltip);
	divPerkCard.id = event.target.id;
	divSelectedPerkContainer.appendChild(divPerkCard);
	if (!hasTouch()) M.Tooltip.init(divPerkCard, { outDuration: 0, inDuration: 400, enterDelay: 500, margin: 0, transitionMovement: 3 });
	//icon
	let divPerkCardIcon = document.createElement("div");
	let PerkCardIcon = document.createElement("img");
	divPerkCardIcon.className = "PerkCardIcon";
	PerkCardIcon.src = "assets/icons/perks/" + cellType[event.target.id.split("_")[0]] + ".png";
	divPerkCardIcon.appendChild(PerkCardIcon);
	divPerkCard.appendChild(divPerkCardIcon);
	//Display Horizontally for title and description
	let divPerkCardText = document.createElement("div");
	divPerkCardText.className = "PerkCardText";
	divPerkCard.appendChild(divPerkCardText);
	//title
	let divPerkCardTitle = document.createElement("div");
	divPerkCardTitle.className = "PerkCardTitle";
	divPerkCardTitle.appendChild(document.createTextNode("+" + perkRank + " " + event.target.textContent));
	divPerkCardText.appendChild(divPerkCardTitle);
	//description
	divPerkCardContent = document.createElement("div");
	divPerkCardContent.appendChild(
		document.createTextNode(perkList[parseInt(event.target.id.split("_")[0])][parseInt(event.target.id.split("_")[1])].effect[perkRank - 1].description)
	);
	divPerkCardText.appendChild(divPerkCardContent);
	EmployWorkers();
}
//+button
function PlusButtonCLicked()
{
	let perkTitle = event.target.parentElement.parentElement.children[1].children[1].firstChild.textContent;
	let rankValue = parseInt(perkTitle.split(" ")[0].substring(1));
	let perkName = perkTitle.substring(perkTitle.indexOf(" "));
	event.target.parentElement.parentElement.children[1].children[1].firstChild.textContent = "+" + String(rankValue + 3) + " " + perkName;
	event.target.parentElement.parentElement.children[1].children[1].children[1].textContent =
		perkList[parseInt(event.target.parentElement.parentElement.id.split("_")[0])][
			parseInt(event.target.parentElement.parentElement.id.split("_")[1])
		].effect[rankValue + 3 - 1].description;
	EmployWorkers();
}
//-button
function MinusButtonCLicked()
{
	let perkTitle = event.target.parentElement.parentElement.children[1].children[1].firstChild.textContent;
	let rankValue = parseInt(perkTitle.split(" ")[0].substring(1));
	let perkName = perkTitle.substring(perkTitle.indexOf(" "));
	if (rankValue > 3)
	{
		event.target.parentElement.parentElement.children[1].children[1].firstChild.textContent = "+" + String(rankValue - 3) + " " + perkName;
		event.target.parentElement.parentElement.children[1].children[1].children[1].textContent =
			perkList[parseInt(event.target.parentElement.parentElement.id.split("_")[0])][
				parseInt(event.target.parentElement.parentElement.id.split("_")[1])
			].effect[rankValue - 3 - 1].description;
	}
	else
	{
		document.getElementById(event.target.parentElement.parentElement.id).className = "waves-effect waves-light btn grey lighten-4 black-text";
		event.target.parentElement.parentElement.parentElement.remove(event.target.parentElement.parentElement);
	}
	EmployWorkers();
}

function CheckAllClicked()
{
	//if no locks exist, check all
	if (getLockIndices() == -1) toggleAllChecboxes(true);
	//if locks exist, uncheck all
	else toggleAllChecboxes(false);
}

function toggleAllChecboxes(bool)
{
	//toogle all checboxes on or off
	//weapon type
	for (i = 0; i < weapon.length; i++) document.getElementById("LockCheckbox 0 " + String(i)).checked = bool;
	//IDs
	for (j = 1; j < armorTypeLength + 2; j++)
	{
		if (j < 3)
		{
			//head and weapon exotics have more IDs
			for (i = 0; i < idList.length; i++) document.getElementById("LockCheckbox " + String(j) + " " + String(i)).checked = bool;
		} //others have less IDs
		else
		{
			for (i = 0; i < idList.length - 3; i++) document.getElementById("LockCheckbox " + String(j) + " " + String(i)).checked = bool;
		}
	}
}

function getLockIndices()
{
	let lock = [];
	//weapon type
	lock.push([]);
	for (i = 0; i < weapon.length; i++)
	{
		if (document.getElementById("LockCheckbox 0_" + String(i)).checked)
		{
			lock[0].push(i);
			urlLocks.push(LockCheckboxIdList.indexOf("LockCheckbox 0_" + String(i)));
		}
	}
	//IDs
	for (j = 1; j < armorTypeLength + 2; j++)
	{
		lock.push([]);
		if (j < 3)
		{
			//head and weapon exotics have more IDs
			for (i = 0; i < idList.length; i++)
				if (document.getElementById("LockCheckbox " + String(j) + "_" + String(i)).checked)
				{
					lock[j].push(i);
					urlLocks.push(LockCheckboxIdList.indexOf("LockCheckbox " + String(j) + "_" + String(i)));
				}
		} //others have less IDs
		else
		{
			for (i = 0; i < idList.length - 3; i++)
				if (document.getElementById("LockCheckbox " + String(j) + "_" + String(i)).checked)
				{
					lock[j].push(i);
					urlLocks.push(LockCheckboxIdList.indexOf("LockCheckbox " + String(j) + "_" + String(i)));
				}
		}
	}
	//return lock if locks exist or -1 if they dont
	for (i = 0; i < lock.length; i++)
	{
		if (lock[i].length > 0) return lock;
	}
	return -1;
}

function setCookie(cname, cvalue, exdays)
{
	var d = new Date();
	d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
	var expires = "expires=" + d.toUTCString();
	document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function saveFilterConfigCookie()
{
	let a = 0;
	let filterURL = window.location.search.split("_")[2];
	setCookie("FilterConfigURL", filterURL, 365);
}
//apply querystring
var queryString = window.location.search.substr(1);
if (queryString[0] == "0")
{
	queryString.substr(1);
	queryString = decode(queryString);
	//click perkButtons
	for (let i = 0; i < queryString[0].length; i++)
	{
		if (queryString[0][i] >= 19)
			document.getElementById(perkButtonIdList[queryString[0][i] + 1]).click();
		else
			document.getElementById(perkButtonIdList[queryString[0][i]]).click();
	}
	//set ranks
	var PerkCardList = document.getElementsByClassName("PerkCard");
	for (let i = 0; i < queryString[1].length; i++)
		PerkCardList[i].children[1].firstChild.textContent =
		"+" +
		String(queryString[1][i] * 3) +
		" " +
		PerkCardList[i].children[1].firstChild.textContent.substring(PerkCardList[i].children[1].firstChild.textContent.indexOf(" ") + 1);
	//click lockCheckboxes
	for (let i = 0; i < queryString[2].length; i++)
	{
		if (parseInt(document.getElementById(LockCheckboxIdList[queryString[2][i]]).id.split("_")[1]) >= 9)
			document.getElementById(LockCheckboxIdList[queryString[2][i] + 1]).click();
		else
			document.getElementById(LockCheckboxIdList[queryString[2][i]]).click();
	}
	EmployWorkers();
}
if (queryString[0] == "1")
{
	let MalkarionTicked = false;
	queryString.substr(1);
	queryString = decode(queryString);
	//click perkButtons
	for (let i = 0; i < queryString[0].length; i++) document.getElementById(perkButtonIdList[queryString[0][i]]).click();
	//set ranks
	var PerkCardList = document.getElementsByClassName("PerkCard");
	for (let i = 0; i < queryString[1].length; i++)
		PerkCardList[i].children[1].firstChild.textContent =
		"+" +
		String(queryString[1][i] * 3) +
		" " +
		PerkCardList[i].children[1].firstChild.textContent.substring(PerkCardList[i].children[1].firstChild.textContent.indexOf(" ") + 1);
	//click lockCheckboxes
	for (let i = 0; i < queryString[2].length; i++)
	{
		document.getElementById(LockCheckboxIdList[queryString[2][i]]).click();
		if (queryString[2][i] == 17)
			MalkarionWeapon = true;
	}
	if (MalkarionWeapon == true)
	{
		document.getElementById("LockCheckbox 1_9").checked = true;
		document.getElementById("LockCheckbox 1_2").checked = true;
		document.getElementById("LockCheckbox 1_10").checked = true;
		document.getElementById("LockCheckbox 1_19").checked = true;
		document.getElementById("LegendaryWeapon").checked = true;
	}
	EmployWorkers();
}