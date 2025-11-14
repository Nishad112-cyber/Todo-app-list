let btn= document.querySelector("button");
let ul=document.querySelector("ul");
let inp= document.querySelector("input");
btn.addEventListener("click" ,function () {
    let item= document.createElement("li");
    item.innerText=inp.value;
    
    let btnd= document.createElement("button");

    btnd.innerText= "delete";
    btnd.classList.add("delete");
    item.appendChild(btnd);

    ul.appendChild(item);
    inp.value="";
});

ul.addEventListener("click", function(event) {
    if(event.target.nodeName== "BUTTON"){
        let listItem= event.target.parentElement;
        listItem.remove();
        console.log("deleted");
    }
})


// let btnds= document.querySelectorAll(".delete");
// for(btnd of btnds){
//     btnd.addEventListener("click", function (){
//         let prt = this.parentElement;
//         console.log(prt);
//         prt.remove();
//     });
// }