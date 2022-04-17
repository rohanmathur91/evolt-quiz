import { v4 as uuid } from "uuid";

export const results = [
  {
    _id: uuid(),
    userId: uuid(),
    totalScore: 10,
    category: "shows",
    userName: "Adarsh Balika",
    createdAt: String(new Date()).split(" ").slice(1, 4).join(" "),
  },
  {
    _id: uuid(),
    userId: uuid(),
    totalScore: 15,
    category: "shows",
    userName: "Rohan Mathur",
    createdAt: String(new Date()).split(" ").slice(1, 4).join(" "),
  },
  {
    _id: uuid(),
    userId: uuid(),
    totalScore: 20,
    category: "shows",
    userName: "Rohan Mathur",
    createdAt: String(new Date()).split(" ").slice(1, 4).join(" "),
  },
  {
    _id: uuid(),
    userId: uuid(),
    totalScore: 5,
    category: "shows",
    userName: "Balak",
    createdAt: String(new Date()).split(" ").slice(1, 4).join(" "),
  },
  {
    _id: uuid(),
    userId: uuid(),
    totalScore: 5,
    category: "shows",
    userName: "Balak",
    createdAt: String(new Date()).split(" ").slice(1, 4).join(" "),
  },
];
