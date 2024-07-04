let sidebar;
let homeCard;
let homeCardTitle;
let homeCardLine;
let projectCard;
let projectCardTitle;
let projectCardLine;

import allTasksImage from "./icons/inbox.svg";
import todayImage from "./icons/calendar.svg";
import next7daysImage from "./icons/content-duplicate.svg";
import importantImage from "./icons/star.svg";
import minusImage from "./icons/minus.svg";
import { allProjects } from "./index.js";

let allTasksIcon = new Image();
let todayIcon = new Image();
let next7daysIcon = new Image();
let importantIcon = new Image();
let minusIcon;


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

function loadHomeCard() {
  homeCard = document.createElement("div");
  homeCard.id = "home-card";

  homeCardTitle = document.createElement("p");
  homeCardTitle.textContent = "Home";
  homeCardLine = document.createElement("hr");

  homeCard.appendChild(homeCardTitle);
  homeCard.appendChild(homeCardLine);

  for (let i = 0; i < homeCategories.length; i++) {
    let category = document.createElement("div");
    let categoryIcon = document.createElement("div");
    console.log(homeCategories[i].icon);
    categoryIcon.appendChild(homeCategories[i].icon);

    let categoryText = document.createElement("p");
    categoryText.textContent = homeCategories[i].text;

    category.appendChild(categoryIcon);
    category.appendChild(categoryText);

    homeCard.appendChild(category);
  }
}

function loadProjectCard() {
  projectCard = document.createElement("div");
  projectCard.id = "project-card";

  projectCardTitle = document.createElement("p");
  projectCardTitle.textContent = "Projects";
  projectCardLine = document.createElement("hr");

  projectCard.appendChild(projectCardTitle);
  projectCard.appendChild(projectCardLine);

  for (let i = 0; i < allProjects.length; i++) {
    let project = document.createElement("div");
    let projectIcon = document.createElement("div");
    minusIcon = new Image();
    minusIcon.src = minusImage;
    console.log("Minus icon = " + minusIcon);
    projectIcon.appendChild(minusIcon);

    let projectText = document.createElement("p");
    projectText.textContent = allProjects[i].name;

    project.appendChild(projectIcon);
    project.appendChild(projectText);

    projectCard.appendChild(project);
  }
}

export function loadSidebar() {
  sidebar = document.createElement("div");
  sidebar.id = "div-sidebar";

  loadHomeCard();
  loadProjectCard();

  sidebar.appendChild(homeCard);
  sidebar.appendChild(projectCard);
}

export { sidebar, homeCard, projectCard };
