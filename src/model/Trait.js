class Trait {
  constructor(name, cost, opposites, modifiers) {
    this.name = name;
    this.cost = cost;
    this.opposites = opposites;
    this.modifiers = modifiers;
  }
}

var traitsList = ["agrarian", 
                  "thrifty", 
                  "industrious", 
                  "intelligent", 
                  "naturalEngineers", 
                  "naturalPhysicists", 
                  "naturalSociologists"];

traitsDict = {
  "agrarian": new Trait("Agrarian", 2, ["none"], {"tileResourceFoodMult": 0.15}),
  "thrifty": new Trait("Thrifty", 2, ["none"], {"tileResourceEnergyMult": 0.15}),
  "industrious": new Trait("Industrious", 2, ["none"], {"tileResourceMineralsMult": 0.15}),
  "intelligent": new Trait("Intelligent", 2, ["nerveStapled", "erudite"], {"tileResourceEngineeringResearchMult": 0.1,
                                                            "tileResourcePhysicsResearchMult": 0.1,
                                                            "tileResourceSocietyResearchMult": 0.1}),
  "naturalEngineers": new Trait("Natural Engineers", 1, ["naturalPhysicists", "naturalSociologists", "nerveStapled"], {"tileResourceEngineeringResearchMult": 0.15}),
  "naturalPhysicists": new Trait("Natural Physicists", 1, ["naturalEngineers", "naturalSociologists", "nerveStapled"], {"tileResourcePhysicsResearchMult": 0.15}),
  "naturalSociologists": new Trait("Natural Sociologists", 1, ["naturalPhysicists", "naturalEngineers", "nerveStapled"], {"tileResourceSocietyResearchMult": 0.15}),
};