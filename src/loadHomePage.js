import { header, loadHeader } from "./loadHeader";
import { sidebar, loadSidebar } from "./loadSidebar";
import { content, loadContent } from "./loadContent";
import { footer, loadFooter } from "./loadFooter";

let homePage;

function loadHomePage() {
  homePage = document.createElement("div");
  homePage.id = "div-home-page";
  loadHeader();
  loadSidebar();
  loadContent();
  loadFooter();

  homePage.appendChild(header);
  homePage.appendChild(sidebar);
  homePage.appendChild(content);
  homePage.appendChild(footer);
  document.body.appendChild(homePage);

  console.log(homePage);
}

export { homePage, loadHomePage};
