document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addButton = document.getElementById('addButton');
    const taskList = document.getElementById('taskList');
    const deleteButton = document.getElementById('deleteButton');
    const clearButton = document.getElementById('clearButton');

    // Load tasks from local storage
    loadTasks();

    addButton.addEventListener('click', addTask);
    taskList.addEventListener('click', handleTaskClick);
    deleteButton.addEventListener('click', deleteSelectedTasks);
    clearButton.addEventListener('click', clearCompletedTasks);
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === '') {
            alert('Please enter a task.');
            return;
        }

        const li = document.createElement('li');
        li.textContent = taskText;

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.addEventListener('change', toggleTaskCompletion);

        li.prepend(checkbox); // Add checkbox before the text
        taskList.appendChild(li);
        taskInput.value = '';
        saveTasks();
    }

    function handleTaskClick(event) {
        if (event.target.tagName === 'LI') {
            event.target.classList.toggle('selected'); // For selection, not completion
        }
    }

    function toggleTaskCompletion(event) {
        const listItem = event.target.parentElement;
        listItem.classList.toggle('completed');
        saveTasks();
    }

    function deleteSelectedTasks() {
        const selectedTasks = taskList.querySelectorAll('li input[type="checkbox"]:checked');
        if (selectedTasks.length === 0) {
            alert('No tasks selected to delete.');
            return;
        }
        selectedTasks.forEach(checkbox => {
            checkbox.parentElement.remove();
        });
        saveTasks();
    }

    function clearCompletedTasks() {
        const completedTasks = taskList.querySelectorAll('li.completed');
        if (completedTasks.length === 0) {
            alert('No completed tasks to clear.');
            return;
        }
        completedTasks.forEach(task => {
            task.remove();
        });
        saveTasks();
    }

    function saveTasks() {
        const tasks = [];
        taskList.querySelectorAll('li').forEach(li => {
            tasks.push({
                text: li.childNodes[1].textContent, // Assuming text is the second child node
                completed: li.classList.contains('completed'),
                checked: li.firstChild.checked // Save checkbox state
            });
        });
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    function loadTasks() {
        const tasks = JSON.parse(localStorage.getItem('tasks'));
        if (tasks) {
            tasks.forEach(task => {
                const li = document.createElement('li');
                li.textContent = task.text;
                if (task.completed) {
                    li.classList.add('completed');
                }

                const checkbox = document.createElement('input');
                checkbox.type = 'checkbox';
                checkbox.checked = task.checked; // Restore checkbox state
                checkbox.addEventListener('change', toggleTaskCompletion);

                li.prepend(checkbox);
                taskList.appendChild(li);
            });
        }
    }
});
