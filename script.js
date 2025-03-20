// Initializing variables
let xp = 0;
let levelCost = 5;
let health = 250;
let maxHealth = 250;
let gold = 50;
let currentWeapon = 0;
let playerLevel = 1;
let strength = 0;
let def = 0;
let critDmg = 100;
let critChance = 0.1;
let monMod = 1;
let goldMult = 1;
let dodgeChance = 0.1;
let accuracy = 0.8;
let floor = 1;
let procChance = .2;
let foodRegen = 20;
let addAttChance = 1;
let bossOne = true;
let bossTwo = true;
let finalBoss = true;
let fightingBoss = false;
let procUnlock = false;
let itemUnlock = false;
let floor2Shop = false;
let boughtDagger = false;
let boughtAxe = false;
let boughtSword = false;
let boughtScimitars = false;
let boughtGreatsword = false;
let gambleNum;
let monsterHealth = 0;
let fighting = 0;
let monsterDif = "";
let monDmg = 0;
let dmgRan = 0;
let attDmg = 0;
let whatItem = 0;
/*                                    Other Notes:
Level Bonuses:
Crit damage increase
Crit chance increase
dodge chance increase
accuracy increase

Custom Item bonuses:
Gold multiplier
Monster health decrease (min 25%)
Monster damage decrease (min 50%)
Increased XP gains
Increase bought health
Multiply weapon damage
proc items (bleed, ignite, shock, freeze)

Monster Ideas:
Living Armor (Special)

New concepts:
Elemental advantages
weapons shop
rework weapons

// Image HTML example code

<script type="text/javascript">
    function changeImage(a) {
        document.getElementById("img").src=a;
    }
</script>
<div id="main_img">
    <img id="img" src="placehold">
</div>
<div id="thumb_img">
    <img src='placehold'  onclick='changeImage("placehold");'>
    <img src='placehold'  onclick='changeImage("placehold");'>
    <img src='placehold'  onclick='changeImage("placehold");'>
</div>

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
const accStat = document.querySelector("#accuracyStat");
const dodgeStat = document.querySelector("#dodgeStat");
const addAttStat = document.querySelector("#addAttStat");

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

// Initializing Menu
xpText.innerText = `${xp}/${levelCost}`;
healthText.innerText = `${health}/${maxHealth}`;
goldText.innerText = gold;
focusMenu.style.display = "none";
// WEAPONS
const weapons = [
   { name: 'stick', power: 2, chance: 1, speed: 3, price: 0},
   { name: 'dagger', power: 5, chance: 3, speed: 2, price: 300 },
   { name: 'axe', power: 12, chance: 4, speed: 1, price: 300 },
   { name: 'sword', power: 16, chance: 5, speed: 2, price: 1000 },
   { name: 'scimitars', power: 12, chance: 6, speed: 4, price: 2000 },
   { name: 'greatsword', power: 64, chance: 16, speed: 1, price: 2000 }
];
//controls.style.display = "none"; V
// MONSTERS
const monsters = [
   {
      // floor 1
      // 0
      name: "Slime",
      level: 1,
      health: 10,
      difficulty: "Easy",
      image: "images/slime.jpeg"
   },
   {
      // floor 1
      // 1
      name: "Tusked Boar",
      level: 3,
      health: 25,
      difficulty: "Hard",
      image: "images/boar.jpeg"
   },
   {
      // floor 1 boss
      // 2
      name: "Large Tusked Boar",
      level: 5,
      health: 90,
      difficulty: "First Boss",
      image: ""
   },
   {
      // floor 1
      // 3
      name: "Giant Beetle",
      level: 2,
      health: 15,
      difficulty: "Medium",
      image: "images/bug.jpeg"
   },
   {
      // floor 2
      // 4
      name: "Flower Mimic",
      level: 4,
      health: 125,
      difficulty: "Easy",
      image: ""
   },
   {
      // Special Monster
      // 5
      name: "Massive Slime",
      level: Math.floor(playerLevel/2),
      health: Math.floor(health*7.5),
      difficulty: "Special",
      image: ""
   },
   {
      // floor 2
      // 6
      name: "Small Stone Golem",
      level: 6,
      health: 270,
      difficulty: "Medium",
      image: ""
   },
   {
      // floor 2 boss
      // 7
      name: "Massive Bearded Dragon",
      level: 10,
      health: 360,
      difficulty: "Second Boss",
      image: ""
   },
   {
      // floor 2
      // 8
      name: "Insane Adventurer",
      level: 8,
      health: 230,
      difficulty: "Hard",
      image: ""
   },
   {
      // floor 3
      // 9
      name: "Fire Elemental",
      level: 11,
      health: 380,
      difficulty: "Easy",
      image: ""
   },
   {
      // floor 3
      // 10
      name: "Large Stone Golem",
      level: 13,
      health: 700,
      difficulty: "Medium",
      image: ""
   },
   {
      // floor 3
      // 11
      name: "Lava Lizard",
      level: 15,
      health: 550,
      difficulty: "Hard",
      image: ""
   },
   {
      // floor 3 boss
      // 12
      name: "Red Dragon",
      level: 20,
      health: 1750,
      difficulty: "FINAL BOSS",
      image: ""
   },
   {
      // Phantom
      // 13
      name: "The Ghost of Red Dragon",
      level: 30,
      health: 3500,
      difficulty: "Good Luck",
      image: ""
   }
];
//controls.style.display = "none"; V
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
      text: "Choose a rare item to buy."
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
      text: [`buy food for 10 gold (${foodRegen} health)`, "buy a dagger", "buy an axe", "buy a sword", "buy scimitars", "buy a greatsword"],
      functions: [buyHealth, equipDagger, equipAxe, equipSword, equipScimitars, equipGreatsword],
      background: "lightblue"
   },
   {
      // 1
      name: "inner level up",
      text: [("Strength: " + strength + " -> " + (strength + 10)),
         ("Defense: " + def + " -> " + (def + 10)),
         ("Rework"), "e", "e", "e"],
      functions: [dmgBuff, defenseBuff, elemBuff, accBuff, speedBuff, procBuff],
      background: "lightblue"
   },
   {
      // 2
      name: "inner fight",
      text: [`Equip your ${weapons[currentWeapon].name}`, "Defend", "e", "Imbue your weapon with fire", "Imbue your weapon with ice", "imbue your weapon with lightning"],
      functions: [equipWeapon, defend, null, addFire, addIce, addLightning],
      background: "#ef8011"
   }
];
// initialize buttons
button1.onclick = goStore;
button2.onclick = goDung;
button3.onclick = itemStore;
button3.style.display = "none";
button4.onclick = levelUp;
itemShow.onclick = viewItems;
itemShow.style.display = "none";

statButton.onclick = viewPlayerStats;

innerButton1.onclick = dmgBuff;
innerButton2.onclick = defenseBuff;
innerButton3.onclick = elemBuff;
innerButton4.onclick = accBuff;
innerButton5.onclick = speedBuff;
innerButton6.onclick = procBuff;

function update(location) {
   monsterStats.style.display = "none";
   button1.innerText = location["button text"][0];
   button2.innerText = location["button text"][1];
   button3.innerText = location["button text"][2];
   button1.onclick = location["button functions"][0];
   button2.onclick = location["button functions"][1];
   button3.onclick = location["button functions"][2];
   text.innerHTML = location.text;
   button1.style.display = "inline";
   button2.style.display = "inline";
   button3.style.display = "inline";
   if (itemUnlock) {
      itemShow.style.display = "inline";
   } else { itemShow.style.display = "none"; }
   if (button1.innerText == "")
   {
      button1.style.display = "none";
   } else { button1.style.display = "inline"; }
   if (button1.innerText == "") { button1.style.display = "none"; } else { button1.style.display = "inline"; }
   if (button2.innerText == "") { button2.style.display = "none"; } else { button2.style.display = "inline"; }
   if (button3.innerText == "") { button3.style.display = "none"; } else { button3.style.display = "inline"; }
   updateLists();
}
//controls.style.display = "none"; ^
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

   if (num == 1)
   {
         if (accuracy < 1) {
            innerButton4.style.display = "inline";
            innerButton4.innerText = "Accuracy: " + Math.floor(accuracy*100) + "% -> " + Math.floor(accuracy*100 + 5) + "%";
         } else { innerButton4.innerText = "";}
         if (dodgeChance > .25) {
            innerButton5.innerText = "Additional chance to attack: " + Math.floor(addAttChance) + "%";
         } else {
            innerButton5.innerText = "Dodge Chance: " + Math.floor(dodgeChance*100) + "% -> " + Math.floor(dodgeChance*100 + 5) + "%" + " + Additional Chance To Attack: " + Math.floor(addAttChance) + "%";
         }
         if (procUnlock) {
            innerButton6.style.display = "inline";
            innerButton6.innerText = "Item Activation Chance: " + Math.floor(procChance*100) + "% -> " + Math.floor(procChance*100 + 10) + "%";
         } else { innerButton6.innerText = ""; }
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
   critDStat.innerText = Math.floor(critDmg+100) + "%";
   if (accuracy > 1) {
      accStat.innerText = "100%";
   } else {
      accStat.innerText = Math.floor(accuracy*100) + "%";
   }
   dodgeStat.innerText = Math.floor(dodgeChance*100) + "%";
   addAttStat.innerText = Math.floor(addAttChance) + "%";
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
}
//controls.style.display = "none"; ^
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
   innerButtons.style.display = "none";
   floor = 0;
   if (itemUnlock) {
      button3.style.display = "inline";
      text.innerText += " You can also see a more hidden building that says store on it but in a fancier font.";
   } else { button3.style.display = "none"; }
}

function goStore() {
   update(locations[1]);
   innerUpdate(0);
}

function goDung() {
   fightingBoss = false;
   floor = 1;
   update(locations[2]);
}

function goFloor() {
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
      effect: "Increases XP gained by 20% (+10% per stack)"
   },
   {
      // GOLD MULTIPLIER 1
      name: "Golden Scarab",
      count: 0,
      text: "A treasure from another world. It gifts riches upon those who adorn it.",
      effect: "Increase gold gained by 20% (+10% per stack)"
   },
   {
      // FLAT DAMAGE RESISTANCE 2
      name: "Repulsion Armor Scrap",
      count: 0,
      text: "\"No, this is completely original... NO DON\'T LOOK IT UP!\"",
      effect: "Reduces damage taken from each hit by 3 (+3 per stack)"
   },
   {
      // HEAL ON KILL 3
      name: "Blood Drop Pendant",
      count: 0,
      text: "Dark magic infused in a small, red, perfectly cut gem.",
      effect: "Killing an enemy grants you 10 health (+10 per stack)"
   },
   {
      // MEAL EFFECTIVENESS 4
      name: "Dwarf Charm",
      count: 0,
      text: "A small charm of a dwarf with a large, black beard. He must've been a great cook in his time...",
      effect: "Increases the health you recover from meals by 5 (+5 per stack)"
   }
]
/*
Custom Item bonuses:
proc items (bleed, ignite, shock, freeze)
change dodge chance, and crit chance to items
increase weapon dmg
*/

let xpBonus = 1;
let goldBonus = 1;
let defBonus = 0;
let leech = 0;

function chanceItem() {
   if (Math.random() > .8)
   {
      whatItem = Math.floor(Math.random() * 5);
      items[whatItem].count++;
      if (items[0].count > 0) { xpBonus = 1.2 + .1 * (items[0].count - 1); }
      if (items[1].count > 0) { goldBonus = 1.2 + .1 * (items[1].count - 1); }
      if (items[2].count > 0) { defBonus = 3 * items[2].count; }
      leech = 10 * items[3].count;
      foodRegen = 10 + 5 * items[4].count;
      text.innerText += " The " + monsters[fighting].name + " dropped a " + items[whatItem].name + "!\n\n" + items[whatItem].text;
      itemUnlock = true;
      updateLists();
   }
}
function buyHealth() {
   if (gold >= 10) {
      gold -= 10;
      health += foodRegen;
      if (health > maxHealth) { health = maxHealth; }
      goldText.innerText = gold;
      healthText.innerText = `${health}/${maxHealth}`;
   } else {
      text.innerText = "You do not have enough gold to buy health.";
   }
}

function equipDagger() {
 if (!boughtDagger) {
   if (gold < weapons[1].price) { text.innerText = "You don't have enough for that!"; }
   else {
      boughtDagger = true;
      text.innerText = "You bought the dagger!";
      currentWeapon = 1;
      gold -= weapons[1].price;
      goldText.innerText = gold;
   }
 } else {
   currentWeapon = 1;
 }
}

function equipAxe() {
   if (!boughtAxe) {
      if (gold < weapons[2].price) { text.innerText = "You don't have enough for that!"; }
      else {
         boughtAxe = true;
         text.innerText = "You bought the Axe!";
         currentWeapon = 2;
         gold -= weapons[2].price;
         goldText.innerText = gold;
      }
    } else {
      currentWeapon = 2;
    }
}

function equipSword() {
   if (!boughtSword) {
      if (gold < weapons[3].price) { text.innerText = "You don't have enough for that!"; }
      else {
         boughtSword = true;
         text.innerText = "You bought the sword!";
         currentWeapon = 3;
         gold -= weapons[3].price;
         goldText.innerText = gold;
      }
    } else {
      currentWeapon = 3;
    }
}

function equipScimitars() {
   if (!boughtScimitars) {
      if (gold < weapons[4].price) { text.innerText = "You don't have enough for that!"; }
      else {
         boughtScimitars = true;
         text.innerText = "You bought the scimitars!";
         currentWeapon = 4;
         gold -= weapons[4].price;
         goldText.innerText = gold;
      }
    } else {
      currentWeapon = 4;
    }
}

function equipGreatsword() {
   if (!boughtGreatsword) {
      if (gold < weapons[5].price) { text.innerText = "You don't have enough for that!"; }
      else {
         boughtGreatsword = true;
         text.innerText = "You bought the greatsword!";
         currentWeapon = 5;
         gold -= weapons[5].price;
         goldText.innerText = gold;
      }
    } else {
      currentWeapon = 5;
    }
}

function levelUp() {
   if (xp >= levelCost) {
      innerButtons.style.display = "flex";
      xp -= levelCost;
      xp = Math.floor(xp);
      levelCost = Math.floor(levelCost * 1.2);
      playerLevel++;
      xpText.innerText = `${xp}/${levelCost}`;
      levelingText.innerText = "Level: " + playerLevel;
      levelText.innerText = levelCost;
      strength += 7;
      def += 5;
      innerUpdate(1);
      update(locations[8]);
      controls.style.display = "none";
      updateLists();
   }
   else {
      text.innerText = "You don't have the XP for that!";
   }
}

function levelUpReturn() {
   if (floor == 0) { goTown(); }
   else { goFloor(); }
   goTown();
   innerButtons.style.display = "none";
   controls.style.display = "flex";
}

function defenseBuff() {
   def += 15;
   levelUpReturn();
}

function dmgBuff() {
   strength += 10;
   levelUpReturn();
}

function elemBuff() {
   // REWORK
   levelUpReturn();
}

function accBuff() {
   accuracy += .05;
   // REWORK
   levelUpReturn();
}

function speedBuff() {
   dodgeChance += .05;
   // Additional Attacks here
   levelUpReturn();
}

function procBuff() {
   procChance += .2;
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
   } else {
      fighting = 5;
   }
   focusImage.src = monsters[fighting].image;
   focusMenu.style.display = "flex";
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
}

function equipWeapon() {
   focusImage.onclick = playerAttack;
   text.innerText = `You ready your ${weapons[currentWeapon].name}.`;
}

function defend() {
   text.innerText = `You ready yourself for the ${monsters[fighting].name}'s attack`;
   setTimeout(monsterAttack, 2500);
}

function addFire() {

}

function addIce() {

}

function addLightning() {

}

function inspect() {

}

function playerAttack() {
      text.innerText = `You attack the ${monsters[fighting].name}, `;
      if (isMonsterHit) {
         attDmg = weapons[currentWeapon].power * (1 + strength / 20);
         if (isCrit()) { attDmg *= (1 + critDmg / 100); }
         rollAtt();
         dmgRan += .1;
         attDmg = Math.floor(attDmg * dmgRan);
         monsterHealth -= attDmg;
         text.innerText += `you dealt ${attDmg} damage!`;
      } else { text.innerText += "it dodges out of the way!"; }
      monsterHealthText.innerText = monsterHealth;
      if (monsterHealth <= 0)
      {
         winGame();
      }
      focusImage.onclick = inspect;
      setTimeout(monsterAttack, 2500);
}

function monsterAttack() {
   text.innerText = "The " + monsters[fighting].name + " attacks, ";
   if (isPlayerHit()) {
      getMonsterAttackValue(monsters[fighting].level);
      health -= monDmg;
      healthText.innerText = `${health}/${maxHealth}`;
      text.innerText += `it did ${monDmg} damage to you!`;
   } else {
      text.innerText += " You dodged it's attack!";
   }
   if (health <= 0)
      {
         lose();
      }
}

function isCrit() {
   if (Math.random() < critChance) {
      text.innerText += " A critical hit!";
      return true;
   } else {
      return false;
   }
}
// check if this breaks
function rollAtt() {
   dmgRan = Math.random();
   console.log(dmgRan);
   if (dmgRan < .8) {
      rollAtt();
   }
   dmgRan += .1;
}

function getMonsterAttackValue(level) {
   monDmg = (level * 10 - def / 10) * (1 - def / (def + 300)) - defBonus;
   if (Math.random() > .9) { dmgRan *= 2; }
   monDmg = Math.floor(monDmg * dmgRan);
   if (monDmg < 0) {
      monDmg = 0;
   }
}

function isMonsterHit() {
   return Math.random() < accuracy || health <= (maxHealth / 5);
}

function isPlayerHit() {
   return Math.random() > dodgeChance;
}

function defeatMonster() {
   // Change focus to be money after kill
   focusMenu.style.display = "none";
   button4.style.display = "inline";
   if (fighting == 5) {
      xp += 50 * xpBonus;
      gold += 800 * goldBonus;
   } else { gold += Math.floor(Math.pow(monsters[fighting].level, 1.4) * 10 * goldBonus); }
   if (monsters[fighting].level > 1 && fighting != 5) {
      xp += Math.floor(Math.pow(monsters[fighting].level, 1.6) * xpBonus);
   } else { xp += 2 * xpBonus; }
   if (bossOne && fightingBoss) {
      bossOne = false;
      update(locations[4]);
   } else if (bossTwo && fightingBoss) {
      bossTwo = false;
      update(locations[4]);
   } else if (fightingBoss) {
      winGame();
   } else { update(locations[4]); }
   if (!fightingBoss) { chanceItem(); }
   fightingBoss = false;
   health += leech;
   goldText.innerText = Math.floor(gold);
   xp = Math.floor(xp);
   xpText.innerText = `${xp}/${levelCost}`;
   healthText.innerText = `${health}/${maxHealth}`;
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

function restart() {
   xp = 0;
   health = 200;
   gold = 50;
   currentWeapon = 0;
   levelCost = 5;
   playerLevel = 1;
   strength = 0;
   def = 0;
   critDmg = 100;
   critChance = 0.1;
   monMod = 1;
   goldMult = 1;
   dodgeChance = 0.1;
   accuracy = 0.8;
   floor = 1;
   bossOne = true;
   bossTwo = true;
   finalBoss = true;
   fightingBoss = false;

   button4.style.display = "inline";

   healthText.innerText = health;
   xpText.innerText = `${xp}/${levelCost}`;
   goldText.innerText = gold;
   levelText.innerText = levelCost;
   levelingText.innerText = "Level: " + playerLevel;
   goTown();
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
