var num = 0;
var imgF = "";

function setImg(){
    if (num == 0){
        imgF = 'seal.jpg';
    }else if(num == 1){
        imgF = 'cheetah.jpg';
    }else if(num == 2){
        imgF = 'otter.jpg';
    }else if(num == 3){
        imgF = 'stoat.jpg';
    }else if(num == 4){
        imgF = 'fox.jpg';
    }
}

function next(){
    num = (num+1)%5;
    setImg();
    document.getElementById("image").src = imgF;
    document.getElementById("image").width = 500;
    document.getElementById("image").height = 500;
}

function previous(){
    num = (num-1)%5;
    if (num < 0){
        num = num +5;
    }
    setImg();
    document.getElementById("image").src = imgF;
    document.getElementById("image").width = 500;
    document.getElementById("image").height = 500;
}