let obj = new Object
let currentNote = null
let flag = false
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

//routing
function routing(hashUrl){
    afterRedaunload()
    let idUrl = hashUrl.slice(1)
     for( let i =0; i < localStorage.length; i++){
        let a = JSON.parse(localStorage.key(i))
      if(idUrl == a){
       let b = JSON.parse(localStorage.getItem(a))
       saveBut.hidden = true
       addBut.hidden = true
       editBut.hidden  = false
       nameView.value = b.name
       textView.value = b.text
       nameView.disabled = true
       textView.disabled = true
       currentNote = i
       window.location.hash = a
       break
      }else{
       window.location.hash = 0
       addBut.hidden = false
       editBut.hidden = true
       saveBut.hidden = true
       nameView.disabled = false
       textView.disabled = false
       nameView.value = ""
       textView.value = ""
      }
     }
}
window.addEventListener('load', routing(window.location.hash));



function afterRedaunload(){
    saveBut.hidden = true
    editBut.hidden  = true
    nameView.disabled = false
    textView.disabled = false
    let stringResult = ""
    for(let i =0; i < localStorage.length; i++){
        let a = JSON.parse(localStorage.key(i))
        let b = JSON.parse(localStorage.getItem(a))
        if(b.name.length >= 6){
            b.name = b.name.slice(0, 6)+"..."
           
        }
        if(b.text.length >= 7){
           b.text = b.text.slice(0, 7)+"..."
        } 
        stringResult = stringResult+'<li  class="list-group-item d-flex"  " style="border-radius:20px;"  id="li'+i+'"><div><h1> '
        +b.name+'</h1>'+'<h2>'
        +b.text+'</h2></div>'
         +'<button class="btn btn-warning " style="border-radius:20px;" id="delete_button'+i+'">Delete</button>' +'</li>'
    }
    var u = document.getElementById("notes")
    u.innerHTML = stringResult
    for(let i=0; i < localStorage.length; i++){
       var seeAny = document.getElementById('li'+i)
       seeAny.addEventListener('click', viewNotes(i))
       var delBut = document.getElementById('delete_button'+i) 
       delBut.addEventListener('click', delNote(i))
   }
}


function newNote(){
    addBut.hidden = false
    editBut.hidden = true
    saveBut.hidden = true
    nameView.disabled = false
    textView.disabled = false
    nameView.value = ""
    textView.value = ""
    window.location.hash = 0
}

function delNote(index) {
	return function() {
        flag = true
        let a = JSON.parse(localStorage.key(index))
        localStorage.removeItem(a)
        afterRedaunload()
        addBut.hidden = false
        nameView.value =""
        textView.value =""
        window.location.hash = 0
    }
   
}


function viewNotes(index){
   return function(){
   if(flag === true){
       flag = false
       return
   }else{
    let a = JSON.parse(localStorage.key(index))
    let b = JSON.parse(localStorage.getItem(a))
    saveBut.hidden = true
    addBut.hidden = true
    editBut.hidden  = false
    nameView.value = b.name
    textView.value = b.text
    nameView.disabled = true
    textView.disabled = true
    window.location.hash = a
    currentNote = index
   }
   }
}

function addNote(){
    let n = document.getElementById("name_note")
    let t = document.getElementById("text_note")
    let idN = Math.floor(Math.random() * Math.floor(10000))
    let len = localStorage.length
    let f = true
    if(len > 0){
       while(f === true){
            idN = Math.floor(Math.random() * Math.floor(10000))
        for( let i =0; i < len; i++){
            let a = JSON.parse(localStorage.key(i))
            if(a == idN){
                f = true
                break
            }else{
                f = false
            }
        }
       }
    }
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
    window.location.hash = 0
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
