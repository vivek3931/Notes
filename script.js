let createNotesbtn = document.querySelector(".create-note-btn");
let createdNotescontainer = document.querySelector(".create-notes-container");
let notePages = document.querySelectorAll(".created-notes");
let notesContainer = document.querySelector(".notes-container")
let toggleBtn = document.querySelector(".toggle-btn");


function getStorageitem() {
    createdNotescontainer.innerHTML = localStorage.getItem('notes')
}
getStorageitem();
function updateStorage() {
    localStorage.setItem('notes', createdNotescontainer.innerHTML)
}

createNotesbtn.addEventListener('click', () => {
    let createdNotes = document.createElement("p");
    let trash = document.createElement("i");
    createdNotes.className = "created-notes";
    createdNotes.setAttribute("contenteditable", "true");
    trash.setAttribute("contenteditable", "false");
    trash.className = "fa-solid fa-trash"
    createdNotescontainer.appendChild(createdNotes).appendChild(trash);

    updateStorage()


});


createdNotescontainer.addEventListener('click', function (e) {
    if (e.target.tagName === "I") {
        e.target.parentElement.remove();
        updateStorage()

    }
    else {
        if (e.target.tagName === "P") {
            notes = document.querySelectorAll('.created-notes');
            notes.forEach(element => {
                element.onkeyup = function () {
                    updateStorage();
                }
            });
        }
    }

})