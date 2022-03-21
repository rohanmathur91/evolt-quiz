import { v4 as uuid } from "uuid";
import food from "../assets/images/food.webp";
import bigBangTheory from "../assets/images/big-bang-theory.webp";
import wildlife from "../assets/images/wildlife.webp";

export const categories = [
  {
    _id: uuid(),
    alt: "bigBangTheory",
    image: bigBangTheory,
    numberOfquestions: 3,
    category: "Shows",
    title: "Scissors Cuts Paper. Paper Covers Rock. Rock Crushes Lizard.",
  },
  {
    _id: uuid(),
    alt: "food",
    image: food,
    numberOfquestions: 3,
    category: "Food",
    title: "Food provides us the nutrition we need to survive.",
  },
  {
    _id: uuid(),
    alt: "wildlife",
    image: wildlife,
    numberOfquestions: 3,
    category: "Wildlife",
    title: "Wildlife helps in maintaining the eco-logical balance of nature.",
  },
];
