// Initializing variables
let xp = 0;
let levelCost = 5;
let maxHealth = 100;
let health = maxHealth;
let gold = 50;
let currentWeapon = 0;
let alternateWeapon = 1;
let quickWeapon = 0;
let heavyWeapon = 1;
let playerLevel = 1;
let strength = 0;
let def = 0;
let critDmg = 2;
let critChance = 0.2;
let monMod = 1;
let goldMult = 1;
let dodgeChance = 0.1;
let floor = 1;
let procChance = .2;
let foodRegen = 10;
let addAttChance = .1;
let elementalDmgBuff = 1;
let frostMult = 1;
let xpBonus = 1;
let goldBonus = 1;
let lightningItemBuff = 1;
let iceItemBuff = 1;
let fireItemBuff = 1;
let poisonItemBuff = 1;
let poisonDecay = .4;
let speedItemBuff = 1;
let poison = false;
let defending = false;
let lightning = false;
let ice = false;
let fire = false;
let bossOne = true;
let bossTwo = true;
let bossThree = true;
let bossFour = true;
let finalBoss = true;
let fightingBoss = false;
let procUnlock = false;
let itemUnlock = false;
let floor2Shop = false;
let boughtSeconds = false;
let boughtQuarter = false;
let boughtSword = false;
let boughtScimitars = false;
let boughtGreatsword = false;
let poisoned = false;
let quick = true;
let tutorial = true;
let tutorial2 = false;
let firstStrike = true;
let storage = 0;
let defBonus = 0;
let leech = 0;
let poisonDmg = 0;
let jolt = 0;
let frost = 0;
let lightningDmg = 0;
let iceDmg = 0;
let fireDmg = 0;
let totalDmg = 0;
let numAttacks = 0;
let gambleNum = 0;
let monsterHealth = 0;
let fighting = 0;
let monsterDif = "";
let monDmg = 0;
let attDmg = 0;
let whatItem = 0;

function restart() {
   xp = 0;
   levelCost = 5;
   maxHealth = 100;
   health = maxHealth;
   gold = 50;
   currentWeapon = 0;
   alternateWeapon = 1;
   quickWeapon = 0;
   heavyWeapon = 1;
   playerLevel = 1;
    strength = 0;
    def = 0;
    critDmg = 2;
    critChance = 0.2;
    monMod = 1;
    goldMult = 1;
    dodgeChance = 0.1;
    floor = 1;
    procChance = .2;
    foodRegen = 10;
    addAttChance = .1;
    elementalDmgBuff = 1;
    frostMult = 1;
    xpBonus = 1;
    goldBonus = 1;
    lightningItemBuff = 1;
    iceItemBuff = 1;
    fireItemBuff = 1;
    poisonItemBuff = 1;
    poisonDecay = .4;
    speedItemBuff = 1;
    poison = false;
    defending = false;
    lightning = false;
    ice = false;
    fire = false;
    bossOne = true;
    bossTwo = true;
    bossThree = true;
    bossFour = true;
    finalBoss = true;
    fightingBoss = false;
    procUnlock = false;
    itemUnlock = false;
    floor2Shop = false;
    boughtSeconds = false;
    boughtQuarter = false;
    boughtSword = false;
    boughtScimitars = false;
    boughtGreatsword = false;
    poisoned = false;
    quick = true;
    tutorial = false;
    storage = 0;
    defBonus = 0;
    leech = 0;
    poisonDmg = 0;
    jolt = 0;
    frost = 0;
    lightningDmg = 0;
    iceDmg = 0;
    fireDmg = 0;
    totalDmg = 0;
    numAttacks = 0;
    gambleNum = 0;
    monsterHealth = 0;
    fighting = 0;
    monsterDif = "";
    monDmg = 0;
    attDmg = 0;
    whatItem = 0;

   for (i = items.length - 1; i >= 0; i--)
   {
      items[i].count = 0;
   }

   button4.style.display = "inline";
   button4.onclick = levelUp;

   healthText.innerText = `${health}/${maxHealth}`;
   xpText.innerText = `${xp}/${levelCost}`;
   goldText.innerText = gold;
   levelingText.innerText = "Level: " + playerLevel;
   updateLists();
   goTown();
   text.innerText = "Welcome to Dungeon Defeater! The town has been experiencing monster attacks leaking out of the dungeon. The town's defenses are crumbling! Go in and take the fight to the source of the trouble! Armed with a stick and a rock, you must progress through the dungeon to try and find a way to stop the invading monsters!";
}

/*                                    Other Notes:
Custom Item bonuses:
Monster health decrease (min 25%)?
Monster damage decrease (min 50%)?
Multiply weapon damage
proc items (bleed, ignite, shock, freeze)

Monster Ideas:
Living Armor (Special)

New concepts:
Elemental advantages

*/
// Initializing queries...

const button1 = document.querySelector('#button1');
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const button4 = document.querySelector("#button4");
const controls = document.querySelector("#controls");
const text = document.querySelector("#text");
const xpText = document.querySelector("#xpText");
const healthText = document.querySelector("#healthText");
const goldText = document.querySelector("#goldText");
const levelText = document.querySelector("#levelText");
const levelingText = document.querySelector("#levelingText");

const monsterStats = document.querySelector("#monsterStats");
const monsterName = document.querySelector("#monsterName");
const monsterDifText = document.querySelector("#monsterDif");
const monsterHealthText = document.querySelector("#monsterHealth");

const focusMenu = document.querySelector("#focusMenu");
const focusImage = document.querySelector("#focusImage");

const innerButtons = document.querySelector("#innerButtons");
const innerButton1 = document.querySelector("#innerButton1");
const innerButton2 = document.querySelector("#innerButton2");
const innerButton3 = document.querySelector("#innerButton3");
const innerButton4 = document.querySelector("#innerButton4");
const innerButton5 = document.querySelector("#innerButton5");
const innerButton6 = document.querySelector("#innerButton6");

const statButton = document.querySelector("#statShow");
const statList = document.querySelector("#statList");

const strStat = document.querySelector("#strengthStat");
const defStat = document.querySelector("#defenseStat");
const critDStat = document.querySelector("#critDamageStat");
const critCStat = document.querySelector("#critChanceStat");
const dodgeStat = document.querySelector("#dodgeStat");
const addAttStat = document.querySelector("#addAttStat");
const elemDmgBonus = document.querySelector("#elemDmgBonus");

const itemList = document.querySelector("#itemList");
const itemShow = document.querySelector("#itemShow");

const sapRingCount = document.querySelector("#sapRingCount");
const sapRingDesc = document.querySelector("#sapRingDesc");
const goldScarCount = document.querySelector("#goldScarCount");
const goldScarDesc = document.querySelector("#goldScarDesc");
const repScrapCount = document.querySelector("#repScrapCount");
const repScrapDesc = document.querySelector("#repScrapDesc");
const bloodPenCount = document.querySelector("#bloodPenCount");
const bloodPenDesc = document.querySelector("#bloodPenDesc");
const dwarfCharmCount = document.querySelector("#dwarfCharmCount");
const dwarfCharmDesc = document.querySelector("#dwarfCharmDesc");
const arcCount = document.querySelector("#arcCount");
const arcDesc = document.querySelector("#arcDesc");
const kamaCount = document.querySelector("#kamaCount");
const kamaDesc = document.querySelector("#kamaDesc");
const featherCount = document.querySelector("#featherCount");
const featherDesc = document.querySelector("#featherDesc");
const hydraTeethCount = document.querySelector("#hydraTeethCount");
const hydraTeethDesc = document.querySelector("#hydraTeethDesc");
const wingHelmCount = document.querySelector("#wingHelmCount");
const wingHelmDesc = document.querySelector("#wingHelmDesc");
const bayCount = document.querySelector("#bayCount");
const bayDesc = document.querySelector("#bayDesc");
const monocleCount = document.querySelector("#monocleCount");
const monocleDesc = document.querySelector("#monocleDesc");

// Initializing Menu
xpText.innerText = `${xp}/${levelCost}`;
healthText.innerText = `${health}/${maxHealth}`;
goldText.innerText = gold;
focusMenu.style.display = "none";
// WEAPONS
const weapons = [
   { name: 'stick', power: 2, buildup: 2, speed: 3, upgrade: 0, price: 0},
   { name: 'rock', power: 6, buildup: 3, speed: 1, upgrade: 0, price: 0},
   { name: 'dagger', power: 4, buildup: 5, speed: 2, upgrade: 0, price: 200 },
   { name: 'axe', power: 10, buildup: 4, speed: 1, upgrade: 0, price: 200 },
   { name: 'quarterstaff', power: 6, buildup: 9, speed: 3, upgrade: 0, price: 1300 },
   { name: 'sword', power: 20, buildup: 14, speed: 1, upgrade: 0, price: 1300 },
   { name: 'scimitars', power: 8, buildup: 15, speed: 4, upgrade: 0, price: 4750 },
   { name: 'greatsword', power: 44, buildup: 17, speed: 1, upgrade: 0, price: 4750 }
];

// MONSTERS
const monsters = [
   {
      // floor 1
      // 0
      name: "Slime",
      level: 1,
      health: 25,
      difficulty: "Easy",
      image: "images/slime.jpeg"
   },
   {
      // floor 1
      // 1
      name: "Tusked Boar",
      level: 3,
      health: 100,
      difficulty: "Hard",
      image: "images/boar.jpeg"
   },
   {
      // floor 1 boss
      // 2
      name: "Large Tusked Boar",
      level: 5,
      health: 250,
      difficulty: "First Boss",
      image: "images/largeBoar.jpeg"
   },
   {
      // floor 1
      // 3
      name: "Giant Beetle",
      level: 2,
      health: 55,
      difficulty: "Medium",
      image: "images/bug.jpeg"
   },
   {
      // floor 2
      // 4
      name: "Flower Mimic",
      level: 7,
      health: 230,
      difficulty: "Easy",
      image: "images/flower.png"
   },
   {
      // Special Monster
      // 5
      name: "Massive Slime",
      level: 10,
      health: 10000,
      difficulty: "Special",
      image: "images/largeSlime.jpeg"
   },
   {
      // floor 2
      // 6
      name: "Small Stone Golem",
      level: 9,
      health: 550,
      difficulty: "Medium",
      image: "images/smallStoneGolem.jpeg"
   },
   {
      // floor 2 boss
      // 7
      name: "Massive Bearded Dragon",
      level: 15,
      health: 800,
      difficulty: "Second Boss",
      image: "images/giantBeardedDragon.jpeg"
   },
   {
      // floor 2
      // 8
      name: "Insane Adventurer",
      level: 12,
      health: 400,
      difficulty: "Hard",
      image: "images/insaneMan.jpeg"
   },
   {
      // floor 3
      // 9
      name: "Fire Elemental",
      level: 17,
      health: 700,
      difficulty: "Easy",
      image: "images/fireElemental.jpeg"
   },
   {
      // floor 3
      // 10
      name: "Large Stone Golem",
      level: 20,
      health: 1250,
      difficulty: "Medium",
      image: "images/largeStoneGolem.jpeg"
   },
   {
      // floor 3
      // 11
      name: "Lava Lizard",
      level: 24,
      health: 1000,
      difficulty: "Hard",
      image: "images/lavaLizard.jpeg"
   },
   {
      // floor 3 boss
      // 12
      name: "Red Dragon",
      level: 30,
      health: 4000,
      difficulty: "FINAL BOSS",
      image: "images/redDragon.jpeg"
   },
   {
      // Phantom
      // 13
      name: "The Ghost of Red Dragon",
      level: 50,
      health: 10000,
      difficulty: "Good Luck",
      image: "images/redPhantom.jpeg"
   }
];

// LOCATIONS
const locations = [
   {
      // 0
      name: "town square",
      "button text": ["Go to store", "Go to dungeon", "Go to item store"],
      "button functions": [goStore, goDung, itemStore],
      text: "You are in the town square. You see a sign that says \"Store\"."
   },
   {
      // 1
      name: "store",
      "button text": ["Go back to Town", "", ""],
      "button functions": [goTown, null, null],
      text: "You enter the store."
   },
   {
      // 2
      name: "Dungeon",
      "button text": ["Fight monster", "Go deeper in", "Go to town square"],
      "button functions": [monsterSearch, goDeeper, goTown],
      text: "Your in the first floor of the dungeon, it's rough stone architecture is worn and mossy. It's crawling with monsters..."
   },
   {
      // 3
      name: "fight",
      "button text": ["Run!", "", ""],
      "button functions": [goFloor, null, null],
      text: "You approach the nearest monster."
   },
   {
      // 4
      name: "kill monster",
      "button text": ["Go to town square", "Continue on this floor", ""],
      "button functions": [goTown, goFloor, null],
      text: 'The monster screams "Arg!" as it dies. You gain experience points and find gold.'
   },
   {
      // 5
      name: "lose",
      "button text": ["REPLAY?", "", ""],
      "button functions": [restart, null, null],
      text: "You die. &#x2620;"
   },
   {
      // 6
      name: "win",
      "button text": ["REPLAY?", "CONTINUE?", ""],
      "button functions": [restart, goTown, null],
      text: "You've defeated the Red Dragon! The town can live with a little more peace now, all thanks to you!' &#x1F389;"
   },
   {
      // 7
      name: "easter egg",
      "button text": ["2", "8", "Go to town square?"],
      "button functions": [pickTwo, pickEight, goTown],
      text: "You find a secret game. Pick a number above. Ten numbers will be randomly chosen between 0 and 10. If the number you choose matches one of the random numbers, you win!"
   },
   {
      // 8
      name: "level up",
      "button text": ["", "", ""],
      "button functions": [null, null, null],
      text: "You have leveled up! You have grown more powerful! But you can additionally choose an effect to apply to your journey!"
   },
   {
      // 9
      name: "item store",
      "button text": ["Go to town square", "", ""],
      "button functions": [goTown, null, null],
      text: "Sorry, under construction!"
   },
   {
      // 10
      name: "Final Floor",
      "button text": ["Fight monster", "Fight final boss", "Go to town square"],
      "button functions": [monsterSearch, goDeeper, goTown],
      text: "You have reached the thrid and final floor, the master of the dungeon lurks nearby..."
   },
   {
      // 11
      name: "Special Weapons Store",
      "button text": ["Go back to town", "go back to the main dungeon", ""],
      "button functions": [goTown, goFloor, null],
      text: "Come back later for more!"
   }
];
const innerLocations = [
   {
      // 0
      name: "inner store",
      text: [`buy food for ${foodRegen} health (10 gold)`, `buy a dagger and axe (${weapons[2].price} gold)`, `buy a quarterstaff (${weapons[4].price} gold)`, `buy a sword (${weapons[5].price} gold)`, `buy scimitars (${weapons[6].price} gold)`, `buy a greatsword (${weapons[7].price} gold)`],
      functions: [buyHealth, equipSeconds, equipQuarter, equipSword, equipScimitars, equipGreatsword],
      background: "lightblue"
   },
   {
      // 1
      name: "inner level up",
      text: ["Strength +5",
         "Defense +5, Max Health +50",
         "Elemental Damage +10%", "Dodge Chance +5%, Extra Attack Chance +5%", "", ""],
      functions: [dmgBuff, defenseBuff, elemBuff, speedBuff, null, null],
      background: "lightblue"
   },
   {
      // 2
      name: "inner fight",
      text: [`Alternate`, "Defend", "Imbue your weapon with poison", "Imbue your weapon with fire", "Imbue your weapon with ice", "imbue your weapon with lightning"],
      functions: [switchWeapon, defend, addPoison, addFire, addIce, addLightning],
      background: "#ef8011"
   }
];

// initialize buttons
button1.onclick = null;
button2.onclick = goDung;
button3.onclick = restart;
button3.innerText = "Skip tutorial";
button4.onclick = null;
itemShow.onclick = viewItems;
itemShow.style.display = "none";

statButton.onclick = viewPlayerStats;

innerButton1.onclick = dmgBuff;
innerButton2.onclick = defenseBuff;
innerButton3.onclick = elemBuff;
innerButton5.onclick = speedBuff;

function update(location) {
   monsterStats.style.display = "none";
   innerButtons.style.display = "none";
   button1.innerText = location["button text"][0];
   button2.innerText = location["button text"][1];
   button3.innerText = location["button text"][2];
   button1.onclick = location["button functions"][0];
   button2.onclick = location["button functions"][1];
   button3.onclick = location["button functions"][2];
   text.innerHTML = location.text;
   if (itemUnlock) {
      itemShow.style.display = "inline";
   } else { itemShow.style.display = "none"; }
   if (button1.innerText == "") { button1.style.display = "none"; } else { button1.style.display = "inline"; }
   if (button2.innerText == "") { button2.style.display = "none"; } else { button2.style.display = "inline"; }
   if (button3.innerText == "") { button3.style.display = "none"; } else { button3.style.display = "inline"; }
   updateLists();

}

// innerButtons display bug because of update function
function innerUpdate(num) {
   innerButtons.style.display = "flex";
   innerButton1.innerText = innerLocations[num].text[0];
   innerButton2.innerText = innerLocations[num].text[1];
   innerButton3.innerText = innerLocations[num].text[2];
   innerButton4.innerText = innerLocations[num].text[3];
   innerButton5.innerText = innerLocations[num].text[4];
   innerButton6.innerText = innerLocations[num].text[5];
   innerButton1.onclick = innerLocations[num].functions[0];
   innerButton2.onclick = innerLocations[num].functions[1];
   innerButton3.onclick = innerLocations[num].functions[2];
   innerButton4.onclick = innerLocations[num].functions[3];
   innerButton5.onclick = innerLocations[num].functions[4];
   innerButton6.onclick = innerLocations[num].functions[5];
   innerButtons.style.backgroundColor = innerLocations[num].background;

   if (num == 0) {
      innerButton1.innerText = `buy food for ${foodRegen} health (10 gold)`;
      if (boughtSeconds) { innerButton2.innerText = `upgrade your axe and dagger (${weapons[2].price} gold)`; }
      if (boughtQuarter) { innerButton3.innerText = `upgrade your quarterstaff (${weapons[4].price} gold)`; }
      if (boughtSword) { innerButton4.innerText = `upgrade your Sword (${weapons[5].price} gold)`; }
      if (boughtScimitars) { innerButton5.innerText = `upgrade your scimitars (${weapons[6].price} gold)`; }
      if (boughtGreatsword) { innerButton6.innerText = `upgrade your greatsword (${weapons[7].price} gold)`; }
   }

   if (num == 1)
   {
      if (dodgeChance > .35) { innerButton4.innerText = "Extra Attack Chance +5%"; }
   }

   if (num == 2) {
      innerButton1.innerText = `alternate your weapon (${weapons[currentWeapon].name} -> ${weapons[alternateWeapon].name})`;
   }

   if (innerButton1.innerText == "") { innerButton1.style.display = "none"; } else { innerButton1.style.display = "inline"; }
   if (innerButton2.innerText == "") { innerButton2.style.display = "none"; } else { innerButton2.style.display = "inline"; }
   if (innerButton3.innerText == "") { innerButton3.style.display = "none"; } else { innerButton3.style.display = "inline"; }
   if (innerButton4.innerText == "") { innerButton4.style.display = "none"; } else { innerButton4.style.display = "inline"; }
   if (innerButton5.innerText == "") { innerButton5.style.display = "none"; } else { innerButton5.style.display = "inline"; }
   if (innerButton6.innerText == "") { innerButton6.style.display = "none"; } else { innerButton6.style.display = "inline"; }
}

function viewPlayerStats() {
   updateLists();
   statList.style.display = "block";
   statButton.onclick = closePlayerStats;
}

function closePlayerStats() {
   statList.style.display = "none";
   statButton.onclick = viewPlayerStats;
}

function updateLists() {
   strStat.innerText = Math.floor(strength);
   defStat.innerText = Math.floor(def);
   critCStat.innerText = Math.floor(critChance*100) + "%";
   critDStat.innerText = Math.floor(critDmg*100) + "%";
   dodgeStat.innerText = Math.floor(dodgeChance*100*speedItemBuff) + "%";
   addAttStat.innerText = Math.floor(addAttChance*100*speedItemBuff) + "%";
   elemDmgBonus.innerText = Math.floor(elementalDmgBuff*100) + "%";

   sapRingCount.innerText = items[0].count;
   sapRingDesc.innerText = items[0].effect;
   goldScarCount.innerText = items[1].count;
   goldScarDesc.innerText = items[1].effect;
   repScrapCount.innerText = items[2].count;
   repScrapDesc.innerText = items[2].effect;
   bloodPenCount.innerText = items[3].count;
   bloodPenDesc.innerText = items[3].effect;
   dwarfCharmCount.innerText = items[4].count;
   dwarfCharmDesc.innerText = items[4].effect;
   arcCount.innerText = items[5].count;
   arcDesc.innerText = items[5].effect;
   kamaCount.innerText = items[6].count;
   kamaDesc.innerText = items[6].effect;
   featherCount.innerText = items[7].count;
   featherDesc.innerText = items[7].effect;
   hydraTeethCount.innerText = items[8].count;
   hydraTeethDesc.innerText = items[8].effect;
   wingHelmCount.innerText = items[9].count;
   wingHelmDesc.innerText = items[9].effect;
   bayCount.innerText = items[10].count;
   bayDesc.innerText = items[10].effect;
   monocleCount.innerText = items[11].count;
   monocleDesc.innerText = items[11].effect;

   updateItems();
}

function viewItems() {
   updateLists();
   itemList.style.display = "block";
   itemShow.onclick = closeItems;
}

function closeItems() {
   itemList.style.display = "none";
   itemShow.onclick = viewItems;
}

function goTown() {
   fightingBoss = false;
   update(locations[0]);
   floor = 0;
   if (tutorial2)
   {
      text.innerText = "Now that you know how the game works, you can start to explore the cave and find the source of the danger inside the dungeon.";
      button1.onclick = restart;
      button1.innerText = "Start your adventure";
      button2.style.display = "none";
      button3.style.display = "none";
      button4.style.display = "none";
      button4.style.display = "none";
      tutorial2 = false;
   }
   if (itemUnlock) {
      button3.style.display = "inline";
      text.innerText += " You can also see a more hidden building that says store on it but in a fancier font.";
   } else { button3.style.display = "none"; }
}

function goStore() {
   update(locations[1])
   innerUpdate(0);
   if (tutorial)
   {
      tutorial2 = true;
      text.innerText = "You can heal with meals or buy and upgrade weapons here at the town.";
   }
}

function goDung() {
   fightingBoss = false;
   floor = 1;
   update(locations[2]);
   if (tutorial)
   {
      text.innerText += "\n\nTo start, you need to know how to fight monsters! Click \"Fight Monster\" to find one to fight";
      button2.onclick = null;
      button3.onclick = null;
   }
}

function goFloor() {
   jolt = 0;
   lightning = false;
   fire = false;
   ice = false;
   poison = false;
   button4.style.display = "inline";
   focusMenu.style.display = "none";
   fightingBoss = false;
   update(locations[2]);
   if (floor == 2) {
      text.innerText = "You've reached the second floor. The atmosphere is hot, The stones making up this floor are toasty and scald your boots. The monsters here are much more powerful!";
   } else if (floor == 3){
      update(locations[10]);
   } else if (!finalBoss && fightingBoss)
   {
      text.innerText = "The phantom follows you... There is no escape from your past";
   }
}

function itemStore() {
   update(locations[9]);
}

function specialStore() {
   update(locations[11]);
}

let items = [
   {
      // XP INCREASE 0
      name: "Sapphire ring",
      count: 0,
      text: "A small sapphire encased in a gold ring, I wonder who was getting married...",
      effect: "Increases XP gained by 20% per stack"
   },
   {
      // GOLD MULTIPLIER 1
      name: "Golden Scarab",
      count: 0,
      text: "A treasure from another world. It gifts riches upon those who adorn it.",
      effect: "Increase gold gained by 20% per stack"
   },
   {
      // FLAT DAMAGE RESISTANCE 2
      name: "Repulsion Armor Scrap",
      count: 0,
      text: "\"No, this is completely original... NO DON\'T LOOK IT UP!\"",
      effect: "Reduces damage taken from each hit by 5 per stack"
   },
   {
      // HEAL ON KILL 3
      name: "Blood Drop Pendant",
      count: 0,
      text: "Dark magic infused in a small, red, perfectly cut gem.",
      effect: "Killing an enemy grants you 10 health per stack"
   },
   {
      // MEAL EFFECTIVENESS 4
      name: "Dwarf Charm",
      count: 0,
      text: "A small charm of a dwarf with a large, black beard. He must've been a great cook in his time...",
      effect: "Increases the health you recover from meals by 5 per stack"
   },
   {
      // Lightning Enhance 5
      name: "Arcing Conduit",
      count: 0,
      text: "A small, glowing, blue metal object. Electricity radiates off of it, making it a good conductor.",
      effect: "Enhances lightning damage and the stacking jolt effect it inflicts by 20% per stack"
   },
   {
      // Ice Enhance 6
      name: "Strange Ice Kama",
      count: 0,
      text: "A dark blue kama made of ice, etched into it's frozen handle is the word \"Squall\".",
      effect: "Enhances ice damage and the stacking frost it inflicts by 20% per stack"
   },
   {
      // Fire Enhance 7
      name: "Phoenix Feather",
      count: 0,
      text: "It scalds the skin on contact, handle with care.",
      effect: "Enhances fire damage by 30% per stack"
   },
   {
      // Poison Enhance 8
      name: "Hydra Teeth",
      count: 0,
      text: "WHERE ARE ALL OF THESE COMING FROM??? WHICH IDIOT DID THIS?????",
      effect: "Enhances poison damage by 15% per stack and makes it decay slower (60% decay per turn normally, +5% kept each stack at a maximum of 90% kept"
   },
   {
      // Speed Increase 9
      name: "Winged Helmet",
      count: 0,
      text: "Said to have been worn by the god of swiftness",
      effect: "Increase chance to dodge and initiate additional attacks by 10% per stack"
   },
   {
      // Crit Damage 10
      name: "Old Bayonet",
      count: 0,
      text: "How do you even use this? It looks like it needs to attach to something...",
      effect: "Increase critical damage by 25% per stack"
   },
   {
      // Crit Chance 11
      name: "Monocle",
      count: 0,
      text: "\"Oh look at me I'm so dapper.\"",
      effect: "Increase critical chance by 5% per stack"
   }
]
/*
Custom Item bonuses:
increase weapon dmg
*/

function chanceItem() {
   if (Math.random() > .7)
   {
      whatItem = Math.floor(Math.random() * 12);
      items[whatItem].count++;
      updateItems();
      // pin
      text.innerText += " The " + monsters[fighting].name + " dropped a " + items[whatItem].name + "!\n\n" + items[whatItem].text;
      itemUnlock = true;
      updateLists();
   }
}

function updateItems() {
   xpBonus = 1 + .2 * items[0].count;
   goldBonus = 1 + .2 * items[1].count;
   defBonus = 5 * items[2].count;
   leech = 10 * items[3].count;
   foodRegen = 10 + 5 * items[4].count;
   lightningItemBuff = 1 + .2 * items[5].count;
   iceItemBuff = 1 + .2 * items[6].count;
   fireItemBuff = 1 + .3 * items[7].count;
   poisonItemBuff = 1 + .15 * items[8].count;
   poisonDecay = .5 + .05 * items[8].count;
   if (poisonDecay < .9) { poisonDecay = .9;}
   speedItemBuff = 1 + .1 * items[9].count;
   critDmg = 2 + .25 * items[10].count;
   critChance = .2 + .05 * items[11].count;
}

function buyHealth() {
   if (gold >= 10) {
      if (health != maxHealth) {
         gold -= 10;
         health += foodRegen;
         if (health > maxHealth) { health = maxHealth; }
         goldText.innerText = gold;
         healthText.innerText = `${health}/${maxHealth}`;
      } else { text.innerText = "You already have max health!"; }
   } else {
      text.innerText = "You do not have enough gold to buy health.";
   }
}

function equipSeconds() {
 if (!boughtSeconds) {
   if (gold < weapons[2].price) { text.innerText = "You don't have enough for that!"; }
   else {
      boughtSeconds = true;
      if (quickWeapon > 2 && heavyWeapon > 3)
      {
         text.innerText = "You already have a more powerful weapon in both slots!";
      } else {
         if (quickWeapon < 2) { quickWeapon = 2; }
         else { text.innerText = "You already have a more powerful weapon in this slot!"; }
         if (heavyWeapon < 3) { heavyWeapon = 3; }
         else { text.innerText = "You already have a more powerful weapon in this slot!"; }
      if (quick)
         {
            currentWeapon = quickWeapon;
            alternateWeapon = heavyWeapon;
         } else {
            currentWeapon = heavyWeapon;
            alternateWeapon = quickWeapon;
         }
      text.innerText = `You bought the ${weapons[2].name} and ${weapons[3].name}!`;
      gold -= weapons[2].price;
      goldText.innerText = gold;
      weapons[2].price = Math.floor(weapons[2].price * 2.5);
      weapons[3].price = weapons[2].price;
      innerUpdate(0);
      }
   }
 } else {
   if (gold < weapons[2].price) { text.innerText = "You don't have enough for that!"; } else {
      gold -= weapons[2].price;
      goldText.innerText = gold;
      weapons[2].upgrade++;
      weapons[3].upgrade++;
      text.innerText = `You upgrade both your dagger and axe!`;
      weapons[2].price = Math.floor(weapons[2].price * 1.5);
      weapons[3].price = weapons[2].price;
      innerUpdate(0);
   }
 }
}

function equipQuarter() {
   if (!boughtQuarter) {
      if (gold < weapons[4].price) { text.innerText = "You don't have enough for that!"; }
      else {
         boughtQuarter = true;
         if (quickWeapon > 4)
         {
            text.innerText = "You already have a more powerful weapon in this slot!";
         } else {
         quickWeapon = 4;
         if (quick)
         {
            currentWeapon = quickWeapon;
            alternateWeapon = heavyWeapon;
         } else {
            alternateWeapon = quickWeapon;
            currentWeapon = heavyWeapon;
         }
         text.innerText = `You bought the ${weapons[4].name}!`;
         gold -= weapons[4].price;
         goldText.innerText = gold;
         weapons[4].price = Math.floor(weapons[4].price * 2);
         innerUpdate(0);
         }
      }
    } else {
      if (gold < weapons[4].price) { text.innerText = "You don't have enough for that!"; } else {
         gold -= weapons[4].price;
         goldText.innerText = gold;
         weapons[4].upgrade++;
         text.innerText = `You upgrade your ${weapons[4].name}!`;
         weapons[4].price = Math.floor(weapons[4].price * 1.5);
         innerUpdate(0);
    }
   }
}

function equipSword() {
   if (!boughtSword) {
      if (gold < weapons[5].price) { text.innerText = "You don't have enough for that!"; }
      else {
         boughtSword = true;
         if (heavyWeapon > 5) {
            text.innerText = "You already have a more powerful weapon in this slot!";
         } else {
         heavyWeapon = 5;
         if (quick)
            {
               currentWeapon = quickWeapon;
               alternateWeapon = heavyWeapon;
            } else {
               currentWeapon = heavyWeapon;
               alternateWeapon = quickWeapon;
            }
         text.innerText = `You bought the ${weapons[currentWeapon].name}!`;
         gold -= weapons[5].price;
         goldText.innerText = gold;
         weapons[5].price = Math.floor(weapons[5].price * 2);
         innerUpdate(0);
         }
      }
    } else {
      if (gold < weapons[5].price) { text.innerText = "You don't have enough for that!"; } else {
         gold -= weapons[5].price;
         goldText.innerText = gold;
         weapons[5].upgrade++;
         text.innerText = `You upgrade your ${weapons[5].name}!`;
         weapons[5].price = Math.floor(weapons[5].price * 1.5);
         innerUpdate(0);
    }
    }
}

function equipScimitars() {
   if (!boughtScimitars) {
      if (gold < weapons[6].price) { text.innerText = "You don't have enough for that!"; }
      else {
         boughtScimitars = true;
         quickWeapon = 6;
         if (quick)
            {
               currentWeapon = quickWeapon;
               alternateWeapon = heavyWeapon;
            } else {
               currentWeapon = heavyWeapon;
               alternateWeapon = quickWeapon;
            }
         text.innerText = `You bought the ${weapons[currentWeapon].name}!`;
         gold -= weapons[6].price;
         goldText.innerText = gold;
         weapons[6].price = Math.floor(weapons[6].price * 2);
         innerUpdate(0);
      }
    } else {
      if (gold < weapons[6].price) { text.innerText = "You don't have enough for that!"; } else {
         gold -= weapons[6].price;
         goldText.innerText = gold;
         weapons[6].upgrade++;
         text.innerText = `You upgrade your ${weapons[6].name}!`;
         weapons[6].price = Math.floor(weapons[6].price * 1.5);
         innerUpdate(0);
    }
    }
}

function equipGreatsword() {
   if (!boughtGreatsword) {
      if (gold < weapons[7].price) { text.innerText = "You don't have enough for that!"; }
      else {
         boughtGreatsword = true;
         heavyWeapon = 7;
         if (quick)
            {
               currentWeapon = quickWeapon;
               alternateWeapon = heavyWeapon;
            } else {
               currentWeapon = heavyWeapon;
               alternateWeapon = quickWeapon;
            }
         text.innerText = `You bought the ${weapons[currentWeapon].name}!`;
         gold -= weapons[7].price;
         goldText.innerText = gold;
         weapons[7].price = Math.floor(weapons[7].price * 2);
         innerUpdate(0);
      }
    } else {
      if (gold < weapons[7].price) { text.innerText = "You don't have enough for that!"; } else {
         gold -= weapons[7].price;
         goldText.innerText = gold;
         weapons[7].upgrade++;
         text.innerText = `You upgrade your ${weapons[7].name}!`;
         weapons[7].price = Math.floor(weapons[7].price * 1.5);
         innerUpdate(0);
    }
    }
}

function levelUp() {
   if (xp >= levelCost) {
      xp -= levelCost;
      xp = Math.floor(xp);
      levelCost = Math.floor(levelCost * 1.2);
      playerLevel++;
      xpText.innerText = `${xp}/${levelCost}`;
      levelingText.innerText = "Level: " + playerLevel;
      strength += 5;
      def += 5;
      update(locations[8]);
      innerUpdate(1);
      controls.style.display = "none";
      updateLists();
      text.innerText = "Click one of the bonuses to increase your stats!";
   }
   else {
      text.innerText = "You don't have the XP for that!";
   }
}

function levelUpReturn() {
   if (floor == 0) { goTown(); }
   else { goFloor(); }
   goTown();
   if (tutorial)
   {
      text.innerText = "Leveling up brings you back to town, now you might need to go heal up in the store.";
      button2.onclick = null;
      button3.onclick = null;
   }
   innerButtons.style.display = "none";
   controls.style.display = "flex";
}

function defenseBuff() {
   def += 5;
   maxHealth += 50;
   healthText.innerText = `${health}/${maxHealth}`;
   levelUpReturn();
}

function dmgBuff() {
   strength += 5;
   levelUpReturn();
}

function elemBuff() {
   elementalDmgBuff += .1;
   levelUpReturn();
}

function speedBuff() {
   if (dodgeChance <= .35) { dodgeChance += .05; }
   addAttChance += .05;
   levelUpReturn();
}

function monsterSearch() {
   let mons = Math.floor(Math.random() * 100);
   if (mons <= 50) {
      if (floor == 1) {
         fighting = 0;
      } else if (floor == 2) {
         fighting = 4;
      } else {
         fighting = 9;
      }
   }
   else if (mons <= 80) {
      if (floor == 1) {
         fighting = 3;
      } else if (floor == 2) {
         fighting = 6;
      } else { fighting = 10; }
   } else if (mons <= 98) {
      if (floor == 1) {
         fighting = 1;
      } else if (floor == 2) {
         fighting = 8;
      } else { fighting = 11; }
   } else if (!bossTwo) {
      fighting = 5;
   } else { monsterSearch(); }
   if (tutorial) { fighting = 0; }
   goFight();
}

function goDeeper() {
   if (bossOne && floor == 1) {
      fightingBoss = true;
      fighting = 2;
      goFight();
   } else if (bossTwo && floor == 2) {
      fightingBoss = true;
      fighting = 7;
      goFight();
   } else if (finalBoss && floor == 3) {
      fightingBoss = true;
      fighting = 12;
      goFight();
   } else if(!finalBoss && floor == 3) {
      fightingBoss = true;
      fighting = 13;
      goFight();
   } else if (floor == 1) {
      floor++;
      text.innerText = "You've reached the second floor. The atmosphere is hot, The stones making up this floor are toasty and scald your boots. The monsters here are much more powerful!";
   }
   else {
      floor++;
      update(locations[10]);
   }
}

function goFight() {
   button4.style.display = "none";
   update(locations[3]);
   focusImage.src = monsters[fighting].image;
   focusMenu.style.display = "flex";
   monsterHealth = Math.floor(monsters[fighting].health * monMod);
   monsterStats.style.display = "block";
   monsterName.innerText = monsters[fighting].name;
   monsterHealthText.innerText = monsterHealth;
   monsterDifText.innerText = monsters[fighting].difficulty;
   if (fightingBoss) {
      text.innerText = "A " + monsters[fighting].name + " is blocking the way!";
      if (!bossOne && !bossTwo) {
         text.innerText = "The final fight... The Red Dragon approaches!";
      }
      if (!finalBoss)
      {
         text.innerText = "A phantom haunts you, more powerful than before...";
      }
   } else if (fighting == 5) {
      text.innerText = "A special Slime has appeared!!";
   }
   innerUpdate(2);
   focusImage.onclick = playerAttack;
   if (tutorial)
   {
      text.innerText += "\n\nHere is your first monster, to attack it you click the image. To switch your weapon, click the leftmost button. However you will want to add some magic to your weapon to enhance it! Click each of them to learn what they do";
      button1.onclick = null;
   }
}

function switchWeapon() {
   storage = currentWeapon;
   currentWeapon = alternateWeapon;
   alternateWeapon = storage;
   if (quick)
   {
      quick = false;
   } else {
      quick = true;
   }
   innerUpdate(2);
   text.innerText = `You have swapped to your ${weapons[currentWeapon].name}`;
   if (tutorial)
   {
      text.innerText += "\n\nYou have two weapons, a quick one that guarantees multiple attacks in one turn, and a heavy one that attacks once (or more according to the additional attack chance) but does more damage.";
   }
}

function defend() {
   text.innerText = `You ready yourself for the ${monsters[fighting].name}'s attack`;
   if (tutorial) { text.innerText += " Defending reduces the ememy's damage to 1/4 it's original value"; }
   defending = true;
   setTimeout(monsterAttack, 2000);
}

function addPoison() {
   poison = true;
   lightning = false;
   ice = false;
   fire = false;
   text.innerText = "You imbue your weapon with deadly poison!";
   if (tutorial)
   {
      text.innerText += "\n\nPoison adds some damage over time to the enemy. however it's damage decays over time (-60% per turn). Quick weapons apply more poison overall than heavy weapons.";
   }
}

function addFire() {
   fire = true;
   lightning = false;
   ice = false;
   poison = false;
   text.innerText = "You imbue your weapon with raging fire!";
   if (tutorial)
   {
      text.innerText += "\n\nFire adds a large amount of damage to your attack, but it only applies to the first strike. If the enemy is \"frosted\" (see ice) then the damage is multiplied by the amound of frost applied.";
   }
}

function addIce() {
   ice = true;
   fire = false;
   lightning = false;
   poison = false;
   text.innerText = "You imbue your weapon with petrifying ice!";
   if (tutorial)
   {
      text.innerText += "\n\nIce adds some damage to all attacks in your turn and applies \"frost\" to the enemy. If the frost applied to the enemy is equal to half the enemy's total HP then it's damage is reduced. Heavy weapons apply more frost to the enemy";
   }
}

function addLightning() {
   lightning = true;
   fire = false;
   ice = false;
   poison = false;
   text.innerText = "You imbue your weapon with sparking lightning!";
   if (tutorial)
   {
      text.innerText += "\n\nLightning increases the damage of all attacks in your turn and builds up \"jolt\". Jolt makes each subsequent attack deal more damage.";
   }
}

function innerButtonAnnulment() {
   focusImage.onclick = null;
   innerButton1.onclick = null;
   innerButton2.onclick = null;
   innerButton3.onclick = null;
   innerButton4.onclick = null;
   innerButton5.onclick = null;
   innerButton6.onclick = null;
}

function playerAttack() {
      text.innerText = `You attack the ${monsters[fighting].name}, `;
      innerButtonAnnulment();
      numAttacks = weapons[currentWeapon].speed;
      if (Math.random() < addAttChance * speedItemBuff * weapons[currentWeapon].speed) {
         numAttacks += Math.floor(1 + Math.random() * weapons[currentWeapon].speed / 2);
      }
      text.innerText += ` you attack ${numAttacks} times!`;
      totalDmg = 0;
      for (i = numAttacks; i > 0; i--) {
         if (isMonsterHit || tutorial) {
            attDmg = Math.floor((weapons[currentWeapon].power * Math.pow(1.2, weapons[currentWeapon].upgrade)) * (1 + strength / 50) * rollAtt());
            if (isCrit()) {
               attDmg *= critDmg;
               text.innerText += " A critical hit!";
            }
            if (lightning) {
               attDmg = Math.floor(((attDmg * Math.pow(1.2, weapons[currentWeapon].upgrade)) + 1) * (1.2 + jolt) * elementalDmgBuff * lightningItemBuff);
               jolt += .1 * lightningItemBuff * weapons[currentWeapon].buildup;
            }
            if (ice) {
               attDmg = Math.floor(((attDmg * Math.pow(1.2, weapons[currentWeapon].upgrade)) + 1) * 1.2 * elementalDmgBuff * iceItemBuff);
               if (quick) {
                  frost = Math.floor((attDmg*1.2) * frostMult * iceItemBuff * weapons[currentWeapon].buildup/1.7);
               } else {
                  frost = Math.floor((attDmg*1.2) * frostMult * iceItemBuff * weapons[currentWeapon].buildup);
               }
            }
            if (fire) {
               if (frost >= monsters[fighting].health/2) {
                  attDmg = Math.floor(((attDmg * Math.pow(1.2, weapons[currentWeapon].upgrade)) + 2) * (1 + frost/2 / monsters[fighting].health) * 1.4 * elementalDmgBuff * fireItemBuff);
                  text.innerText += ` The fire shatters the frost of the ${monsters[fighting].name}, `;
                  frost = 0;
               } else {
                  attDmg = Math.floor(((attDmg * Math.pow(1.2, weapons[currentWeapon].upgrade)) + 2) * 1.4 * elementalDmgBuff * fireItemBuff);
               }
               fire = false;
            }
            if (poison) {
               if (quick) {
                  poisonDmg += Math.floor((attDmg/7+1) * Math.pow(1.2, weapons[currentWeapon].upgrade) * poisonItemBuff * weapons[currentWeapon].buildup/2);
               } else {
                  poisonDmg += Math.floor((attDmg/7+1) * Math.pow(1.2, weapons[currentWeapon].upgrade) * poisonItemBuff * weapons[currentWeapon].buildup/4);
               }
               poisoned = true;
            }
            monsterHealth -= attDmg;
            text.innerText += ` ${attDmg} damage!`;
            totalDmg += attDmg;
         } else { text.innerText += " It dodges out of the way!"; }
      }
      lightning = false;
      jolt = 0;
      ice = false;
      fire = false;
      poison = false;
      text.innerText += `(${totalDmg} total)`;
      monsterHealthText.innerText = monsterHealth;
      if (monsterHealth <= 0)
      {
         defeatMonster();
      } else { setTimeout(monsterAttack, 2000); }
}

function monsterAttack() {
   text.innerText += "\n The " + monsters[fighting].name + " attacks, ";
   if (isPlayerHit()) {
      getMonsterAttackValue(monsters[fighting].level);
      health -= monDmg;
      healthText.innerText = `${health}/${maxHealth}`;
      text.innerText += ` it did ${monDmg} damage to you!`;
   } else {
      text.innerText += " you dodged it's attack!";
   }
   if (poisoned) {
      monsterHealth -= poisonDmg;
      text.innerText += ` The ${monsters[fighting].name} takes ${poisonDmg} damage from poison!`;
      poisonDmg = Math.floor(poisonDmg * poisonDecay);
      }
      monsterHealthText.innerText = monsterHealth;
   }
   if (health <= 0)
      {
         lose();
      } else if (monsterHealth <= 0) { defeatMonster(); } else {
         innerUpdate(2);
         focusImage.onclick = playerAttack;
      }

function isCrit() {
   if (Math.random() > critChance)
   {
      return true;
   }
}

function rollAtt() {
   return .95 + (Math.random()/10);
}

function getMonsterAttackValue(level) {
   monDmg = Math.floor((level * 7 - def / 50) * (1 - def / (def + 1000)) * rollAtt() - defBonus);
   if (frost >= monsters[fighting].health/2) {
      monDmg = Math.floor(monDmg/1.7);
      text.innerText += ` it's frosted, reducing it's damage;`;
   }
   frost /= 1.2;
   if (Math.random() > .9)
   {
      monDmg *= 2;
      text.innerText += " a critical hit! ";
   }
   if (defending) {monDmg = Math.floor(monDmg/4); }
   if (monDmg < 0) {
      monDmg = 0;
   }
}

function isMonsterHit() {
   return Math.random() < .75 || health >= (maxHealth / 4);
}

function isPlayerHit() {
   return Math.random() > dodgeChance*speedItemBuff;
}

function defeatMonster() {
   jolt = 0;
   frost = 0;
   innerButtons.style.display = "none";
   poisoned = false;
   poisonDmg = 0;
   focusMenu.style.display = "none";
   button4.style.display = "inline";
   if (fighting == 5) {
      xp += 100 * xpBonus;
      gold += 1000 * goldBonus;
   } else { gold += Math.floor(Math.pow(monsters[fighting].level, 1.4) * 8 * goldBonus); }
   if (monsters[fighting].level > 1 && fighting != 5) {
      xp += Math.floor((Math.pow(monsters[fighting].level, 1.4) + 1) * xpBonus);
   } else  if (!tutorial) { xp += 2 * xpBonus; }
   else { xp += 5; }
   if (bossOne && fightingBoss) {
      bossOne = false;
      update(locations[4]);
   } else if (bossTwo && fightingBoss) {
      bossTwo = false;
      update(locations[4]);
   } else if (fightingBoss) {
      winGame();
   } else { update(locations[4]); }
   if (!fightingBoss && !tutorial) { chanceItem(); }
   fightingBoss = false;
   health += leech;
   goldText.innerText = Math.floor(gold);
   xp = Math.floor(xp);
   xpText.innerText = `${xp}/${levelCost}`;
   if (health > maxHealth) { health = maxHealth; }
   healthText.innerText = `${health}/${maxHealth}`;
   if (tutorial)
   {
      text.innerText = "You have killed the monster! You can either head straight back to town or continue fighting in the dungeon. When you kill monsters you get gold and xp, click level up to continue!";
      button1.onclick = null;
      button2.onclick = null;
      button4.onclick = levelUp;
   }
}

function lose() {
   update(locations[5]);
   focusMenu.style.display = "none";
}

function winGame() {
   focusMenu.style.display = "none";
   update(locations[6]);
   if (finalBoss)
   {
      finalBoss = false;
   } else {
      text.innerText = "You've defeated the phantom, but it will return... You can't run forever...";
   }
}

function easterEgg() {
   update(locations[7]);
}

function pickTwo() {
   pick(2);
}

function pickEight() {
   pick(8);
}

function pick(guess) {
   const numbers = [];
   while (numbers.length < 10) {
      numbers.push(Math.floor(Math.random() * 11));
   }
   text.innerText = "You picked " + guess + ". Here are the random numbers:\n";
   for (let i = 0; i < 10; i++) {
      text.innerText += numbers[i] + "\n";
   }
   if (numbers.includes(guess)) {
      text.innerText += "Right! You win 20 gold!";
      gold += 20;
      goldText.innerText = gold;
   } else {
      text.innerText += "Wrong! You lose 10 health!";
      health -= 10;
      healthText.innerText = health;
      if (health <= 0) {
         lose();
      }
   }
}
