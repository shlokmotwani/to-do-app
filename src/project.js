import { addToProjects } from "./index";
import { loadHomePage } from "./loadHomePage";

let modal;

function createProject(name) {
  const tasks = [];
  return { name, tasks };
}

function createNewProjectModal() {
  modal = document.createElement("div");
  let modalContent = document.createElement("div");
  let inputDiv = document.createElement("div");
  let btnDiv = document.createElement("div");
  let projectName = document.createElement(`input`);
  let addBtn = document.createElement("button");
  let cancelBtn = document.createElement("button");

  modal.classList.add("modal");
  modal.id = "newProjectModal";
  modalContent.id = "modal-content";

  projectName.type = "text";
  projectName.placeholder = "Project Name";
  addBtn.textContent = "Add";
  cancelBtn.textContent = "Cancel";

  addBtn.addEventListener("click", () => {
    if (projectName.value) {
      let proj = createProject(projectName.value);
      addToProjects(proj);
      document.body.innerHTML = "";
      loadHomePage();
    }
    modal.style.display = "none";
  });

  cancelBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  inputDiv.appendChild(projectName);
  btnDiv.appendChild(addBtn);
  btnDiv.appendChild(cancelBtn);
  modalContent.appendChild(inputDiv);
  modalContent.appendChild(btnDiv);
  modal.appendChild(modalContent);

  return modal;
}
export { createProject, createNewProjectModal };
