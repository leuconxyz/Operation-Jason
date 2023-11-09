// FS is the File System module, we will use it to save JSON data in node.js
const fs = require('fs');

// Importing objects from other files
const enemies = require('./enemies');

//Random log for start-up
console.log("__// Operation Jason initialized...\n");

// Creating our desired object(s)
const player = {
  name: "Champion",
  level: 1,
  isAdmin: true,
};

// Converting object data to JSON data
const jsonData = JSON.stringify(player);

// Saving data from object to json file
fs.writeFileSync('data.json', jsonData);
console.log('__// JSON data from player has been sent to data.json...\n');

// Reading the content of the JSON file
fs.readFile('data.json', 'utf-8', (err, data) => {
  if (err) {
    console.error('Error reading JSON file data', err);
    return;
  }

  // Parse the JSON data we read
  const jsonDump = JSON.parse(data);

  // View the json object data
  console.log(jsonDump);
});

// Export objects to be used outside of this file
module.exports = player;
