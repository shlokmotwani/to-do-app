import { sidebar } from "./loadSidebar";
import { homePage } from "./loadHomePage";

let header;
let headerLeft;
let headerCenter;
let headerRight;
let hideSidebarBtn;
let isSidebarVisible = true;

export function loadHeader() {
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
      sidebar.style.cssText = `
          display: none;`;

      homePage.style.cssText = `display: grid;
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

      homePage.style.cssText = `display: grid;
      grid-template-columns: 20% 80%;
      grid-template-rows: 10% 87% 3%;
      grid-template-areas: 
      "hdr hdr"
      "sbr cnt"
      "ftr ftr";`;
    }
  });
}

export { header, hideSidebarBtn, isSidebarVisible };