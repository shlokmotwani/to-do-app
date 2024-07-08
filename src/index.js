import { createProject } from "./project";
import { createTask } from "./task";
import { loadHomePage } from "./loadHomePage";
import { homeCategoryButtons } from "./loadSidebar";
import "./style.css";
import "./modal.css";
import { format } from "date-fns";

let allProjects = [];

function addDummyContent() {
  let gym = createProject("Gym");
  let dance = createProject("Dance");
  let study = createProject("Study");
  addToProjects(gym);
  addToProjects(dance);
  addToProjects(study);

  let gymTaskOne = createTask(
    "Go to gym",
    "check out all gyms",
    format(new Date("December 25, 2024"), "dd/LLL/yyyy"),
    "high",
    "leave your house on time",
    true
  );

  let gymTaskTwo = createTask(
    "Finalise Gym Plan",
    "Get done with gym and trainers",
    format(new Date("July 07, 2024"), "dd/LLL/yyyy"),
    "medium",
    "choose a trainer with certification"
  );

  let gymTaskThree = createTask(
    "Start working out",
    "Follow PPL routine",
    format(new Date("May 16, 2024"), "dd/LLL/yyyy"),
    "low",
    "Rest for 1-2 minutes in b/w sets"
  );

  let danceTaskOne = createTask(
    "Go to Dance class",
    "check out all dance trainers",
    format(new Date("December 06, 2024"), "dd/LLL/yyyy"),
    "medium",
    "leave your house on time",
    true
  );

  let danceTaskTwo = createTask(
    "Learn classical dance",
    "Get done with the basics",
    format(new Date("September 18, 2024"), "dd/LLL/yyyy"),
    "high",
    "nothing here"
  );

  let danceTaskThree = createTask(
    "Start practicing more",
    "Follow abc routine",
    format(new Date("July 11, 2024"), "dd/LLL/yyyy"),
    "low",
    "Rest for 5 minutes after 25mins sesh"
  );

  let studyTaskOne = createTask(
    "Go to library",
    "check out all libraries",
    format(new Date("October 16, 2024"), "dd/LLL/yyyy"),
    "high",
    "leave your house on time",
    true
  );

  let studyTaskTwo = createTask(
    "Finalise library Plan",
    "Get done with library incharge",
    format(new Date("July 07, 2024"), "dd/LLL/yyyy"),
    "high",
    "choose a library with good reviews"
  );

  let studyTaskThree = createTask(
    "Start reading more",
    "Follow abc routine",
    format(new Date("January 04, 2025"), "dd/LLL/yyyy"),
    "low",
    "Rest for 5 minutes after 25mins sesh"
  );


  gym.tasks.push(gymTaskOne);
  gym.tasks.push(gymTaskTwo);
  gym.tasks.push(gymTaskThree);

  dance.tasks.push(danceTaskOne);
  dance.tasks.push(danceTaskTwo);
  dance.tasks.push(danceTaskThree);

  study.tasks.push(studyTaskOne);
  study.tasks.push(studyTaskTwo);
  study.tasks.push(studyTaskThree);
}

function addToProjects(project) {
  allProjects.push(project);
}

addDummyContent();
loadHomePage();

//Show all tasks by default on home page load
homeCategoryButtons[0].click();

export { allProjects, addToProjects };
