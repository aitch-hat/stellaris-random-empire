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
    this.ethics = this.generateEthics();
    this.traits = this.generateTraits();
    this.authority = this.generateAuthority();
  }

  generateTraits() {
    var traitsPoints = 2;
    var traits = [];
    var triesLeft = 20;
    var empireEthics = getEmpireEthics();

    while (true) {
      // May be mathematically impossible to balance traits picks, so reset and start again
      if (triesLeft === 0) {
        console.log("Ran out of tries, starting again...");
        traits = [];
        triesLeft = 20;
      }
      
      var randomTrait = traitsDict[traitsList[this.getRandomIntInclusive(0, traitsList.length - 1)]];
      console.log("Generated random trait: " + randomTrait.name);

      // Some traits can't be matched with some ethics
      if (!this.intersection(empireEthics, randomTrait.allowedEthics) && randomTrait.allowedEthics != "all") {
        console.log("Trait doesn't match with one or more empire ethics, trying a different one");
        continue;
      }

      // Some traits can't be matched with other traits
      var hasConflictingTrait = false;

      traits.forEach(function (trait) {
        console.log("Checking if " + trait.name + " conflicts with " + randomTrait.name);
        if (trait.opposites.indexOf(randomTrait.name) >= 0) {
          console.log(randomTrait.name + " conflicts with " + trait.name);
          hasConflictingTrait = true;
        }
      });

      if (hasConflictingTrait) continue;

      // Don't want to add the same trait twice
      if (traits.indexOf(randomTrait) >= 0) {
        console.log("Trait already added");
        continue;
      }

      // Can't be left with fewer than zero points
      if (traits.length === 4 && (traitsPoints - randomTrait.cost) < 0) {
        console.log("Trait would leave fewer than 0 trait points, trying again...");
        triesLeft--;
        continue;
      }

      if (randomTrait.cost < 0) {  // Negative trait
        if (traitsPoints > 0) {  // Trait points to spare
          if (Math.random() > 0.5) {
            console.log("Not adding negative trait while trait points are positive this time");
            continue;
          } else {  // Sometimes add negative traits when we've got points to spare
            console.log("Adding negative trait even though trait points are positive this time: " + randomTrait.name);
            traits.push(randomTrait);
            traitsPoints -= randomTrait.cost;
          }
        }
      }

      // Add positive traits if we've got points to spare, and negative ones if 
      // not. This forces a balance around zero to stop points swinging too far
      // in one direction.
      if (traitsPoints > 0 && randomTrait.cost > 0) {
        console.log("Adding positive trait: " + randomTrait.name);
        traits.push(randomTrait);
        traitsPoints -= randomTrait.cost;
      } else if (traitsPoints < 0 && randomTrait.cost < 0) {
        console.log("Adding negative trait: " + randomTrait.name);
        traits.push(randomTrait);
        traitsPoints -= randomTrait.cost;
      } else if (traitsPoints === 0) {
        console.log("Traits points balanced");
        // If there are fewer than three trait picks when balanced, there's a
        // 50% chance the algorithm will continue. If there are three or more,
        // then break.
        if (traits.length < 3) {
          console.log("...but fewer than 3 traits");
          if (Math.random() > 0.5) {
            console.log("Accept fewer than 3 traits");
            break;
          } else {
            console.log("Adding new trait: " + randomTrait.name)
            traits.push(randomTrait);
            traitsPoints -= randomTrait.cost;
          }
        } else {
          console.log("At least 3 traits - accepting");
          break;
        }
      }
    }

    return traits;
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

  generateAuthority() {   
    var empireEthics = getEmpireEthics();
    var randomAuthority;

    do {
      randomAuthority = authorityDict[authorityList[this.getRandomIntInclusive(0, authorityList.length - 1)]];
    } while (this.intersection(empireEthics, randomAuthority.disallowedEthics));

    return randomAuthority;
  }

  getEmpireEthics() {
    var empireEthics = [];

    this.ethics.forEach(function (empireEthic) {
      empireEthics.push(empireEthic.name);
    });

    return empireEthics;
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