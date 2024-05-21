document.addEventListener('DOMContentLoaded', () => {
    const surpriseButton = document.querySelector('.surprise-button');
    const overlay = document.querySelector('.overlay');
    const closeButton = document.querySelector('.close-button');
    
    surpriseButton.addEventListener('click', () => {
        overlay.classList.remove('hidden');
    });

    closeButton.addEventListener('click', () => {
        overlay.classList.add('hidden');
    });

    const heart = document.querySelector('.heart');
    heart.addEventListener('click', () => {
        alert('我愛妳！');
    });
});
