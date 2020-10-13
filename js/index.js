let obj = new Object

function afterRedaunload(){
    let stringResult = ""
    for(var i =0; i < localStorage.length; i++){
        let a = JSON.parse(localStorage.key(i))
        let b = JSON.parse(localStorage.getItem(a))
        stringResult = stringResult+'<li class="list-group-item d-flex"  id="li'+i+'"><div><h1>'+b.name+'</h1>'+'<h2>'+b.text+'</h2></div>'
        +'<button class="delete-btn btn btn-success" id="delete_button'+i+'">Delete</button>'+'</li>'
        window.location.hash = "id"+a
    }
    var u = document.getElementById("notes")
    u.innerHTML = stringResult
    for(var i=0; i < localStorage.length; i++){
        var btn = document.getElementById('delete_button'+i)
        btn.addEventListener('click', listener(i))
        var liAny = document.getElementById('li'+i)
        liAny.addEventListener('click', viewNotes(i))
    }
}

afterRedaunload()

function listener(index) {
	return function() {
        let a = JSON.parse(localStorage.key(index))
        localStorage.removeItem(a)
        afterRedaunload()
	}
}

function viewNotes(index){
   return function(){
    let a = JSON.parse(localStorage.key(index))
    let b = JSON.parse(localStorage.getItem(a))
    const nameView = document.getElementById("name_note")
    const textView = document.getElementById("text_note")
    nameView.value = b.name
    textView.value = b.text
    window.location.hash = "id"+a
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
}

function buttonClick  (){
    const button = document.getElementById('add_button');
    button.addEventListener("click", addNote)
    }
buttonClick()

function editNote(){
    const button = document.getElementById("add_button")
    button.hidden = true

}

function editClick  (){
    const button = document.getElementById('edit_button');
    button.addEventListener("click", editNote)
    }
editClick()


