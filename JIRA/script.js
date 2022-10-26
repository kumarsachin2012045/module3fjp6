let addBtn=document.querySelector(".add-btn");
let modal=document.querySelector(".modal-cont");
let addModal=true;//ye flag h
addBtn.addEventListener("click",function(){
if(addModal)
{
    //show modal-cont ya writing box
    modal.style.display="flex";
}
else
{
    //hide modal-cont ya writing box
    modal.style.display="none";
}
addModal=!addModal;
// har bar toggle karna padega true ho to false and false ho to true


})









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