let index = 0, 
imgArr = ['src/img/barpark.jpg',
'src/img/bridge.jpg',
'src/img/coastallandscape356767_1280.jpg',
'src/img/fireworks.jpg',
'src/img/landscape615428_1280.jpg',
'src/img/shanghai.jpg'
], img = document.querySelector('.slider-images')
;

function previous(){
    index--;
    slider();

}

function next(){
    index++;
    slider();
}
function slider(){
    if(index<0){
        index = imgArr.length-1;
    }else if(index>imgArr.length-1){
        index = 0;
    }

    img.src = imgArr[index];
}


let auto = setInterval(function(){
    index++;
    slider();
},1000);

img.addEventListener("mouseover",function(){
    clearInterval(auto);
});
img.addEventListener("mouseout",function(){
     auto = setInterval(function(){
        index++;
        slider();
    },1000);
});