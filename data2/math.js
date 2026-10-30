// PreACT 9 style Math, Set 2 - original questions, 4 choices each.
window.PREACT_DATA2 = window.PREACT_DATA2 || {};
window.PREACT_DATA2.math = {
  questions: [
    {
      id: "m2-1", category: "Number & Quantity",
      stem: "Which of the following is equivalent to 5<sup>-2</sup> x 5<sup>5</sup>?",
      choices: ["1/125", "25", "125", "625"],
      answer: 2,
      explanation: "Multiplying powers of the same base adds the exponents: -2 + 5 = 3, so the expression is 5<sup>3</sup> = 125."
    },
    {
      id: "m2-2", category: "Number & Quantity",
      stem: "Which of the following numbers is the largest?",
      choices: ["3&radic;5", "5&radic;2", "7", "2&radic;10"],
      answer: 1,
      explanation: "Square each choice: (3&radic;5)<sup>2</sup> = 45, (5&radic;2)<sup>2</sup> = 50, 7<sup>2</sup> = 49, (2&radic;10)<sup>2</sup> = 40. The largest square is 50, so 5&radic;2 is the largest."
    },
    {
      id: "m2-3", category: "Algebra",
      stem: "The area of a trapezoid is A = h(b<sub>1</sub> + b<sub>2</sub>) / 2. Which expression gives h in terms of A, b<sub>1</sub>, and b<sub>2</sub>?",
      choices: ["h = 2A(b<sub>1</sub> + b<sub>2</sub>)", "h = A(b<sub>1</sub> + b<sub>2</sub>) / 2", "h = A / (2(b<sub>1</sub> + b<sub>2</sub>))", "h = 2A / (b<sub>1</sub> + b<sub>2</sub>)"],
      answer: 3,
      explanation: "Multiply both sides by 2 to get 2A = h(b<sub>1</sub> + b<sub>2</sub>), then divide both sides by (b<sub>1</sub> + b<sub>2</sub>): h = 2A / (b<sub>1</sub> + b<sub>2</sub>)."
    },
    {
      id: "m2-4", category: "Algebra",
      stem: "At a snack stand, 2 pretzels and 1 drink cost $7.00, while 1 pretzel and 2 drinks cost $8.00. What is the cost of one pretzel?",
      choices: ["$1.50", "$2.00", "$2.50", "$3.00"],
      answer: 1,
      explanation: "Let p = pretzel, d = drink: 2p + d = 7 and p + 2d = 8. From the first, d = 7 - 2p. Substitute: p + 2(7 - 2p) = 8, so p + 14 - 4p = 8, giving -3p = -6 and p = $2.00. Check: 2(2) + 3 = 7 and 2 + 2(3) = 8."
    },
    {
      id: "m2-5", category: "Algebra",
      stem: "What is the smallest integer that satisfies 4x - 3 > 9?",
      choices: ["4", "5", "6", "7"],
      answer: 0,
      explanation: "Add 3 to both sides: 4x > 12, so x > 3. Every integer listed above 3 works, but the smallest is 4. (Note x = 3 itself is not allowed, since 3 is not greater than 3.)"
    },
    {
      id: "m2-6", category: "Algebra",
      stem: "Which of the following is a solution of 2x<sup>2</sup> + 7x = 15?",
      choices: ["-5/2", "3/2", "5/2", "3"],
      answer: 1,
      explanation: "Rewrite as 2x<sup>2</sup> + 7x - 15 = 0 and factor: (2x - 3)(x + 5) = 0, so x = 3/2 or x = -5. Only 3/2 is listed. Check: 2(9/4) + 7(3/2) = 4.5 + 10.5 = 15."
    },
    {
      id: "m2-7", category: "Functions",
      stem: "If f(x) = 3x - 1 and g(x) = x<sup>2</sup>, what is f(g(2))?",
      choices: ["11", "23", "25", "35"],
      answer: 0,
      explanation: "Work from the inside out: g(2) = 4, then f(4) = 3(4) - 1 = 11. (The trap answer 25 is g(f(2)) - the composition in the wrong order.)"
    },
    {
      id: "m2-8", category: "Functions",
      stem: "A linear function satisfies f(1) = 7 and f(4) = 19. What is f(6)?",
      choices: ["23", "24", "27", "31"],
      answer: 2,
      explanation: "The slope is (19 - 7) &divide; (4 - 1) = 12 &divide; 3 = 4. So f(x) = 4x + b; using f(1) = 7 gives b = 3, and f(x) = 4x + 3. Then f(6) = 24 + 3 = 27."
    },
    {
      id: "m2-9", category: "Functions",
      stem: "A function produces these values: f(0) = 5, f(1) = 15, f(2) = 45, f(3) = 135. Which equation could define f(x)?",
      choices: ["f(x) = 5 + 10x", "f(x) = 3 x 5<sup>x</sup>", "f(x) = 5 x 3<sup>x</sup>", "f(x) = 5<sup>x</sup> + 3"],
      answer: 2,
      explanation: "Each value is 3 times the one before, so the function is exponential with growth factor 3 and starting value 5: f(x) = 5 x 3<sup>x</sup>. The linear choice matches f(0) and f(1) but gives f(2) = 25, not 45."
    },
    {
      id: "m2-10", category: "Functions",
      stem: "What is the minimum value of the function f(x) = x<sup>2</sup> - 6x + 5?",
      choices: ["-4", "3", "5", "8"],
      answer: 0,
      explanation: "The parabola opens upward, so its minimum is at the vertex, x = 6 &divide; 2 = 3. Then f(3) = 9 - 18 + 5 = -4. (The value 3 is the x-coordinate of the vertex, not the minimum value.)"
    },
    {
      id: "m2-11", category: "Geometry",
      stem: "A 15-foot ladder leans against a wall, with its base 9 feet from the wall. How high up the wall does the ladder reach?",
      choices: ["6 feet", "10 feet", "12 feet", "18 feet"],
      answer: 2,
      explanation: "The ladder is the hypotenuse: height = &radic;(15<sup>2</sup> - 9<sup>2</sup>) = &radic;(225 - 81) = &radic;144 = 12 feet. (The trap answer 6 comes from subtracting 15 - 9 instead of using the Pythagorean theorem.)"
    },
    {
      id: "m2-12", category: "Geometry",
      stem: "A 5-foot-tall pole casts an 8-foot shadow. At the same time of day, a nearby tree casts a 24-foot shadow. How tall is the tree?",
      choices: ["8 feet", "12 feet", "13.5 feet", "15 feet"],
      answer: 3,
      explanation: "At the same time of day the triangles are similar, so heights and shadows share the same ratio. The tree's shadow is 24 &divide; 8 = 3 times the pole's shadow, so the tree is 5 x 3 = 15 feet tall."
    },
    {
      id: "m2-13", category: "Geometry",
      stem: "In the coordinate plane, what is the distance between the points (1, 2) and (4, 6)?",
      choices: ["3", "4", "5", "7"],
      answer: 2,
      explanation: "Use the distance formula: &radic;((4 - 1)<sup>2</sup> + (6 - 2)<sup>2</sup>) = &radic;(9 + 16) = &radic;25 = 5. (The values 3 and 4 are the horizontal and vertical distances, not the distance itself.)"
    },
    {
      id: "m2-14", category: "Statistics & Probability",
      stem: "Maya's five quiz scores are 70, 75, 80, 85, and 100. The mean of her scores is how many points greater than the median?",
      choices: ["0", "2", "5", "10"],
      answer: 1,
      explanation: "The mean is (70 + 75 + 80 + 85 + 100) &divide; 5 = 410 &divide; 5 = 82. The median (middle value) is 80. The difference is 82 - 80 = 2."
    },
    {
      id: "m2-15", category: "Statistics & Probability",
      stem: "A fair coin is flipped and a fair six-sided die is rolled. What is the probability of getting heads and rolling a 6?",
      choices: ["1/36", "1/24", "1/16", "1/12"],
      answer: 3,
      explanation: "The events are independent, so multiply: P(heads) x P(6) = (1/2) x (1/6) = 1/12."
    },
    {
      id: "m2-16", category: "Integrating Essential Skills",
      stem: "After a 15% discount, a jacket costs $51. What was the original price?",
      choices: ["$43.35", "$58.65", "$60.00", "$66.15"],
      answer: 2,
      explanation: "The sale price is 85% of the original: 0.85p = 51, so p = 51 &divide; 0.85 = $60. Check: 15% of $60 is $9, and 60 - 9 = 51. (The trap $58.65 adds 15% to the sale price instead of reversing it.)"
    },
    {
      id: "m2-17", category: "Integrating Essential Skills",
      stem: "One printer prints 24 pages per minute and a second prints 36 pages per minute. Working together, how many minutes do they need to print 900 pages?",
      choices: ["15", "25", "37.5", "60"],
      answer: 0,
      explanation: "Together they print 24 + 36 = 60 pages per minute, so 900 &divide; 60 = 15 minutes. (25 and 37.5 are the times for each printer alone.)"
    },
    {
      id: "m2-18", category: "Integrating Essential Skills",
      stem: "The average of five numbers is 12. Four of the numbers add up to 38. What is the fifth number?",
      choices: ["10", "22", "26", "38"],
      answer: 1,
      explanation: "If the average of five numbers is 12, their total is 5 x 12 = 60. The fifth number is 60 - 38 = 22."
    },
    {
      id: "m2-19", category: "Integrating Essential Skills",
      stem: "The sum of three consecutive integers is 51. What is the largest of the three integers?",
      choices: ["15", "16", "17", "18"],
      answer: 3,
      explanation: "Let the integers be n, n + 1, and n + 2. Then 3n + 3 = 51, so n = 16. The largest is n + 2 = 18. Check: 16 + 17 + 18 = 51. (16 and 17 are the two smaller integers.)"
    },
    {
      id: "m2-20", category: "Modeling",
      stem: "Plan A costs $20 per month plus $0.10 per text. Plan B costs $35 per month with unlimited texts. For how many texts in a month do the two plans cost the same?",
      choices: ["100", "150", "200", "350"],
      answer: 1,
      explanation: "Set the costs equal: 20 + 0.10t = 35, so 0.10t = 15 and t = 150 texts. Check: Plan A at 150 texts is 20 + 15 = $35, the same as Plan B."
    }
  ]
};
