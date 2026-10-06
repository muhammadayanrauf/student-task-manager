const tasks = [];

const titleInput = document.getElementById("task-title");
const descInput = document.getElementById("task-description");
const addButton = document.getElementById("add-task");
const searchBox = document.getElementById("search-box");
const taskList = document.getElementById("task-list");

function renderTasks(filter = "") {
  taskList.innerHTML = "";
  tasks
    .filter(t => t.title.toLowerCase().includes(filter.toLowerCase()))
    .forEach(t => {
      const card = document.createElement("div");
      card.className = "task-card";
      card.classList.toggle("is-completed", t.completed);

      const title = document.createElement("h3");
      title.textContent = t.title;
      const description = document.createElement("p");
      description.textContent = t.description;
      const completionButton = document.createElement("button");
      completionButton.type = "button";
      completionButton.textContent = t.completed ? "Mark pending" : "Complete";
      completionButton.setAttribute("aria-pressed", String(t.completed));
      completionButton.addEventListener("click", () => {
        t.completed = !t.completed;
        renderTasks(searchBox.value);
      });

      card.append(title, description, completionButton);
      taskList.appendChild(card);
    });
}

addButton.addEventListener("click", () => {
  const title = titleInput.value.trim();
  if (!title) return;
  tasks.push({ title, description: descInput.value.trim(), completed: false });
  titleInput.value = "";
  descInput.value = "";
  renderTasks(searchBox.value);
});

searchBox.addEventListener("input", () => renderTasks(searchBox.value));