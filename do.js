document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');
    const completedTaskList = document.getElementById('completedTaskList');

    addTaskBtn.addEventListener('click', addTask);

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText) {
            const taskItem = createTaskItem(taskText);
            taskList.appendChild(taskItem);
            taskInput.value = '';
        }
    }

    function createTaskItem(taskText) {
        const li = document.createElement('li');
        li.textContent = taskText;

        const timestamp = document.createElement('span');
        timestamp.textContent = `Added on: ${new Date().toLocaleString()}`;
        timestamp.style.fontSize = '12px';
        timestamp.style.color = '#888';

        const completeBtn = document.createElement('button');
        completeBtn.textContent = 'Complete';
        completeBtn.addEventListener('click', () => completeTask(li));

        li.appendChild(timestamp);
        li.appendChild(completeBtn);
        return li;
    }

    function completeTask(taskItem) {
        const completionTimestamp = document.createElement('span');
        completionTimestamp.textContent = `Completed on: ${new Date().toLocaleString()}`;
        completionTimestamp.style.fontSize = '12px';
        completionTimestamp.style.color = '#888';

        taskItem.appendChild(completionTimestamp);
        taskItem.classList.add('completed');
        taskItem.removeChild(taskItem.querySelector('button'));
        completedTaskList.appendChild(taskItem);
    }
});
