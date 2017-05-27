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
    this.ethics = this.generateEthics();
  }

  generateTraits() {
    return traitsDict[traitsList[this.getRandomIntInclusive(0, traitsList.length - 1)]];
  }

  generateEthics() {
    var ethicsPoints = 3;
    var ethics = [];

    while (ethicsPoints > 0) {
      var randomEthic = ethicsDict[ethicsList[this.getRandomIntInclusive(0, ethicsList.length - 1)]];
      
      // Don't allow adding of an ethic if it will take us over the ethics allowance
      if (randomEthic.cost > ethicsPoints) continue;

      // Don't allow multiple ethics of the same category
      var alreadyHasCategory = false;
      ethics.forEach(function (ethic) {
        if (ethic.category === randomEthic.category)
          alreadyHasCategory = true;
      });

      if (alreadyHasCategory) continue;

      ethics.push(randomEthic);
      ethicsPoints -= randomEthic.cost;
    }
    
    return ethics;
  }

  getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}