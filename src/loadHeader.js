import { sidebar } from "./loadSidebar";
import { homePage } from "./loadHomePage";

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
      grid-template-columns: 200px 1fr;
      grid-template-rows: 7% 90% 3%;
      grid-template-areas: 
      "hdr hdr"
      "cnt cnt"
      "ftr ftr";`;
    } else {
      isSidebarVisible = true;
      sidebar.style.cssText = `
          display: block;`;

      homePage.style.cssText = `display: grid;
      grid-template-columns: 200px 1fr;
      grid-template-rows: 7% 90% 3%;
      grid-template-areas: 
      "hdr hdr"
      "sbr cnt"
      "ftr ftr";`;
    }
  });

  logoImage = document.createElement('div');
  logoImage.id = 'logo-image';
  logoText = document.createElement('div');
  logoText.id = 'logo-text';
  logoTextLeft = document.createElement('span');
  logoTextLeft.id = 'logo-text-left';
  logoTextLeft.textContent = 'To';
  logoTextRight = document.createElement('span');
  logoTextRight.id = 'logo-text-right';
  logoTextRight.textContent = 'Do';
  logoText.appendChild(logoTextLeft);
  logoText.appendChild(logoTextRight);

  headerCenter.appendChild(logoImage);
  headerCenter.appendChild(logoText);
}

export { header };