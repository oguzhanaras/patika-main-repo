const input = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const deleteTaskBtn = document.getElementById('remove-task');
const toastDiv = document.getElementById('myToast');
const toastText = document.getElementById('toast-text');
let list = document.getElementById('list');


addTaskBtn.addEventListener('click', function() {

    const taskText = input.value;
    const closeButton = document.getElementById('close-btn');
    const toast = new bootstrap.Toast(toastDiv);
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
        li.textContent = taskText.trim();
        list.appendChild(li);
        toastText.textContent = 'Yeni görev başarıyla eklendi';
        toast.show();
        input.value = '';
    }
});

deleteTaskBtn.addEventListener('click', () => {
    tasks = document.querySelectorAll('.completed');
    try {
        tasks.forEach(task => task.remove());
        toastText.textContent = 'Görev başarıyla silindi';
        toast.show();
    } catch(err)  {
        console.error('görev silinirken hata olustu: ', err);
    }
});


list.addEventListener('click', function(e) {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('completed');
    }
});
