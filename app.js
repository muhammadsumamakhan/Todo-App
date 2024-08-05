// // backtick string => ${}
// let div = document.querySelector("div");
// let arr = ["a", "b", "c", "d"];
// for(let i = 0; i < arr.length; i++ ){
//     // div.innerHTML += arr[i] + "<br/>"       
//     div.innerHTML += `${arr[i]} <br/>`
// }


// =============================(Todo App)======================================
let input = document.querySelector("#input");
let olList = document.querySelector("ol");
let todoArr = [];
function todorepeat(){
    olList.innerHTML = '';
    for(let i = 0; i < todoArr.length; i++){
        olList.innerHTML += `
                            <li>
                            ${todoArr[i]}
                            <button onclick="todoEdit(${i})">Edit</button>
                            <button onclick="todoDelete(${i})">Delete</button>
                            </li>
                            `
    }
}
function addtodo(){
    todoArr.push(input.value);
    input.value = '';
    todorepeat();
}

function todoDelete(index){
    todoArr.splice(index,1);
    todorepeat();
}
function todoEdit(index){
    let todoUpdate = prompt("Enter update todo value:- ");
    todoArr.splice(index,1, todoUpdate);
    todorepeat();
}