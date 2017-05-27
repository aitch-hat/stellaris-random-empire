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
    var randomTrait = traitsList[this.getRandomIntInclusive(0, traitsList.length - 1)];
    return traitsDict[randomTrait];
  }

  getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}