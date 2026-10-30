// PreACT 9 style Math - original questions, 4 choices each.
window.PREACT_DATA = window.PREACT_DATA || {};
window.PREACT_DATA.math = {
  questions: [
    {
      id: "m1", category: "Number & Quantity",
      stem: "Which of the following is equivalent to 27<sup>2/3</sup>?",
      choices: ["3", "9", "18", "81"],
      answer: 1,
      explanation: "Rewrite as (27<sup>1/3</sup>)<sup>2</sup>. The cube root of 27 is 3, and 3<sup>2</sup> = 9."
    },
    {
      id: "m2", category: "Number & Quantity",
      stem: "The expression 3&radic;50 + 2&radic;8 simplifies to which of the following?",
      choices: ["5&radic;58", "6&radic;10", "19&radic;2", "29&radic;2"],
      answer: 2,
      explanation: "&radic;50 = 5&radic;2 and &radic;8 = 2&radic;2, so the expression is 15&radic;2 + 4&radic;2 = 19&radic;2."
    },
    {
      id: "m3", category: "Algebra",
      stem: "If 3(x - 4) = 2(x + 1), what is the value of x?",
      choices: ["10", "12", "14", "16"],
      answer: 2,
      explanation: "Distribute: 3x - 12 = 2x + 2. Subtract 2x and add 12: x = 14."
    },
    {
      id: "m4", category: "Algebra",
      stem: "If 2x + 3y = 12 and x - y = 1, what is the value of x + y?",
      choices: ["3", "4", "5", "6"],
      answer: 2,
      explanation: "From the second equation, x = y + 1. Substitute: 2(y + 1) + 3y = 12, so 5y = 10 and y = 2. Then x = 3, so x + y = 5."
    },
    {
      id: "m5", category: "Algebra",
      stem: "What is the sum of the two solutions of x<sup>2</sup> - 5x - 24 = 0?",
      choices: ["-5", "-3", "5", "8"],
      answer: 2,
      explanation: "Factor: (x - 8)(x + 3) = 0, so the solutions are 8 and -3. Their sum is 5. (Quick check: for x<sup>2</sup> + bx + c, the solutions sum to -b.)"
    },
    {
      id: "m6", category: "Algebra",
      stem: "A line in the coordinate plane has slope 3 and passes through the point (2, 5). What is the equation of the line?",
      choices: ["y = 3x + 5", "y = 3x - 1", "y = 5x + 3", "y = 2x + 5"],
      answer: 1,
      explanation: "Use y = 3x + b and plug in (2, 5): 5 = 6 + b, so b = -1. The equation is y = 3x - 1."
    },
    {
      id: "m7", category: "Functions",
      stem: "If f(x) = 2x<sup>2</sup> - 3x + 1, what is f(-2)?",
      choices: ["3", "11", "15", "23"],
      answer: 2,
      explanation: "f(-2) = 2(-2)<sup>2</sup> - 3(-2) + 1 = 2(4) + 6 + 1 = 15."
    },
    {
      id: "m8", category: "Functions",
      stem: "A bacteria population starts at 500 and doubles every 3 hours. How many bacteria will there be after 12 hours?",
      choices: ["2,000", "4,000", "6,000", "8,000"],
      answer: 3,
      explanation: "12 hours is 4 doubling periods, so the population is 500 x 2<sup>4</sup> = 500 x 16 = 8,000."
    },
    {
      id: "m9", category: "Functions",
      stem: "What is the domain of the function f(x) = &radic;(x - 3), where x is a real number?",
      choices: ["All real numbers", "x &ge; 0", "x &ge; 3", "x &gt; 3"],
      answer: 2,
      explanation: "The expression under a square root cannot be negative, so x - 3 &ge; 0, which gives x &ge; 3."
    },
    {
      id: "m10", category: "Functions",
      stem: "Let f(x) = x + 2 when x &lt; 0, and f(x) = x<sup>2</sup> when x &ge; 0. What is f(-3) + f(3)?",
      choices: ["4", "8", "10", "12"],
      answer: 1,
      explanation: "f(-3) = -3 + 2 = -1 (use the first rule), and f(3) = 3<sup>2</sup> = 9 (use the second rule). Their sum is 8."
    },
    {
      id: "m11", category: "Geometry",
      stem: "A right triangle has legs of length 5 and 12. What is the length of the hypotenuse?",
      choices: ["13", "15", "17", "&radic;119"],
      answer: 0,
      explanation: "By the Pythagorean theorem, c = &radic;(25 + 144) = &radic;169 = 13."
    },
    {
      id: "m12", category: "Geometry",
      stem: "A triangle with side lengths 3, 4, and 5 is enlarged by a scale factor of 3. What is the perimeter of the enlarged triangle?",
      choices: ["12", "24", "36", "45"],
      answer: 2,
      explanation: "The original perimeter is 3 + 4 + 5 = 12. Scaling by 3 multiplies every side by 3, so the new perimeter is 36."
    },
    {
      id: "m13", category: "Geometry",
      stem: "A circle has an area of 25&pi; square units. What is its circumference?",
      choices: ["5&pi;", "10&pi;", "20&pi;", "25&pi;"],
      answer: 1,
      explanation: "Area = &pi;r<sup>2</sup> = 25&pi;, so r = 5. Circumference = 2&pi;r = 10&pi;."
    },
    {
      id: "m14", category: "Statistics & Probability",
      stem: "What is the mean of the five numbers 4, 8, 9, 12, and 17?",
      choices: ["9", "9.5", "10", "12"],
      answer: 2,
      explanation: "The sum is 4 + 8 + 9 + 12 + 17 = 50, and 50 &divide; 5 = 10. (The median is 9 - a common mix-up.)"
    },
    {
      id: "m15", category: "Statistics & Probability",
      stem: "A bag holds 3 red marbles and 5 blue marbles. One marble is drawn at random and not replaced; then a second marble is drawn. What is the probability that the first is red and the second is blue?",
      choices: ["15/64", "15/56", "8/15", "1/2"],
      answer: 1,
      explanation: "P(red first) = 3/8. With 7 marbles left, P(blue second) = 5/7. Multiply: (3/8)(5/7) = 15/56."
    },
    {
      id: "m16", category: "Statistics & Probability",
      stem: "A fair six-sided die is rolled once. What is the probability of rolling a number greater than 4?",
      choices: ["1/6", "1/3", "1/2", "2/3"],
      answer: 1,
      explanation: "Two outcomes (5 and 6) out of six are greater than 4, so the probability is 2/6 = 1/3."
    },
    {
      id: "m17", category: "Integrating Essential Skills",
      stem: "A jacket costs $80. Its price is increased by 25%, and the new price is then decreased by 20%. What is the final price?",
      choices: ["$76", "$80", "$84", "$100"],
      answer: 1,
      explanation: "After the increase: 80 x 1.25 = $100. After the decrease: 100 x 0.80 = $80. The 25% and 20% do not simply cancel, because they apply to different amounts."
    },
    {
      id: "m18", category: "Integrating Essential Skills",
      stem: "A car travels 150 miles in 2.5 hours at a constant speed. At the same speed, how far will it travel in 4 hours?",
      choices: ["200 miles", "220 miles", "240 miles", "300 miles"],
      answer: 2,
      explanation: "Speed = 150 &divide; 2.5 = 60 miles per hour. In 4 hours: 60 x 4 = 240 miles."
    },
    {
      id: "m19", category: "Integrating Essential Skills",
      stem: "A trail mix combines raisins and peanuts in the ratio 2:3. How many cups of peanuts are in 30 cups of the mix?",
      choices: ["10", "12", "15", "18"],
      answer: 3,
      explanation: "Peanuts are 3 of every 5 parts, so (3/5) x 30 = 18 cups."
    },
    {
      id: "m20", category: "Modeling",
      stem: "A taxi charges a $3.00 pickup fee plus $2.50 per mile. A ride costs $15.50 total. Which equation models this, and how many miles (m) was the ride?",
      choices: ["3 + 2.50m = 15.50; 4 miles", "3 + 2.50m = 15.50; 5 miles", "2.50 + 3m = 15.50; 5 miles", "3m + 2.50 = 15.50; 6 miles"],
      answer: 1,
      explanation: "The cost is 3 + 2.50m. Setting 3 + 2.50m = 15.50 gives 2.50m = 12.50, so m = 5 miles."
    }
  ]
};
