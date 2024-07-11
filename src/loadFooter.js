let footer;
let wrapper;
let centerDiv;

export function loadFooter() {
  footer = document.createElement("div");
  wrapper = document.createElement("div");
  centerDiv = document.createElement("div");
  let text = document.createElement("span");
  let link = document.createElement("a");

  text.textContent = "By ";
  link.textContent = "shlok.codes";

  link.href = "https://github.com/shlokmotwani";
  link.target = "_blank";
  footer.id = "div-footer";

  centerDiv.appendChild(text);
  centerDiv.appendChild(link);

  wrapper.appendChild(centerDiv);

  footer.appendChild(wrapper);
}

export { footer };
