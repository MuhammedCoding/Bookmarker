bookmarkArray =[];
bookmarkNameInput = document.getElementById("name");
bookmarkUrlInput = document.getElementById("url");
bookmarks = document.getElementById("bookmarks");

function createBookmark(){
    var bookmark = {
        bookmarkName: bookmarkNameInput.value,
        bookmarkUrl: bookmarkUrlInput.value,
    };
    bookmarkArray.push(bookmark);
    console.log(bookmarkArray);
    clearInput();
    display();
}

function clearInput(){
    bookmarkNameInput.value="";
    bookmarkUrlInput.value="";
}

function display(){
    var data =``;
    for (var i=0;i<bookmarkArray.length;i++){
        data+=`<div class="caption d-flex p-5">
        <h3 class="w-25">${bookmarkArray[i].bookmarkName}</h2>
        <a href="${bookmarkArray[i].bookmarkUrl}" class="btn btn-primary me-3 px-4 py-2 " target="_blank" >Visit</a>
        <button class="btn btn-danger px-4 py-2" onclick="delBookmark(${i})">Delete</button>
    </div>`
    }
    
    bookmarks.innerHTML =data;
}

function delBookmark(i){ 
    console.log(i);
    bookmarkArray.splice(i,1);
    display();
}