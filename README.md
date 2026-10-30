# PreACT 9 Practice

A small, offline practice site for the PreACT 9 Secure test. 275 original
questions across three sets, in the official format (4 answer choices, no
penalty for guessing). No question repeats across sets. Best scores are saved
per set in the browser.

- **Sets 1 and 2 (practice, untimed)**: 66 questions each - English 16
  (2 essays, revise-and-edit style with "NO CHANGE"), Math 20 (through early
  grade 10 topics), Reading 16, Science 14. Instant feedback and an
  explanation after every question.
- **Set 3 (full-length timed mock test)**: 143 all-new questions at the
  official PreACT 9 Secure section counts and time limits: English 44
  questions in 35 minutes, Math 34 in 45, Reading 33 in 40, Science 32 in
  35. Answers are scored at the end with a full review and explanations.

Set 3 passage mix: 4 English essays; a literary narrative, an informational
article, and paired short passages for Reading; data representation, research
summaries, and conflicting viewpoints for Science (data are simulated for
practice and labeled as such).

## How to run it

Easiest: double-click `index.html`. It opens in any web browser. No internet,
install, or server needed.

Optional (if you prefer a local server): run `python3 -m http.server 8000`
in this folder, then open http://localhost:8000.

## How to use it

- **Sets 1 and 2 - Practice mode**: untimed, with instant feedback and an
  explanation after every question.
- **Set 3 - Timed mock test**: each section runs at its official question
  count and time limit. Answers are scored at the end, and you can flag
  questions to revisit. The percent correct is practice feedback, not an ACT
  scaled-score estimate.
- The results screen shows a per-category breakdown and a full review with
  explanations. Best scores are saved in the browser, separately for each
  set and mode.

Deep links: `index.html?section=math&set=3` starts a section directly.
Sets 1 and 2 are practice-only; Set 3 is timed-only.

## Official ACT resources

The home screen also links to ACT's own free PreACT 9 Secure materials:

- Preparing for PreACT 9 Secure (official guide):
  https://www.act.org/content/act/en/products-and-services/preact/resources/preparing-for-preact9-secure.html
- Official online practice test (free, no login, timed and untimed; choose
  "Practice Tests" below the sign-in box):
  https://tn.preact.actonline.act.org/client/index.html
- Official practice test scoring guide (answer keys and score tables):
  https://www.act.org/content/dam/act/secured/documents/PreACT-9-Secure-Practice-Test-Scoring-Guide.pdf

## Notes

All questions are original and were written to match the style and published
skill categories of the PreACT 9, but they are not calibrated against ACT's
equating data, so Set 3's difficulty is a reasoned approximation, not a
guaranteed match to the live exam. This site is not affiliated with ACT,
Inc., and no ACT questions or materials are copied here. For official
practice, use ACT's free online practice test and scoring key linked above
and on the home screen.

## Adding questions

Each section lives in `data/<section>.js` (Set 1), `data2/<section>.js`
(Set 2), and `data3/<section>.js` (Set 3). Copy an existing question block,
keep exactly 4 choices, set `answer` to the index (0-3) of the correct
choice, and write the explanation. Run `node validate.js` to check all three
sets, including the official section counts for Set 3.

## Deploy

`deploy_modal.py` serves this folder as a static site on Modal:
`pip install modal`, then `modal deploy deploy_modal.py`.
