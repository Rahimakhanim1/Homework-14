// window.addEventListener("DOMContentLoaded",function(){
//     let btn = document.getElementById("btn");
//     let input = document.getElementById("userInput");
//     console.log('hello')



//     btn.addEventListener("click",function(){
//         console.log(input.value)
//         if(input.value.length>0){
//             console.log(input.value.length)
//         }
//     }

//     );
// }
// );

let btn = document.getElementById("btn");
let input = document.getElementById("userInput");
let toDoList = document.getElementById("to-do-list");
let colorList = ["rgb(35, 225, 35)","rgb(222, 198, 45)","pink",]

btn.addEventListener("click",function(){
    let index = 0;
    console.log(input.value)
    if(input.value.length>0){
        let listItem = document.createElement("div");
        listItem.classList.add("list-item");
        let span = document.createElement("span");
        span.style.borderColor = colorList[index];
        index++;
        let spanI = document.createElement("i");
        span.appendChild(spanI);
        toDoList.appendChild(span);
        let listBorder = document.createElement("div");
        listBorder.classList.add("list-border");
        let liElement = document.createElement("li");
        li.innerText = input.value;
        listBorder.appendChild(li);
        toDoList.appendChild(listBorder);

}});