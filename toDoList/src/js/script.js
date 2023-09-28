let btn = document.getElementById("btn");
let input = document.getElementById("userInput");
let toDoList = document.getElementById("to-do-list");
let checked = document.querySelector("#checked");
let spanTags ;



let colorList = ["rgb(35, 225, 35)","rgb(222, 198, 45)","pink",]
let index = 0,listIndex = 1,spanIndex,bool = true;
function addItem(){
    
    if(input.value.length>0 && listIndex<12){
        spanIndex = "span-"+listIndex;
        listIndex++;
        let listItem = document.createElement("div");
        listItem.classList.add("list-item");
        let span = document.createElement("span");
        span.style.borderColor = colorList[index];
        index++;
        if(index>colorList.length-1){
            index=0
        }
        // let spanI = document.createElement("i");
        // span.appendChild(spanI);
        span.setAttribute("id","checked-"+listIndex);

        span.classList.add("span");
        span.addEventListener('click',function(){
            if(!this.firstElementChild){
                this.innerHTML = ' <i id="ret" class="fas fa-check"></i>';
            }else{
                this.firstElementChild.remove("i")
            }
        });
        // span.setAttribute("onclick","check()");
        listItem.appendChild(span);
        let listBorder = document.createElement("div");
        listBorder.classList.add("list-border");
        let listElement = document.createElement("li");
        listElement.innerText = input.value;
        listBorder.appendChild(listElement);
        listItem.appendChild(listBorder);
        toDoList.appendChild(listItem);
        input.value ="";
        spanTags = document.querySelectorAll(".span");
       

    }
   
};

// for(let i = 0; i < spanTags.length; i++){
//     spanTags[i].addEventListener('click',function(){
//         if(!this.firstElementChild){
//             this.innerHTML = ' <i id="ret" class="fas fa-check"></i>';
//         }else{
//             this.firstElementChild.remove("i")
//         }
//     });
// }

// checked.addEventListener('click',function(){
// console.log("check olundu")        
//     }
// );

// function check(){

//     let spanItem = this.event.srcElement;
//     let iconTag = spanItem.querySelector("i");
//     console.log(spanItem)
//     console.log(iconTag)
//     if(!iconTag){
//         spanItem.innerHTML='<i class="fas fa-check"></i>';
//     }else{
//         spanItem.remove("i");
//     }
   
// }