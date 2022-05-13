
function validate(callback){

let username = document.getElementById("username");
let pwd = document.getElementById("pwd");

if(username.value=="admin" && pwd.value=="12345"){
    callback();
}
else{
    alert("Enter valid username and password");
    return false;
}
}

function redirect(){

    window.open("./todolist.html");
}



// json //
document.getElementById("button").addEventListener('click',todolist);


function todolist(){
var xhttp = new XMLHttpRequest();

xhttp.onreadystatechange = function(){

    if(this.readyState == 4 && this.status == 200){
        console.log('READYSTATE: ', xhttp.readyState);
        console.log('STATUS: ', xhttp.status);
        
        // var response = JSON.parse(this.responseText);

        console.log(this.responseText);

         display(this.responseText)
    
        // document.getElementById("demo").innerHTML = output;
    }

    }

xhttp.open("GET","https://jsonplaceholder.typicode.com/todos",true);
xhttp.send();
}

var data = this.responseText;

function display(data){

    var response = JSON.parse(data);
    let  table = document.getElementById("todotable");

    for(var i=0;i<response.length;i++){
        let rowcount = table.rows.length;
        var row = table.insertRow(rowcount);

        var cell1 = row.insertCell(0);
        cell1.innerHTML=response[i].id;

        var cell2 = row.insertCell(1);
        cell2.innerHTML=response[i].title;

        var cell3 = row.insertCell(2);
        var element = document.createElement("input");
        element.type="checkbox";
        
        if(response[i].completed==true){
            element.setAttribute("checked","true");
            element.setAttribute("disabled","true");
        }

        element.addEventListener('change',function (event){
            if(event.currentTarget.checked){
                count++;
                counter();
            }
            else{
                count--;
            }

        })
        cell3.appendChild(element);

     
    }

}

var count = 0;
function counter(){

    let promise = new Promise(function(resolve,reject){

  

if(count >= 5){
    alert("5 tasks completed");
}
})
promise.then(function(s){
    alert(s);
})
}

