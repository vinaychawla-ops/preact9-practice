// PreACT 9 style Science, Set 3 - original passages and questions, 4 choices each.
// 32 questions matching the official Science section count. Data are simulated for practice.
window.PREACT_DATA3 = window.PREACT_DATA3 || {};
window.PREACT_DATA3.science = {
  passages: [
    {
      id: "sci3-p1",
      kicker: "Data Representation",
      title: "Which Cup Keeps Water Hot?",
      body: [
        "A class investigated how the material of a cup affects how quickly hot water cools. Students poured 200 mL of water at 90 deg C into identical cups made of four materials - metal, glass, plastic, and foam - and measured the water temperature every 2 minutes for 10 minutes. The room temperature was 22 deg C. Each test was repeated three times, and the average temperatures (simulated for this practice set) are shown in Table 1."
      ],
      table: {
        caption: "Table 1: Average water temperature (deg C) over time for each cup material (simulated data)",
        header: ["Time (min)", "Metal", "Glass", "Plastic", "Foam"],
        rows: [
          ["0", "90", "90", "90", "90"],
          ["2", "74", "78", "82", "85"],
          ["4", "62", "68", "74", "80"],
          ["6", "52", "60", "68", "76"],
          ["8", "45", "54", "63", "72"],
          ["10", "39", "49", "59", "69"]
        ]
      },
      afterTable: [
        "The students noted that every cup cooled quickly at first and then more slowly as the water temperature approached room temperature."
      ],
      questions: [
        {
          id: "s3-1", category: "Interpretation of Data",
          stem: "According to Table 1, what was the water temperature in the glass cup after 6 minutes?",
          choices: ["52 deg C", "60 deg C", "68 deg C", "76 deg C"],
          answer: 1,
          explanation: "Find the 6-minute row and read across to the Glass column: 60 deg C."
        },
        {
          id: "s3-2", category: "Interpretation of Data",
          stem: "After 10 minutes, which cup had lost the most heat compared with its starting temperature?",
          choices: ["Metal", "Glass", "Plastic", "Foam"],
          answer: 0,
          explanation: "All cups started at 90 deg C. After 10 minutes the metal cup was at 39 deg C - a drop of 51 degrees, larger than glass (41), plastic (31), or foam (21)."
        },
        {
          id: "s3-3", category: "Interpretation of Data",
          stem: "Based on the data, which material is the best insulator?",
          choices: ["Metal", "Glass", "Plastic", "Foam"],
          answer: 3,
          explanation: "An insulator slows heat loss. The foam cup kept the water warmest at every measurement after time 0, so foam is the best insulator of the four."
        },
        {
          id: "s3-4", category: "Interpretation of Data",
          stem: "Between minutes 8 and 10, the water in the plastic cup cooled by about:",
          choices: ["2 degrees", "4 degrees", "6 degrees", "8 degrees"],
          answer: 1,
          explanation: "The plastic cup went from 63 deg C at 8 minutes to 59 deg C at 10 minutes: 63 - 59 = 4 degrees."
        },
        {
          id: "s3-5", category: "Evaluation of Models & Conclusions",
          stem: "If the experiment were continued, the temperature of the water in the metal cup at 12 minutes would most likely be:",
          choices: ["exactly 39 deg C, unchanged", "below 22 deg C", "back above 45 deg C", "below 39 deg C, moving closer to 22 deg C"],
          answer: 3,
          explanation: "Every cup kept cooling toward room temperature (22 deg C), with the cooling slowing as the gap closed. The metal cup would keep falling from 39 toward 22, but cannot cool below room temperature without a refrigerator."
        },
        {
          id: "s3-6", category: "Scientific Investigation",
          stem: "To make the comparison between cup materials fair, the students should keep which of the following the same for all four cups?",
          choices: ["Only the final temperature", "The starting water temperature, the volume of water, and the room temperature", "The cup material", "The time of day the test is run"],
          answer: 1,
          explanation: "Starting temperature, water volume, and room temperature all affect cooling, so they must be controlled. The cup material is the variable being changed, and the final temperature is what is being measured."
        }
      ]
    },
    {
      id: "sci3-p2",
      kicker: "Data Representation",
      title: "Rain and Temperature in Two Cities",
      body: [
        "A geography class compared the climates of two cities at the same latitude. City A sits on the ocean coast; City B is far inland. The class recorded average temperature and total rainfall for January, April, July, and October (simulated for this practice set), as shown in Table 2."
      ],
      table: {
        caption: "Table 2: Average temperature and rainfall by month for two cities (simulated data)",
        header: ["Month", "City A temperature (deg C)", "City A rainfall (mm)", "City B temperature (deg C)", "City B rainfall (mm)"],
        rows: [
          ["January", "8", "110", "2", "40"],
          ["April", "14", "60", "15", "55"],
          ["July", "22", "15", "29", "60"],
          ["October", "16", "85", "14", "45"]
        ]
      },
      afterTable: [
        "The class knew that large bodies of water heat up and cool down more slowly than land does."
      ],
      questions: [
        {
          id: "s3-7", category: "Interpretation of Data",
          stem: "In which month did City A receive the most rainfall?",
          choices: ["January", "April", "July", "October"],
          answer: 0,
          explanation: "City A's rainfall values are 110, 60, 15, and 85 mm. The largest is 110 mm in January."
        },
        {
          id: "s3-8", category: "Interpretation of Data",
          stem: "Which city had the greater range of average temperatures across the four months shown?",
          choices: ["City A, with a range of 14 degrees", "City B, with a range of 27 degrees", "Both cities had the same range", "City A, with a range of 95 degrees"],
          answer: 1,
          explanation: "City A ranges from 8 to 22 deg C (14 degrees); City B ranges from 2 to 29 deg C (27 degrees). City B's range is greater."
        },
        {
          id: "s3-9", category: "Interpretation of Data",
          stem: "Which statement best describes City B's rainfall pattern across the four months?",
          choices: ["Very rainy in winter and very dry in summer", "Dry all year, with no month above 20 mm", "Fairly steady, with a slight peak in summer", "Exactly equal in every month"],
          answer: 2,
          explanation: "City B's rainfall values (40, 55, 60, 45 mm) vary modestly, with the highest value in July - fairly steady with a slight summer peak."
        },
        {
          id: "s3-10", category: "Evaluation of Models & Conclusions",
          stem: "Based on the data and the information about land and water, the data best support which conclusion?",
          choices: ["Inland City B has milder temperatures because land heats slowly.", "Both cities have identical climates because they share a latitude.", "Rainfall causes the temperature differences between the cities.", "Coastal City A has milder temperatures than inland City B, consistent with the ocean's slow heating and cooling."],
          answer: 3,
          explanation: "City A's temperatures swing less (8 to 22) than City B's (2 to 29), matching the principle that nearby water moderates a coastal city's climate. Same latitude does not guarantee same climate, and the passage gives no evidence that rainfall drives the temperature gap."
        },
        {
          id: "s3-11", category: "Scientific Investigation",
          stem: "To test whether the ocean really moderates City A's temperature, the class should compare City A with which of the following?",
          choices: ["Another coastal city at the same latitude", "An inland city at a much different latitude", "A city with the same rainfall but unknown location", "No comparison is possible with these data"],
          answer: 0,
          explanation: "Comparing City A with another coastal city at the same latitude tests whether the pattern repeats where the ocean influence is also present. Different latitude or unknown location mixes in other variables. (Comparing with the inland City B, which the class already did, is the other half of the test.)"
        },
        {
          id: "s3-12", category: "Interpretation of Data",
          stem: "In July, how much more rain fell in City B than in City A?",
          choices: ["15 mm", "45 mm", "60 mm", "75 mm"],
          answer: 1,
          explanation: "City B received 60 mm in July and City A received 15 mm: 60 - 15 = 45 mm."
        }
      ]
    },
    {
      id: "sci3-p3",
      kicker: "Research Summaries",
      title: "The Balloon Rocket",
      body: [
        "Students threaded a long string through a drinking straw and stretched the string across the classroom. They taped an inflated balloon to the straw and released it, measuring how far the balloon traveled along the string. The distance traveled was taken as a measure of the force produced by the air escaping the balloon.",
        "<b>Experiment 1</b>",
        "The students tested small, medium, and large balloons, each inflated to its labeled size. The string was kept level for every trial. Each size was tested three times, and the average distances (simulated for this practice set) were: small balloon, 1.2 m; medium balloon, 2.1 m; large balloon, 3.0 m.",
        "<b>Experiment 2</b>",
        "Using only the large balloon, the students changed the angle of the string. With the string level, the balloon traveled 3.0 m. Tilted so the balloon traveled 10 degrees upward, it went 2.2 m. Tilted so the balloon traveled 10 degrees downward, it went 3.6 m (simulated for this practice set)."
      ],
      questions: [
        {
          id: "s3-13", category: "Interpretation of Data",
          stem: "In Experiment 1, how much farther did the large balloon travel than the medium balloon, on average?",
          choices: ["1.8 m", "2.1 m", "0.9 m", "3.0 m"],
          answer: 2,
          explanation: "3.0 m - 2.1 m = 0.9 m."
        },
        {
          id: "s3-14", category: "Scientific Investigation",
          stem: "In Experiment 1, the independent variable (the one the students changed on purpose) was:",
          choices: ["the distance the balloon traveled", "the angle of the string", "the number of trials", "the size of the balloon"],
          answer: 3,
          explanation: "The students deliberately changed the balloon size. Distance traveled is the dependent variable (what they measured), and the string angle was held level."
        },
        {
          id: "s3-15", category: "Scientific Investigation",
          stem: "Why did the students test each balloon size three times instead of once?",
          choices: ["To use up the extra balloons", "So that every balloon would travel the same distance", "To make the experiment longer", "To check that the results were consistent and not due to one unusual trial"],
          answer: 3,
          explanation: "Repeating trials and averaging reduces the effect of a single odd result, making the conclusions more reliable."
        },
        {
          id: "s3-16", category: "Interpretation of Data",
          stem: "Based on Experiment 2, which condition produced the greatest travel distance?",
          choices: ["String level", "String tilted 10 degrees upward", "All conditions gave the same distance", "String tilted 10 degrees downward"],
          answer: 3,
          explanation: "The downward tilt gave 3.6 m, versus 3.0 m level and 2.2 m upward - gravity assists a downward trip and resists an upward one."
        },
        {
          id: "s3-17", category: "Evaluation of Models & Conclusions",
          stem: "A student claims that a balloon twice the size of the large balloon would travel about twice as far. The results of Experiment 1:",
          choices: ["support the claim, because distance increased with each size, but testing only three sizes cannot prove it", "prove this claim is correct", "contradict the claim, because distance decreased as size increased", "say nothing about balloon size"],
          answer: 0,
          explanation: "Distance did rise with size (1.2, 2.1, 3.0 m), which is consistent with the claim, but three data points cannot prove a doubling rule - and air resistance or balloon shape might change the pattern at larger sizes."
        },
        {
          id: "s3-18", category: "Scientific Investigation",
          stem: "In Experiment 2, the students used only the large balloon. Using the same balloon size in all trials is an example of:",
          choices: ["measuring the dependent variable", "controlling a variable", "forming a hypothesis", "repeating trials"],
          answer: 1,
          explanation: "Holding balloon size constant isolates the effect of the string angle - the definition of controlling a variable."
        }
      ]
    },
    {
      id: "sci3-p4",
      kicker: "Research Summaries",
      title: "Which Soil Holds Water?",
      body: [
        "A gardening club wanted to know how three soils - sand, potting soil, and clay - handle water, and which one grows the healthiest bean plants.",
        "<b>Experiment 1</b>",
        "The club placed 200 g of each dry soil in a funnel lined with filter paper, then poured 100 mL of water onto each sample. After 5 minutes, they measured how much water had drained through (simulated for this practice set): sand, 85 mL; potting soil, 45 mL; clay, 20 mL.",
        "<b>Experiment 2</b>",
        "The club planted bean seeds in pots of each soil, gave every pot the same amount of water and sunlight, and measured the average height of the seedlings after three weeks (simulated for this practice set): sand, 12 cm; potting soil, 21 cm; clay, 9 cm."
      ],
      questions: [
        {
          id: "s3-19", category: "Interpretation of Data",
          stem: "According to Experiment 1, which soil let the most water drain through?",
          choices: ["Potting soil", "Clay", "Sand", "All three drained equally"],
          answer: 2,
          explanation: "Sand let 85 mL through, more than potting soil (45 mL) or clay (20 mL)."
        },
        {
          id: "s3-20", category: "Interpretation of Data",
          stem: "Based on Experiment 1, which soil retained (held onto) the most water?",
          choices: ["Sand", "Potting soil", "Clay", "Sand and clay retained equal amounts"],
          answer: 2,
          explanation: "The soil that retains the most water drains the least. Clay drained only 20 mL of the 100 mL, holding back 80 mL - more than the other soils."
        },
        {
          id: "s3-21", category: "Interpretation of Data",
          stem: "In Experiment 2, the bean seedlings in potting soil grew to an average height of:",
          choices: ["9 cm", "12 cm", "21 cm", "45 cm"],
          answer: 2,
          explanation: "The potting-soil seedlings averaged 21 cm, taller than those in sand (12 cm) or clay (9 cm)."
        },
        {
          id: "s3-22", category: "Evaluation of Models & Conclusions",
          stem: "The clay seedlings were the shortest even though clay holds the most water. Which explanation is most consistent with both experiments?",
          choices: ["Clay holds so much water that the roots stayed waterlogged, leaving too little air in the soil for healthy growth.", "Clay contains no nutrients of any kind.", "Water is harmful to all bean plants.", "The clay pots received less sunlight than the others."],
          answer: 0,
          explanation: "Clay's poor drainage (Experiment 1) means roots sit in water with little air, which can stunt growth. The passage says all pots got equal water and sunlight, and water itself is clearly not harmful - the beans needed it."
        },
        {
          id: "s3-23", category: "Scientific Investigation",
          stem: "In Experiment 2, giving every pot the same amount of water and sunlight was important because it:",
          choices: ["made the soils drain at the same rate", "guaranteed that every seed would sprout", "meant differences in growth could be attributed to the soil, not to other conditions", "reduced the cost of the experiment"],
          answer: 2,
          explanation: "Controlling water and sunlight isolates soil type as the cause of any growth difference - the point of a fair test."
        },
        {
          id: "s3-24", category: "Scientific Investigation",
          stem: "To strengthen the conclusion that potting soil grows the tallest beans, the club could:",
          choices: ["repeat Experiment 2 with more pots of each soil and more bean seeds", "switch to a different kind of seed for each soil", "water the sand pots more than the others", "measure the seedlings after one day instead of three weeks"],
          answer: 0,
          explanation: "More pots and seeds give a larger sample, making the result more trustworthy. Different seeds or unequal watering would ruin the comparison, and one day is too short to see growth differences."
        }
      ]
    },
    {
      id: "sci3-p5",
      kicker: "Conflicting Viewpoints",
      title: "Why Did the Fish Decline?",
      body: [
        "Lake Merton is a small lake surrounded by forest. Over the past five years, surveys show that the lake's population of small silver fish has dropped by about 40 percent. Two students offered different explanations.",
        "<b>Student 1</b>",
        "The fish are starving because of zebra mussels. These invasive mussels arrived in the lake about six years ago, carried on visiting boats, and their numbers have exploded. Zebra mussels are filter feeders: each one strains plankton - the tiny organisms that young fish eat - out of the water all day long. Surveys show that plankton levels in the lake have fallen by half since the mussels arrived. With far less plankton, far fewer young fish survive to adulthood. If the mussel population were reduced, plankton would rebound and the fish population would recover.",
        "<b>Student 2</b>",
        "The mussels are getting blamed for what the weather is doing. Warm water holds less dissolved oxygen than cool water, and fish need oxygen just as we do. The past five summers have been the hottest on record for the region, and measurements show that oxygen levels in the lake's upper waters now drop dangerously low on hot, calm days. Young fish are especially sensitive to low oxygen. The fish decline matches the temperature record year by year better than it matches the mussel counts. Unless summers cool down or the lake is aerated, removing every mussel would not bring the fish back."
      ],
      questions: [
        {
          id: "s3-25", category: "Evaluation of Models & Conclusions",
          stem: "Student 1's explanation for the fish decline is that:",
          choices: ["zebra mussels eat the young fish directly.", "zebra mussels consume so much plankton that young fish are left without enough food.", "warming water has reduced the lake's oxygen.", "fishing boats have caught too many silver fish."],
          answer: 1,
          explanation: "Student 1's chain is: mussels filter out plankton, plankton levels fall by half, young fish starve. He never claims the mussels eat the fish themselves."
        },
        {
          id: "s3-26", category: "Evaluation of Models & Conclusions",
          stem: "Student 2's explanation for the fish decline is that:",
          choices: ["zebra mussels poison the water.", "the lake is being overfished.", "hot summers have lowered the water's dissolved oxygen, which harms young fish.", "plankton have eaten all the small fish."],
          answer: 2,
          explanation: "Student 2's chain is: record-hot summers, warm water holds less oxygen, low oxygen kills sensitive young fish."
        },
        {
          id: "s3-27", category: "Interpretation of Data",
          stem: "According to Student 1, what has happened to plankton levels in Lake Merton since the mussels arrived?",
          choices: ["They have doubled.", "They have stayed the same.", "They have fallen by half.", "They have dropped to zero."],
          answer: 2,
          explanation: "Student 1 states that \"plankton levels in the lake have fallen by half since the mussels arrived.\""
        },
        {
          id: "s3-28", category: "Evaluation of Models & Conclusions",
          stem: "Which of the following observations, if confirmed, would most strengthen Student 1's viewpoint?",
          choices: ["Lakes nearby that have no zebra mussels kept their plankton and fish populations over the same five years.", "Zebra mussels are found in many lakes around the world.", "Young fish prefer warm water.", "The lake's water is clearer than it used to be."],
          answer: 0,
          explanation: "A natural comparison group - similar lakes without mussels that kept their plankton and fish - directly supports the claim that mussels are the cause. Clearer water is consistent with filter feeding but does not link mussels to the fish decline."
        },
        {
          id: "s3-29", category: "Evaluation of Models & Conclusions",
          stem: "Which of the following observations, if confirmed, would most weaken Student 2's viewpoint?",
          choices: ["Oxygen levels in the lake stayed healthy even on the hottest, calmest days.", "The past five summers were the hottest on record.", "Young fish are sensitive to low oxygen.", "Warm water holds less oxygen than cool water."],
          answer: 0,
          explanation: "Student 2's argument depends on oxygen actually dropping to dangerous levels on hot days. If oxygen stayed healthy even then, his mechanism is undercut. The other choices are facts his argument already assumes."
        },
        {
          id: "s3-30", category: "Evaluation of Models & Conclusions",
          stem: "Student 2 criticizes Student 1's viewpoint mainly by arguing that:",
          choices: ["zebra mussels are not actually present in Lake Merton.", "the fish decline follows the temperature record more closely than it follows the mussel counts.", "plankton levels have not really changed.", "young fish eat zebra mussels."],
          answer: 1,
          explanation: "Student 2 says the decline \"matches the temperature record year by year better than it matches the mussel counts\" - a better-correlation argument, not a denial that mussels exist or that plankton fell."
        },
        {
          id: "s3-31", category: "Interpretation of Data",
          stem: "On which of the following do both students agree?",
          choices: ["The lake's fish population has dropped by about 40 percent.", "Zebra mussels are the main cause of the decline.", "The lake should be artificially aerated.", "Young fish are not affected by changes in the lake."],
          answer: 0,
          explanation: "Both students accept the survey result - a 40 percent decline - and disagree only about its cause. Neither endorses the other student's remedy, and both say young fish are affected."
        },
        {
          id: "s3-32", category: "Scientific Investigation",
          stem: "Which study would most directly help decide between the two viewpoints?",
          choices: ["Counting how many boats visit the lake each summer", "Measuring how fast zebra mussels reproduce in an aquarium", "Interviewing local residents about when they first noticed the mussels", "Comparing fish survival in tanks with low plankton, with low oxygen, and with both, at the lake's recent summer temperatures"],
          answer: 3,
          explanation: "Testing low plankton and low oxygen separately - at realistic summer temperatures - isolates each proposed cause and shows which one actually harms young fish, and whether they act together. The other studies do not compare the two causes."
        }
      ]
    }
  ]
};
