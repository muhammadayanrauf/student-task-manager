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
      card.innerHTML = "<h3></h3><p></p>";
      card.querySelector("h3").textContent = t.title;
      card.querySelector("p").textContent = t.description;
      taskList.appendChild(card);
    });
}

addButton.addEventListener("click", () => {
  const title = titleInput.value.trim();
  if (!title) return;
  tasks.push({ title, description: descInput.value.trim() });
  titleInput.value = "";
  descInput.value = "";
  renderTasks(searchBox.value);
});

searchBox.addEventListener("input", () => renderTasks(searchBox.value));