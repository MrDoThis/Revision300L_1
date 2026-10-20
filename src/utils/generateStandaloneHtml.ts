import { allCourses } from '../data';

export function generateStandaloneHtml(): string {
  const coursesJson = JSON.stringify(allCourses).replace(/<\/script>/g, '<\\/script>');

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>MAC Study Package: 311, 313, 323, 331, 333, 341, 343 | Jabbok Media Services</title>
<style>
:root {
  --bg: #f8fafc;
  --card: #ffffff;
  --tx: #0f172a;
  --mu: #475569;
  --bd: #cbd5e1;
  --ac: #0f766e;
  --ac2: #f0fdfa;
  --ans: #f1f5f9;
  --ansb: #94a3b8;
  --badge-high: #15803d;
  --badge-mod: #b45309;
}
[data-theme=dark] {
  --bg: #090d16;
  --card: #111827;
  --tx: #f1f5f9;
  --mu: #94a3b8;
  --bd: #1e293b;
  --ac: #2dd4bf;
  --ac2: #134e4a20;
  --ans: #0f172a;
  --ansb: #334155;
  --badge-high: #4ade80;
  --badge-mod: #fbbf24;
}
* { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; scroll-padding-top: 7rem; font-family: system-ui, -apple-system, sans-serif; }
body { background: var(--bg); color: var(--tx); line-height: 1.6; }
a { color: var(--ac); text-decoration: none; }
header.top {
  position: sticky; top: 0; z-index: 30;
  display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between;
  padding: 0.6rem 1rem; background: var(--card); border-bottom: 1px solid var(--bd);
}
.brand strong { font-size: 1.15rem; color: var(--ac); }
.brand span { font-size: 0.8rem; color: var(--mu); display: block; }
.ctl { display: flex; gap: 0.4rem; flex-wrap: wrap; }
button {
  font: inherit; font-size: 0.85rem; padding: 0.45rem 0.8rem;
  border: 1px solid var(--bd); border-radius: 8px; background: var(--card);
  color: var(--tx); cursor: pointer; transition: all 0.15s ease;
}
button:hover { border-color: var(--ac); }
button.primary { background: var(--ac); color: #fff; border-color: var(--ac); font-weight: 600; }
[data-theme=dark] button.primary { color: #042f2e; }
.tabs {
  position: sticky; top: 3.5rem; z-index: 25;
  display: flex; gap: 0.4rem; padding: 0.5rem 1rem; background: var(--bg);
  overflow-x: auto; border-bottom: 1px solid var(--bd); -webkit-overflow-scrolling: touch;
}
.tabs button { flex: 1 0 auto; font-weight: 600; padding: 0.55rem 0.9rem; white-space: nowrap; }
.tabs button.active { background: var(--ac); color: #fff; border-color: var(--ac); }
[data-theme=dark] .tabs button.active { color: #042f2e; }
main { max-width: 62rem; margin: 0 auto; padding: 1.2rem 1rem; }
.panel { display: none; }
.panel.active { display: block; }
.phead { margin-bottom: 1rem; }
.phead h1 { font-size: 1.8rem; color: var(--ac); margin-bottom: 0.2rem; }
.phead p { color: var(--mu); font-size: 0.95rem; }
.jump { display: flex; gap: 0.4rem; overflow-x: auto; padding-bottom: 0.8rem; margin-bottom: 1rem; }
.jump a { flex: 0 0 auto; padding: 0.3rem 0.75rem; border-radius: 99px; background: var(--ac2); border: 1px solid var(--bd); font-size: 0.82rem; font-weight: 600; }
.callout { background: var(--ac2); border-left: 4px solid var(--ac); border-radius: 0 8px 8px 0; padding: 0.8rem 1rem; margin-bottom: 1.2rem; }
.matrix-card { background: var(--card); border: 1px solid var(--bd); border-radius: 10px; padding: 1rem; margin-bottom: 0.8rem; }
.badge { display: inline-block; font-size: 0.75rem; font-weight: 700; padding: 0.15rem 0.5rem; border-radius: 99px; }
.badge.vh { background: #dcfce7; color: #166534; }
.badge.h { background: #ccfbf1; color: #115e59; }
.badge.m { background: #fef3c7; color: #92400e; }
details { background: var(--card); border: 1px solid var(--bd); border-radius: 10px; margin: 0.8rem 0; overflow: hidden; }
summary { cursor: pointer; padding: 0.85rem 1rem; font-weight: 700; user-select: none; background: var(--card); }
details > .body { padding: 0 1rem 1rem; border-top: 1px solid var(--bd); }
details.ans { background: var(--ans); border-color: var(--ansb); }
details.ans > summary { color: var(--ac); }
.st { font-size: 1.35rem; margin: 1.8rem 0 0.6rem; padding-bottom: 0.3rem; border-bottom: 2px solid var(--ac); color: var(--ac); }
h3 { font-size: 1.15rem; margin: 1rem 0 0.4rem; }
h4 { font-size: 1rem; margin: 0.8rem 0 0.3rem; color: var(--ac); }
ul, ol { padding-left: 1.3rem; margin: 0.5rem 0; }
li { margin: 0.3rem 0; }
.tw { overflow-x: auto; margin: 0.8rem 0; border: 1px solid var(--bd); border-radius: 8px; }
table { border-collapse: collapse; width: 100%; font-size: 0.9rem; }
th, td { border: 1px solid var(--bd); padding: 0.6rem 0.75rem; text-align: left; vertical-align: top; }
th { background: var(--ac2); font-weight: 700; color: var(--ac); }
pre.org { overflow-x: auto; background: var(--card); border: 1px solid var(--bd); border-radius: 8px; padding: 0.8rem; font-size: 0.8rem; font-family: ui-monospace, monospace; }
.exam-head { background: var(--card); border: 1px solid var(--bd); border-radius: 12px; padding: 0.8rem 1rem; text-align: center; margin-bottom: 1rem; }
.exam-head .pb { font-size: 0.82rem; font-weight: 700; color: var(--ac); letter-spacing: 0.05em; text-transform: uppercase; margin-bottom: 0.4rem; }
.qa { margin: 1.2rem 0; border: 1px solid var(--bd); border-radius: 12px; background: var(--card); padding: 1rem; }
.qa > h3 { color: var(--ac); }
.foot { margin-top: 3rem; padding: 1.5rem 1rem; text-align: center; font-size: 0.88rem; color: var(--mu); border-top: 1px solid var(--bd); background: var(--card); }
@media print {
  .top, .tabs, .jump, button { display: none !important; }
  .panel { display: block !important; page-break-after: always; }
  body { background: #fff !important; color: #000 !important; font-size: 10pt; }
  details { border-color: #bbb; break-inside: avoid; }
  details > .body { display: block !important; }
}
</style>
</head>
<body>
<header class="top">
  <div class="brand">
    <strong>MAC 300L Master Study Package</strong>
    <span>Prepared by Jabbok Media Services &middot; Comprehensive Final Exam Revision</span>
  </div>
  <div class="ctl">
    <button id="exp" type="button">Collapse all</button>
    <button id="th" type="button">Dark</button>
    <button id="pr" type="button" class="primary">Print / PDF</button>
  </div>
</header>
<nav class="tabs" id="tabNav"></nav>
<main id="mainContainer"></main>
<footer class="foot">
  <strong>Prepared by Jabbok Media Services</strong><br>
  WhatsApp: +2349120840850 | <a href="https://www.jabbokmedia.com.ng" target="_blank" rel="noopener">www.jabbokmedia.com.ng</a><br>
  <em>Comprehensive Exam Revision &bull; Frequency Analysis &bull; Unabridged Model Answers</em>
</footer>

<script>
const COURSES = ${coursesJson};

(function() {
  const d = document;
  const tabNav = d.getElementById('tabNav');
  const main = d.getElementById('mainContainer');
  const expBtn = d.getElementById('exp');
  const thBtn = d.getElementById('th');
  const prBtn = d.getElementById('pr');

  let currentCourseIndex = 0;

  function renderTabs() {
    tabNav.innerHTML = '';
    COURSES.forEach((c, idx) => {
      const btn = d.createElement('button');
      btn.textContent = c.code;
      btn.title = c.title;
      if (idx === currentCourseIndex) btn.classList.add('active');
      btn.addEventListener('click', () => switchTab(idx));
      tabNav.appendChild(btn);
    });
  }

  function renderCourse(idx) {
    const c = COURSES[idx];
    let html = '';

    html += '<section class="panel active">';
    html += '<div class="phead">';
    html += '<h1>' + c.code + ': ' + c.title + '</h1>';
    html += '<p><strong>Credit Units:</strong> ' + c.creditUnits + ' &middot; <strong>Time Allowed:</strong> ' + c.timeAllowed + '</p>';
    html += '<p style="margin-top:0.3rem">' + c.overview + '</p>';
    html += '</div>';

    html += '<nav class="jump">';
    html += '<a href="#freq-' + idx + '">⚡ Frequency Matrix</a>';
    html += '<a href="#mods-' + idx + '">📚 Modules (' + c.modules.length + ')</a>';
    if (c.tables && c.tables.length) html += '<a href="#tables-' + idx + '">📊 Tables</a>';
    html += '<a href="#exam-' + idx + '">📝 Practice Exam & Model Answers</a>';
    html += '<a href="#mnem-' + idx + '">🧠 Memorization Aids</a>';
    html += '</nav>';

    // Frequency Analysis
    html += '<div class="callout" id="freq-' + idx + '">';
    html += '<h2 style="font-size:1.2rem; color:var(--ac); margin-bottom:0.4rem;">🎯 Examiner Frequency Analysis & Probability Matrix</h2>';
    html += '<p style="font-size:0.9rem; margin-bottom:0.8rem;">' + c.frequencyAnalysis.summary + '</p>';
    html += '<div style="display:grid; gap:0.6rem;">';
    c.frequencyAnalysis.matrix.forEach(item => {
      const badgeCls = item.probability === 'VERY HIGH' ? 'vh' : item.probability === 'HIGH' ? 'h' : 'm';
      html += '<div class="matrix-card">';
      html += '<div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.3rem;">';
      html += '<strong>' + item.topic + '</strong>';
      html += '<span class="badge ' + badgeCls + '">' + item.probability + ' (' + item.frequency + ')</span>';
      html += '</div>';
      html += '<p style="font-size:0.85rem; color:var(--mu); margin-bottom:0.3rem;"><strong>Examiner Focus:</strong> ' + item.examinerFocus + '</p>';
      html += '<p style="font-size:0.85rem; color:var(--ac); font-weight:600;">' + item.memoryAnchor + '</p>';
      html += '</div>';
    });
    html += '</div></div>';

    // Modules
    html += '<h2 class="st" id="mods-' + idx + '">Course Modules & Master Question Guide</h2>';
    c.modules.forEach(m => {
      html += '<details open>';
      html += '<summary style="color:var(--ac); font-size:1.05rem;">' + m.title + '</summary>';
      html += '<div class="body">';
      m.questions.forEach(q => {
        html += '<div style="margin:0.8rem 0 1.2rem;">';
        html += '<h3 style="color:var(--tx);">' + q.question + '</h3>';
        if (q.frequencyTag) {
          html += '<span class="badge h" style="margin-bottom:0.5rem;">' + q.frequencyTag + '</span>';
        }
        if (q.mnemonic) {
          html += '<p style="font-size:0.85rem; color:var(--ac); font-weight:700; margin:0.3rem 0;">' + q.mnemonic + '</p>';
        }
        html += '<div>' + q.answerHtml + '</div>';
        if (q.keyTakeaways && q.keyTakeaways.length) {
          html += '<div style="background:var(--ac2); border-radius:6px; padding:0.6rem 0.8rem; margin-top:0.6rem;">';
          html += '<strong style="font-size:0.85rem; color:var(--ac);">Key Exam Takeaways:</strong>';
          html += '<ul style="margin:0.2rem 0 0 1rem; font-size:0.85rem;">';
          q.keyTakeaways.forEach(kt => html += '<li>' + kt + '</li>');
          html += '</ul></div>';
        }
        html += '</div>';
      });
      html += '</div></details>';
    });

    // Tables
    if (c.tables && c.tables.length) {
      html += '<h2 class="st" id="tables-' + idx + '">Comparative Tables & Frameworks</h2>';
      c.tables.forEach(t => {
        html += '<details open>';
        html += '<summary>' + t.title + '</summary>';
        html += '<div class="body"><div class="tw"><table><thead><tr>';
        t.headers.forEach(h => html += '<th>' + h + '</th>');
        html += '</tr></thead><tbody>';
        t.rows.forEach(r => {
          html += '<tr>';
          r.forEach(cell => html += '<td>' + cell + '</td>');
          html += '</tr>';
        });
        html += '</tbody></table></div></div></details>';
      });
    }

    // Diagrams
    if (c.diagrams && c.diagrams.length) {
      c.diagrams.forEach(diag => {
        html += '<details open><summary>' + diag.title + '</summary><div class="body">';
        html += '<pre class="org">' + diag.content + '</pre>';
        html += '</div></details>';
      });
    }

    // Practice Exam
    html += '<h2 class="st" id="exam-' + idx + '">Practice Examination Paper with FULL MODEL ANSWERS</h2>';
    html += '<div class="exam-head">';
    html += '<div class="pb">' + c.practiceExam.heading + '</div>';
    html += '<p style="font-weight:700;">COURSE CODE: ' + c.code + ' &middot; ' + c.title + '</p>';
    html += '<p style="font-size:0.88rem; color:var(--mu);">' + c.practiceExam.instructions + '</p>';
    html += '</div>';

    c.practiceExam.questions.forEach(eq => {
      html += '<article class="qa">';
      html += '<div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:0.4rem;">';
      html += '<h3>' + eq.number + ': ' + eq.title + ' (' + eq.marks + ')</h3>';
      if (eq.isCompulsory) html += '<span class="badge vh">COMPULSORY</span>';
      html += '</div>';
      html += '<p style="font-size:0.8rem; color:var(--mu); margin:0.2rem 0 0.5rem;">' + eq.frequencyNote + '</p>';
      html += '<div style="background:var(--ac2); padding:0.6rem 0.8rem; border-radius:6px; margin-bottom:0.8rem; font-size:0.92rem;">' + eq.questionText.replace(/\\n/g, '<br>') + '</div>';

      html += '<details class="ans" open>';
      html += '<summary>Full Model Answer & Marking Guide</summary>';
      html += '<div class="body">';
      if (eq.scoringGuide && eq.scoringGuide.length) {
        html += '<div style="background:var(--card); border:1px solid var(--bd); padding:0.5rem 0.8rem; border-radius:6px; margin:0.6rem 0; font-size:0.82rem;">';
        html += '<strong style="color:var(--ac);">Examiner Marking Allocation:</strong>';
        html += '<ul style="margin:0.2rem 0 0 1rem;">';
        eq.scoringGuide.forEach(sg => html += '<li>' + sg + '</li>');
        html += '</ul></div>';
      }
      if (eq.mnemonic) {
        html += '<p style="font-size:0.85rem; font-weight:700; color:var(--ac); margin-bottom:0.5rem;">' + eq.mnemonic + '</p>';
      }
      html += eq.modelAnswerHtml;
      html += '</div></details>';
      html += '</article>';
    });

    // Memorization Aids
    if (c.memorizationAids) {
      html += '<h2 class="st" id="mnem-' + idx + '">' + c.memorizationAids.title + '</h2>';
      html += '<div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(250px, 1fr)); gap:0.8rem; margin-top:0.8rem;">';
      c.memorizationAids.items.forEach(m => {
        html += '<div style="background:var(--card); border:1px solid var(--bd); border-radius:8px; padding:0.8rem;">';
        html += '<strong style="font-size:1.1rem; color:var(--ac);">' + m.acronym + '</strong>';
        html += '<p style="font-size:0.85rem; font-weight:600; margin:0.2rem 0;">' + m.standsFor + '</p>';
        html += '<p style="font-size:0.82rem; color:var(--mu);">' + m.usage + '</p>';
        html += '</div>';
      });
      html += '</div>';
    }

    html += '</section>';
    main.innerHTML = html;
  }

  function switchTab(idx) {
    currentCourseIndex = idx;
    renderTabs();
    renderCourse(idx);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Expand / Collapse all
  expBtn.addEventListener('click', () => {
    const details = main.querySelectorAll('details');
    const allOpen = Array.from(details).every(d => d.open);
    details.forEach(d => d.open = !allOpen);
    expBtn.textContent = allOpen ? 'Expand all' : 'Collapse all';
  });

  // Dark/Light Theme
  thBtn.addEventListener('click', () => {
    const isDark = d.documentElement.getAttribute('data-theme') === 'dark';
    d.documentElement.setAttribute('data-theme', isDark ? 'light' : 'dark');
    thBtn.textContent = isDark ? 'Dark' : 'Light';
  });

  // Print
  prBtn.addEventListener('click', () => {
    const details = main.querySelectorAll('details');
    details.forEach(d => d.open = true);
    window.print();
  });

  renderTabs();
  renderCourse(0);
})();
</script>
</body>
</html>`;
}
