note = document.getElementById('unote');
showNote();
setInterval(showMessage, 1000);

// Will add note to local storage
function addNote() {
    noteVal = unote.value;
    noteVeri = localStorage.getItem('notes');
    if (noteVeri == null) {
        noteObj = [];
    }
    else {
        noteObj = JSON.parse(noteVeri);
    }
    noteObj.push(noteVal);

    localStorage.setItem('notes', JSON.stringify(noteObj));
    unote.value = '';
    showNote();
}

function showNote() {
    let noteStr = localStorage.getItem("notes");
    let noRecent = document.getElementById('noRecent');
    // nothing = document.getElementById('notes_sec');
    if (noteStr == null) {
        noteObj = [];
    } else {
        noteObj = JSON.parse(noteStr);
    }
    let html = "";
    noteObj.forEach(function (element, index) {
        html += `
        <div class="noteCard">
        <h3>Note ${index + 1}</h3>
        <hr>
        <p>${element}</p>
        <button id="${index}" class="btn" onclick="delItem(this.id)" >Delete Note</button>
        </div> `;
    });
    if (noteStr != null) {
        noRecent.innerText = ``;
    }
    noteSec = document.getElementById("notes_sec").innerHTML = html;
}

function clrNote(){
    confirm = confirm("All recent notes will be deleted..")
    if (confirm) {
        localStorage.clear();
        showNote(); 
    }
}

function showMessage(){
    let noteStr = localStorage.getItem("notes");
    let noRecent = document.getElementById('noRecent');
    if (noteStr == null) {
        noRecent.innerText = `Looks like there is no recent notes to show, Click "Add Note" to add one.`;
    }
}
function delItem(i){
    let noteStr = localStorage.getItem("notes");
    if (noteStr == null) {
        noteObj = [];
    } else {
        noteObj = JSON.parse(noteStr);
    }
    noteObj.splice(i,1);
    localStorage.setItem('notes', JSON.stringify(noteObj));
    showNote();

}