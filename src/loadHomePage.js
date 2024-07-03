let mainDiv;
let header;
let sidebar;
let content;
let footer;
let hideSidebarBtn;
let isSidebarVisible = true;

function loadHeader() {
  header = document.createElement("div");
  header.id = "div-header";
  hideSidebarBtn = document.createElement("button");
  hideSidebarBtn.id = "hide-sidebar-btn";
  hideSidebarBtn.textContent = "I/O";
  header.appendChild(hideSidebarBtn);

  hideSidebarBtn.addEventListener("click", () => {
    console.log("Hide Sidebar Button clicked");
    if (isSidebarVisible) {
      isSidebarVisible = false;
      sidebar.style.cssText = `
        display: none;`;

      mainDiv.style.cssText = `display: grid;
    grid-template-columns: 20% 80%;
    grid-template-rows: 10% 87% 3%;
    grid-template-areas: 
    "hdr hdr"
    "cnt cnt"
    "ftr ftr";`;
    } else {
      isSidebarVisible = true;
      sidebar.style.cssText = `
        display: block;`;

      mainDiv.style.cssText = `display: grid;
    grid-template-columns: 20% 80%;
    grid-template-rows: 10% 87% 3%;
    grid-template-areas: 
    "hdr hdr"
    "sbr cnt"
    "ftr ftr";`;
    }
  });
}

function loadSidebar() {
  sidebar = document.createElement("div");
  sidebar.id = "div-sidebar";
}

function loadContent() {
  content = document.createElement("div");
  content.id = "div-content";
}

function loadFooter() {
  footer = document.createElement("div");
  footer.id = "div-footer";
}

export function loadHomePage() {
  mainDiv = document.createElement("div");
  mainDiv.id = "div-main";
  loadHeader();
  loadSidebar();
  loadContent();
  loadFooter();

  mainDiv.appendChild(header);
  mainDiv.appendChild(sidebar);
  mainDiv.appendChild(content);
  mainDiv.appendChild(footer);
  document.body.appendChild(mainDiv);

  console.log(mainDiv);
}

export { mainDiv, header, sidebar, content, footer };
