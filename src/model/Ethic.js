class Ethic {
  constructor(name, cost, modifiers, tags) {
    this.name = name;
    this.cost = cost;
    this.modifiers = modifiers;
    this.tags = tags;
  }
}

var ethicsList = [
  "authoritarian",
  "fAuthoritarian",
  "egalitarian",
  "fEgalitarian",
  "xenophobe",
  "fXenophobe",
  "xenophile",
  "fXenophile",
  "materialist",
  "fMaterialist",
  "spiritualist",
  "fSpiritualist",
  "militarist",
  "fMilitarist",
  "pacifist",
  "fPacifist",
  "hiveMind"
];

var ethicsDict = {
  "authoritarian": new Ethic("Authoritarian", 1, {"popResettlementCostMult": -0.25, "countryUnrestUnhappySlaveEffectMult": -0.1}, ["allowsCasteSystem", "neverDemocracy", "allowsDisplace"]),
  "fAuthoritarian": new Ethic("Fanatic Authoritarian", 2, {"popResettlementCostMult": -0.5, "countryUnrestUnhappySlaveEffectMult": -0.2}, ["allowsCasteSystem", "onlyAutocracy", "allowsDisplace"]),
  "egalitarian": new Ethic("Egalitarian", 1, {"factionInfluenceMult": 0.15, "popConsumerGoodsMult": -0.1}, ["neverAutocracy", "allowUtopia", "disallowMigrationControl"]),
  "fEgalitarian": new Ethic("Fanatic Egalitarian", 2, {"factionInfluenceMult": 0.3, "popConsumerGoodsMult": -0.2}, ["onlyDemocracy", "allowUtopia", "disallowPoverty", "disallowMigrationControl"]),
  "xenophobe": new Ethic("Xenophobe", 1, {"rivalryInfluenceGain": 0.15, "countryBorderMult": 0.15}, ["allowsPurge", "allowsSlavery", "reducedDiplomacy", "neverAlienCitizenship", "neverAlienMilitaryService", "noRefugees"]),
  "fXenophobe": new Ethic("Fanatic Xenophobe", 2, {"rivalryInfluenceGain": 0.3, "countryBorderMult": 0.3}, ["allowsPurge", "allowsSlavery", "reducedDiplomacy", "neverAlienCitizenship", "neverAlienMilitaryService", "noRefugees"]),
  "xenophile": new Ethic("Xenophile", 1, {"countryTrustGrowth": 0.25, "diplomacyInfluenceCost": -0.25}, ["improvedDiplomacy", "disallowFullNativeTampering", "alwaysRefugees"]),
  "fXenophile": new Ethic("Fanatic Xenophile", 2, {"countryTrustGrowth": 0.5, "diplomacyInfluenceCost": -0.5}, ["alwaysMustAlienCitizenship", "improvedDiplomacy", "disallowFullNativeTampering", "alwaysRefugees"]),
  "spiritualist": new Ethic("Spiritualist", 1, {"planetUnrestAdd": -10, "popGovernmentEthicAttraction": 0.15}, ["allowsPsionics", "allowsTemple", "disallowAi"]),
  "fSpiritualist": new Ethic("Fanatic Spiritualist", 2, {"planetUnrestAdd": -20, "popGovernmentEthicAttraction": 0.3}, ["allowsPsionics", "allowsTemple", "disallowAi"]),
  "materialist": new Ethic("Materialist", 1, {"countryRobotMaintenanceMult": -0.1, "allTechnologyResearchSpeed": 0.05}, ["allowsAiRights"]),
  "fMaterialist": new Ethic("Fanatic Materialist", 2, {"countryRobotMaintenanceMult": -0.2, "allTechnologyResearchSpeed": 0.1}, ["allowsAiRights"]),
  "militarist": new Ethic("Militarist", 1, {"armyDamageMult": 0.1, "shipFireRateMult": 0.1}, ["allowFullBombardment", "cheaperWarGoals"]),
  "fMilitarist": new Ethic("Fanatic Militarist", 2, {"armyDamageMult": 0.2, "shipFireRateMult": 0.2}, ["allowFullBombardment", "cheaperWarGoals"]),
  "pacifist": new Ethic("Pacifist", 1, {"countryResourceUnityMult": 0.2, "countryCoreSectorSystemCap": 2}, ["disallowConquestWars"]),
  "fPacifist": new Ethic("Fanatic Pacifist", 2, {"countryResourceUnityMult": 0.4, "countryCoreSectorSystemCap": 4}, ["disallowOffensiveWars"]),
  "hiveMind": new Ethic("Hive Mind", 3, {"countryResourceInfluenceAdd": 1, "countryResourceUnityMult": 0.2, "popEnvironmentTolerance": 0.1, "popGrowthSpeed": 0.25}, ["hiveMindAuthority", "allowFullBombardment", "immortalRuler", "noFactions", "domesticPopSurvival", "foreignPopSurvival", "disallowAi", "ascensionRestrictions", "genemodding"])
};