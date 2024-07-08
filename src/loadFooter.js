let footer;
let wrapper;
let leftDiv;
let centerDiv;
let rightDiv;

import heartImage from "./icons/heart_icon.svg";

export function loadFooter() {
  footer = document.createElement("div");
  wrapper = document.createElement("div");
  leftDiv = document.createElement("div");
  centerDiv = document.createElement("div");
  rightDiv = document.createElement("div");
  let text = document.createElement("span");
  let link = document.createElement("a");
  let heartIcon = new Image();
  heartIcon.src = heartImage;

  leftDiv.textContent = "made with ";
  text.textContent = " by ";
  link.textContent = "shlok.codes";

  link.href = "https://github.com/shlokmotwani";
  link.target = "_blank";
  footer.id = "div-footer";

  rightDiv.appendChild(text);
  rightDiv.appendChild(link);
  centerDiv.appendChild(heartIcon);
  wrapper.appendChild(leftDiv);
  wrapper.appendChild(centerDiv);
  wrapper.appendChild(rightDiv);

  footer.appendChild(wrapper);
}

export { footer };
