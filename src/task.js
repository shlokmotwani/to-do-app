import { allProjects } from "./index";
import { setTasksToLoad, titleText } from "./loadContent";
import { loadHomePage } from "./loadHomePage";
import { loadContent } from "./loadContent";
import { lastBtnClicked } from "./loadSidebar";

let modal;

function createTask(
  title = "Blank",
  desc = "Nothing here.",
  dueDate = "",
  priority = "low",
  notes = "Empty",
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
  modalContent.id = "modal-content";
  let inputDiv = document.createElement("div");
  inputDiv.id = "task-modal-input-div";
  let btnDiv = document.createElement("div");
  btnDiv.id = "task-modal-button-div";

  let taskName = document.createElement(`input`);
  taskName.type = "text";
  taskName.placeholder = "Task Title";

  let desc = document.createElement(`input`);
  desc.type = "text";
  desc.placeholder = "Description";

  let projectCategory = document.createElement(`input`);
  projectCategory.type = "text";
  projectCategory.placeholder = "Project Category";

  let dueDate = document.createElement(`input`);
  dueDate.type = "text";
  dueDate.placeholder = "dueDate";

  let priority = document.createElement(`input`);
  priority.type = "text";
  priority.placeholder = "Priority";

  let notes = document.createElement(`input`);
  notes.type = "text";
  notes.placeholder = "Notes";

  let isCompleted = document.createElement(`input`);
  isCompleted.type = "text";
  isCompleted.placeholder = "is Completed";

  
  let addBtn = document.createElement("button");
  addBtn.textContent = "Add";

  addBtn.addEventListener("click", () => {
    if (taskName.value) {
      let task = createTask(taskName.value,
        desc.value,
        dueDate.value,
        priority.value,
        notes.value,
        isCompleted.value

      );
      allProjects.forEach(element => {
        if(element.name == lastBtnClicked){
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

  let cancelBtn = document.createElement("button");
  cancelBtn.textContent = "Cancel";
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
export { createTask, createNewTaskModal };
