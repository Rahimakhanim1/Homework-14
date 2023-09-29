let btn = document.getElementById("btn");
let input = document.getElementById("userInput");
let toDoList = document.getElementById("to-do-list");
let checked = document.querySelector("#checked");
let colorList = ["rgb(35, 225, 35)","rgb(222, 198, 45)","pink",];
let icon = ' <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>';
let index = 0, listIndex = 1, spanIndex, spanTags ;
function addItem(){  
    if(input.value.length>0 && listIndex<12){
        listIndex++;
        let listItem = document.createElement("div");
        listItem.classList.add("list-item");
        let span = document.createElement("span");
        span.style.borderColor = colorList[index];
        index++;
        if(index>colorList.length-1){
            index=0
        }
        span.addEventListener('click',function(){
            if(!this.firstElementChild){
                this.innerHTML = ' <i id="ret" class="fas fa-check"></i>';
            }else{
                this.firstElementChild.remove("i")
            }
        });
        listItem.appendChild(span);
        let listBorder = document.createElement("div");
        listBorder.classList.add("list-border");
        let listElement = document.createElement("li");
        listElement.innerText = input.value;
        listBorder.innerHTML =icon;
       
        let iconn = listBorder.querySelector('svg');
        iconn.addEventListener('click',function(){
           parentElement = this.parentElement.parentElement.style.display = 'none';        
        });
        listBorder.appendChild(listElement);
        listItem.appendChild(listBorder);
        toDoList.appendChild(listItem);
        input.value ="";
        spanTags = document.querySelectorAll(".span");
       

    }
   
};
