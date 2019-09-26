import { navBar, perfil, trabajos, contact } from "./templates.js";

let header = document.getElementById('navBar');
let body = document.getElementById('content');
let footer = document.getElementById('footer');
header.innerHTML = navBar();
body.innerHTML = perfil();
footer.innerHTML = contact();

document.getElementById('btn-perfil').addEventListener('click', () => {
	body.innerHTML = perfil();
}, false);
document.getElementById('btn-jobs').addEventListener('click', () => {
	body.innerHTML = trabajos();
}, false);


