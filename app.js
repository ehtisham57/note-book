// var addBtn= document.getElementById("add-button");
// var notetitle =document.getElementById("note-title")
// var notetext =document.getElementById("note-text")
var notes = document.getElementById("notes")



function add(){
    /////////////////////////// title


var input = document.getElementById("note-title")
     var heading = document.createElement("h3")
     var htxt= document.createTextNode(input.value)
     heading.className="note-title"
    notes.appendChild(heading)
    heading.appendChild(htxt)
     heading.innerHTML = input.value

    
    // console.log(input)


/////////////////////////////////text
    

    var textarea =document.getElementById("note-text")
    var para = document.createElement("p")
    var ptxt=document.createTextNode(textarea.value)
    para.className="note-text"
    notes.appendChild(para)
    para.appendChild(ptxt)
    para.innerHTML = textarea.value


    ////////////////////////delete


    var deleteBtn = document.createElement("button")
    deleteBtn.className = "far fa-times-circle note-btn"
    var deletBtntxt = document.createTextNode("Delete Note")
    deleteBtn.appendChild(deletBtntxt)
    deleteBtn.innerHTML
    deleteBtn.setAttribute("onclick","delet(this)") 
    console.log(deleteBtn) 



    var editBtn = document.createElement("button")
    editBtn.className = "far fa-edit edit note-btn edit-btn"
    var editBtntxt = document.createTextNode("Edit Note")
    editBtn.appendChild(editBtntxt)
    editBtn.innerHTML
    editBtn.setAttribute("onclick","edit(this)") 
    console.log(editBtn) 

    notes.appendChild(editBtn)
    notes.appendChild(deleteBtn)
}



///////////////Function delete


function delet(e){
  e.parentNode.remove()
}


//////edit function 

function edit(e){
  var edittitle =prompt("edit title"+e.parentNode.firstChild.value ) 
  var editnote= prompt("Edit Note")
  e.parentNode.firstChild.value = edittitle
  e.parentNode=editnote
}
