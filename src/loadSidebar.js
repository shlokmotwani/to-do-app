let sidebar;
let homeCard;
let projectCard;
let homeCardTitle;
let homeCardLine;

import allTasksImage from "./icons/inbox.svg";
import todayImage from "./icons/calendar.svg";
import next7daysImage from "./icons/content-duplicate.svg";
import importantImage from "./icons/star.svg";

let allTasksIcon = new Image();
let todayIcon = new Image();
let next7daysIcon = new Image();
let importantIcon = new Image();

allTasksIcon.src = allTasksImage;
todayIcon.src = todayImage;
next7daysIcon.src = next7daysImage;
importantIcon.src = importantImage;

let homeCategories = [
  {
    icon: allTasksIcon,
    text: "All Tasks",
  },
  {
    icon: todayIcon,
    text: "Today",
  },
  {
    icon: next7daysIcon,
    text: "Next 7 days",
  },
  {
    icon: importantIcon,
    text: "Important",
  },
];

export function loadSidebar() {
  sidebar = document.createElement("div");
  sidebar.id = "div-sidebar";

  homeCard = document.createElement("div");
  homeCard.id = "home-card";
  homeCard.style.cssText = `
  padding: 20px;`;
  homeCardTitle = document.createElement("p");
  homeCardTitle.textContent = "Home";
  homeCardTitle.style.cssText = `
  font-size: 1.8rem;
  margin-bottom: 10px;`;
  homeCardLine = document.createElement("hr");

  homeCard.appendChild(homeCardTitle);
  homeCard.appendChild(homeCardLine);



  for (let i = 0; i < homeCategories.length; i++) {
    let category = document.createElement("div");
    let categoryIcon = document.createElement("div");
    console.log(homeCategories[i].icon);
    categoryIcon.appendChild(homeCategories[i].icon);
    categoryIcon.style.cssText = `
    width: 2.0rem;
    height: 2.0rem;`;
    let categoryText = document.createElement("p");
    categoryText.textContent = homeCategories[i].text;

    category.style.cssText = `
    display: flex;
    height: fit-content;
    margin-top: 30px;
    align-items: center;
    font-size: 1.2rem;`;

    category.appendChild(categoryIcon);
    category.appendChild(categoryText);

    homeCard.appendChild(category);
  }

  projectCard = document.createElement("div");
  projectCard.id = "project-card";

  sidebar.appendChild(homeCard);
  sidebar.appendChild(projectCard);
}

export { sidebar };
