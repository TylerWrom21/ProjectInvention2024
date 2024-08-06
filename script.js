// theme
let theme = document.querySelector('#theme');
theme.onclick = () => {
    if(theme) {
        theme.classList.toggle('bxs-sun');
        document.querySelector('body').classList.toggle('dark');
    } else {
        theme.classList.toggle('bxs-moon');
    }
}