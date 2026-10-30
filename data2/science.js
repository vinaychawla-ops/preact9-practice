// PreACT 9 style Science, Set 2 - original passages and questions, 4 choices each.
window.PREACT_DATA2 = window.PREACT_DATA2 || {};
window.PREACT_DATA2.science = {
  passages: [
    {
      id: "sci2-p1",
      kicker: "Data Representation",
      title: "Warm Water, Salt, and Oxygen",
      body: [
        "A chemistry class investigated how temperature affects the amount of two substances that can dissolve in water: potassium nitrate (KNO<sub>3</sub>), a salt, and oxygen, a gas. For each salt trial, students added KNO<sub>3</sub> to 100 g of water held at a controlled temperature, stirring until no more would dissolve. They then used a dissolved-oxygen meter on water samples held at the same temperatures. Each measurement was repeated three times, and the averages (simulated for this practice set) are shown in Table 1."
      ],
      table: {
        caption: "Table 1: Solubility of KNO3 and dissolved oxygen in water (simulated data)",
        header: ["Temperature (deg C)", "KNO3 dissolved (g per 100 g water)", "Dissolved oxygen (mg per L)"],
        rows: [
          ["0", "13", "14.6"],
          ["20", "32", "9.1"],
          ["40", "64", "6.9"],
          ["60", "110", "5.1"],
          ["80", "169", "3.8"]
        ]
      },
      afterTable: [
        "The students noted that the two substances behaved in opposite ways: warmer water dissolved more of the salt but held less of the gas."
      ],
      questions: [
        {
          id: "s2-1", category: "Interpretation of Data",
          stem: "According to Table 1, at 40 degrees C, how much KNO<sub>3</sub> dissolved in 100 g of water?",
          choices: ["13 g", "32 g", "64 g", "110 g"],
          answer: 2,
          explanation: "Read across the 40 degree row to the KNO<sub>3</sub> column: 64 g per 100 g of water."
        },
        {
          id: "s2-2", category: "Interpretation of Data",
          stem: "As the water temperature increased from 0 to 80 degrees C, the dissolved oxygen level:",
          choices: ["increased only.", "decreased only.", "increased, then decreased.", "stayed about the same."],
          answer: 1,
          explanation: "The oxygen column falls at every step: 14.6, 9.1, 6.9, 5.1, 3.8 mg/L. Warmer water holds less dissolved oxygen."
        },
        {
          id: "s2-3", category: "Interpretation of Data",
          stem: "Based on the pattern in Table 1, the solubility of KNO<sub>3</sub> at 50 degrees C would most likely be:",
          choices: ["between 32 and 64 g.", "exactly 87 g.", "more than 169 g.", "between 64 and 110 g."],
          answer: 3,
          explanation: "50 degrees lies between 40 and 60, so the value should fall between the measured values at those temperatures: 64 and 110 g. Claiming exactly 87 g (the midpoint) overstates what the data show, since the increases are not equal."
        },
        {
          id: "s2-4", category: "Interpretation of Data",
          stem: "Between 60 degrees C and 80 degrees C, the amount of KNO<sub>3</sub> that dissolved increased by about:",
          choices: ["20 g", "40 g", "60 g", "110 g"],
          answer: 2,
          explanation: "The values are 110 g at 60 degrees and 169 g at 80 degrees: 169 - 110 = 59 g, about 60 g."
        },
        {
          id: "s2-5", category: "Scientific Investigation",
          stem: "To measure KNO<sub>3</sub> solubility at 10 degrees C using the same procedure, the students should keep which of the following the same as in the earlier trials?",
          choices: ["The amount of water and the stirring method", "The water temperature", "The amount of KNO3 that dissolves", "The dissolved oxygen reading"],
          answer: 0,
          explanation: "Only the temperature should change; the 100 g of water and the stirring method are controlled variables. The amount that dissolves is the measurement itself, not something held constant."
        },
        {
          id: "s2-6", category: "Evaluation of Models & Conclusions",
          stem: "Power plants sometimes release warm cooling water into rivers. Based on Table 1, this practice would most likely:",
          choices: ["increase the oxygen available to fish in the river.", "decrease the oxygen dissolved in the river water.", "have no effect on dissolved gases.", "cause salt to form in the river."],
          answer: 1,
          explanation: "The table shows warmer water holds less dissolved oxygen at every temperature measured, so warming a river would lower the oxygen available to fish."
        },
        {
          id: "s2-7", category: "Evaluation of Models & Conclusions",
          stem: "Which statement best summarizes the class's findings?",
          choices: ["All substances dissolve better in warm water.", "Oxygen cannot dissolve in water above 60 degrees C.", "KNO3 stops dissolving once water reaches 80 degrees C.", "The gas and the salt tested respond to warming water in opposite ways."],
          answer: 3,
          explanation: "KNO<sub>3</sub> solubility rose with temperature while dissolved oxygen fell - opposite responses. The other choices go beyond or contradict the data: oxygen still dissolved at 80 degrees, and KNO<sub>3</sub> kept dissolving more."
        }
      ]
    },
    {
      id: "sci2-p2",
      kicker: "Conflicting Viewpoints",
      title: "Where Did the Frogs Go?",
      body: [
        "For years, students at a rural middle school counted green frogs at four ponds near their school each spring. In 2022, the counts averaged about 400 frogs per pond. By 2025, the average had fallen to about 120 frogs per pond. Two science teachers offered different explanations.",
        "<b>Viewpoint 1: Drought.</b> Rainfall records show that the springs of 2023 and 2024 were among the driest in fifty years. Frogs lay their eggs in shallow water, and tadpoles need weeks of standing water to develop. As the ponds shrank, much of the shallow edge habitat dried out before tadpoles could mature. Supporters of this view note that frog counts also dropped at ponds that had no new predators, and that the lowest counts came from the shallowest ponds, which lost the most water.",
        "<b>Viewpoint 2: An introduced predator.</b> In 2022, a neighbor released pet-store sunfish into the two largest ponds, and sunfish eat tadpoles. Supporters of this view note that the steepest declines occurred in the two ponds with the sunfish, while the fish-free ponds saw smaller drops. They argue that dry springs alone cannot explain why the decline was so uneven from pond to pond.",
        "Both teachers agree that the data gathered so far cannot settle the question, because the drought and the sunfish arrived at the same time."
      ],
      questions: [
        {
          id: "s2-8", category: "Evaluation of Models & Conclusions",
          stem: "Viewpoint 1 attributes the decline in frog counts primarily to:",
          choices: ["unusually dry springs that shrank the shallow water tadpoles need.", "sunfish eating the tadpoles.", "a disease spreading from pond to pond.", "students counting less carefully each year."],
          answer: 0,
          explanation: "Viewpoint 1 centers on the drought: dry springs removed the shallow standing water that tadpoles need to develop."
        },
        {
          id: "s2-9", category: "Scientific Investigation",
          stem: "Why is it more useful that the students counted frogs at four ponds rather than one?",
          choices: ["It is not more useful; one pond would give the same information.", "Comparing several ponds helps show whether a pattern is general or limited to one location.", "More ponds guarantee that the counts are exact.", "Four ponds require fewer students to do the counting."],
          answer: 1,
          explanation: "Multiple ponds let the teachers compare ponds with and without sunfish, and shallow with deep - that comparison is what makes either viewpoint testable."
        },
        {
          id: "s2-10", category: "Evaluation of Models & Conclusions",
          stem: "Which new finding would most support Viewpoint 1?",
          choices: ["Rainfall in 2023 and 2024 was actually above average.", "Tadpoles raised in shallow, warm tank water developed normally.", "Frog counts also fell sharply at nearby lakes that had the same dry springs but no sunfish.", "Sunfish were observed eating mostly insects rather than tadpoles."],
          answer: 2,
          explanation: "If frogs crashed where drought occurred without sunfish, drought alone can drive the decline - exactly what Viewpoint 1 claims. Choices A and B undercut Viewpoint 1, and D undercuts Viewpoint 2."
        },
        {
          id: "s2-11", category: "Evaluation of Models & Conclusions",
          stem: "Which finding would most weaken Viewpoint 2?",
          choices: ["The sunfish grew larger between 2022 and 2025.", "Sunfish eat tadpoles in laboratory tanks.", "The drought ended in 2025.", "Frogs declined just as sharply in the two ponds without sunfish."],
          answer: 3,
          explanation: "Viewpoint 2 rests on the decline being worse where sunfish live. If fish-free ponds lost frogs just as sharply, the predator explanation loses its main evidence."
        },
        {
          id: "s2-12", category: "Scientific Investigation",
          stem: "Which experiment would most directly test Viewpoint 2?",
          choices: ["Placing tadpole enclosures in one pond - half shielded from sunfish, half open to them - and comparing tadpole survival", "Adding more sunfish to all four ponds and recounting the frogs", "Draining the two largest ponds to count the sunfish", "Measuring rainfall at all four ponds for one more year"],
          answer: 0,
          explanation: "A controlled comparison isolates the predator's effect: same pond, same conditions, only sunfish access differs. The other choices confound the variables or measure something unrelated."
        },
        {
          id: "s2-13", category: "Interpretation of Data",
          stem: "The average frog count fell from about 400 to about 120 per pond. This is a decrease of about:",
          choices: ["30%", "50%", "70%", "90%"],
          answer: 2,
          explanation: "The drop is 400 - 120 = 280 frogs, and 280 out of 400 is 0.70, or 70%."
        },
        {
          id: "s2-14", category: "Scientific Investigation",
          stem: "Suppose researchers removed the sunfish from one of the two stocked ponds and left the other pond unchanged. In this experiment, the unchanged pond would serve as:",
          choices: ["a control, so frog numbers with and without the predator can be compared.", "proof that Viewpoint 1 is correct.", "a way to increase the sunfish population.", "a measure of local rainfall."],
          answer: 0,
          explanation: "The unchanged pond is the control group: it shows what happens when nothing is removed, so any recovery in the treated pond can be attributed to the sunfish removal."
        }
      ]
    }
  ]
};
