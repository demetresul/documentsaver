// martkutxa samkutxedi hipotenuza marjvniv

// var iterationCount = 15;
// var index = 0;

// while (index < iterationCount) {
//     var star = "*"
//     var jindex = 0;
//     while (jindex < index) {
//         star += "*";
//         jindex++;
//     }
//     index++;
//     console.log(star)
// }




// amotrialebuli samkutxedi




// var index = 10;
// var iterationCount = 0;

// while (index >= 0) {
//     var star = "*";
//     var jindex = 0;
//     while (index > jindex) {
//         star += "*";
//         jindex++;
//     }
//     index--;
//     console.log(star)
// }




// martkutxa samkutxedi hipotenuza marcxniv



// var index = 12;

// while (index > 0) {
//     var space = " ";
//     var jindex = 0;
//     while (jindex < index) {
//         space += " ";
//         jindex++;
//     }
//     var zindex = 0;
//     while (zindex <= 12 - index) {
//         zindex++;
//         space += "*";
//     }
//     index--;
//     console.log(space);
// }


// var start = Number(prompt("enter start"));
// var end = Number(prompt("enter end"));
// var jeradi = Number(prompt("sheiyvane jeradi"));

// if (start <= end) {
//     while (start <= end) {

//         if (start % jeradi == 0) {
//             console.log(start);
//         }
//         start++;
//     }
// }
// else {
//     console.log("error")
// }

// momxmareblis mier sheyvanil ciframde kenti cifrebi

// var userNum = Number(prompt("enter number"));

// for(i=0 ; i<userNum;i++){
//     if(i%2 !== 0){
//         console.log(i);
//     }
// }


// momxmarelis mier shemoyvanili  ricxvebis raodenoba 5 is jeradi random 


// var userNum = Number(prompt("enter number"));

// for (var i = 0; i < userNum; i++) {
//     var rand = Math.round(Math.random() * 100)
//     if (rand % 5 == 0) {
//         console.log(rand)
//     }

// }


// var userNum = Number(prompt("enter number"));

// for (var i = 0; i < userNum; i++) {

//     if (userNum % i == 0) {
//         console.log(i)
//     }
// }



// var userNum = Number(prompt("enter number 500 -1000"));



// if (userNum > 500 && userNum < 1000) {
//     for (var i = 0; i < 100; i++) {
//         var rand = Math.round(Math.random() * 100)
//         if (userNum % rand == 0) {
//             console.log(rand)
//         }
//     }
// }
// else {
//     console.log("error");
// }



// var userNum = Number(prompt("enter number"));
// var counter = 0;
// for (var i = 1; i < userNum; i++) {
//     if (userNum % i == 0) {
//         counter++;
//     }
// }
// console.log(counter);

// function Someselector(Selector) {

//     return document.querySelectorAll(Selector)
// }

// function SomeElem(elems) {
//     for (var i = 0; i < elems.length; i++) {
//         while (true) {
//             var Random = Math.round(Math.random() * 100);
//             if (Number(Random) % 2 == 0) {
//                 elems[i].textContent = Random;
//                 elems[i].style.backgroundColor = "green"
//                 break;

//             }
//         }
//     }
// }

// var amomgebi = Someselector("button");

// SomeElem(amomgebi)




// >>>>>>>>>>luwebi mwvaned kentebi witlad sheigebos

// function Someselector(Selector) {

//     return document.querySelectorAll(Selector)
// }

// function SomeGreenSomeRed(elems) {
//     for (var i = 0; i < elems.length; i++) {
//         if (Number(elems[i].textContent) % 2 == 0) {
//             elems[i].style.color = "green"
//         }
//         else {
//             elems[i].style.color = "red"
//         }
//     }
// }

// var SSelector = Someselector("button");
// SomeGreenSomeRed(SSelector);

// >>>>>>>>>>>>>>>>>>>>>>>>>>>> candy chrush

// var allElems = document.querySelectorAll("td");
// var colorColection = new Array();
// var firstColorColection = new Array();
// var selectedElem = null;

// function colorGenerate() {
//     var red = Math.round(Math.random() * 256);
//     var green = Math.round(Math.random() * 256);
//     var blue = Math.round(Math.random() * 256);
//     return `rgb(${red},${green},${blue})`;
// }

// function AddColorToElems() {
//     var arayForColor = new Array();
//     for (var i = 0; i < 4; i++) {
//         arayForColor.push(colorGenerate())
//     }
//     firstColorColection = arayForColor.concat(arayForColor);
//     firstColorColection = firstColorColection.concat(firstColorColection);
// }
// function setRandColorsToBoxes() {
//     for (var i = 0; i < allElems.length; i++) {
//         var randIndex = Math.floor(Math.random() * firstColorColection.length);
//         allElems[i].style.background = firstColorColection[randIndex];
//         firstColorColection.splice(randIndex, 1);
//     }
// }
// AddColorToElems()
// setRandColorsToBoxes()
// var counter = 0;
// for (var i = 0; i < allElems.length; i++) {
//     counter++;

//     allElems[i].addEventListener("click", function () {
//         if (selectedElem == null) {
//             selectedElem = this;
//             this.classList.add("selectedElement");

//         }
//         else {
//             var tmp = this.style.background;
//             this.style.background = selectedElem.style.background;
//             selectedElem.style.background = tmp;

//             selectedElem.classList.remove("selectedElement");
//             selectedElem = null;
//         }

//     })

// }


//  >>>>>>>>>>>>>>>>>unda gavagrdzelo aplikacia    aplikaciaaa

// var ElemsFromHtml = document.querySelectorAll("div");
// var ArayForColors = new Array();
// var selectedElems = null;



// function colorGenerate() {
//     var red = Math.round(Math.random() * 256);
//     var green = Math.round(Math.random() * 256);
//     var blue = Math.round(Math.random() * 256);
//     return `rgb(${red},${green},${blue})`;
// }

// function AddRandColorToArray() {
//     var tmpColor = new Array()
//     for (var i = 0; i < 4; i++) {

//         tmpColor.push(colorGenerate());

//     }
//     ArayForColors = tmpColor.concat(tmpColor);
//     ArayForColors = ArayForColors.concat(ArayForColors)
// }

// function SetColorToBox() {
//     for (var i = 0; i < ElemsFromHtml.length; i++) {
//         var randIndex = Math.floor(Math.random() * ArayForColors.length);
//         ElemsFromHtml[i].style.background = ArayForColors[randIndex]
//         ArayForColors.splice(randIndex, 1)
//     }
// }
// AddRandColorToArray()
// SetColorToBox()

// for (var i = 0; i < ElemsFromHtml.length; i++) {
//     ElemsFromHtml[i].addEventListener("click", function () {
//         if (selectedElems == null) {
//             selectedElems = this;
//             this.classList.add("selectedElement");
//         } else {
//             var tmp = this.style.background;
//             this.style.background = selectedElems.style.background;
//             selectedElems.style.background = tmp;

//             selectedElems.classList.remove("selectedElement");
//             selectedElems = null;
//         }
//     });
// }


// var UserNum = document.querySelector("#userName");
// var btnSave = document.querySelector("#btn");
// var PlaceForText = document.querySelector(".placefortext")

// btnSave.addEventListener("click", function () {
//     var CheckInput = CheckInputs();

//     if (CheckInput) {
//         var InfoSaver = GiveInformationBack(UserNum.value)

//         PlaceForText.textContent = InfoSaver
//     }

// });





// function GiveInformationBack(userNum) {
//     return `my name is ${userNum}`
// }


// function CheckInputs() {
//     for (var i = 0; i < UserNum.length; i++) {
//         if (UserNum[i].value == "") {
//             return false
//         }
//     }
//     return true
// }


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

SaveBtn.addEventListener("click", function () {
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

browsFiles.addEventListener("change", function () {
    var file = this.files[0];
    var reader = new FileReader();
    reader.onloadend = function (event) {
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




