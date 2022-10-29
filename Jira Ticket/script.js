let addBtn=document.querySelector(".add-btn");
let modalCont=document.querySelector(".modal-cont");
let taskareaCont=document.querySelector(".textarea-cont");
let mainCont=document.querySelector(".main-cont");
let allPriorityColor=document.querySelectorAll(".priority-color");
let addModal=true;
let modalPriorityColor="black";
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
for(let i=0;i<allPriorityColor.length;i++){
    let priorityColorOneDiv=allPriorityColor[i];
    priorityColorOneDiv.addEventListener("click",function(){
        for(let j=0;j<allPriorityColor.length;j++){
            allPriorityColor[j].classList.remove("active");
        }
        priorityColorOneDiv.classList.add("active");
        modalPriorityColor=priorityColorOneDiv.classList[0];
        //blue priority-color ye class h iske 0 index par color h
        //jo color active h writing container par wo nikala 
        //ise pass karna ticket ke pass taki ticket ke top par color lga paye
    })
}
modalCont.addEventListener("keydown",function(e){
    let key=e.key;
    // console.log(key);
   if(key=="Enter")
   {
    createTicket(modalPriorityColor,taskareaCont.value);
    modalCont.style.display="none";
    taskareaCont.value="";
    addModal=!addModal;   
   }
})
function createTicket(ticketColor,task){
    // <div class="ticket-cont">
            // <div class="ticket-color green">black</div>
            // <div class="ticket-id">#423c</div>
            // <div class="task-area">some task</div>
    //         </div>
    //ye kam java script se karna hai
    //create class
    let ticketCont=document.createElement("div");
    ticketCont.setAttribute("class","ticket-cont");
    ticketCont.innerHTML=`<div class="ticket-color ${ticketColor}"></div>
                           <div class="ticket-id">#423c</div>
                            <div class="task-area">${task}</div>`
//ticket ban gya javascript se ab ise append karna hai iske parent me 
//to pahle use sellect kro sellect wala kam upar kiye hai
mainCont.appendChild(ticketCont);

}