const decreaseBtn=document.getElementById("decrease");
const increaseBtn=document.getElementById("increase");
const resetBtn=document.getElementById("reset");
const countlabel=document.getElementById("count");

let count=0;

decreaseBtn.onclick=function(){
       count--;
       countlabel.textContent=count;

}
resetBtn.onclick=function(){
       count=0;
       countlabel.textContent=count;

}
increaseBtn.onclick=function(){
       count++;
       countlabel.textContent=count;

}

