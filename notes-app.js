let notes = getSavedNotes();

const filters = {
    searchText: ''
}

renderNotes(notes, filters);

document.querySelector('#create-note').addEventListener('click', function (event) {
    const id = uuidv4();
    notes.push({
        id: id,
        title: '',
        body: ''
    })
    saveNotes(notes);
    location.assign(`/edit.html#${id}`);
})

document.querySelector('#search-text').addEventListener('input', function (event) {
    filters.searchText = event.target.value;
    renderNotes(notes, filters);
});

document.querySelector('#checkbox').addEventListener('change', function (event) {
    console.log(event.target.checked);
    console.log(event);
})

document.querySelector('#filter-by').addEventListener('change', (e) => {
    console.log(e.target.value);
});

window.addEventListener('storage', (e) => {
    if (e.key === 'notes') {
        notes = JSON.parse(e.newValue);
        renderNotes(notes, filters);
    }
});