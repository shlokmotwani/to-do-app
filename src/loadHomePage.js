import { header, loadHeader } from "./loadHeader";
import { sidebar, loadSidebar } from "./loadSidebar";
import { content, loadContentStructure, loadTaskCards } from "./loadContent";
import { footer, loadFooter } from "./loadFooter";

let homePage;
let modal;

function loadHomePage() {
  homePage = null;
  homePage = document.createElement("div");
  homePage.id = "div-home-page";
  loadHeader();
  loadSidebar();
  loadContentStructure();
  loadTaskCards();
  loadFooter();

  homePage.appendChild(header);
  homePage.appendChild(sidebar);
  homePage.appendChild(content);
  homePage.appendChild(footer);
  document.body.appendChild(homePage);
}

export { homePage, loadHomePage, modal };
