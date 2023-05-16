let btnAdd = document.querySelector('button');
let table = document.querySelector('table');


let nameInput = document.querySelector('#name');
let costInput = document.querySelector('#cost');
let  difficultyInput = document.querySelector('#difficulty');



btnAdd.addEventListener('click', () => {
    let name = nameInput.value;
    let cost = costInput.value;
    let difficulty = difficultyInput.value;
    

    let template = `
                <tr>
                    <td>${name}</td>
                    <td>${cost}</td>
                    <td>${difficulty}</td>
                    <td>${difficulty}</td>
               
               
                </tr>`;

    table.innerHTML += template;
});