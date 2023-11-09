// Importing objects from other files
const enemies = require('./enemies');
const player = require('./main');

function startFight() {
    let minLevel = Math.floor(0.8 * player.level);
    let maxLevel = Math.floor(1.2 * player.level);
    let enemyPicked = enemies[Math.floor(Math.random() * enemies.values())].name;


}