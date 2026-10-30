// PreACT 9 style Math, Set 3 - original questions, 4 choices each.
// 34 questions matching the official Math section count (topics through early grade 10).
window.PREACT_DATA3 = window.PREACT_DATA3 || {};
window.PREACT_DATA3.math = {
  questions: [
    {
      id: "m3-1", category: "Number & Quantity",
      stem: "What is the value of 3/4 &divide; 2/3 + 1/2?",
      choices: ["13/8", "3/2", "9/8", "11/8"],
      answer: 0,
      explanation: "Divide first: 3/4 &divide; 2/3 = 3/4 &times; 3/2 = 9/8. Then add: 9/8 + 4/8 = 13/8."
    },
    {
      id: "m3-2", category: "Number & Quantity",
      stem: "Which of the following is equivalent to &#8731;(54x<sup>6</sup>)?",
      choices: ["18x<sup>2</sup>&#8731;3", "3x<sup>2</sup>&#8731;6", "3x<sup>2</sup>&#8731;2", "3x<sup>3</sup>&#8731;2"],
      answer: 2,
      explanation: "54 = 27 &times; 2, and &#8731;27 = 3, while &#8731;(x<sup>6</sup>) = x<sup>2</sup>. So &#8731;(54x<sup>6</sup>) = 3x<sup>2</sup>&#8731;2."
    },
    {
      id: "m3-3", category: "Algebra",
      stem: "If (x + 3)/4 = (x - 1)/2, what is the value of x?",
      choices: ["7", "9", "3", "5"],
      answer: 3,
      explanation: "Multiply both sides by 4: x + 3 = 2(x - 1) = 2x - 2. Solving gives x = 5. Check: (5 + 3)/4 = 2 and (5 - 1)/2 = 2."
    },
    {
      id: "m3-4", category: "Algebra",
      stem: "The system of equations 2x + 4y = 8 and x + 2y = k has infinitely many solutions. What is the value of k?",
      choices: ["8", "4", "2", "6"],
      answer: 1,
      explanation: "Infinitely many solutions means the equations describe the same line. Dividing the first equation by 2 gives x + 2y = 4, so k = 4."
    },
    {
      id: "m3-5", category: "Functions",
      stem: "If f(x) = 2x + 6, what is the value of x for which f(x) = 10?",
      choices: ["26", "8", "2", "7"],
      answer: 2,
      explanation: "Set 2x + 6 = 10, so 2x = 4 and x = 2. (26 is f(10) - the function evaluated at 10 instead of solved for it.)"
    },
    {
      id: "m3-6", category: "Algebra",
      stem: "What is the slope of the line that passes through the points (2, 5) and (6, 13)?",
      choices: ["2", "8", "1/2", "4"],
      answer: 0,
      explanation: "Slope = (13 - 5) / (6 - 2) = 8/4 = 2. Flipping the rise and run gives 1/2, and subtracting the coordinates the wrong way around does not change the result here."
    },
    {
      id: "m3-7", category: "Functions",
      stem: "Line l passes through the point (0, 4) and is parallel to the line y = 2x + 1. What is the equation of line l?",
      choices: ["y = 4x + 2", "y = 2x + 4", "y = 2x + 1", "y = -1/2 x + 4"],
      answer: 1,
      explanation: "Parallel lines share a slope, so line l has slope 2. The point (0, 4) is the y-intercept, giving y = 2x + 4. (-1/2 would be perpendicular, not parallel.)"
    },
    {
      id: "m3-8", category: "Algebra",
      stem: "Which of the following equations has the solutions x = 2 and x = -6?",
      choices: ["x<sup>2</sup> + 4x + 12 = 0", "x<sup>2</sup> - 4x + 12 = 0", "x<sup>2</sup> + 4x - 12 = 0", "x<sup>2</sup> - 4x - 12 = 0"],
      answer: 2,
      explanation: "Solutions 2 and -6 come from the factors (x - 2)(x + 6), which expand to x<sup>2</sup> + 4x - 12 = 0. Check: 4 + 8 - 12 = 0 and 36 - 24 - 12 = 0."
    },
    {
      id: "m3-9", category: "Number & Quantity",
      stem: "For all x, (2x<sup>3</sup>)<sup>2</sup> &middot; x is equivalent to:",
      choices: ["4x<sup>6</sup>", "2x<sup>7</sup>", "4x<sup>12</sup>", "4x<sup>7</sup>"],
      answer: 3,
      explanation: "Square first: (2x<sup>3</sup>)<sup>2</sup> = 4x<sup>6</sup>. Then multiply by x, adding exponents: 4x<sup>7</sup>."
    },
    {
      id: "m3-10", category: "Algebra",
      stem: "Which of the following inequalities is equivalent to -2x + 7 &lt; 15?",
      choices: ["x &lt; 4", "x &gt; -4", "x &gt; 4", "x &lt; -4"],
      answer: 1,
      explanation: "Subtract 7: -2x &lt; 8. Dividing by a negative number reverses the inequality: x &gt; -4."
    },
    {
      id: "m3-11", category: "Statistics & Probability",
      stem: "On a quiz, the 12 boys in a class averaged 80 points and the 8 girls averaged 90 points. What was the average score for the whole class?",
      choices: ["84", "85", "82", "86"],
      answer: 0,
      explanation: "Total points: 12 &times; 80 + 8 &times; 90 = 960 + 720 = 1,680. Divide by 20 students: 84. (85 is the plain average of 80 and 90, which ignores the different group sizes.)"
    },
    {
      id: "m3-12", category: "Statistics & Probability",
      stem: "What is the median of the numbers 3, 7, 8, 12, 15, 20?",
      choices: ["12", "8", "10", "11"],
      answer: 2,
      explanation: "With an even count, the median is the mean of the two middle values: (8 + 12) / 2 = 10. (The mean of all six numbers is 65/6, about 10.8, which rounds to 11 - close, but not the median.)"
    },
    {
      id: "m3-13", category: "Statistics & Probability",
      stem: "The table shows how many students chose each after-school activity.<br><br><table><tr><th>Activity</th><th>Students</th></tr><tr><td>Soccer</td><td>12</td></tr><tr><td>Band</td><td>9</td></tr><tr><td>Drama</td><td>6</td></tr><tr><td>Robotics</td><td>3</td></tr></table><br>If one of these students is chosen at random, what is the probability that the student chose drama?",
      choices: ["1/6", "1/4", "2/5", "1/5"],
      answer: 3,
      explanation: "There are 12 + 9 + 6 + 3 = 30 students, and 6 chose drama: 6/30 = 1/5."
    },
    {
      id: "m3-14", category: "Integrating Essential Skills",
      stem: "The table shows the outdoor temperature recorded at four times during a school day.<br><br><table><tr><th>Time</th><th>Temperature (deg C)</th></tr><tr><td>8:00 AM</td><td>12</td></tr><tr><td>10:00 AM</td><td>15</td></tr><tr><td>12:00 PM</td><td>21</td></tr><tr><td>2:00 PM</td><td>24</td></tr></table><br>During which interval did the temperature rise the fastest?",
      choices: ["10:00 AM to 12:00 PM", "8:00 to 10:00 AM", "12:00 to 2:00 PM", "It rose by the same amount in every interval"],
      answer: 0,
      explanation: "The rises are +3, +6, and +3 degrees over equal two-hour intervals, so the fastest rise is 10:00 AM to 12:00 PM."
    },
    {
      id: "m3-15", category: "Geometry",
      stem: "The measures of the three angles of a triangle are 2x, 3x, and 4x. What is the measure of the largest angle?",
      choices: ["60&deg;", "80&deg;", "20&deg;", "40&deg;"],
      answer: 1,
      explanation: "The angles sum to 180&deg;: 9x = 180, so x = 20. The largest angle is 4x = 80&deg;. (The other values are x, 2x, and 3x.)"
    },
    {
      id: "m3-16", category: "Geometry",
      stem: "Which of the following sets of side lengths could form a right triangle?",
      choices: ["9, 12, 16", "4, 5, 6", "5, 10, 12", "8, 15, 17"],
      answer: 3,
      explanation: "Check the Pythagorean theorem: 8<sup>2</sup> + 15<sup>2</sup> = 64 + 225 = 289 = 17<sup>2</sup>. The other sets fail (for 9, 12, 16: 81 + 144 = 225, but 16<sup>2</sup> = 256)."
    },
    {
      id: "m3-17", category: "Geometry",
      stem: "The length of a rectangle is twice its width. If the perimeter of the rectangle is 36, what is its area?",
      choices: ["48", "144", "72", "36"],
      answer: 2,
      explanation: "2(l + w) = 36 with l = 2w gives 6w = 36, so w = 6 and l = 12. The area is 12 &times; 6 = 72."
    },
    {
      id: "m3-18", category: "Geometry",
      stem: "A circle has a radius of 6. What is the area of a sector of the circle with a central angle of 60&deg;?",
      choices: ["2&pi;", "6&pi;", "12&pi;", "36&pi;"],
      answer: 1,
      explanation: "The sector is 60/360 = 1/6 of the circle. The circle's area is 36&pi;, so the sector's area is 36&pi; / 6 = 6&pi;."
    },
    {
      id: "m3-19", category: "Geometry",
      stem: "Triangle A has sides of length 6, 9, and 12. Triangle B is similar to triangle A, and its shortest side has length 10. What is the length of the longest side of triangle B?",
      choices: ["20", "12", "18", "15"],
      answer: 0,
      explanation: "The scale factor is 10/6 = 5/3. The longest side is 12 &times; 5/3 = 20. (15 is the scaled middle side, 9 &times; 5/3.)"
    },
    {
      id: "m3-20", category: "Geometry",
      stem: "Two parallel lines are cut by a transversal. One of the angles formed measures 65&deg;. What is the measure of an obtuse angle formed by the transversal?",
      choices: ["65&deg;", "105&deg;", "115&deg;", "125&deg;"],
      answer: 2,
      explanation: "Angles formed at one intersection are either equal to 65&deg; or supplementary to it. The obtuse angles measure 180&deg; - 65&deg; = 115&deg;."
    },
    {
      id: "m3-21", category: "Geometry",
      stem: "In right triangle ABC, the right angle is at C, the side opposite angle A has length 3, and the hypotenuse has length 5. What is sin A?",
      choices: ["4/5", "3/4", "5/3", "3/5"],
      answer: 3,
      explanation: "Sine is opposite over hypotenuse: 3/5. (4/5 is cos A, and 3/4 is tan A.)"
    },
    {
      id: "m3-22", category: "Geometry",
      stem: "A rectangular box measures 3 cm by 4 cm by 5 cm. What is its volume, in cubic centimeters?",
      choices: ["120", "60", "12", "47"],
      answer: 1,
      explanation: "Volume = length &times; width &times; height = 3 &times; 4 &times; 5 = 60. Adding the dimensions (12) is the common slip here."
    },
    {
      id: "m3-23", category: "Geometry",
      stem: "In the standard (x, y) coordinate plane, what is the midpoint of the segment with endpoints (2, 4) and (8, 10)?",
      choices: ["(5, 7)", "(6, 7)", "(10, 14)", "(3, 3)"],
      answer: 0,
      explanation: "Average the coordinates: ((2 + 8)/2, (4 + 10)/2) = (5, 7). Adding them instead of averaging gives (10, 14)."
    },
    {
      id: "m3-24", category: "Geometry",
      stem: "Point A has coordinates (3, -2). If point A is reflected over the y-axis, what are the coordinates of its image?",
      choices: ["(-3, -2)", "(3, 2)", "(-3, 2)", "(2, -3)"],
      answer: 0,
      explanation: "Reflecting over the y-axis flips the sign of the x-coordinate only: (3, -2) becomes (-3, -2)."
    },
    {
      id: "m3-25", category: "Integrating Essential Skills",
      stem: "A cyclist rides 10 miles at 20 miles per hour and then rides 10 more miles at 10 miles per hour. What is her average speed for the whole 20-mile trip?",
      choices: ["16 mph", "13 1/3 mph", "12 mph", "15 mph"],
      answer: 1,
      explanation: "Average speed is total distance over total time, not the average of the two speeds. The trip takes 10/20 + 10/10 = 1.5 hours, so the average speed is 20 / 1.5 = 13 1/3 mph."
    },
    {
      id: "m3-26", category: "Modeling",
      stem: "A club spends $50 on supplies plus $3 to make each candle, and sells each candle for $8. What is the smallest number of candles the club must sell to make a profit of at least $100?",
      choices: ["20", "25", "12", "30"],
      answer: 3,
      explanation: "Profit is 8c - (50 + 3c) = 5c - 50. Set 5c - 50 &ge; 100: 5c &ge; 150, so c &ge; 30. Check: 30 candles bring in 240 and cost 140, a profit of exactly $100."
    },
    {
      id: "m3-27", category: "Functions",
      stem: "An arithmetic sequence begins 5, 9, 13, 17, ... What is the 10th term of the sequence?",
      choices: ["45", "37", "41", "40"],
      answer: 2,
      explanation: "The common difference is 4. The 10th term is 5 + (10 - 1) &times; 4 = 5 + 36 = 41."
    },
    {
      id: "m3-28", category: "Number & Quantity",
      stem: "Which of the following expresses 0.00045 in scientific notation?",
      choices: ["4.5 &times; 10<sup>-4</sup>", "4.5 &times; 10<sup>-5</sup>", "4.5 &times; 10<sup>-3</sup>", "4.5 &times; 10<sup>4</sup>"],
      answer: 0,
      explanation: "Move the decimal point 4 places to the right to get 4.5, so the exponent is -4: 4.5 &times; 10<sup>-4</sup>."
    },
    {
      id: "m3-29", category: "Integrating Essential Skills",
      stem: "A town's population grew from 2,400 to 3,000 over ten years. What was the percent increase in the population?",
      choices: ["24%", "25%", "30%", "20%"],
      answer: 1,
      explanation: "The increase is 600 out of the original 2,400: 600/2400 = 0.25 = 25%. (Using the new population as the base gives 20% - the wrong denominator.)"
    },
    {
      id: "m3-30", category: "Integrating Essential Skills",
      stem: "The ratio of cats to dogs at a shelter is 4:3. After 6 cats are adopted (and no dogs), the ratio of cats to dogs becomes 1:1. How many dogs are at the shelter?",
      choices: ["24", "6", "18", "12"],
      answer: 2,
      explanation: "Let cats = 4k and dogs = 3k. After the adoptions, 4k - 6 = 3k, so k = 6 and the shelter has 3 &times; 6 = 18 dogs. Check: 24 cats minus 6 equals 18, matching the 18 dogs."
    },
    {
      id: "m3-31", category: "Number & Quantity",
      stem: "On a map, 1 centimeter represents 25 kilometers. If two cities are 7 centimeters apart on the map, what is the actual distance between them?",
      choices: ["150 km", "100 km", "125 km", "175 km"],
      answer: 3,
      explanation: "Multiply: 7 &times; 25 = 175 km."
    },
    {
      id: "m3-32", category: "Functions",
      stem: "Which of the following equations represents a line with a slope of -3 and a y-intercept of 2?",
      choices: ["y = -3x + 2", "y = 3x - 2", "y = -2x + 3", "y = 2x - 3"],
      answer: 0,
      explanation: "In slope-intercept form y = mx + b, the slope is m = -3 and the y-intercept is b = 2, giving y = -3x + 2."
    },
    {
      id: "m3-33", category: "Algebra",
      stem: "What is the largest value of x that satisfies |x - 3| = 5?",
      choices: ["-2", "2", "8", "-8"],
      answer: 2,
      explanation: "The equation gives x - 3 = 5 or x - 3 = -5, so x = 8 or x = -2. The largest solution is 8."
    },
    {
      id: "m3-34", category: "Algebra",
      stem: "A school play sold 30 tickets for a total of $186. Adult tickets cost $8 and student tickets cost $5. How many adult tickets were sold?",
      choices: ["18", "12", "15", "10"],
      answer: 1,
      explanation: "Let a be adult tickets: 8a + 5(30 - a) = 186, so 3a + 150 = 186 and a = 12. Check: 12 &times; 8 + 18 &times; 5 = 96 + 90 = 186."
    }
  ]
};
