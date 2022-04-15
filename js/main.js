var elUzbSom = document.querySelector("#som-input");
var elUsaDollr = document.querySelector("#dollr-input");
var elBtn = document.querySelector(".form__btn");
var elButton = document.querySelector("form-btn2");
var elList = document.querySelector(".main__list");
var elLabel1 = document.querySelector("form__lbl");
var elLabel2 = document.querySelector("form__lbl2");

var course = 11330



elBtn.addEventListener("click", function(evt){
  evt.preventDefault();

  var usaDollr = elUsaDollr.value.trim();
  var hisob = usaDollr* course ;
  elUzbSom.value = hisob ;


  
  if (usaDollr.length == "" || usaDollr.length > 20) {
    elUsaDollr.style.borderColor = "red";
    return;
  }
  
  var onlyNumber = Number(usaDollr);
  if (isNaN(onlyNumber)) {
    elUsaDollr.style.borderColor = "red";
    return
  }

  elUsaDollr.style.borderColor = "black";
  var newLi = document.createElement("li");
  var newP = document.createElement("p");
  newP.textContent =` ${usaDollr}$ - ${hisob}som`
  newLi.append(newP);
  elList.append(newLi)

})