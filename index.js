const fraseElement = document.getElementById('fraseSecundaria');
const frases = ['Innovación', 'Profesionalidad', 'Pragmatismo', 'Tecnología'];
let index = 0;

function cambiarFrase() {
    fraseElement.textContent = frases[index];
    fraseElement.classList.remove('hidden'); // Asegura que la segunda palabra no esté oculta
    setTimeout(() => {
        fraseElement.classList.add('hidden'); // Oculta la segunda palabra después de 1 segundo
    }, 1000);
    index = (index + 1) % frases.length;
}

window.onload = function() {
    document.querySelector('.left-container').classList.add('delayed-animation');
    document.querySelector('.right-container').classList.add('delayed-animation');
  };

// Cambiar la frase cada 2 segundos (2000 milisegundos)
setInterval(cambiarFrase, 2000);


const rotatingImage = document.getElementById('rotating-image');

rotatingImage.addEventListener('mouseover', () => {
  rotatingImage.style.transition = 'transform 1s';
  rotatingImage.style.transform = 'rotate(360deg)';
});

rotatingImage.addEventListener('mouseout', () => {
  rotatingImage.style.transition = 'transform 1s';
  rotatingImage.style.transform = 'rotate(0deg)';
});

document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    document.querySelector('.container').style.display = 'none';
    document.querySelector('.success-message').style.display = 'block';
});