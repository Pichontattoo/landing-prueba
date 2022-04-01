const preloader = document.getElementById('preloader');
    window.addEventListener("load", setTimeout(() => {
        preloader.style.display = 'none';
    },4000 ))

//-----------------------------------------------------Loader-------------------------------------------//


function menuToggle() {
	let nav = document.getElementById('menu-overlay');
	nav.classList.toggle('active');
    {
    let nav = document.getElementById('toggleIcon');
	nav.classList.toggle('active');
}
}

function reset() {
    let nav = document.getElementById('menu-overlay');
	nav.classList.remove('active');
    {
        let nav = document.getElementById('toggleIcon');
	nav.classList.remove('active');
    }
}