document.addEventListener('DOMContentLoaded', fetchMonsters());
const form = document.getElementById('monster-form');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    createMonster(event);
    })

function fetchMonsters(){
    fetch('http://localhost:3000/monsters/?_limit=20')
        .then(response => response.json())
        .then(response => {
            response.forEach(monster => showMonster(monster))
    });
}

function showMonster(monster){
    let form = document.getElementById('monster-container')
    let div = document.createElement('div')
    let ul = document.createElement('ul')
    let name = document.createElement('h2')
    name.innerText = monster.name
    let age = document.createElement('h3')
    age.innerText = `Age: ${monster.age}`
    let description = document.createElement('li')
    description.innerText = `Bio: ${monster.description}`
    ul.append(name, age, description);
    div.append(ul);
    form.append(div);
}

function createMonster(event){ 
    console.log("event:", event)
    console.log("zero value:", event.target[0].value)
    const newMonster = {}
    newMonster.name = event.target[0].value
    newMonster.age = event.target[1].value
    newMonster.description = event.target[2].value
    console.log('object:', newMonster)
    showMonster(newMonster)
}