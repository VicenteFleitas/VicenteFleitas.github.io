import { navBar, perfil, trabajos, contact, juegos, setPost } from "./templates.js";

let header = document.getElementById('navBar');
let body = document.getElementById('content');
let footer = document.getElementById('footer');

header.innerHTML = navBar();
body.innerHTML = perfil();
footer.innerHTML = contact();

redirect();

// add dropdown events
addEvent('indiVsColect', 'click', () => body.innerHTML = setPost(0));
// render perfil
addEvent('btn-perfil', 'click', () => body.innerHTML = perfil());
// render servicios
addEvent('btn-servicios', 'click', () => body.innerHTML = trabajos());
// render games
addEvent('btn-juegos', 'click', () => body.innerHTML = juegos());

// utils
function addEvent(id, event, func) {
	document.getElementById(id).addEventListener(event, ()=> func(), false);
}

function redirect() {
	// let url = window.location.href;
	// let array = url.split("/");
	// let screen = array[array.length - 1];
	
	var url_string = window.location.href;
	var url = new URL(url_string);
	var a = url.searchParams.get("post");
	console.log(a);

	if (a == "individualismoVsColectivismo") {
		body.innerHTML = setPost(0);
	}
}