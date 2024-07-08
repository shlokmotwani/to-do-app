import { allProjects } from "./index";
import { setTasksToLoad, titleText } from "./loadContent";
import { loadHomePage } from "./loadHomePage";
import { lastBtnClicked } from "./loadSidebar";
import { format } from "date-fns";

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

function createNewTaskModal() {
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

  projectCategory.placeholder = "Project Category";
  dueDate.placeholder = "dueDate";
  priority.placeholder = "Priority";
  notes.placeholder = "Notes";
  isCompleted.placeholder = "is Completed";

  addBtn.textContent = "Add";
  cancelBtn.textContent = "Cancel";

  addBtn.addEventListener("click", () => {
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
      console.log("dropDownInner = " + dropDownInner.value);
      allProjects.forEach((element) => {
        if (element.name == dropDownInner.value) {
          element.tasks.push(task);
        }
      });
      setTasksToLoad(lastBtnClicked);
      document.body.innerHTML = "";
      loadHomePage();
      titleText.textContent = lastBtnClicked;
      console.log(lastBtnClicked);
    }
    modal.style.display = "none";
  });

  cancelBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

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
