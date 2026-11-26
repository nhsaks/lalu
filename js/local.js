// Shared mutable application state and UI helpers across modules
export const state = {
  authMode: "login",
  deviceHash: "",
  account: {
    id: null,
    mobile: "",
    username: "Player",
    role: "user",
    coins: 0,
    depositedByBroker: null
  },
  platformConfig: {
    gameFeePct: 20,
    brokerFeePct: 10,
    minTxLimit: 500
  },
  selectedStake: 100,
  selectedPlayerCount: 2,
  game: null,
  onlineRoomCode: null,
  realtimeChannel: null,
  lobbyMatchmakerChannel: null,
  liveOpenRoomsMap: new Map(),
  waitingRoomState: null,
  mySeatIndex: 0,
  stakeDeductedForCurrentMatch: false,
  payoutProcessedForMatch: false,
  isAnimatingMove: false,
  isSyncingMatch: false,
  animFrameId: null,
  autoMatchLocked: false
};

export function showToast(msg, tone = "info") {
  const container = document.getElementById("toastContainer");
  if (!container) return;
  const el = document.createElement("div");
  const colors = {
    info: "bg-slate-900/95 border-white/15 text-white",
    gold: "bg-amber-950/95 border-amber-400/60 text-amber-200",
    danger: "bg-rose-950/95 border-rose-400/60 text-rose-200",
    success: "bg-emerald-950/95 border-emerald-400/60 text-emerald-200"
  };
  el.className = `toast-anim px-4 py-2.5 rounded-2xl border text-xs font-extrabold shadow-xl text-center ${colors[tone] || colors.info}`;
  el.textContent = msg;
  container.appendChild(el);
  setTimeout(() => el.remove(), 3250);
}