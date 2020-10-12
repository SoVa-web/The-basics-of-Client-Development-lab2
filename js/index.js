let notes = new Array



function addNote(){
    let n = document.getElementById("note-title")
    let t = document.getElementById("text_note")
    let idN = Math.floor(Math.random() * Math.floor(1000))
    let noteContent = {
        idNote: idN,
        name: n.value,
        text: t.value
    }
    console.log(noteContent.idNote)
    notes.push(noteContent)
    var stringResult = ""
    for(var i =0; i < notes.length; i++){
        stringResult = stringResult+'<li id="li'+i+'"><h1>'+notes[i].name+'</h1>'+'<h2>'+notes[i].text+'</h2>'
        +'<button class="delete-btn" id="delete_button'+i+'">Delete</button>'+'</li>'
        
    }
    var u = document.getElementById("notes")
    u.innerHTML = stringResult
}

function buttonClick  (){
    const button = document.getElementById('add_button');
    button.addEventListener("click", addNote)
    }

buttonClick()