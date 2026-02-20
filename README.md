🎮 Video Game Metadata Widget
A Polished, Discord-Linked Streaming Overlay by BearddOddity
The Video Game Metadata Widget is a high-fidelity streaming overlay system that automatically detects your live gaming activity via Discord and pulls rich metadata (high-res box art, release years, and genres) from the RAWG database.

Designed for streamers who want a Video Game Cover Widget with zero manual input during the broadcast.

📸 Dashboard Preview
The included Control Center allows you to configure your credentials, live-preview your layouts, and zoom in/out to check the fine details of the Widget before adding it to OBS, Meld Studios and Streamlabs.

✨ Key Features
Real-Time Sync: Uses the Lanyard API to "heartbeat" your Discord status. https://lanyard.eggsy.xyz/api/introduction

Dynamic Metadata: Automatically fetches game details via the RAWG API. https://rawg.io/apidocs

Privacy Focused: No databases. Your API keys and Discord ID are stored strictly in your browser's localStorage.

Custom Hub: A sleek, glass-morphism dashboard to manage your setup.

Multi-Layout: Choose between Vertical sidebars or Horizontal bars via the Layouts/ sub-folder.

📂 Project Structure
Plaintext
Video Game Metadata Widget/
├── Dashboard.html       	# The central control center (UI & Preview)
├── Logic.js             	# Core script handling API calls & Lanyard sync
└── Layouts/             	# Sub-folder containing widget variations
    ├── Vertical.html   	# Tall sidebar layout
    ├── Horizontal_L.html	# Wide layout (Info Left)
    └── Horizontal_R.html	# Wide layout (Info Right)
	
	
🚀 Quick Start Guide
1. Requirements
Discord User ID: in Discord Settings > Advanced > Enable Developer > Close settings > Left Hand Side > Profile Avatar > Left Click > Copy User ID, just Below Switch Accounts.

Lanyard Access: You must be in the Lanyard Discord Server for the API to track your status. {https://lanyard.eggsy.xyz/api/introduction}

RAWG API Key: Get a free key at rawg.io/apidocs. {https://rawg.io/apidocs}

2. Installation
Download or Clone this repository to your streaming PC.

Open Dashboard.html in any modern web browser.

Navigate to the Configuration tab.

Enter your Discord ID and RAWG Key.

Select your preferred layout from the dropdown.

3. Browser Source Integration
In the Dashboard, Configuration Tab > click Generate Browser Source Click Copy URL.

In OBS, Meld Studios and Streamlabs, add a new Browser Source.

Paste the URL as a Browser Source Into your chosen Broadcast Software 

Done! The widget will now automatically appear whenever you start a game.

More features will come lookout for an upcoming roadmap 

🛠️ Configuration & Support
If you need to move to a different machine or clear your keys, use the Purge Cache button in the Dashboard. This will wipe all local data and reset the system to factory defaults.

📜 Credits & License
Created by BearddOddity


This project is built for the streaming community. Please feel free to fork, customize, and improve. If you use this in your stream, a shoutout is always appreciated!
