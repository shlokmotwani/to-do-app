import { header, hideSidebarBtn, isSidebarVisible } from "./loadHeader";
import { loadHeader } from "./loadHeader";
import { sidebar } from "./loadSidebar";
import { loadSidebar } from "./loadSidebar";
import { content } from "./loadContent";
import { loadContent } from "./loadContent";
import { footer } from "./loadFooter";
import { loadFooter } from "./loadFooter";

let homePage;

export function loadHomePage() {
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

export { homePage, header, sidebar, content, footer };
