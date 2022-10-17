const btn = document.querySelector('.j-btn-test');


btn.addEventListener('click', () => {
    alert('Размер экрана (ШхВ): ' + window.screen.width + 'x' + window.screen.height);
});