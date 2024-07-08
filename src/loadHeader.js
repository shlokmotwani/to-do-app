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

function loadHeader() {
  header = document.createElement("div");
  headerLeft = document.createElement("div");
  headerCenter = document.createElement("div");
  headerRight = document.createElement("div");
  hideSidebarBtn = document.createElement("button");
  logoImage = document.createElement("div");
  logoText = document.createElement("div");
  logoTextLeft = document.createElement("span");
  logoTextRight = document.createElement("span");

  header.id = "div-header";
  headerLeft.id = "div-header-left";
  headerCenter.id = "div-header-center";
  headerRight.id = "div-header-right";
  hideSidebarBtn.id = "hide-sidebar-btn";

  headerLeft.appendChild(hideSidebarBtn);
  header.appendChild(headerLeft);
  header.appendChild(headerCenter);
  header.appendChild(headerRight);

  hideSidebarBtn.addEventListener("click", () => {
    if (isSidebarVisible) {
      isSidebarVisible = false;
      sidebar.style.cssText = `
          display: none;`;

      homePage.style.cssText = `display: grid;
      grid-template-columns: 200px 1fr;
      grid-template-rows: 7fr 90fr 3fr;
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
      grid-template-rows: 7fr 90fr 3fr;
      grid-template-areas: 
      "hdr hdr"
      "sbr cnt"
      "ftr ftr";`;
    }
  });

  logoImage.id = "logo-image";
  logoText.id = "logo-text";
  logoTextLeft.id = "logo-text-left";
  logoTextRight.id = "logo-text-right";

  logoTextLeft.textContent = "To";
  logoTextRight.textContent = "Do";

  logoTextLeft.style.color = "wheat";

  logoText.appendChild(logoTextLeft);
  logoText.appendChild(logoTextRight);
  headerCenter.appendChild(logoImage);
  headerCenter.appendChild(logoText);
}

export { header, loadHeader };
