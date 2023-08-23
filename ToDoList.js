// Function to get tasks from LocalStorage
function getTasks() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    return tasks;
  }
  
  // Function to save tasks to LocalStorage
  function saveTasks(tasks) {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
  
  // Function to add a task
  function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();
  
    if (taskText === '') {
      return;
    }
  
    const tasks = getTasks();
    tasks.push({ text: taskText, completed: false });
    saveTasks(tasks);
  
    taskInput.value = '';
    showTasks();
  }
  
  // Function to toggle the completion status of a task
  function toggleTask(index) {
    const tasks = getTasks();
    tasks[index].completed = !tasks[index].completed;
    saveTasks(tasks);
    showTasks();
  }
  
  // Function to delete a task
  function deleteTask(index) {
    const tasks = getTasks();
    tasks.splice(index, 1);
    saveTasks(tasks);
    showTasks();
  }
  
  // Function to display tasks on the page
  function showTasks() {
    const taskList = document.getElementById('taskList');
    const tasks = getTasks();
    let html = '';
  
    tasks.forEach((task, index) => {
      html += `<li class="${task.completed ? 'completed' : ''}">
                <span onclick="toggleTask(${index})">${task.text}</span>
                <button onclick="deleteTask(${index})">Delete</button>
              </li>`;
    });
  
    taskList.innerHTML = html;
  }
  
  // Show tasks when the page loads
  showTasks();
  