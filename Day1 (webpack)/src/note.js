
function addNote(item){

    if(item.key == "Enter"){

        let note = document.createElement("p")

        note.textContent = document.getElementById("note").value

        document.getElementById("root").append(note)
    }
}

export {addNote}