import { createProject } from "./project";
import { createTask } from "./task";

let gym = createProject("Gym");
let gymTaskOne = createTask("Go to gym",
    "check out all gyms",
    "01/01/2025",
    "high",
    "nikal jaldi ghar se",
    true,
);

let gymTaskTwo = createTask("Finalise Gym Plan",
    "Get done with gym and trainers",
    "01/01/2025",
    "high",
    "koi bhi trainer le le yaar"
);

let gymTaskThree = createTask("GStart working out",
    "Follow PPL routine",
    "01/01/2025",
    "low",
    "goood"
);

gym.tasks.push(gymTaskOne);
gym.tasks.push(gymTaskTwo);
gym.tasks.push(gymTaskThree);

console.log(gym);