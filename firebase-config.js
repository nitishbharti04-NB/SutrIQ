/* ══════════════════════════════════════════
   SutrIQ Global Styles
   ══════════════════════════════════════════ */
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

:root {
  --bg:      #05050e;
  --bg2:     #0b0b18;
  --bg3:     #101020;
  --surface: #181828;
  --border:  rgba(255,255,255,0.07);
  --border2: rgba(255,255,255,0.13);

  /* Vivid palette */
  --violet:  #8b5cf6;
  --indigo:  #6366f1;
  --cyan:    #06b6d4;
  --pink:    #ec4899;
  --orange:  #f97316;
  --yellow:  #eab308;
  --green:   #22c55e;
  --red:     #ef4444;

  --text:  #f0eeff;
  --text2: #9896b8;
  --text3: #4a4866;

  --sans: 'Space Grotesk', sans-serif;
  --mono: 'DM Mono', monospace;
  --r:  12px;
  --rl: 20px;
}

html { scroll-behavior: smooth; }
body { font-family: var(--sans); background: var(--bg); color: var(--text); line-height: 1.6; overflow-x: hidden; }

/* Scrollbar */
::-webkit-scrollbar { width: 6px; }
::-webkit-scrollbar-track { background: var(--bg2); }
::-webkit-scrollbar-thumb { background: var(--violet); border-radius: 3px; }

/* Typography */
h1 { font-size: clamp(34px, 5vw, 60px); font-weight: 700; line-height: 1.1; letter-spacing: -1.5px; }
h2 { font-size: clamp(26px, 3vw, 40px); font-weight: 700; letter-spacing: -1px; }
h3 { font-size: 19px; font-weight: 600; }
p  { color: var(--text2); line-height: 1.8; }

/* Gradient text helpers */
.gv { background: linear-gradient(135deg, #a78bfa, #06b6d4); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
.gp { background: linear-gradient(135deg, #ec4899, #f97316); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
.gg { background: linear-gradient(135deg, #22c55e, #06b6d4); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
.gy { background: linear-gradient(135deg, #eab308, #f97316); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }

/* Tag pill */
.tag {
  display: inline-block; font-family: var(--mono); font-size: 11px;
  letter-spacing: 1.5px; text-transform: uppercase;
  padding: 5px 14px; border-radius: 50px; margin-bottom: 20px;
  background: linear-gradient(135deg,rgba(139,92,246,.15),rgba(6,182,212,.1));
  border: 1px solid rgba(139,92,246,.3); color: #a78bfa;
}

/* Buttons */
.btn { display: inline-flex; align-items: center; gap: 8px; font-family: var(--sans); font-size: 14px; font-weight: 600; border: none; border-radius: 50px; cursor: pointer; text-decoration: none; transition: transform .2s, opacity .2s; padding: 12px 28px; }
.btn:hover { transform: translateY(-2px); opacity: .9; }
.btn-primary   { background: linear-gradient(135deg, var(--violet), var(--pink)); color: #fff; }
.btn-secondary { background: linear-gradient(135deg, var(--cyan), var(--green)); color: #000; }
.btn-outline   { background: transparent; color: var(--text); border: 1px solid rgba(139,92,246,.4); }
.btn-outline:hover { background: rgba(139,92,246,.1); border-color: var(--violet); }
.btn-danger    { background: linear-gradient(135deg, var(--red), var(--orange)); color: #fff; }
.btn-sm        { padding: 8px 18px; font-size: 13px; }

/* Cards */
.card { background: var(--bg2); border: 1px solid var(--border2); border-radius: var(--rl); padding: 28px; transition: transform .25s, border-color .25s; }
.card:hover { transform: translateY(-3px); border-color: rgba(139,92,246,.35); }

/* Forms */
.form-group { margin-bottom: 18px; }
label { display: block; font-size: 12px; font-weight: 500; color: var(--text3); margin-bottom: 7px; font-family: var(--mono); letter-spacing: .5px; text-transform: uppercase; }
input, textarea, select {
  width: 100%; background: var(--bg3); border: 1px solid var(--border2);
  border-radius: var(--r); padding: 12px 16px; color: var(--text);
  font-family: var(--sans); font-size: 14px; outline: none;
  transition: border-color .2s, box-shadow .2s;
}
input:focus, textarea:focus, select:focus {
  border-color: var(--violet);
  box-shadow: 0 0 0 3px rgba(139,92,246,.15);
}
textarea { resize: vertical; min-height: 110px; }
select option { background: var(--bg3); }
.form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }

/* Badge */
.badge { font-family: var(--mono); font-size: 10px; letter-spacing: 1px; text-transform: uppercase; padding: 3px 10px; border-radius: 50px; }
.badge-v { background: rgba(139,92,246,.15); color: #a78bfa; }
.badge-c { background: rgba(6,182,212,.12);  color: #22d3ee; }
.badge-p { background: rgba(236,72,153,.12); color: #f472b6; }
.badge-o { background: rgba(249,115,22,.12); color: #fb923c; }
.badge-g { background: rgba(34,197,94,.12);  color: #4ade80; }
.badge-y { background: rgba(234,179,8,.12);  color: #fbbf24; }
.badge-r { background: rgba(239,68,68,.12);  color: #f87171; }

/* Toast notification */
#toast {
  position: fixed; bottom: 30px; left: 50%; transform: translateX(-50%) translateY(80px);
  background: var(--surface); border: 1px solid var(--border2); border-radius: 50px;
  padding: 12px 28px; font-size: 14px; font-weight: 500;
  transition: transform .35s cubic-bezier(.34,1.56,.64,1); z-index: 9999;
  white-space: nowrap; pointer-events: none;
}
#toast.show { transform: translateX(-50%) translateY(0); }
#toast.success { border-color: var(--green); color: #4ade80; }
#toast.error   { border-color: var(--red);   color: #f87171; }

/* Spinner */
.spinner { width: 20px; height: 20px; border: 2px solid rgba(255,255,255,.2); border-top-color: #fff; border-radius: 50%; animation: spin .7s linear infinite; }
@keyframes spin { to { transform: rotate(360deg); } }

/* Avatar */
.avatar { width: 38px; height: 38px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 14px; flex-shrink: 0; }

/* Divider */
.divider { border: none; border-top: 1px solid var(--border); margin: 24px 0; }

/* Container */
.container { max-width: 1100px; margin: 0 auto; }

/* Orb effects */
.orb { position: absolute; border-radius: 50%; pointer-events: none; filter: blur(80px); opacity: .3; }

/* Section */
section { padding: 80px 5%; }
.section-header { text-align: center; margin-bottom: 56px; }
.section-header h2 { margin-bottom: 10px; }

/* Responsive */
@media (max-width: 768px) {
  .form-row { grid-template-columns: 1fr; }
  .nav-links { display: none; }
}
