
//weapon type
document.write("<div class=\"ListLockContainer slide\" id=\"slide-6\"><h5 class=\"white-text\">Weapon</h5>")
for (i = 0; i < weaponType.length; i++)
  document.write("<label><input type=\"checkbox\" class=\"filled-in LockCheckbox\" id=\"LockCheckbox 0_" + String(i) + "\"><span>" + weaponType[i] + "</span></label>")
document.write("</div>")

document.write("<div class = \"ListLockContainer slide\" id=\"slide-7\"><h5 class=\"white-text\">Weapon</h5>")
//weapon behemoth
for (i = 0; i < idList.length; i++)
  document.write("<label><input type=\"checkbox\" class=\"filled-in LockCheckbox\" id=\"LockCheckbox 1_" + String(i) + "\"><span>" + idList[i] + "</span></label>");
document.write("</div>")

//head
document.write("<div class = \"ListLockContainer slide\" id=\"slide-8\"><h5 class=\"white-text\">Head</h5>")
for (i = 0; i < idList.length; i++)
  document.write("<label><input type=\"checkbox\" class=\"filled-in LockCheckbox\" id=\"LockCheckbox 2_" + String(i) + "\"><span>" + idList[i] + "</span></label>");
document.write("</div>")

//torso
document.write("<div class = \"ListLockContainer slide\" id=\"slide-9\"><h5 class=\"white-text\">Torso</h5>")
for (i = 0; i < idList.length - 3; i++)
  document.write("<label><input type=\"checkbox\" class=\"filled-in LockCheckbox\" id=\"LockCheckbox 3_" + String(i) + "\"><span>" + idList[i] + "</span></label>");
document.write("</div>")

//arms
document.write("<div class = \"ListLockContainer slide\" id=\"slide-10\"><h5 class=\"white-text\">Arms</h5>")
for (i = 0; i < idList.length - 3; i++)
  document.write("<label><input type=\"checkbox\" class=\"filled-in LockCheckbox\" id=\"LockCheckbox 4_" + String(i) + "\"><span>" + idList[i] + "</span></label>");
document.write("</div>")

//legs
document.write("<div class = \"ListLockContainer slide\" id=\"slide-11\"><h5 class=\"white-text\">Legs</h5>")
for (i = 0; i < idList.length - 3; i++)
  document.write("<label><input type=\"checkbox\" class=\"filled-in LockCheckbox\" id=\"LockCheckbox 5_" + String(i) + "\"><span>" + idList[i] + "</span></label>");
document.write("</div>")

/*
document.write("<div class=\"input-field\"><select multiple>");
document.write("<option value=\"\" disabled>Unlocked</option>");
for(i=0; i<weaponType.length; i++)
  document.write("<option value=\""+i+"\">"+weaponType[i]+"</option></div>");
document.write("</select><label>Weapon Type</label></div>");
//weapon behemoth
document.write("<div class=\"input-field\"><select multiple>");
document.write("<option value=\"\"  disabled>Unlocked</option>");
for(i=0; i<idList.length; i++)
  document.write("<option value=\""+i+"\">"+idList[i]+"</option>");
document.write("</select><label>Weapon Behemoth</label></div>");
//head
document.write("<div class=\"input-field\"><select multiple>");
document.write("<option value=\"\"  disabled>Unlocked</option>");
for(i=0; i<idList.length; i++)
  document.write("<option value=\""+i+"\">"+idList[i]+"</option>");
document.write("</select><label>Head</label></div>");
//torso
document.write("<div class=\"input-field\"><select multiple>");
document.write("<option value=\"\"  disabled>Unlocked</option>");
for(i=0; i<idList.length-3; i++)
  document.write("<option value=\""+i+"\">"+idList[i]+"</option>");
document.write("</select><label>Torso</label></div>");
//arms
document.write("<div class=\"input-field\"><select multiple>");
document.write("<option value=\"\"  disabled>Unlocked</option>");
for(i=0; i<idList.length-3; i++)
  document.write("<option value=\""+i+"\">"+idList[i]+"</option>");
document.write("</select><label>Arms</label></div>");
//Legs
document.write("<div class=\"input-field\"><select multiple>");
document.write("<option value=\"\"  disabled>Unlocked</option>");
for(i=0; i<idList.length-3; i++)
  document.write("<option value=\""+i+"\">"+idList[i]+"</option>");
document.write("</select><label>Legs</label></div>");
*/