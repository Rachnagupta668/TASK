let btnAdd = document.querySelector('button');
let table = document.querySelector('table');


let nameInput = document.querySelector('#name');
let costInput = document.querySelector('#cost');
let  difficultyInput = document.querySelector('#difficulty');

let timeInput = document.querySelector('#time');


btnAdd.addEventListener('click', () => {
    let name = nameInput.value;
    let cost = costInput.value;
    let difficulty = difficultyInput.value;
    let time = timeInput.value;


    let template = `
                <tr>
                    <td>${name}</td>
                    <td>${cost}</td>
                    <td>${difficulty}</td>
                    <td>${time}</td>
               
               
                </tr>`;

    table.innerHTML += template;
});