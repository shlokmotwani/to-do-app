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
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14);
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
_loadSidebar__WEBPACK_IMPORTED_MODULE_3__.lastBtnClicked = _loadSidebar__WEBPACK_IMPORTED_MODULE_3__.homeCategoryButtons[0];

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
/* harmony import */ var _loadFooter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(12);





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
let content;
let innerDiv;
let titleText;
let addTaskBtn;
let tasksDiv;
let tasksToLoad = [];





function loadContent() {
  content = null;
  addTaskBtn = document.createElement("div");
  addTaskBtn.id = "add-task-button";
  let plusIcon = new Image();
  plusIcon.src = _icons_plus_box_outline_svg__WEBPACK_IMPORTED_MODULE_0__;
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
  // logAllTasks();
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

function logAllTasks() {
  console.log("logAllTasks has been called");
  for (let i = 0; i < _index__WEBPACK_IMPORTED_MODULE_1__.allProjects.length; i++) {
    console.log("Project Title : " + _index__WEBPACK_IMPORTED_MODULE_1__.allProjects[i].name);
    for (let j = 0; j < _index__WEBPACK_IMPORTED_MODULE_1__.allProjects[i].tasks.length; j++) {
      console.log(_index__WEBPACK_IMPORTED_MODULE_1__.allProjects[i].tasks[j].title);
    }
  }
}




/***/ }),
/* 12 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   footer: () => (/* binding */ footer),
/* harmony export */   loadFooter: () => (/* binding */ loadFooter)
/* harmony export */ });
/* harmony import */ var _icons_heart_icon_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13);
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
/* 13 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e1fb78d58d2137315854.svg";

/***/ }),
/* 14 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createTask: () => (/* binding */ createTask)
/* harmony export */ });
function createTask(
  title="Blank",
  desc="Nothing here.",
  dueDate="",
  priority="low",
  notes="Empty",
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
}`, "",{"version":3,"sources":["webpack://./src/modal.css"],"names":[],"mappings":"AAAA;IACI,yBAAyB;IACzB,6BAA6B;AACjC;;AAEA;EACE,aAAa,EAAE,sBAAsB;EACrC,eAAe,EAAE,kBAAkB;EACnC,UAAU,EAAE,eAAe;EAC3B,QAAQ;EACR,SAAS;EACT,gCAAgC;EAChC,WAAW,EAAE,eAAe;EAC5B,YAAY,EAAE,gBAAgB;EAC9B,iBAAiB,EAAE,4BAA4B;EAC/C,8BAA8B,EAAE,mBAAmB;EACnD,oCAAoC,EAAE,qBAAqB;AAC7D;;AAEA;IACI,uBAAuB;IACvB,eAAe;IACf,QAAQ;IACR,SAAS;EACX,gCAAgC;IAC9B,YAAY;IACZ,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;;IAEI,iBAAiB;IACjB,YAAY;IACZ,cAAc;AAClB;;AAEA;IACI,UAAU;AACd;;AAEA;IACI,UAAU;AACd;;AAEA;IACI,yCAAyC;AAC7C;;AAEA;IACI,4CAA4C;AAChD","sourcesContent":[":root{\n    --add-button-color: green;\n    --cancel-button-color: tomato;\n}\n\n.modal {\n  display: none; /* Hidden by default */\n  position: fixed; /* Stay in place */\n  z-index: 1; /* Sit on top */\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 100%; /* Full width */\n  height: 100%; /* Full height */\n  overflow: visible; /* Enable scroll if needed */\n  background-color: rgb(0, 0, 0); /* Fallback color */\n  background-color: rgba(0, 0, 0, 0.7); /* Black w/ opacity */\n}\n\n.modal > div{\n    border: 1px solid white;\n    position: fixed;\n    top: 45%;\n    left: 50%;\n  transform: translate(-50%, -50%);\n    width: 500px;\n    height: 150px;\n}\n\n#modal-content{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    padding: 10px;\n}\n\n#modal-content > div{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n#modal-content input,\n#modal-content button{\n    font-size: 1.2rem;\n    padding: 5px;\n    margin: 0 30px;\n}\n\n#modal-content input{\n    width: 75%;\n}\n\n#modal-content button{\n    width: 30%;\n}\n\n#modal-content button:first-child{\n    background-color: var(--add-button-color);\n}\n\n#modal-content button:last-child{\n    background-color: var(--cancel-button-color);\n}"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwwQkFBMEIsbUNBQW1DO0FBQzdEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMEJBQTBCLG1DQUFtQztBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEI7QUFDOUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLGdGQUFnRixZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLE1BQU0sVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxZQUFZLE1BQU0sWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLFFBQVEsS0FBSyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sTUFBTSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLE1BQU0sVUFBVSxVQUFVLFlBQVksT0FBTyxNQUFNLFlBQVksYUFBYSxXQUFXLE9BQU8sWUFBWSxPQUFPLFVBQVUsWUFBWSxPQUFPLFlBQVksT0FBTyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLE9B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RUFBQzs7Ozs7O1VDdEV2QztVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7OztVRUFBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL3NyYy9sb2FkSG9tZVBhZ2UuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vc3JjL2xvYWRIZWFkZXIuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vc3JjL2xvYWRTaWRlYmFyLmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL3NyYy9sb2FkQ29udGVudC5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9zcmMvbG9hZEZvb3Rlci5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9zcmMvdGFzay5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9zcmMvbW9kYWwuY3NzPzNmZDkiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vc3JjL21vZGFsLmNzcyIsIndlYnBhY2s6Ly90by1kby1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvLWRvLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvLWRvLWFwcC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly90by1kby1hcHAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvLWRvLWFwcC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3RvLWRvLWFwcC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVQcm9qZWN0IH0gZnJvbSBcIi4vcHJvamVjdFwiO1xuaW1wb3J0IHsgY3JlYXRlVGFzayB9IGZyb20gXCIuL3Rhc2tcIjtcbmltcG9ydCB7IGxvYWRIb21lUGFnZSB9IGZyb20gXCIuL2xvYWRIb21lUGFnZVwiO1xuaW1wb3J0IHsgaG9tZUNhdGVnb3J5QnV0dG9ucywgbGFzdEJ0bkNsaWNrZWQgfSBmcm9tIFwiLi9sb2FkU2lkZWJhclwiO1xuaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcbmltcG9ydCBcIi4vbW9kYWwuY3NzXCI7XG5cbmxldCBhbGxQcm9qZWN0cyA9IFtdO1xuXG5sZXQgZ3ltID0gY3JlYXRlUHJvamVjdChcIkd5bVwiKTtcbmFkZFRvUHJvamVjdHMoZ3ltKTtcbmxldCBkYW5jZSA9IGNyZWF0ZVByb2plY3QoXCJEYW5jZVwiKTtcbmFkZFRvUHJvamVjdHMoZGFuY2UpO1xubGV0IHN0dWR5ID0gY3JlYXRlUHJvamVjdChcIlN0dWR5XCIpO1xuYWRkVG9Qcm9qZWN0cyhzdHVkeSk7XG5cbmxldCBneW1UYXNrT25lID0gY3JlYXRlVGFzayhcbiAgXCJHbyB0byBneW1cIixcbiAgXCJjaGVjayBvdXQgYWxsIGd5bXNcIixcbiAgXCIwMS8wMS8yMDI1XCIsXG4gIFwiaGlnaFwiLFxuICBcImxlYXZlIHlvdXIgaG91c2Ugb24gdGltZVwiLFxuICB0cnVlXG4pO1xuXG5sZXQgZ3ltVGFza1R3byA9IGNyZWF0ZVRhc2soXG4gIFwiRmluYWxpc2UgR3ltIFBsYW5cIixcbiAgXCJHZXQgZG9uZSB3aXRoIGd5bSBhbmQgdHJhaW5lcnNcIixcbiAgXCIwMS8wMS8yMDI1XCIsXG4gIFwiaGlnaFwiLFxuICBcImNob29zZSBhIHRyYWluZXIgd2l0aCBjZXJ0aWZpY2F0aW9uXCJcbik7XG5cbmxldCBneW1UYXNrVGhyZWUgPSBjcmVhdGVUYXNrKFxuICBcIlN0YXJ0IHdvcmtpbmcgb3V0XCIsXG4gIFwiRm9sbG93IFBQTCByb3V0aW5lXCIsXG4gIFwiMDEvMDEvMjAyNVwiLFxuICBcImxvd1wiLFxuICBcIlJlc3QgZm9yIDEtMiBtaW51dGVzIGluIGIvdyBzZXRzXCJcbik7XG5cbmd5bS50YXNrcy5wdXNoKGd5bVRhc2tPbmUpO1xuZ3ltLnRhc2tzLnB1c2goZ3ltVGFza1R3byk7XG5neW0udGFza3MucHVzaChneW1UYXNrVGhyZWUpO1xuXG5sZXQgc3R1ZHlUYXNrT25lID0gY3JlYXRlVGFzayhcbiAgXCJHbyB0byBsaWJyYXJ5XCIsXG4gIFwiY2hlY2sgb3V0IGFsbCBsaWJyYXJpZXNcIixcbiAgXCIwMS8wMS8yMDI1XCIsXG4gIFwiaGlnaFwiLFxuICBcImxlYXZlIHlvdXIgaG91c2Ugb24gdGltZVwiLFxuICB0cnVlXG4pO1xuXG5sZXQgc3R1ZHlUYXNrVHdvID0gY3JlYXRlVGFzayhcbiAgXCJGaW5hbGlzZSBsaWJyYXJ5IFBsYW5cIixcbiAgXCJHZXQgZG9uZSB3aXRoIGxpYnJhcnkgaW5jaGFyZ2VcIixcbiAgXCIwMS8wMS8yMDI1XCIsXG4gIFwiaGlnaFwiLFxuICBcImNob29zZSBhIGxpYnJhcnkgd2l0aCBnb29kIHJldmlld3NcIlxuKTtcblxubGV0IHN0dWR5VGFza1RocmVlID0gY3JlYXRlVGFzayhcbiAgXCJTdGFydCByZWFkaW5nIG1vcmVcIixcbiAgXCJGb2xsb3cgYWJjIHJvdXRpbmVcIixcbiAgXCIwMS8wMS8yMDI1XCIsXG4gIFwibG93XCIsXG4gIFwiUmVzdCBmb3IgNSBtaW51dGVzIGFmdGVyIDI1bWlucyBzZXNoXCJcbik7XG5cbnN0dWR5LnRhc2tzLnB1c2goc3R1ZHlUYXNrT25lKTtcbnN0dWR5LnRhc2tzLnB1c2goc3R1ZHlUYXNrVHdvKTtcbnN0dWR5LnRhc2tzLnB1c2goc3R1ZHlUYXNrVGhyZWUpO1xuXG5sb2FkSG9tZVBhZ2UoKTtcblxuLy9TaG93IGFsbCB0YXNrcyBieSBkZWZhdWx0XG5ob21lQ2F0ZWdvcnlCdXR0b25zWzBdLmNsaWNrKCk7XG5sYXN0QnRuQ2xpY2tlZCA9IGhvbWVDYXRlZ29yeUJ1dHRvbnNbMF07XG5cbmZ1bmN0aW9uIGFkZFRvUHJvamVjdHMocHJvamVjdCl7XG4gIGFsbFByb2plY3RzLnB1c2gocHJvamVjdCk7XG59XG5cbmV4cG9ydCB7IGFsbFByb2plY3RzLCBhZGRUb1Byb2plY3RzIH07XG4iLCJpbXBvcnQgeyBhZGRUb1Byb2plY3RzIH0gZnJvbSBcIi4vaW5kZXhcIjtcbmltcG9ydCB7IGxvYWRIb21lUGFnZSB9IGZyb20gXCIuL2xvYWRIb21lUGFnZVwiO1xuXG5sZXQgbW9kYWw7XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVQcm9qZWN0KG5hbWUpIHtcbiAgY29uc3QgdGFza3MgPSBbXTtcbiAgcmV0dXJuIHsgbmFtZSwgdGFza3MgfTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTmV3UHJvamVjdE1vZGFsKCkge1xuICBtb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG1vZGFsLmlkID0gXCJuZXdQcm9qZWN0TW9kYWxcIjtcbiAgbW9kYWwuY2xhc3NMaXN0LmFkZChcIm1vZGFsXCIpO1xuICBsZXQgbW9kYWxDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbW9kYWxDb250ZW50LmlkID0gXCJtb2RhbC1jb250ZW50XCI7XG4gIGxldCBpbnB1dERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGxldCBidG5EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBsZXQgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGBpbnB1dGApO1xuICBwcm9qZWN0TmFtZS50eXBlID0gXCJ0ZXh0XCI7XG4gIHByb2plY3ROYW1lLnBsYWNlaG9sZGVyID0gXCJQcm9qZWN0IE5hbWVcIjtcbiAgbGV0IGFkZEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGFkZEJ0bi50ZXh0Q29udGVudCA9IFwiQWRkXCI7XG5cbiAgYWRkQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgaWYgKHByb2plY3ROYW1lLnZhbHVlKSB7XG4gICAgICBsZXQgcHJvaiA9IGNyZWF0ZVByb2plY3QocHJvamVjdE5hbWUudmFsdWUpO1xuICAgICAgYWRkVG9Qcm9qZWN0cyhwcm9qKTtcbiAgICAgIGRvY3VtZW50LmJvZHkuaW5uZXJIVE1MID0gXCJcIjtcbiAgICAgIGxvYWRIb21lUGFnZSgpO1xuICAgIH1cbiAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gIH0pO1xuXG4gIGxldCBjYW5jZWxCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBjYW5jZWxCdG4udGV4dENvbnRlbnQgPSBcIkNhbmNlbFwiO1xuICBjYW5jZWxCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gIH0pO1xuXG4gIGlucHV0RGl2LmFwcGVuZENoaWxkKHByb2plY3ROYW1lKTtcbiAgYnRuRGl2LmFwcGVuZENoaWxkKGFkZEJ0bik7XG4gIGJ0bkRpdi5hcHBlbmRDaGlsZChjYW5jZWxCdG4pO1xuXG4gIG1vZGFsQ29udGVudC5hcHBlbmRDaGlsZChpbnB1dERpdik7XG4gIG1vZGFsQ29udGVudC5hcHBlbmRDaGlsZChidG5EaXYpO1xuICBtb2RhbC5hcHBlbmRDaGlsZChtb2RhbENvbnRlbnQpO1xuICByZXR1cm4gbW9kYWw7XG59XG5leHBvcnQgeyBjcmVhdGVOZXdQcm9qZWN0TW9kYWwgfTtcbiIsImltcG9ydCB7IGhlYWRlciwgbG9hZEhlYWRlciB9IGZyb20gXCIuL2xvYWRIZWFkZXJcIjtcbmltcG9ydCB7IHNpZGViYXIsIGxvYWRTaWRlYmFyIH0gZnJvbSBcIi4vbG9hZFNpZGViYXJcIjtcbmltcG9ydCB7IGNvbnRlbnQsIGxvYWRDb250ZW50IH0gZnJvbSBcIi4vbG9hZENvbnRlbnRcIjtcbmltcG9ydCB7IGZvb3RlciwgbG9hZEZvb3RlciB9IGZyb20gXCIuL2xvYWRGb290ZXJcIjtcblxubGV0IGhvbWVQYWdlO1xuXG5mdW5jdGlvbiBsb2FkSG9tZVBhZ2UoKSB7XG4gIGhvbWVQYWdlID0gbnVsbDtcbiAgaG9tZVBhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBob21lUGFnZS5pZCA9IFwiZGl2LWhvbWUtcGFnZVwiO1xuICBsb2FkSGVhZGVyKCk7XG4gIGxvYWRTaWRlYmFyKCk7XG4gIGxvYWRDb250ZW50KCk7XG4gIGxvYWRGb290ZXIoKTtcblxuICBob21lUGFnZS5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICBob21lUGFnZS5hcHBlbmRDaGlsZChzaWRlYmFyKTtcbiAgaG9tZVBhZ2UuYXBwZW5kQ2hpbGQoY29udGVudCk7XG4gIGhvbWVQYWdlLmFwcGVuZENoaWxkKGZvb3Rlcik7XG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoaG9tZVBhZ2UpO1xufVxuXG5leHBvcnQgeyBob21lUGFnZSwgbG9hZEhvbWVQYWdlfTtcbiIsImltcG9ydCB7IHNpZGViYXIgfSBmcm9tIFwiLi9sb2FkU2lkZWJhclwiO1xuaW1wb3J0IHsgaG9tZVBhZ2UgfSBmcm9tIFwiLi9sb2FkSG9tZVBhZ2VcIjtcblxubGV0IGhlYWRlcjtcbmxldCBoZWFkZXJMZWZ0O1xubGV0IGhlYWRlckNlbnRlcjtcbmxldCBoZWFkZXJSaWdodDtcbmxldCBoaWRlU2lkZWJhckJ0bjtcbmxldCBpc1NpZGViYXJWaXNpYmxlID0gdHJ1ZTtcbmxldCBsb2dvSW1hZ2U7XG5sZXQgbG9nb1RleHQ7XG5sZXQgbG9nb1RleHRMZWZ0O1xubGV0IGxvZ29UZXh0UmlnaHQ7XG5cbmZ1bmN0aW9uIGxvYWRIZWFkZXIoKSB7XG4gIGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGhlYWRlci5pZCA9IFwiZGl2LWhlYWRlclwiO1xuICBoZWFkZXJMZWZ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaGVhZGVyTGVmdC5pZCA9IFwiZGl2LWhlYWRlci1sZWZ0XCI7XG4gIGhlYWRlckNlbnRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGhlYWRlckNlbnRlci5pZCA9IFwiZGl2LWhlYWRlci1jZW50ZXJcIjtcbiAgaGVhZGVyUmlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBoZWFkZXJSaWdodC5pZCA9IFwiZGl2LWhlYWRlci1yaWdodFwiO1xuXG4gIGhpZGVTaWRlYmFyQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgaGlkZVNpZGViYXJCdG4uaWQgPSBcImhpZGUtc2lkZWJhci1idG5cIjtcbiAgaGVhZGVyTGVmdC5hcHBlbmRDaGlsZChoaWRlU2lkZWJhckJ0bik7XG4gIGhlYWRlci5hcHBlbmRDaGlsZChoZWFkZXJMZWZ0KTtcbiAgaGVhZGVyLmFwcGVuZENoaWxkKGhlYWRlckNlbnRlcik7XG4gIGhlYWRlci5hcHBlbmRDaGlsZChoZWFkZXJSaWdodCk7XG5cbiAgaGlkZVNpZGViYXJCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcIkhpZGUgU2lkZWJhciBCdXR0b24gY2xpY2tlZFwiKTtcbiAgICBpZiAoaXNTaWRlYmFyVmlzaWJsZSkge1xuICAgICAgaXNTaWRlYmFyVmlzaWJsZSA9IGZhbHNlO1xuICAgICAgc2lkZWJhci5zdHlsZS5jc3NUZXh0ID0gYFxuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7YDtcblxuICAgICAgaG9tZVBhZ2Uuc3R5bGUuY3NzVGV4dCA9IGBkaXNwbGF5OiBncmlkO1xuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyMDBweCAxZnI7XG4gICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDdmciA5MGZyIDNmcjtcbiAgICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxuICAgICAgXCJoZHIgaGRyXCJcbiAgICAgIFwiY250IGNudFwiXG4gICAgICBcImZ0ciBmdHJcIjtgO1xuXG4gICAgfSBlbHNlIHtcbiAgICAgIGlzU2lkZWJhclZpc2libGUgPSB0cnVlO1xuICAgICAgc2lkZWJhci5zdHlsZS5jc3NUZXh0ID0gYFxuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO2A7XG5cbiAgICAgIGhvbWVQYWdlLnN0eWxlLmNzc1RleHQgPSBgZGlzcGxheTogZ3JpZDtcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjAwcHggMWZyO1xuICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA3ZnIgOTBmciAzZnI7XG4gICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcbiAgICAgIFwiaGRyIGhkclwiXG4gICAgICBcInNiciBjbnRcIlxuICAgICAgXCJmdHIgZnRyXCI7YDtcbiAgICB9XG4gIH0pO1xuXG4gIGxvZ29JbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGxvZ29JbWFnZS5pZCA9IFwibG9nby1pbWFnZVwiO1xuICBsb2dvVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGxvZ29UZXh0LmlkID0gXCJsb2dvLXRleHRcIjtcbiAgbG9nb1RleHRMZWZ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIGxvZ29UZXh0TGVmdC5pZCA9IFwibG9nby10ZXh0LWxlZnRcIjtcbiAgbG9nb1RleHRMZWZ0LnRleHRDb250ZW50ID0gXCJUb1wiO1xuICBsb2dvVGV4dFJpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIGxvZ29UZXh0UmlnaHQuaWQgPSBcImxvZ28tdGV4dC1yaWdodFwiO1xuICBsb2dvVGV4dFJpZ2h0LnRleHRDb250ZW50ID0gXCJEb1wiO1xuICBsb2dvVGV4dC5hcHBlbmRDaGlsZChsb2dvVGV4dExlZnQpO1xuICBsb2dvVGV4dC5hcHBlbmRDaGlsZChsb2dvVGV4dFJpZ2h0KTtcblxuICBoZWFkZXJDZW50ZXIuYXBwZW5kQ2hpbGQobG9nb0ltYWdlKTtcbiAgaGVhZGVyQ2VudGVyLmFwcGVuZENoaWxkKGxvZ29UZXh0KTtcbn1cblxuZXhwb3J0IHsgaGVhZGVyLCBsb2FkSGVhZGVyIH07XG4iLCJpbXBvcnQgYWxsVGFza3NJbWFnZSBmcm9tIFwiLi9pY29ucy9pbmJveC5zdmdcIjtcbmltcG9ydCB0b2RheUltYWdlIGZyb20gXCIuL2ljb25zL2NhbGVuZGFyLnN2Z1wiO1xuaW1wb3J0IG5leHQ3ZGF5c0ltYWdlIGZyb20gXCIuL2ljb25zL2NvbnRlbnQtZHVwbGljYXRlLnN2Z1wiO1xuaW1wb3J0IGltcG9ydGFudEltYWdlIGZyb20gXCIuL2ljb25zL3N0YXIuc3ZnXCI7XG5pbXBvcnQgbWludXNJbWFnZSBmcm9tIFwiLi9pY29ucy9taW51cy5zdmdcIjtcbmltcG9ydCBwbHVzSW1hZ2UgZnJvbSBcIi4vaWNvbnMvcGx1cy1ib3gtb3V0bGluZS5zdmdcIjtcbmltcG9ydCB7IGFsbFByb2plY3RzIH0gZnJvbSBcIi4vaW5kZXguanNcIjtcblxuaW1wb3J0IHsgY3JlYXRlTmV3UHJvamVjdE1vZGFsIH0gZnJvbSBcIi4vcHJvamVjdC5qc1wiO1xuaW1wb3J0IHsgY29udGVudCB9IGZyb20gXCIuL2xvYWRDb250ZW50LmpzXCI7XG5pbXBvcnQgeyB0aXRsZVRleHQgfSBmcm9tIFwiLi9sb2FkQ29udGVudC5qc1wiO1xuaW1wb3J0IHsgc2V0VGFza3NUb0xvYWQgfSBmcm9tIFwiLi9sb2FkQ29udGVudC5qc1wiO1xuaW1wb3J0IHsgbG9hZFRhc2tDYXJkIH0gZnJvbSBcIi4vbG9hZENvbnRlbnQuanNcIjtcblxubGV0IHNpZGViYXI7XG5sZXQgaG9tZUNhcmQ7XG5sZXQgaG9tZUNhcmRUaXRsZTtcbmxldCBob21lQ2FyZExpbmU7XG5sZXQgcHJvamVjdENhcmQ7XG5sZXQgcHJvamVjdENhcmRUaXRsZTtcbmxldCBwcm9qZWN0Q2FyZExpbmU7XG5sZXQgYWRkTmV3UHJvamVjdEJ0bjtcbmxldCBob21lQ2F0ZWdvcnlCdXR0b25zID0gW107XG5cbmxldCBhbGxUYXNrc0ljb24gPSBuZXcgSW1hZ2UoKTtcbmxldCB0b2RheUljb24gPSBuZXcgSW1hZ2UoKTtcbmxldCBuZXh0N2RheXNJY29uID0gbmV3IEltYWdlKCk7XG5sZXQgaW1wb3J0YW50SWNvbiA9IG5ldyBJbWFnZSgpO1xubGV0IG1pbnVzSWNvbjtcbmxldCBwbHVzSWNvbiA9IG5ldyBJbWFnZSgpO1xuXG5hbGxUYXNrc0ljb24uc3JjID0gYWxsVGFza3NJbWFnZTtcbnRvZGF5SWNvbi5zcmMgPSB0b2RheUltYWdlO1xubmV4dDdkYXlzSWNvbi5zcmMgPSBuZXh0N2RheXNJbWFnZTtcbmltcG9ydGFudEljb24uc3JjID0gaW1wb3J0YW50SW1hZ2U7XG5wbHVzSWNvbi5zcmMgPSBwbHVzSW1hZ2U7XG5cbmxldCBob21lQ2F0ZWdvcmllcyA9IFtcbiAge1xuICAgIGljb246IGFsbFRhc2tzSWNvbixcbiAgICB0ZXh0OiBcIkFsbCBUYXNrc1wiLFxuICB9LFxuICB7XG4gICAgaWNvbjogdG9kYXlJY29uLFxuICAgIHRleHQ6IFwiVG9kYXlcIixcbiAgfSxcbiAge1xuICAgIGljb246IG5leHQ3ZGF5c0ljb24sXG4gICAgdGV4dDogXCJOZXh0IDcgZGF5c1wiLFxuICB9LFxuICB7XG4gICAgaWNvbjogaW1wb3J0YW50SWNvbixcbiAgICB0ZXh0OiBcIkltcG9ydGFudFwiLFxuICB9LFxuXTtcblxuZnVuY3Rpb24gbG9hZEhvbWVDYXJkKCkge1xuICBob21lQ2FyZCA9IG51bGw7XG4gIGhvbWVDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaG9tZUNhcmQuaWQgPSBcImhvbWUtY2FyZFwiO1xuXG4gIGhvbWVDYXJkVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgaG9tZUNhcmRUaXRsZS50ZXh0Q29udGVudCA9IFwiSG9tZVwiO1xuICBob21lQ2FyZExpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaHJcIik7XG5cbiAgaG9tZUNhcmQuYXBwZW5kQ2hpbGQoaG9tZUNhcmRUaXRsZSk7XG4gIGhvbWVDYXJkLmFwcGVuZENoaWxkKGhvbWVDYXJkTGluZSk7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBob21lQ2F0ZWdvcmllcy5sZW5ndGg7IGkrKykge1xuICAgIGxldCBjYXRlZ29yeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY2F0ZWdvcnkuY2xhc3NMaXN0LmFkZChcImhvbWUtY2F0ZWdvcmllc1wiKTtcbiAgICBsZXQgY2F0ZWdvcnlJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjYXRlZ29yeUljb24uYXBwZW5kQ2hpbGQoaG9tZUNhdGVnb3JpZXNbaV0uaWNvbik7XG5cbiAgICBsZXQgY2F0ZWdvcnlUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgY2F0ZWdvcnlUZXh0LnRleHRDb250ZW50ID0gaG9tZUNhdGVnb3JpZXNbaV0udGV4dDtcblxuICAgIGNhdGVnb3J5LmFwcGVuZENoaWxkKGNhdGVnb3J5SWNvbik7XG4gICAgY2F0ZWdvcnkuYXBwZW5kQ2hpbGQoY2F0ZWdvcnlUZXh0KTtcblxuICAgIC8vIGNvbnNvbGUubG9nKGNhdGVnb3J5KTtcblxuICAgIGhvbWVDYXRlZ29yeUJ1dHRvbnMucHVzaChjYXRlZ29yeSk7XG5cbiAgICBjYXRlZ29yeS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgdGl0bGVUZXh0LnRleHRDb250ZW50ID0gaG9tZUNhdGVnb3JpZXNbaV0udGV4dDtcbiAgICAgIHNldFRhc2tzVG9Mb2FkKGhvbWVDYXRlZ29yaWVzW2ldLnRleHQpO1xuICAgICAgbG9hZFRhc2tDYXJkKCk7XG4gICAgfSk7XG5cbiAgICBob21lQ2FyZC5hcHBlbmRDaGlsZChjYXRlZ29yeSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gbG9hZFByb2plY3RDYXJkKCkge1xuICBwcm9qZWN0Q2FyZCA9IG51bGw7XG4gIHByb2plY3RDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgcHJvamVjdENhcmQuaWQgPSBcInByb2plY3QtY2FyZFwiO1xuXG4gIHByb2plY3RDYXJkVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgcHJvamVjdENhcmRUaXRsZS50ZXh0Q29udGVudCA9IFwiUHJvamVjdHNcIjtcbiAgcHJvamVjdENhcmRMaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhyXCIpO1xuXG4gIHByb2plY3RDYXJkLmFwcGVuZENoaWxkKHByb2plY3RDYXJkVGl0bGUpO1xuICBwcm9qZWN0Q2FyZC5hcHBlbmRDaGlsZChwcm9qZWN0Q2FyZExpbmUpO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYWxsUHJvamVjdHMubGVuZ3RoOyBpKyspIHtcbiAgICBsZXQgcHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcHJvamVjdC5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1jYXRlZ29yaWVzXCIpO1xuICAgIGxldCBwcm9qZWN0SWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgICAvLyBtaW51c0ljb24gaGFzIHRvIGJlIHJlLWNyZWF0ZWQgaW4gdGhlIGxvb3BcbiAgICAvLyB0byBhcHBlbmQgbXVsdGlwbGUgdW5pcXVlIGVsZW1lbnRzIHRvIHRoZSBwcm9qZWN0IGRpdlxuICAgIG1pbnVzSWNvbiA9IG5ldyBJbWFnZSgpO1xuICAgIG1pbnVzSWNvbi5zcmMgPSBtaW51c0ltYWdlO1xuICAgIHByb2plY3RJY29uLmFwcGVuZENoaWxkKG1pbnVzSWNvbik7XG5cbiAgICBsZXQgcHJvamVjdFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBwcm9qZWN0VGV4dC50ZXh0Q29udGVudCA9IGFsbFByb2plY3RzW2ldLm5hbWU7XG5cbiAgICBwcm9qZWN0LmFwcGVuZENoaWxkKHByb2plY3RJY29uKTtcbiAgICBwcm9qZWN0LmFwcGVuZENoaWxkKHByb2plY3RUZXh0KTtcblxuICAgIHByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIHRpdGxlVGV4dC50ZXh0Q29udGVudCA9IHByb2plY3RUZXh0LnRleHRDb250ZW50O1xuICAgICAgc2V0VGFza3NUb0xvYWQocHJvamVjdFRleHQudGV4dENvbnRlbnQpO1xuICAgICAgbG9hZFRhc2tDYXJkKCk7XG4gICAgfSk7XG5cbiAgICBwcm9qZWN0Q2FyZC5hcHBlbmRDaGlsZChwcm9qZWN0KTtcbiAgfVxuXG4gIGxldCBhZGROZXdQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgYWRkTmV3UHJvamVjdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGFkZE5ld1Byb2plY3QuYXBwZW5kQ2hpbGQoYWRkTmV3UHJvamVjdEJ0bik7XG4gIGFkZE5ld1Byb2plY3RCdG4uYXBwZW5kQ2hpbGQocGx1c0ljb24pO1xuXG4gIGFkZE5ld1Byb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGxvYWRQcm9qZWN0TW9kYWwpO1xuXG4gIHByb2plY3RDYXJkLmFwcGVuZENoaWxkKGFkZE5ld1Byb2plY3QpO1xufVxuXG5mdW5jdGlvbiBsb2FkU2lkZWJhcigpIHtcbiAgc2lkZWJhciA9IG51bGw7XG4gIHNpZGViYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBzaWRlYmFyLmlkID0gXCJkaXYtc2lkZWJhclwiO1xuXG4gIGxvYWRIb21lQ2FyZCgpO1xuICBsb2FkUHJvamVjdENhcmQoKTtcblxuICBzaWRlYmFyLmFwcGVuZENoaWxkKGhvbWVDYXJkKTtcbiAgc2lkZWJhci5hcHBlbmRDaGlsZChwcm9qZWN0Q2FyZCk7XG59XG5cbmZ1bmN0aW9uIGxvYWRQcm9qZWN0TW9kYWwoKSB7XG4gIGNvbnNvbGUubG9nKFwiYWRkTmV3UHJvamVjdCBjbGlja2VkXCIpO1xuXG4gIGxldCBtb2RhbCA9IGNyZWF0ZU5ld1Byb2plY3RNb2RhbCgpO1xuICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICBjb250ZW50LmFwcGVuZChtb2RhbCk7XG5cbiAgd2luZG93Lm9uY2xpY2sgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQudGFyZ2V0ID09IG1vZGFsKSB7XG4gICAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgfVxuICB9O1xufVxuXG5leHBvcnQgeyBzaWRlYmFyLCBsb2FkU2lkZWJhciwgbG9hZFByb2plY3RDYXJkLCBob21lQ2F0ZWdvcnlCdXR0b25zIH07XG4iLCJsZXQgY29udGVudDtcbmxldCBpbm5lckRpdjtcbmxldCB0aXRsZVRleHQ7XG5sZXQgYWRkVGFza0J0bjtcbmxldCB0YXNrc0RpdjtcbmxldCB0YXNrc1RvTG9hZCA9IFtdO1xuXG5pbXBvcnQgcGx1c0ltYWdlIGZyb20gXCIuL2ljb25zL3BsdXMtYm94LW91dGxpbmUuc3ZnXCI7XG5cbmltcG9ydCB7IGFsbFByb2plY3RzIH0gZnJvbSBcIi4vaW5kZXhcIjtcblxuZnVuY3Rpb24gbG9hZENvbnRlbnQoKSB7XG4gIGNvbnRlbnQgPSBudWxsO1xuICBhZGRUYXNrQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgYWRkVGFza0J0bi5pZCA9IFwiYWRkLXRhc2stYnV0dG9uXCI7XG4gIGxldCBwbHVzSWNvbiA9IG5ldyBJbWFnZSgpO1xuICBwbHVzSWNvbi5zcmMgPSBwbHVzSW1hZ2U7XG4gIGFkZFRhc2tCdG4uYXBwZW5kQ2hpbGQocGx1c0ljb24pO1xuXG4gIGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb250ZW50LmlkID0gXCJkaXYtY29udGVudFwiO1xuICBpbm5lckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGlubmVyRGl2LmlkID0gXCJkaXYtaW5uZXJEaXZcIjtcblxuICBsZXQgdGl0bGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0aXRsZURpdi5pZCA9IFwiY29udGVudC10aXRsZVwiO1xuICB0aXRsZVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgdGl0bGVUZXh0LmlkID0gXCJjb250ZW50LXRpdGxlLXRleHRcIjtcblxuICBpZiAodGl0bGVUZXh0LnRleHRDb250ZW50ID09IFwiXCIpIHtcbiAgICB0aXRsZVRleHQudGV4dENvbnRlbnQgPSBcIlRpdGxlXCI7XG4gIH1cbiAgdGFza3NEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0YXNrc0Rpdi5pZCA9IFwiY29udGVudC10YXNrc1wiO1xuXG4gIHRpdGxlRGl2LmFwcGVuZENoaWxkKHRpdGxlVGV4dCk7XG4gIGlubmVyRGl2LmFwcGVuZENoaWxkKHRpdGxlRGl2KTtcbiAgaW5uZXJEaXYuYXBwZW5kQ2hpbGQodGFza3NEaXYpO1xuICBpbm5lckRpdi5hcHBlbmRDaGlsZChhZGRUYXNrQnRuKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChpbm5lckRpdik7XG5cbiAgbG9hZFRhc2tDYXJkKCk7XG4gIC8vIGxvZ0FsbFRhc2tzKCk7XG59XG5cbmZ1bmN0aW9uIHNldFRhc2tzVG9Mb2FkKHByb2plY3ROYW1lKSB7XG4gIHRhc2tzVG9Mb2FkID0gW107XG4gIGNvbnNvbGUubG9nKFwic2V0VGFza3NUb0xvYWQgZnVuY3Rpb24gY2FsbGVkXCIpO1xuICBpZiAocHJvamVjdE5hbWUgPT0gXCJBbGwgVGFza3NcIikge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWxsUHJvamVjdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgYWxsUHJvamVjdHNbaV0udGFza3MubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgdGFza3NUb0xvYWQucHVzaChhbGxQcm9qZWN0c1tpXS50YXNrc1tqXSk7XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWxsUHJvamVjdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChhbGxQcm9qZWN0c1tpXS5uYW1lID09IHByb2plY3ROYW1lKSB7XG4gICAgICAgIHRhc2tzVG9Mb2FkLnB1c2goLi4uYWxsUHJvamVjdHNbaV0udGFza3MpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBjb25zb2xlLmxvZyh0YXNrc1RvTG9hZCk7XG59XG5cbmZ1bmN0aW9uIGxvYWRUYXNrQ2FyZCgpIHtcbiAgY29uc29sZS5sb2coXCJsb2FkVGFza0NhcmQgaGFzIGJlZW4gY2FsbGVkXCIpO1xuICB0YXNrc0Rpdi5pbm5lckhUTUwgPSBcIlwiO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdGFza3NUb0xvYWQubGVuZ3RoOyBpKyspIHtcbiAgICBsZXQgdGFza0NhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbGV0IGRlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGxldCBkdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBsZXQgcHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGxldCBub3RlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbGV0IGlzQ29tcGxldGVkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICAgIGxldCB0aXRsZVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICBsZXQgZGVzY1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICBsZXQgZHVlRGF0ZVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICBsZXQgcHJpb3JpdHlUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgbGV0IG5vdGVzVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIGxldCBpc0NvbXBsZXRlZFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcblxuICAgIHRpdGxlVGV4dC50ZXh0Q29udGVudCA9IHRhc2tzVG9Mb2FkW2ldLnRpdGxlO1xuICAgIGRlc2NUZXh0LnRleHRDb250ZW50ID0gdGFza3NUb0xvYWRbaV0uZGVzYztcbiAgICBkdWVEYXRlVGV4dC50ZXh0Q29udGVudCA9IHRhc2tzVG9Mb2FkW2ldLmR1ZURhdGU7XG4gICAgcHJpb3JpdHkudGV4dENvbnRlbnQgPSB0YXNrc1RvTG9hZFtpXS5wcmlvcml0eTtcbiAgICBub3Rlc1RleHQudGV4dENvbnRlbnQgPSB0YXNrc1RvTG9hZFtpXS5ub3RlcztcbiAgICBpc0NvbXBsZXRlZFRleHQudGV4dENvbnRlbnQgPSB0YXNrc1RvTG9hZFtpXS5pc0NvbXBsZXRlZDtcblxuICAgIHRpdGxlLmFwcGVuZENoaWxkKHRpdGxlVGV4dCk7XG4gICAgZGVzYy5hcHBlbmRDaGlsZChkZXNjVGV4dCk7XG4gICAgZHVlRGF0ZS5hcHBlbmRDaGlsZChkdWVEYXRlVGV4dCk7XG4gICAgcHJpb3JpdHkuYXBwZW5kQ2hpbGQocHJpb3JpdHlUZXh0KTtcbiAgICBub3Rlcy5hcHBlbmRDaGlsZChub3Rlc1RleHQpO1xuICAgIGlzQ29tcGxldGVkLmFwcGVuZENoaWxkKGlzQ29tcGxldGVkVGV4dCk7XG5cbiAgICB0YXNrQ2FyZC5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgdGFza0NhcmQuYXBwZW5kQ2hpbGQoZGVzYyk7XG4gICAgdGFza0NhcmQuYXBwZW5kQ2hpbGQoZHVlRGF0ZSk7XG4gICAgdGFza0NhcmQuYXBwZW5kQ2hpbGQocHJpb3JpdHkpO1xuICAgIHRhc2tDYXJkLmFwcGVuZENoaWxkKG5vdGVzKTtcbiAgICB0YXNrQ2FyZC5hcHBlbmRDaGlsZChpc0NvbXBsZXRlZCk7XG5cbiAgICB0YXNrc0Rpdi5hcHBlbmRDaGlsZCh0YXNrQ2FyZCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gbG9nQWxsVGFza3MoKSB7XG4gIGNvbnNvbGUubG9nKFwibG9nQWxsVGFza3MgaGFzIGJlZW4gY2FsbGVkXCIpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGFsbFByb2plY3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc29sZS5sb2coXCJQcm9qZWN0IFRpdGxlIDogXCIgKyBhbGxQcm9qZWN0c1tpXS5uYW1lKTtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IGFsbFByb2plY3RzW2ldLnRhc2tzLmxlbmd0aDsgaisrKSB7XG4gICAgICBjb25zb2xlLmxvZyhhbGxQcm9qZWN0c1tpXS50YXNrc1tqXS50aXRsZSk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCB7IGNvbnRlbnQsIGxvYWRDb250ZW50LCB0aXRsZVRleHQsIHNldFRhc2tzVG9Mb2FkLCBsb2FkVGFza0NhcmQgfTtcbiIsImxldCBmb290ZXI7XG5sZXQgd3JhcHBlcjtcbmxldCBsZWZ0RGl2O1xubGV0IGNlbnRlckRpdjtcbmxldCByaWdodERpdjtcblxuaW1wb3J0IGhlYXJ0SW1hZ2UgZnJvbSBcIi4vaWNvbnMvaGVhcnRfaWNvbi5zdmdcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRGb290ZXIoKSB7XG4gIGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGZvb3Rlci5pZCA9IFwiZGl2LWZvb3RlclwiO1xuXG4gIHdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gIGxlZnREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBsZWZ0RGl2LnRleHRDb250ZW50ID0gXCJtYWRlIHdpdGggXCI7XG4gIGNlbnRlckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGxldCBoZWFydEljb24gPSBuZXcgSW1hZ2UoKTtcbiAgaGVhcnRJY29uLnNyYyA9IGhlYXJ0SW1hZ2U7XG4gIGNlbnRlckRpdi5hcHBlbmRDaGlsZChoZWFydEljb24pO1xuICByaWdodERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGxldCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIHRleHQudGV4dENvbnRlbnQgPSBcIiBieSBcIjtcbiAgbGV0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgbGluay50ZXh0Q29udGVudCA9IFwic2hsb2suY29kZXNcIjtcbiAgbGluay5ocmVmID0gXCJodHRwczovL2dpdGh1Yi5jb20vc2hsb2ttb3R3YW5pXCI7XG4gIGxpbmsudGFyZ2V0ID0gXCJfYmxhbmtcIjtcblxuICByaWdodERpdi5hcHBlbmRDaGlsZCh0ZXh0KTtcbiAgcmlnaHREaXYuYXBwZW5kQ2hpbGQobGluayk7XG5cbiAgd3JhcHBlci5hcHBlbmRDaGlsZChsZWZ0RGl2KTtcbiAgd3JhcHBlci5hcHBlbmRDaGlsZChjZW50ZXJEaXYpO1xuICB3cmFwcGVyLmFwcGVuZENoaWxkKHJpZ2h0RGl2KTtcblxuICBmb290ZXIuYXBwZW5kQ2hpbGQod3JhcHBlcik7XG59XG5cbmV4cG9ydCB7IGZvb3RlciB9O1xuIiwiZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVRhc2soXG4gIHRpdGxlPVwiQmxhbmtcIixcbiAgZGVzYz1cIk5vdGhpbmcgaGVyZS5cIixcbiAgZHVlRGF0ZT1cIlwiLFxuICBwcmlvcml0eT1cImxvd1wiLFxuICBub3Rlcz1cIkVtcHR5XCIsXG4gIGlzQ29tcGxldGVkID0gZmFsc2Vcbikge1xuICByZXR1cm4ge1xuICAgIHRpdGxlLFxuICAgIGRlc2MsXG4gICAgaXNDb21wbGV0ZWQsXG4gICAgZHVlRGF0ZSxcbiAgICBwcmlvcml0eSxcbiAgICBub3RlcyxcbiAgfTtcbn1cbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ljb25zL2NoZWNrLWFsbC5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL2ljb25zL2hhbWJ1cmdlci1pY29uLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYDpyb290IHtcbiAgLS1zaWRlYmFyLWJnLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDApO1xufVxuXG4qIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5odG1sLFxuYm9keSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbmRpdiB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi8qIGFueSBjaGFuZ2UgaGVyZSBzaG91bGQgYWxzbyBiZSBtYWRlIGluIGxvYWRIZWFkZXIuanMgKi9cbiNkaXYtaG9tZS1wYWdlIHtcbiAgbWluLWhlaWdodDogODAwcHg7XG4gIG1pbi1oZWlnaHQ6IDgwMHB4O1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIwMHB4IDFmcjtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA3ZnIgOTBmciAzZnI7XG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6XG4gICAgXCJoZHIgaGRyXCJcbiAgICBcInNiciBjbnRcIlxuICAgIFwiZnRyIGZ0clwiO1xufVxuXG4jZGl2LWhlYWRlciB7XG4gIGdyaWQtYXJlYTogaGRyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbiNkaXYtaGVhZGVyLWxlZnQge1xuICB3aWR0aDogMjAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4jZGl2LWhlYWRlci1jZW50ZXIsXG4jbG9nby10ZXh0IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbiNsb2dvLWltYWdlIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICB3aWR0aDogNzBweDtcbiAgaGVpZ2h0OiA3MHB4O1xufVxuXG4jbG9nby10ZXh0IHtcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICBmb250LXNpemU6IDMuNXJlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbiNsb2dvLXRleHQtcmlnaHQge1xuICBjb2xvcjogZ3JlZW47XG59XG5cbiNkaXYtaGVhZGVyLXJpZ2h0IHtcbiAgd2lkdGg6IDIwJTtcbn1cblxuI2hpZGUtc2lkZWJhci1idG4ge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSk7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpZGViYXItYmctY29sb3IpO1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBtYXJnaW4tbGVmdDogMjBweDtcbiAgYm9yZGVyOiBub25lO1xufVxuXG4jZGl2LXNpZGViYXIge1xuICBncmlkLWFyZWE6IHNicjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcbn1cblxuI2hvbWUtY2FyZCxcbiNwcm9qZWN0LWNhcmQge1xuICBwYWRkaW5nOiAyMHB4O1xuICBoZWlnaHQ6IDUwJTtcbiAgLyogYm9yZGVyOiAxcHggc29saWQgYmxhY2s7ICovXG59XG5cbiNob21lLWNhcmQgPiBkaXY6aG92ZXIsXG4jcHJvamVjdC1jYXJkID4gZGl2OmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjEpO1xuICBib3JkZXItcmFkaXVzOiA3cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLyogaG9tZSBjYXJkIGFuZCBwcm9qZWN0IGNhcmQgdGl0bGVzICovXG4jaG9tZS1jYXJkID4gcCxcbiNwcm9qZWN0LWNhcmQgPiBwIHtcbiAgZm9udC1zaXplOiAycmVtO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4vKiBob21lIGNhcmQgY2F0ZWdvcmllcyAqL1xuI2hvbWUtY2FyZCA+IGRpdixcbiNwcm9qZWN0LWNhcmQgPiBkaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmb250LXNpemU6IDFyZW07XG4gIHBhZGRpbmc6IDJweDtcbn1cblxuI2hvbWUtY2FyZCA+IGRpdiA+IGRpdjpmaXJzdC1jaGlsZCxcbiNwcm9qZWN0LWNhcmQgPiBkaXYgPiBkaXY6Zmlyc3QtY2hpbGQge1xuICB3aWR0aDogMnJlbTtcbiAgaGVpZ2h0OiAycmVtO1xufVxuXG4jcHJvamVjdC1jYXJkID4gZGl2Omxhc3QtY2hpbGQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYm9yZGVyOiAxcHggZGFzaGVkIHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgcGFkZGluZzogNXB4O1xufVxuXG4jZGl2LWNvbnRlbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcbiAgZ3JpZC1hcmVhOiBjbnQ7XG59XG5cbiNkaXYtaW5uZXJEaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogYnJvd247XG59XG5cbiNjb250ZW50LXRpdGxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYXF1YTtcbiAgZmxleDogMTtcbiAgZm9udC1zaXplOiAyLjdyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHdpZHRoOiA3MCU7XG4gIGhlaWdodDogNTAlO1xufVxuXG4jY29udGVudC10aXRsZSA+IHNwYW4ge1xuICBtYXJnaW4tbGVmdDogNTBweDtcbn1cblxuI2NvbnRlbnQtdGFza3Mge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3dncmVlbjtcbiAgZmxleDogMTA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gIHdpZHRoOiA3MCU7XG4gIG1pbi13aWR0aDogODAwcHg7XG59XG5cbiNjb250ZW50LXRhc2tzID4gZGl2e1xuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcbiAgcGFkZGluZzogMjBweDtcbiAgbWFyZ2luOiAxMHB4IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbiNjb250ZW50LXRhc2tzID4gZGl2ID4gZGl2e1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4jYWRkLXRhc2stYnV0dG9uIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDkwJTtcbmxlZnQ6IDk1JTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG59XG5cbiNkaXYtZm9vdGVyIHtcbiAgZ3JpZC1hcmVhOiBmdHI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNzUpO1xufVxuXG4jZGl2LWZvb3RlciA+IGRpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nLXRvcDogNXB4O1xuICB3aWR0aDogNDAwcHg7XG59XG5cbiNkaXYtZm9vdGVyID4gZGl2ID4gZGl2IHtcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xuICBmb250LXNpemU6IDEuM3JlbTtcbiAgY29sb3I6IGFudGlxdWV3aGl0ZTtcbn1cblxuI2Rpdi1mb290ZXIgYSB7XG4gIGNvbG9yOiBhbnRpcXVld2hpdGU7XG59XG5cbi8qIGhlYXJ0IGxvZ28gKi9cbiNkaXYtZm9vdGVyID4gZGl2ID4gZGl2Om50aC1jaGlsZCgyKSB7XG4gIHdpZHRoOiAxLjVyZW07XG4gIG1hcmdpbjogMCA0cHg7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSwwQ0FBMEM7QUFDNUM7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLHNCQUFzQjtBQUN4Qjs7QUFFQTs7RUFFRSxXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQSx5REFBeUQ7QUFDekQ7RUFDRSxpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixnQ0FBZ0M7RUFDaEMsZ0NBQWdDO0VBQ2hDOzs7YUFHVztBQUNiOztBQUVBO0VBQ0UsY0FBYztFQUNkLGFBQWE7RUFDYiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjs7QUFFQTs7RUFFRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHlEQUE0QztFQUM1Qyw0QkFBNEI7RUFDNUIsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLHlEQUFpRDtFQUNqRCw0QkFBNEI7RUFDNUIseUNBQXlDO0VBQ3pDLFdBQVc7RUFDWCxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGNBQWM7RUFDZCxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtBQUNyQjs7QUFFQTs7RUFFRSxhQUFhO0VBQ2IsV0FBVztFQUNYLDZCQUE2QjtBQUMvQjs7QUFFQTs7RUFFRSxvQ0FBb0M7RUFDcEMsa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7O0FBRUEsc0NBQXNDO0FBQ3RDOztFQUVFLGVBQWU7RUFDZixtQkFBbUI7QUFDckI7O0FBRUEseUJBQXlCO0FBQ3pCOztFQUVFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsWUFBWTtBQUNkOztBQUVBOztFQUVFLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLHFDQUFxQztFQUNyQyxtQkFBbUI7RUFDbkIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLFlBQVk7RUFDWix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsT0FBTztFQUNQLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixVQUFVO0VBQ1YsV0FBVztBQUNiOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLFFBQVE7RUFDUixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixVQUFVO0VBQ1YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLGNBQWM7RUFDZCxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFFBQVE7QUFDVixTQUFTO0VBQ1AsZ0NBQWdDO0VBQ2hDLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixxQ0FBcUM7QUFDdkM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtFQUNoQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQSxlQUFlO0FBQ2Y7RUFDRSxhQUFhO0VBQ2IsYUFBYTtBQUNmXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gIC0tc2lkZWJhci1iZy1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwKTtcXG59XFxuXFxuKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuaHRtbCxcXG5ib2R5IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG5kaXYge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi8qIGFueSBjaGFuZ2UgaGVyZSBzaG91bGQgYWxzbyBiZSBtYWRlIGluIGxvYWRIZWFkZXIuanMgKi9cXG4jZGl2LWhvbWUtcGFnZSB7XFxuICBtaW4taGVpZ2h0OiA4MDBweDtcXG4gIG1pbi1oZWlnaHQ6IDgwMHB4O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjAwcHggMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA3ZnIgOTBmciAzZnI7XFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgICBcXFwiaGRyIGhkclxcXCJcXG4gICAgXFxcInNiciBjbnRcXFwiXFxuICAgIFxcXCJmdHIgZnRyXFxcIjtcXG59XFxuXFxuI2Rpdi1oZWFkZXIge1xcbiAgZ3JpZC1hcmVhOiBoZHI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4jZGl2LWhlYWRlci1sZWZ0IHtcXG4gIHdpZHRoOiAyMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI2Rpdi1oZWFkZXItY2VudGVyLFxcbiNsb2dvLXRleHQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI2xvZ28taW1hZ2Uge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vaWNvbnMvY2hlY2stYWxsLnN2Zyk7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgd2lkdGg6IDcwcHg7XFxuICBoZWlnaHQ6IDcwcHg7XFxufVxcblxcbiNsb2dvLXRleHQge1xcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gIGZvbnQtc2l6ZTogMy41cmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbiNsb2dvLXRleHQtcmlnaHQge1xcbiAgY29sb3I6IGdyZWVuO1xcbn1cXG5cXG4jZGl2LWhlYWRlci1yaWdodCB7XFxuICB3aWR0aDogMjAlO1xcbn1cXG5cXG4jaGlkZS1zaWRlYmFyLWJ0biB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi9pY29ucy9oYW1idXJnZXItaWNvbi5zdmcpO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpZGViYXItYmctY29sb3IpO1xcbiAgd2lkdGg6IDQwcHg7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICBtYXJnaW4tbGVmdDogMjBweDtcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuI2Rpdi1zaWRlYmFyIHtcXG4gIGdyaWQtYXJlYTogc2JyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbn1cXG5cXG4jaG9tZS1jYXJkLFxcbiNwcm9qZWN0LWNhcmQge1xcbiAgcGFkZGluZzogMjBweDtcXG4gIGhlaWdodDogNTAlO1xcbiAgLyogYm9yZGVyOiAxcHggc29saWQgYmxhY2s7ICovXFxufVxcblxcbiNob21lLWNhcmQgPiBkaXY6aG92ZXIsXFxuI3Byb2plY3QtY2FyZCA+IGRpdjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMSk7XFxuICBib3JkZXItcmFkaXVzOiA3cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi8qIGhvbWUgY2FyZCBhbmQgcHJvamVjdCBjYXJkIHRpdGxlcyAqL1xcbiNob21lLWNhcmQgPiBwLFxcbiNwcm9qZWN0LWNhcmQgPiBwIHtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcblxcbi8qIGhvbWUgY2FyZCBjYXRlZ29yaWVzICovXFxuI2hvbWUtY2FyZCA+IGRpdixcXG4jcHJvamVjdC1jYXJkID4gZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgbWFyZ2luLXRvcDogMzBweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBwYWRkaW5nOiAycHg7XFxufVxcblxcbiNob21lLWNhcmQgPiBkaXYgPiBkaXY6Zmlyc3QtY2hpbGQsXFxuI3Byb2plY3QtY2FyZCA+IGRpdiA+IGRpdjpmaXJzdC1jaGlsZCB7XFxuICB3aWR0aDogMnJlbTtcXG4gIGhlaWdodDogMnJlbTtcXG59XFxuXFxuI3Byb2plY3QtY2FyZCA+IGRpdjpsYXN0LWNoaWxkIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGJvcmRlcjogMXB4IGRhc2hlZCByZ2JhKDAsIDAsIDAsIDAuMyk7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgcGFkZGluZzogNXB4O1xcbn1cXG5cXG4jZGl2LWNvbnRlbnQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxuICBncmlkLWFyZWE6IGNudDtcXG59XFxuXFxuI2Rpdi1pbm5lckRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYnJvd247XFxufVxcblxcbiNjb250ZW50LXRpdGxlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGFxdWE7XFxuICBmbGV4OiAxO1xcbiAgZm9udC1zaXplOiAyLjdyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICB3aWR0aDogNzAlO1xcbiAgaGVpZ2h0OiA1MCU7XFxufVxcblxcbiNjb250ZW50LXRpdGxlID4gc3BhbiB7XFxuICBtYXJnaW4tbGVmdDogNTBweDtcXG59XFxuXFxuI2NvbnRlbnQtdGFza3Mge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93Z3JlZW47XFxuICBmbGV4OiAxMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gIHdpZHRoOiA3MCU7XFxuICBtaW4td2lkdGg6IDgwMHB4O1xcbn1cXG5cXG4jY29udGVudC10YXNrcyA+IGRpdntcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgbWFyZ2luOiAxMHB4IDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4jY29udGVudC10YXNrcyA+IGRpdiA+IGRpdntcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4jYWRkLXRhc2stYnV0dG9uIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogOTAlO1xcbmxlZnQ6IDk1JTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgd2lkdGg6IDUwcHg7XFxuICBoZWlnaHQ6IDUwcHg7XFxufVxcblxcbiNkaXYtZm9vdGVyIHtcXG4gIGdyaWQtYXJlYTogZnRyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjc1KTtcXG59XFxuXFxuI2Rpdi1mb290ZXIgPiBkaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgcGFkZGluZy10b3A6IDVweDtcXG4gIHdpZHRoOiA0MDBweDtcXG59XFxuXFxuI2Rpdi1mb290ZXIgPiBkaXYgPiBkaXYge1xcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgZm9udC1zaXplOiAxLjNyZW07XFxuICBjb2xvcjogYW50aXF1ZXdoaXRlO1xcbn1cXG5cXG4jZGl2LWZvb3RlciBhIHtcXG4gIGNvbG9yOiBhbnRpcXVld2hpdGU7XFxufVxcblxcbi8qIGhlYXJ0IGxvZ28gKi9cXG4jZGl2LWZvb3RlciA+IGRpdiA+IGRpdjpudGgtY2hpbGQoMikge1xcbiAgd2lkdGg6IDEuNXJlbTtcXG4gIG1hcmdpbjogMCA0cHg7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tb2RhbC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tb2RhbC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgOnJvb3R7XG4gICAgLS1hZGQtYnV0dG9uLWNvbG9yOiBncmVlbjtcbiAgICAtLWNhbmNlbC1idXR0b24tY29sb3I6IHRvbWF0bztcbn1cblxuLm1vZGFsIHtcbiAgZGlzcGxheTogbm9uZTsgLyogSGlkZGVuIGJ5IGRlZmF1bHQgKi9cbiAgcG9zaXRpb246IGZpeGVkOyAvKiBTdGF5IGluIHBsYWNlICovXG4gIHotaW5kZXg6IDE7IC8qIFNpdCBvbiB0b3AgKi9cbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIHdpZHRoOiAxMDAlOyAvKiBGdWxsIHdpZHRoICovXG4gIGhlaWdodDogMTAwJTsgLyogRnVsbCBoZWlnaHQgKi9cbiAgb3ZlcmZsb3c6IHZpc2libGU7IC8qIEVuYWJsZSBzY3JvbGwgaWYgbmVlZGVkICovXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwKTsgLyogRmFsbGJhY2sgY29sb3IgKi9cbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjcpOyAvKiBCbGFjayB3LyBvcGFjaXR5ICovXG59XG5cbi5tb2RhbCA+IGRpdntcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiA0NSU7XG4gICAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICB3aWR0aDogNTAwcHg7XG4gICAgaGVpZ2h0OiAxNTBweDtcbn1cblxuI21vZGFsLWNvbnRlbnR7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMTBweDtcbn1cblxuI21vZGFsLWNvbnRlbnQgPiBkaXZ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4jbW9kYWwtY29udGVudCBpbnB1dCxcbiNtb2RhbC1jb250ZW50IGJ1dHRvbntcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgbWFyZ2luOiAwIDMwcHg7XG59XG5cbiNtb2RhbC1jb250ZW50IGlucHV0e1xuICAgIHdpZHRoOiA3NSU7XG59XG5cbiNtb2RhbC1jb250ZW50IGJ1dHRvbntcbiAgICB3aWR0aDogMzAlO1xufVxuXG4jbW9kYWwtY29udGVudCBidXR0b246Zmlyc3QtY2hpbGR7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWRkLWJ1dHRvbi1jb2xvcik7XG59XG5cbiNtb2RhbC1jb250ZW50IGJ1dHRvbjpsYXN0LWNoaWxke1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNhbmNlbC1idXR0b24tY29sb3IpO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL21vZGFsLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHlCQUF5QjtJQUN6Qiw2QkFBNkI7QUFDakM7O0FBRUE7RUFDRSxhQUFhLEVBQUUsc0JBQXNCO0VBQ3JDLGVBQWUsRUFBRSxrQkFBa0I7RUFDbkMsVUFBVSxFQUFFLGVBQWU7RUFDM0IsUUFBUTtFQUNSLFNBQVM7RUFDVCxnQ0FBZ0M7RUFDaEMsV0FBVyxFQUFFLGVBQWU7RUFDNUIsWUFBWSxFQUFFLGdCQUFnQjtFQUM5QixpQkFBaUIsRUFBRSw0QkFBNEI7RUFDL0MsOEJBQThCLEVBQUUsbUJBQW1CO0VBQ25ELG9DQUFvQyxFQUFFLHFCQUFxQjtBQUM3RDs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixlQUFlO0lBQ2YsUUFBUTtJQUNSLFNBQVM7RUFDWCxnQ0FBZ0M7SUFDOUIsWUFBWTtJQUNaLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBRUE7O0lBRUksaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0kseUNBQXlDO0FBQzdDOztBQUVBO0lBQ0ksNENBQTRDO0FBQ2hEXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290e1xcbiAgICAtLWFkZC1idXR0b24tY29sb3I6IGdyZWVuO1xcbiAgICAtLWNhbmNlbC1idXR0b24tY29sb3I6IHRvbWF0bztcXG59XFxuXFxuLm1vZGFsIHtcXG4gIGRpc3BsYXk6IG5vbmU7IC8qIEhpZGRlbiBieSBkZWZhdWx0ICovXFxuICBwb3NpdGlvbjogZml4ZWQ7IC8qIFN0YXkgaW4gcGxhY2UgKi9cXG4gIHotaW5kZXg6IDE7IC8qIFNpdCBvbiB0b3AgKi9cXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICB3aWR0aDogMTAwJTsgLyogRnVsbCB3aWR0aCAqL1xcbiAgaGVpZ2h0OiAxMDAlOyAvKiBGdWxsIGhlaWdodCAqL1xcbiAgb3ZlcmZsb3c6IHZpc2libGU7IC8qIEVuYWJsZSBzY3JvbGwgaWYgbmVlZGVkICovXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCk7IC8qIEZhbGxiYWNrIGNvbG9yICovXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNyk7IC8qIEJsYWNrIHcvIG9wYWNpdHkgKi9cXG59XFxuXFxuLm1vZGFsID4gZGl2e1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IDQ1JTtcXG4gICAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICAgIHdpZHRoOiA1MDBweDtcXG4gICAgaGVpZ2h0OiAxNTBweDtcXG59XFxuXFxuI21vZGFsLWNvbnRlbnR7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbiNtb2RhbC1jb250ZW50ID4gZGl2e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI21vZGFsLWNvbnRlbnQgaW5wdXQsXFxuI21vZGFsLWNvbnRlbnQgYnV0dG9ue1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBtYXJnaW46IDAgMzBweDtcXG59XFxuXFxuI21vZGFsLWNvbnRlbnQgaW5wdXR7XFxuICAgIHdpZHRoOiA3NSU7XFxufVxcblxcbiNtb2RhbC1jb250ZW50IGJ1dHRvbntcXG4gICAgd2lkdGg6IDMwJTtcXG59XFxuXFxuI21vZGFsLWNvbnRlbnQgYnV0dG9uOmZpcnN0LWNoaWxke1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hZGQtYnV0dG9uLWNvbG9yKTtcXG59XFxuXFxuI21vZGFsLWNvbnRlbnQgYnV0dG9uOmxhc3QtY2hpbGR7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNhbmNlbC1idXR0b24tY29sb3IpO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgKCFzY3JpcHRVcmwgfHwgIS9eaHR0cChzPyk6Ly50ZXN0KHNjcmlwdFVybCkpKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0MDogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9