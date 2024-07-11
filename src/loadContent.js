import { format, differenceInDays } from "date-fns";
import { allProjects } from "./index";
import { createNewTaskModal } from "./task";
import { lastBtnClicked } from "./loadSidebar";
import plusImage from "./icons/plus-box-outline.svg";
import editImage from "./icons/file-edit.svg";
import deleteImage from "./icons/delete.svg";

let content;
let innerDiv;
let titleText;
let addNewTaskBtn;
let tasksDiv;
let tasksToLoad = [];
let LOW_PRIORITY_COLOR = "rgba(50,205,50, 0.8)";
let MED_PRIORITY_COLOR = "rgba(252, 173, 3, 0.8)";
let HIGH_PRIORITY_COLOR = "rgba(252, 44, 3, 0.7)";

function loadContentStructure() {
  let plusIcon;
  let titleDiv;

  content = null;
  addNewTaskBtn = document.createElement("div");
  plusIcon = new Image();
  content = document.createElement("div");
  innerDiv = document.createElement("div");
  titleDiv = document.createElement("div");
  titleText = document.createElement("span");
  tasksDiv = document.createElement("div");

  addNewTaskBtn.id = "add-task-button";
  content.id = "div-content";
  innerDiv.id = "div-inner-div";
  titleDiv.id = "content-title";
  titleText.id = "content-title-text";
  tasksDiv.id = "content-tasks";
  plusIcon.src = plusImage;
  addNewTaskBtn.appendChild(plusIcon);

  addNewTaskBtn.addEventListener("click", () => {
    loadTaskModal();
  });

  if (titleText.textContent == "") {
    titleText.textContent = "Title";
  }

  titleDiv.appendChild(titleText);
  innerDiv.appendChild(titleDiv);
  innerDiv.appendChild(tasksDiv);
  innerDiv.appendChild(addNewTaskBtn);
  content.appendChild(innerDiv);
}

function filterTasksToBeLoaded(projectName) {
  tasksToLoad = [];

  switch (projectName) {
    case "All Tasks":
      loadAllTasks();
      break;
    case "Today":
      loadTasksForToday();
      break;
    case "Next 7 days":
      loadTasksForTheWeek();
      break;
    case "Important":
      loadImportantTasks();
      break;
    default:
      loadProjectTasks(projectName);
  }


function loadAllTasks() {
  for (let i = 0; i < allProjects.length; i++) {
    for (let j = 0; j < allProjects[i].tasks.length; j++) {
      tasksToLoad.push(allProjects[i].tasks[j]);
    }
  }
}

function loadTasksForToday() {
  let date = new Date();
  date = format(date, "dd/LLL/yyyy");
  for (let i = 0; i < allProjects.length; i++) {
    for (let j = 0; j < allProjects[i].tasks.length; j++) {
      if (allProjects[i].tasks[j].dueDate == date) {
        tasksToLoad.push(allProjects[i].tasks[j]);
      }
    }
  }
}

function loadTasksForTheWeek() {
  let date = new Date();
  date = format(date, "dd/LLL/yyyy");
  for (let i = 0; i < allProjects.length; i++) {
    for (let j = 0; j < allProjects[i].tasks.length; j++) {
      let diffInDays = differenceInDays(allProjects[i].tasks[j].dueDate, date);
      if (0 <= diffInDays && diffInDays <= 6) {
        tasksToLoad.push(allProjects[i].tasks[j]);
      }
    }
  }
}

function loadImportantTasks() {
  for (let i = 0; i < allProjects.length; i++) {
    for (let j = 0; j < allProjects[i].tasks.length; j++) {
      if (allProjects[i].tasks[j].priority == "high") {
        tasksToLoad.push(allProjects[i].tasks[j]);
      }
    }
  }
}

function loadProjectTasks(projectName) {
  for (let i = 0; i < allProjects.length; i++) {
    if (allProjects[i].name == projectName) {
      tasksToLoad.push(...allProjects[i].tasks);
    }
  }
}
}


function loadTaskCards() {
  tasksDiv.innerHTML = "";

  for (let i = 0; i < tasksToLoad.length; i++) {
    let taskCard = document.createElement("div");
    let title = document.createElement("div");
    let desc = document.createElement("div");
    let dueDate = document.createElement("div");
    let priority = document.createElement("div");
    let notes = document.createElement("div");
    let isCompleted = document.createElement("div");
    let operations = document.createElement("div");
    let deleteBtn = document.createElement("div");
    let editBtn = document.createElement("div");

    let titleText = document.createElement("span");
    let descText = document.createElement("span");
    let dueDateText = document.createElement("span");
    let priorityText = document.createElement("span");
    let notesText = document.createElement("span");
    let isCompletedText = document.createElement("span");

    titleText.textContent = tasksToLoad[i].title;
    descText.textContent = tasksToLoad[i].desc;
    dueDateText.textContent = tasksToLoad[i].dueDate;
    priority.textContent = tasksToLoad[i].priority;
    notesText.textContent = tasksToLoad[i].notes;
    isCompletedText.textContent = tasksToLoad[i].isCompleted;

    operations.id = "operations-div";

    title.appendChild(titleText);
    desc.appendChild(descText);
    dueDate.appendChild(dueDateText);
    priority.appendChild(priorityText);
    notes.appendChild(notesText);
    isCompleted.appendChild(isCompletedText);

    let editIcon = new Image();
    editIcon.src = editImage;
    editBtn.appendChild(editIcon);
    editBtn.addEventListener("click", () => {
      editTask(tasksToLoad[i]);
    });

    let deleteIcon = new Image();
    deleteIcon.src = deleteImage;
    deleteBtn.appendChild(deleteIcon);
    deleteBtn.addEventListener("click", (event) => {
      deleteTask(event);
      filterTasksToBeLoaded(lastBtnClicked);
      loadTaskCards();
    });

    operations.appendChild(editBtn);
    operations.appendChild(deleteBtn);

    taskCard.appendChild(title);
    taskCard.appendChild(desc);
    taskCard.appendChild(dueDate);
    taskCard.appendChild(priority);
    taskCard.appendChild(notes);
    taskCard.appendChild(isCompleted);
    taskCard.appendChild(operations);

    //set tasks color based on their priority
    switch (priority.textContent) {
      case "low":
        taskCard.style.backgroundColor = LOW_PRIORITY_COLOR;
        break;
      case "medium":
        taskCard.style.backgroundColor = MED_PRIORITY_COLOR;
        break;
      case "high":
        taskCard.style.backgroundColor = HIGH_PRIORITY_COLOR;
        break;
    }

    tasksDiv.appendChild(taskCard);
  }
}

function editTask(task) {
  let modal = createNewTaskModal(task);
  modal.style.display = "block";
  content.append(modal);

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
}

function deleteTask(event) {
  let taskTitle =
    event.target.parentNode.parentNode.parentNode.firstChild.textContent;
  for (let i = 0; i < allProjects.length; i++) {
    for (let j = 0; j < allProjects[i].tasks.length; j++) {
      if (allProjects[i].tasks[j].title == taskTitle) {
        allProjects[i].tasks.splice(j, 1);
        localStorage.setItem("allProjects", allProjects);
      }
    }
  }
}

function loadTaskModal(task) {
  let modal = createNewTaskModal(task);
  modal.style.display = "block";
  content.append(modal);

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
  return modal;
}

export {
  content,
  loadContentStructure,
  titleText,
  filterTasksToBeLoaded,
  loadTaskCards,
  tasksToLoad,
};
