odin.view.showEmpire = {
  setupUserInterface: function () {
    var empire = new Empire();

    var traitsString = "";

    empire.traits.forEach(function(trait) {
      traitsString += trait.name + " ";
    });

    document.getElementById("empireTraits").innerHTML = traitsString;

    var ethicsString = "";

    empire.ethics.forEach(function(ethic) {
      ethicsString += ethic.name + " ";
    });

    document.getElementById("empireEthics").innerHTML = ethicsString;

    document.getElementById("empireAuthority").innerHTML = empire.authority.name;
  }
};