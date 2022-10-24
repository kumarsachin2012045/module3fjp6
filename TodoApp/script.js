
let inputTag=document.querySelector("input");
let ulTag=document.querySelector("ul");

inputTag.addEventListener("keydown",function(e){
    //console.log
let key=e.key;//jo key press kroge wo store kiya
if(key=="Enter"){//jab key press ho tab ye kam ho
let value=inputTag.value;//isse jo input kiye inputbox me uski value value me store kar li
if(value.length==0)
  return;
inputTag.value="";//store karne ke bad use empty kar diya
//ab hmne jo value store kiya tha use page par(ul me) add karna hai

let liTag=document.createElement("li");
liTag.innerHTML=`<div>${value}</div>
                  <div class="delete"><i class="fa-regular fa-trash-can"></i></div>`;

handleRemoval(liTag);
ulTag.appendChild(liTag);
}
})
function handleRemoval(liTag){
    let deleteDiv=liTag.querySelector(".delete");
    deleteDiv.addEventListener("click",function(){
        liTag.remove();
    })
}
















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
// handleRemoval(liTag);
// function bna liya delete karne ke liye taki code shi dikhe aur isse bas
//attach kr rhe h