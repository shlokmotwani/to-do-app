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
addToProjects(study);

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

let studyTaskOne = createTask(
  "Go to library",
  "check out all libraries",
  "01/01/2025",
  "high",
  "leave your house on time",
  true
);

let studyTaskTwo = createTask(
  "Finalise library Plan",
  "Get done with library incharge",
  "01/01/2025",
  "high",
  "choose a library with good reviews"
);

let studyTaskThree = createTask(
  "Start reading more",
  "Follow abc routine",
  "01/01/2025",
  "low",
  "Rest for 5 minutes after 25mins sesh"
);

study.tasks.push(studyTaskOne);
study.tasks.push(studyTaskTwo);
study.tasks.push(studyTaskThree);

loadHomePage();

function addToProjects(project){
  allProjects.push(project);
}

export { allProjects, addToProjects };
