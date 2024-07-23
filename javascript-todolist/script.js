const input = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const deleteTaskBtn = document.getElementById('remove-task');
const toastDiv = document.getElementById('myToast');
const toastText = document.getElementById('toast-text');
let list = document.getElementById('list');
const toast = new bootstrap.Toast(toastDiv);
let count = 0;
const closeButton = document.getElementById('close-btn');

addTaskBtn.addEventListener('click', function() {

    let taskText = input.value;

    closeButton.addEventListener('click', () => {
        toast.hide();
    });
    if (taskText === '') {
        toastText.textContent = 'İçerik boş olamaz';
        toast.show();
    } else if (!taskText.trim()) {
        toastText.textContent = 'Sadece boşluk olamaz';
        toast.show();
    } else {
        const li = document.createElement('li');
        li.classList.add('task', 'list-group-item');
        li.setAttribute('task-id', count);
        li.textContent = taskText.trim();
        list.appendChild(li);
        toastText.textContent = 'Yeni görev başarıyla eklendi';
        toast.show();
        localStorage.setItem("task" + count, taskText);
        count++;
        input.value = '';
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const tasks = localStorage;
    if (tasks.length) {
        for (let i = 0; i < tasks.length; i++) {
            const li = document.createElement('li');
            li.classList.add('task', 'list-group-item');
            li.textContent = tasks[i + "task"];
            list.appendChild(li);
            count++;
        }
    }
});


deleteTaskBtn.addEventListener('click', () => {
    comleted_tasks = document.querySelectorAll('.completed');
    if (comleted_tasks.length > 0) {
        try {
        comleted_tasks.forEach(task => {
            deleteLocal(task);
            task.remove();
        });
        toastText.textContent = 'Görev başarıyla silindi';
        toast.show();
        } catch(err)  {
            console.error('görev silinirken hata olustu: ', err);
        }
    }
});


function deleteLocal(task) {
    // console.log(task.getAttribute('task-id'));
    localStorage.removeItem(`task${task.getAttribute('task-id')}`);
}


list.addEventListener('click', function(e) {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('completed');
    }
});
