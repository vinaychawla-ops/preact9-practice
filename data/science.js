// PreACT 9 style Science - original passages and questions, 4 choices each.
window.PREACT_DATA = window.PREACT_DATA || {};
window.PREACT_DATA.science = {
  passages: [
    {
      id: "sci-p1",
      kicker: "Data Representation",
      title: "The Pendulum Study",
      body: [
        "A student investigated what affects the period of a pendulum - the time it takes to swing out and back to its starting point. She built a pendulum from a string and a metal bob, released it from the same angle (15 degrees) each time, and used a stopwatch to time 10 full swings. She divided by 10 to find the period, and repeated each measurement 3 times to compute an average.",
        "She tested three string lengths (measured from the support to the center of the bob) and two bob masses. All trials used the same string, the same release angle, and the same room. Her results are shown in Table 1."
      ],
      table: {
        caption: "Table 1: Average period (seconds)",
        header: ["String length (m)", "100 g bob", "200 g bob"],
        rows: [
          ["0.25", "1.0", "1.0"],
          ["0.50", "1.4", "1.4"],
          ["1.00", "2.0", "2.0"]
        ]
      },
      afterTable: [
        "The student concluded that string length affects the period of a pendulum, but bob mass does not."
      ],
      questions: [
        {
          id: "s1", category: "Interpretation of Data",
          stem: "According to Table 1, what was the average period of the pendulum with a string length of 0.50 m and a 100 g bob?",
          choices: ["1.0 s", "1.4 s", "2.0 s", "2.8 s"],
          answer: 1,
          explanation: "Read across the 0.50 m row to the 100 g bob column: the average period is 1.4 s."
        },
        {
          id: "s2", category: "Interpretation of Data",
          stem: "For a 100 g bob, as string length increased from 0.25 m to 1.00 m, the period:",
          choices: ["increased only.", "decreased only.", "increased, then decreased.", "remained the same."],
          answer: 0,
          explanation: "The periods for the 100 g bob are 1.0 s, 1.4 s, and 2.0 s - they rise steadily as length increases."
        },
        {
          id: "s3", category: "Interpretation of Data",
          stem: "Based on Table 1, doubling the bob mass from 100 g to 200 g at any given string length caused the period to:",
          choices: ["double.", "decrease by half.", "increase slightly.", "stay the same."],
          answer: 3,
          explanation: "In every row, the 100 g and 200 g columns are identical, so changing the bob mass did not change the period."
        },
        {
          id: "s4", category: "Interpretation of Data",
          stem: "When string length was multiplied by 4 (from 0.25 m to 1.00 m), the period multiplied by about 2. If this pattern continues, the period at a string length of 2.00 m would be closest to:",
          choices: ["2.4 s", "2.8 s", "3.2 s", "4.0 s"],
          answer: 1,
          explanation: "The pattern is that multiplying length by 4 multiplies the period by 2. From 0.50 m to 2.00 m the length again multiplies by 4, so the period should roughly double: 1.4 x 2 = 2.8 s."
        },
        {
          id: "s5", category: "Scientific Investigation",
          stem: "In this study, the independent variables (the ones the student changed on purpose) were:",
          choices: ["the period and the release angle.", "the string length and the bob mass.", "the period and the number of swings.", "the release angle and the room temperature."],
          answer: 1,
          explanation: "She deliberately varied string length (3 values) and bob mass (2 values). The period is what she measured - the dependent variable."
        },
        {
          id: "s6", category: "Scientific Investigation",
          stem: "Why did the student time 10 swings and divide by 10 instead of timing a single swing?",
          choices: ["To make the pendulum swing faster.", "To reduce the effect of stopwatch timing error on the measured period.", "To test more string lengths at once.", "To keep the release angle at exactly 15 degrees."],
          answer: 1,
          explanation: "Reaction-time error on a stopwatch is hard to avoid, but spreading it over 10 swings makes the error per swing much smaller, giving a more accurate period."
        },
        {
          id: "s7", category: "Scientific Investigation",
          stem: "To test whether the release angle affects the period, the student should repeat the experiment while keeping string length and bob mass constant and changing only:",
          choices: ["the string material.", "the bob's color.", "the release angle.", "the number of swings timed."],
          answer: 2,
          explanation: "A fair test changes only the variable being studied - here the release angle - while holding everything else constant."
        }
      ]
    },
    {
      id: "sci-p2",
      kicker: "Research Summaries",
      title: "Light and Seedling Growth",
      body: [
        "A biology class studied how light affects the growth of bean seedlings. All seedlings started at the same height, were planted in identical pots with the same soil, received 30 mL of water per day, and were kept at 22 degrees C. Average height was measured after 3 weeks.",
        "<b>Experiment 1</b>: Four groups of 10 seedlings were grown under lamps of equal brightness but different colors - red, blue, green, or white - for 12 hours per day. Average heights: red light 14 cm, blue light 16 cm, green light 6 cm, white light 15 cm.",
        "<b>Experiment 2</b>: Three new groups of 10 seedlings were grown under white lamps for different amounts of time each day - 8, 12, or 16 hours - with equal brightness. Average heights: 8 hours 10 cm, 12 hours 15 cm, 16 hours 19 cm."
      ],
      questions: [
        {
          id: "s8", category: "Scientific Investigation",
          stem: "The independent variable in Experiment 1 was:",
          choices: ["the average height of the seedlings.", "the color of the light.", "the number of hours of light per day.", "the amount of water per day."],
          answer: 1,
          explanation: "Experiment 1 deliberately changed only the light color; everything else, including the 12 hours per day, stayed the same."
        },
        {
          id: "s9", category: "Scientific Investigation",
          stem: "The dependent variable in both experiments was:",
          choices: ["the brightness of the lamps.", "the type of soil.", "the average height of the seedlings.", "the color of the light."],
          answer: 2,
          explanation: "The dependent variable is what is measured in response: average seedling height after 3 weeks."
        },
        {
          id: "s10", category: "Evaluation of Models & Conclusions",
          stem: "Which conclusion is best supported by Experiment 1 alone?",
          choices: ["Seedlings cannot grow in green light.", "Of the colors tested, green light produced the least growth.", "Blue light is required for seedlings to survive.", "White light always produces the tallest plants."],
          answer: 1,
          explanation: "The green-light group averaged only 6 cm, well below the others. The stronger claims go too far: seedlings did grow in green light, and blue and white were similar."
        },
        {
          id: "s11", category: "Interpretation of Data",
          stem: "Based on Experiment 2, as daily light exposure increased from 8 to 16 hours, average seedling height:",
          choices: ["decreased.", "increased.", "stayed the same.", "increased, then decreased."],
          answer: 1,
          explanation: "Heights rose from 10 cm (8 h) to 15 cm (12 h) to 19 cm (16 h)."
        },
        {
          id: "s12", category: "Evaluation of Models & Conclusions",
          stem: "Combining both experiments, which prediction is most reasonable?",
          choices: ["Seedlings under red light for 16 h/day would likely average more than 14 cm.", "Seedlings under green light for 16 h/day would likely average more than 19 cm.", "Seedlings under blue light for 8 h/day would likely average more than 16 cm.", "Adding more hours of light always doubles plant height."],
          answer: 0,
          explanation: "Red light at 12 h/day gave 14 cm, and Experiment 2 shows more hours of light increase height, so red light at 16 h/day should exceed 14 cm. Green light was the weakest even with more hours it would not likely beat white."
        },
        {
          id: "s13", category: "Scientific Investigation",
          stem: "In Experiment 1, which factor was held constant across all four groups?",
          choices: ["Light color", "Hours of light per day", "Final average height", "Number of experiments"],
          answer: 1,
          explanation: "All groups received 12 hours of light per day at equal brightness. Light color was the variable being changed."
        },
        {
          id: "s14", category: "Evaluation of Models & Conclusions",
          stem: "Which change would most improve confidence in the results of Experiment 1?",
          choices: ["Using 1 seedling per group instead of 10.", "Repeating the experiment and comparing the results across trials.", "Watering the green-light group more often.", "Measuring height after 1 week instead of 3."],
          answer: 1,
          explanation: "Repeating the experiment shows whether the pattern is consistent rather than a one-time accident. Fewer plants per group or uneven watering would weaken the design."
        }
      ]
    }
  ]
};
