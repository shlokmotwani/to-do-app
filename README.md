# 📝 ToDo App
A simple yet effective web-based ToDo application designed to help you organize your tasks efficiently. This app allows you to manage your daily responsibilities, prioritize important items, and categorize tasks into custom projects for better organization.

---

## ✨ Features
1. Task Management: Create, read, update, and delete (CRUD) tasks.

2. Project Categories: Organize tasks into custom projects (e.g., Gym, Dance, Study). Users can add new projects as needed.

3. Smart Categories:

- All Tasks: View every task across all your projects.
- Today: See all tasks due today.
- Next 7 Days: Get an overview of tasks due in the upcoming week.
- Important: Quickly access tasks you've marked as high priority.

4. Task Details: Each task includes a title, description, due date, priority level, and notes.

5. Persistence: Your tasks and projects are saved locally in your browser's storage, so your data remains even after closing the tab.

6. Responsive Design: A clean and intuitive user interface.

## 🚀 Live Demo
Experience the ToDo App live:
[https://shlokmotwani.github.io/to-do-app/](https://shlokmotwani.github.io/to-do-app/)

---

## 🛠️ Technologies Used
- HTML5: For the core structure of the web application.
- CSS3: For styling and responsive design.
- JavaScript (ES6+): For all interactive functionalities and application logic.
- Webpack: For bundling modules, managing assets, and optimizing the project for deployment.
- date-fns: A modern JavaScript date utility library for efficient date manipulation and formatting.

---

## 📦 Getting Started
To get a local copy up and running, follow these simple steps.

### Prerequisites
Node.js (LTS version recommended)
npm (comes with Node.js)
Git

### Installation
Clone the repository:
```bash
git clone https://github.com/shlokmotwani/to-do-app.git
cd your-repo-name
```

Install NPM packages:
```bash
npm install
```

Build the project:
```bash
npm run build
```

This will compile the project files into the dist/ directory.

Open index.html:
Navigate to the dist/ folder and open the index.html file in your web browser. Alternatively, you can use a local server (e.g., npx serve dist).

## 💡 Usage
1. Add a New Project: Click on the "Add Project" button in the sidebar to create a new category for your tasks.

2. Add a New Task: Select a project (or "All Tasks") and click "Add Task" to create a new task with details.

3. Filter Tasks: Use the sidebar buttons (All Tasks, Today, Next 7 Days, Important, and your custom projects) to filter and view tasks.

4. Edit/Delete Tasks & Projects: Hover over tasks or projects to reveal options for editing or deleting them.
