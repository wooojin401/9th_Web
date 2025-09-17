document.addEventListener('DOMContentLoaded', () => {
    const todoForm = document.querySelector('.container_form');
    const todoInput = document.querySelector('.container__form--input');
    const todoList = document.getElementById('todo-list');
    const doneList = document.getElementById('done-list');

    /**
    @param {SubmitEvent} event
    **/
    
    const handleTodoSubmit = (event) => {
        event.preventDefault();

        const taskText = todoInput.value.trim();

        if (taskText !== '') {
            const newListItem = document.createElement('li');

            newListItem.className = 'container__item';

            const textSpan = document.createElement('span');

            textSpan.className = 'container__item--text';
            textSpan.textContent = taskText;

            const buttonWrapper = document.createElement('div');
            const doneButton = document.createElement('button');

            doneButton.className = 'container__item--button';
            doneButton.textContent = '완료';
            doneButton.addEventListener('click', completeTask);

            const deleteButton = document.createElement('button');

            deleteButton.className = 'container__item--button';
            deleteButton.textContent = '삭제';
            deleteButton.addEventListener('click', removeTask);

            buttonWrapper.appendChild(doneButton);
            buttonWrapper.appendChild(deleteButton);
            newListItem.appendChild(textSpan);
            newListItem.appendChild(buttonWrapper);

            todoList.appendChild(newListItem);

            todoInput.value = '';
        }
    };

    const completeTask = function() {
        const taskItem = this.closest('.container__item');

        doneList.appendChild(taskItem);

        this.textContent = '되돌리기';
        this.removeEventListener('click', completeTask);
        this.addEventListener('click', restoreTask);
    };

    const restoreTask = function() {
        const taskItem = this.closest('.container__item');

        todoList.appendChild(taskItem);

        this.textContent = '완료';
        this.removeEventListener('click', restoreTask);
        this.addEventListener('click', completeTask);
    };

    const removeTask = function() {
        const taskItem = this.closest('.container__item');
        
        taskItem.remove();
    };

    todoForm.addEventListener('submit', handleTodoSubmit);
});