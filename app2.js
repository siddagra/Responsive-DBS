

var request = new XMLHttpRequest();
request.open("GET", "dauntless-builder-data-fr-translated-V.2.json", false);
request.send(null);
var datafr = JSON.parse(request.responseText);

var request = new XMLHttpRequest();
request.open("GET", "https://www.dauntless-builder.com/data.json", false);
request.send(null);
var data = JSON.parse(request.responseText);


console.log(data)
for (const key in data.perks) {
    let perk = data.perks[key];
    let perkfr = datafr.perks[key];
    perkfr.icon = perk.icon;
}

for (const key in data.lanterns) {
    let lantern = data.lanterns[key];
    let lanternfr = datafr.lanterns[key];
    lanternfr.icon = lantern.icon;
}

for (const key in data.armours) {
    let armour = data.armours[key];
    let armourfr = datafr.armours[key];
    armourfr.icon = armour.icon;
}

for (const key in data.weapons) {
    let weapon = data.weapons[key];
    let weaponfr = datafr.weapons[key];
    weaponfr.icon = weapon.icon;
}
console.log(JSON.stringify(datafr));