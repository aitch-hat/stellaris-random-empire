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
    empire.ethics.forEach(function(ethic) {
      ethicsString += "<li class='mdl-list__item'><span class='mdl-list__item-primary-content'>" + ethic.name + "</span></li>";
    });
    ethicsString += "</ul>";

    var civicsString = "<ul class='demo-list-item mdl-list'>";
    empire.civics.forEach(function(civic) {
      civicsString += "<li class='mdl-list__item'><span class='mdl-list__item-primary-content'>" + civic.name + "</span></li>";
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