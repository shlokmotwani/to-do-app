let footer;
let wrapper;
let leftDiv;
let centerDiv;
let rightDiv;

import heartImage from "./icons/heart_icon.svg";

export function loadFooter() {
  footer = document.createElement("div");
  footer.id = "div-footer";

  wrapper = document.createElement("div");

  leftDiv = document.createElement("div");
  leftDiv.textContent = "made with ";
  centerDiv = document.createElement("div");
  let heartIcon = new Image();
  heartIcon.src = heartImage;
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

export { footer };
