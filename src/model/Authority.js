class Authority {
  constructor(name, disallowedEthics) {
    this.name = name;
    this.disallowedEthics = disallowedEthics;
  }
}

// TODO: Add government types

var authorityList = [
  "Democratic",
  "Oligarchic",
  "Dictatorial",
  "Imperial",
  "Hive Mind"
];

var authorityDict = {
  "Democratic": new Authority("Democratic", ["Hive Mind", "Authoritarian", "Fanatic Authoritarian"]),
  "Oligarchic": new Authority("Oligarchic", ["Hive Mind", "Fanatic Egalitarian", "Fanatic Authoritarian"]),
  "Dictatorial": new Authority("Dictatorial", ["Hive Mind", "Egalitarian", "Fanatic Egalitarian"]),
  "Imperial": new Authority("Imperial", ["Hive Mind", "Egalitarian", "Fanatic Egalitarian"]),
  "Hive Mind": new Authority("Hive Mind", ["Authoritarian",
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
                                           "Fanatic Pacifist"])
};