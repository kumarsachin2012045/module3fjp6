let addBtn=document.querySelector(".add-btn");
let modalCont=document.querySelector(".modal-cont");
let taskareaCont=document.querySelector(".textarea-cont");
let mainCont=document.querySelector(".main-cont")
let addModal=true;
addBtn.addEventListener("click",function(){
if(addModal){
   //show agr true h
   modalCont.style.display="flex";
}
else{
    //hide
    modalCont.style.display="none";
}
addModal=!addModal;
//above code se seekha toggale kaise karna hai
})
modalCont.addEventListener("keydown",function(e){
    let key=e.key;
    // console.log(key);
   if(key=="Enter")
   {
    createTicket(taskareaCont.value);
    modalCont.style.display="none";
    taskareaCont.value="";
    addModal=!addModal;   
   }
})
function createTicket(task){
    // <div class="ticket-cont">
            // <div class="ticket-color green">black</div>
            // <div class="ticket-id">#423c</div>
            // <div class="task-area">some task</div>
    //         </div>
    //ye kam java script se karna hai
    //create class
    let ticketCont=document.createElement("div");
    ticketCont.setAttribute("class","ticket-cont");
    ticketCont.innerHTML=`<div class="ticket-color green">black</div>
                           <div class="ticket-id">#423c</div>
                            <div class="task-area">${task}</div>`
//ticket ban gya javascript se ab ise append karna hai iske parent me 
//to pahle use sellect kro sellect wala kam upar kiye hai
mainCont.appendChild(ticketCont);

}