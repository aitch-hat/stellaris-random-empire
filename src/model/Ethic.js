class Ethic {
  constructor(name, category, cost, modifiers, tags) {
    this.name = name;
    this.category = category;
    this.cost = cost;
    this.modifiers = modifiers;
    this.tags = tags;
  }
}

var ethicsList = [
  "Authoritarian",
  "Fanatic Authoritarian",
  "Egalitarian",
  "Fanatic Egalitarian",
  "Xenophobe",
  "Fanatic Xenophobe",
  "Xenophile",
  "Fanatic Xenophile",
  "Materialist",
  "Fanatic Materialist",
  "Spiritualist",
  "Fanatic Spiritualist",
  "Militarist",
  "Fanatic Militarist",
  "Pacifist",
  "Fanatic Pacifist",
  "Hive Mind"
];

var ethicsDict = {
  "Authoritarian": new Ethic("Authoritarian", "col", 1, {"popResettlementCostMult": -0.25, "countryUnrestUnhappySlaveEffectMult": -0.1}, ["allowsCasteSystem", "neverDemocracy", "allowsDisplace"]),
  "Fanatic Authoritarian": new Ethic("Fanatic Authoritarian", "col", 2, {"popResettlementCostMult": -0.5, "countryUnrestUnhappySlaveEffectMult": -0.2}, ["allowsCasteSystem", "onlyAutocracy", "allowsDisplace"]),
  "Egalitarian": new Ethic("Egalitarian", "col", 1, {"factionInfluenceMult": 0.15, "popConsumerGoodsMult": -0.1}, ["neverAutocracy", "allowUtopia", "disallowMigrationControl"]),
  "Fanatic Egalitarian": new Ethic("Fanatic Egalitarian", "col", 2, {"factionInfluenceMult": 0.3, "popConsumerGoodsMult": -0.2}, ["onlyDemocracy", "allowUtopia", "disallowPoverty", "disallowMigrationControl"]),
  "Xenophobe": new Ethic("Xenophobe", "xen", 1, {"rivalryInfluenceGain": 0.15, "countryBorderMult": 0.15}, ["allowsPurge", "allowsSlavery", "reducedDiplomacy", "neverAlienCitizenship", "neverAlienMilitaryService", "noRefugees"]),
  "Fanatic Xenophobe": new Ethic("Fanatic Xenophobe", "xen", 2, {"rivalryInfluenceGain": 0.3, "countryBorderMult": 0.3}, ["allowsPurge", "allowsSlavery", "reducedDiplomacy", "neverAlienCitizenship", "neverAlienMilitaryService", "noRefugees"]),
  "Xenophile": new Ethic("Xenophile", "xen", 1, {"countryTrustGrowth": 0.25, "diplomacyInfluenceCost": -0.25}, ["improvedDiplomacy", "disallowFullNativeTampering", "alwaysRefugees"]),
  "Fanatic Xenophile": new Ethic("Fanatic Xenophile", "xen", 2, {"countryTrustGrowth": 0.5, "diplomacyInfluenceCost": -0.5}, ["alwaysMustAlienCitizenship", "improvedDiplomacy", "disallowFullNativeTampering", "alwaysRefugees"]),
  "Spiritualist": new Ethic("Spiritualist", "spi", 1, {"planetUnrestAdd": -10, "popGovernmentEthicAttraction": 0.15}, ["allowsPsionics", "allowsTemple", "disallowAi"]),
  "Fanatic Spiritualist": new Ethic("Fanatic Spiritualist", "spi", 2, {"planetUnrestAdd": -20, "popGovernmentEthicAttraction": 0.3}, ["allowsPsionics", "allowsTemple", "disallowAi"]),
  "Materialist": new Ethic("Materialist", "spi", 1, {"countryRobotMaintenanceMult": -0.1, "allTechnologyResearchSpeed": 0.05}, ["allowsAiRights"]),
  "Fanatic Materialist": new Ethic("Fanatic Materialist", "spi", 2, {"countryRobotMaintenanceMult": -0.2, "allTechnologyResearchSpeed": 0.1}, ["allowsAiRights"]),
  "Militarist": new Ethic("Militarist", "mil", 1, {"armyDamageMult": 0.1, "shipFireRateMult": 0.1}, ["allowFullBombardment", "cheaperWarGoals"]),
  "Fanatic Militarist": new Ethic("Fanatic Militarist", "mil", 2, {"armyDamageMult": 0.2, "shipFireRateMult": 0.2}, ["allowFullBombardment", "cheaperWarGoals"]),
  "Pacifist": new Ethic("Pacifist", "mil", 1, {"countryResourceUnityMult": 0.2, "countryCoreSectorSystemCap": 2}, ["disallowConquestWars"]),
  "Fanatic Pacifist": new Ethic("Fanatic Pacifist", "mil", 2, {"countryResourceUnityMult": 0.4, "countryCoreSectorSystemCap": 4}, ["disallowOffensiveWars"]),
  "Hive Mind": new Ethic("Hive Mind", "hive", 3, {"countryResourceInfluenceAdd": 1, "countryResourceUnityMult": 0.2, "popEnvironmentTolerance": 0.1, "popGrowthSpeed": 0.25}, ["Hive MindAuthority", "allowFullBombardment", "immortalRuler", "noFactions", "domesticPopSurvival", "foreignPopSurvival", "disallowAi", "ascensionRestrictions", "genemodding"])
};