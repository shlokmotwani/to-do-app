import allTasksImage from "./icons/inbox.svg";
import todayImage from "./icons/calendar.svg";
import next7daysImage from "./icons/content-duplicate.svg";
import importantImage from "./icons/star.svg";
import minusImage from "./icons/minus.svg";
import plusImage from "./icons/plus-box-outline.svg";

import { allProjects } from "./index.js";
import { createNewProjectModal } from "./project.js";
import { content } from "./loadContent.js";
import { titleText } from "./loadContent.js";
import { setTasksToLoad } from "./loadContent.js";
import { loadTaskCards } from "./loadContent.js";

let sidebar;
let homeCard;
let homeCardTitle;
let homeCardLine;
let projectCard;
let projectCardTitle;
let projectCardLine;
let addNewProjectBtn;
let homeCategoryButtons = [];
let lastBtnClicked;

let allTasksIcon = new Image();
let todayIcon = new Image();
let next7daysIcon = new Image();
let importantIcon = new Image();
let minusIcon;
let plusIcon = new Image();

allTasksIcon.src = allTasksImage;
todayIcon.src = todayImage;
next7daysIcon.src = next7daysImage;
importantIcon.src = importantImage;
plusIcon.src = plusImage;

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
  homeCard = null;
  homeCard = document.createElement("div");
  homeCardTitle = document.createElement("p");
  homeCardLine = document.createElement("hr");

  homeCard.id = "home-card";
  homeCardTitle.textContent = "Home";

  homeCard.appendChild(homeCardTitle);
  homeCard.appendChild(homeCardLine);

  for (let i = 0; i < homeCategories.length; i++) {
    let category = document.createElement("div");
    let categoryIcon = document.createElement("div");
    let categoryText = document.createElement("p");

    category.classList.add("home-categories");
    categoryIcon.appendChild(homeCategories[i].icon);
    categoryText.textContent = homeCategories[i].text;

    category.appendChild(categoryIcon);
    category.appendChild(categoryText);

    homeCategoryButtons.push(category);

    category.addEventListener("click", () => {
      titleText.textContent = homeCategories[i].text;
      setTasksToLoad(homeCategories[i].text);
      loadTaskCards();
      lastBtnClicked = homeCategories[i].text;
    });

    homeCard.appendChild(category);
  }
}

function loadProjectCard() {
  projectCard = null;
  projectCard = document.createElement("div");
  projectCardTitle = document.createElement("p");
  projectCardLine = document.createElement("hr");

  projectCard.id = "project-card";
  projectCardTitle.textContent = "Projects";

  projectCard.appendChild(projectCardTitle);
  projectCard.appendChild(projectCardLine);

  for (let i = 0; i < allProjects.length; i++) {
    let project = document.createElement("div");
    let projectIcon = document.createElement("div");
    let projectText = document.createElement("p");
    project.classList.add("project-categories");

    // minusIcon has to be re-created in the loop
    // to append multiple unique elements to the project div
    minusIcon = new Image();
    minusIcon.src = minusImage;
    projectIcon.appendChild(minusIcon);
    projectText.textContent = allProjects[i].name;

    project.appendChild(projectIcon);
    project.appendChild(projectText);

    project.addEventListener("click", () => {
      titleText.textContent = projectText.textContent;
      setTasksToLoad(projectText.textContent);
      loadTaskCards();
      lastBtnClicked = titleText.textContent;
    });

    projectCard.appendChild(project);
  }

  let addNewProject = document.createElement("div");
  addNewProjectBtn = document.createElement("div");
  addNewProject.appendChild(addNewProjectBtn);
  addNewProjectBtn.appendChild(plusIcon);

  addNewProjectBtn.addEventListener("click", loadProjectModal);

  projectCard.appendChild(addNewProject);
}

function loadSidebar() {
  sidebar = null;
  sidebar = document.createElement("div");
  sidebar.id = "div-sidebar";

  loadHomeCard();
  loadProjectCard();

  sidebar.appendChild(homeCard);
  sidebar.appendChild(projectCard);
}

function loadProjectModal() {
  let modal = createNewProjectModal();
  modal.style.display = "block";
  content.append(modal);

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
}

export {
  sidebar,
  loadSidebar,
  loadProjectCard,
  homeCategoryButtons,
  lastBtnClicked,
};
