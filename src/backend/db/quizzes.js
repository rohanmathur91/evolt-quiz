import { v4 as uuid } from "uuid";

export const quizzes = [
  {
    _id: uuid(),
    alt: "bigBangTheory",
    image:
      "https://res.cloudinary.com/dexubgbx0/image/upload/v1649834636/big-bang-theory_zfuwrx.webp",
    category: "Shows",
    title: "Scissors Cuts Paper. Paper Covers Rock. Rock Crushes Lizard.",
    quiz: [
      {
        _id: uuid(),
        question: "Sheldon is which type of scientist in big bang theory?",
        options: [
          { _id: uuid(), option: "Experimental physicist", isCorrect: true },
          { _id: uuid(), option: "Aerospace engineer", isCorrect: false },
          { _id: uuid(), option: "Microbiologist", isCorrect: false },
          { _id: uuid(), option: "Theoretical physicist", isCorrect: false },
        ],
      },
      {
        _id: uuid(),
        question: "What state is Sheldon originally from?",
        options: [
          { _id: uuid(), option: "Houston", isCorrect: false },
          { _id: uuid(), option: "El Paso", isCorrect: false },
          { _id: uuid(), option: "Texas", isCorrect: true },
          { _id: uuid(), option: "Dallas", isCorrect: false },
        ],
      },
      {
        _id: uuid(),
        question: "From which state penny belongs to?",
        options: [
          {
            _id: uuid(),
            option: "Omaha",
            isCorrect: false,
          },
          { _id: uuid(), option: "Minneapolis", isCorrect: false },
          { _id: uuid(), option: "Kansas", isCorrect: false },
          { _id: uuid(), option: "Nebraska", isCorrect: true },
        ],
      },
    ],
  },
  {
    _id: uuid(),
    alt: "nutrition",
    image:
      "https://res.cloudinary.com/dexubgbx0/image/upload/v1649834638/food_t0ztgt.webp",
    category: "Nutrition",
    title: "Let's see how much you know your food well.",
    quiz: [
      {
        _id: uuid(),
        question:
          "Which is the richest source of vitamin C in the given options?",
        options: [
          { _id: uuid(), option: "Milk", isCorrect: false },
          { _id: uuid(), option: "Carrot", isCorrect: false },
          { _id: uuid(), option: "Cantaloupe", isCorrect: true },
          { _id: uuid(), option: "None of these", isCorrect: false },
        ],
      },
      {
        _id: uuid(),
        question: "Which food contains source of Vitamin D?",
        options: [
          { _id: uuid(), option: "Fatty fish", isCorrect: false },
          { _id: uuid(), option: "Mushrooms", isCorrect: false },
          { _id: uuid(), option: "Egg Yolks", isCorrect: false },
          { _id: uuid(), option: "All of above", isCorrect: true },
        ],
      },
      {
        _id: uuid(),
        question: "Where does wheat originate from?",
        options: [
          { _id: uuid(), option: "Turkey", isCorrect: true },
          { _id: uuid(), option: "India", isCorrect: false },
          { _id: uuid(), option: "Brazil", isCorrect: false },
          { _id: uuid(), option: "China", isCorrect: false },
        ],
      },
      {
        _id: uuid(),
        question: "Where are bananas originally from?",
        options: [
          { _id: uuid(), option: "Europe", isCorrect: false },
          { _id: uuid(), option: "Mexico", isCorrect: false },
          { _id: uuid(), option: "India", isCorrect: false },
          { _id: uuid(), option: "South East Asia", isCorrect: true },
        ],
      },
    ],
  },
  {
    _id: uuid(),
    alt: "wildlife",
    image:
      "https://res.cloudinary.com/dexubgbx0/image/upload/v1649834647/wildlife_txpxpo.webp",
    category: "Wildlife",
    title: "Wildlife helps in maintaining the eco-logical balance of nature.",
    quiz: [
      {
        _id: uuid(),
        question: "How big are polar bears when they are born?",
        options: [
          {
            _id: uuid(),
            option: "Size of a newborn giant panda",
            isCorrect: false,
          },
          { _id: uuid(), option: "Size of an adult cat", isCorrect: false },
          {
            _id: uuid(),
            option: "Size of an adult house mouse",
            isCorrect: false,
          },
          {
            _id: uuid(),
            option: "Size of an adult guinea pig",
            isCorrect: true,
          },
        ],
      },
      {
        _id: uuid(),
        question: "How fast can a jaguar run?",
        options: [
          {
            _id: uuid(),
            option: "20 miles per hour",
            isCorrect: false,
          },
          { _id: uuid(), option: "35 miles per hour", isCorrect: false },
          {
            _id: uuid(),
            option: "50 miles per hour",
            isCorrect: true,
          },
          {
            _id: uuid(),
            option: "65 miles per hour",
            isCorrect: false,
          },
        ],
      },
      {
        _id: uuid(),
        question: "What is a group of tigers called?",
        options: [
          { _id: uuid(), option: "A streak", isCorrect: true },
          { _id: uuid(), option: "A troop", isCorrect: false },
          { _id: uuid(), option: "A parliament", isCorrect: false },
          { _id: uuid(), option: "A pride", isCorrect: false },
        ],
      },
    ],
  },
];
