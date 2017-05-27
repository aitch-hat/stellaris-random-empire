class Empire {
  // constructor(traits, ethics, government, civics, ftl, weapon, planet) {
  //   this.traits = traits;
  //   this.ethics = ethics;
  //   this.government = government;
  //   this.civics = civics;
  //   this.ftl = ftl;
  //   this.weapon = weapon;
  //   this.planet = planet;
  // }

  constructor() {
    this.traits = this.generateTraits();
  }

  generateTraits() {
    return traitsList[0];
  }
}