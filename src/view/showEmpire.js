odin.view.showEmpire = {
  setupUserInterface: function () {
    var empire = new Empire();
    document.getElementById('empireConfig').innerHTML = empire.traits.name;
  }
};