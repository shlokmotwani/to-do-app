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
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _loadHomePage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(15);
/* harmony import */ var _modal_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(28);






let allProjects = [];

let gym = (0,_project__WEBPACK_IMPORTED_MODULE_0__.createProject)("Gym");
addToProjects(gym);
let dance = (0,_project__WEBPACK_IMPORTED_MODULE_0__.createProject)("Dance");
addToProjects(dance);
let study = (0,_project__WEBPACK_IMPORTED_MODULE_0__.createProject)("Study");
allProjects.push(study);

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

(0,_loadHomePage__WEBPACK_IMPORTED_MODULE_2__.loadHomePage)();

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
/* harmony import */ var _loadHomePage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);



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
/* 3 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   homePage: () => (/* binding */ homePage),
/* harmony export */   loadHomePage: () => (/* binding */ loadHomePage)
/* harmony export */ });
/* harmony import */ var _loadHeader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _loadSidebar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var _loadContent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(12);
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

  console.log(homePage);
}




/***/ }),
/* 4 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   header: () => (/* binding */ header),
/* harmony export */   loadHeader: () => (/* binding */ loadHeader)
/* harmony export */ });
/* harmony import */ var _loadSidebar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var _loadHomePage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);



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
/* 5 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadProjectCard: () => (/* binding */ loadProjectCard),
/* harmony export */   loadSidebar: () => (/* binding */ loadSidebar),
/* harmony export */   sidebar: () => (/* binding */ sidebar)
/* harmony export */ });
/* harmony import */ var _icons_inbox_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var _icons_calendar_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);
/* harmony import */ var _icons_content_duplicate_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8);
/* harmony import */ var _icons_star_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9);
/* harmony import */ var _icons_minus_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(10);
/* harmony import */ var _icons_plus_box_outline_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(11);
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(0);
/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1);
/* harmony import */ var _loadContent_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(12);











let sidebar;
let homeCard;
let homeCardTitle;
let homeCardLine;
let projectCard;
let projectCardTitle;
let projectCardLine;
let addNewProjectBtn;

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
    let categoryIcon = document.createElement("div");
    console.log(homeCategories[i].icon);
    categoryIcon.appendChild(homeCategories[i].icon);

    let categoryText = document.createElement("p");
    categoryText.textContent = homeCategories[i].text;

    category.appendChild(categoryIcon);
    category.appendChild(categoryText);

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
    let projectIcon = document.createElement("div");

    // minusIcon has to be re-created in the loop
    // to append multiple unique elements to the project div
    minusIcon = new Image();
    minusIcon.src = _icons_minus_svg__WEBPACK_IMPORTED_MODULE_4__;

    console.log("Minus icon = " + minusIcon);
    projectIcon.appendChild(minusIcon);

    let projectText = document.createElement("p");
    projectText.textContent = _index_js__WEBPACK_IMPORTED_MODULE_6__.allProjects[i].name;

    project.appendChild(projectIcon);
    project.appendChild(projectText);

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

function loadProjectModal(){
  console.log("addNewProject clicked");

  let modal = (0,_project_js__WEBPACK_IMPORTED_MODULE_7__.createNewProjectModal)();
  modal.style.display = "block";
  _loadContent_js__WEBPACK_IMPORTED_MODULE_8__.content.append(modal);

  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
}




/***/ }),
/* 6 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "132b9ad81c7ef042e32e.svg";

/***/ }),
/* 7 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5b4d79f7efb5719f9534.svg";

/***/ }),
/* 8 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f75c61a660fbef6ec2e1.svg";

/***/ }),
/* 9 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c024c4137cd9afc2fb40.svg";

/***/ }),
/* 10 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "272e9cf8ae24c9a1cfc4.svg";

/***/ }),
/* 11 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "de7aff6cb1c57b33c2db.svg";

/***/ }),
/* 12 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   content: () => (/* binding */ content),
/* harmony export */   loadContent: () => (/* binding */ loadContent)
/* harmony export */ });
let content;

function loadContent() {
  content = null;
  content = document.createElement("div");
  content.id = "div-content";
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
}

#home-card > div > div:first-child,
#project-card > div > div:first-child{
    width: 2.0rem;
    height: 2.0rem;
}

#project-card > div:last-child{
  display: flex;
  justify-content: center;
}

#div-content {
  background-color: green;
  grid-area: cnt;
}

#div-footer {
  grid-area: ftr;
  display: flex;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.75);
}

#div-footer > div{
  display: flex;
  justify-content: center;
  padding-top: 5px;
  width: 400px;
}

#div-footer > div > div{
  width: fit-content;
  font-size: 1.3rem;
  color: antiquewhite;
}

#div-footer a{
  color: antiquewhite;
}

/* heart logo */
#div-footer > div > div:nth-child(2){
  width: 1.5rem;
  margin: 0 4px;
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,0CAA0C;AAC5C;;AAEA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;;AAEA;;EAEE,WAAW;EACX,YAAY;AACd;;AAEA;EACE,WAAW;EACX,YAAY;AACd;;AAEA,yDAAyD;AACzD;EACE,iBAAiB;EACjB,iBAAiB;EACjB,aAAa;EACb,gCAAgC;EAChC,gCAAgC;EAChC;;;aAGW;AACb;;AAEA;EACE,cAAc;EACd,aAAa;EACb,8BAA8B;AAChC;;AAEA;EACE,UAAU;EACV,aAAa;EACb,mBAAmB;AACrB;;AAEA;;EAEE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,yDAA4C;EAC5C,4BAA4B;EAC5B,WAAW;EACX,YAAY;AACd;;AAEA;EACE,kBAAkB;EAClB,mBAAmB;EACnB,iBAAiB;EACjB,iBAAiB;AACnB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,yDAAiD;EACjD,4BAA4B;EAC5B,yCAAyC;EACzC,WAAW;EACX,YAAY;EACZ,iBAAiB;EACjB,YAAY;AACd;;AAEA;EACE,cAAc;EACd,aAAa;EACb,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA;;EAEE,aAAa;EACb,WAAW;EACX,6BAA6B;AAC/B;;AAEA,sCAAsC;AACtC;;EAEE,eAAe;EACf,mBAAmB;AACrB;;AAEA,yBAAyB;AACzB;;EAEE,aAAa;EACb,mBAAmB;EACnB,gBAAgB;EAChB,mBAAmB;EACnB,eAAe;AACjB;;AAEA;;IAEI,aAAa;IACb,cAAc;AAClB;;AAEA;EACE,aAAa;EACb,uBAAuB;AACzB;;AAEA;EACE,uBAAuB;EACvB,cAAc;AAChB;;AAEA;EACE,cAAc;EACd,aAAa;EACb,uBAAuB;EACvB,qCAAqC;AACvC;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,gBAAgB;EAChB,YAAY;AACd;;AAEA;EACE,kBAAkB;EAClB,iBAAiB;EACjB,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;AACrB;;AAEA,eAAe;AACf;EACE,aAAa;EACb,aAAa;AACf","sourcesContent":[":root {\n  --sidebar-bg-color: rgba(255, 255, 255, 0);\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nhtml,\nbody {\n  width: 100%;\n  height: 100%;\n}\n\ndiv {\n  width: 100%;\n  height: 100%;\n}\n\n/* any change here should also be made in loadHeader.js */\n#div-home-page {\n  min-height: 800px;\n  min-height: 800px;\n  display: grid;\n  grid-template-columns: 200px 1fr;\n  grid-template-rows: 7fr 90fr 3fr;\n  grid-template-areas:\n    \"hdr hdr\"\n    \"sbr cnt\"\n    \"ftr ftr\";\n}\n\n#div-header {\n  grid-area: hdr;\n  display: flex;\n  justify-content: space-between;\n}\n\n#div-header-left {\n  width: 20%;\n  display: flex;\n  align-items: center;\n}\n\n#div-header-center,\n#logo-text {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n#logo-image {\n  background-image: url(./icons/check-all.svg);\n  background-repeat: no-repeat;\n  width: 70px;\n  height: 70px;\n}\n\n#logo-text {\n  width: fit-content;\n  height: fit-content;\n  font-size: 3.5rem;\n  font-weight: bold;\n}\n\n#logo-text-right {\n  color: green;\n}\n\n#div-header-right {\n  width: 20%;\n}\n\n#hide-sidebar-btn {\n  background-image: url(./icons/hamburger-icon.svg);\n  background-repeat: no-repeat;\n  background-color: var(--sidebar-bg-color);\n  width: 40px;\n  height: 40px;\n  margin-left: 20px;\n  border: none;\n}\n\n#div-sidebar {\n  grid-area: sbr;\n  display: flex;\n  flex-direction: column;\n  height: fit-content;\n}\n\n#home-card,\n#project-card {\n  padding: 20px;\n  height: 50%;\n  /* border: 1px solid black; */\n}\n\n/* home card and project card titles */\n#home-card > p,\n#project-card > p {\n  font-size: 2rem;\n  margin-bottom: 10px;\n}\n\n/* home card categories */\n#home-card > div,\n#project-card > div {\n  display: flex;\n  height: fit-content;\n  margin-top: 30px;\n  align-items: center;\n  font-size: 1rem;\n}\n\n#home-card > div > div:first-child,\n#project-card > div > div:first-child{\n    width: 2.0rem;\n    height: 2.0rem;\n}\n\n#project-card > div:last-child{\n  display: flex;\n  justify-content: center;\n}\n\n#div-content {\n  background-color: green;\n  grid-area: cnt;\n}\n\n#div-footer {\n  grid-area: ftr;\n  display: flex;\n  justify-content: center;\n  background-color: rgba(0, 0, 0, 0.75);\n}\n\n#div-footer > div{\n  display: flex;\n  justify-content: center;\n  padding-top: 5px;\n  width: 400px;\n}\n\n#div-footer > div > div{\n  width: fit-content;\n  font-size: 1.3rem;\n  color: antiquewhite;\n}\n\n#div-footer a{\n  color: antiquewhite;\n}\n\n/* heart logo */\n#div-footer > div > div:nth-child(2){\n  width: 1.5rem;\n  margin: 0 4px;\n}\n"],"sourceRoot":""}]);
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
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
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
}`, "",{"version":3,"sources":["webpack://./src/modal.css"],"names":[],"mappings":"AAAA;IACI,yBAAyB;IACzB,6BAA6B;AACjC;;AAEA;EACE,aAAa,EAAE,sBAAsB;EACrC,eAAe,EAAE,kBAAkB;EACnC,UAAU,EAAE,eAAe;EAC3B,QAAQ;EACR,SAAS;EACT,gCAAgC;EAChC,WAAW,EAAE,eAAe;EAC5B,YAAY,EAAE,gBAAgB;EAC9B,iBAAiB,EAAE,4BAA4B;EAC/C,8BAA8B,EAAE,mBAAmB;EACnD,oCAAoC,EAAE,qBAAqB;AAC7D;;AAEA;IACI,uBAAuB;IACvB,eAAe;IACf,QAAQ;IACR,SAAS;EACX,gCAAgC;IAC9B,YAAY;IACZ,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;;IAEI,iBAAiB;IACjB,YAAY;IACZ,cAAc;AAClB;;AAEA;IACI,UAAU;AACd;;AAEA;IACI,UAAU;AACd;;AAEA;IACI,yCAAyC;AAC7C;;AAEA;IACI,4CAA4C;AAChD","sourcesContent":[":root{\n    --add-button-color: green;\n    --cancel-button-color: tomato;\n}\n\n.modal {\n  display: none; /* Hidden by default */\n  position: fixed; /* Stay in place */\n  z-index: 1; /* Sit on top */\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 100%; /* Full width */\n  height: 100%; /* Full height */\n  overflow: visible; /* Enable scroll if needed */\n  background-color: rgb(0, 0, 0); /* Fallback color */\n  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */\n}\n\n.modal > div{\n    border: 1px solid white;\n    position: fixed;\n    top: 45%;\n    left: 50%;\n  transform: translate(-50%, -50%);\n    width: 500px;\n    height: 150px;\n}\n\n#modal-content{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    padding: 10px;\n}\n\n#modal-content > div{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n#modal-content input,\n#modal-content button{\n    font-size: 1.2rem;\n    padding: 5px;\n    margin: 0 30px;\n}\n\n#modal-content input{\n    width: 75%;\n}\n\n#modal-content button{\n    width: 30%;\n}\n\n#modal-content button:first-child{\n    background-color: var(--add-button-color);\n}\n\n#modal-content button:last-child{\n    background-color: var(--cancel-button-color);\n}"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7OztVRUFBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL3NyYy90YXNrLmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL3NyYy9sb2FkSG9tZVBhZ2UuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vc3JjL2xvYWRIZWFkZXIuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vc3JjL2xvYWRTaWRlYmFyLmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL3NyYy9sb2FkQ29udGVudC5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9zcmMvbG9hZEZvb3Rlci5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9zcmMvbW9kYWwuY3NzPzNmZDkiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vc3JjL21vZGFsLmNzcyIsIndlYnBhY2s6Ly90by1kby1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvLWRvLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvLWRvLWFwcC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly90by1kby1hcHAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvLWRvLWFwcC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3RvLWRvLWFwcC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVQcm9qZWN0IH0gZnJvbSBcIi4vcHJvamVjdFwiO1xuaW1wb3J0IHsgY3JlYXRlVGFzayB9IGZyb20gXCIuL3Rhc2tcIjtcbmltcG9ydCB7IGxvYWRIb21lUGFnZSB9IGZyb20gXCIuL2xvYWRIb21lUGFnZVwiO1xuaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcbmltcG9ydCBcIi4vbW9kYWwuY3NzXCI7XG5cbmxldCBhbGxQcm9qZWN0cyA9IFtdO1xuXG5sZXQgZ3ltID0gY3JlYXRlUHJvamVjdChcIkd5bVwiKTtcbmFkZFRvUHJvamVjdHMoZ3ltKTtcbmxldCBkYW5jZSA9IGNyZWF0ZVByb2plY3QoXCJEYW5jZVwiKTtcbmFkZFRvUHJvamVjdHMoZGFuY2UpO1xubGV0IHN0dWR5ID0gY3JlYXRlUHJvamVjdChcIlN0dWR5XCIpO1xuYWxsUHJvamVjdHMucHVzaChzdHVkeSk7XG5cbmxldCBneW1UYXNrT25lID0gY3JlYXRlVGFzayhcbiAgXCJHbyB0byBneW1cIixcbiAgXCJjaGVjayBvdXQgYWxsIGd5bXNcIixcbiAgXCIwMS8wMS8yMDI1XCIsXG4gIFwiaGlnaFwiLFxuICBcImxlYXZlIHlvdXIgaG91c2Ugb24gdGltZVwiLFxuICB0cnVlXG4pO1xuXG5sZXQgZ3ltVGFza1R3byA9IGNyZWF0ZVRhc2soXG4gIFwiRmluYWxpc2UgR3ltIFBsYW5cIixcbiAgXCJHZXQgZG9uZSB3aXRoIGd5bSBhbmQgdHJhaW5lcnNcIixcbiAgXCIwMS8wMS8yMDI1XCIsXG4gIFwiaGlnaFwiLFxuICBcImNob29zZSBhIHRyYWluZXIgd2l0aCBjZXJ0aWZpY2F0aW9uXCJcbik7XG5cbmxldCBneW1UYXNrVGhyZWUgPSBjcmVhdGVUYXNrKFxuICBcIlN0YXJ0IHdvcmtpbmcgb3V0XCIsXG4gIFwiRm9sbG93IFBQTCByb3V0aW5lXCIsXG4gIFwiMDEvMDEvMjAyNVwiLFxuICBcImxvd1wiLFxuICBcIlJlc3QgZm9yIDEtMiBtaW51dGVzIGluIGIvdyBzZXRzXCJcbik7XG5cbmd5bS50YXNrcy5wdXNoKGd5bVRhc2tPbmUpO1xuZ3ltLnRhc2tzLnB1c2goZ3ltVGFza1R3byk7XG5neW0udGFza3MucHVzaChneW1UYXNrVGhyZWUpO1xuXG5sb2FkSG9tZVBhZ2UoKTtcblxuZnVuY3Rpb24gYWRkVG9Qcm9qZWN0cyhwcm9qZWN0KXtcbiAgYWxsUHJvamVjdHMucHVzaChwcm9qZWN0KTtcbn1cblxuZXhwb3J0IHsgYWxsUHJvamVjdHMsIGFkZFRvUHJvamVjdHMgfTtcbiIsImltcG9ydCB7IGFkZFRvUHJvamVjdHMgfSBmcm9tIFwiLi9pbmRleFwiO1xuaW1wb3J0IHsgbG9hZEhvbWVQYWdlIH0gZnJvbSBcIi4vbG9hZEhvbWVQYWdlXCI7XG5cbmxldCBtb2RhbDtcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVByb2plY3QobmFtZSkge1xuICBjb25zdCB0YXNrcyA9IFtdO1xuICByZXR1cm4geyBuYW1lLCB0YXNrcyB9O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVOZXdQcm9qZWN0TW9kYWwoKSB7XG4gIG1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbW9kYWwuaWQgPSBcIm5ld1Byb2plY3RNb2RhbFwiO1xuICBtb2RhbC5jbGFzc0xpc3QuYWRkKFwibW9kYWxcIik7XG4gIGxldCBtb2RhbENvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBtb2RhbENvbnRlbnQuaWQgPSBcIm1vZGFsLWNvbnRlbnRcIjtcbiAgbGV0IGlucHV0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbGV0IGJ0bkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGxldCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYGlucHV0YCk7XG4gIHByb2plY3ROYW1lLnR5cGUgPSBcInRleHRcIjtcbiAgcHJvamVjdE5hbWUucGxhY2Vob2xkZXIgPSBcIlByb2plY3QgTmFtZVwiO1xuICBsZXQgYWRkQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgYWRkQnRuLnRleHRDb250ZW50ID0gXCJBZGRcIjtcblxuICBhZGRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBpZiAocHJvamVjdE5hbWUudmFsdWUpIHtcbiAgICAgIGxldCBwcm9qID0gY3JlYXRlUHJvamVjdChwcm9qZWN0TmFtZS52YWx1ZSk7XG4gICAgICBhZGRUb1Byb2plY3RzKHByb2opO1xuICAgICAgZG9jdW1lbnQuYm9keS5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgbG9hZEhvbWVQYWdlKCk7XG4gICAgfVxuICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgfSk7XG5cbiAgbGV0IGNhbmNlbEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGNhbmNlbEJ0bi50ZXh0Q29udGVudCA9IFwiQ2FuY2VsXCI7XG4gIGNhbmNlbEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgfSk7XG5cbiAgaW5wdXREaXYuYXBwZW5kQ2hpbGQocHJvamVjdE5hbWUpO1xuICBidG5EaXYuYXBwZW5kQ2hpbGQoYWRkQnRuKTtcbiAgYnRuRGl2LmFwcGVuZENoaWxkKGNhbmNlbEJ0bik7XG5cbiAgbW9kYWxDb250ZW50LmFwcGVuZENoaWxkKGlucHV0RGl2KTtcbiAgbW9kYWxDb250ZW50LmFwcGVuZENoaWxkKGJ0bkRpdik7XG4gIG1vZGFsLmFwcGVuZENoaWxkKG1vZGFsQ29udGVudCk7XG4gIHJldHVybiBtb2RhbDtcbn1cbmV4cG9ydCB7IGNyZWF0ZU5ld1Byb2plY3RNb2RhbCB9O1xuIiwiZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVRhc2soXG4gIHRpdGxlPVwiQmxhbmtcIixcbiAgZGVzYz1cIk5vdGhpbmcgaGVyZS5cIixcbiAgZHVlRGF0ZT1cIlwiLFxuICBwcmlvcml0eT1cImxvd1wiLFxuICBub3Rlcz1cIkVtcHR5XCIsXG4gIGlzQ29tcGxldGVkID0gZmFsc2Vcbikge1xuICByZXR1cm4ge1xuICAgIHRpdGxlLFxuICAgIGRlc2MsXG4gICAgaXNDb21wbGV0ZWQsXG4gICAgZHVlRGF0ZSxcbiAgICBwcmlvcml0eSxcbiAgICBub3RlcyxcbiAgfTtcbn1cbiIsImltcG9ydCB7IGhlYWRlciwgbG9hZEhlYWRlciB9IGZyb20gXCIuL2xvYWRIZWFkZXJcIjtcbmltcG9ydCB7IHNpZGViYXIsIGxvYWRTaWRlYmFyIH0gZnJvbSBcIi4vbG9hZFNpZGViYXJcIjtcbmltcG9ydCB7IGNvbnRlbnQsIGxvYWRDb250ZW50IH0gZnJvbSBcIi4vbG9hZENvbnRlbnRcIjtcbmltcG9ydCB7IGZvb3RlciwgbG9hZEZvb3RlciB9IGZyb20gXCIuL2xvYWRGb290ZXJcIjtcblxubGV0IGhvbWVQYWdlO1xuXG5mdW5jdGlvbiBsb2FkSG9tZVBhZ2UoKSB7XG4gIGhvbWVQYWdlID0gbnVsbDtcbiAgaG9tZVBhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBob21lUGFnZS5pZCA9IFwiZGl2LWhvbWUtcGFnZVwiO1xuICBsb2FkSGVhZGVyKCk7XG4gIGxvYWRTaWRlYmFyKCk7XG4gIGxvYWRDb250ZW50KCk7XG4gIGxvYWRGb290ZXIoKTtcblxuICBob21lUGFnZS5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICBob21lUGFnZS5hcHBlbmRDaGlsZChzaWRlYmFyKTtcbiAgaG9tZVBhZ2UuYXBwZW5kQ2hpbGQoY29udGVudCk7XG4gIGhvbWVQYWdlLmFwcGVuZENoaWxkKGZvb3Rlcik7XG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoaG9tZVBhZ2UpO1xuXG4gIGNvbnNvbGUubG9nKGhvbWVQYWdlKTtcbn1cblxuZXhwb3J0IHsgaG9tZVBhZ2UsIGxvYWRIb21lUGFnZX07XG4iLCJpbXBvcnQgeyBzaWRlYmFyIH0gZnJvbSBcIi4vbG9hZFNpZGViYXJcIjtcbmltcG9ydCB7IGhvbWVQYWdlIH0gZnJvbSBcIi4vbG9hZEhvbWVQYWdlXCI7XG5cbmxldCBoZWFkZXI7XG5sZXQgaGVhZGVyTGVmdDtcbmxldCBoZWFkZXJDZW50ZXI7XG5sZXQgaGVhZGVyUmlnaHQ7XG5sZXQgaGlkZVNpZGViYXJCdG47XG5sZXQgaXNTaWRlYmFyVmlzaWJsZSA9IHRydWU7XG5sZXQgbG9nb0ltYWdlO1xubGV0IGxvZ29UZXh0O1xubGV0IGxvZ29UZXh0TGVmdDtcbmxldCBsb2dvVGV4dFJpZ2h0O1xuXG5mdW5jdGlvbiBsb2FkSGVhZGVyKCkge1xuICBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBoZWFkZXIuaWQgPSBcImRpdi1oZWFkZXJcIjtcbiAgaGVhZGVyTGVmdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGhlYWRlckxlZnQuaWQgPSBcImRpdi1oZWFkZXItbGVmdFwiO1xuICBoZWFkZXJDZW50ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBoZWFkZXJDZW50ZXIuaWQgPSBcImRpdi1oZWFkZXItY2VudGVyXCI7XG4gIGhlYWRlclJpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaGVhZGVyUmlnaHQuaWQgPSBcImRpdi1oZWFkZXItcmlnaHRcIjtcblxuICBoaWRlU2lkZWJhckJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGhpZGVTaWRlYmFyQnRuLmlkID0gXCJoaWRlLXNpZGViYXItYnRuXCI7XG4gIGhlYWRlckxlZnQuYXBwZW5kQ2hpbGQoaGlkZVNpZGViYXJCdG4pO1xuICBoZWFkZXIuYXBwZW5kQ2hpbGQoaGVhZGVyTGVmdCk7XG4gIGhlYWRlci5hcHBlbmRDaGlsZChoZWFkZXJDZW50ZXIpO1xuICBoZWFkZXIuYXBwZW5kQ2hpbGQoaGVhZGVyUmlnaHQpO1xuXG4gIGhpZGVTaWRlYmFyQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJIaWRlIFNpZGViYXIgQnV0dG9uIGNsaWNrZWRcIik7XG4gICAgaWYgKGlzU2lkZWJhclZpc2libGUpIHtcbiAgICAgIGlzU2lkZWJhclZpc2libGUgPSBmYWxzZTtcbiAgICAgIHNpZGViYXIuc3R5bGUuY3NzVGV4dCA9IGBcbiAgICAgICAgICBkaXNwbGF5OiBub25lO2A7XG5cbiAgICAgIGhvbWVQYWdlLnN0eWxlLmNzc1RleHQgPSBgZGlzcGxheTogZ3JpZDtcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjAwcHggMWZyO1xuICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA3ZnIgOTBmciAzZnI7XG4gICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcbiAgICAgIFwiaGRyIGhkclwiXG4gICAgICBcImNudCBjbnRcIlxuICAgICAgXCJmdHIgZnRyXCI7YDtcblxuICAgIH0gZWxzZSB7XG4gICAgICBpc1NpZGViYXJWaXNpYmxlID0gdHJ1ZTtcbiAgICAgIHNpZGViYXIuc3R5bGUuY3NzVGV4dCA9IGBcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztgO1xuXG4gICAgICBob21lUGFnZS5zdHlsZS5jc3NUZXh0ID0gYGRpc3BsYXk6IGdyaWQ7XG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIwMHB4IDFmcjtcbiAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogN2ZyIDkwZnIgM2ZyO1xuICAgICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXG4gICAgICBcImhkciBoZHJcIlxuICAgICAgXCJzYnIgY250XCJcbiAgICAgIFwiZnRyIGZ0clwiO2A7XG4gICAgfVxuICB9KTtcblxuICBsb2dvSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBsb2dvSW1hZ2UuaWQgPSBcImxvZ28taW1hZ2VcIjtcbiAgbG9nb1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBsb2dvVGV4dC5pZCA9IFwibG9nby10ZXh0XCI7XG4gIGxvZ29UZXh0TGVmdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBsb2dvVGV4dExlZnQuaWQgPSBcImxvZ28tdGV4dC1sZWZ0XCI7XG4gIGxvZ29UZXh0TGVmdC50ZXh0Q29udGVudCA9IFwiVG9cIjtcbiAgbG9nb1RleHRSaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBsb2dvVGV4dFJpZ2h0LmlkID0gXCJsb2dvLXRleHQtcmlnaHRcIjtcbiAgbG9nb1RleHRSaWdodC50ZXh0Q29udGVudCA9IFwiRG9cIjtcbiAgbG9nb1RleHQuYXBwZW5kQ2hpbGQobG9nb1RleHRMZWZ0KTtcbiAgbG9nb1RleHQuYXBwZW5kQ2hpbGQobG9nb1RleHRSaWdodCk7XG5cbiAgaGVhZGVyQ2VudGVyLmFwcGVuZENoaWxkKGxvZ29JbWFnZSk7XG4gIGhlYWRlckNlbnRlci5hcHBlbmRDaGlsZChsb2dvVGV4dCk7XG59XG5cbmV4cG9ydCB7IGhlYWRlciwgbG9hZEhlYWRlciB9O1xuIiwiaW1wb3J0IGFsbFRhc2tzSW1hZ2UgZnJvbSBcIi4vaWNvbnMvaW5ib3guc3ZnXCI7XG5pbXBvcnQgdG9kYXlJbWFnZSBmcm9tIFwiLi9pY29ucy9jYWxlbmRhci5zdmdcIjtcbmltcG9ydCBuZXh0N2RheXNJbWFnZSBmcm9tIFwiLi9pY29ucy9jb250ZW50LWR1cGxpY2F0ZS5zdmdcIjtcbmltcG9ydCBpbXBvcnRhbnRJbWFnZSBmcm9tIFwiLi9pY29ucy9zdGFyLnN2Z1wiO1xuaW1wb3J0IG1pbnVzSW1hZ2UgZnJvbSBcIi4vaWNvbnMvbWludXMuc3ZnXCI7XG5pbXBvcnQgcGx1c0ltYWdlIGZyb20gXCIuL2ljb25zL3BsdXMtYm94LW91dGxpbmUuc3ZnXCI7XG5pbXBvcnQgeyBhbGxQcm9qZWN0cyB9IGZyb20gXCIuL2luZGV4LmpzXCI7XG5cbmltcG9ydCB7IGNyZWF0ZU5ld1Byb2plY3RNb2RhbCB9IGZyb20gXCIuL3Byb2plY3QuanNcIjtcbmltcG9ydCB7IGNvbnRlbnQgfSBmcm9tIFwiLi9sb2FkQ29udGVudC5qc1wiO1xuXG5sZXQgc2lkZWJhcjtcbmxldCBob21lQ2FyZDtcbmxldCBob21lQ2FyZFRpdGxlO1xubGV0IGhvbWVDYXJkTGluZTtcbmxldCBwcm9qZWN0Q2FyZDtcbmxldCBwcm9qZWN0Q2FyZFRpdGxlO1xubGV0IHByb2plY3RDYXJkTGluZTtcbmxldCBhZGROZXdQcm9qZWN0QnRuO1xuXG5sZXQgYWxsVGFza3NJY29uID0gbmV3IEltYWdlKCk7XG5sZXQgdG9kYXlJY29uID0gbmV3IEltYWdlKCk7XG5sZXQgbmV4dDdkYXlzSWNvbiA9IG5ldyBJbWFnZSgpO1xubGV0IGltcG9ydGFudEljb24gPSBuZXcgSW1hZ2UoKTtcbmxldCBtaW51c0ljb247XG5sZXQgcGx1c0ljb24gPSBuZXcgSW1hZ2UoKTtcblxuYWxsVGFza3NJY29uLnNyYyA9IGFsbFRhc2tzSW1hZ2U7XG50b2RheUljb24uc3JjID0gdG9kYXlJbWFnZTtcbm5leHQ3ZGF5c0ljb24uc3JjID0gbmV4dDdkYXlzSW1hZ2U7XG5pbXBvcnRhbnRJY29uLnNyYyA9IGltcG9ydGFudEltYWdlO1xucGx1c0ljb24uc3JjID0gcGx1c0ltYWdlO1xuXG5sZXQgaG9tZUNhdGVnb3JpZXMgPSBbXG4gIHtcbiAgICBpY29uOiBhbGxUYXNrc0ljb24sXG4gICAgdGV4dDogXCJBbGwgVGFza3NcIixcbiAgfSxcbiAge1xuICAgIGljb246IHRvZGF5SWNvbixcbiAgICB0ZXh0OiBcIlRvZGF5XCIsXG4gIH0sXG4gIHtcbiAgICBpY29uOiBuZXh0N2RheXNJY29uLFxuICAgIHRleHQ6IFwiTmV4dCA3IGRheXNcIixcbiAgfSxcbiAge1xuICAgIGljb246IGltcG9ydGFudEljb24sXG4gICAgdGV4dDogXCJJbXBvcnRhbnRcIixcbiAgfSxcbl07XG5cbmZ1bmN0aW9uIGxvYWRIb21lQ2FyZCgpIHtcbiAgaG9tZUNhcmQgPSBudWxsO1xuICBob21lQ2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGhvbWVDYXJkLmlkID0gXCJob21lLWNhcmRcIjtcblxuICBob21lQ2FyZFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGhvbWVDYXJkVGl0bGUudGV4dENvbnRlbnQgPSBcIkhvbWVcIjtcbiAgaG9tZUNhcmRMaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhyXCIpO1xuXG4gIGhvbWVDYXJkLmFwcGVuZENoaWxkKGhvbWVDYXJkVGl0bGUpO1xuICBob21lQ2FyZC5hcHBlbmRDaGlsZChob21lQ2FyZExpbmUpO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgaG9tZUNhdGVnb3JpZXMubGVuZ3RoOyBpKyspIHtcbiAgICBsZXQgY2F0ZWdvcnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGxldCBjYXRlZ29yeUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnNvbGUubG9nKGhvbWVDYXRlZ29yaWVzW2ldLmljb24pO1xuICAgIGNhdGVnb3J5SWNvbi5hcHBlbmRDaGlsZChob21lQ2F0ZWdvcmllc1tpXS5pY29uKTtcblxuICAgIGxldCBjYXRlZ29yeVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBjYXRlZ29yeVRleHQudGV4dENvbnRlbnQgPSBob21lQ2F0ZWdvcmllc1tpXS50ZXh0O1xuXG4gICAgY2F0ZWdvcnkuYXBwZW5kQ2hpbGQoY2F0ZWdvcnlJY29uKTtcbiAgICBjYXRlZ29yeS5hcHBlbmRDaGlsZChjYXRlZ29yeVRleHQpO1xuXG4gICAgaG9tZUNhcmQuYXBwZW5kQ2hpbGQoY2F0ZWdvcnkpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGxvYWRQcm9qZWN0Q2FyZCgpIHtcbiAgcHJvamVjdENhcmQgPSBudWxsO1xuICBwcm9qZWN0Q2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHByb2plY3RDYXJkLmlkID0gXCJwcm9qZWN0LWNhcmRcIjtcblxuICBwcm9qZWN0Q2FyZFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHByb2plY3RDYXJkVGl0bGUudGV4dENvbnRlbnQgPSBcIlByb2plY3RzXCI7XG4gIHByb2plY3RDYXJkTGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoclwiKTtcblxuICBwcm9qZWN0Q2FyZC5hcHBlbmRDaGlsZChwcm9qZWN0Q2FyZFRpdGxlKTtcbiAgcHJvamVjdENhcmQuYXBwZW5kQ2hpbGQocHJvamVjdENhcmRMaW5lKTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGFsbFByb2plY3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgbGV0IHByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGxldCBwcm9qZWN0SWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgICAvLyBtaW51c0ljb24gaGFzIHRvIGJlIHJlLWNyZWF0ZWQgaW4gdGhlIGxvb3BcbiAgICAvLyB0byBhcHBlbmQgbXVsdGlwbGUgdW5pcXVlIGVsZW1lbnRzIHRvIHRoZSBwcm9qZWN0IGRpdlxuICAgIG1pbnVzSWNvbiA9IG5ldyBJbWFnZSgpO1xuICAgIG1pbnVzSWNvbi5zcmMgPSBtaW51c0ltYWdlO1xuXG4gICAgY29uc29sZS5sb2coXCJNaW51cyBpY29uID0gXCIgKyBtaW51c0ljb24pO1xuICAgIHByb2plY3RJY29uLmFwcGVuZENoaWxkKG1pbnVzSWNvbik7XG5cbiAgICBsZXQgcHJvamVjdFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBwcm9qZWN0VGV4dC50ZXh0Q29udGVudCA9IGFsbFByb2plY3RzW2ldLm5hbWU7XG5cbiAgICBwcm9qZWN0LmFwcGVuZENoaWxkKHByb2plY3RJY29uKTtcbiAgICBwcm9qZWN0LmFwcGVuZENoaWxkKHByb2plY3RUZXh0KTtcblxuICAgIHByb2plY3RDYXJkLmFwcGVuZENoaWxkKHByb2plY3QpO1xuICB9XG5cbiAgbGV0IGFkZE5ld1Byb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBhZGROZXdQcm9qZWN0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgYWRkTmV3UHJvamVjdC5hcHBlbmRDaGlsZChhZGROZXdQcm9qZWN0QnRuKTtcbiAgYWRkTmV3UHJvamVjdEJ0bi5hcHBlbmRDaGlsZChwbHVzSWNvbik7XG5cbiAgYWRkTmV3UHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgbG9hZFByb2plY3RNb2RhbCk7XG5cbiAgcHJvamVjdENhcmQuYXBwZW5kQ2hpbGQoYWRkTmV3UHJvamVjdCk7XG59XG5cbmZ1bmN0aW9uIGxvYWRTaWRlYmFyKCkge1xuICBzaWRlYmFyID0gbnVsbDtcbiAgc2lkZWJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHNpZGViYXIuaWQgPSBcImRpdi1zaWRlYmFyXCI7XG5cbiAgbG9hZEhvbWVDYXJkKCk7XG4gIGxvYWRQcm9qZWN0Q2FyZCgpO1xuXG4gIHNpZGViYXIuYXBwZW5kQ2hpbGQoaG9tZUNhcmQpO1xuICBzaWRlYmFyLmFwcGVuZENoaWxkKHByb2plY3RDYXJkKTtcbn1cblxuZnVuY3Rpb24gbG9hZFByb2plY3RNb2RhbCgpe1xuICBjb25zb2xlLmxvZyhcImFkZE5ld1Byb2plY3QgY2xpY2tlZFwiKTtcblxuICBsZXQgbW9kYWwgPSBjcmVhdGVOZXdQcm9qZWN0TW9kYWwoKTtcbiAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgY29udGVudC5hcHBlbmQobW9kYWwpO1xuXG4gIHdpbmRvdy5vbmNsaWNrID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQudGFyZ2V0ID09IG1vZGFsKSB7XG4gICAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCB7IHNpZGViYXIsIGxvYWRTaWRlYmFyLCBsb2FkUHJvamVjdENhcmQgfTtcbiIsImxldCBjb250ZW50O1xuXG5mdW5jdGlvbiBsb2FkQ29udGVudCgpIHtcbiAgY29udGVudCA9IG51bGw7XG4gIGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb250ZW50LmlkID0gXCJkaXYtY29udGVudFwiO1xufVxuXG5leHBvcnQgeyBjb250ZW50LCBsb2FkQ29udGVudCB9O1xuIiwibGV0IGZvb3RlcjtcbmxldCB3cmFwcGVyO1xubGV0IGxlZnREaXY7XG5sZXQgY2VudGVyRGl2O1xubGV0IHJpZ2h0RGl2O1xuXG5pbXBvcnQgaGVhcnRJbWFnZSBmcm9tIFwiLi9pY29ucy9oZWFydF9pY29uLnN2Z1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gbG9hZEZvb3RlcigpIHtcbiAgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZm9vdGVyLmlkID0gXCJkaXYtZm9vdGVyXCI7XG5cbiAgd3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgbGVmdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGxlZnREaXYudGV4dENvbnRlbnQgPSBcIm1hZGUgd2l0aCBcIjtcbiAgY2VudGVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbGV0IGhlYXJ0SWNvbiA9IG5ldyBJbWFnZSgpO1xuICBoZWFydEljb24uc3JjID0gaGVhcnRJbWFnZTtcbiAgY2VudGVyRGl2LmFwcGVuZENoaWxkKGhlYXJ0SWNvbik7XG4gIHJpZ2h0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbGV0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgdGV4dC50ZXh0Q29udGVudCA9IFwiIGJ5IFwiO1xuICBsZXQgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICBsaW5rLnRleHRDb250ZW50ID0gXCJzaGxvay5jb2Rlc1wiO1xuICBsaW5rLmhyZWYgPSBcImh0dHBzOi8vZ2l0aHViLmNvbS9zaGxva21vdHdhbmlcIjtcbiAgbGluay50YXJnZXQgPSBcIl9ibGFua1wiO1xuXG4gIHJpZ2h0RGl2LmFwcGVuZENoaWxkKHRleHQpO1xuICByaWdodERpdi5hcHBlbmRDaGlsZChsaW5rKTtcblxuICB3cmFwcGVyLmFwcGVuZENoaWxkKGxlZnREaXYpO1xuICB3cmFwcGVyLmFwcGVuZENoaWxkKGNlbnRlckRpdik7XG4gIHdyYXBwZXIuYXBwZW5kQ2hpbGQocmlnaHREaXYpO1xuXG4gIGZvb3Rlci5hcHBlbmRDaGlsZCh3cmFwcGVyKTtcbn1cblxuZXhwb3J0IHsgZm9vdGVyIH07XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9pY29ucy9jaGVjay1hbGwuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9pY29ucy9oYW1idXJnZXItaWNvbi5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGA6cm9vdCB7XG4gIC0tc2lkZWJhci1iZy1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwKTtcbn1cblxuKiB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuaHRtbCxcbmJvZHkge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG5kaXYge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4vKiBhbnkgY2hhbmdlIGhlcmUgc2hvdWxkIGFsc28gYmUgbWFkZSBpbiBsb2FkSGVhZGVyLmpzICovXG4jZGl2LWhvbWUtcGFnZSB7XG4gIG1pbi1oZWlnaHQ6IDgwMHB4O1xuICBtaW4taGVpZ2h0OiA4MDBweDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyMDBweCAxZnI7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogN2ZyIDkwZnIgM2ZyO1xuICBncmlkLXRlbXBsYXRlLWFyZWFzOlxuICAgIFwiaGRyIGhkclwiXG4gICAgXCJzYnIgY250XCJcbiAgICBcImZ0ciBmdHJcIjtcbn1cblxuI2Rpdi1oZWFkZXIge1xuICBncmlkLWFyZWE6IGhkcjtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4jZGl2LWhlYWRlci1sZWZ0IHtcbiAgd2lkdGg6IDIwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuI2Rpdi1oZWFkZXItY2VudGVyLFxuI2xvZ28tdGV4dCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4jbG9nby1pbWFnZSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgd2lkdGg6IDcwcHg7XG4gIGhlaWdodDogNzBweDtcbn1cblxuI2xvZ28tdGV4dCB7XG4gIHdpZHRoOiBmaXQtY29udGVudDtcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcbiAgZm9udC1zaXplOiAzLjVyZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4jbG9nby10ZXh0LXJpZ2h0IHtcbiAgY29sb3I6IGdyZWVuO1xufVxuXG4jZGl2LWhlYWRlci1yaWdodCB7XG4gIHdpZHRoOiAyMCU7XG59XG5cbiNoaWRlLXNpZGViYXItYnRuIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaWRlYmFyLWJnLWNvbG9yKTtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuI2Rpdi1zaWRlYmFyIHtcbiAgZ3JpZC1hcmVhOiBzYnI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XG59XG5cbiNob21lLWNhcmQsXG4jcHJvamVjdC1jYXJkIHtcbiAgcGFkZGluZzogMjBweDtcbiAgaGVpZ2h0OiA1MCU7XG4gIC8qIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrOyAqL1xufVxuXG4vKiBob21lIGNhcmQgYW5kIHByb2plY3QgY2FyZCB0aXRsZXMgKi9cbiNob21lLWNhcmQgPiBwLFxuI3Byb2plY3QtY2FyZCA+IHAge1xuICBmb250LXNpemU6IDJyZW07XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi8qIGhvbWUgY2FyZCBjYXRlZ29yaWVzICovXG4jaG9tZS1jYXJkID4gZGl2LFxuI3Byb2plY3QtY2FyZCA+IGRpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbn1cblxuI2hvbWUtY2FyZCA+IGRpdiA+IGRpdjpmaXJzdC1jaGlsZCxcbiNwcm9qZWN0LWNhcmQgPiBkaXYgPiBkaXY6Zmlyc3QtY2hpbGR7XG4gICAgd2lkdGg6IDIuMHJlbTtcbiAgICBoZWlnaHQ6IDIuMHJlbTtcbn1cblxuI3Byb2plY3QtY2FyZCA+IGRpdjpsYXN0LWNoaWxke1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuI2Rpdi1jb250ZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XG4gIGdyaWQtYXJlYTogY250O1xufVxuXG4jZGl2LWZvb3RlciB7XG4gIGdyaWQtYXJlYTogZnRyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjc1KTtcbn1cblxuI2Rpdi1mb290ZXIgPiBkaXZ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nLXRvcDogNXB4O1xuICB3aWR0aDogNDAwcHg7XG59XG5cbiNkaXYtZm9vdGVyID4gZGl2ID4gZGl2e1xuICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xuICBjb2xvcjogYW50aXF1ZXdoaXRlO1xufVxuXG4jZGl2LWZvb3RlciBhe1xuICBjb2xvcjogYW50aXF1ZXdoaXRlO1xufVxuXG4vKiBoZWFydCBsb2dvICovXG4jZGl2LWZvb3RlciA+IGRpdiA+IGRpdjpudGgtY2hpbGQoMil7XG4gIHdpZHRoOiAxLjVyZW07XG4gIG1hcmdpbjogMCA0cHg7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSwwQ0FBMEM7QUFDNUM7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLHNCQUFzQjtBQUN4Qjs7QUFFQTs7RUFFRSxXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQSx5REFBeUQ7QUFDekQ7RUFDRSxpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixnQ0FBZ0M7RUFDaEMsZ0NBQWdDO0VBQ2hDOzs7YUFHVztBQUNiOztBQUVBO0VBQ0UsY0FBYztFQUNkLGFBQWE7RUFDYiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjs7QUFFQTs7RUFFRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHlEQUE0QztFQUM1Qyw0QkFBNEI7RUFDNUIsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLHlEQUFpRDtFQUNqRCw0QkFBNEI7RUFDNUIseUNBQXlDO0VBQ3pDLFdBQVc7RUFDWCxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGNBQWM7RUFDZCxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtBQUNyQjs7QUFFQTs7RUFFRSxhQUFhO0VBQ2IsV0FBVztFQUNYLDZCQUE2QjtBQUMvQjs7QUFFQSxzQ0FBc0M7QUFDdEM7O0VBRUUsZUFBZTtFQUNmLG1CQUFtQjtBQUNyQjs7QUFFQSx5QkFBeUI7QUFDekI7O0VBRUUsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGVBQWU7QUFDakI7O0FBRUE7O0lBRUksYUFBYTtJQUNiLGNBQWM7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixxQ0FBcUM7QUFDdkM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtFQUNoQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQSxlQUFlO0FBQ2Y7RUFDRSxhQUFhO0VBQ2IsYUFBYTtBQUNmXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gIC0tc2lkZWJhci1iZy1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwKTtcXG59XFxuXFxuKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuaHRtbCxcXG5ib2R5IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG5kaXYge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi8qIGFueSBjaGFuZ2UgaGVyZSBzaG91bGQgYWxzbyBiZSBtYWRlIGluIGxvYWRIZWFkZXIuanMgKi9cXG4jZGl2LWhvbWUtcGFnZSB7XFxuICBtaW4taGVpZ2h0OiA4MDBweDtcXG4gIG1pbi1oZWlnaHQ6IDgwMHB4O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjAwcHggMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA3ZnIgOTBmciAzZnI7XFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgICBcXFwiaGRyIGhkclxcXCJcXG4gICAgXFxcInNiciBjbnRcXFwiXFxuICAgIFxcXCJmdHIgZnRyXFxcIjtcXG59XFxuXFxuI2Rpdi1oZWFkZXIge1xcbiAgZ3JpZC1hcmVhOiBoZHI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4jZGl2LWhlYWRlci1sZWZ0IHtcXG4gIHdpZHRoOiAyMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI2Rpdi1oZWFkZXItY2VudGVyLFxcbiNsb2dvLXRleHQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI2xvZ28taW1hZ2Uge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vaWNvbnMvY2hlY2stYWxsLnN2Zyk7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgd2lkdGg6IDcwcHg7XFxuICBoZWlnaHQ6IDcwcHg7XFxufVxcblxcbiNsb2dvLXRleHQge1xcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gIGZvbnQtc2l6ZTogMy41cmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbiNsb2dvLXRleHQtcmlnaHQge1xcbiAgY29sb3I6IGdyZWVuO1xcbn1cXG5cXG4jZGl2LWhlYWRlci1yaWdodCB7XFxuICB3aWR0aDogMjAlO1xcbn1cXG5cXG4jaGlkZS1zaWRlYmFyLWJ0biB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi9pY29ucy9oYW1idXJnZXItaWNvbi5zdmcpO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpZGViYXItYmctY29sb3IpO1xcbiAgd2lkdGg6IDQwcHg7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICBtYXJnaW4tbGVmdDogMjBweDtcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuI2Rpdi1zaWRlYmFyIHtcXG4gIGdyaWQtYXJlYTogc2JyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbn1cXG5cXG4jaG9tZS1jYXJkLFxcbiNwcm9qZWN0LWNhcmQge1xcbiAgcGFkZGluZzogMjBweDtcXG4gIGhlaWdodDogNTAlO1xcbiAgLyogYm9yZGVyOiAxcHggc29saWQgYmxhY2s7ICovXFxufVxcblxcbi8qIGhvbWUgY2FyZCBhbmQgcHJvamVjdCBjYXJkIHRpdGxlcyAqL1xcbiNob21lLWNhcmQgPiBwLFxcbiNwcm9qZWN0LWNhcmQgPiBwIHtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcblxcbi8qIGhvbWUgY2FyZCBjYXRlZ29yaWVzICovXFxuI2hvbWUtY2FyZCA+IGRpdixcXG4jcHJvamVjdC1jYXJkID4gZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgbWFyZ2luLXRvcDogMzBweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDFyZW07XFxufVxcblxcbiNob21lLWNhcmQgPiBkaXYgPiBkaXY6Zmlyc3QtY2hpbGQsXFxuI3Byb2plY3QtY2FyZCA+IGRpdiA+IGRpdjpmaXJzdC1jaGlsZHtcXG4gICAgd2lkdGg6IDIuMHJlbTtcXG4gICAgaGVpZ2h0OiAyLjByZW07XFxufVxcblxcbiNwcm9qZWN0LWNhcmQgPiBkaXY6bGFzdC1jaGlsZHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuI2Rpdi1jb250ZW50IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcbiAgZ3JpZC1hcmVhOiBjbnQ7XFxufVxcblxcbiNkaXYtZm9vdGVyIHtcXG4gIGdyaWQtYXJlYTogZnRyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjc1KTtcXG59XFxuXFxuI2Rpdi1mb290ZXIgPiBkaXZ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBwYWRkaW5nLXRvcDogNXB4O1xcbiAgd2lkdGg6IDQwMHB4O1xcbn1cXG5cXG4jZGl2LWZvb3RlciA+IGRpdiA+IGRpdntcXG4gIHdpZHRoOiBmaXQtY29udGVudDtcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgY29sb3I6IGFudGlxdWV3aGl0ZTtcXG59XFxuXFxuI2Rpdi1mb290ZXIgYXtcXG4gIGNvbG9yOiBhbnRpcXVld2hpdGU7XFxufVxcblxcbi8qIGhlYXJ0IGxvZ28gKi9cXG4jZGl2LWZvb3RlciA+IGRpdiA+IGRpdjpudGgtY2hpbGQoMil7XFxuICB3aWR0aDogMS41cmVtO1xcbiAgbWFyZ2luOiAwIDRweDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21vZGFsLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21vZGFsLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGA6cm9vdHtcbiAgICAtLWFkZC1idXR0b24tY29sb3I6IGdyZWVuO1xuICAgIC0tY2FuY2VsLWJ1dHRvbi1jb2xvcjogdG9tYXRvO1xufVxuXG4ubW9kYWwge1xuICBkaXNwbGF5OiBub25lOyAvKiBIaWRkZW4gYnkgZGVmYXVsdCAqL1xuICBwb3NpdGlvbjogZml4ZWQ7IC8qIFN0YXkgaW4gcGxhY2UgKi9cbiAgei1pbmRleDogMTsgLyogU2l0IG9uIHRvcCAqL1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgd2lkdGg6IDEwMCU7IC8qIEZ1bGwgd2lkdGggKi9cbiAgaGVpZ2h0OiAxMDAlOyAvKiBGdWxsIGhlaWdodCAqL1xuICBvdmVyZmxvdzogdmlzaWJsZTsgLyogRW5hYmxlIHNjcm9sbCBpZiBuZWVkZWQgKi9cbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDApOyAvKiBGYWxsYmFjayBjb2xvciAqL1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7IC8qIEJsYWNrIHcvIG9wYWNpdHkgKi9cbn1cblxuLm1vZGFsID4gZGl2e1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDQ1JTtcbiAgICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgIHdpZHRoOiA1MDBweDtcbiAgICBoZWlnaHQ6IDE1MHB4O1xufVxuXG4jbW9kYWwtY29udGVudHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAxMHB4O1xufVxuXG4jbW9kYWwtY29udGVudCA+IGRpdntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbiNtb2RhbC1jb250ZW50IGlucHV0LFxuI21vZGFsLWNvbnRlbnQgYnV0dG9ue1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBtYXJnaW46IDAgMzBweDtcbn1cblxuI21vZGFsLWNvbnRlbnQgaW5wdXR7XG4gICAgd2lkdGg6IDc1JTtcbn1cblxuI21vZGFsLWNvbnRlbnQgYnV0dG9ue1xuICAgIHdpZHRoOiAzMCU7XG59XG5cbiNtb2RhbC1jb250ZW50IGJ1dHRvbjpmaXJzdC1jaGlsZHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hZGQtYnV0dG9uLWNvbG9yKTtcbn1cblxuI21vZGFsLWNvbnRlbnQgYnV0dG9uOmxhc3QtY2hpbGR7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2FuY2VsLWJ1dHRvbi1jb2xvcik7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvbW9kYWwuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0kseUJBQXlCO0lBQ3pCLDZCQUE2QjtBQUNqQzs7QUFFQTtFQUNFLGFBQWEsRUFBRSxzQkFBc0I7RUFDckMsZUFBZSxFQUFFLGtCQUFrQjtFQUNuQyxVQUFVLEVBQUUsZUFBZTtFQUMzQixRQUFRO0VBQ1IsU0FBUztFQUNULGdDQUFnQztFQUNoQyxXQUFXLEVBQUUsZUFBZTtFQUM1QixZQUFZLEVBQUUsZ0JBQWdCO0VBQzlCLGlCQUFpQixFQUFFLDRCQUE0QjtFQUMvQyw4QkFBOEIsRUFBRSxtQkFBbUI7RUFDbkQsb0NBQW9DLEVBQUUscUJBQXFCO0FBQzdEOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGVBQWU7SUFDZixRQUFRO0lBQ1IsU0FBUztFQUNYLGdDQUFnQztJQUM5QixZQUFZO0lBQ1osYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTs7SUFFSSxpQkFBaUI7SUFDakIsWUFBWTtJQUNaLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSx5Q0FBeUM7QUFDN0M7O0FBRUE7SUFDSSw0Q0FBNEM7QUFDaERcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3R7XFxuICAgIC0tYWRkLWJ1dHRvbi1jb2xvcjogZ3JlZW47XFxuICAgIC0tY2FuY2VsLWJ1dHRvbi1jb2xvcjogdG9tYXRvO1xcbn1cXG5cXG4ubW9kYWwge1xcbiAgZGlzcGxheTogbm9uZTsgLyogSGlkZGVuIGJ5IGRlZmF1bHQgKi9cXG4gIHBvc2l0aW9uOiBmaXhlZDsgLyogU3RheSBpbiBwbGFjZSAqL1xcbiAgei1pbmRleDogMTsgLyogU2l0IG9uIHRvcCAqL1xcbiAgdG9wOiA1MCU7XFxuICBsZWZ0OiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gIHdpZHRoOiAxMDAlOyAvKiBGdWxsIHdpZHRoICovXFxuICBoZWlnaHQ6IDEwMCU7IC8qIEZ1bGwgaGVpZ2h0ICovXFxuICBvdmVyZmxvdzogdmlzaWJsZTsgLyogRW5hYmxlIHNjcm9sbCBpZiBuZWVkZWQgKi9cXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwKTsgLyogRmFsbGJhY2sgY29sb3IgKi9cXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTsgLyogQmxhY2sgdy8gb3BhY2l0eSAqL1xcbn1cXG5cXG4ubW9kYWwgPiBkaXZ7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogNDUlO1xcbiAgICBsZWZ0OiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gICAgd2lkdGg6IDUwMHB4O1xcbiAgICBoZWlnaHQ6IDE1MHB4O1xcbn1cXG5cXG4jbW9kYWwtY29udGVudHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuI21vZGFsLWNvbnRlbnQgPiBkaXZ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jbW9kYWwtY29udGVudCBpbnB1dCxcXG4jbW9kYWwtY29udGVudCBidXR0b257XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIG1hcmdpbjogMCAzMHB4O1xcbn1cXG5cXG4jbW9kYWwtY29udGVudCBpbnB1dHtcXG4gICAgd2lkdGg6IDc1JTtcXG59XFxuXFxuI21vZGFsLWNvbnRlbnQgYnV0dG9ue1xcbiAgICB3aWR0aDogMzAlO1xcbn1cXG5cXG4jbW9kYWwtY29udGVudCBidXR0b246Zmlyc3QtY2hpbGR7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFkZC1idXR0b24tY29sb3IpO1xcbn1cXG5cXG4jbW9kYWwtY29udGVudCBidXR0b246bGFzdC1jaGlsZHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2FuY2VsLWJ1dHRvbi1jb2xvcik7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAoIXNjcmlwdFVybCB8fCAhL15odHRwKHM/KTovLnRlc3Qoc2NyaXB0VXJsKSkpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHQwOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oMCk7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=