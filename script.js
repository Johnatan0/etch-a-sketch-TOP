const resizeButton = document.querySelector('button.resize-button');
const gridbox = document.querySelector('div.container');
const internaldivs = document.querySelectorAll('div.internal');

resizeButton.addEventListener('click', resizegrid);

function setColor(e){
    e.target.style.backgroundColor = 'black';
};

internaldivs.forEach(div => div.addEventListener('mouseover', setColor));

function resizegrid(){

    let gridsize = prompt("Grid size? 0-100");

    if(gridsize > 100 || gridsize < 1 ) {
        return alert("Please insert a valid number between 0 and 100!");
    };

    gridbox.style.cssText = `grid-template-columns: repeat(${gridsize}, 1fr);`;

    while(gridbox.firstChild){
        gridbox.removeChild(gridbox.firstChild)
    };

    for(let i = 0; i < (gridsize ** 2); i++){
        let div = document.createElement('div');
        div.classList.add('internal');
        gridbox.appendChild(div);
    };

    const divs = document.querySelectorAll('div.internal');
    divs.forEach(div => div.addEventListener('mouseover', setColor));

};

resizegrid();










