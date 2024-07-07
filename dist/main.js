/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addToProjects: () => (/* binding */ addToProjects),
/* harmony export */   allProjects: () => (/* binding */ allProjects)
/* harmony export */ });
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12);
/* harmony import */ var _loadHomePage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
/* harmony import */ var _loadSidebar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(15);
/* harmony import */ var _modal_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(28);







let allProjects = [];

let gym = (0,_project__WEBPACK_IMPORTED_MODULE_0__.createProject)("Gym");
addToProjects(gym);
let dance = (0,_project__WEBPACK_IMPORTED_MODULE_0__.createProject)("Dance");
addToProjects(dance);
let study = (0,_project__WEBPACK_IMPORTED_MODULE_0__.createProject)("Study");
addToProjects(study);

let gymTaskOne = (0,_task__WEBPACK_IMPORTED_MODULE_1__.createTask)(
  "Go to gym",
  "check out all gyms",
  "01/01/2025",
  "high",
  "leave your house on time",
  true
);

let gymTaskTwo = (0,_task__WEBPACK_IMPORTED_MODULE_1__.createTask)(
  "Finalise Gym Plan",
  "Get done with gym and trainers",
  "01/01/2025",
  "high",
  "choose a trainer with certification"
);

let gymTaskThree = (0,_task__WEBPACK_IMPORTED_MODULE_1__.createTask)(
  "Start working out",
  "Follow PPL routine",
  "01/01/2025",
  "low",
  "Rest for 1-2 minutes in b/w sets"
);

gym.tasks.push(gymTaskOne);
gym.tasks.push(gymTaskTwo);
gym.tasks.push(gymTaskThree);

let studyTaskOne = (0,_task__WEBPACK_IMPORTED_MODULE_1__.createTask)(
  "Go to library",
  "check out all libraries",
  "01/01/2025",
  "high",
  "leave your house on time",
  true
);

let studyTaskTwo = (0,_task__WEBPACK_IMPORTED_MODULE_1__.createTask)(
  "Finalise library Plan",
  "Get done with library incharge",
  "01/01/2025",
  "high",
  "choose a library with good reviews"
);

let studyTaskThree = (0,_task__WEBPACK_IMPORTED_MODULE_1__.createTask)(
  "Start reading more",
  "Follow abc routine",
  "01/01/2025",
  "low",
  "Rest for 5 minutes after 25mins sesh"
);

study.tasks.push(studyTaskOne);
study.tasks.push(studyTaskTwo);
study.tasks.push(studyTaskThree);

(0,_loadHomePage__WEBPACK_IMPORTED_MODULE_2__.loadHomePage)();

//Show all tasks by default
_loadSidebar__WEBPACK_IMPORTED_MODULE_3__.homeCategoryButtons[0].click();
// lastBtnClicked = homeCategoryButtons[0];

function addToProjects(project){
  allProjects.push(project);
}




/***/ }),
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createNewProjectModal: () => (/* binding */ createNewProjectModal),
/* harmony export */   createProject: () => (/* binding */ createProject)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _loadHomePage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);



let modal;

function createProject(name) {
  const tasks = [];
  return { name, tasks };
}

function createNewProjectModal() {
  modal = document.createElement("div");
  modal.id = "newProjectModal";
  modal.classList.add("modal");
  let modalContent = document.createElement("div");
  modalContent.id = "modal-content";
  let inputDiv = document.createElement("div");
  let btnDiv = document.createElement("div");
  let projectName = document.createElement(`input`);
  projectName.type = "text";
  projectName.placeholder = "Project Name";
  let addBtn = document.createElement("button");
  addBtn.textContent = "Add";

  addBtn.addEventListener("click", () => {
    if (projectName.value) {
      let proj = createProject(projectName.value);
      (0,_index__WEBPACK_IMPORTED_MODULE_0__.addToProjects)(proj);
      document.body.innerHTML = "";
      (0,_loadHomePage__WEBPACK_IMPORTED_MODULE_1__.loadHomePage)();
    }
    modal.style.display = "none";
  });

  let cancelBtn = document.createElement("button");
  cancelBtn.textContent = "Cancel";
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


/***/ }),
/* 2 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   homePage: () => (/* binding */ homePage),
/* harmony export */   loadHomePage: () => (/* binding */ loadHomePage)
/* harmony export */ });
/* harmony import */ var _loadHeader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _loadSidebar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _loadContent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11);
/* harmony import */ var _loadFooter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13);





let homePage;

function loadHomePage() {
  homePage = null;
  homePage = document.createElement("div");
  homePage.id = "div-home-page";
  (0,_loadHeader__WEBPACK_IMPORTED_MODULE_0__.loadHeader)();
  (0,_loadSidebar__WEBPACK_IMPORTED_MODULE_1__.loadSidebar)();
  (0,_loadContent__WEBPACK_IMPORTED_MODULE_2__.loadContent)();
  (0,_loadFooter__WEBPACK_IMPORTED_MODULE_3__.loadFooter)();

  homePage.appendChild(_loadHeader__WEBPACK_IMPORTED_MODULE_0__.header);
  homePage.appendChild(_loadSidebar__WEBPACK_IMPORTED_MODULE_1__.sidebar);
  homePage.appendChild(_loadContent__WEBPACK_IMPORTED_MODULE_2__.content);
  homePage.appendChild(_loadFooter__WEBPACK_IMPORTED_MODULE_3__.footer);
  document.body.appendChild(homePage);
}




/***/ }),
/* 3 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   header: () => (/* binding */ header),
/* harmony export */   loadHeader: () => (/* binding */ loadHeader)
/* harmony export */ });
/* harmony import */ var _loadSidebar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _loadHomePage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);



let header;
let headerLeft;
let headerCenter;
let headerRight;
let hideSidebarBtn;
let isSidebarVisible = true;
let logoImage;
let logoText;
let logoTextLeft;
let logoTextRight;

function loadHeader() {
  header = document.createElement("div");
  header.id = "div-header";
  headerLeft = document.createElement("div");
  headerLeft.id = "div-header-left";
  headerCenter = document.createElement("div");
  headerCenter.id = "div-header-center";
  headerRight = document.createElement("div");
  headerRight.id = "div-header-right";

  hideSidebarBtn = document.createElement("button");
  hideSidebarBtn.id = "hide-sidebar-btn";
  headerLeft.appendChild(hideSidebarBtn);
  header.appendChild(headerLeft);
  header.appendChild(headerCenter);
  header.appendChild(headerRight);

  hideSidebarBtn.addEventListener("click", () => {
    console.log("Hide Sidebar Button clicked");
    if (isSidebarVisible) {
      isSidebarVisible = false;
      _loadSidebar__WEBPACK_IMPORTED_MODULE_0__.sidebar.style.cssText = `
          display: none;`;

      _loadHomePage__WEBPACK_IMPORTED_MODULE_1__.homePage.style.cssText = `display: grid;
      grid-template-columns: 200px 1fr;
      grid-template-rows: 7fr 90fr 3fr;
      grid-template-areas: 
      "hdr hdr"
      "cnt cnt"
      "ftr ftr";`;

    } else {
      isSidebarVisible = true;
      _loadSidebar__WEBPACK_IMPORTED_MODULE_0__.sidebar.style.cssText = `
          display: block;`;

      _loadHomePage__WEBPACK_IMPORTED_MODULE_1__.homePage.style.cssText = `display: grid;
      grid-template-columns: 200px 1fr;
      grid-template-rows: 7fr 90fr 3fr;
      grid-template-areas: 
      "hdr hdr"
      "sbr cnt"
      "ftr ftr";`;
    }
  });

  logoImage = document.createElement("div");
  logoImage.id = "logo-image";
  logoText = document.createElement("div");
  logoText.id = "logo-text";
  logoTextLeft = document.createElement("span");
  logoTextLeft.id = "logo-text-left";
  logoTextLeft.textContent = "To";
  logoTextRight = document.createElement("span");
  logoTextRight.id = "logo-text-right";
  logoTextRight.textContent = "Do";
  logoText.appendChild(logoTextLeft);
  logoText.appendChild(logoTextRight);

  headerCenter.appendChild(logoImage);
  headerCenter.appendChild(logoText);
}




/***/ }),
/* 4 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   homeCategoryButtons: () => (/* binding */ homeCategoryButtons),
/* harmony export */   lastBtnClicked: () => (/* binding */ lastBtnClicked),
/* harmony export */   loadProjectCard: () => (/* binding */ loadProjectCard),
/* harmony export */   loadSidebar: () => (/* binding */ loadSidebar),
/* harmony export */   sidebar: () => (/* binding */ sidebar)
/* harmony export */ });
/* harmony import */ var _icons_inbox_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var _icons_calendar_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _icons_content_duplicate_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7);
/* harmony import */ var _icons_star_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8);
/* harmony import */ var _icons_minus_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9);
/* harmony import */ var _icons_plus_box_outline_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(10);
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(0);
/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1);
/* harmony import */ var _loadContent_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(11);














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

allTasksIcon.src = _icons_inbox_svg__WEBPACK_IMPORTED_MODULE_0__;
todayIcon.src = _icons_calendar_svg__WEBPACK_IMPORTED_MODULE_1__;
next7daysIcon.src = _icons_content_duplicate_svg__WEBPACK_IMPORTED_MODULE_2__;
importantIcon.src = _icons_star_svg__WEBPACK_IMPORTED_MODULE_3__;
plusIcon.src = _icons_plus_box_outline_svg__WEBPACK_IMPORTED_MODULE_5__;

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
  homeCard.id = "home-card";

  homeCardTitle = document.createElement("p");
  homeCardTitle.textContent = "Home";
  homeCardLine = document.createElement("hr");

  homeCard.appendChild(homeCardTitle);
  homeCard.appendChild(homeCardLine);

  for (let i = 0; i < homeCategories.length; i++) {
    let category = document.createElement("div");
    category.classList.add("home-categories");
    let categoryIcon = document.createElement("div");
    categoryIcon.appendChild(homeCategories[i].icon);

    let categoryText = document.createElement("p");
    categoryText.textContent = homeCategories[i].text;

    category.appendChild(categoryIcon);
    category.appendChild(categoryText);

    // console.log(category);

    homeCategoryButtons.push(category);

    category.addEventListener("click", () => {
      _loadContent_js__WEBPACK_IMPORTED_MODULE_8__.titleText.textContent = homeCategories[i].text;
      (0,_loadContent_js__WEBPACK_IMPORTED_MODULE_8__.setTasksToLoad)(homeCategories[i].text);
      (0,_loadContent_js__WEBPACK_IMPORTED_MODULE_8__.loadTaskCard)();
      lastBtnClicked = homeCategories[i].text;
    });

    homeCard.appendChild(category);
  }
}

function loadProjectCard() {
  projectCard = null;
  projectCard = document.createElement("div");
  projectCard.id = "project-card";

  projectCardTitle = document.createElement("p");
  projectCardTitle.textContent = "Projects";
  projectCardLine = document.createElement("hr");

  projectCard.appendChild(projectCardTitle);
  projectCard.appendChild(projectCardLine);

  for (let i = 0; i < _index_js__WEBPACK_IMPORTED_MODULE_6__.allProjects.length; i++) {
    let project = document.createElement("div");
    project.classList.add("project-categories");
    let projectIcon = document.createElement("div");

    // minusIcon has to be re-created in the loop
    // to append multiple unique elements to the project div
    minusIcon = new Image();
    minusIcon.src = _icons_minus_svg__WEBPACK_IMPORTED_MODULE_4__;
    projectIcon.appendChild(minusIcon);

    let projectText = document.createElement("p");
    projectText.textContent = _index_js__WEBPACK_IMPORTED_MODULE_6__.allProjects[i].name;

    project.appendChild(projectIcon);
    project.appendChild(projectText);

    project.addEventListener("click", () => {
      _loadContent_js__WEBPACK_IMPORTED_MODULE_8__.titleText.textContent = projectText.textContent;
      (0,_loadContent_js__WEBPACK_IMPORTED_MODULE_8__.setTasksToLoad)(projectText.textContent);
      (0,_loadContent_js__WEBPACK_IMPORTED_MODULE_8__.loadTaskCard)();
      lastBtnClicked = _loadContent_js__WEBPACK_IMPORTED_MODULE_8__.titleText.textContent;
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
  console.log("addNewProject clicked");

  let modal = (0,_project_js__WEBPACK_IMPORTED_MODULE_7__.createNewProjectModal)();
  modal.style.display = "block";
  _loadContent_js__WEBPACK_IMPORTED_MODULE_8__.content.append(modal);

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
}




/***/ }),
/* 5 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "132b9ad81c7ef042e32e.svg";

/***/ }),
/* 6 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5b4d79f7efb5719f9534.svg";

/***/ }),
/* 7 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f75c61a660fbef6ec2e1.svg";

/***/ }),
/* 8 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c024c4137cd9afc2fb40.svg";

/***/ }),
/* 9 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "272e9cf8ae24c9a1cfc4.svg";

/***/ }),
/* 10 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "de7aff6cb1c57b33c2db.svg";

/***/ }),
/* 11 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   content: () => (/* binding */ content),
/* harmony export */   loadContent: () => (/* binding */ loadContent),
/* harmony export */   loadTaskCard: () => (/* binding */ loadTaskCard),
/* harmony export */   setTasksToLoad: () => (/* binding */ setTasksToLoad),
/* harmony export */   titleText: () => (/* binding */ titleText)
/* harmony export */ });
/* harmony import */ var _icons_plus_box_outline_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(12);
let content;
let innerDiv;
let titleText;
let addNewTaskBtn;
let tasksDiv;
let tasksToLoad = [];






function loadContent() {
  content = null;
  addNewTaskBtn = document.createElement("div");
  addNewTaskBtn.id = "add-task-button";
  let plusIcon = new Image();
  plusIcon.src = _icons_plus_box_outline_svg__WEBPACK_IMPORTED_MODULE_0__;
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
    for (let i = 0; i < _index__WEBPACK_IMPORTED_MODULE_1__.allProjects.length; i++) {
      for (let j = 0; j < _index__WEBPACK_IMPORTED_MODULE_1__.allProjects[i].tasks.length; j++) {
        tasksToLoad.push(_index__WEBPACK_IMPORTED_MODULE_1__.allProjects[i].tasks[j]);
      }
    }
  } else {
    for (let i = 0; i < _index__WEBPACK_IMPORTED_MODULE_1__.allProjects.length; i++) {
      if (_index__WEBPACK_IMPORTED_MODULE_1__.allProjects[i].name == projectName) {
        tasksToLoad.push(..._index__WEBPACK_IMPORTED_MODULE_1__.allProjects[i].tasks);
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

  let modal = (0,_task__WEBPACK_IMPORTED_MODULE_2__.createNewTaskModal)();
  modal.style.display = "block";
  content.append(modal);

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
}




/***/ }),
/* 12 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createNewTaskModal: () => (/* binding */ createNewTaskModal),
/* harmony export */   createTask: () => (/* binding */ createTask)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _loadContent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11);
/* harmony import */ var _loadHomePage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
/* harmony import */ var _loadSidebar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4);






let modal;
let dropDownInner;

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

  // let projectCategory = document.createElement(`input`);
  // projectCategory.type = "text";
  // projectCategory.placeholder = "Project Category";

  let projectCategory = projectDropDownMenu();
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
      console.log("DDI = " + dropDownInner.value);
      _index__WEBPACK_IMPORTED_MODULE_0__.allProjects.forEach(element => {
        if(element.name == dropDownInner.value){
          element.tasks.push(task);
        }
      });
      (0,_loadContent__WEBPACK_IMPORTED_MODULE_1__.setTasksToLoad)(_loadSidebar__WEBPACK_IMPORTED_MODULE_3__.lastBtnClicked);
      document.body.innerHTML = "";
      (0,_loadHomePage__WEBPACK_IMPORTED_MODULE_2__.loadHomePage)();
      _loadContent__WEBPACK_IMPORTED_MODULE_1__.titleText.textContent = _loadSidebar__WEBPACK_IMPORTED_MODULE_3__.lastBtnClicked;
      console.log(_loadSidebar__WEBPACK_IMPORTED_MODULE_3__.lastBtnClicked);
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

function projectDropDownMenu(){
  let dropDown = document.createElement('div');
  dropDown.classList.add('container');
  dropDownInner = document.createElement('select');

  for(let i=0; i<_index__WEBPACK_IMPORTED_MODULE_0__.allProjects.length; i++){
    let option = document.createElement('option');
    option.value = _index__WEBPACK_IMPORTED_MODULE_0__.allProjects[i].name;
    option.textContent = _index__WEBPACK_IMPORTED_MODULE_0__.allProjects[i].name;

    dropDownInner.appendChild(option);
  }

  dropDown.appendChild(dropDownInner);
  return dropDown;
}





/***/ }),
/* 13 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   footer: () => (/* binding */ footer),
/* harmony export */   loadFooter: () => (/* binding */ loadFooter)
/* harmony export */ });
/* harmony import */ var _icons_heart_icon_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14);
let footer;
let wrapper;
let leftDiv;
let centerDiv;
let rightDiv;



function loadFooter() {
  footer = document.createElement("div");
  footer.id = "div-footer";

  wrapper = document.createElement("div");

  leftDiv = document.createElement("div");
  leftDiv.textContent = "made with ";
  centerDiv = document.createElement("div");
  let heartIcon = new Image();
  heartIcon.src = _icons_heart_icon_svg__WEBPACK_IMPORTED_MODULE_0__;
  centerDiv.appendChild(heartIcon);
  rightDiv = document.createElement("div");
  let text = document.createElement("span");
  text.textContent = " by ";
  let link = document.createElement("a");
  link.textContent = "shlok.codes";
  link.href = "https://github.com/shlokmotwani";
  link.target = "_blank";

  rightDiv.appendChild(text);
  rightDiv.appendChild(link);

  wrapper.appendChild(leftDiv);
  wrapper.appendChild(centerDiv);
  wrapper.appendChild(rightDiv);

  footer.appendChild(wrapper);
}




/***/ }),
/* 14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e1fb78d58d2137315854.svg";

/***/ }),
/* 15 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(20);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(21);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(22);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),
/* 16 */
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),
/* 17 */
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),
/* 18 */
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),
/* 19 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),
/* 20 */
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),
/* 21 */
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),
/* 22 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(25);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(26), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(27), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
  --sidebar-bg-color: rgba(255, 255, 255, 0);
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html,
body {
  width: 100%;
  height: 100%;
}

div {
  width: 100%;
  height: 100%;
}

/* any change here should also be made in loadHeader.js */
#div-home-page {
  min-height: 800px;
  min-height: 800px;
  display: grid;
  grid-template-columns: 200px 1fr;
  grid-template-rows: 7fr 90fr 3fr;
  grid-template-areas:
    "hdr hdr"
    "sbr cnt"
    "ftr ftr";
}

#div-header {
  grid-area: hdr;
  display: flex;
  justify-content: space-between;
}

#div-header-left {
  width: 20%;
  display: flex;
  align-items: center;
}

#div-header-center,
#logo-text {
  display: flex;
  justify-content: center;
  align-items: center;
}

#logo-image {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  background-repeat: no-repeat;
  width: 70px;
  height: 70px;
}

#logo-text {
  width: fit-content;
  height: fit-content;
  font-size: 3.5rem;
  font-weight: bold;
}

#logo-text-right {
  color: green;
}

#div-header-right {
  width: 20%;
}

#hide-sidebar-btn {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
  background-repeat: no-repeat;
  background-color: var(--sidebar-bg-color);
  width: 40px;
  height: 40px;
  margin-left: 20px;
  border: none;
}

#div-sidebar {
  grid-area: sbr;
  display: flex;
  flex-direction: column;
  height: fit-content;
}

#home-card,
#project-card {
  padding: 20px;
  height: 50%;
  /* border: 1px solid black; */
}

#home-card > div:hover,
#project-card > div:hover {
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 7px;
  cursor: pointer;
}

/* home card and project card titles */
#home-card > p,
#project-card > p {
  font-size: 2rem;
  margin-bottom: 10px;
}

/* home card categories */
#home-card > div,
#project-card > div {
  display: flex;
  height: fit-content;
  margin-top: 30px;
  align-items: center;
  font-size: 1rem;
  padding: 2px;
}

#home-card > div > div:first-child,
#project-card > div > div:first-child {
  width: 2rem;
  height: 2rem;
}

#project-card > div:last-child {
  display: flex;
  justify-content: center;
  border: 1px dashed rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  padding: 5px;
}

#div-content {
  background-color: green;
  grid-area: cnt;
}

#div-innerDiv {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: brown;
}

#content-title {
  background-color: aqua;
  flex: 1;
  font-size: 2.7rem;
  display: flex;
  align-items: center;
  border-radius: 10px;
  width: 70%;
  height: 50%;
}

#content-title > span {
  margin-left: 50px;
}

#content-tasks {
  background-color: yellowgreen;
  flex: 10;
  display: flex;
  flex-direction: column;
  height: fit-content;
  width: 70%;
  min-width: 800px;
}

#content-tasks > div{
  border: 2px solid black;
  border-radius: 15px;
  height: fit-content;
  padding: 20px;
  margin: 10px 0;
  display: flex;
}

#content-tasks > div > div{
  border: 1px solid black;
  text-align: center;
}

#add-task-button {
  position: fixed;
  top: 90%;
left: 95%;
  transform: translate(-50%, -50%);
  width: 50px;
  height: 50px;
}

#div-footer {
  grid-area: ftr;
  display: flex;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.75);
}

#div-footer > div {
  display: flex;
  justify-content: center;
  padding-top: 5px;
  width: 400px;
}

#div-footer > div > div {
  width: fit-content;
  font-size: 1.3rem;
  color: antiquewhite;
}

#div-footer a {
  color: antiquewhite;
}

/* heart logo */
#div-footer > div > div:nth-child(2) {
  width: 1.5rem;
  margin: 0 4px;
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,0CAA0C;AAC5C;;AAEA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;;AAEA;;EAEE,WAAW;EACX,YAAY;AACd;;AAEA;EACE,WAAW;EACX,YAAY;AACd;;AAEA,yDAAyD;AACzD;EACE,iBAAiB;EACjB,iBAAiB;EACjB,aAAa;EACb,gCAAgC;EAChC,gCAAgC;EAChC;;;aAGW;AACb;;AAEA;EACE,cAAc;EACd,aAAa;EACb,8BAA8B;AAChC;;AAEA;EACE,UAAU;EACV,aAAa;EACb,mBAAmB;AACrB;;AAEA;;EAEE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,yDAA4C;EAC5C,4BAA4B;EAC5B,WAAW;EACX,YAAY;AACd;;AAEA;EACE,kBAAkB;EAClB,mBAAmB;EACnB,iBAAiB;EACjB,iBAAiB;AACnB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,yDAAiD;EACjD,4BAA4B;EAC5B,yCAAyC;EACzC,WAAW;EACX,YAAY;EACZ,iBAAiB;EACjB,YAAY;AACd;;AAEA;EACE,cAAc;EACd,aAAa;EACb,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA;;EAEE,aAAa;EACb,WAAW;EACX,6BAA6B;AAC/B;;AAEA;;EAEE,oCAAoC;EACpC,kBAAkB;EAClB,eAAe;AACjB;;AAEA,sCAAsC;AACtC;;EAEE,eAAe;EACf,mBAAmB;AACrB;;AAEA,yBAAyB;AACzB;;EAEE,aAAa;EACb,mBAAmB;EACnB,gBAAgB;EAChB,mBAAmB;EACnB,eAAe;EACf,YAAY;AACd;;AAEA;;EAEE,WAAW;EACX,YAAY;AACd;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,qCAAqC;EACrC,mBAAmB;EACnB,YAAY;AACd;;AAEA;EACE,uBAAuB;EACvB,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,WAAW;EACX,YAAY;EACZ,uBAAuB;AACzB;;AAEA;EACE,sBAAsB;EACtB,OAAO;EACP,iBAAiB;EACjB,aAAa;EACb,mBAAmB;EACnB,mBAAmB;EACnB,UAAU;EACV,WAAW;AACb;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,6BAA6B;EAC7B,QAAQ;EACR,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,UAAU;EACV,gBAAgB;AAClB;;AAEA;EACE,uBAAuB;EACvB,mBAAmB;EACnB,mBAAmB;EACnB,aAAa;EACb,cAAc;EACd,aAAa;AACf;;AAEA;EACE,uBAAuB;EACvB,kBAAkB;AACpB;;AAEA;EACE,eAAe;EACf,QAAQ;AACV,SAAS;EACP,gCAAgC;EAChC,WAAW;EACX,YAAY;AACd;;AAEA;EACE,cAAc;EACd,aAAa;EACb,uBAAuB;EACvB,qCAAqC;AACvC;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,gBAAgB;EAChB,YAAY;AACd;;AAEA;EACE,kBAAkB;EAClB,iBAAiB;EACjB,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;AACrB;;AAEA,eAAe;AACf;EACE,aAAa;EACb,aAAa;AACf","sourcesContent":[":root {\n  --sidebar-bg-color: rgba(255, 255, 255, 0);\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nhtml,\nbody {\n  width: 100%;\n  height: 100%;\n}\n\ndiv {\n  width: 100%;\n  height: 100%;\n}\n\n/* any change here should also be made in loadHeader.js */\n#div-home-page {\n  min-height: 800px;\n  min-height: 800px;\n  display: grid;\n  grid-template-columns: 200px 1fr;\n  grid-template-rows: 7fr 90fr 3fr;\n  grid-template-areas:\n    \"hdr hdr\"\n    \"sbr cnt\"\n    \"ftr ftr\";\n}\n\n#div-header {\n  grid-area: hdr;\n  display: flex;\n  justify-content: space-between;\n}\n\n#div-header-left {\n  width: 20%;\n  display: flex;\n  align-items: center;\n}\n\n#div-header-center,\n#logo-text {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n#logo-image {\n  background-image: url(./icons/check-all.svg);\n  background-repeat: no-repeat;\n  width: 70px;\n  height: 70px;\n}\n\n#logo-text {\n  width: fit-content;\n  height: fit-content;\n  font-size: 3.5rem;\n  font-weight: bold;\n}\n\n#logo-text-right {\n  color: green;\n}\n\n#div-header-right {\n  width: 20%;\n}\n\n#hide-sidebar-btn {\n  background-image: url(./icons/hamburger-icon.svg);\n  background-repeat: no-repeat;\n  background-color: var(--sidebar-bg-color);\n  width: 40px;\n  height: 40px;\n  margin-left: 20px;\n  border: none;\n}\n\n#div-sidebar {\n  grid-area: sbr;\n  display: flex;\n  flex-direction: column;\n  height: fit-content;\n}\n\n#home-card,\n#project-card {\n  padding: 20px;\n  height: 50%;\n  /* border: 1px solid black; */\n}\n\n#home-card > div:hover,\n#project-card > div:hover {\n  background-color: rgba(0, 0, 0, 0.1);\n  border-radius: 7px;\n  cursor: pointer;\n}\n\n/* home card and project card titles */\n#home-card > p,\n#project-card > p {\n  font-size: 2rem;\n  margin-bottom: 10px;\n}\n\n/* home card categories */\n#home-card > div,\n#project-card > div {\n  display: flex;\n  height: fit-content;\n  margin-top: 30px;\n  align-items: center;\n  font-size: 1rem;\n  padding: 2px;\n}\n\n#home-card > div > div:first-child,\n#project-card > div > div:first-child {\n  width: 2rem;\n  height: 2rem;\n}\n\n#project-card > div:last-child {\n  display: flex;\n  justify-content: center;\n  border: 1px dashed rgba(0, 0, 0, 0.3);\n  border-radius: 10px;\n  padding: 5px;\n}\n\n#div-content {\n  background-color: green;\n  grid-area: cnt;\n}\n\n#div-innerDiv {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  background-color: brown;\n}\n\n#content-title {\n  background-color: aqua;\n  flex: 1;\n  font-size: 2.7rem;\n  display: flex;\n  align-items: center;\n  border-radius: 10px;\n  width: 70%;\n  height: 50%;\n}\n\n#content-title > span {\n  margin-left: 50px;\n}\n\n#content-tasks {\n  background-color: yellowgreen;\n  flex: 10;\n  display: flex;\n  flex-direction: column;\n  height: fit-content;\n  width: 70%;\n  min-width: 800px;\n}\n\n#content-tasks > div{\n  border: 2px solid black;\n  border-radius: 15px;\n  height: fit-content;\n  padding: 20px;\n  margin: 10px 0;\n  display: flex;\n}\n\n#content-tasks > div > div{\n  border: 1px solid black;\n  text-align: center;\n}\n\n#add-task-button {\n  position: fixed;\n  top: 90%;\nleft: 95%;\n  transform: translate(-50%, -50%);\n  width: 50px;\n  height: 50px;\n}\n\n#div-footer {\n  grid-area: ftr;\n  display: flex;\n  justify-content: center;\n  background-color: rgba(0, 0, 0, 0.75);\n}\n\n#div-footer > div {\n  display: flex;\n  justify-content: center;\n  padding-top: 5px;\n  width: 400px;\n}\n\n#div-footer > div > div {\n  width: fit-content;\n  font-size: 1.3rem;\n  color: antiquewhite;\n}\n\n#div-footer a {\n  color: antiquewhite;\n}\n\n/* heart logo */\n#div-footer > div > div:nth-child(2) {\n  width: 1.5rem;\n  margin: 0 4px;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 23 */
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),
/* 24 */
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),
/* 25 */
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),
/* 26 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "498fb8e2c7cf437f5146.svg";

/***/ }),
/* 27 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2d4061552fac064ed076.svg";

/***/ }),
/* 28 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(20);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(21);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_modal_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(29);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_modal_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_modal_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_modal_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_modal_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),
/* 29 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root{
    --add-button-color: green;
    --cancel-button-color: tomato;
}

.modal {
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: visible; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.7); /* Black w/ opacity */
}

.modal > div{
    border: 1px solid white;
    position: fixed;
    top: 45%;
    left: 50%;
  transform: translate(-50%, -50%);
    width: 500px;
    height: 150px;
}

#modal-content{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
}

#modal-content > div{
    display: flex;
    justify-content: center;
    align-items: center;
}

#modal-content input,
#modal-content button{
    font-size: 1.2rem;
    padding: 5px;
    margin: 0 30px;
}

#modal-content input{
    width: 75%;
}

#modal-content button{
    width: 30%;
}

#modal-content button:first-child{
    background-color: var(--add-button-color);
}

#modal-content button:last-child{
    background-color: var(--cancel-button-color);
}

.modal > #modal-content{
    width: 800px;
    height: fit-content;
    padding: 50px;
}

.modal > #modal-content > #task-modal-input-div{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.modal > #modal-content > #task-modal-input-div > input{
    margin: 20px 0;
}

#new-task-modal > #modal-content > #task-modal-input-div > .container > #drop-down-button{
    background-color: antiquewhite;
    margin: 20px 0;
    width: fit-content;
}

#new-task-modal > #modal-content > #task-modal-input-div > .container{
    display: flex;
    margin-left: 180px;
}

#new-task-modal > #modal-content > #task-modal-input-div > .container > select{
    background-color: antiquewhite;
    margin: 20px 0;
    width: 25%;
    font-size: 1.0rem;
    padding: 8px 15px;
}

#task-modal-button-div{
    margin-top: 40px;
}`, "",{"version":3,"sources":["webpack://./src/modal.css"],"names":[],"mappings":"AAAA;IACI,yBAAyB;IACzB,6BAA6B;AACjC;;AAEA;EACE,aAAa,EAAE,sBAAsB;EACrC,eAAe,EAAE,kBAAkB;EACnC,UAAU,EAAE,eAAe;EAC3B,QAAQ;EACR,SAAS;EACT,gCAAgC;EAChC,WAAW,EAAE,eAAe;EAC5B,YAAY,EAAE,gBAAgB;EAC9B,iBAAiB,EAAE,4BAA4B;EAC/C,8BAA8B,EAAE,mBAAmB;EACnD,oCAAoC,EAAE,qBAAqB;AAC7D;;AAEA;IACI,uBAAuB;IACvB,eAAe;IACf,QAAQ;IACR,SAAS;EACX,gCAAgC;IAC9B,YAAY;IACZ,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;;IAEI,iBAAiB;IACjB,YAAY;IACZ,cAAc;AAClB;;AAEA;IACI,UAAU;AACd;;AAEA;IACI,UAAU;AACd;;AAEA;IACI,yCAAyC;AAC7C;;AAEA;IACI,4CAA4C;AAChD;;AAEA;IACI,YAAY;IACZ,mBAAmB;IACnB,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,8BAA8B;IAC9B,cAAc;IACd,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,kBAAkB;AACtB;;AAEA;IACI,8BAA8B;IAC9B,cAAc;IACd,UAAU;IACV,iBAAiB;IACjB,iBAAiB;AACrB;;AAEA;IACI,gBAAgB;AACpB","sourcesContent":[":root{\n    --add-button-color: green;\n    --cancel-button-color: tomato;\n}\n\n.modal {\n  display: none; /* Hidden by default */\n  position: fixed; /* Stay in place */\n  z-index: 1; /* Sit on top */\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 100%; /* Full width */\n  height: 100%; /* Full height */\n  overflow: visible; /* Enable scroll if needed */\n  background-color: rgb(0, 0, 0); /* Fallback color */\n  background-color: rgba(0, 0, 0, 0.7); /* Black w/ opacity */\n}\n\n.modal > div{\n    border: 1px solid white;\n    position: fixed;\n    top: 45%;\n    left: 50%;\n  transform: translate(-50%, -50%);\n    width: 500px;\n    height: 150px;\n}\n\n#modal-content{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    padding: 10px;\n}\n\n#modal-content > div{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n#modal-content input,\n#modal-content button{\n    font-size: 1.2rem;\n    padding: 5px;\n    margin: 0 30px;\n}\n\n#modal-content input{\n    width: 75%;\n}\n\n#modal-content button{\n    width: 30%;\n}\n\n#modal-content button:first-child{\n    background-color: var(--add-button-color);\n}\n\n#modal-content button:last-child{\n    background-color: var(--cancel-button-color);\n}\n\n.modal > #modal-content{\n    width: 800px;\n    height: fit-content;\n    padding: 50px;\n}\n\n.modal > #modal-content > #task-modal-input-div{\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\n.modal > #modal-content > #task-modal-input-div > input{\n    margin: 20px 0;\n}\n\n#new-task-modal > #modal-content > #task-modal-input-div > .container > #drop-down-button{\n    background-color: antiquewhite;\n    margin: 20px 0;\n    width: fit-content;\n}\n\n#new-task-modal > #modal-content > #task-modal-input-div > .container{\n    display: flex;\n    margin-left: 180px;\n}\n\n#new-task-modal > #modal-content > #task-modal-input-div > .container > select{\n    background-color: antiquewhite;\n    margin: 20px 0;\n    width: 25%;\n    font-size: 1.0rem;\n    padding: 8px 15px;\n}\n\n#task-modal-button-div{\n    margin-top: 40px;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			0: 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__(0);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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b3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1hcHAvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vc3JjL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vc3JjL2xvYWRIb21lUGFnZS5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9zcmMvbG9hZEhlYWRlci5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9zcmMvbG9hZFNpZGViYXIuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vc3JjL2xvYWRDb250ZW50LmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL3NyYy90YXNrLmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL3NyYy9sb2FkRm9vdGVyLmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL3NyYy9tb2RhbC5jc3M/M2ZkOSIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9zcmMvbW9kYWwuY3NzIiwid2VicGFjazovL3RvLWRvLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90by1kby1hcHAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90by1kby1hcHAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90by1kby1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90by1kby1hcHAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3RvLWRvLWFwcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly90by1kby1hcHAvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVByb2plY3QgfSBmcm9tIFwiLi9wcm9qZWN0XCI7XG5pbXBvcnQgeyBjcmVhdGVUYXNrIH0gZnJvbSBcIi4vdGFza1wiO1xuaW1wb3J0IHsgbG9hZEhvbWVQYWdlIH0gZnJvbSBcIi4vbG9hZEhvbWVQYWdlXCI7XG5pbXBvcnQgeyBob21lQ2F0ZWdvcnlCdXR0b25zLCBsYXN0QnRuQ2xpY2tlZCB9IGZyb20gXCIuL2xvYWRTaWRlYmFyXCI7XG5pbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IFwiLi9tb2RhbC5jc3NcIjtcblxubGV0IGFsbFByb2plY3RzID0gW107XG5cbmxldCBneW0gPSBjcmVhdGVQcm9qZWN0KFwiR3ltXCIpO1xuYWRkVG9Qcm9qZWN0cyhneW0pO1xubGV0IGRhbmNlID0gY3JlYXRlUHJvamVjdChcIkRhbmNlXCIpO1xuYWRkVG9Qcm9qZWN0cyhkYW5jZSk7XG5sZXQgc3R1ZHkgPSBjcmVhdGVQcm9qZWN0KFwiU3R1ZHlcIik7XG5hZGRUb1Byb2plY3RzKHN0dWR5KTtcblxubGV0IGd5bVRhc2tPbmUgPSBjcmVhdGVUYXNrKFxuICBcIkdvIHRvIGd5bVwiLFxuICBcImNoZWNrIG91dCBhbGwgZ3ltc1wiLFxuICBcIjAxLzAxLzIwMjVcIixcbiAgXCJoaWdoXCIsXG4gIFwibGVhdmUgeW91ciBob3VzZSBvbiB0aW1lXCIsXG4gIHRydWVcbik7XG5cbmxldCBneW1UYXNrVHdvID0gY3JlYXRlVGFzayhcbiAgXCJGaW5hbGlzZSBHeW0gUGxhblwiLFxuICBcIkdldCBkb25lIHdpdGggZ3ltIGFuZCB0cmFpbmVyc1wiLFxuICBcIjAxLzAxLzIwMjVcIixcbiAgXCJoaWdoXCIsXG4gIFwiY2hvb3NlIGEgdHJhaW5lciB3aXRoIGNlcnRpZmljYXRpb25cIlxuKTtcblxubGV0IGd5bVRhc2tUaHJlZSA9IGNyZWF0ZVRhc2soXG4gIFwiU3RhcnQgd29ya2luZyBvdXRcIixcbiAgXCJGb2xsb3cgUFBMIHJvdXRpbmVcIixcbiAgXCIwMS8wMS8yMDI1XCIsXG4gIFwibG93XCIsXG4gIFwiUmVzdCBmb3IgMS0yIG1pbnV0ZXMgaW4gYi93IHNldHNcIlxuKTtcblxuZ3ltLnRhc2tzLnB1c2goZ3ltVGFza09uZSk7XG5neW0udGFza3MucHVzaChneW1UYXNrVHdvKTtcbmd5bS50YXNrcy5wdXNoKGd5bVRhc2tUaHJlZSk7XG5cbmxldCBzdHVkeVRhc2tPbmUgPSBjcmVhdGVUYXNrKFxuICBcIkdvIHRvIGxpYnJhcnlcIixcbiAgXCJjaGVjayBvdXQgYWxsIGxpYnJhcmllc1wiLFxuICBcIjAxLzAxLzIwMjVcIixcbiAgXCJoaWdoXCIsXG4gIFwibGVhdmUgeW91ciBob3VzZSBvbiB0aW1lXCIsXG4gIHRydWVcbik7XG5cbmxldCBzdHVkeVRhc2tUd28gPSBjcmVhdGVUYXNrKFxuICBcIkZpbmFsaXNlIGxpYnJhcnkgUGxhblwiLFxuICBcIkdldCBkb25lIHdpdGggbGlicmFyeSBpbmNoYXJnZVwiLFxuICBcIjAxLzAxLzIwMjVcIixcbiAgXCJoaWdoXCIsXG4gIFwiY2hvb3NlIGEgbGlicmFyeSB3aXRoIGdvb2QgcmV2aWV3c1wiXG4pO1xuXG5sZXQgc3R1ZHlUYXNrVGhyZWUgPSBjcmVhdGVUYXNrKFxuICBcIlN0YXJ0IHJlYWRpbmcgbW9yZVwiLFxuICBcIkZvbGxvdyBhYmMgcm91dGluZVwiLFxuICBcIjAxLzAxLzIwMjVcIixcbiAgXCJsb3dcIixcbiAgXCJSZXN0IGZvciA1IG1pbnV0ZXMgYWZ0ZXIgMjVtaW5zIHNlc2hcIlxuKTtcblxuc3R1ZHkudGFza3MucHVzaChzdHVkeVRhc2tPbmUpO1xuc3R1ZHkudGFza3MucHVzaChzdHVkeVRhc2tUd28pO1xuc3R1ZHkudGFza3MucHVzaChzdHVkeVRhc2tUaHJlZSk7XG5cbmxvYWRIb21lUGFnZSgpO1xuXG4vL1Nob3cgYWxsIHRhc2tzIGJ5IGRlZmF1bHRcbmhvbWVDYXRlZ29yeUJ1dHRvbnNbMF0uY2xpY2soKTtcbi8vIGxhc3RCdG5DbGlja2VkID0gaG9tZUNhdGVnb3J5QnV0dG9uc1swXTtcblxuZnVuY3Rpb24gYWRkVG9Qcm9qZWN0cyhwcm9qZWN0KXtcbiAgYWxsUHJvamVjdHMucHVzaChwcm9qZWN0KTtcbn1cblxuZXhwb3J0IHsgYWxsUHJvamVjdHMsIGFkZFRvUHJvamVjdHMgfTtcbiIsImltcG9ydCB7IGFkZFRvUHJvamVjdHMgfSBmcm9tIFwiLi9pbmRleFwiO1xuaW1wb3J0IHsgbG9hZEhvbWVQYWdlIH0gZnJvbSBcIi4vbG9hZEhvbWVQYWdlXCI7XG5cbmxldCBtb2RhbDtcblxuZnVuY3Rpb24gY3JlYXRlUHJvamVjdChuYW1lKSB7XG4gIGNvbnN0IHRhc2tzID0gW107XG4gIHJldHVybiB7IG5hbWUsIHRhc2tzIH07XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU5ld1Byb2plY3RNb2RhbCgpIHtcbiAgbW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBtb2RhbC5pZCA9IFwibmV3UHJvamVjdE1vZGFsXCI7XG4gIG1vZGFsLmNsYXNzTGlzdC5hZGQoXCJtb2RhbFwiKTtcbiAgbGV0IG1vZGFsQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG1vZGFsQ29udGVudC5pZCA9IFwibW9kYWwtY29udGVudFwiO1xuICBsZXQgaW5wdXREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBsZXQgYnRuRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbGV0IHByb2plY3ROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgaW5wdXRgKTtcbiAgcHJvamVjdE5hbWUudHlwZSA9IFwidGV4dFwiO1xuICBwcm9qZWN0TmFtZS5wbGFjZWhvbGRlciA9IFwiUHJvamVjdCBOYW1lXCI7XG4gIGxldCBhZGRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBhZGRCdG4udGV4dENvbnRlbnQgPSBcIkFkZFwiO1xuXG4gIGFkZEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGlmIChwcm9qZWN0TmFtZS52YWx1ZSkge1xuICAgICAgbGV0IHByb2ogPSBjcmVhdGVQcm9qZWN0KHByb2plY3ROYW1lLnZhbHVlKTtcbiAgICAgIGFkZFRvUHJvamVjdHMocHJvaik7XG4gICAgICBkb2N1bWVudC5ib2R5LmlubmVySFRNTCA9IFwiXCI7XG4gICAgICBsb2FkSG9tZVBhZ2UoKTtcbiAgICB9XG4gICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICB9KTtcblxuICBsZXQgY2FuY2VsQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgY2FuY2VsQnRuLnRleHRDb250ZW50ID0gXCJDYW5jZWxcIjtcbiAgY2FuY2VsQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICB9KTtcblxuICBpbnB1dERpdi5hcHBlbmRDaGlsZChwcm9qZWN0TmFtZSk7XG4gIGJ0bkRpdi5hcHBlbmRDaGlsZChhZGRCdG4pO1xuICBidG5EaXYuYXBwZW5kQ2hpbGQoY2FuY2VsQnRuKTtcblxuICBtb2RhbENvbnRlbnQuYXBwZW5kQ2hpbGQoaW5wdXREaXYpO1xuICBtb2RhbENvbnRlbnQuYXBwZW5kQ2hpbGQoYnRuRGl2KTtcbiAgbW9kYWwuYXBwZW5kQ2hpbGQobW9kYWxDb250ZW50KTtcbiAgcmV0dXJuIG1vZGFsO1xufVxuZXhwb3J0IHsgY3JlYXRlUHJvamVjdCwgY3JlYXRlTmV3UHJvamVjdE1vZGFsIH07IiwiaW1wb3J0IHsgaGVhZGVyLCBsb2FkSGVhZGVyIH0gZnJvbSBcIi4vbG9hZEhlYWRlclwiO1xuaW1wb3J0IHsgc2lkZWJhciwgbG9hZFNpZGViYXIgfSBmcm9tIFwiLi9sb2FkU2lkZWJhclwiO1xuaW1wb3J0IHsgY29udGVudCwgbG9hZENvbnRlbnQgfSBmcm9tIFwiLi9sb2FkQ29udGVudFwiO1xuaW1wb3J0IHsgZm9vdGVyLCBsb2FkRm9vdGVyIH0gZnJvbSBcIi4vbG9hZEZvb3RlclwiO1xuXG5sZXQgaG9tZVBhZ2U7XG5cbmZ1bmN0aW9uIGxvYWRIb21lUGFnZSgpIHtcbiAgaG9tZVBhZ2UgPSBudWxsO1xuICBob21lUGFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGhvbWVQYWdlLmlkID0gXCJkaXYtaG9tZS1wYWdlXCI7XG4gIGxvYWRIZWFkZXIoKTtcbiAgbG9hZFNpZGViYXIoKTtcbiAgbG9hZENvbnRlbnQoKTtcbiAgbG9hZEZvb3RlcigpO1xuXG4gIGhvbWVQYWdlLmFwcGVuZENoaWxkKGhlYWRlcik7XG4gIGhvbWVQYWdlLmFwcGVuZENoaWxkKHNpZGViYXIpO1xuICBob21lUGFnZS5hcHBlbmRDaGlsZChjb250ZW50KTtcbiAgaG9tZVBhZ2UuYXBwZW5kQ2hpbGQoZm9vdGVyKTtcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChob21lUGFnZSk7XG59XG5cbmV4cG9ydCB7IGhvbWVQYWdlLCBsb2FkSG9tZVBhZ2V9O1xuIiwiaW1wb3J0IHsgc2lkZWJhciB9IGZyb20gXCIuL2xvYWRTaWRlYmFyXCI7XG5pbXBvcnQgeyBob21lUGFnZSB9IGZyb20gXCIuL2xvYWRIb21lUGFnZVwiO1xuXG5sZXQgaGVhZGVyO1xubGV0IGhlYWRlckxlZnQ7XG5sZXQgaGVhZGVyQ2VudGVyO1xubGV0IGhlYWRlclJpZ2h0O1xubGV0IGhpZGVTaWRlYmFyQnRuO1xubGV0IGlzU2lkZWJhclZpc2libGUgPSB0cnVlO1xubGV0IGxvZ29JbWFnZTtcbmxldCBsb2dvVGV4dDtcbmxldCBsb2dvVGV4dExlZnQ7XG5sZXQgbG9nb1RleHRSaWdodDtcblxuZnVuY3Rpb24gbG9hZEhlYWRlcigpIHtcbiAgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaGVhZGVyLmlkID0gXCJkaXYtaGVhZGVyXCI7XG4gIGhlYWRlckxlZnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBoZWFkZXJMZWZ0LmlkID0gXCJkaXYtaGVhZGVyLWxlZnRcIjtcbiAgaGVhZGVyQ2VudGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaGVhZGVyQ2VudGVyLmlkID0gXCJkaXYtaGVhZGVyLWNlbnRlclwiO1xuICBoZWFkZXJSaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGhlYWRlclJpZ2h0LmlkID0gXCJkaXYtaGVhZGVyLXJpZ2h0XCI7XG5cbiAgaGlkZVNpZGViYXJCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBoaWRlU2lkZWJhckJ0bi5pZCA9IFwiaGlkZS1zaWRlYmFyLWJ0blwiO1xuICBoZWFkZXJMZWZ0LmFwcGVuZENoaWxkKGhpZGVTaWRlYmFyQnRuKTtcbiAgaGVhZGVyLmFwcGVuZENoaWxkKGhlYWRlckxlZnQpO1xuICBoZWFkZXIuYXBwZW5kQ2hpbGQoaGVhZGVyQ2VudGVyKTtcbiAgaGVhZGVyLmFwcGVuZENoaWxkKGhlYWRlclJpZ2h0KTtcblxuICBoaWRlU2lkZWJhckJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiSGlkZSBTaWRlYmFyIEJ1dHRvbiBjbGlja2VkXCIpO1xuICAgIGlmIChpc1NpZGViYXJWaXNpYmxlKSB7XG4gICAgICBpc1NpZGViYXJWaXNpYmxlID0gZmFsc2U7XG4gICAgICBzaWRlYmFyLnN0eWxlLmNzc1RleHQgPSBgXG4gICAgICAgICAgZGlzcGxheTogbm9uZTtgO1xuXG4gICAgICBob21lUGFnZS5zdHlsZS5jc3NUZXh0ID0gYGRpc3BsYXk6IGdyaWQ7XG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIwMHB4IDFmcjtcbiAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogN2ZyIDkwZnIgM2ZyO1xuICAgICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXG4gICAgICBcImhkciBoZHJcIlxuICAgICAgXCJjbnQgY250XCJcbiAgICAgIFwiZnRyIGZ0clwiO2A7XG5cbiAgICB9IGVsc2Uge1xuICAgICAgaXNTaWRlYmFyVmlzaWJsZSA9IHRydWU7XG4gICAgICBzaWRlYmFyLnN0eWxlLmNzc1RleHQgPSBgXG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7YDtcblxuICAgICAgaG9tZVBhZ2Uuc3R5bGUuY3NzVGV4dCA9IGBkaXNwbGF5OiBncmlkO1xuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyMDBweCAxZnI7XG4gICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDdmciA5MGZyIDNmcjtcbiAgICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxuICAgICAgXCJoZHIgaGRyXCJcbiAgICAgIFwic2JyIGNudFwiXG4gICAgICBcImZ0ciBmdHJcIjtgO1xuICAgIH1cbiAgfSk7XG5cbiAgbG9nb0ltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbG9nb0ltYWdlLmlkID0gXCJsb2dvLWltYWdlXCI7XG4gIGxvZ29UZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbG9nb1RleHQuaWQgPSBcImxvZ28tdGV4dFwiO1xuICBsb2dvVGV4dExlZnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgbG9nb1RleHRMZWZ0LmlkID0gXCJsb2dvLXRleHQtbGVmdFwiO1xuICBsb2dvVGV4dExlZnQudGV4dENvbnRlbnQgPSBcIlRvXCI7XG4gIGxvZ29UZXh0UmlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgbG9nb1RleHRSaWdodC5pZCA9IFwibG9nby10ZXh0LXJpZ2h0XCI7XG4gIGxvZ29UZXh0UmlnaHQudGV4dENvbnRlbnQgPSBcIkRvXCI7XG4gIGxvZ29UZXh0LmFwcGVuZENoaWxkKGxvZ29UZXh0TGVmdCk7XG4gIGxvZ29UZXh0LmFwcGVuZENoaWxkKGxvZ29UZXh0UmlnaHQpO1xuXG4gIGhlYWRlckNlbnRlci5hcHBlbmRDaGlsZChsb2dvSW1hZ2UpO1xuICBoZWFkZXJDZW50ZXIuYXBwZW5kQ2hpbGQobG9nb1RleHQpO1xufVxuXG5leHBvcnQgeyBoZWFkZXIsIGxvYWRIZWFkZXIgfTtcbiIsImltcG9ydCBhbGxUYXNrc0ltYWdlIGZyb20gXCIuL2ljb25zL2luYm94LnN2Z1wiO1xuaW1wb3J0IHRvZGF5SW1hZ2UgZnJvbSBcIi4vaWNvbnMvY2FsZW5kYXIuc3ZnXCI7XG5pbXBvcnQgbmV4dDdkYXlzSW1hZ2UgZnJvbSBcIi4vaWNvbnMvY29udGVudC1kdXBsaWNhdGUuc3ZnXCI7XG5pbXBvcnQgaW1wb3J0YW50SW1hZ2UgZnJvbSBcIi4vaWNvbnMvc3Rhci5zdmdcIjtcbmltcG9ydCBtaW51c0ltYWdlIGZyb20gXCIuL2ljb25zL21pbnVzLnN2Z1wiO1xuaW1wb3J0IHBsdXNJbWFnZSBmcm9tIFwiLi9pY29ucy9wbHVzLWJveC1vdXRsaW5lLnN2Z1wiO1xuaW1wb3J0IHsgYWxsUHJvamVjdHMgfSBmcm9tIFwiLi9pbmRleC5qc1wiO1xuXG5pbXBvcnQgeyBjcmVhdGVOZXdQcm9qZWN0TW9kYWwgfSBmcm9tIFwiLi9wcm9qZWN0LmpzXCI7XG5pbXBvcnQgeyBjb250ZW50IH0gZnJvbSBcIi4vbG9hZENvbnRlbnQuanNcIjtcbmltcG9ydCB7IHRpdGxlVGV4dCB9IGZyb20gXCIuL2xvYWRDb250ZW50LmpzXCI7XG5pbXBvcnQgeyBzZXRUYXNrc1RvTG9hZCB9IGZyb20gXCIuL2xvYWRDb250ZW50LmpzXCI7XG5pbXBvcnQgeyBsb2FkVGFza0NhcmQgfSBmcm9tIFwiLi9sb2FkQ29udGVudC5qc1wiO1xuXG5sZXQgc2lkZWJhcjtcbmxldCBob21lQ2FyZDtcbmxldCBob21lQ2FyZFRpdGxlO1xubGV0IGhvbWVDYXJkTGluZTtcbmxldCBwcm9qZWN0Q2FyZDtcbmxldCBwcm9qZWN0Q2FyZFRpdGxlO1xubGV0IHByb2plY3RDYXJkTGluZTtcbmxldCBhZGROZXdQcm9qZWN0QnRuO1xubGV0IGhvbWVDYXRlZ29yeUJ1dHRvbnMgPSBbXTtcbmxldCBsYXN0QnRuQ2xpY2tlZDtcblxubGV0IGFsbFRhc2tzSWNvbiA9IG5ldyBJbWFnZSgpO1xubGV0IHRvZGF5SWNvbiA9IG5ldyBJbWFnZSgpO1xubGV0IG5leHQ3ZGF5c0ljb24gPSBuZXcgSW1hZ2UoKTtcbmxldCBpbXBvcnRhbnRJY29uID0gbmV3IEltYWdlKCk7XG5sZXQgbWludXNJY29uO1xubGV0IHBsdXNJY29uID0gbmV3IEltYWdlKCk7XG5cbmFsbFRhc2tzSWNvbi5zcmMgPSBhbGxUYXNrc0ltYWdlO1xudG9kYXlJY29uLnNyYyA9IHRvZGF5SW1hZ2U7XG5uZXh0N2RheXNJY29uLnNyYyA9IG5leHQ3ZGF5c0ltYWdlO1xuaW1wb3J0YW50SWNvbi5zcmMgPSBpbXBvcnRhbnRJbWFnZTtcbnBsdXNJY29uLnNyYyA9IHBsdXNJbWFnZTtcblxubGV0IGhvbWVDYXRlZ29yaWVzID0gW1xuICB7XG4gICAgaWNvbjogYWxsVGFza3NJY29uLFxuICAgIHRleHQ6IFwiQWxsIFRhc2tzXCIsXG4gIH0sXG4gIHtcbiAgICBpY29uOiB0b2RheUljb24sXG4gICAgdGV4dDogXCJUb2RheVwiLFxuICB9LFxuICB7XG4gICAgaWNvbjogbmV4dDdkYXlzSWNvbixcbiAgICB0ZXh0OiBcIk5leHQgNyBkYXlzXCIsXG4gIH0sXG4gIHtcbiAgICBpY29uOiBpbXBvcnRhbnRJY29uLFxuICAgIHRleHQ6IFwiSW1wb3J0YW50XCIsXG4gIH0sXG5dO1xuXG5mdW5jdGlvbiBsb2FkSG9tZUNhcmQoKSB7XG4gIGhvbWVDYXJkID0gbnVsbDtcbiAgaG9tZUNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBob21lQ2FyZC5pZCA9IFwiaG9tZS1jYXJkXCI7XG5cbiAgaG9tZUNhcmRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBob21lQ2FyZFRpdGxlLnRleHRDb250ZW50ID0gXCJIb21lXCI7XG4gIGhvbWVDYXJkTGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoclwiKTtcblxuICBob21lQ2FyZC5hcHBlbmRDaGlsZChob21lQ2FyZFRpdGxlKTtcbiAgaG9tZUNhcmQuYXBwZW5kQ2hpbGQoaG9tZUNhcmRMaW5lKTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGhvbWVDYXRlZ29yaWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgbGV0IGNhdGVnb3J5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjYXRlZ29yeS5jbGFzc0xpc3QuYWRkKFwiaG9tZS1jYXRlZ29yaWVzXCIpO1xuICAgIGxldCBjYXRlZ29yeUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNhdGVnb3J5SWNvbi5hcHBlbmRDaGlsZChob21lQ2F0ZWdvcmllc1tpXS5pY29uKTtcblxuICAgIGxldCBjYXRlZ29yeVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBjYXRlZ29yeVRleHQudGV4dENvbnRlbnQgPSBob21lQ2F0ZWdvcmllc1tpXS50ZXh0O1xuXG4gICAgY2F0ZWdvcnkuYXBwZW5kQ2hpbGQoY2F0ZWdvcnlJY29uKTtcbiAgICBjYXRlZ29yeS5hcHBlbmRDaGlsZChjYXRlZ29yeVRleHQpO1xuXG4gICAgLy8gY29uc29sZS5sb2coY2F0ZWdvcnkpO1xuXG4gICAgaG9tZUNhdGVnb3J5QnV0dG9ucy5wdXNoKGNhdGVnb3J5KTtcblxuICAgIGNhdGVnb3J5LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICB0aXRsZVRleHQudGV4dENvbnRlbnQgPSBob21lQ2F0ZWdvcmllc1tpXS50ZXh0O1xuICAgICAgc2V0VGFza3NUb0xvYWQoaG9tZUNhdGVnb3JpZXNbaV0udGV4dCk7XG4gICAgICBsb2FkVGFza0NhcmQoKTtcbiAgICAgIGxhc3RCdG5DbGlja2VkID0gaG9tZUNhdGVnb3JpZXNbaV0udGV4dDtcbiAgICB9KTtcblxuICAgIGhvbWVDYXJkLmFwcGVuZENoaWxkKGNhdGVnb3J5KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBsb2FkUHJvamVjdENhcmQoKSB7XG4gIHByb2plY3RDYXJkID0gbnVsbDtcbiAgcHJvamVjdENhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBwcm9qZWN0Q2FyZC5pZCA9IFwicHJvamVjdC1jYXJkXCI7XG5cbiAgcHJvamVjdENhcmRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBwcm9qZWN0Q2FyZFRpdGxlLnRleHRDb250ZW50ID0gXCJQcm9qZWN0c1wiO1xuICBwcm9qZWN0Q2FyZExpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaHJcIik7XG5cbiAgcHJvamVjdENhcmQuYXBwZW5kQ2hpbGQocHJvamVjdENhcmRUaXRsZSk7XG4gIHByb2plY3RDYXJkLmFwcGVuZENoaWxkKHByb2plY3RDYXJkTGluZSk7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbGxQcm9qZWN0cy5sZW5ndGg7IGkrKykge1xuICAgIGxldCBwcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBwcm9qZWN0LmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWNhdGVnb3JpZXNcIik7XG4gICAgbGV0IHByb2plY3RJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICAgIC8vIG1pbnVzSWNvbiBoYXMgdG8gYmUgcmUtY3JlYXRlZCBpbiB0aGUgbG9vcFxuICAgIC8vIHRvIGFwcGVuZCBtdWx0aXBsZSB1bmlxdWUgZWxlbWVudHMgdG8gdGhlIHByb2plY3QgZGl2XG4gICAgbWludXNJY29uID0gbmV3IEltYWdlKCk7XG4gICAgbWludXNJY29uLnNyYyA9IG1pbnVzSW1hZ2U7XG4gICAgcHJvamVjdEljb24uYXBwZW5kQ2hpbGQobWludXNJY29uKTtcblxuICAgIGxldCBwcm9qZWN0VGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHByb2plY3RUZXh0LnRleHRDb250ZW50ID0gYWxsUHJvamVjdHNbaV0ubmFtZTtcblxuICAgIHByb2plY3QuYXBwZW5kQ2hpbGQocHJvamVjdEljb24pO1xuICAgIHByb2plY3QuYXBwZW5kQ2hpbGQocHJvamVjdFRleHQpO1xuXG4gICAgcHJvamVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgdGl0bGVUZXh0LnRleHRDb250ZW50ID0gcHJvamVjdFRleHQudGV4dENvbnRlbnQ7XG4gICAgICBzZXRUYXNrc1RvTG9hZChwcm9qZWN0VGV4dC50ZXh0Q29udGVudCk7XG4gICAgICBsb2FkVGFza0NhcmQoKTtcbiAgICAgIGxhc3RCdG5DbGlja2VkID0gdGl0bGVUZXh0LnRleHRDb250ZW50O1xuICAgIH0pO1xuXG4gICAgcHJvamVjdENhcmQuYXBwZW5kQ2hpbGQocHJvamVjdCk7XG4gIH1cblxuICBsZXQgYWRkTmV3UHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGFkZE5ld1Byb2plY3RCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBhZGROZXdQcm9qZWN0LmFwcGVuZENoaWxkKGFkZE5ld1Byb2plY3RCdG4pO1xuICBhZGROZXdQcm9qZWN0QnRuLmFwcGVuZENoaWxkKHBsdXNJY29uKTtcblxuICBhZGROZXdQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBsb2FkUHJvamVjdE1vZGFsKTtcblxuICBwcm9qZWN0Q2FyZC5hcHBlbmRDaGlsZChhZGROZXdQcm9qZWN0KTtcbn1cblxuZnVuY3Rpb24gbG9hZFNpZGViYXIoKSB7XG4gIHNpZGViYXIgPSBudWxsO1xuICBzaWRlYmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgc2lkZWJhci5pZCA9IFwiZGl2LXNpZGViYXJcIjtcblxuICBsb2FkSG9tZUNhcmQoKTtcbiAgbG9hZFByb2plY3RDYXJkKCk7XG5cbiAgc2lkZWJhci5hcHBlbmRDaGlsZChob21lQ2FyZCk7XG4gIHNpZGViYXIuYXBwZW5kQ2hpbGQocHJvamVjdENhcmQpO1xufVxuXG5mdW5jdGlvbiBsb2FkUHJvamVjdE1vZGFsKCkge1xuICBjb25zb2xlLmxvZyhcImFkZE5ld1Byb2plY3QgY2xpY2tlZFwiKTtcblxuICBsZXQgbW9kYWwgPSBjcmVhdGVOZXdQcm9qZWN0TW9kYWwoKTtcbiAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgY29udGVudC5hcHBlbmQobW9kYWwpO1xuXG4gIHdpbmRvdy5vbmNsaWNrID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LnRhcmdldCA9PSBtb2RhbCkge1xuICAgICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIH1cbiAgfTtcbn1cblxuZXhwb3J0IHsgc2lkZWJhciwgbG9hZFNpZGViYXIsIGxvYWRQcm9qZWN0Q2FyZCwgaG9tZUNhdGVnb3J5QnV0dG9ucywgbGFzdEJ0bkNsaWNrZWR9O1xuIiwibGV0IGNvbnRlbnQ7XG5sZXQgaW5uZXJEaXY7XG5sZXQgdGl0bGVUZXh0O1xubGV0IGFkZE5ld1Rhc2tCdG47XG5sZXQgdGFza3NEaXY7XG5sZXQgdGFza3NUb0xvYWQgPSBbXTtcblxuaW1wb3J0IHBsdXNJbWFnZSBmcm9tIFwiLi9pY29ucy9wbHVzLWJveC1vdXRsaW5lLnN2Z1wiO1xuXG5pbXBvcnQgeyBhbGxQcm9qZWN0cyB9IGZyb20gXCIuL2luZGV4XCI7XG5pbXBvcnQgeyBjcmVhdGVOZXdUYXNrTW9kYWwgfSBmcm9tIFwiLi90YXNrXCI7XG5cbmZ1bmN0aW9uIGxvYWRDb250ZW50KCkge1xuICBjb250ZW50ID0gbnVsbDtcbiAgYWRkTmV3VGFza0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGFkZE5ld1Rhc2tCdG4uaWQgPSBcImFkZC10YXNrLWJ1dHRvblwiO1xuICBsZXQgcGx1c0ljb24gPSBuZXcgSW1hZ2UoKTtcbiAgcGx1c0ljb24uc3JjID0gcGx1c0ltYWdlO1xuICBhZGROZXdUYXNrQnRuLmFwcGVuZENoaWxkKHBsdXNJY29uKTtcblxuICBhZGROZXdUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKT0+e1xuICAgIGxvYWRUYXNrTW9kYWwoKTtcbiAgfSk7XG5cbiAgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnRlbnQuaWQgPSBcImRpdi1jb250ZW50XCI7XG4gIGlubmVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaW5uZXJEaXYuaWQgPSBcImRpdi1pbm5lckRpdlwiO1xuXG4gIGxldCB0aXRsZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRpdGxlRGl2LmlkID0gXCJjb250ZW50LXRpdGxlXCI7XG4gIHRpdGxlVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICB0aXRsZVRleHQuaWQgPSBcImNvbnRlbnQtdGl0bGUtdGV4dFwiO1xuXG4gIGlmICh0aXRsZVRleHQudGV4dENvbnRlbnQgPT0gXCJcIikge1xuICAgIHRpdGxlVGV4dC50ZXh0Q29udGVudCA9IFwiVGl0bGVcIjtcbiAgfVxuICB0YXNrc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRhc2tzRGl2LmlkID0gXCJjb250ZW50LXRhc2tzXCI7XG5cbiAgdGl0bGVEaXYuYXBwZW5kQ2hpbGQodGl0bGVUZXh0KTtcbiAgaW5uZXJEaXYuYXBwZW5kQ2hpbGQodGl0bGVEaXYpO1xuICBpbm5lckRpdi5hcHBlbmRDaGlsZCh0YXNrc0Rpdik7XG4gIGlubmVyRGl2LmFwcGVuZENoaWxkKGFkZE5ld1Rhc2tCdG4pO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGlubmVyRGl2KTtcblxuICBsb2FkVGFza0NhcmQoKTtcbn1cblxuZnVuY3Rpb24gc2V0VGFza3NUb0xvYWQocHJvamVjdE5hbWUpIHtcbiAgdGFza3NUb0xvYWQgPSBbXTtcbiAgY29uc29sZS5sb2coXCJzZXRUYXNrc1RvTG9hZCBmdW5jdGlvbiBjYWxsZWRcIik7XG4gIGlmIChwcm9qZWN0TmFtZSA9PSBcIkFsbCBUYXNrc1wiKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbGxQcm9qZWN0cy5sZW5ndGg7IGkrKykge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBhbGxQcm9qZWN0c1tpXS50YXNrcy5sZW5ndGg7IGorKykge1xuICAgICAgICB0YXNrc1RvTG9hZC5wdXNoKGFsbFByb2plY3RzW2ldLnRhc2tzW2pdKTtcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbGxQcm9qZWN0cy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGFsbFByb2plY3RzW2ldLm5hbWUgPT0gcHJvamVjdE5hbWUpIHtcbiAgICAgICAgdGFza3NUb0xvYWQucHVzaCguLi5hbGxQcm9qZWN0c1tpXS50YXNrcyk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGNvbnNvbGUubG9nKHRhc2tzVG9Mb2FkKTtcbn1cblxuZnVuY3Rpb24gbG9hZFRhc2tDYXJkKCkge1xuICBjb25zb2xlLmxvZyhcImxvYWRUYXNrQ2FyZCBoYXMgYmVlbiBjYWxsZWRcIik7XG4gIHRhc2tzRGl2LmlubmVySFRNTCA9IFwiXCI7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB0YXNrc1RvTG9hZC5sZW5ndGg7IGkrKykge1xuICAgIGxldCB0YXNrQ2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbGV0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBsZXQgZGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbGV0IGR1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGxldCBwcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbGV0IG5vdGVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBsZXQgaXNDb21wbGV0ZWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gICAgbGV0IHRpdGxlVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIGxldCBkZXNjVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIGxldCBkdWVEYXRlVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIGxldCBwcmlvcml0eVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICBsZXQgbm90ZXNUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgbGV0IGlzQ29tcGxldGVkVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuXG4gICAgdGl0bGVUZXh0LnRleHRDb250ZW50ID0gdGFza3NUb0xvYWRbaV0udGl0bGU7XG4gICAgZGVzY1RleHQudGV4dENvbnRlbnQgPSB0YXNrc1RvTG9hZFtpXS5kZXNjO1xuICAgIGR1ZURhdGVUZXh0LnRleHRDb250ZW50ID0gdGFza3NUb0xvYWRbaV0uZHVlRGF0ZTtcbiAgICBwcmlvcml0eS50ZXh0Q29udGVudCA9IHRhc2tzVG9Mb2FkW2ldLnByaW9yaXR5O1xuICAgIG5vdGVzVGV4dC50ZXh0Q29udGVudCA9IHRhc2tzVG9Mb2FkW2ldLm5vdGVzO1xuICAgIGlzQ29tcGxldGVkVGV4dC50ZXh0Q29udGVudCA9IHRhc2tzVG9Mb2FkW2ldLmlzQ29tcGxldGVkO1xuXG4gICAgdGl0bGUuYXBwZW5kQ2hpbGQodGl0bGVUZXh0KTtcbiAgICBkZXNjLmFwcGVuZENoaWxkKGRlc2NUZXh0KTtcbiAgICBkdWVEYXRlLmFwcGVuZENoaWxkKGR1ZURhdGVUZXh0KTtcbiAgICBwcmlvcml0eS5hcHBlbmRDaGlsZChwcmlvcml0eVRleHQpO1xuICAgIG5vdGVzLmFwcGVuZENoaWxkKG5vdGVzVGV4dCk7XG4gICAgaXNDb21wbGV0ZWQuYXBwZW5kQ2hpbGQoaXNDb21wbGV0ZWRUZXh0KTtcblxuICAgIHRhc2tDYXJkLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICB0YXNrQ2FyZC5hcHBlbmRDaGlsZChkZXNjKTtcbiAgICB0YXNrQ2FyZC5hcHBlbmRDaGlsZChkdWVEYXRlKTtcbiAgICB0YXNrQ2FyZC5hcHBlbmRDaGlsZChwcmlvcml0eSk7XG4gICAgdGFza0NhcmQuYXBwZW5kQ2hpbGQobm90ZXMpO1xuICAgIHRhc2tDYXJkLmFwcGVuZENoaWxkKGlzQ29tcGxldGVkKTtcblxuICAgIHRhc2tzRGl2LmFwcGVuZENoaWxkKHRhc2tDYXJkKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBsb2FkVGFza01vZGFsKCkge1xuICBjb25zb2xlLmxvZyhcImFkZE5ld1Rhc2sgY2xpY2tlZFwiKTtcblxuICBsZXQgbW9kYWwgPSBjcmVhdGVOZXdUYXNrTW9kYWwoKTtcbiAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgY29udGVudC5hcHBlbmQobW9kYWwpO1xuXG4gIHdpbmRvdy5vbmNsaWNrID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LnRhcmdldCA9PSBtb2RhbCkge1xuICAgICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIH1cbiAgfTtcbn1cblxuZXhwb3J0IHsgY29udGVudCwgbG9hZENvbnRlbnQsIHRpdGxlVGV4dCwgc2V0VGFza3NUb0xvYWQsIGxvYWRUYXNrQ2FyZCB9O1xuIiwiaW1wb3J0IHsgYWxsUHJvamVjdHMgfSBmcm9tIFwiLi9pbmRleFwiO1xuaW1wb3J0IHsgc2V0VGFza3NUb0xvYWQsIHRpdGxlVGV4dCB9IGZyb20gXCIuL2xvYWRDb250ZW50XCI7XG5pbXBvcnQgeyBsb2FkSG9tZVBhZ2UgfSBmcm9tIFwiLi9sb2FkSG9tZVBhZ2VcIjtcbmltcG9ydCB7IGxvYWRDb250ZW50IH0gZnJvbSBcIi4vbG9hZENvbnRlbnRcIjtcbmltcG9ydCB7IGxhc3RCdG5DbGlja2VkIH0gZnJvbSBcIi4vbG9hZFNpZGViYXJcIjtcblxubGV0IG1vZGFsO1xubGV0IGRyb3BEb3duSW5uZXI7XG5cbmZ1bmN0aW9uIGNyZWF0ZVRhc2soXG4gIHRpdGxlID0gXCJCbGFua1wiLFxuICBkZXNjID0gXCJOb3RoaW5nIGhlcmUuXCIsXG4gIGR1ZURhdGUgPSBcIlwiLFxuICBwcmlvcml0eSA9IFwibG93XCIsXG4gIG5vdGVzID0gXCJFbXB0eVwiLFxuICBpc0NvbXBsZXRlZCA9IGZhbHNlXG4pIHtcbiAgcmV0dXJuIHtcbiAgICB0aXRsZSxcbiAgICBkZXNjLFxuICAgIGlzQ29tcGxldGVkLFxuICAgIGR1ZURhdGUsXG4gICAgcHJpb3JpdHksXG4gICAgbm90ZXMsXG4gIH07XG59XG5cblxuZnVuY3Rpb24gY3JlYXRlTmV3VGFza01vZGFsKCkge1xuICBtb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG1vZGFsLmlkID0gXCJuZXctdGFzay1tb2RhbFwiO1xuICBtb2RhbC5jbGFzc0xpc3QuYWRkKFwibW9kYWxcIik7XG4gIGxldCBtb2RhbENvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBtb2RhbENvbnRlbnQuaWQgPSBcIm1vZGFsLWNvbnRlbnRcIjtcbiAgbGV0IGlucHV0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaW5wdXREaXYuaWQgPSBcInRhc2stbW9kYWwtaW5wdXQtZGl2XCI7XG4gIGxldCBidG5EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBidG5EaXYuaWQgPSBcInRhc2stbW9kYWwtYnV0dG9uLWRpdlwiO1xuXG4gIGxldCB0YXNrTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYGlucHV0YCk7XG4gIHRhc2tOYW1lLnR5cGUgPSBcInRleHRcIjtcbiAgdGFza05hbWUucGxhY2Vob2xkZXIgPSBcIlRhc2sgVGl0bGVcIjtcblxuICBsZXQgZGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYGlucHV0YCk7XG4gIGRlc2MudHlwZSA9IFwidGV4dFwiO1xuICBkZXNjLnBsYWNlaG9sZGVyID0gXCJEZXNjcmlwdGlvblwiO1xuXG4gIC8vIGxldCBwcm9qZWN0Q2F0ZWdvcnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGBpbnB1dGApO1xuICAvLyBwcm9qZWN0Q2F0ZWdvcnkudHlwZSA9IFwidGV4dFwiO1xuICAvLyBwcm9qZWN0Q2F0ZWdvcnkucGxhY2Vob2xkZXIgPSBcIlByb2plY3QgQ2F0ZWdvcnlcIjtcblxuICBsZXQgcHJvamVjdENhdGVnb3J5ID0gcHJvamVjdERyb3BEb3duTWVudSgpO1xuICBwcm9qZWN0Q2F0ZWdvcnkucGxhY2Vob2xkZXIgPSBcIlByb2plY3QgQ2F0ZWdvcnlcIjtcblxuICBsZXQgZHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYGlucHV0YCk7XG4gIGR1ZURhdGUudHlwZSA9IFwidGV4dFwiO1xuICBkdWVEYXRlLnBsYWNlaG9sZGVyID0gXCJkdWVEYXRlXCI7XG5cbiAgbGV0IHByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgaW5wdXRgKTtcbiAgcHJpb3JpdHkudHlwZSA9IFwidGV4dFwiO1xuICBwcmlvcml0eS5wbGFjZWhvbGRlciA9IFwiUHJpb3JpdHlcIjtcblxuICBsZXQgbm90ZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGBpbnB1dGApO1xuICBub3Rlcy50eXBlID0gXCJ0ZXh0XCI7XG4gIG5vdGVzLnBsYWNlaG9sZGVyID0gXCJOb3Rlc1wiO1xuXG4gIGxldCBpc0NvbXBsZXRlZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYGlucHV0YCk7XG4gIGlzQ29tcGxldGVkLnR5cGUgPSBcInRleHRcIjtcbiAgaXNDb21wbGV0ZWQucGxhY2Vob2xkZXIgPSBcImlzIENvbXBsZXRlZFwiO1xuXG4gIFxuICBsZXQgYWRkQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgYWRkQnRuLnRleHRDb250ZW50ID0gXCJBZGRcIjtcblxuICBhZGRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBpZiAodGFza05hbWUudmFsdWUpIHtcbiAgICAgIGxldCB0YXNrID0gY3JlYXRlVGFzayh0YXNrTmFtZS52YWx1ZSxcbiAgICAgICAgZGVzYy52YWx1ZSxcbiAgICAgICAgZHVlRGF0ZS52YWx1ZSxcbiAgICAgICAgcHJpb3JpdHkudmFsdWUsXG4gICAgICAgIG5vdGVzLnZhbHVlLFxuICAgICAgICBpc0NvbXBsZXRlZC52YWx1ZVxuXG4gICAgICApO1xuICAgICAgY29uc29sZS5sb2coXCJEREkgPSBcIiArIGRyb3BEb3duSW5uZXIudmFsdWUpO1xuICAgICAgYWxsUHJvamVjdHMuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgaWYoZWxlbWVudC5uYW1lID09IGRyb3BEb3duSW5uZXIudmFsdWUpe1xuICAgICAgICAgIGVsZW1lbnQudGFza3MucHVzaCh0YXNrKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBzZXRUYXNrc1RvTG9hZChsYXN0QnRuQ2xpY2tlZCk7XG4gICAgICBkb2N1bWVudC5ib2R5LmlubmVySFRNTCA9IFwiXCI7XG4gICAgICBsb2FkSG9tZVBhZ2UoKTtcbiAgICAgIHRpdGxlVGV4dC50ZXh0Q29udGVudCA9IGxhc3RCdG5DbGlja2VkO1xuICAgICAgY29uc29sZS5sb2cobGFzdEJ0bkNsaWNrZWQpO1xuICAgIH1cbiAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gIH0pO1xuXG4gIGxldCBjYW5jZWxCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBjYW5jZWxCdG4udGV4dENvbnRlbnQgPSBcIkNhbmNlbFwiO1xuICBjYW5jZWxCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gIH0pO1xuXG4gIGlucHV0RGl2LmFwcGVuZENoaWxkKHRhc2tOYW1lKTtcbiAgaW5wdXREaXYuYXBwZW5kQ2hpbGQoZGVzYyk7XG4gIGlucHV0RGl2LmFwcGVuZENoaWxkKHByb2plY3RDYXRlZ29yeSk7XG4gIGlucHV0RGl2LmFwcGVuZENoaWxkKGR1ZURhdGUpO1xuICBpbnB1dERpdi5hcHBlbmRDaGlsZChwcmlvcml0eSk7XG4gIGlucHV0RGl2LmFwcGVuZENoaWxkKG5vdGVzKTtcbiAgaW5wdXREaXYuYXBwZW5kQ2hpbGQoaXNDb21wbGV0ZWQpO1xuXG4gIGJ0bkRpdi5hcHBlbmRDaGlsZChhZGRCdG4pO1xuICBidG5EaXYuYXBwZW5kQ2hpbGQoY2FuY2VsQnRuKTtcblxuICBtb2RhbENvbnRlbnQuYXBwZW5kQ2hpbGQoaW5wdXREaXYpO1xuICBtb2RhbENvbnRlbnQuYXBwZW5kQ2hpbGQoYnRuRGl2KTtcbiAgbW9kYWwuYXBwZW5kQ2hpbGQobW9kYWxDb250ZW50KTtcbiAgcmV0dXJuIG1vZGFsO1xufVxuXG5mdW5jdGlvbiBwcm9qZWN0RHJvcERvd25NZW51KCl7XG4gIGxldCBkcm9wRG93biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkcm9wRG93bi5jbGFzc0xpc3QuYWRkKCdjb250YWluZXInKTtcbiAgZHJvcERvd25Jbm5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuXG4gIGZvcihsZXQgaT0wOyBpPGFsbFByb2plY3RzLmxlbmd0aDsgaSsrKXtcbiAgICBsZXQgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgb3B0aW9uLnZhbHVlID0gYWxsUHJvamVjdHNbaV0ubmFtZTtcbiAgICBvcHRpb24udGV4dENvbnRlbnQgPSBhbGxQcm9qZWN0c1tpXS5uYW1lO1xuXG4gICAgZHJvcERvd25Jbm5lci5hcHBlbmRDaGlsZChvcHRpb24pO1xuICB9XG5cbiAgZHJvcERvd24uYXBwZW5kQ2hpbGQoZHJvcERvd25Jbm5lcik7XG4gIHJldHVybiBkcm9wRG93bjtcbn1cblxuXG5leHBvcnQgeyBjcmVhdGVUYXNrLCBjcmVhdGVOZXdUYXNrTW9kYWwgfTtcbiIsImxldCBmb290ZXI7XG5sZXQgd3JhcHBlcjtcbmxldCBsZWZ0RGl2O1xubGV0IGNlbnRlckRpdjtcbmxldCByaWdodERpdjtcblxuaW1wb3J0IGhlYXJ0SW1hZ2UgZnJvbSBcIi4vaWNvbnMvaGVhcnRfaWNvbi5zdmdcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRGb290ZXIoKSB7XG4gIGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGZvb3Rlci5pZCA9IFwiZGl2LWZvb3RlclwiO1xuXG4gIHdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gIGxlZnREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBsZWZ0RGl2LnRleHRDb250ZW50ID0gXCJtYWRlIHdpdGggXCI7XG4gIGNlbnRlckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGxldCBoZWFydEljb24gPSBuZXcgSW1hZ2UoKTtcbiAgaGVhcnRJY29uLnNyYyA9IGhlYXJ0SW1hZ2U7XG4gIGNlbnRlckRpdi5hcHBlbmRDaGlsZChoZWFydEljb24pO1xuICByaWdodERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGxldCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIHRleHQudGV4dENvbnRlbnQgPSBcIiBieSBcIjtcbiAgbGV0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgbGluay50ZXh0Q29udGVudCA9IFwic2hsb2suY29kZXNcIjtcbiAgbGluay5ocmVmID0gXCJodHRwczovL2dpdGh1Yi5jb20vc2hsb2ttb3R3YW5pXCI7XG4gIGxpbmsudGFyZ2V0ID0gXCJfYmxhbmtcIjtcblxuICByaWdodERpdi5hcHBlbmRDaGlsZCh0ZXh0KTtcbiAgcmlnaHREaXYuYXBwZW5kQ2hpbGQobGluayk7XG5cbiAgd3JhcHBlci5hcHBlbmRDaGlsZChsZWZ0RGl2KTtcbiAgd3JhcHBlci5hcHBlbmRDaGlsZChjZW50ZXJEaXYpO1xuICB3cmFwcGVyLmFwcGVuZENoaWxkKHJpZ2h0RGl2KTtcblxuICBmb290ZXIuYXBwZW5kQ2hpbGQod3JhcHBlcik7XG59XG5cbmV4cG9ydCB7IGZvb3RlciB9O1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vaWNvbnMvY2hlY2stYWxsLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vaWNvbnMvaGFtYnVyZ2VyLWljb24uc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgOnJvb3Qge1xuICAtLXNpZGViYXItYmctY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMCk7XG59XG5cbioge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmh0bWwsXG5ib2R5IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuZGl2IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLyogYW55IGNoYW5nZSBoZXJlIHNob3VsZCBhbHNvIGJlIG1hZGUgaW4gbG9hZEhlYWRlci5qcyAqL1xuI2Rpdi1ob21lLXBhZ2Uge1xuICBtaW4taGVpZ2h0OiA4MDBweDtcbiAgbWluLWhlaWdodDogODAwcHg7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjAwcHggMWZyO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDdmciA5MGZyIDNmcjtcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcbiAgICBcImhkciBoZHJcIlxuICAgIFwic2JyIGNudFwiXG4gICAgXCJmdHIgZnRyXCI7XG59XG5cbiNkaXYtaGVhZGVyIHtcbiAgZ3JpZC1hcmVhOiBoZHI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuI2Rpdi1oZWFkZXItbGVmdCB7XG4gIHdpZHRoOiAyMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbiNkaXYtaGVhZGVyLWNlbnRlcixcbiNsb2dvLXRleHQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuI2xvZ28taW1hZ2Uge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIHdpZHRoOiA3MHB4O1xuICBoZWlnaHQ6IDcwcHg7XG59XG5cbiNsb2dvLXRleHQge1xuICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gIGZvbnQtc2l6ZTogMy41cmVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuI2xvZ28tdGV4dC1yaWdodCB7XG4gIGNvbG9yOiBncmVlbjtcbn1cblxuI2Rpdi1oZWFkZXItcmlnaHQge1xuICB3aWR0aDogMjAlO1xufVxuXG4jaGlkZS1zaWRlYmFyLWJ0biB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2lkZWJhci1iZy1jb2xvcik7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICBib3JkZXI6IG5vbmU7XG59XG5cbiNkaXYtc2lkZWJhciB7XG4gIGdyaWQtYXJlYTogc2JyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xufVxuXG4jaG9tZS1jYXJkLFxuI3Byb2plY3QtY2FyZCB7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGhlaWdodDogNTAlO1xuICAvKiBib3JkZXI6IDFweCBzb2xpZCBibGFjazsgKi9cbn1cblxuI2hvbWUtY2FyZCA+IGRpdjpob3ZlcixcbiNwcm9qZWN0LWNhcmQgPiBkaXY6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4vKiBob21lIGNhcmQgYW5kIHByb2plY3QgY2FyZCB0aXRsZXMgKi9cbiNob21lLWNhcmQgPiBwLFxuI3Byb2plY3QtY2FyZCA+IHAge1xuICBmb250LXNpemU6IDJyZW07XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi8qIGhvbWUgY2FyZCBjYXRlZ29yaWVzICovXG4jaG9tZS1jYXJkID4gZGl2LFxuI3Byb2plY3QtY2FyZCA+IGRpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgcGFkZGluZzogMnB4O1xufVxuXG4jaG9tZS1jYXJkID4gZGl2ID4gZGl2OmZpcnN0LWNoaWxkLFxuI3Byb2plY3QtY2FyZCA+IGRpdiA+IGRpdjpmaXJzdC1jaGlsZCB7XG4gIHdpZHRoOiAycmVtO1xuICBoZWlnaHQ6IDJyZW07XG59XG5cbiNwcm9qZWN0LWNhcmQgPiBkaXY6bGFzdC1jaGlsZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBib3JkZXI6IDFweCBkYXNoZWQgcmdiYSgwLCAwLCAwLCAwLjMpO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBwYWRkaW5nOiA1cHg7XG59XG5cbiNkaXYtY29udGVudCB7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xuICBncmlkLWFyZWE6IGNudDtcbn1cblxuI2Rpdi1pbm5lckRpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBicm93bjtcbn1cblxuI2NvbnRlbnQtdGl0bGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhO1xuICBmbGV4OiAxO1xuICBmb250LXNpemU6IDIuN3JlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgd2lkdGg6IDcwJTtcbiAgaGVpZ2h0OiA1MCU7XG59XG5cbiNjb250ZW50LXRpdGxlID4gc3BhbiB7XG4gIG1hcmdpbi1sZWZ0OiA1MHB4O1xufVxuXG4jY29udGVudC10YXNrcyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHllbGxvd2dyZWVuO1xuICBmbGV4OiAxMDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcbiAgd2lkdGg6IDcwJTtcbiAgbWluLXdpZHRoOiA4MDBweDtcbn1cblxuI2NvbnRlbnQtdGFza3MgPiBkaXZ7XG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICBwYWRkaW5nOiAyMHB4O1xuICBtYXJnaW46IDEwcHggMDtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuI2NvbnRlbnQtdGFza3MgPiBkaXYgPiBkaXZ7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbiNhZGQtdGFzay1idXR0b24ge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogOTAlO1xubGVmdDogOTUlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbn1cblxuI2Rpdi1mb290ZXIge1xuICBncmlkLWFyZWE6IGZ0cjtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43NSk7XG59XG5cbiNkaXYtZm9vdGVyID4gZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmctdG9wOiA1cHg7XG4gIHdpZHRoOiA0MDBweDtcbn1cblxuI2Rpdi1mb290ZXIgPiBkaXYgPiBkaXYge1xuICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xuICBjb2xvcjogYW50aXF1ZXdoaXRlO1xufVxuXG4jZGl2LWZvb3RlciBhIHtcbiAgY29sb3I6IGFudGlxdWV3aGl0ZTtcbn1cblxuLyogaGVhcnQgbG9nbyAqL1xuI2Rpdi1mb290ZXIgPiBkaXYgPiBkaXY6bnRoLWNoaWxkKDIpIHtcbiAgd2lkdGg6IDEuNXJlbTtcbiAgbWFyZ2luOiAwIDRweDtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLDBDQUEwQztBQUM1Qzs7QUFFQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysc0JBQXNCO0FBQ3hCOztBQUVBOztFQUVFLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBLHlEQUF5RDtBQUN6RDtFQUNFLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsYUFBYTtFQUNiLGdDQUFnQztFQUNoQyxnQ0FBZ0M7RUFDaEM7OzthQUdXO0FBQ2I7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsYUFBYTtFQUNiLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLFVBQVU7RUFDVixhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUVBOztFQUVFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UseURBQTRDO0VBQzVDLDRCQUE0QjtFQUM1QixXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UseURBQWlEO0VBQ2pELDRCQUE0QjtFQUM1Qix5Q0FBeUM7RUFDekMsV0FBVztFQUNYLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsY0FBYztFQUNkLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0FBQ3JCOztBQUVBOztFQUVFLGFBQWE7RUFDYixXQUFXO0VBQ1gsNkJBQTZCO0FBQy9COztBQUVBOztFQUVFLG9DQUFvQztFQUNwQyxrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjs7QUFFQSxzQ0FBc0M7QUFDdEM7O0VBRUUsZUFBZTtFQUNmLG1CQUFtQjtBQUNyQjs7QUFFQSx5QkFBeUI7QUFDekI7O0VBRUUsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixZQUFZO0FBQ2Q7O0FBRUE7O0VBRUUsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIscUNBQXFDO0VBQ3JDLG1CQUFtQjtFQUNuQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsWUFBWTtFQUNaLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixPQUFPO0VBQ1AsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLFVBQVU7RUFDVixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSw2QkFBNkI7RUFDN0IsUUFBUTtFQUNSLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLFVBQVU7RUFDVixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsY0FBYztFQUNkLGFBQWE7QUFDZjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsUUFBUTtBQUNWLFNBQVM7RUFDUCxnQ0FBZ0M7RUFDaEMsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGNBQWM7RUFDZCxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLHFDQUFxQztBQUN2Qzs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsZ0JBQWdCO0VBQ2hCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBLGVBQWU7QUFDZjtFQUNFLGFBQWE7RUFDYixhQUFhO0FBQ2ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgLS1zaWRlYmFyLWJnLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDApO1xcbn1cXG5cXG4qIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5odG1sLFxcbmJvZHkge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbmRpdiB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLyogYW55IGNoYW5nZSBoZXJlIHNob3VsZCBhbHNvIGJlIG1hZGUgaW4gbG9hZEhlYWRlci5qcyAqL1xcbiNkaXYtaG9tZS1wYWdlIHtcXG4gIG1pbi1oZWlnaHQ6IDgwMHB4O1xcbiAgbWluLWhlaWdodDogODAwcHg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyMDBweCAxZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDdmciA5MGZyIDNmcjtcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICAgIFxcXCJoZHIgaGRyXFxcIlxcbiAgICBcXFwic2JyIGNudFxcXCJcXG4gICAgXFxcImZ0ciBmdHJcXFwiO1xcbn1cXG5cXG4jZGl2LWhlYWRlciB7XFxuICBncmlkLWFyZWE6IGhkcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbiNkaXYtaGVhZGVyLWxlZnQge1xcbiAgd2lkdGg6IDIwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jZGl2LWhlYWRlci1jZW50ZXIsXFxuI2xvZ28tdGV4dCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jbG9nby1pbWFnZSB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi9pY29ucy9jaGVjay1hbGwuc3ZnKTtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICB3aWR0aDogNzBweDtcXG4gIGhlaWdodDogNzBweDtcXG59XFxuXFxuI2xvZ28tdGV4dCB7XFxuICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgZm9udC1zaXplOiAzLjVyZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuI2xvZ28tdGV4dC1yaWdodCB7XFxuICBjb2xvcjogZ3JlZW47XFxufVxcblxcbiNkaXYtaGVhZGVyLXJpZ2h0IHtcXG4gIHdpZHRoOiAyMCU7XFxufVxcblxcbiNoaWRlLXNpZGViYXItYnRuIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguL2ljb25zL2hhbWJ1cmdlci1pY29uLnN2Zyk7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2lkZWJhci1iZy1jb2xvcik7XFxuICB3aWR0aDogNDBweDtcXG4gIGhlaWdodDogNDBweDtcXG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4jZGl2LXNpZGViYXIge1xcbiAgZ3JpZC1hcmVhOiBzYnI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XFxufVxcblxcbiNob21lLWNhcmQsXFxuI3Byb2plY3QtY2FyZCB7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgaGVpZ2h0OiA1MCU7XFxuICAvKiBib3JkZXI6IDFweCBzb2xpZCBibGFjazsgKi9cXG59XFxuXFxuI2hvbWUtY2FyZCA+IGRpdjpob3ZlcixcXG4jcHJvamVjdC1jYXJkID4gZGl2OmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gIGJvcmRlci1yYWRpdXM6IDdweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLyogaG9tZSBjYXJkIGFuZCBwcm9qZWN0IGNhcmQgdGl0bGVzICovXFxuI2hvbWUtY2FyZCA+IHAsXFxuI3Byb2plY3QtY2FyZCA+IHAge1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG59XFxuXFxuLyogaG9tZSBjYXJkIGNhdGVnb3JpZXMgKi9cXG4jaG9tZS1jYXJkID4gZGl2LFxcbiNwcm9qZWN0LWNhcmQgPiBkaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICBtYXJnaW4tdG9wOiAzMHB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIHBhZGRpbmc6IDJweDtcXG59XFxuXFxuI2hvbWUtY2FyZCA+IGRpdiA+IGRpdjpmaXJzdC1jaGlsZCxcXG4jcHJvamVjdC1jYXJkID4gZGl2ID4gZGl2OmZpcnN0LWNoaWxkIHtcXG4gIHdpZHRoOiAycmVtO1xcbiAgaGVpZ2h0OiAycmVtO1xcbn1cXG5cXG4jcHJvamVjdC1jYXJkID4gZGl2Omxhc3QtY2hpbGQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYm9yZGVyOiAxcHggZGFzaGVkIHJnYmEoMCwgMCwgMCwgMC4zKTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBwYWRkaW5nOiA1cHg7XFxufVxcblxcbiNkaXYtY29udGVudCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXG4gIGdyaWQtYXJlYTogY250O1xcbn1cXG5cXG4jZGl2LWlubmVyRGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBicm93bjtcXG59XFxuXFxuI2NvbnRlbnQtdGl0bGUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYXF1YTtcXG4gIGZsZXg6IDE7XFxuICBmb250LXNpemU6IDIuN3JlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIHdpZHRoOiA3MCU7XFxuICBoZWlnaHQ6IDUwJTtcXG59XFxuXFxuI2NvbnRlbnQtdGl0bGUgPiBzcGFuIHtcXG4gIG1hcmdpbi1sZWZ0OiA1MHB4O1xcbn1cXG5cXG4jY29udGVudC10YXNrcyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3dncmVlbjtcXG4gIGZsZXg6IDEwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgd2lkdGg6IDcwJTtcXG4gIG1pbi13aWR0aDogODAwcHg7XFxufVxcblxcbiNjb250ZW50LXRhc2tzID4gZGl2e1xcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBtYXJnaW46IDEwcHggMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbiNjb250ZW50LXRhc2tzID4gZGl2ID4gZGl2e1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbiNhZGQtdGFzay1idXR0b24ge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiA5MCU7XFxubGVmdDogOTUlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICB3aWR0aDogNTBweDtcXG4gIGhlaWdodDogNTBweDtcXG59XFxuXFxuI2Rpdi1mb290ZXIge1xcbiAgZ3JpZC1hcmVhOiBmdHI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNzUpO1xcbn1cXG5cXG4jZGl2LWZvb3RlciA+IGRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBwYWRkaW5nLXRvcDogNXB4O1xcbiAgd2lkdGg6IDQwMHB4O1xcbn1cXG5cXG4jZGl2LWZvb3RlciA+IGRpdiA+IGRpdiB7XFxuICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICBmb250LXNpemU6IDEuM3JlbTtcXG4gIGNvbG9yOiBhbnRpcXVld2hpdGU7XFxufVxcblxcbiNkaXYtZm9vdGVyIGEge1xcbiAgY29sb3I6IGFudGlxdWV3aGl0ZTtcXG59XFxuXFxuLyogaGVhcnQgbG9nbyAqL1xcbiNkaXYtZm9vdGVyID4gZGl2ID4gZGl2Om50aC1jaGlsZCgyKSB7XFxuICB3aWR0aDogMS41cmVtO1xcbiAgbWFyZ2luOiAwIDRweDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21vZGFsLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21vZGFsLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGA6cm9vdHtcbiAgICAtLWFkZC1idXR0b24tY29sb3I6IGdyZWVuO1xuICAgIC0tY2FuY2VsLWJ1dHRvbi1jb2xvcjogdG9tYXRvO1xufVxuXG4ubW9kYWwge1xuICBkaXNwbGF5OiBub25lOyAvKiBIaWRkZW4gYnkgZGVmYXVsdCAqL1xuICBwb3NpdGlvbjogZml4ZWQ7IC8qIFN0YXkgaW4gcGxhY2UgKi9cbiAgei1pbmRleDogMTsgLyogU2l0IG9uIHRvcCAqL1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgd2lkdGg6IDEwMCU7IC8qIEZ1bGwgd2lkdGggKi9cbiAgaGVpZ2h0OiAxMDAlOyAvKiBGdWxsIGhlaWdodCAqL1xuICBvdmVyZmxvdzogdmlzaWJsZTsgLyogRW5hYmxlIHNjcm9sbCBpZiBuZWVkZWQgKi9cbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDApOyAvKiBGYWxsYmFjayBjb2xvciAqL1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNyk7IC8qIEJsYWNrIHcvIG9wYWNpdHkgKi9cbn1cblxuLm1vZGFsID4gZGl2e1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDQ1JTtcbiAgICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgIHdpZHRoOiA1MDBweDtcbiAgICBoZWlnaHQ6IDE1MHB4O1xufVxuXG4jbW9kYWwtY29udGVudHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAxMHB4O1xufVxuXG4jbW9kYWwtY29udGVudCA+IGRpdntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbiNtb2RhbC1jb250ZW50IGlucHV0LFxuI21vZGFsLWNvbnRlbnQgYnV0dG9ue1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBtYXJnaW46IDAgMzBweDtcbn1cblxuI21vZGFsLWNvbnRlbnQgaW5wdXR7XG4gICAgd2lkdGg6IDc1JTtcbn1cblxuI21vZGFsLWNvbnRlbnQgYnV0dG9ue1xuICAgIHdpZHRoOiAzMCU7XG59XG5cbiNtb2RhbC1jb250ZW50IGJ1dHRvbjpmaXJzdC1jaGlsZHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hZGQtYnV0dG9uLWNvbG9yKTtcbn1cblxuI21vZGFsLWNvbnRlbnQgYnV0dG9uOmxhc3QtY2hpbGR7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2FuY2VsLWJ1dHRvbi1jb2xvcik7XG59XG5cbi5tb2RhbCA+ICNtb2RhbC1jb250ZW50e1xuICAgIHdpZHRoOiA4MDBweDtcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICAgIHBhZGRpbmc6IDUwcHg7XG59XG5cbi5tb2RhbCA+ICNtb2RhbC1jb250ZW50ID4gI3Rhc2stbW9kYWwtaW5wdXQtZGl2e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ubW9kYWwgPiAjbW9kYWwtY29udGVudCA+ICN0YXNrLW1vZGFsLWlucHV0LWRpdiA+IGlucHV0e1xuICAgIG1hcmdpbjogMjBweCAwO1xufVxuXG4jbmV3LXRhc2stbW9kYWwgPiAjbW9kYWwtY29udGVudCA+ICN0YXNrLW1vZGFsLWlucHV0LWRpdiA+IC5jb250YWluZXIgPiAjZHJvcC1kb3duLWJ1dHRvbntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhbnRpcXVld2hpdGU7XG4gICAgbWFyZ2luOiAyMHB4IDA7XG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xufVxuXG4jbmV3LXRhc2stbW9kYWwgPiAjbW9kYWwtY29udGVudCA+ICN0YXNrLW1vZGFsLWlucHV0LWRpdiA+IC5jb250YWluZXJ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBtYXJnaW4tbGVmdDogMTgwcHg7XG59XG5cbiNuZXctdGFzay1tb2RhbCA+ICNtb2RhbC1jb250ZW50ID4gI3Rhc2stbW9kYWwtaW5wdXQtZGl2ID4gLmNvbnRhaW5lciA+IHNlbGVjdHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhbnRpcXVld2hpdGU7XG4gICAgbWFyZ2luOiAyMHB4IDA7XG4gICAgd2lkdGg6IDI1JTtcbiAgICBmb250LXNpemU6IDEuMHJlbTtcbiAgICBwYWRkaW5nOiA4cHggMTVweDtcbn1cblxuI3Rhc2stbW9kYWwtYnV0dG9uLWRpdntcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL21vZGFsLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHlCQUF5QjtJQUN6Qiw2QkFBNkI7QUFDakM7O0FBRUE7RUFDRSxhQUFhLEVBQUUsc0JBQXNCO0VBQ3JDLGVBQWUsRUFBRSxrQkFBa0I7RUFDbkMsVUFBVSxFQUFFLGVBQWU7RUFDM0IsUUFBUTtFQUNSLFNBQVM7RUFDVCxnQ0FBZ0M7RUFDaEMsV0FBVyxFQUFFLGVBQWU7RUFDNUIsWUFBWSxFQUFFLGdCQUFnQjtFQUM5QixpQkFBaUIsRUFBRSw0QkFBNEI7RUFDL0MsOEJBQThCLEVBQUUsbUJBQW1CO0VBQ25ELG9DQUFvQyxFQUFFLHFCQUFxQjtBQUM3RDs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixlQUFlO0lBQ2YsUUFBUTtJQUNSLFNBQVM7RUFDWCxnQ0FBZ0M7SUFDOUIsWUFBWTtJQUNaLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBRUE7O0lBRUksaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0kseUNBQXlDO0FBQzdDOztBQUVBO0lBQ0ksNENBQTRDO0FBQ2hEOztBQUVBO0lBQ0ksWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLDhCQUE4QjtJQUM5QixjQUFjO0lBQ2Qsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLDhCQUE4QjtJQUM5QixjQUFjO0lBQ2QsVUFBVTtJQUNWLGlCQUFpQjtJQUNqQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3R7XFxuICAgIC0tYWRkLWJ1dHRvbi1jb2xvcjogZ3JlZW47XFxuICAgIC0tY2FuY2VsLWJ1dHRvbi1jb2xvcjogdG9tYXRvO1xcbn1cXG5cXG4ubW9kYWwge1xcbiAgZGlzcGxheTogbm9uZTsgLyogSGlkZGVuIGJ5IGRlZmF1bHQgKi9cXG4gIHBvc2l0aW9uOiBmaXhlZDsgLyogU3RheSBpbiBwbGFjZSAqL1xcbiAgei1pbmRleDogMTsgLyogU2l0IG9uIHRvcCAqL1xcbiAgdG9wOiA1MCU7XFxuICBsZWZ0OiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gIHdpZHRoOiAxMDAlOyAvKiBGdWxsIHdpZHRoICovXFxuICBoZWlnaHQ6IDEwMCU7IC8qIEZ1bGwgaGVpZ2h0ICovXFxuICBvdmVyZmxvdzogdmlzaWJsZTsgLyogRW5hYmxlIHNjcm9sbCBpZiBuZWVkZWQgKi9cXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwKTsgLyogRmFsbGJhY2sgY29sb3IgKi9cXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43KTsgLyogQmxhY2sgdy8gb3BhY2l0eSAqL1xcbn1cXG5cXG4ubW9kYWwgPiBkaXZ7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogNDUlO1xcbiAgICBsZWZ0OiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gICAgd2lkdGg6IDUwMHB4O1xcbiAgICBoZWlnaHQ6IDE1MHB4O1xcbn1cXG5cXG4jbW9kYWwtY29udGVudHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuI21vZGFsLWNvbnRlbnQgPiBkaXZ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jbW9kYWwtY29udGVudCBpbnB1dCxcXG4jbW9kYWwtY29udGVudCBidXR0b257XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIG1hcmdpbjogMCAzMHB4O1xcbn1cXG5cXG4jbW9kYWwtY29udGVudCBpbnB1dHtcXG4gICAgd2lkdGg6IDc1JTtcXG59XFxuXFxuI21vZGFsLWNvbnRlbnQgYnV0dG9ue1xcbiAgICB3aWR0aDogMzAlO1xcbn1cXG5cXG4jbW9kYWwtY29udGVudCBidXR0b246Zmlyc3QtY2hpbGR7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFkZC1idXR0b24tY29sb3IpO1xcbn1cXG5cXG4jbW9kYWwtY29udGVudCBidXR0b246bGFzdC1jaGlsZHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2FuY2VsLWJ1dHRvbi1jb2xvcik7XFxufVxcblxcbi5tb2RhbCA+ICNtb2RhbC1jb250ZW50e1xcbiAgICB3aWR0aDogODAwcHg7XFxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICAgIHBhZGRpbmc6IDUwcHg7XFxufVxcblxcbi5tb2RhbCA+ICNtb2RhbC1jb250ZW50ID4gI3Rhc2stbW9kYWwtaW5wdXQtZGl2e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLm1vZGFsID4gI21vZGFsLWNvbnRlbnQgPiAjdGFzay1tb2RhbC1pbnB1dC1kaXYgPiBpbnB1dHtcXG4gICAgbWFyZ2luOiAyMHB4IDA7XFxufVxcblxcbiNuZXctdGFzay1tb2RhbCA+ICNtb2RhbC1jb250ZW50ID4gI3Rhc2stbW9kYWwtaW5wdXQtZGl2ID4gLmNvbnRhaW5lciA+ICNkcm9wLWRvd24tYnV0dG9ue1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhbnRpcXVld2hpdGU7XFxuICAgIG1hcmdpbjogMjBweCAwO1xcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxufVxcblxcbiNuZXctdGFzay1tb2RhbCA+ICNtb2RhbC1jb250ZW50ID4gI3Rhc2stbW9kYWwtaW5wdXQtZGl2ID4gLmNvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgbWFyZ2luLWxlZnQ6IDE4MHB4O1xcbn1cXG5cXG4jbmV3LXRhc2stbW9kYWwgPiAjbW9kYWwtY29udGVudCA+ICN0YXNrLW1vZGFsLWlucHV0LWRpdiA+IC5jb250YWluZXIgPiBzZWxlY3R7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGFudGlxdWV3aGl0ZTtcXG4gICAgbWFyZ2luOiAyMHB4IDA7XFxuICAgIHdpZHRoOiAyNSU7XFxuICAgIGZvbnQtc2l6ZTogMS4wcmVtO1xcbiAgICBwYWRkaW5nOiA4cHggMTVweDtcXG59XFxuXFxuI3Rhc2stbW9kYWwtYnV0dG9uLWRpdntcXG4gICAgbWFyZ2luLXRvcDogNDBweDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICghc2NyaXB0VXJsIHx8ICEvXmh0dHAocz8pOi8udGVzdChzY3JpcHRVcmwpKSkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdDA6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==