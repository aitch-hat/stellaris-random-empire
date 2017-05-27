class Trait {
  constructor(name, cost, opposites, modifiers) {
    this.name = name;
    this.cost = cost;
    this.opposites = opposites;
    this.modifiers = modifiers;
  }
}

var traitsList = [
  new Trait("agrarian", 2, "none", {"tileResourceFoodMult": 0.15})
];