const urlParams = new URLSearchParams(window.location.search);
const dID = urlParams.get('id');
const rKey = urlParams.get('key');
let lastG = "", timer;

function formatMyDate(dateStr) {
    if (!dateStr || dateStr.length < 5) return "N/A";
    const parts = dateStr.split('-');
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    return months[parseInt(parts[1]) - 1] + " " + parseInt(parts[2]) + ", " + parts[0];
}

async function getRawg(n) {
    try {
        const res = await fetch(`https://api.rawg.io/api/games?key=${rKey}&search=${encodeURIComponent(n)}&page_size=1`);
        const d = await res.json();
        if(d.results[0]) {
            const g = d.results[0];
            document.getElementById("a").style.backgroundImage = `url(${g.background_image})`;
            document.getElementById("r").innerText = formatMyDate(g.released);
            document.getElementById("g").innerText = g.genres.map(x=>x.name).slice(0,2).join(", ");
        }
    } catch(e) {}
}

const socket = new WebSocket("wss://api.lanyard.rest/socket");
socket.onmessage = (ev) => {
    const d = JSON.parse(ev.data);
    if(d.op === 1) {
        setInterval(()=>socket.send(JSON.stringify({op:3})), d.d.heartbeat_interval);
        socket.send(JSON.stringify({op:2, d:{subscribe_to_id:dID}}));
    }
    if(d.t === "PRESENCE_UPDATE" || d.t === "INIT_STATE") {
        const presence = d.t === "INIT_STATE" ? d.d : d.d;
        const game = presence.activities ? presence.activities.find(x=>x.type===0) : null;
        const w = document.getElementById("w");
        if(game) {
            w.style.opacity = "1";
            document.getElementById("t").innerText = game.name;
            if(game.name !== lastG) { lastG = game.name; getRawg(game.name); }
            if(game.timestamps && game.timestamps.start) startT(game.timestamps.start);
        } else { w.style.opacity = "0"; clearInterval(timer); lastG = ""; }
    }
};

function startT(st) {
    clearInterval(timer);
    timer = setInterval(() => {
        const diff = Math.floor((Date.now() - st) / 1000);
        const h = Math.floor(diff/3600).toString().padStart(2,"0");
        const m = Math.floor((diff%3600)/60).toString().padStart(2,"0");
        const s = (diff%60).toString().padStart(2,"0");
        document.getElementById("s").innerText = `${h}:${m}:${s}`;
    }, 1000);
}


document.body.addEventListener('dblclick', () => window.location.href = "../Dashboard.html");
