let submitBtn = document.querySelector("button");
let input = document.querySelector("input");
let ul = document.querySelector("#taskList");

submitBtn.addEventListener("click", addTask);

function addTask() {
  let taskText = input.value.trim();
  console.log(taskText);
  if (taskText == "") return alert("Please enter a task!");

  renderTask(taskText, false); //to display in UL
  input.value = "";
}

function renderTask(taskText, isCompleted) {
  let li = document.createElement("li");
  li.textContent = taskText;

  if (isCompleted) li.classList.add("completed");

  li.addEventListener("click", () => {
    li.classList.toggle("completed");
  });

  let deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.style.marginLeft = "10px";
  deleteBtn.addEventListener("click", () => {
    li.remove();
  });

  li.appendChild(deleteBtn);
  taskList.appendChild(li);
}
