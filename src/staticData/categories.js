import { v4 as uuid } from "uuid";
import health from "../assets/images/health.webp";
import bigBangTheory from "../assets/images/big-bang-theory.jpg";
import wildlife from "../assets/images/wildlife.jpg";

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
    alt: "health",
    image: health,
    numberOfquestions: 3,
    category: "Health",
    title: "Scissors Cuts Paper. Paper Covers Rock. Rock Crushes Lizard.",
  },
  {
    _id: uuid(),
    alt: "wildlife",
    image: wildlife,
    numberOfquestions: 3,
    category: "Wildlife",
    title: "Lets see how much you know about wildlife.",
  },
];
