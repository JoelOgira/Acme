const counterDisplayArea = document.querySelector('.btn-area');
const counterDisplay = document.querySelector('.counter-display');
const counterDisplayContent = document.querySelector('.counter-display-content');
const footer = document.querySelector('.footer');
const launchCounter = document.querySelector('.launch-counter');

launchCounter.addEventListener('click', e => {
    counterDisplayArea.classList.remove('d-none');
    e.target.parentElement.classList.add('d-none');
})

let count = 0;
counterDisplayArea.addEventListener('click', e => {
    if (e.target.className === 'close') {        
        e.target.parentElement.classList.add('d-none');
        launchCounter.parentElement.classList.remove('d-none');
    }
    if (e.target.id === 'btn-counter') {
        count++;     
        counterDisplay.style.display = 'block';     
    }    
    if (e.target.id === 'btn-subtract') {
        count--;
        counterDisplay.style.display = 'block';
    }
    if (e.target.id === 'btn-reset') {
        count = 0;
        counterDisplay.style.display = 'block';
    }
    if (e.target.id === 'close-2') {
        counterDisplay.style.display = 'none';
    }
    
    counterDisplayContent.innerHTML = `
        <h4 class="pt-1">Counter Display: <span style="color: chocolate; padding-bottom: 12px; display: inline;">${count}</span></h2>
    `;
});

const year = new Date().getFullYear();
footer.innerHTML = `<p class="text-center pt-2 footer-text">Windfall Webdesign copyright &copy; ${year}</p>`

