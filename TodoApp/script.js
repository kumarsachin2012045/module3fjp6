
let inputTag=document.querySelector("input");
let ulTag=document.querySelector("ul");

inputTag.addEventListener("keydown",function(e){
let key=e.key;//jo key press kroge wo store kiya
if(key=="Enter"){//jab key press ho tab ye kam ho
let value=inputTag.value;//isse jo input kiye inputbox me uski value value me store kar li
inputTag.value="";//store karne ke bad use empty kar diya
//ab hmne jo value store kiya tha use page par(ul me) add karna hai

let liTag=document.createElement("li");
liTag.innerHTML=value;
ulTag.appendChild(liTag);
}
})
















// let inputTag=document.querySelector("input");
// let ulTag=document.querySelector("ul");

// inputTag.addEventListener("keydown",function(e){
    //function me jo bhi event hota h wo milta hai jo event h wo ek  object hai
// let key=e.key;//jo press kroge wo key me jata hai to
// e.key se nikal liya aur key varible me store kar liya
// if(key=="Enter"){//jab key press ho tab ye kam ho
// let value=inputTag.value;//isse jo input kiye inputbox me uski value value me store ki
// inputTag.value="";//store karne ke bad use empty kar diya
// //ab hmne jo value store kiya tha use page par(ul me) add karna hai

// let liTag=document.createElement("li");
// liTag.innerHTML=value;
// ulTag.appendChild(liTag);
// }
// })
//itne se add hua jo enter kiye