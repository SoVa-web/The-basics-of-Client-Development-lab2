let obj = new Object

function afterRedaunload(){
    let nameView = document.getElementById("name_note")
    let textView = document.getElementById("text_note")
    let editBut = document.getElementById("edit_button")
    let saveBut = document.getElementById("save_button")
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
        if(b.text.length >= 6){
            b.text = b.text.slice(0, 6)+"..."
        }
        stringResult = stringResult+'<li class="list-group-item d-flex"  id="li'+i+'"><div><h1> '+b.name+'</h1>'+'<h2>'+b.text+'</h2></div>'
         +'<button class="see-btn btn btn-success"  id="see_button'+i+'">View</button>'
         +'<button class="delete-btn btn btn-success" id="delete_button'+i+'">Delete</button>'
        +'</li>'
        window.location.hash = "id"+a
    }
    var u = document.getElementById("notes")
    u.innerHTML = stringResult
    for(var i=0; i < localStorage.length; i++){
        var liAny = document.getElementById('see_button'+i)
       liAny.addEventListener('click', viewNotes(i))
       var btn = document.getElementById('delete_button'+i) 
       btn.addEventListener('click', clearing(i))
       btn.addEventListener('click', listener(i))
   }
    
}
afterRedaunload()

function newNote(){
    let addBut = document.getElementById("add_button")
    addBut.hidden = false
    let editBut = document.getElementById("edit_button")
    editBut.hidden = true
    let saveBut = document.getElementById("save_button")
    saveBut.hidden = true
    let nameView = document.getElementById("name_note")
    let textView = document.getElementById("text_note")
    nameView.disabled = false
    textView.disabled = false
    nameView.value = ""
    textView.value = ""
}

function listener(index) {
	return function() {
        let a = JSON.parse(localStorage.key(index))
        localStorage.removeItem(a)
        afterRedaunload()
    }
   
}

function clearing(index) {
	return function() {
        console.log(777)
         let nameView = document.getElementById("name_note")
        let textView = document.getElementById("text_note")
        nameView.disabled = false
        textView.disabled = false
        nameView.value = ""
        textView.value = ""
    }
   
}

function viewNotes(index){
    
   return function(){
    let a = JSON.parse(localStorage.key(index))
    let b = JSON.parse(localStorage.getItem(a))
    let nameView = document.getElementById("name_note")
    let textView = document.getElementById("text_note")
    let editBut = document.getElementById("edit_button")
    let addBut = document.getElementById("add_button")
    let saveBut = document.getElementById("save_button")
    saveBut.hidden = true
    addBut.hidden = true
    editBut.hidden  = false
    nameView.value = b.name
    textView.value = b.text
    nameView.disabled = true
    textView.disabled = true
    window.location.hash = "id"+a
    //saveBut.addEventListener("click", saveNote(index))
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


/*function saveNote(index){
    return function(){
        let a = JSON.parse(localStorage.key(index))
        localStorage.removeItem(a)
        afterRedaunload()
        let n = document.getElementById("name_note")
        let t = document.getElementById("text_note")
        let idN = index
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
   
}*/


function editNote(){
    let button = document.getElementById("add_button")
    button.hidden = true
    let saveBut = document.getElementById("save_button")
    saveBut.hidden = false
    let nameView = document.getElementById("name_note")
    let textView = document.getElementById("text_note")
    nameView.disabled = false
    textView.disabled = false
}

function newClick  (){
    const button = document.getElementById('new_button');
    button.addEventListener("click", newNote)
    }
newClick()

function buttonClick  (){
    const button = document.getElementById('add_button');
    button.addEventListener("click", addNote)
    }
buttonClick()

function editClick  (){
    const button = document.getElementById('edit_button');
    button.addEventListener("click", editNote)
    }
editClick()


