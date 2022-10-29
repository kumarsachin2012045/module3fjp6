let addBtn=document.querySelector(".add-btn");
let modal=document.querySelector(".modal-cont");
let addModal=true;
addBtn.addEventListener("click",function(){
if(addModal){
   //show agr true h
   modal.style.display="flex";
}
else{
    //hide
    modal.style.display="none";
}
addModal=!addModal;
//above code se seekha toggale kaise karna hai
})