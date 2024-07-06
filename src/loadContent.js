let content;
let innerDiv;
let titleText;
let addTaskBtn;
let tasksDiv;

import plusImage from "./icons/plus-box-outline.svg";

import { allProjects } from "./index";

function loadContent() {
  content = null;
  addTaskBtn = document.createElement("div");
  addTaskBtn.id = "add-task-button";
  let plusIcon = new Image();
  plusIcon.src = plusImage;
  addTaskBtn.appendChild(plusIcon);

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
  innerDiv.appendChild(addTaskBtn);
  content.appendChild(innerDiv);

  loadTaskCard();
  logAllTasks();
}

function loadTaskCard() {
  for(let i=0; i<allProjects.length; i++){

    for(let j=0; j<allProjects[i].tasks.length; j++){
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
  
      titleText.textContent = allProjects[i].tasks[j].title;
      descText.textContent = allProjects[i].tasks[j].desc;
      dueDateText.textContent = allProjects[i].tasks[j].dueDate;
      priority.textContent = allProjects[i].tasks[j].priority;
      notesText.textContent = allProjects[i].tasks[j].notes;
      isCompletedText.textContent = allProjects[i].tasks[j].isCompleted;
  
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
}

function logAllTasks(){
  console.log("logAllTasks has been called");
  for(let i=0; i<allProjects.length; i++){
    console.log("Project Title : " + allProjects[i].name);
    for(let j=0; j<allProjects[i].tasks.length; j++){
      console.log(allProjects[i].tasks[j].title);
    }
  }
}

export { content, loadContent, titleText };
