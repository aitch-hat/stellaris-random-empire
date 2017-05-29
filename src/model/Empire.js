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
    console.log("Generating ethics...");
    this.ethics = this.generateEthics();
    console.log("Generating traits...");
    this.traits = this.generateTraits();
    console.log("Generating authority...");
    this.authority = this.generateAuthority();
    console.log("Generating civics...");
    this.civics = this.generateCivics();
  }

  generateTraits() {
    var traitsPoints = 2;
    var traits = [];
    var triesLeft = 20;
    var empireEthics = this.getEmpireEthics();
    var randomTrait;

    while (true) {
      // May be mathematically impossible to balance traits picks, so reset and start again
      if (triesLeft === 0) {
        traits = [];
        triesLeft = 20;
      }
      
      randomTrait = traitsDict[traitsList[this.getRandomIntInclusive(0, traitsList.length - 1)]];

      // Some traits can't be matched with some ethics
      if (!this.intersection(empireEthics, randomTrait.allowedEthics) && randomTrait.allowedEthics != "all") {
        continue;
      }

      // Some traits can't be matched with other traits
      var hasConflictingTrait = false;

      traits.forEach(function (trait) {
        if (trait.opposites.indexOf(randomTrait.name) >= 0) {
          hasConflictingTrait = true;
        }
      });

      if (hasConflictingTrait) continue;

      // Don't want to add the same trait twice
      if (traits.indexOf(randomTrait) >= 0) {
        continue;
      }

      // Can't be left with fewer than zero points
      if (traits.length === 4 && (traitsPoints - randomTrait.cost) < 0) {
        triesLeft--;
        continue;
      }

      if (randomTrait.cost < 0) {  // Negative trait
        if (traitsPoints > 0) {  // Trait points to spare
          if (Math.random() > 0.5) {
            continue;
          } else {  // Sometimes add negative traits when we've got points to spare
            traits.push(randomTrait);
            traitsPoints -= randomTrait.cost;
          }
        }
      }

      // Add positive traits if we've got points to spare, and negative ones if 
      // not. This forces a balance around zero to stop points swinging too far
      // in one direction.
      if (traitsPoints > 0 && randomTrait.cost > 0) {
        traits.push(randomTrait);
        traitsPoints -= randomTrait.cost;
      } else if (traitsPoints < 0 && randomTrait.cost < 0) {
        traits.push(randomTrait);
        traitsPoints -= randomTrait.cost;
      } else if (traitsPoints === 0) {
        // If there are fewer than three trait picks when balanced, there's a
        // 50% chance the algorithm will continue. If there are three or more,
        // then break.
        if (traits.length < 3) {
          if (Math.random() > 0.5) {
            break;
          } else {
            traits.push(randomTrait);
            traitsPoints -= randomTrait.cost;
          }
        } else {
          break;
        }
      }
    }

    return traits;
  }

  generateEthics() {
    var ethicsPoints = 3;
    var ethics = [];
    var randomEthic;

    while (ethicsPoints > 0) {
      randomEthic = ethicsDict[ethicsList[this.getRandomIntInclusive(0, ethicsList.length - 1)]];

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

  generateAuthority() {   
    var empireEthics = this.getEmpireEthics();
    var randomAuthority;

    do {
      randomAuthority = authorityDict[authorityList[this.getRandomIntInclusive(0, authorityList.length - 1)]];
    } while (this.intersection(empireEthics, randomAuthority.disallowedEthics));

    return randomAuthority;
  }

  matchesAuthority(civic) {
    if (civic.requiredAuthority == "none") {
      return true;
    } else {
      return civic.requiredAuthority.indexOf(this.authority.name) >= 0;
    }
  }

  matchesRequiredEthics(civic) {
    if (civic.requiredEthics == "none") return true;

    var numEthicsRequired = civic.requiredEthics.length;
    var numEthicsMatched = 0;
    var empireEthics = this.getEmpireEthics();

    civic.requiredEthics.forEach(function (requiredEthic) {
      empireEthics.forEach(function (empireEthic) {
        if (empireEthic.indexOf(requiredEthic) >= 0) numEthicsMatched++;
      });
    });

    return numEthicsMatched == numEthicsRequired;
  }

  noDisallowedEthics(civic) {
    if (civic.disallowedEthics == "none") return true;

    var empireHasDisallowedEthic = false;
    var empireEthics = this.getEmpireEthics();

    civic.disallowedEthics.forEach(function (disallowedEthic) {
      empireEthics.forEach(function (empireEthic) {
        if (empireEthic.indexOf(disallowedEthic) >= 0) empireHasDisallowedEthic = true;
      });
    });

    return !empireHasDisallowedEthic;
  }

  conflictingCivics(civic, civics) {
    // Can't conflict with no civics!
    if (civics.length === 0) return false;

    if (civic.disallowedCivics == "none") return false;

    var empireHasDisallowedCivic = false;

    civics.forEach(function (existingCivic) {
      if (existingCivic.disallowedCivics.indexOf(civic.name) >= 0) empireHasDisallowedCivic = true;
    });

    return empireHasDisallowedCivic;
  }

  duplicateCivics(civic, civics) {

    // No duplicates if no civics!
    if (civics.length === 0) return false;

    var empireHasDuplicateCivic = false;

    civics.forEach(function (existingCivic) {
      if (existingCivic.name == civic.name) empireHasDuplicateCivic = true;
    });

    return empireHasDuplicateCivic;
  }

  getPossibleCivics() {
    var civic;
    var empire = this;
    var possibleCivics = [];

    civicsList.forEach(function (civicName) {
      civic = civicsDict[civicName];
      if (civic.name == "Fanatic Purifiers") {
        if (empire.canBeFanaticPurifiers()) {
          possibleCivics.push(civic);
        }
      } else {
        if (empire.matchesAuthority(civic) && 
            empire.matchesRequiredEthics(civic) && 
            empire.noDisallowedEthics(civic)) {
          possibleCivics.push(civic);
        }
      }
    });

    return possibleCivics;
  }

  generateCivics() {
    var civicsPoints = 2;
    var civics = [];
    var empireEthics = this.getEmpireEthics();
    var possibleCivics = this.getPossibleCivics();
    var randomCivic;

    while (civicsPoints !== 0) {
      randomCivic = possibleCivics[this.getRandomIntInclusive(0, possibleCivics.length - 1)];

      if (!this.conflictingCivics(randomCivic, civics) && !this.duplicateCivics(randomCivic, civics)) {
        civics.push(randomCivic);
        civicsPoints--;
      }
    }

    return civics;
  }

  getEmpireEthics() {
    var empireEthics = [];

    this.ethics.forEach(function (empireEthic) {
      empireEthics.push(empireEthic.name);
    });

    return empireEthics;
  }

  canBeFanaticPurifiers() {
    var empireEthics = this.getEmpireEthics();

    // Must be a Fanatic Xenophobe.
    // Must be either Militarist or Spiritualist.
    // Must not have the Synchretic Evolution civic.
    return (empireEthics.indexOf("Fanatic Xenophobe") >= 0 && 
            (empireEthics.indexOf("Militarist") >= 0 ||
             empireEthics.indexOf("Spiritualist") >= 0) &&
            !this.civics.indexOf("Synchretic Evolution"));
  }

  getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  intersection(haystack, arr) {
    return arr.some(function (v) {
        return haystack.indexOf(v) >= 0;
    });
  }
}