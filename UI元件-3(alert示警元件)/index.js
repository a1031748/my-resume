const btns = document.querySelectorAll(".btn-close");
console.log(btns);

// bt.onclick = cancel;


function cancel(){
    // for(bt of btns){
        
    //     console.log(bt);
    //     let btParent = bt.closest("div");
    //     console.log(btParent);
    //     bt.closest("div").remove();
    // }

    let e = event.target;
    console.log(e);
    let div = e.closest("div");
    console.log(div);
    div.remove();

    
    
    
}