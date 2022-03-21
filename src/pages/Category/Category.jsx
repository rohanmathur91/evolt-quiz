import React from "react";
import styles from "./Category.module.css";

export const Category = () => {
  return (
    <div class="category flex-column items-center mt-8">
      <h3 class="mt-6">Quiz Categories</h3>
      <div class="category-container flex-row content-center wrap mt-4 mx-2 mb-2">
        <div class="card-category rounded-sm m-2">
          <div class="mb-2">
            <img
              class="rounded-sm category-img"
              src="https://picsum.photos/300/300"
              alt="image"
            />
          </div>
          <p class="mb-2 font-semibold">
            "Scissors Cuts Paper. Paper Covers Rock. Rock Crushes Lizard."
          </p>
          <p class="text-gray mb-2">Play the quiz to test yourself.</p>
          <div class="category-footer flex-row items-center">
            <p class="text-gray">5 Questions</p>
            <a
              class="cta primary-cta py-1 px-2 font-bold ml-auto rounded-sm transition-2"
              href="../rules/rules.html"
            >
              Take quiz
            </a>
          </div>
        </div>

        <div class="card-category rounded-sm m-2">
          <div class="mb-2">
            <img
              class="rounded-sm category-img"
              src="https://picsum.photos/300/300"
              alt="image"
            />
          </div>
          <p class="mb-2 font-semibold">
            "Scissors Cuts Paper. Paper Covers Rock. Rock Crushes Lizard."
          </p>
          <p class="text-gray mb-2">Play the quiz to test yourself.</p>
          <div class="category-footer flex-row items-center">
            <p class="text-gray">5 Questions</p>
            <a
              class="cta primary-cta py-1 px-2 font-bold ml-auto rounded-sm transition-2"
              href="../rules/rules.html"
            >
              Take quiz
            </a>
          </div>
        </div>

        <div class="card-category rounded-sm m-2">
          <div class="mb-2">
            <img
              class="rounded-sm category-img"
              src="https://picsum.photos/300/300"
              alt="image"
            />
          </div>
          <p class="mb-2 font-semibold">
            "Scissors Cuts Paper. Paper Covers Rock. Rock Crushes Lizard."
          </p>
          <p class="text-gray mb-2">Play the quiz to test yourself.</p>
          <div class="category-footer flex-row items-center">
            <p class="text-gray">5 Questions</p>
            <a
              class="cta primary-cta py-1 px-2 font-bold ml-auto rounded-sm transition-2"
              href="../rules/rules.html"
            >
              Take quiz
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
