let html = document.getElementById('html')
let change_btn = document.getElementById('change_btn')
let change_image = document.getElementById('change_image')

change_btn.addEventListener('click', () => {
    html.classList.toggle('dark');

    // change image source base on preference

    if(change_image.src.includes('img/moon.svg')){
        change_image.src = 'img/sun.svg';
    } else{
        change_image.src = 'img/moon.svg'
    }
})