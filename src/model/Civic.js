class Civic {
  constructor(name, requiredAuthority, requiredEthics, disallowedEthics, disallowedCivics, modifiers) {
    this.name = name;
    this.requiredAuthority = requiredAuthority;
    this.requiredEthics = requiredEthics;
    this.disallowedEthics = disallowedEthics;
    this.disallowedCivics = disallowedCivics;
    this.modifiers = modifiers;
  }
}

var civicsList = [
  "Imperial Cult",
  "Beacon of Liberty",
  "Exalted Priesthood",
  "Philosopher King",
  "Meritocracy",
  "Citizen Service",
  "Technocracy",
  "Police State",
  "Idealistic Foundation",
  "Environmentalist",
  "Slaver Guilds",
  "Inwards Perfection",
  "Warrior Culture",
  "Distinguished Admiralty",
  "Free Haven",
  "Cutthroat Politics",
  "Corporate Dominion",
  "Agrarian Idyll",
  "Shadow Council",
  "Mining Guilds",
  "Parliamentary System",
  "Efficient Bureaucracy",
  "Nationalistic Zeal",
  "Functional Architecture",
  "Aristocratic Elite",
  "Mechanists",
  "Synchretic Evolution",
  "Fanatic Purifiers",
  "Subspace Ephapse",
  "Natural Neural Network",
  "Ascetic",
  "One Mind",
  "Divided Attention",
  "Strength of Legions",
  "Subsumed Will",
  "Pooled Knowledge",
  "Devouring Swarm"
];

var civicsDict = {
  "Imperial Cult": new Civic("Imperial Cult", ["Imperial"], ["Authoritarian", "Spiritualist"], ["none"], ["none"], {"edictInfluenceCost": -0.33}),
  "Beacon of Liberty": new Civic("Beacon of Liberty", ["Democratic"], ["Egalitarian", "Xenophobe"], ["none"], ["none"], {"countryResourceUnityMult": 0.15}),
  "Exalted Priesthood": new Civic("Exalted Priesthood", ["Oligarchic"], ["Spirtualist"], ["none"], ["none"], {"popGovernmentEthicAttraction": 0.2}),
  "Philosopher King": new Civic("Philosopher King", ["Dictatorial", "Imperial"], ["none"], ["none"], ["none"], {"rulerSkillLevels": 2}),
  "Meritocracy": new Civic("Meritocracy", ["Democratic", "Oligarchic"], ["none"], ["none"], ["none"], {"leaderSkillLevels": 1, "countryLeaderPoolSize": 1}),
  "Citizen Service": new Civic("Citizen Service", ["Democratic", "Oligarchic"], ["Militarist"], ["Fanatic Xenophile"], ["none"], {"navySizeMult": 0.15}),
  "Technocracy": new Civic("Technocracy", ["none"], ["Materialist"], ["none"], ["none"], {"numTechAlternativesAdd": 1}),
  "Police State": new Civic("Police State", ["none"], ["none"], ["Fanatic Egalitarian"], ["none"], {"planetUnrestAdd": -20}),
  "Idealistic Foundation": new Civic("Idealistic Foundation", ["none"], ["Egalitarian"], ["none"], ["none"], {"popCitizenHappiness": 0.05}),
  "Environmentalist": new Civic("Environmentalist", ["none"], ["none"], ["none"], ["none"], {"popConsumerGoodsMult": -0.2}),
  "Slaver Guilds": new Civic("Slaver Guilds", ["none"], ["Authoritarian"], ["none"], ["none"], {"slaveFoodOutput": 0.1, "slaveMineralOutput": 0.1}),
  "Inwards Perfection": new Civic("Inwards Perfection", ["none"], ["Pacifist", "Xenophobe"], ["none"], ["none"], {"countryResourceUnityMult": 0.3}),
  "Warrior Culture": new Civic("Warrior Culture", ["none"], ["Militarist"], ["none"], ["none"], {"armyDamageMult": 0.2, "armyUpkeepMult": -0.2}),
  "Distinguished Admiralty": new Civic("Distinguished Admiralty", ["none"], ["Militarist"], ["none"], ["none"], {"shipFireRateMult": 0.08}),
  "Free Haven": new Civic("Free Haven", ["none"], ["Xenophile"], ["none"], ["none"], {"planetMigrationAllPull": 0.5}),
  "Cutthroat Politics": new Civic("Cutthroat Politics", ["none"], ["none"], ["none"], ["none"], {"countryResourceInfluenceAdd": 1}),
  "Corporate Dominion": new Civic("Corporate Dominion", ["Oligarchic"], ["none"], ["Xenophobe"], ["none"], {"countryResourceEnergyMult": 0.1}),
  "Agrarian Idyll": new Civic("Agrarian Idyll", ["none"], ["Pacifist"], ["Authoritarian"], ["none"], {"farmResourceUnityOutput": 1}),
  "Shadow Council": new Civic("Shadow Council", ["Democratic", "Oligarchic", "Dictatorial"], ["none"], ["none"], ["none"], {"countryElectionInfluenceCostMult": -0.5}),
  "Mining Guilds": new Civic("Mining Guilds", ["none"], ["none"], ["none"], ["none"], {"countryResourceMineralsMult": 0.1}),
  "Parliamentary System": new Civic("Parliamentary System", ["Democratic"], ["none"], ["none"], ["none"], {"factionInfluenceMult": 0.5}),
  "Efficient Bureaucracy": new Civic("Efficient Bureaucracy", ["none"], ["none"], ["none"], ["none"], {"countryCoreSectorSystemCap": 0.2}),
  "Nationalistic Zeal": new Civic("Nationalistic Zeal", ["none"], ["Militarist"], ["none"], ["none"], {"countryBorderMult": 0.1, "maxRivalries": 1}),
  "Functional Architecture": new Civic("Functional Architecture", ["none"], ["none"], ["none"], ["none"], {"planetBuildingCostMult": -0.15}),
  "Aristocratic Elite": new Civic("Aristocratic Elite", ["Oligarchic", "Imperial"], ["none"], ["none"], ["none"], {"leaderGovernorInfluenceCost": -0.5, "countryLeaderCap": 4}),
  "Mechanists": new Civic("Mechanists", ["none"], ["Materialist"], ["none"], ["Synchretic Evolution"], {"popsRobotOnStart": 4}),
  "Synchretic Evolution": new Civic("Synchretic Evolution", ["none"], ["none"], ["none"], ["Mechanists", "Fanatic Purifiers"], {"popsSynchreticOnStart": 4}),
  "Fanatic Purifiers": new Civic("Fanatic Purifiers", ["none"], ["fp"], ["none"], ["Synchretic Evolution"], {"shipFireRateMult": 0.33, "armyDamageMult": 0.33, "traditionCostNumXenoSlavesMult": -1.0}),
  "Subspace Ephapse": new Civic("Subspace Ephase", ["Hive Mind"], ["none"], ["none"], ["none"], {"navySizeMult": 0.15}),
  "Natural Neural Network": new Civic("Natural Neural Network", ["Hive Mind"], ["none"], ["none"], ["none"], {"numTechAlternativesAdd": 1}),
  "Ascetic": new Civic("Ascetic", ["Hive Mind"], ["none"], ["none"], ["none"], {"popConsumerGoodsMult": -0.2}),
  "One Mind": new Civic("One Mind", ["Hive Mind"], ["none"], ["none"], ["none"], {"countryResourceUnityMult": 0.15}),
  "Divided Attention": new Civic("Divided Attention", ["Hive Mind"], ["none"], ["none"], ["none"], {"countryCoreSectorSystemCap": 2}),
  "Strength of Legions": new Civic("Strength of Legions", ["Hive Mind"], ["none"], ["none"], ["none"], {"armyDamageMult": 0.2, "armyUpkeepMult": -0.2}),
  "Subsumed Will": new Civic("Subsumed Will", ["Hive Mind"], ["none"], ["none"], ["none"], {"countryResourceInfluenceAdd": 1}),
  "Pooled Knowledge": new Civic("Pooled Knowledge", ["Hive Mind"], ["none"], ["none"], ["none"], {"leaderSkillLevels": 1, "countryLeaderPoolSize": 1}),
  "Devouring Swarm": new Civic("Devourring Swarm", ["Hive Mind"], ["none"], ["none"], ["none"], {"shipHitpointsMult": 0.1,
                                                                                                  "shipAutoRepairAdd": 0.005,
                                                                                                  "armyDamageMult": 0.4,
                                                                                                  "categoryBiologyResearchSpeedMult": 0.2,
                                                                                                  "traditionCostNumXenoSlavesMult": -1.0})
}