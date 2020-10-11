const notes = [
    {
        id:1,
        title:"kus",
        tetx:"123", 
        data:"12-04-2020"
    },
    {
        id:2,
        title:"kuss",
        tetx:"1234" ,
        data:"03-03-2020"
    },
    {
        id:3,
        title:"kushjs",
        tetx:"1234hj" ,
        data:"03-0-2020"
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

