const counterDispalyArea = document.querySelector('.btn-area');
const counterDisplay = document.querySelector('.counter-display');
const counterDisplayContent = document.querySelector('.counter-display-content');
const closeButton = document.querySelector('.close');
const closeButton2 = document.querySelector('.close-2');

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
    counterDisplay.style.display = 'block';
    counterDisplayContent.innerHTML = `
        <h2 class="pt-1">Counter Display : <span style="color: chocolate; padding-bottom: 12px;">${count}</span></h2>
    `;
});

