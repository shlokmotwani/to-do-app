let content;
let innerDiv;
let titleText;
let addNewTaskBtn;
let tasksDiv;
let tasksToLoad = [];
import { format, differenceInDays } from "date-fns";
import plusImage from "./icons/plus-box-outline.svg";
import { allProjects } from "./index";
import { createNewTaskModal } from "./task";

let lowPriorityColor = "rgba(50,205,50, 0.8)";
let mediumPriorityColor = "rgba(252, 173, 3, 0.8)";
let highPriorityColor = "rgba(252, 44, 3, 0.7)";

function loadContent() {
  content = null;
  addNewTaskBtn = document.createElement("div");
  addNewTaskBtn.id = "add-task-button";
  let plusIcon = new Image();
  plusIcon.src = plusImage;
  addNewTaskBtn.appendChild(plusIcon);

  addNewTaskBtn.addEventListener("click", ()=>{
    loadTaskModal();
  });

  content = document.createElement("div");
  content.id = "div-content";
  innerDiv = document.createElement("div");
  innerDiv.id = "div-innerDiv";

  let titleDiv = document.createElement("div");
  titleDiv.id = "content-title";
  titleText = document.createElement("span");
  titleText.id = "content-title-text";

  if (titleText.textContent == "") {
    titleText.textContent = "Title";
  }
  tasksDiv = document.createElement("div");
  tasksDiv.id = "content-tasks";

  titleDiv.appendChild(titleText);
  innerDiv.appendChild(titleDiv);
  innerDiv.appendChild(tasksDiv);
  innerDiv.appendChild(addNewTaskBtn);
  content.appendChild(innerDiv);

  loadTaskCard();
}

function setTasksToLoad(projectName) {
  tasksToLoad = [];
  console.log("setTasksToLoad function called");
  if (projectName == "All Tasks") {
    for (let i = 0; i < allProjects.length; i++) {
      for (let j = 0; j < allProjects[i].tasks.length; j++) {
        tasksToLoad.push(allProjects[i].tasks[j]);
      }
    }
  }
  else if (projectName == "Today") {
    let date = new Date();
    date = format(date, "dd/LLL/yyyy");
    for (let i = 0; i < allProjects.length; i++) {
      for (let j = 0; j < allProjects[i].tasks.length; j++) {
        if(allProjects[i].tasks[j].dueDate == date){
          tasksToLoad.push(allProjects[i].tasks[j]);
        }
      }
    }
  }
  else if (projectName == "Next 7 days") {
    let date = new Date();
    date = format(date, "dd/LLL/yyyy");
    for (let i = 0; i < allProjects.length; i++) {
      for (let j = 0; j < allProjects[i].tasks.length; j++) {
        let diffInDays = differenceInDays(allProjects[i].tasks[j].dueDate, date);
        console.log(diffInDays);
        if(0 <= diffInDays && diffInDays <= 6){
          tasksToLoad.push(allProjects[i].tasks[j]);
        }
      }
    }
  }
  else if (projectName == "Important") {
    for (let i = 0; i < allProjects.length; i++) {
      for (let j = 0; j < allProjects[i].tasks.length; j++) {
        if(allProjects[i].tasks[j].priority == "high"){
          tasksToLoad.push(allProjects[i].tasks[j]);
        }
      }
    }
  }
   else {
    for (let i = 0; i < allProjects.length; i++) {
      if (allProjects[i].name == projectName) {
        tasksToLoad.push(...allProjects[i].tasks);
      }
    }
  }
  console.log(tasksToLoad);
}

function loadTaskCard() {
  console.log("loadTaskCard has been called");
  tasksDiv.innerHTML = "";

  for (let i = 0; i < tasksToLoad.length; i++) {
    let taskCard = document.createElement("div");
    let title = document.createElement("div");
    let desc = document.createElement("div");
    let dueDate = document.createElement("div");
    let priority = document.createElement("div");
    let notes = document.createElement("div");
    let isCompleted = document.createElement("div");

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

    switch(priority.textContent){
      case "low":
        taskCard.style.backgroundColor = lowPriorityColor;
        break;
        case "medium":
        taskCard.style.backgroundColor = mediumPriorityColor;
        break;
        case "high":
        taskCard.style.backgroundColor = highPriorityColor;
        break;
    }
    
    title.appendChild(titleText);
    desc.appendChild(descText);
    dueDate.appendChild(dueDateText);
    priority.appendChild(priorityText);
    notes.appendChild(notesText);
    isCompleted.appendChild(isCompletedText);

    taskCard.appendChild(title);
    taskCard.appendChild(desc);
    taskCard.appendChild(dueDate);
    taskCard.appendChild(priority);
    taskCard.appendChild(notes);
    taskCard.appendChild(isCompleted);

    tasksDiv.appendChild(taskCard);
  }
}

function loadTaskModal() {
  console.log("addNewTask clicked");

  let modal = createNewTaskModal();
  modal.style.display = "block";
  content.append(modal);

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
}

export { content, loadContent, titleText, setTasksToLoad, loadTaskCard, tasksToLoad };
