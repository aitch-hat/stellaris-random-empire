odin.view.showEmpire = {
  setupUserInterface: function () {
    var empire = new Empire();

    var traitsString = "";

    empire.traits.forEach(function(trait) {
      traitsString += trait.name + " ";
    });

    var ethicsString = "";

    empire.ethics.forEach(function(ethic) {
      ethicsString += ethic.name + " ";
    });

    var civicsString = "";

    empire.civics.forEach(function(civic) {
      civicsString += civic.name + " ";
    });

    var homeworldTypes = ["Arid", "Desert", "Savanna", "Alpine", "Arctic", "Tundra", "Continental", "Ocean", "Tropical"];
    var ftlTypes = ["Warp", "Hyperspace", "Wormhole"];
    var startingWeaponTypes = ["Kinetic", "Energy", "Explosives"];

    document.getElementById("empireTraits").innerHTML = traitsString;
    document.getElementById("empireEthics").innerHTML = ethicsString;
    document.getElementById("empireAuthority").innerHTML = empire.authority.name;
    document.getElementById("empireCivics").innerHTML = civicsString;
    document.getElementById("empirePlanet").innerHTML = homeworldTypes[Math.floor(Math.random() * (homeworldTypes.length))];
    document.getElementById("empireFtl").innerHTML = ftlTypes[Math.floor(Math.random() * (ftlTypes.length))];
    document.getElementById("empireWeapon").innerHTML = startingWeaponTypes[Math.floor(Math.random() * (startingWeaponTypes.length))];
  }
};