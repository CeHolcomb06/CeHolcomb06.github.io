// Initializing variables
let xp = 0;
let health = 100;
let gold = 100;
let currentWeapon = 0;
let inventory = ["stick"];
let price = 250;
let levelCost = 5;
let playerLevel = 1;
let strength = 0;
let def = 0;
let critDmg = 100;
let critChance = 0.1;
let chargeDmg = 1.5;
let monMod = 1;
let goldMult = 1;
let dodgeChance = 0.1;
let accuracy = 0.8;
let floor = 1;
let charged = false;
let bossOne = true;
let bossTwo = true;
let finalBoss = true;
let fightingBoss = false;
let specialUnlock = false;
let gambleNum;
let monsterHealth;
let fighting;
let monsterDif;
let monDmg;
let dmgRan;
let attDmg;
let value;
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

Monster Ideas:
Living Armor (Special)

*/
// Initializing queries

const button1 = document.querySelector('#button1');
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const button4 = document.querySelector("#button4");
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
const innerButtons = document.querySelector("#innerButtons");
const innerButton1 = document.querySelector("#innerButton1");
const innerButton2 = document.querySelector("#innerButton2");
const innerButton3 = document.querySelector("#innerButton3");
const innerButton4 = document.querySelector("#innerButton4");
const innerButton5 = document.querySelector("#innerButton5");
const innerButton6 = document.querySelector("#innerButton6");

// Initializing texts
xpText.innerText = xp;
healthText.innerText = health;
goldText.innerText = gold;
levelText.innerText = levelCost;

// WEAPONS
const weapons = [
   { name: 'stick', power: 5 },
   { name: 'dagger', power: 8 },
   { name: 'mace', power: 12 },
   { name: 'sword', power: 18 },
   { name: 'greatsword', power: 25 }
];

// MONSTERS
const monsters = [
   {
      // floor 1
      // 0
      name: "Slime",
      level: 1,
      health: 10,
      difficulty: "Easy"
   },
   {
      // floor 1
      // 1
      name: "Tusked Boar",
      level: 3,
      health: 25,
      difficulty: "Hard"
   },
   {
      // floor 1 boss
      // 2
      name: "Large Tusked Boar",
      level: 5,
      health: 90,
      difficulty: "First Boss"
   },
   {
      // floor 1
      // 3
      name: "Giant Beetle",
      level: 2,
      health: 15,
      difficulty: "Medium"
   },
   {
      // floor 2
      // 4
      name: "Flower Mimic",
      level: 4,
      health: 85,
      difficulty: "Easy"
   },
   {
      // Special Monster
      // 5
      name: "Massive Slime",
      level: Math.floor(playerLevel/2),
      health: Math.floor(health*7.5),
      difficulty: "Special"
   },
   {
      // floor 2
      // 6
      name: "Small Stone Golem",
      level: 6,
      health: 200,
      difficulty: "Medium"
   },
   {
      // floor 2 boss
      // 7
      name: "Massive Bearded Dragon",
      level: 10,
      health: 340,
      difficulty: "Second Boss"
   },
   {
      // floor 2
      // 8
      name: "Insane Adventurer",
      level: 8,
      health: 175,
      difficulty: "Hard"
   },
   {
      // floor 3
      // 9
      name: "Fire Elemental",
      level: 11,
      health: 280,
      difficulty: "Easy"
   },
   {
      // floor 3
      // 10
      name: "Large Stone Golem",
      level: 13,
      health: 500,
      difficulty: "Medium"
   },
   {
      // floor 3
      // 11
      name: "Lava Lizard",
      level: 15,
      health: 350,
      difficulty: "Hard"
   },
   {
      // floor 3 boss
      // 12
      name: "Red Dragon",
      level: 20,
      health: 1000,
      difficulty: "FINAL BOSS"
   }
]
// LOCATIONS
const locations = [
   {
      // 0
      name: "town square",
      "button text": ["Go to store", "Go to dungeon", "Go to special store"],
      "button functions": [goStore, goDung, specialStore],
      text: "You are in the town square. You see a sign that says \"Store\"."
   },
   {
      // 1
      name: "store",
      "button text": ["Buy 20 health (10 gold)", "Buy weapon (" + price + " gold)", "Go to town square"],
      "button functions": [buyHealth, buyWeapon, goTown],
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
      "button text": ["Attack", "Charge up", "Run"],
      "button functions": [attack, chargeAttack, goFloor],
      text: "You approach the nearest monster."
   },
   {
      // 4
      name: "kill monster",
      "button text": ["Go to town square", "Continue inside the Dungeon", "Go to town square"],
      "button functions": [goTown, goFloor, goTown],
      text: 'The monster screams "Arg!" as it dies. You gain experience points and find gold.'
   },
   {
      // 5
      name: "lose",
      "button text": ["REPLAY?", "REPLAY?", "REPLAY?"],
      "button functions": [restart, restart, restart],
      text: "You die. &#x2620;"
   },
   {
      // 6
      name: "win",
      "button text": ["REPLAY?", "REPLAY?", "REPLAY?"],
      "button functions": [restart, restart, restart],
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
      "button text": ["pick an effect", "pick an effect", "pick an effect!"],
      "button functions": [null, null, null],
      text: "You have leveled up! You have grown more powerful! But you can additionally choose an effect to apply to your journey!"
   },
   {
      // 9
      name: "special store",
      "button text": ["Go to town square", "Go to town square", "Go to town square"],
      "button functions": [goTown, goTown, goTown],
      text: "Choose a rare item to buy."
   },
   {
      // 10
      name: "Final Floor",
      "button text": ["Fight monster", "Fight final boss", "Go to town square"],
      "button functions": [monsterSearch, goDeeper, goTown],
      text: "You enter the first floor of the dungeon, it's rough stone architecture is worn and mossy. It's crawling with monsters..."
   }
];

update(locations[0]);
// initialize buttons
button1.onclick = goStore;
button2.onclick = goDung;
button3.onclick = specialStore;
button3.style.display = "none";
button4.onclick = levelUp;

innerButton1.onclick = dmgBuff;
innerButton2.onclick = defenseBuff;
innerButton3.onclick = critBuff;
innerButton4.onclick = accBuff;
innerButton5.onclick = dodgeBuff;
innerButton6.onclick = chargeBuff;

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
}

function goTown() {
   fightingBoss = false;
   update(locations[0]);
   button2.style.display = "inline";
   if (specialUnlock) {
      button3.style.display = "inline";
      text.innerText += " You can also see a more hidden building that says store on it but in a fancier font.";
   } else { button3.style.display = "none"; }
}

function goStore() {
   update(locations[1]);
   if (currentWeapon < weapons.length - 1) {
      button2.innerText = "Buy weapon (" + price + " gold)";
   }
}

function goDung() {
   fightingBoss = false;
   floor = 1;
   update(locations[2]);
}

function goFloor() {
   fightingBoss = false;
   update(locations[2]);
   if (floor == 2) {
      text.innerText = "You've reached the second floor. The atmosphere is hot, The stones making up this floor are toasty and scald your boots. The monsters here are much more powerful!";
   } else if (floor == 3){
      update(locations[10]);
   }
}

function specialStore() {
   update(locations[9]);
}

function buyHealth() {
   if (gold >= 10) {
      gold -= 10;
      health += 20;
      goldText.innerText = gold;
      healthText.innerText = health;
   } else {
      text.innerText = "You do not have enough gold to buy health.";
   }
}

function buyWeapon() {
   if (currentWeapon < weapons.length - 1) {
      if (gold >= price) {
         gold -= price;
         currentWeapon++;
         goldText.innerText = gold;
         let newWeapon = weapons[currentWeapon].name;
         text.innerText = "You now have a " + newWeapon + ".";
         inventory.push(newWeapon);
         text.innerText += " In your inventory you have: " + inventory;
         price *= 2;
      } else {
         text.innerText = "You do not have enough gold to buy a weapon.";
      }
   } else {
      text.innerText = "You already have the most powerful weapon!";
      button2.innerText = "Sell weapon for 15 gold";
      button2.onclick = sellWeapon;
   }
   button2.innerText = "Buy weapon (" + price + " gold)";
}

function sellWeapon() {
   if (inventory.length > 1) {
      gold += 15;
      goldText.innerText = gold;
      let currentWeapon = inventory.shift();
      text.innerText = "You sold a " + currentWeapon + ".";
      text.innerText += " In your inventory you have: " + inventory;
   } else {
      text.innerText = "Don't sell your only weapon!";
   }
}

function levelUp() {
   if (xp >= levelCost) {
      button1.style.display = "none";
      button2.style.display = "none";
      button3.style.display = "none";
      innerButtons.style.display = "block";
      xp -= levelCost;
      levelCost = Math.floor(levelCost * 1.2);
      playerLevel++;
      xpText.innerText = xp;
      levelingText.innerText = "Level: " + playerLevel;
      levelText.innerText = levelCost;
      strength += 7;
      def += 5;
      if (dodgeChance > .25) {
         innerButton5.style.display = "none";
      } else {
         innerButton5.style.display = "inline";
      }
      if (accuracy > 1) {
         innerButton4.style.display = "none";
      } else { innerButton4.style.display = "inline"; }
      update(locations[8]);
      innerButton1.innerText = "Strength: " + strength + " -> " + (strength + 10);
      innerButton2.innerText = "Defense: " + def + " -> " + (def + 15);
      innerButton3.innerText = "Critical damage: " + Math.floor(critDmg + 100) + "% -> ";
      if (critChance < 1)
      {
         innerButton3.innerText += Math.floor(critDmg + 100 + 25) + "% + Critical chance: " + Math.floor(critChance*100) + "% -> " + Math.floor(critChance*100 + 5) + "%";
      } else {
         innerButton3.innerText += Math.floor(critDmg + 50) + "%";
      }
      innerButton4.innerText = "Accuracy: " + Math.floor(accuracy*100) + "% -> " + Math.floor(accuracy*100 + 5) + "%";
      innerButton5.innerText = "Dodge chance: " + Math.floor(dodgeChance*100) + "% -> " + Math.floor(dodgeChance*100 + 5) + "%";
      innerButton6.innerText = "Charge Attack: X" + chargeDmg + " -> X" + (chargeDmg + .5);
   }
   else {
      text.innerText = "You don't have the XP for that!";
   }
}

function defenseBuff() {
   def = Math.floor(def + 15);
   innerButtons.style.display = "none";
   goTown();
}

function dmgBuff() {
   strength = Math.floor(strength + 10);
   innerButtons.style.display = "none";
   goTown();
}

function critBuff() {
   critDmg += 25;
   if (critChance >= 1) {
      critDmg += 25;
   } else {
      critChance += .05;
   }
   innerButtons.style.display = "none";
   goTown();
}

function accBuff() {
   accuracy += .05;
   innerButtons.style.display = "none";
   goTown();
}

function dodgeBuff() {
   dodgeChance += .05;
   innerButtons.style.display = "none";
   goTown();
}

function chargeBuff() {
   chargeDmg += .5;
   innerButtons.style.display = "none";
   goTown();
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
   update(locations[3]);
   monsterHealth = Math.floor(monsters[fighting].health * monMod);
   monsterStats.style.display = "block";
   monsterName.innerText = monsters[fighting].name;
   monsterHealthText.innerText = monsterHealth;
   monsterDifText.innerText = monsters[fighting].difficulty;
   charged = false;
}

function attack() {
   if (fightingBoss) {
      text.innerText = "A " + monsters[fighting].name + " is blocking the way!";
      if (!bossOne && !bossTwo) {
         text.innerText = "The final fight... The Red Dragon approaches!";
      }
   } else if (fighting == 5) {
      text.innerText = "A special Slime has appeared!!";
   } else {
      text.innerText = "The " + monsters[fighting].name + " attacks.";
   }
   if (isPlayerHit()) {
      getMonsterAttackValue(monsters[fighting].level);
      health -= monDmg;
      healthText.innerText = health;
      text.innerText += " It did " + monDmg + " damage to you.";
   } else {
      text.innerText += " You dodged it's attack!";
      console.log("Monster miss. ");
   }
   text.innerText += " You attack it with your " + weapons[currentWeapon].name + ".";
   if (isMonsterHit()) {
      attDmg = weapons[currentWeapon].power * (1 + strength / 20);
      console.log("Base player: " + attDmg);
      if (charged) {
         if (isCrit()) {
            attDmg *= (1 + critDmg / 100);
         }
         attDmg *= chargeDmg;
         charged = false;
      } else {
         if (isCrit()) {
            attDmg *= (1 + critDmg / 100);
         }
      }
      rollAtt();
      dmgRan += .1;
      attDmg = Math.floor(attDmg * dmgRan);
      console.log("Ending Player: " + attDmg);
      monsterHealth -= attDmg;
      text.innerText += " You dealt " + attDmg + " damage to the " + monsters[fighting].name + ".";
   } else {
      text.innerText += " You miss.";
      console.log("Player miss. ");
      charged = false;
   }
   healthText.innerText = health;
   monsterHealthText.innerText = monsterHealth;
   if (health <= 0)
   {
      lose();
   } else if (monsterHealth <= 0)
   {
      defeatMonster();
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

function rollAtt() {
   dmgRan = Math.random();
   console.log(dmgRan);
   if (dmgRan < .8) {
      console.log("AGAIN!");
      rollAtt();
   }
}

function getMonsterAttackValue(level) {
   monDmg = (level * 10 - def / 10) * (1 - def / (def + 300));
   rollAtt();
   dmgRan += .1;
   monDmg = Math.floor(monDmg * dmgRan);
   console.log("Monster Attack: " + monDmg);
   if (monDmg < 0) {
      monDmg = 0;
   }
}

function isMonsterHit() {
   return Math.random() < accuracy || health < 25;
}

function isPlayerHit() {
   return Math.random() > dodgeChance;
}

function chargeAttack() {
   text.innerText = "You charge up your next attack. ";
   charged = true;
   text.innerText = "The " + monsters[fighting].name + " attacks.";
   if (isPlayerHit()) {
      getMonsterAttackValue(monsters[fighting].level);
      health -= monDmg;
      healthText.innerText = health;
      text.innerText += " It did " + monDmg + " damage to you.";
   } else {
      text.innerText += " You dodged it's attack!";
      console.log("Monster miss. ");
   }
}

function defeatMonster() {
   if (fighting == 5) {
      xp += 50;
      gold += 800;
   } else { gold += Math.floor(Math.pow(monsters[fighting].level, 1.4) * 10); }
   if (monsters[fighting].level > 1 && fighting != 5) {
      xp += Math.floor(Math.pow(monsters[fighting].level, 1.6));
   } else { xp += 2; }
   if (bossOne && fightingBoss) {
      bossOne = false;
      update(locations[4]);
   } else if (bossTwo && fightingBoss) {
      bossTwo = false;
      update(locations[4]);
   } else if (finalBoss && fightingBoss) {
      winGame();
   } else { update(locations[4]); }
   fightingBoss = false;
   goldText.innerText = gold;
   xpText.innerText = xp;
   healthText.innerText = health;
   button3.style.display = "none";
}

function lose() {
   update(locations[5]);
}

function winGame() {
   update(locations[6]);
}

function restart() {
   xp = 0;
   health = 100;
   gold = 50;
   currentWeapon = 0;
   inventory = ["stick"];
   price = 125;
   levelCost = 5;
   playerLevel = 1;
   strength = 0;
   def = 0;
   critDmg = 100;
   critChance = 0.1;
   chargeDmg = 1.5;
   monMod = 1;
   goldMult = 1;
   dodgeChance = 0.1;
   accuracy = 0.8;
   charged = false;
   floor = 1;
   bossOne = true;
   bossTwo = true;
   finalBoss = true;
   fightingBoss = false;
   specialUnlock = false;

   healthText.innerText = health;
   xpText.innerText = xp;
   goldText.innerText = gold;
   levelText.innerText = levelCost;
   levelingText.innerText = playerLevel;
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
