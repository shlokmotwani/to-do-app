let content;
let innerDiv;
let titleText;

function loadContent() {
  content = null;
  content = document.createElement("div");
  content.id = "div-content";
  innerDiv = document.createElement("div");
  innerDiv.id = "div-innerDiv";

  let titleDiv = document.createElement("div");
  titleDiv.id = "content-title";
  titleText = document.createElement("span");
  titleText.id = "content-title-text";

  if(titleText.textContent == ""){
    titleText.textContent = "Title";
  }
  let tasksDiv = document.createElement("div");
  tasksDiv.id = "content-tasks";

  titleDiv.appendChild(titleText);
  innerDiv.appendChild(titleDiv);
  innerDiv.appendChild(tasksDiv);
  content.appendChild(innerDiv);
}


export { content, loadContent, titleText };
