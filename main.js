const fs = require('fs');
const path = require('path');

// Load configuration
const configPath = path.join(__dirname, 'config.json');
const config = JSON.parse(fs.readFileSync(configPath, 'utf8'));

// Function to launch Roblox with settings
function launchRoblox() {
    console.log("Launching Roblox with the following settings:");
    console.log(`Multi-Instance: ${config.multiInstance}`);
    console.log(`Graphics: ${config.launchOptions.graphics}`);
    console.log(`Fullscreen: ${config.launchOptions.fullscreen}`);
    
    // Add your launch logic here
}

// Execute launch
launchRoblox();
