document.addEventListener('DOMContentLoaded', () => {
    const totalTasksSpan = document.getElementById('total-tasks');
    const completedTasksSpan = document.getElementById('completed-tasks');
    const pendingTasksSpan = document.getElementById('pending-tasks');
    const statusBreakdownDiv = document.getElementById('status-breakdown');

    loadDashboardData();

    function loadDashboardData() {
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

        const totalTasks = tasks.length;
        const completedTasks = tasks.filter(task => task.completed).length;
        const pendingTasks = totalTasks - completedTasks;

        totalTasksSpan.textContent = totalTasks;
        completedTasksSpan.textContent = completedTasks;
        pendingTasksSpan.textContent = pendingTasks;

        renderStatusBreakdown(tasks);
    }

    function renderStatusBreakdown(tasks) {
        statusBreakdownDiv.innerHTML = ''; // Clear previous breakdown

        const completedCount = tasks.filter(task => task.completed).length;
        const pendingCount = tasks.length - completedCount;

        const ul = document.createElement('ul');

        const doneLi = document.createElement('li');
        doneLi.textContent = `Done: ${completedCount}`;
        ul.appendChild(doneLi);

        const toDoLi = document.createElement('li');
        toDoLi.textContent = `To Do: ${pendingCount}`;
        ul.appendChild(toDoLi);

        statusBreakdownDiv.appendChild(ul);
         // Add a simple message if there are no tasks
        if (tasks.length === 0) {
            statusBreakdownDiv.innerHTML = '<p>No tasks yet. Add some tasks in the to-do list!</p>';
        }
    }
});
