
/*for (i = 1; i < perkList.length; i++) {
	document.write("<div class= \"slide\" id=\"slide-" + i + "\"><div class=\"ListPerkContainer\"><span><img class=\"ListPerkIcon\" src=\"assets/icons/perks/" + cellType[i] + ".png\"><h4>" + cellType[i] + "</h4></span>");
	for (j = 0; j < perkList[i].length; j++) {
		document.write("<a class=\"PerkButton  waves-effect waves-dark btn tooltipped plus6\" data-position=\"right\" data-tooltip=\"" + perkList[i][j].description + "\" id=\"" + i + "_" + j + "\">" + perkList[i][j].name + "</a>");
	}
	document.write("</div></div>");
}*/

for (i = 1; i < perkList.length; i++) {
	document.write("<div class=\"slide ListPerkContainer\" id=slide-" + i + " > ");
	for (j = 0; j < perkList[i].length; j++) {
		document.write("<div class=\"PerkButton  waves-effect waves-dark btn \">" + perkList[i][j].name + "</div>");
	}
	document.write("</div>");
} 