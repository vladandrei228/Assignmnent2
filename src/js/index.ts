function ManipulateString() {
   
    let input : HTMLDivElement = <HTMLDivElement> document.getElementsByClassName("Input")[0];
    let result : HTMLUListElement = <HTMLUListElement> document.getElementsByClassName("Results")[0].getElementsByTagName("ul")[0];
    let string : string = input.getElementsByTagName("input")[0].value;
    let option : string = input.getElementsByTagName("select")[0].value;
  
    if(option == "Uppercase"){string = string.toUpperCase(); }
    else if (option == "Lowercase") {string = string.toLowerCase(); }

   
   
    result.appendChild(CreateNode(string));
}

let nextResultId : number = 1;

function CreateNode(result : string) {
    let newLi = document.createElement("li");
    let divId = document.createElement("div");
    divId.innerText = nextResultId.toString();
    newLi.appendChild(divId);
    let resultDiv = document.createElement("div");
    resultDiv.innerText = result;
    newLi.appendChild(resultDiv);
    newLi.id = nextResultId.toString();
    if (nextResultId % 2 == 0) {newLi.setAttribute("style", "background: black; color: lime;");}
    else {newLi.setAttribute("style", "background: yellow; color: purple;");}
    
    nextResultId++;
    return newLi;
}

document.getElementsByClassName("Input")[0].getElementsByTagName("input")[1].addEventListener("click", ManipulateString);