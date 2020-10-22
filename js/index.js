let obj = new Object
let currentNote = null
let saveBut = document.getElementById("save_button")
 saveBut.addEventListener("click", saveNote)
let editBut = document.getElementById("edit_button")
 editBut.addEventListener("click", editNote)
let addBut = document.getElementById("add_button")
 addBut.addEventListener("click", addNote)
let newBut = document.getElementById('new_button');
 newBut.addEventListener("click", newNote)
let nameView = document.getElementById("name_note")
let textView = document.getElementById("text_note")

function afterRedaunload(){
    saveBut.hidden = true
    editBut.hidden  = true
    nameView.disabled = false
    textView.disabled = false
    let stringResult = ""
    for(var i =0; i < localStorage.length; i++){
        let a = JSON.parse(localStorage.key(i))
        let b = JSON.parse(localStorage.getItem(a))
        if(b.name.length >= 6){
            b.name = b.name.slice(0, 6)+"..."
           
        }
        if(b.text.length >= 7){
           b.text = b.text.slice(0, 7)+"..."
        } 
        stringResult = stringResult+'<li class="list-group-item d-flex"  id="li'+i+'"><div><h1> '+b.name+'</h1>'+'<h2>'+b.text+'</h2></div>'
         +'<div id="nota"><ul class="list-group "><button class="btn btn-warning"  id="see_button'+i+'">View</button>'
         +'<button class="btn btn-warning" id="delete_button'+i+'">Delete</button></ul></div>' +'</li>'
    }
    var u = document.getElementById("notes")
    u.innerHTML = stringResult
    for(var i=0; i < localStorage.length; i++){
       var seeAny = document.getElementById('see_button'+i)
       seeAny.addEventListener('click', viewNotes(i))
       var delBut = document.getElementById('delete_button'+i) 
       delBut.addEventListener('click', delNote(i))
   }
}
afterRedaunload()

function newNote(){
    addBut.hidden = false
    editBut.hidden = true
    saveBut.hidden = true
    nameView.disabled = false
    textView.disabled = false
    nameView.value = ""
    textView.value = ""
}

function delNote(index) {
	return function() {
        let a = JSON.parse(localStorage.key(index))
        localStorage.removeItem(a)
        afterRedaunload()
        addBut.hidden = false
        nameView.value =""
        textView.value =""
    }
   
}


function viewNotes(index){
   return function(){
    let a = JSON.parse(localStorage.key(index))
    let b = JSON.parse(localStorage.getItem(a))
    saveBut.hidden = true
    addBut.hidden = true
    editBut.hidden  = false
    nameView.value = b.name
    textView.value = b.text
    nameView.disabled = true
    textView.disabled = true
    window.location.hash = "id"+a
    currentNote = index
   }
}

function addNote(){
    let n = document.getElementById("name_note")
    let t = document.getElementById("text_note")
    let idN = Math.floor(Math.random() * Math.floor(10000))
    let noteContent = {
        "name": n.value,
        "text": t.value
    }
    var serialObj = JSON.stringify(noteContent);
    localStorage.setItem(idN, serialObj)
    var stringResult = ""
    afterRedaunload()
    n.value = ""
    t.value = ""
}


function saveNote(){
        let index = currentNote
         if(index === null)
         return
        let a = JSON.parse(localStorage.key(index))
        localStorage.removeItem(a)
        afterRedaunload()
        let idN = a
        let noteContent = {
            "name": nameView.value,
            "text": textView.value
        }
        var serialObj = JSON.stringify(noteContent);
        localStorage.setItem(idN, serialObj)
        afterRedaunload()
        nameView.value = ""
        textView.value = ""
        addBut.hidden = false
}


function editNote(){
    addBut.hidden = true
    saveBut.hidden = false
    nameView.disabled = false
    textView.disabled = false
}






    



