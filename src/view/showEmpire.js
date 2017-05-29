odin.view.showEmpire = {
  setupUserInterface: function () {
    var empire = new Empire();

    var traitsString = "<ul class='demo-list-item mdl-list'>";
    empire.traits.forEach(function(trait) {
      traitsString += "<li class='mdl-list__item'><span class='mdl-list__item-primary-content'>" + trait.name + "</span></li>";
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

    var homeworldTypes = ["Arid", "Desert", "Savanna", "Alpine", "Arctic", "Tundra", "Continental", "Ocean", "Tropical"];
    var ftlTypes = ["Warp", "Hyperspace", "Wormhole"];
    var startingWeaponTypes = ["Kinetic", "Energy", "Explosives"];

    document.getElementById("empireTraits").innerHTML = traitsString;
    document.getElementById("empireEthics").innerHTML = ethicsString;
    document.getElementById("empireAuthority").innerHTML = "<ul class='demo-list-item mdl-list'><li class='mdl-list__item'><span class='mdl-list__item-primary-content'>" + 
                                                           empire.authority.name +
                                                           "</span></li></ul>";
    document.getElementById("empireCivics").innerHTML = civicsString;
    document.getElementById("empirePlanet").innerHTML = "<ul class='demo-list-item mdl-list'><li class='mdl-list__item'><span class='mdl-list__item-primary-content'>" + 
                                                        homeworldTypes[Math.floor(Math.random() * (homeworldTypes.length))] +
                                                        "</span></li></ul>";
    document.getElementById("empireFtl").innerHTML = "<ul class='demo-list-item mdl-list'><li class='mdl-list__item'><span class='mdl-list__item-primary-content'>" + 
                                                     ftlTypes[Math.floor(Math.random() * (ftlTypes.length))] +
                                                     "</span></li></ul>";
    document.getElementById("empireWeapon").innerHTML = "<ul class='demo-list-item mdl-list'><li class='mdl-list__item'><span class='mdl-list__item-primary-content'>" + 
                                                        startingWeaponTypes[Math.floor(Math.random() * (startingWeaponTypes.length))] +
                                                        "</span></li></ul>";
  }
};