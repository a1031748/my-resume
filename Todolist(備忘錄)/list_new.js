const ul = document.querySelector("#ul");
const input = document.querySelector("#input");
const addBtn = document.createElement("button");
const outPut = document.getElementById("output");
const choice = document.getElementById("choice");

const inputValue = input.value;
// console.log(choiceValue);
addBtn.onclick = send;
outPut.onclick = toString;
choice.onchange = changeColor;

function changeColor(){
    let y = event.target.value;
    input.className = y;

}


function send() {
    let li = document.createElement("li");
    let span = document.createElement("span");
    let div = document.createElement("div")
    let deleBtn = document.createElement("button");
    let inputValue = input.value;
    let choice = document.getElementById("choice");
    let choiceIndex = choice.selectedIndex;
    let choiceValue = choice.options[choiceIndex].value;
    let doneBtn = document.createElement("button");

    if (inputValue !== "" && choiceValue !== "none") {
        ul.append(li);
        li.append(span);
        li.append(div);
        div.textContent = "-已完成-";
        div.style.display = "none";
        div.style.color = "black";
        li.append(deleBtn);
        li.append(doneBtn);
        deleBtn.textContent = "刪除";
        span.className = choiceValue;
        span.textContent = input.value;
        doneBtn.textContent = "[標示為已完成]";
        doneBtn.onclick = doneFunction;
        function doneFunction(){
            if(doneBtn.textContent === "[標示為已完成]"){
                div.style.display = "inline-block";
                doneBtn.textContent = "[標示為未完成]";
            }else{
                div.style.display = "none";
            }
        }
        deleBtn.onclick = cancel;
        input.value = "";
        choice.value = "none";
        input.className = "";
    } else {
        alert("請填入代辦事項和分等級");
    }



}

function cancel() {
    let listItem = ul.children[0];
    // console.log(listItem);
    listItem.remove();
}


function toString() {
    let lists = ul.children;
    let listsLength = lists.length;
    let text = "";
    let num = 1;
    console.log(listsLength);

    if(listsLength == 0){
        alert("無待辦事項");
    }else{

        for (var x of lists) {

            let getClassName = x.children[0].className;
            console.log(getClassName);
            if(getClassName === "important"){
                text =  text + num.toString() + " ) " + "*" + x.children[0].textContent + "*";
            }else if(getClassName === "urgent"){
                text =  text + num.toString() + " ) " + "**" + x.children[0].textContent + "**";
            }else{
                text =  text + num.toString() + "*" + x.children[0].textContent;
            }
            
            
            num = num + 1;
    
        }
        alert("本日待辦 :" + text);

    }


    
}