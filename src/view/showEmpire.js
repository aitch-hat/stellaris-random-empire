odin.view.showEmpire = {
  setupUserInterface: function () {
    var empire = new Empire();
    document.getElementById('empireTraits').innerHTML = empire.traits.name;

    var ethicsString = "";

    empire.ethics.forEach(function(ethic) {
      ethicsString += ethic.name + " ";
    });

    document.getElementById('empireEthics').innerHTML = ethicsString;
  }
};