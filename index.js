const notes = [
    {
        id:1,
        title:"kus",
        tetx:"123"
    },
    {
        id:2,
        title:"kuss",
        tetx:"1234"
    }
]

function add_ul(){
    var stringResult = ""
    for(var i =0; i < notes.length; i++){
        stringResult = stringResult+'<li><h1'+notes[i].title+'</h1></li>'
    }
    var u = document.getElementById("notes")
    u.innerHTML = stringResult
}

add_ul()

function add_el(){
const add = document.getElementById("add_btn")
add_btn.onclick = function(){
   
}
}

add_el()