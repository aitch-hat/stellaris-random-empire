odin.view.showEmpire = {
  setupUserInterface: function () {
    var empire = new Empire();

    var traitsString = "<ul class='demo-list-item mdl-list'>";
    var traitIconName = "";
    empire.traits.forEach(function(trait) {
      traitIconName = "trait_" + trait.name.replace(" ", "_").replace("-", "").toLowerCase();
      traitsString += "<li class='mdl-list__item'><span class='mdl-list__item-primary-content'>" + "<img src='images/icons/traits/" + traitIconName + ".png' alt='" + trait.name + "' style='padding-right: 6px'>" + trait.name + "</span></li>";
    });
    traitsString += "</ul>";

    var ethicsString = "<ul class='demo-list-item mdl-list'>";
    var ethicIconName = "";
    empire.ethics.forEach(function(ethic) {
      ethicIconName = "ethic_" + ethic.name.replace(" ", "_").toLowerCase();
      ethicsString += "<li class='mdl-list__item'><span class='mdl-list__item-primary-content'>" + "<img src='images/icons/ethics/" + ethicIconName + ".png' alt='" + ethic.name + "' style='padding-right: 6px'>" + ethic.name + "</span></li>";
    });
    ethicsString += "</ul>";

    var civicsString = "<ul class='demo-list-item mdl-list'>";
    var civicIconName = "";
    empire.civics.forEach(function(civic) {
      if (civic.requiredAuthority == "Hive Mind")
        civicIconName = "civic_hive_";
      else
        civicIconName = "civic_";

      civicIconName += civic.name.replace(" ", "_").toLowerCase();
      civicsString += "<li class='mdl-list__item'><span class='mdl-list__item-primary-content'>" + "<img src='images/icons/civics/" + civicIconName + ".png' alt='" + civic.name + "' style='padding-right: 6px'>" + civic.name + "</span></li>";
    });
    civicsString += "</ul>";

    var homeworldTypes = ["Arid", "Desert", "Savannah", "Alpine", "Arctic", "Tundra", "Continental", "Ocean", "Tropical"];
    var randomHomeworld = homeworldTypes[Math.floor(Math.random() * (homeworldTypes.length))];
    var ftlTypes = ["Warp", "Hyperspace", "Wormhole"];
    var randomFtl = ftlTypes[Math.floor(Math.random() * (ftlTypes.length))];
    var startingWeaponTypes = ["Kinetic", "Energy", "Explosives"];
    var randomWeapon = startingWeaponTypes[Math.floor(Math.random() * (startingWeaponTypes.length))];

    document.getElementById("empireTraits").innerHTML = traitsString;
    document.getElementById("empireEthics").innerHTML = ethicsString;
    document.getElementById("empireAuthority").innerHTML = "<ul class='demo-list-item mdl-list'><li class='mdl-list__item'><span class='mdl-list__item-primary-content'>" + 
                                                           "<img src='images/icons/authorities/auth_" + empire.authority.name.toLowerCase() + ".png' alt='" + empire.authority.name + "' style='padding-right: 6px' height='29' width='29'>" +
                                                           empire.authority.name +
                                                           "</span></li></ul>";
    document.getElementById("empireCivics").innerHTML = civicsString;
    document.getElementById("empirePlanet").innerHTML = "<ul class='demo-list-item mdl-list'><li class='mdl-list__item'><span class='mdl-list__item-primary-content'>" + 
                                                        "<img src='images/icons/traits/trait_pc_" + randomHomeworld.toLowerCase() + "_preference.png' alt='" + randomHomeworld + "' style='padding-right: 6px'>" +
                                                        randomHomeworld +
                                                        "</span></li></ul>";
    document.getElementById("empireFtl").innerHTML = "<ul class='demo-list-item mdl-list'><li class='mdl-list__item'><span class='mdl-list__item-primary-content'>" + 
                                                     randomFtl +
                                                     "</span></li></ul>";
    document.getElementById("empireWeapon").innerHTML = "<ul class='demo-list-item mdl-list'><li class='mdl-list__item'><span class='mdl-list__item-primary-content'>" + 
                                                        randomWeapon +
                                                        "</span></li></ul>";
  }
};