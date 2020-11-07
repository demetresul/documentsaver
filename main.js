// >>>>>>>>>axali proeqti ,kompaniis dokumentaciis asatvirti saiti
var imageBase64;
var AllInputs = document.querySelectorAll(".form-control");
var KompName = document.querySelector("#kompName");
var DocName = document.querySelector("#docName");
var NameName = document.querySelector("#Name");
var surName = document.querySelector("#SurName");
var browsFiles = document.querySelector("#inputGroupFile01");
var SaveBtn = document.querySelector("#saveBtn");
var PlaceForCards = document.querySelector(".motherofh1")

SaveBtn.addEventListener("click", function() {
    var cheskInps = checkInputNoEmpty();
    if (cheskInps) {
        var elemsSelector = GetResultFromInput(imageBase64, KompName.value, DocName.value, NameName.value, surName.value);
        PlaceForCards.innerHTML += elemsSelector;
        clearInputs()
    }
});





function GetResultFromInput(surati, kompname, docname, name, surname) {
    return `<div class="card" style="width: 18rem;">
    <img src="${imageBase64}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${kompname}</h5>
      
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">${docname}</li>
      <li class="list-group-item">${name}</li>
      <li class="list-group-item">${surname}</li>
    </ul>
  </div>`

}

browsFiles.addEventListener("change", function() {
    var file = this.files[0];
    var reader = new FileReader();
    reader.onloadend = function(event) {
        imageBase64 = event.target.result;
    }
    reader.readAsDataURL(file);
});



function checkInputNoEmpty() {
    for (var i = 0; i < AllInputs.length; i++) {
        if (AllInputs[i].value == "") {
            return false
        }
    }
    return true
}



function clearInputs() {
    for (var i = 0; i < AllInputs.length; i++) {
        AllInputs[i].value = "";
    }
}