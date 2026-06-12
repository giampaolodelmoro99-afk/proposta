const btnNo = document.getElementById('btn-no');
const btnYes = document.getElementById('btn-yes');
const gif = document.getElementById('gif');
const question = document.getElementById('question');
const button = document.getElementById('btn-yes');

function scappaNo() {
    const x = Math.random() * (window.innerWidth - btnNo.offsetWidth);
    const y = Math.random() * (window.innerHeight - btnNo.offsetHeight);

    btnNo.style.position = 'fixed';
    btnNo.style.left = x + 'px';
    btnNo.style.top = y + 'px';
}

btnNo.addEventListener('mouseover', scappaNo);
btnNo.addEventListener('click', scappaNo);
btnNo.addEventListener('touchstart', (e) => {
    e.preventDefault();
    scappaNo();
});

btnYes.addEventListener('click', () => {
    question.innerHTML = "Sapevo che avresti detto di sì! 🥰 Anche secondo me sei un gran Fi..sica ❤️";
    
    
    gif.src = "asset/vittoria.gif";
    
    btnNo.style.display = 'none';
    btnYes.style.transform = 'scale(1.3)';
    btnYes.disabled = true;

    button.textContent = "🥹🥹🥹"
});