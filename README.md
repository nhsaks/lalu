# Ludo Royale — Mobile Coin Ludo (P2P WebRTC + Supabase)

Multiplayer coin-based Ludo web application powered by WebRTC P2P DataChannels for real-time gameplay and Supabase for authentication, matchmaking signaling, and coin wallet transactions.

## Project Structure

```text
ludo-royale/
├── index.html              # Main UI (Auth, Lobby, Arena, Wallet, Broker & Admin panels)
├── style.css               # Custom felt theme, board & animation styles
├── schema db.txt           # PostgreSQL / Supabase table schema reference
├── .gitignore              # Excludes local credentials (.env, js/config.local.js)
├── .env.example            # Environment variable reference template
├── README.md               # Setup & GitHub deployment guide
└── js/
    ├── config.example.js   # Safe credential template (copy to js/config.local.js)
    ├── supabase.js         # Supabase client & shared state (reads from window.ENV)
    ├── main.js             # App bootstrap & module event wiring
    ├── player.js           # 11-digit mobile + SHA-256 device-hash login & JWT session
    ├── coin.js             # Coin transfers, deposit & withdrawal requests
    ├── broker.js           # Broker commission & user deposit/withdraw approval panel
    ├── admin.js            # Admin fee configuration & coin minting controls
    ├── board.js            # Canvas Ludo board rendering & token path coordinates
    ├── dice.js             # 3D-style dice rendering & roll triggers
    ├── game.js             # Matchmaking, WebRTC sync, turn timer & payout engine
    └── sound.js            # Web Audio API synthesized sound effects
```

## Local Setup (Before Running)

Because `js/config.local.js` is ignored by `.gitignore`, create it locally from the example template:

1. Copy `js/config.example.js` to `js/config.local.js`.
2. Fill in your actual `SUPABASE_URL`, `SUPABASE_ANON_KEY`, and `JWT_SIGNING_SECRET`:
   ```javascript
   window.ENV = {
     SUPABASE_URL: "https://your-project-id.supabase.co",
     SUPABASE_ANON_KEY: "your-supabase-anon-key",
     JWT_SIGNING_SECRET: "your-secret-key"
   };
   ```
3. Serve the folder using any local static server (e.g., VS Code Live Server or `npx serve .`).

## Upload to GitHub

1. Verify that `js/config.local.js` and `.env` are **not** staged (`git status`).
2. Initialize and push to your repository:
   ```bash
   git init
   git add .
   git commit -m "Initial GitHub-ready commit for Ludo Royale"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-repo>.git
   git push -u origin main
   ```
