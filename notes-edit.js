const titleEl = document.querySelector('#note-title');
const bodyEl = document.querySelector('#note-body');
const remove = document.querySelector('#remove-note');
const noteId = location.hash.substring(1);
const notes = getSavedNotes();
const note = notes.find((note) => {
    return note.id === noteId
});

if (note === undefined) {
    location.assign('/index.html');
};

titleEl.value = note.title;
bodyEl.value = note.body;

titleEl.addEventListener('input', (e) => {
    note.title = e.target.value;
    saveNotes(notes);
});

bodyEl.addEventListener('input', (e) => {
    note.body = e.target.value;
    saveNotes(notes);
});

remove.addEventListener('click', (e) => {
    removeNote(noteId);
    saveNotes(notes)
    
    location.assign(`/index.html`);
});

