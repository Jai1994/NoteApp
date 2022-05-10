console.log('this is notes  notes based on Js ...');
console.log('This is real pure java script project...');

  showNotes();

// if user add note, add to the local storage.
 let addBtn = document.getElementById("addBtn");
 addBtn.addEventListener("click", function(e)
 {
     let addTxt = document.getElementById("addTxt");
     let addTitle = document.getElementById("addTitle");
     if(!addTxt.value  || !addTitle.value){
         alert("please fill the required field...");
         return;
     }
     let notes = localStorage.getItem("notes");

     if(notes==null){
         notesObj =[];
     }
     else{
         notesObj = JSON.parse(notes);
     }
     let myObj = {
         titel: addTitle.value,
         text: addTxt.value
     }
     notesObj.push(myObj);
     localStorage.setItem("notes", JSON.stringify(notesObj));
     addTxt.value="";
     addTitle.value="";
     console.log(notesObj);
     showNotes();
 });
  function showNotes(){
    let notes = localStorage.getItem("notes");
    if(notes==null){
        notesObj =[];
    }
    else{
        notesObj = JSON.parse(notes);
    }

    let html ="";

    notesObj.forEach(function(element, index){
        html +=`
        <div class="noteCard my-2 mx-2" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">Note ${element.titel}</h5>
          <p class="card-text">${element.text}</p>
          <button id="${index}" onClick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
        </div>
      </div>`;
    }); 

     let notesEl = document.getElementById("notes");
          if(notesEl.length!=0){
         notesEl.innerHTML= html;
     }
     else{
         notesEl.innerHTML='nothing to show "Add a note" Section above to add notes. ';
     }
  }

  // fuctin to delete note.
  function deleteNote(index){
     // console.log('i am deleting', index);
      let notes = localStorage.getItem('notes');
      if(notes==null){
          notesObj =[];
      }
      else{
          notesObj = JSON.parse(notes);
      }
      notesObj.splice(index,1);
      localStorage.setItem("notes", JSON.stringify(notesObj));
      showNotes();
  }
  let searchTxt = document.getElementById('searchTxt');
  searchTxt.addEventListener('input', function(){
      let inputval=search.value.toLowaeCase();
      console.log('Input event Fired!..', inputval);
      let noteCards = document.getElementsByClassName('noteCard');
      Array.from(noteCards).forEach(function(element)
         {
           let cardTxt = element.getElementsByTagName("p")[0].innerText;
           if(cardTxtincludes(inputval)){
           element.style.display="block";
           }
           else{
            element.style.display="none";
           }
           //console.log(cardTxt);
      });

  });

  // Feature to add in this app.
  // 1- Add title.
  // 2- mark a note for importent.