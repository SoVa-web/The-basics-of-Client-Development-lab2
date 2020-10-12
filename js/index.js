

function afterRedaunload(){
    let stringResult = ""
    for(var i =0; i < localStorage.length; i++){
        let a = JSON.parse(localStorage.key(i))
        let b = JSON.parse(localStorage.getItem(a))
        stringResult = stringResult+'<li id="li'+i+'"><h1>'+b.name+'</h1>'+'<h2>'+b.text+'</h2>'
        +'<button class="delete-btn" id="delete_button'+i+'">Delete</button>'+'</li>'
        
    }
    var u = document.getElementById("notes")
    u.innerHTML = stringResult
}

afterRedaunload()

function addNote(){
    let n = document.getElementById("note-title")
    let t = document.getElementById("text_note")
    let idN = Math.floor(Math.random() * Math.floor(10000))
    //проверка
    let noteContent = {
        "name": n.value,
        "text": t.value
    }
    var serialObj = JSON.stringify(noteContent);
    localStorage.setItem(idN, serialObj)
    var stringResult = ""
    for(var i =0; i < localStorage.length; i++){
        let a = JSON.parse(localStorage.key(i))
        let b = JSON.parse(localStorage.getItem(a))
        stringResult = stringResult+'<li id="li'+i+'"><h1>'+b.name+'</h1>'+'<h2>'+b.text+'</h2>'
        +'<button class="delete-btn" id="delete_button'+i+'">Delete</button>'+'</li>'
        
    }
    console.log(localStorage.length)
    var u = document.getElementById("notes")
    u.innerHTML = stringResult
}

function buttonClick  (){
    const button = document.getElementById('add_button');
    button.addEventListener("click", addNote)
    }

buttonClick()