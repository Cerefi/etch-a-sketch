const container = document.querySelector('.container');
const button = document.querySelector('button');
const body = document.querySelector('body');
const cont = document.querySelector('.cont');
let x;

button.addEventListener('click', ()=>{
    while (container.firstChild){
        container.removeChild(container.firstChild)
    }
    let input = prompt('Number of Grids: ');
    x = input;
    grids();
})


function grids(){
    for (let j = 0; j < x; j++){
    const cont = document.createElement('div');
    cont.setAttribute('class', 'cont');
    container.appendChild(cont);
        for (let i = 0; i < x; i++){
            const cube = document.createElement('div');
            cube.setAttribute('class', 'cube');
            cube.addEventListener('mouseover', ()=>{
                cube.style.backgroundColor = randomColor();
            })
            cont.appendChild(cube);
        }
    }
}

function randomColor() {
    let r = Math.floor(Math.random() * 256); 
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return 'rgb(' + r + ',' + g + ',' + b + ')';
  };