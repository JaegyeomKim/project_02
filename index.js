const firstSpace = document.getElementById("js-first");
const arrayList = document.getElementById("js-arrayList");
const secondButtonPlace = document.getElementById("js-secondButton");
const firstArray = [];

firstPage.style.display = "block";
secondPage.style.display = "none";


function BUTTOM_1 () {
    btn = document.createElement("button");
    btn.innerHTML = "Button";
    btn.setAttribute("id", "js-firstButton");
    firstSpace.appendChild(btn);
    
}


function askWords() {
    for (i = 0; i < 3; i++){
        userInput = prompt("Please Enter a Word!");
        firstArray.push(userInput);
        }
}

function paintArray() {
    let ul = document.createElement("ul");
    arrayList.appendChild(ul);
    for (i=0; i < firstArray.length; i++) {
      let li = document.createElement("li");
      ul.appendChild(li);
      //li.setAttribute("id", "js-"+(i+1))
      li.innerHTML = firstArray[i];
        }  
    btn.remove();
}

function second_button () {
    const secondButton = document.createElement("button");
    secondButtonPlace.appendChild(secondButton);
    secondButton.innerHTML = "Change the words!";
    secondButton.setAttribute("id", "js-secondbutton")
    secondButton.addEventListener("click", swichSection);
    secondButton.addEventListener("click", secondPrint); // 스위치후 마지막 값 프린트
}


function swichSection () {
  firstPage.style.display = "none";
  secondPage.style.display = "block";
}


//second page
const finalPrint = document.getElementById("js-finalPrint");


function secondPrint(){
  const secondArray = firstArray.map(myfunction)
  let ul = document.createElement("ul");
  finalPrint.appendChild(ul);
    
  for (i=0; i < secondArray.length; i++) {
    let li = document.createElement("li");
    ul.appendChild(li);
    li.innerHTML = secondArray[i];
  }  
}


function myfunction(oneWord) {
    return oneWord.charAt(oneWord.length-1) +oneWord.substring(1,oneWord.length -1) + oneWord.charAt(0);
}


BUTTOM_1()

btn.addEventListener("click", askWords); 
btn.addEventListener("click", paintArray);
btn.addEventListener("click", second_button); 