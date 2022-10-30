let addBtn=document.querySelector(".add-btn");
let modalCont=document.querySelector(".modal-cont");
let taskareaCont=document.querySelector(".textarea-cont");
let mainCont=document.querySelector(".main-cont");
let allPriorityColor=document.querySelectorAll(".priority-color");
let addModal=true;
// let modalPriorityColor="black";
let removeBtn=document.querySelector(".remove-btn");
let removeFlag=false;
let colors=["lightpink","blue","green","black"];
let modalPriorityColor=colors[colors.length-1];
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
                            <div class="task-area">${task}</div>
                            <div class="lock-unlock"><i class="fa-solid fa-lock"></i></div>`


//ticket ban gya javascript se ab ise append karna hai iske parent me 
//to pahle use sellect kro sellect wala kam upar kiye hai
mainCont.appendChild(ticketCont);
//lock-unlock handle
let lockUnlockBtn=ticketCont.querySelector(".lock-unlock i");//icon select kiya
let ticketTaskarea=ticketCont.querySelector(".task-area");
lockUnlockBtn.addEventListener("click",function(){
   if(lockUnlockBtn.classList.contains("fa-lock")){
    lockUnlockBtn.classList.remove("fa-lock");
    lockUnlockBtn.classList.add("fa-unlock");
    ticketTaskarea.setAttribute("contenteditable","true");
   }else{
    lockUnlockBtn.classList.remove("fa-unlock");
    lockUnlockBtn.classList.add("fa-lock");
    ticketTaskarea.setAttribute("contenteditable","false");
   }
})
//handling delete
ticketCont.addEventListener("click",function(){
    if(removeFlag)
        ticketCont.remove();
})
//handle ticket ke top border ka color dsa par based ye code 
let ticketColorBnand=ticketCont.querySelector(".ticket-color");
ticketColorBnand.addEventListener("click",function(){
    let currentTicketColor=ticketColorBnand.classList[1];
    let currentTicketColorIndx=-1;
    for(let i=0;i<colors.length;i++){
        if(currentTicketColor==colors[i]){
            currentTicketColorIndx=i;
            break;
        }
    }
    let nextColorIdx=(currentTicketColorIndx+1)%colors.length;
    //lecture 12 may
    //isliye kiya taki color loop(cyclic form me ho 0,1,2,3,0,1,2,3,0,...) me mile
    let nextColor=colors[nextColorIdx];
    ticketColorBnand.classList.remove(currentTicketColor);
    ticketColorBnand.classList.add(nextColor);
})
}
removeBtn.addEventListener("click",function(){
    if(removeFlag){
        removeBtn.style.color="black";
    }
    else{
        removeBtn.style.color="red";
    }
    removeFlag=!removeFlag;//ise hta ke dekh lena kaisa hota h
    //jab delete icon red ho to jis ticket par click kre wo delete hona chahiye
    //iske liye ticket container me event listner lgna padega 
    //red hone par delete karna hai ye remove flag btayega kab red hai
})