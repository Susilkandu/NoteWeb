// to add notes in the local storage
document.getElementById('savebtn').addEventListener('click', function () {
     let notes = document.getElementById('notearea');
     let notename = prompt('enter new notes name');
     localStorage.setItem(notename, notes.value);
     // notes.value = "";
     alert('your notes has been saved');
})
// to search the notes
document.getElementById('search').addEventListener('input', function () {
     document.getElementById('shownotes').innerHTML=` `;
     let srvalue = document.getElementById('search').value;
     let notes = localStorage.getItem(srvalue);
     show(srvalue, notes);
})
// to show the notes
function show(srvalue, notes) {
     if (notes != null) {
          let htm;
          htm = document.createElement('div');
          htm.id = 'sdiv';
          htm.innerHTML+= `<centre id="srvalue">Note name:-${srvalue}</centre>
           <p id="notes">${notes}</p> 
           <button id="deletebtn" onclick="delnotes()">Delete</button>
           `;
          document.getElementById('shownotes').append(htm);
     }
     else {
     }
}
// to formate function
document.getElementById('formate').addEventListener('click', function () {
     let ichha = confirm('do you want to delete your ALL the notes');
     if (ichha == true) {
          localStorage.clear();
          if(localStorage!=null)
          {

               document.getElementById('formresp').innerText='Your all notes has been deleted';
          }
          else
          {
     document.getElementById('formresp').innerText='oops! something is problem to formate your notes';
}
     }
     else {
          alert('Ok');
     }
})
// to delete the special note
function delnotes()
{
     let noteid= document.getElementById('search').value;
localStorage.removeItem(noteid);
     location.reload();
}

