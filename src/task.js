import { allProjects } from "./index";
import { filterTasksToBeLoaded, titleText } from "./loadContent";
import { loadHomePage } from "./loadHomePage";
import { lastBtnClicked } from "./loadSidebar";
import { format, getDate, getMonth, getYear } from "date-fns";

let modal;
let dropDownInner;

function createTask(
  title = "blank",
  desc = "nothing here.",
  dueDate = "",
  priority = "none",
  notes = "empty",
  isCompleted = false
) {
  return {
    title,
    desc,
    isCompleted,
    dueDate,
    priority,
    notes,
  };
}

function createNewTaskModal(task) {
  modal = "";
  modal = document.createElement("div");
  modal.id = "new-task-modal";
  modal.classList.add("modal");

  let modalContent = document.createElement("div");
  let inputDiv = document.createElement("div");
  let btnDiv = document.createElement("div");

  modalContent.id = "modal-content";
  inputDiv.id = "task-modal-input-div";
  btnDiv.id = "task-modal-button-div";

  let taskName = document.createElement(`input`);
  let desc = document.createElement(`input`);

  taskName.type = "text";
  desc.type = "text";

  taskName.placeholder = "Task Title";
  desc.placeholder = "Description";

  let projectCategory = projectDropDownMenu();
  let dueDate = document.createElement(`input`);
  let priority = document.createElement(`input`);
  let notes = document.createElement(`input`);
  let isCompleted = document.createElement(`input`);
  let addBtn = document.createElement("button");
  let cancelBtn = document.createElement("button");

  dueDate.type = "date";
  priority.type = "text";
  notes.type = "text";
  isCompleted.type = "text";

  dueDate.placeholder = "dueDate";
  priority.placeholder = "Priority";
  notes.placeholder = "Notes";
  isCompleted.placeholder = "is Completed";

  addBtn.textContent = "Add";
  cancelBtn.textContent = "Cancel";

  addBtn.addEventListener("click", () => {
    // the button for Add and Update is the same
    // so the if condition checks whether the button is Add or Update
    // at the moment and based on that, it either creates a new entry or
    // modifies an existing one.
    // if the "if clause" is not there in the code, the eventListener
    // gets executed twice!
    if(addBtn.textContent == "Add"){
      if (taskName.value) {
        let date = dueDate.value;
        date = format(date, "dd/LLL/yyyy");
        let task = createTask(
          taskName.value,
          desc.value,
          date,
          priority.value,
          notes.value,
          isCompleted.value
        );
  
        allProjects.forEach((element) => {
          if (element.name == dropDownInner.value) {
            element.tasks.push(task);
          }
        });
        localStorage.setItem("allProjects", JSON.stringify(allProjects));
        filterTasksToBeLoaded(lastBtnClicked);
        document.body.innerHTML = "";
        loadHomePage();
        titleText.textContent = lastBtnClicked;
      }
      modal.style.display = "none";
    }
  });

  cancelBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  // fill up modal based on the values of task on
  // which the edit button is clicked
  if (task) {

    addBtn.textContent = "Update";

    let date = new Date(task.dueDate);
    let day = getDate(date);
    let month = getMonth(date) + 1;
    let year = getYear(date);
    
    //formatting required for changing dueDate.value
    if(day < 10){
      day = "0" + day;
    }

    if(month < 10){
      month = ("0" + month);
    }

    taskName.value = task.title;
    desc.value = task.desc;

    let indexOfCategory;
    let indexOfTask;
    allProjects.forEach((element)=>{
      // if(element.name == lastBtnClicked){
      //   indexOfCategory = allProjects.indexOf(element);
      // }
      console.log(element.name);
      for(let i=0; i<element.tasks.length; i++){
        console.log(element.tasks[i].title);
        if(element.tasks[i] == task){
          indexOfCategory = allProjects.indexOf(element);
          indexOfTask = i;
        }
      }
    });

    if(indexOfCategory){
      projectCategory.firstChild.options[indexOfCategory].selected = true;
    }
    
    
    dueDate.value = `${year}-${month}-${day}`;
    priority.value = task.priority;
    notes.value = task.notes;
    isCompleted.value = task.isCompleted;

    addBtn.addEventListener("click", () => {
      allProjects[indexOfCategory].tasks.splice(indexOfTask, 1);
      if (taskName.value) {
        let date = dueDate.value;
        date = format(date, "dd/LLL/yyyy");
        let task = createTask(
          taskName.value,
          desc.value,
          date,
          priority.value,
          notes.value,
          isCompleted.value
        );
  
        allProjects.forEach((element) => {
          if (element.name == dropDownInner.value) {
            element.tasks.push(task);
          }
        });
        filterTasksToBeLoaded(lastBtnClicked);
        document.body.innerHTML = "";
        loadHomePage();
        titleText.textContent = lastBtnClicked;
      }
      localStorage.setItem("allProjects", JSON.stringify(allProjects));
      modal.style.display = "none";
    });


  }

  inputDiv.appendChild(taskName);
  inputDiv.appendChild(desc);
  inputDiv.appendChild(projectCategory);
  inputDiv.appendChild(dueDate);
  inputDiv.appendChild(priority);
  inputDiv.appendChild(notes);
  inputDiv.appendChild(isCompleted);

  btnDiv.appendChild(addBtn);
  btnDiv.appendChild(cancelBtn);

  modalContent.appendChild(inputDiv);
  modalContent.appendChild(btnDiv);
  modal.appendChild(modalContent);
  return modal;
}

function projectDropDownMenu() {
  let dropDown = document.createElement("div");
  dropDown.classList.add("container");
  dropDownInner = document.createElement("select");

  for (let i = 0; i < allProjects.length; i++) {
    let option = document.createElement("option");
    option.value = allProjects[i].name;
    option.textContent = allProjects[i].name;

    dropDownInner.appendChild(option);
  }

  dropDown.appendChild(dropDownInner);
  return dropDown;
}

export { createTask, createNewTaskModal };
