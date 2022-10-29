let addBtn=document.querySelector(".add-btn");
let modal=document.querySelector(".modal-cont");
let addModal=true;
addBtn.addEventListener("click",function(){
// console.log("button is clicked");
//jaise hi click ho modal ki styling chasnge karna h 
//to phle modal ko select karna padega andar bahr khi bhi kr lo
//modal.style.display="flex";//agya ab dubara click pr jana chahiye
//ab hme toggle krna h to iske liye flag(addModal) lete h 
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