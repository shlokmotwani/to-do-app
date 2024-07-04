import { createProject } from "./project";
import { createTask } from "./task";
import { loadHomePage } from "./loadHomePage";
import { mainDiv, header, sidebar, content, footer } from "./loadHomePage";
import "./style.css";

let allProjects = [];

let gym = createProject("Gym");
allProjects.push(gym);
let dance = createProject("Dance");
allProjects.push(dance);
let study = createProject("Study");
allProjects.push(study);

let gymTaskOne = createTask(
  "Go to gym",
  "check out all gyms",
  "01/01/2025",
  "high",
  "nikal jaldi ghar se",
  true
);

let gymTaskTwo = createTask(
  "Finalise Gym Plan",
  "Get done with gym and trainers",
  "01/01/2025",
  "high",
  "koi bhi trainer le le yaar"
);

let gymTaskThree = createTask(
  "GStart working out",
  "Follow PPL routine",
  "01/01/2025",
  "low",
  "goood"
);

gym.tasks.push(gymTaskOne);
gym.tasks.push(gymTaskTwo);
gym.tasks.push(gymTaskThree);

loadHomePage();

export {allProjects};