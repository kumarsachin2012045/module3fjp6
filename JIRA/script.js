let addBtn=document.querySelector(".add-btn");
let modalCont=document.querySelector(".modal-cont");
let taskAreaCont=document.querySelector(".textarea-cont");
let mainCont=document.querySelector(".main-cont")
let addModal=true;//ye flag h
addBtn.addEventListener("click",function(){
if(addModal)
{
    //show modal-cont ya writing box
    modalCont.style.display="flex";
}
else
{
    //hide modal-cont ya writing box
    modalCont.style.display="none";
}
addModal=!addModal;
// har bar toggle karna padega true ho to false and false ho to true
})

modalCont.addEventListener("keydown",function(e){
let key=e.key;
if(key=="Enter"){
  createTicket(taskAreaCont.value)
  taskAreaCont.value="";
  modalCont.style.display="none"
  addModal=!addModal;
}
})
function createTicket(value){
//    <div class="ticket-cont">
//     <div class="ticket-color"></div>
//     <div class="ticket-id">#2z059</div>
//     <div class="task-area">Task area</div>
//     </div> 
    let ticketCont=document.createElement("div");
    ticketCont.setAttribute("class","ticket-cont");
    ticketCont.innerHTML=`<div class="ticket-color"></div>
                          <div class="ticket-id">#2z059</div>
                          <div class="task-area">${value}</div>`
    mainCont.appendChild(ticketCont);
}






// let addBtn=document.querySelector(".add-btn");
// let modal=document.querySelector(".modal-cont");
// let addModal=true;//ye flag h
// addBtn.addEventListener("click",function(){
    // console.log("btn is click");//ispar(modal-cont) styling karna hai ab
    //bahr select kar lo ya yhi kar lo hmne bahr kiya hai
    // modal.style.display="flex";//flex karte hi dikhne lagega writing box
    //ab agar dubara + par click ho to chle jana chahiye iske liye ek flag lenge
    //aur pta karna padega writing box hai ya nhi
   
//     if(addModal)
//     {
//         //show writing box
//         modal.style.display="flex";
//     }
//     else
//     {
//         //hide writing box
//         modal.style.display="none";
//     }
//     addModal=!addModal;
//     // har bar toggle karna padega true ho to false and false ho to true
// })
//jab hm likh ke enter karte h to ticket sa ban ke aa jata hai
//usme content ,color,id hai to ab ticket bnate hai
// ye ban gya 
// problem ye hai ki plus press karne par write box neeche aa rha hai 
//iska position set karna padega to position absolute se karenge mdn par jake
//demo dekh lena https://developer.mozilla.org/en-US/docs/Web/CSS/position
//baki ticket hta do bas ek rkho phir styling karna h pop up wala click krne pr
//task h--hme ticket kab chahiye jab writing box me likh ke click kre tab chahiye