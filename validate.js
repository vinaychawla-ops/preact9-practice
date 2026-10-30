global.window = {};
["english", "math", "reading", "science"].forEach(function (s) { require("./data/" + s + ".js"); });
["english", "math", "reading", "science"].forEach(function (s) { require("./data2/" + s + ".js"); });
var errs = [], ids = {};
function checkQ(q, where) {
  ["id","stem","choices","answer","explanation","category"].forEach(function(f){
    if (q[f] === undefined) errs.push(where + ": missing " + f);
  });
  if (!Array.isArray(q.choices) || q.choices.length !== 4) errs.push(where + ": needs exactly 4 choices");
  if (typeof q.answer !== "number" || q.answer < 0 || q.answer > 3) errs.push(where + ": bad answer index");
  if (ids[q.id]) errs.push(where + ": duplicate id " + q.id); else ids[q.id] = 1;
}
function validateSet(D, name) {
  ["english", "math", "reading", "science"].forEach(function (sec) {
    if (!D || !D[sec]) { errs.push(name + ": missing section " + sec); return; }
    var d = D[sec];
    if (d.passages) {
      d.passages.forEach(function (p) {
        if (!p.title || !p.body || !p.questions) errs.push(name + "/" + sec + "/" + p.id + ": passage missing fields");
        p.questions.forEach(function (q) { checkQ(q, name + "/" + sec + "/" + q.id); });
      });
    } else {
      d.questions.forEach(function (q) { checkQ(q, name + "/" + sec + "/" + q.id); });
    }
  });
  var totals = {};
  Object.keys(D).forEach(function (sec) {
    totals[sec] = D[sec].passages
      ? D[sec].passages.reduce(function (a, p) { return a + p.questions.length; }, 0)
      : D[sec].questions.length;
  });
  console.log(name + " counts:", JSON.stringify(totals), "total:", Object.values(totals).reduce(function(a,b){return a+b},0));
}
validateSet(window.PREACT_DATA, "Set 1");
validateSet(window.PREACT_DATA2, "Set 2");
if (errs.length) { console.log("ERRORS:\n" + errs.join("\n")); process.exit(1); }
console.log("All checks passed.");
