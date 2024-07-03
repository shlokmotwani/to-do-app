import { sidebar } from "./loadSidebar";
import { homePage } from "./loadHomePage";

let header;
let hideSidebarBtn;
let isSidebarVisible = true;

export function loadHeader() {
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
