const counterDispalyArea = document.querySelector('.btn-area');
const counterDisplay = document.querySelector('.counter-display');
const closeButton = document.querySelector('.close');


let count = 0;
counterDispalyArea.addEventListener('click', e => {
    if (e.target.className === 'close') {
        e.target.parentElement.remove();
    }
    if (e.target.id === 'btn-counter') {
        count++;          
    }    
    if (e.target.id === 'btn-subtract') {
        count--;
    }
    counterDisplay.innerHTML = `
        <h2 class="pt-3">Counter Display : <span style="color: chocolate;">${count}</span></h2>
    `;
});

