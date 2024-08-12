// theme
let theme = document.querySelector('#theme');
theme.onclick = () => {
    // if(theme) {
    //     theme.classList.toggle('bxs-sun');
    //     document.querySelector('body').classList.toggle('dark');
    // } else {
        //     theme.classList.toggle('bxs-moon');
        // }
    theme.classList.toggle('bxs-sun');
    document.querySelector('body').classList.toggle('dark');
}
// menubar
let menu = document.querySelector('#menu');
menu.onclick = () => {
    menu.classList.toggle('active');
    menu.classList.toggle('bx-x');
    document.querySelector('header').classList.toggle('active');
}

// Sticky
document.addEventListener('scroll', () => {
    const header = document.querySelector('header');

    if (window.scrollY > 0){
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
    }

)

