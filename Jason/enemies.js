// Importing objects from other files
const player = require('./main');

const enemies = [
    {
        name: "Fire Hyena",
    },
    {
        name: "Plague Mosquito",
    },
    {
        name: "Wind Elemental",
    },
    {
        name: "Bomber Chicken",
    },
];

// Export objects to be used outside of this file
module.exports = enemies;
