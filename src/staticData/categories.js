import { v4 as uuid } from "uuid";

export const categories = [
  {
    _id: uuid(),
    alt: "bigBangTheory",
    image:
      "https://res.cloudinary.com/dexubgbx0/image/upload/v1649834636/big-bang-theory_zfuwrx.webp",
    numberOfquestions: 3,
    category: "Shows",
    title: "Scissors Cuts Paper. Paper Covers Rock. Rock Crushes Lizard.",
  },
  {
    _id: uuid(),
    alt: "food",
    image:
      "https://res.cloudinary.com/dexubgbx0/image/upload/v1649834638/food_t0ztgt.webp",
    numberOfquestions: 3,
    category: "Food",
    title: "Food provides us the nutrition we need to survive.",
  },
  {
    _id: uuid(),
    alt: "wildlife",
    image:
      "https://res.cloudinary.com/dexubgbx0/image/upload/v1649834647/wildlife_txpxpo.webp",
    numberOfquestions: 3,
    category: "Wildlife",
    title: "Wildlife helps in maintaining the eco-logical balance of nature.",
  },
];
