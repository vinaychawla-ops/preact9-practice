(function () {
  "use strict";

  var SECTION_META = {
    english: { title: "English", officialQuestions: 44, officialMinutes: 35, blurb: "Revise and edit short essays: grammar, punctuation, organization and word choice." },
    math:    { title: "Math",    officialQuestions: 34, officialMinutes: 45, blurb: "Algebra, functions, geometry, statistics and problem solving through early grade 10." },
    reading: { title: "Reading", officialQuestions: 33, officialMinutes: 40, blurb: "Read prose and informational passages; find main ideas, details and inferences." },
    science: { title: "Science", officialQuestions: 32, officialMinutes: 35, blurb: "Interpret data tables and experiments; draw conclusions from scientific passages." }
  };

  var SETS = {
    "1": { label: "Set 1", data: window.PREACT_DATA, mode: "practice" },
    "2": { label: "Set 2", data: window.PREACT_DATA2, mode: "practice" },
    "3": { label: "Set 3", data: window.PREACT_DATA3, mode: "timed", fullLength: true }
  };
  var currentSet = "1";
  try { var saved = localStorage.getItem("preact9-set"); if (SETS[saved]) currentSet = saved; } catch (e) {}

  // Best-score keys keep Set 1's original format so existing scores carry over.
  function bestKey(key, mode, set) {
    return set === "1" ? key + ":" + mode : "s" + set + ":" + key + ":" + mode;
  }

  var app = document.getElementById("app");
  var statusEl = document.getElementById("session-status");
  var storeKey = "preact9-practice-v1";

  function store() {
    try { return JSON.parse(localStorage.getItem(storeKey)) || {}; }
    catch (e) { return {}; }
  }
  function saveStore(s) {
    try { localStorage.setItem(storeKey, JSON.stringify(s)); } catch (e) {}
  }

  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text !== undefined) n.textContent = text;
    return n;
  }

  function esc(s) { return s; }

  // Build a flat session model from the section data.
  function buildItems(key) {
    var data = SETS[currentSet].data[key];
    var items = [];
    if (data.passages) {
      data.passages.forEach(function (p) {
        p.questions.forEach(function (q) {
          items.push({ passage: p, q: q });
        });
      });
    } else {
      data.questions.forEach(function (q) {
        items.push({ passage: null, q: q });
      });
    }
    return items;
  }

  function countFor(key) { return buildItems(key).length; }

  function secondsPerQuestion(key) {
    var m = SECTION_META[key];
    return (m.officialMinutes * 60) / m.officialQuestions;
  }

  // ---------- Home ----------
  function renderHome() {
    stopTimer();
    statusEl.classList.add("hidden");
    app.innerHTML = "";
    app.appendChild(el("h1", null, "Practice for the PreACT 9"));
    var intro = el("div", "intro");
    if (SETS[currentSet].fullLength) {
      intro.appendChild(el("p", null, "Set 3 is a full-length timed mock test: each section has the official PreACT 9 Secure question count and time limit (English 44 in 35 min, Math 34 in 45, Reading 33 in 40, Science 32 in 35). Answers are scored at the end, with a full review and explanations."));
      intro.appendChild(el("p", null, "Each section is launched and timed on its own with the question counts and time limits above. This is not a simulation of full exam administration."));
    } else {
      intro.appendChild(el("p", null, "Sets 1 and 2 are untimed practice: instant feedback with an explanation after every question. When you are ready for exam conditions, Set 3 is a separate full-length timed mock test."));
    }
    intro.appendChild(el("p", null, "All questions are original and follow the official format: four answer choices per question, no penalty for guessing. Science may be optional at your school."));
    intro.appendChild(el("p", null, "Your percent correct is practice feedback, not an ACT scaled-score estimate. The questions target the published PreACT 9 skills and styles, but their difficulty is not calibrated against the live exam."));
    app.appendChild(intro);

    var setbar = el("div", "setbar");
    setbar.appendChild(el("span", "setbar-label", "Question set"));
    ["1", "2", "3"].forEach(function (id) {
      var tb = el("button", "btn set-toggle" + (currentSet === id ? " active" : ""), SETS[id].label);
      tb.type = "button";
      tb.onclick = function () {
        currentSet = id;
        try { localStorage.setItem("preact9-set", id); } catch (e) {}
        renderHome();
      };
      setbar.appendChild(tb);
    });
    setbar.appendChild(el("span", "setbar-note", "Sets 1 and 2: 66 practice questions each. Set 3: a 143-question timed mock test in four separately timed sections. Every set is all-new material - no question repeats across sets."));
    app.appendChild(setbar);

    var s = store();
    var grid = el("div", "grid");
    Object.keys(SECTION_META).forEach(function (key) {
      var meta = SECTION_META[key];
      var n = countFor(key);
      var card = el("div", "card");
      var h = el("h2");
      h.appendChild(el("span", null, meta.title));
      h.appendChild(el("span", "count", n + " questions"));
      card.appendChild(h);
      card.appendChild(el("p", null, meta.blurb));
      var mode = SETS[currentSet].mode;
      var best = s[bestKey(key, mode, currentSet)];
      card.appendChild(el("div", "best", best ? ("Best " + (mode === "timed" ? "mock test" : "practice") + " score: " + best.correct + "/" + best.total + " (" + best.pct + "%)") : ""));
      if (mode === "practice") {
        var legacy = s[bestKey(key, "timed", currentSet)];
        if (legacy) card.appendChild(el("div", "best", "Earlier timed-set best: " + legacy.correct + "/" + legacy.total + " (" + legacy.pct + "%)"));
      }
      var row = el("div", "btn-row");
      if (mode === "practice") {
        var bp = el("button", "btn primary", "Practice");
        bp.type = "button";
        bp.onclick = function () { startSession(key, "practice"); };
        row.appendChild(bp);
      } else {
        var bt = el("button", "btn primary", "Start timed test");
        bt.type = "button";
        bt.title = "Full-length mock: " + meta.officialQuestions + " questions in " + meta.officialMinutes + " minutes, the official count and time";
        bt.onclick = function () { startSession(key, "timed"); };
        row.appendChild(bt);
      }
      card.appendChild(row);
      grid.appendChild(card);
    });
    app.appendChild(grid);

    var res = el("div", "card resources");
    res.appendChild(el("h2", null, "Official ACT resources"));
    res.appendChild(el("p", null, "Free official materials from ACT for the PreACT 9 Secure. These links open on ACT's official sites."));
    var LINKS = [
      { label: "Preparing for PreACT 9 Secure (official guide)", url: "https://www.act.org/content/act/en/products-and-services/preact/resources/preparing-for-preact9-secure.html", desc: "Format, timing, content breakdowns and test-day tips." },
      { label: "Official online practice test", url: "https://tn.preact.actonline.act.org/client/index.html", desc: "Free, no login needed, timed and untimed versions. On that page, choose \"Practice Tests\" below the sign-in box." },
      { label: "Official practice test scoring guide (PDF)", url: "https://www.act.org/content/dam/act/secured/documents/PreACT-9-Secure-Practice-Test-Scoring-Guide.pdf", desc: "Answer keys and raw-to-scale score conversion tables." }
    ];
    var ul = el("ul", "res-list");
    LINKS.forEach(function (l) {
      var li = el("li");
      var a = el("a", null, l.label);
      a.href = l.url;
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      li.appendChild(a);
      li.appendChild(el("span", "res-desc", " - " + l.desc));
      ul.appendChild(li);
    });
    res.appendChild(ul);
    app.appendChild(res);

    var note = el("p", "mode-note", "Tip: on the real PreACT 9 you cannot return to a section once time is called, and you should answer every question. The Set 3 mock test follows the same idea within a section.");
    app.appendChild(note);
  }

  // ---------- Session ----------
  var session = null;
  var timerId = null;

  function startSession(key, mode) {
    var setCfg = SETS[currentSet];
    if (mode !== setCfg.mode) mode = setCfg.mode;
    var items = buildItems(key);
    var totalSeconds = setCfg.fullLength
      ? SECTION_META[key].officialMinutes * 60
      : Math.round(secondsPerQuestion(key) * items.length);
    session = {
      key: key, mode: mode, set: currentSet, items: items, idx: 0,
      answers: new Array(items.length).fill(null),
      flags: new Array(items.length).fill(false),
      checked: new Array(items.length).fill(false),
      remaining: totalSeconds, totalSeconds: totalSeconds,
      finished: false
    };
    if (mode === "timed") startTimer(); else stopTimer();
    renderQuestion();
  }

  function startTimer() {
    stopTimer();
    timerId = setInterval(function () {
      if (!session || session.finished) { stopTimer(); return; }
      session.remaining -= 1;
      updateStatus();
      if (session.remaining <= 0) { stopTimer(); finishSession(true); }
    }, 1000);
  }
  function stopTimer() { if (timerId) { clearInterval(timerId); timerId = null; } }

  function fmtTime(s) {
    if (s < 0) s = 0;
    var m = Math.floor(s / 60), r = s % 60;
    return m + ":" + (r < 10 ? "0" : "") + r;
  }

  function updateStatus() {
    if (!session) { statusEl.classList.add("hidden"); return; }
    statusEl.classList.remove("hidden");
    statusEl.innerHTML = "";
    statusEl.appendChild(el("span", null, SECTION_META[session.key].title + (session.set !== "1" ? " (Set " + session.set + ")" : "") + " - " + (session.mode === "timed" ? (SETS[session.set].fullLength ? "timed mock test" : "timed set") : "practice")));
    if (session.mode === "timed") {
      var t = el("span", "timer" + (session.remaining <= 60 ? " low" : ""), fmtTime(session.remaining));
      statusEl.appendChild(t);
    }
  }

  function renderPassage(container, p) {
    var box = el("div", "passage");
    box.appendChild(el("p", "kicker", p.kicker || "Passage"));
    box.appendChild(el("h2", null, p.title));
    (p.body || []).forEach(function (para) {
      var pe = el("p");
      pe.innerHTML = para;
      box.appendChild(pe);
    });
    if (p.table) {
      box.appendChild(buildTable(p.table));
    }
    (p.afterTable || []).forEach(function (para) {
      var pe = el("p");
      pe.innerHTML = para;
      box.appendChild(pe);
    });
    container.appendChild(box);
  }

  function buildTable(t) {
    var table = el("table");
    var tr = el("tr");
    t.header.forEach(function (h) { tr.appendChild(el("th", null, h)); });
    table.appendChild(tr);
    t.rows.forEach(function (r) {
      var row = el("tr");
      r.forEach(function (c) { row.appendChild(el("td", null, String(c))); });
      table.appendChild(row);
    });
    if (t.caption) {
      var cap = el("p", "kicker", t.caption);
      var wrap = el("div");
      wrap.appendChild(cap);
      wrap.appendChild(table);
      return wrap;
    }
    return table;
  }

  function renderQuestion() {
    updateStatus();
    app.innerHTML = "";
    var it = session.items[session.idx];
    var i = session.idx;

    var head = el("div", "session-head");
    head.appendChild(el("span", "progress", "Question " + (i + 1) + " of " + session.items.length));
    var endBtn = el("button", "btn ghost", "End session");
    endBtn.type = "button";
    endBtn.onclick = function () {
      if (confirm("End this session and see your results?")) finishSession(false);
    };
    head.appendChild(endBtn);
    app.appendChild(head);

    var cols = el("div", "cols" + (it.passage ? "" : " single"));
    if (it.passage) renderPassage(cols, it.passage);

    var panel = el("div", "qpanel");
    if (it.q.category) panel.appendChild(el("p", "qcat", it.q.category));
    var stem = el("p", "qstem");
    stem.innerHTML = it.q.stem;
    panel.appendChild(stem);

    var letters = ["A", "B", "C", "D"];
    var choices = el("div", "choices");
    var answered = session.answers[i] !== null;
    it.q.choices.forEach(function (c, ci) {
      var b = el("button", "choice");
      b.type = "button";
      b.appendChild(el("span", "letter", letters[ci] + "."));
      var ct = el("span");
      ct.innerHTML = c;
      b.appendChild(ct);
      if (session.mode === "practice" && session.checked[i]) {
        b.disabled = true;
        if (ci === it.q.answer) b.classList.add("correct");
        else if (ci === session.answers[i]) b.classList.add("wrong");
      } else if (session.answers[i] === ci) {
        b.classList.add("selected");
      }
      b.onclick = function () { chooseAnswer(ci); };
      choices.appendChild(b);
    });
    panel.appendChild(choices);

    if (session.mode === "practice" && session.checked[i]) {
      var correct = session.answers[i] === it.q.answer;
      var ex = el("div", "explain");
      var v = el("span", "verdict " + (correct ? "good" : "bad"), correct ? "Correct." : "Not quite.");
      ex.appendChild(v);
      var et = el("span");
      et.innerHTML = " The answer is " + letters[it.q.answer] + ". " + it.q.explanation;
      ex.appendChild(et);
      panel.appendChild(ex);
    }

    var foot = el("div", "qfoot");
    var left = el("div", "btn-row");
    var prev = el("button", "btn", "Previous");
    prev.type = "button"; prev.disabled = i === 0;
    prev.onclick = function () { session.idx--; renderQuestion(); };
    left.appendChild(prev);
    if (session.mode === "timed") {
      var fl = el("button", "btn", session.flags[i] ? "Unflag" : "Flag for review");
      fl.type = "button";
      fl.onclick = function () { session.flags[i] = !session.flags[i]; renderQuestion(); };
      left.appendChild(fl);
    }
    foot.appendChild(left);

    var dots = el("div", "nav-dots");
    session.items.forEach(function (_, di) {
      var d = el("button", "dot");
      d.type = "button";
      d.title = "Question " + (di + 1);
      if (session.answers[di] !== null) d.classList.add("answered");
      if (session.flags[di]) d.classList.add("flagged");
      if (di === i) d.classList.add("current");
      d.onclick = function () { session.idx = di; renderQuestion(); };
      dots.appendChild(d);
    });
    foot.appendChild(dots);

    var right = el("div", "btn-row");
    if (i < session.items.length - 1) {
      var nx = el("button", "btn primary", "Next");
      nx.type = "button";
      nx.onclick = function () { session.idx++; renderQuestion(); };
      right.appendChild(nx);
    } else {
      var fin = el("button", "btn primary", session.mode === "timed" ? "Finish and score" : "See results");
      fin.type = "button";
      fin.onclick = function () {
        var unanswered = session.answers.filter(function (a) { return a === null; }).length;
        if (unanswered > 0 && !confirm(unanswered + " question(s) unanswered. Finish anyway?")) return;
        finishSession(false);
      };
      right.appendChild(fin);
    }
    foot.appendChild(right);
    panel.appendChild(foot);

    cols.appendChild(panel);
    app.appendChild(cols);
  }

  function chooseAnswer(ci) {
    var i = session.idx;
    var it = session.items[i];
    if (session.mode === "practice" && session.checked[i]) return;
    session.answers[i] = ci;
    if (session.mode === "practice") session.checked[i] = true;
    renderQuestion();
  }

  function finishSession(timeUp) {
    session.finished = true;
    stopTimer();
    var correct = 0;
    var byCat = {};
    session.items.forEach(function (it, i) {
      var ok = session.answers[i] === it.q.answer;
      if (ok) correct++;
      var cat = it.q.category || "General";
      if (!byCat[cat]) byCat[cat] = { correct: 0, total: 0 };
      byCat[cat].total++;
      if (ok) byCat[cat].correct++;
    });
    var total = session.items.length;
    var pct = Math.round((correct / total) * 100);
    var s = store();
    var bkey = bestKey(session.key, session.mode, session.set);
    if (!s[bkey] || pct > s[bkey].pct) {
      s[bkey] = { correct: correct, total: total, pct: pct, when: Date.now() };
      saveStore(s);
    }
    renderResults(correct, total, pct, byCat, timeUp);
  }

  function renderResults(correct, total, pct, byCat, timeUp) {
    statusEl.classList.add("hidden");
    app.innerHTML = "";
    var hero = el("div", "score-hero card");
    hero.appendChild(el("div", "big", correct + " / " + total));
    hero.appendChild(el("div", "pct", pct + "%" + (timeUp ? " - time expired" : "")));
    var meta = SECTION_META[session.key];
    hero.appendChild(el("p", "sub", meta.title + (session.set !== "1" ? " - Set " + session.set : "") + " - " + (session.mode === "timed" ? (SETS[session.set].fullLength ? "full-length timed mock test at official time limits; percent correct, not a scaled score" : "shortened timed set at official pacing; percent correct, not a scaled score") : "practice mode")));
    app.appendChild(hero);

    var catBox = el("div", "card");
    catBox.appendChild(el("h2", null, "By category"));
    var bars = el("div", "catbars");
    Object.keys(byCat).forEach(function (cat) {
      var c = byCat[cat];
      var p = Math.round((c.correct / c.total) * 100);
      var row = el("div", "catbar");
      row.appendChild(el("div", null, cat + " - " + c.correct + "/" + c.total + " (" + p + "%)"));
      var bar = el("div", "bar");
      var fill = el("div", "fill");
      fill.style.width = p + "%";
      bar.appendChild(fill);
      row.appendChild(bar);
      bars.appendChild(row);
    });
    catBox.appendChild(bars);
    app.appendChild(catBox);

    app.appendChild(el("h2", null, "Review"));
    var letters = ["A", "B", "C", "D"];
    session.items.forEach(function (it, i) {
      var ok = session.answers[i] === it.q.answer;
      var box = el("div", "review-item");
      if (it.passage) box.appendChild(el("p", "p-ref", "Passage: " + it.passage.title));
      var stem = el("p", "stem");
      stem.innerHTML = (i + 1) + ". " + it.q.stem;
      box.appendChild(stem);
      var yourLine = el("p", "ansline");
      var your = session.answers[i] === null ? "No answer" : letters[session.answers[i]] + ". " + stripTags(it.q.choices[session.answers[i]]);
      yourLine.innerHTML = "Your answer: <span class='" + (ok ? "ok" : "no") + "'>" + escapeHtml(your) + "</span>";
      box.appendChild(yourLine);
      if (!ok) {
        var corrLine = el("p", "ansline");
        corrLine.innerHTML = "Correct answer: <span class='ok'>" + letters[it.q.answer] + ". " + escapeHtml(stripTags(it.q.choices[it.q.answer])) + "</span>";
        box.appendChild(corrLine);
      }
      var exp = el("p", "exp");
      exp.innerHTML = it.q.explanation;
      box.appendChild(exp);
      app.appendChild(box);
    });

    var row = el("div", "btn-row");
    var retry = el("button", "btn primary", "Try this section again");
    retry.type = "button";
    retry.onclick = function () { startSession(session.key, session.mode); };
    var home = el("button", "btn", "Back to home");
    home.type = "button";
    home.onclick = renderHome;
    row.appendChild(retry); row.appendChild(home);
    app.appendChild(row);
    window.scrollTo(0, 0);
  }

  function stripTags(html) { var d = document.createElement("div"); d.innerHTML = html; return d.textContent || d.innerText || ""; }
  function escapeHtml(s) { return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;"); }


  // Deep links for sharing/testing: ?section=math&mode=timed (and optional &q=3)
  function maybeRoute() {
    try {
      var p = new URLSearchParams(location.search);
      var sec = p.get("section"), mode = p.get("mode");
      var set = p.get("set");
      if (SETS[set]) currentSet = set;
      if (!sec || !SECTION_META[sec]) return;
      startSession(sec, mode === "timed" ? "timed" : "practice");
      var q = parseInt(p.get("q") || "1", 10);
      if (q >= 1 && q <= session.items.length) { session.idx = q - 1; renderQuestion(); }
    } catch (e) {}
  }

  document.getElementById("home-btn").onclick = function () {
    if (session && !session.finished) {
      if (!confirm("Leave this session? Your progress in it will be lost.")) return;
      session.finished = true;
    }
    renderHome();
  };

  renderHome();
  maybeRoute();
})();
