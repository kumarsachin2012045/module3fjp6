let addBtn=document.querySelector(".add-btn");
let modal=document.querySelector(".modal-cont");
let addModal=true;//ye flag h
addBtn.addEventListener("click",function(){
    // console.log("btn is click");//ispar(modal-cont) styling karna hai ab
    //bahr select kar lo ya yhi kar lo hmne bahr kiya hai
    // modal.style.display="flex";//flex karte hi dikhne lagega writing box
    //ab agar dubara + par click ho to chle jana chahiye iske liye ek flag lenge
    //aur pta karna padega writing box hai ya nhi
   
    if(addModal)
    {
        //show writing box
        modal.style.display="flex";
    }
    else
    {
        //hide writing box
        modal.style.display="none";
    }
    addModal=!addModal;
    // har bar toggle karna padega true ho to false and false ho to true
    

})