const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const clearBtn = document.querySelector('.btn-clear');
const checkBtn = document.querySelector('.btn-check');
const uncheckBtn = document.querySelector('.btn-uncheck');

let items = JSON.parse(localStorage.getItem('items')) || [];

function addItem(event) {
    event.preventDefault();

    const text = this.querySelector('[name=item]').value;
    items.push({
        text,
        done: false
    });
    populateList(itemsList, items);
    localStorage.setItem('items', JSON.stringify(items));
    this.reset();
}

function populateList(platesList, plates = []) {
    platesList.innerHTML = plates.map((plate, i) => `
        <li>
            <input type="checkbox" data-index="${i}" id="item${i}" ${plate.done ? 'checked' : ''}>
            <label for="item${i}">${plate.text}</label>
        </li>
    `).join('');
}

function toggleDone(event) {
    if (!event.target.matches('input')) return; // skip this unless it's an input

    const el = event.target;
    const index = el.dataset.index;
    items[index].done = !items[index].done;
    localStorage.setItem('items', JSON.stringify(items));
}

function clearAll() {
    items = [];
    populateList(itemsList, items);
    localStorage.removeItem('items');
}

function toggleChecks(isChecked) {
    if (items.length === 0) return; // Nothing to check/uncheck
    items.forEach(item => {
        item.done = isChecked;
    });
    populateList(itemsList, items);
    localStorage.setItem('items', JSON.stringify(items));
}

addItems.addEventListener('submit', addItem);
itemsList.addEventListener('click', toggleDone);
clearBtn.addEventListener('click', clearAll);
checkBtn.addEventListener('click', () => toggleChecks(true));
uncheckBtn.addEventListener('click', () => toggleChecks(false));

populateList(itemsList, items);

