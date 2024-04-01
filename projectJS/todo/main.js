import { TodoList } from "./todoList.js";
import { TodoLists } from "./todoLists.js";
import { nanoid } from 'https://cdn.jsdelivr.net/npm/nanoid@5.0.6/+esm'

const inputName = document.getElementById('input-name')
const btnAdd = document.getElementById('btn-add')
const ol = document.getElementById('todo-list')

const todoLists = new TodoLists()


btnAdd.addEventListener('click', (e) => {
    const name = inputName.value;
    const todoList = new TodoList(nanoid(), name)
    todoLists.add(todoList)
    console.log(todoList)
    inputName.value = ''
    render();

});

function render() {
    ol.innerHTML = ''
    todoLists.array.forEach(c => {

        const li = document.createElement('li')
        li.classList.add;
        li.id = 'li-list'

        const form = document.createElement('form')
        form.classList.add('form');
        form.id = 'box';

        const input = document.createElement('input')
        input.type = 'text'
        input.classList.add; // הadd קשור לבוסטרפ
        input.id = 'input2'
        input.required = true;
        input.placeholder = 'Name';
        input.value = c.name

        const deleteButton = document.createElement('button');
        deleteButton.type = 'button';
        deleteButton.style.width = '26px'
        deleteButton.style.height = '5vh'
        deleteButton.className = "bi bi-trash3"
        deleteButton.classList.add('n');


        deleteButton.addEventListener('click', () => {
            //delete the contact from the array:
            todoLists.remove(c.id);
            render()
        })

        const favoriteButton = document.createElement('button');
        favoriteButton.type = 'button';
        favoriteButton.style.width = '26px'
        favoriteButton.style.height = '5vh'
        favoriteButton.classList.add('n2')

        const icon = c.favorite ? '💗' : '🤍';
        favoriteButton.innerHTML = ` ${icon}`;
        favoriteButton.addEventListener('click', () => {
            //save to array:
            todoLists.toggleFavorite(c.id);
            //show the updated html:
            render();
        });



        form.appendChild(input);
        form.appendChild(deleteButton);
        form.appendChild(favoriteButton);
        //append form to li
        li.appendChild(form);
        ol.appendChild(li);

    })
}
render();
