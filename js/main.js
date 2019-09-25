import { navBar, perfil, trabajos } from "./templates.js";

let header = document.getElementById('navBar');
let body = document.getElementById('content');
header.innerHTML = navBar();
body.innerHTML = perfil();


document.getElementById('btn-perfil').addEventListener('click', () => {
	body.innerHTML = perfil();
}, false);
document.getElementById('btn-jobs').addEventListener('click', () => {
	body.innerHTML = trabajos();
}, false);


