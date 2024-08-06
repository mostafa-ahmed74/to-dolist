function addTask() {
  var taskInput = document.getElementById("newTask");
  var taskText = taskInput.value.trim();
  if (taskText !== "") {
      var ul = document.getElementById("taskList");

      var li = document.createElement("li");
      li.textContent = taskText;

      var completeButton = document.createElement("button");
      completeButton.textContent = "Complete";
      completeButton.classList.add("complete-btn");
      completeButton.onclick = function() {
          li.classList.toggle("completed");
      };

      var deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteButton.onclick = function() {
          ul.removeChild(li);
      };

      li.appendChild(completeButton);
      li.appendChild(deleteButton);
      ul.appendChild(li);

      taskInput.value = "";
  }
}