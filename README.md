# PreACT 9 Practice

A small, offline practice site for the PreACT 9 Secure test. 132 original
questions in two sets of 66 across the four sections, in the official format
(4 answer choices, no penalty for guessing). Use the Set 1 / Set 2 switch on
the home screen; best timed scores are saved per set.

Each set has:

- English: 16 questions (2 essays, revise-and-edit style with "NO CHANGE")
- Math: 20 questions (through early grade 10 topics)
- Reading: 16 questions (Set 1: literary narrative + informational article;
  Set 2: literary narrative + two short paired passages)
- Science: 14 questions (Set 1: data table + two experiments; Set 2: data
  table + conflicting viewpoints)

## How to run it

Easiest: double-click `index.html`. It opens in any web browser. No internet,
install, or server needed.

Optional (if you prefer a local server): run `python3 -m http.server 8000`
in this folder, then open http://localhost:8000.

## How to use it

- **Practice mode**: untimed, with instant feedback and an explanation after
  every question.
- **Timed set mode**: a shortened practice set with a countdown at the real
  PreACT 9 pacing (English 44q/35m, Math 34q/45m, Reading 33q/40m, Science
  32q/35m, scaled to the number of questions here). Answers are scored at the
  end, and you can flag questions to revisit. This is not a full-length test,
  and the percent correct is practice feedback, not an ACT scaled-score
  estimate.
- The results screen shows a per-category breakdown and a full review with
  explanations. Best timed scores are saved in the browser, separately for
  each set.

Deep links: `index.html?section=math&mode=timed` starts a section directly.
Add `&set=2` for the second question set.

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

All questions are original and were written to match the style and difficulty
of the PreACT 9. This site is not affiliated with ACT, Inc., and no ACT
questions or materials are copied here. For official practice, use ACT's free
online practice test and scoring key linked above and on the home screen.

## Adding questions

Each section lives in `data/<section>.js` (Set 1) and `data2/<section>.js`
(Set 2). Copy an existing question block, keep exactly 4 choices, set
`answer` to the index (0-3) of the correct choice, and write the explanation.
Run `node validate.js` to check both sets.

## Deploy

`deploy_modal.py` serves this folder as a static site on Modal:
`pip install modal`, then `modal deploy deploy_modal.py`.
