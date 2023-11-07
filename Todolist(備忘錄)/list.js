const ul = document.getElementById("ul");
const input = document.getElementById("input");
const output = document.getElementById("output");
const choice = document.getElementById("choice");







function send() {
    let list = document.createElement("li");
    let span = document.createElement("span");
    let text = input.value;
    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    let choice = document.getElementById("choice");
    let choiceIndex = choice.selectedIndex;
    let choiceValue = choice.options[choiceIndex].value;
    let div = document.createElement("div");
    let finishBtn = document.createElement("button");

    if (choiceValue !== "none" && text !== "") {
        ul.append(list);
        list.append(span);
        list.append(div);
        list.append(deleteBtn);
        list.append(finishBtn);
        div.textContent = "[已完成]"; 
        finishBtn.textContent = "標示為已完成";
        div.style.display = "none";
        span.textContent = text;
        span.className = choiceValue;
        input.value = "";
        choice.value = "none";
        deleteBtn.onclick = cancel;
        finishBtn.onclick = finishState;
    } else {
        alert("請輸入待辦事項並分等級");
    }
}

function finishState(){
    
    let e = event.target;
    let showFinish = e.parentElement.children[1];
    console.log(e);
    console.log(showFinish);
    console.log(showFinish.textContent);
    console.log(e.textContent);
    // let showFinishDisplay =  showFinish.style.display;
    // console.log(showFinishDisplay);
    if(e.textContent === "標示為已完成"){
        e.textContent = "標示為未完成";
        showFinish.style.display = "block";

    }else{
        e.textContent = "標示為已完成";
        showFinish.style.display = "none";
    }
    // console.log(showFinish.style.display);
    
}

choice.onchange = showColor;

function showColor(){
    let choiceIndex = choice.selectedIndex;
    let choiceValue = choice.options[choiceIndex].value;
    input.className = choiceValue;
}

function cancel() {
    event.target.parentElement.remove();
}

output.onclick = exportList;

function exportList() {
    let list = document.getElementById("ul").children;
    let text = "";
    let num = 1;
    
    for (var x of list) {
        let getClassName = x.children[0].className;
        console.log(getClassName);
        
        if (getClassName == "normal") {
            text = text + num.toString() + ' ) ' + x.children[0].textContent + '';
            
        } else if (getClassName == "important") {
            text = text + num.toString() + ' ) ' + "*" + x.children[0].textContent + '*';
         } else {
            text = text + num.toString() + ' ) ' + "**" + x.children[0].textContent + '**';
          };

          num = num + 1;
         
    }
    alert('今日待辦:' + text);
    
}

var target = document.querySelector('#target')

target.closest('div').style.color = 'red';



