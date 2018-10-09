// Read existing notes from localStorage
const getSavedNotes = () => {
  const notesJSON = localStorage.getItem("notes"); // Check for existing saved data

  if (notesJSON !== null) {
    return JSON.parse(notesJSON);
  } else {
    return [];
  }
};

// Save the notes to localStorage
const saveNotes = (notes) => {
    localStorage.setItem('notes', JSON.stringify(notes));
};

// Remove a note
const removeNote = function (id) {
  const noteIndex = notes.findIndex((note) => {
    return note.id === id
  });

  if (noteIndex > -1) {
    notes.splice(noteIndex, 1);
  }
};

// Generate the DOM structure for a note
const generateNoteDOM = note => {
  const noteElement = document.createElement("div");
  const textEl = document.createElement('a');
  const button = document.createElement("button");

  // Set up the remove note button
  button.textContent = 'X';
  noteElement.appendChild(button);
  button.addEventListener('click', (e) => {
    removeNote(note.id);
    saveNotes(notes);
    renderNotes(notes, filters);
  })

  // Set up the note title text
  if (note.title.length > 0) {
    textEl.textContent = note.title;
  } else {
    textEl.textContent = "No notes have been created";
  }

  textEl.setAttribute('href', `/edit.html#${note.id}`);
  noteElement.appendChild(textEl);

  return noteElement;
};

// Render application notes
const renderNotes = function (notes, filters) {
    const filteredNotes = notes.filter((note) => {
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase());
    })

    document.querySelector('#notes').innerHTML = '';

    filteredNotes.forEach((note) => {
        const noteElement = generateNoteDOM(note);        
        document.querySelector('#notes').appendChild(noteElement);
    })
}
