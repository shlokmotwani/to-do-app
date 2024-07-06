import { createProject } from "./project";
import { createTask } from "./task";
import { loadHomePage } from "./loadHomePage";
import "./style.css";
import "./modal.css";

let allProjects = [];

let gym = createProject("Gym");
addToProjects(gym);
let dance = createProject("Dance");
addToProjects(dance);
let study = createProject("Study");
allProjects.push(study);

let gymTaskOne = createTask(
  "Go to gym",
  "check out all gyms",
  "01/01/2025",
  "high",
  "leave your house on time",
  true
);

let gymTaskTwo = createTask(
  "Finalise Gym Plan",
  "Get done with gym and trainers",
  "01/01/2025",
  "high",
  "choose a trainer with certification"
);

let gymTaskThree = createTask(
  "Start working out",
  "Follow PPL routine",
  "01/01/2025",
  "low",
  "Rest for 1-2 minutes in b/w sets"
);

gym.tasks.push(gymTaskOne);
gym.tasks.push(gymTaskTwo);
gym.tasks.push(gymTaskThree);

loadHomePage();

function addToProjects(project){
  allProjects.push(project);
}

export { allProjects, addToProjects };
