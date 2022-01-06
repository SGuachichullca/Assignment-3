// 1
console.log(document.getElementById("container"));

// 2 
console.log(document.querySelector("section"));

// 3 
console.log(document.getElementsByClassName("second"));

// 4 
console.log(document.querySelector("ol li.third"));

// 5 
var pDac = document.createElement("p")
pDac.innerHTML = "Hello!"
console.log(document.getElementById("container").append(pDac));

// 6 
console.log(document.getElementsByClassName("footer").classname = "main");

// 7 
console.log(document.querySelector(".footer").classList.remove("main"));

// 8 
var li = document.createElement("li");
console.log(li);

// 9 
console.log(li.innerText = "four");


// 10 
console.log(document.getElementsByTagName("ul")[0].appendChild(li));

// 12 

let x=document.getElementById("container"); 
let nodelist = x.getElementsByTagName("ul");
for(let i=0; i < nodelist.length; i++){
    nodelist[i].style.backgroundColor = "green";
}

// 13 
console.log(document.getElementsByClassName("footer").remove);




