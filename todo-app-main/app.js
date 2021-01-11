const newTask = document.querySelector('.add-item input');
const itemsDiv = document.querySelector('.items')

// Zmiana szablonu
document.querySelector('.change-theme').addEventListener('click', () => {
    if (document.querySelector('body').classList.contains('light-theme')) {
        document.querySelector('body').classList.remove('light-theme');
        document.querySelector('body').classList.add('dark-theme');
    } else {
        document.querySelector('body').classList.remove('dark-theme');
        document.querySelector('body').classList.add('light-theme');
    }
})

// Dodaj nowe zadanie 
const addNewTask = e => {
    if (e.key == 'Enter') {
        const newItem = document.createElement('div');
        newItem.classList.add('item');
        newItem.setAttribute('draggable', 'true');
        newItem.innerHTML = `<button class="circle"></button>
        <p>${newTask.value}</p>
        <button class="delete"></button>`
        itemsDiv.appendChild(newItem);
        alert('ok')
        newTask.value = '';
        leftNumber++;
        document.querySelector('.controls .number').innerText = leftNumber
    }
}
newTask.addEventListener('keydown', addNewTask)
const items = document.querySelectorAll('.item');
let leftNumber = items.length;
document.querySelector('.controls .number').innerText = leftNumber
// Zadanie jest skończone & usuwanie 

const completeTask = item => {
    item.querySelector('.delete').addEventListener('click', () => {
        item.remove()
        if (item.classList.contains('active')) {
            leftNumber--;
            document.querySelector('.controls .number').innerText = leftNumber
        }
    })

    item.addEventListener('click', () => {
        if (item.classList.contains('active')) {
            item.classList.remove('active');
            leftNumber++;
            document.querySelector('.controls .number').innerText = leftNumber
        } else {
            item.classList.add('active');
            leftNumber--;
            document.querySelector('.controls .number').innerText = leftNumber
        }
    })
}
items.forEach(completeTask);