var siteName = document.getElementById("Name");
var siteURL = document.getElementById("url");

if (localStorage.getItem("data") == null) {
  var bookmark = [];
} else {
  var bookmark = JSON.parse(localStorage.getItem("data"));

}

data();







///////////////////////////////////Add


function Submit() {

  var bookmarkI = {
    siteName_Input: siteName.value,
    siteURL_Input: siteURL.value

  }


  bookmark.push(bookmarkI);
  var stBookmark = JSON.stringify(bookmark);
  localStorage.setItem('data', stBookmark);
  console.log(bookmarkI);
  console.log(bookmark);



  siteName.value = "";
  siteURL.value = "";

  data();
}

///////////////////////////////////////////// Table

function data() {

  var trs = '';


  for (var i = 0; i < bookmark.length; i++) {

    trs += '<tr><td class="fw-semibold text-center px-4">' + bookmark[i].siteName_Input + '</td><td class=" fw-semibold text-center px-4"><button class=" py-1 px-2 btn btn-primary rounded-3 mx-1 "><a class=" text-light text-decoration-none" href="' + bookmark[i].siteURL_Input + '" target="_blank">Visit</a></button><button class=" p-1 mx-1 btn btn-danger rounded-3 " onclick="remove(' + i + ');">Delete</button></td></tr>';

  }
    document.getElementById("showData").innerHTML = trs;

}








///////////////////////////////////////////Delete

function remove(DeleteI) {

    bookmark.splice(DeleteI, 1);
    localStorage.setItem("data", JSON.stringify(bookmark));
    data();
    console.log(bookmark);
  }





// function remove(DeleteI) {
//   if (bookmark.length == 1) {
//     var trs = '';
//     bookmark = [];
//     document.getElementById("showData").innerHTML = trs;
//     localStorage.setItem("data", JSON.stringify(bookmark));
//     console.log(bookmark);


//   } else {
//     bookmark.splice(DeleteI, 1);
//     localStorage.setItem("data", JSON.stringify(bookmark));
//     data();
//     console.log(bookmark);
//   }



// }




////////////////////////////////////////////////////////Search

function search() {

  var searchInput = document.getElementById("searchInput").value;

  var trs = '';


  for (var i = 0; i < bookmark.length; i++) {

    if (bookmark[i].siteName_Input.toLowerCase().includes(searchInput.toLowerCase())==true ) {
        trs += '<tr><td class="fw-semibold text-center px-4">' + bookmark[i].siteName_Input + '</td><td class=" fw-semibold text-center px-4"><button class=" py-1 px-2 btn btn-primary rounded-3 mx-1 "><a class=" text-light text-decoration-none" href="' + bookmark[i].siteURL_Input + '" target="_blank">Visit</a></button><button class=" p-1 mx-1 btn btn-danger rounded-3 " onclick="remove(' + i + ');">Delete</button></td></tr>';

  }
    document.getElementById("showData").innerHTML = trs;
    }
 
  console.log(searchInput);
}











