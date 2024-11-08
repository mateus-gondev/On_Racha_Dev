const checkbox = document.querySelector('.lempreme-container input[type="checkbox"]');
const label = document.querySelector('.lempreme-container label');

checkbox.addEventListener('change', () => {
    label.style.color = checkbox.checked ? 'green' : 'white'; // Exemplo de mudança de cor
});