export function navBar() {
	return `<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
			  <a class="navbar-brand" href="#">VicenFlts</a>
			  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
			    <span class="navbar-toggler-icon"></span>
			  </button>
			  <div class="collapse navbar-collapse" id="navbarNavDropdown">
			    <ul class="navbar-nav">
			      <li class="nav-item active">
			        <a id="btn-perfil" class="nav-link" href="#">Perfil <span class="sr-only">(current)</span></a>
			      </li>
			      <li class="nav-item">
			        <a id="btn-servicios" class="nav-link" href="#">Servicios</a>
			      </li>
			      <li class="nav-item">
			        <a id="btn-juegos" class="nav-link" href="#">Juegos</a>
			      </li>
			      <li class="nav-item dropdown">
			        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
			          Economía
			        </a>
			        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
			          <a class="dropdown-item" href="#">Impuestos</a>
			          <a class="dropdown-item" href="#">Teoria de la selección pública</a>
			          <a class="dropdown-item" href="#">Estado</a>
			          <a class="dropdown-item" href="#">Monopolios e instituciones públicas</a>
			          <a class="dropdown-item" href="#">Moral Racionalista</a>
			          <a class="dropdown-item" href="#">Regulaciones</a>
			        </div>
			      </li>
			    </ul>
			  </div>
			</nav>`;
}

export function perfil() {
	let name = `Vicente Fleitas`;
	let description = `FullStack Developer: Desarrollador web / desktop / mobile.`
	return `<div class="jumbotron ">
						<h1 class="display-4">${name}</h1>
						<p class="lead">${description}</p>
						<div class="tooltip2">
							<img width="100em" src="img/firebase.png" class="img-thumbnail" />
							<span class="tooltiptext2">Firebase</span>
						</div>
						<div class="tooltip2">
							<img width="100em" src="img/js.png" class="img-thumbnail" />
							<span class="tooltiptext2">Javascript</span>
						</div>
						<div class="tooltip2">
							<img width="100em" src="img/css3.png" class="img-thumbnail" />
							<span class="tooltiptext2">Css3</span>
						</div>
						<div class="tooltip2">
							<img width="100em" src="img/html5.png" class="img-thumbnail" />
							<span class="tooltiptext2">Html5</span>
						</div>
						<div class="tooltip2">
							<img width="100em" src="img/bootstrap.jpg" class="img-thumbnail" />
							<span class="tooltiptext2">Bootstrap 4</span>
						</div>
						<div class="tooltip2">
							<img width="100em" src="img/nodejs.png" class="img-thumbnail" />
							<span class="tooltiptext2">NodeJs</span>
						</div>
						<div class="tooltip2">
							<img width="100em" src="img/websocket.png" class="img-thumbnail" />
							<span class="tooltiptext2">websocket</span>
						</div>
						<div class="tooltip2">
							<img width="100em" src="img/openfl.png" class="img-thumbnail" />
							<span class="tooltiptext2">Openfl</span>
						</div>
						<div class="tooltip2">
							<img width="100em" src="img/unity.png" class="img-thumbnail" />
							<span class="tooltiptext2">Unity3D C#</span>
						</div>
						<div class="tooltip2">
							<img width="100em" src="img/animate.png" class="img-thumbnail" />
							<span class="tooltiptext2">Adobe Animate</span>
						</div>
			</div>
			${post()}`;
}

function post() {
	return `<ul class="list-unstyled">
			  ${list(
			  	'img/perfil.jpg', 
			  	'Hola Gente!', 
			  	'Vengo trabajando en desarrollo de Software hace 10 años, y es una de mis grandes pasiones junto con la lectura y el Basquetbol. Me inicie en el mundo del software con flash y el lenguaje as3, luego tuve que migrar a Openfl y haxe. Estuve trabajando 2 años con unity3D y c#. Finalmente terminé trabajando con javascript que es el lenguaje que más uso para desarrollo.'
			  	)}
				${list(
					'img/perfil.jpg',
					'Por qué javascript ?',
					'Creo que js es el lenguaje que todo programador debería conocer: Es fácil iniciarse en la programación con él, es un lenguaje versátil, está en todas partes.'
					)}
				${list(
					'img/perfil.jpg',
					'Firebase para autenticación y base de datos.',
					'Firebase es una plataforma de Google, conocida por su servicio de base de datos en la nube. Este servicio permite conectar aplicaciones web y mobile con esa base de datos y actualizarse a tiempo real bidireaccionalmente.'
					)}
				${list(
					'img/perfil.jpg',
					'WebSocket',
					'Uno de los APIs más geniales de html5, permite que un servidor web establezca una conexión con el navegador y se comunique directamente sin lag o delay.'
					)}
			</ul>`;
}

function list(img, title, content) {
	return `<li class="media my-media">
			    <img width="80em" src="${img}" class="mr-3 img-thumbnail">
			    <div class="media-body">
			      <h5 class="mt-0 mb-1">${title}</h5>
			      ${content}
			    </div>
			  </li>`;
}

export function trabajos() {
	return `<div class="">
				
					<div class="alert alert-secondary" role="alert">
					  Pedí tu presupuesto con 50% de descuento este mes!
					</div>
				
				<div class="card-deck">
					${card(
						'Landing Page', 
						'Presencia web efectiva.',
						'img/card3.jpg',
						['Pantalla principal','Servicios', 'Dirección - Contacto']
						)}
					${card(
						'WebApp / Database', 
						'Aplicación web y datos.', 
						'img/card0.jpg',
						['Stock - Clientes','Gestión de cobros', 'Pago de salarios']
						)}
					${card(
						'Facturación', 
						'Gestión y administración.', 
						'img/card2.png',
						['Formularios - Facturación', 'Gestión de personal', 'Correos']
						)}
					${card(
						'Software a Medida', 
						'Solución empresarial.', 
						'img/card1.png',
						['Control de tareas','Datos accesibles', 'Administración Ágil']
						)}
				</div>
			</div>`;
}

export function contact() {
	return `<div class="my-footer">
				<div class="row">
					<div class="col-md-12">
						<h5>Otras Redes</h5>
					</div>
				</div>
				<hr>
				<div class="row justify-content-md-center">
					<div class="col-md-1">
						<a href="https://github.com/VicenteFleitas" target="_blank"><i class="iconsLogo fab fa-github fa-3x"></i></a><br>
					</div>
					<div class="col-md-1">
						<a href="https://www.linkedin.com/in/vicentefleitas/" target="_blank"><i class="iconsLogo fab fa-linkedin fa-3x"></i></a><br>
					</div>
					<div class="col-md-1">
						<a href="https://www.patreon.com/VicenFlts" target="_blank"><i class="iconsLogo fab fa-patreon fa-3x"></i></a><br>
					</div>
					<div class="col-md-1">
						<a href="https://twitter.com/vicenflts" target="_blank"><i class="iconsLogo fab fa-twitter-square fa-3x"></i></a><br>
					</div>
					<div class="col-md-1">
						<a href="https://www.instagram.com/micro_wizard" target="_blank"><i class="iconsLogo fab fa-instagram fa-3x"></i></a><br>
					</div>
					<div class="col-md-1">
						<a href="https://www.facebook.com/vicente.fleitas" target="_blank"><i class="iconsLogo fab fa-facebook-square fa-3x"></i></a>
					</div>
				</div>
			</div>
			<div class="container-fluid">
				<div class="row justify-content-md-center my-footer-bottom">Contacto: 0975 106 323 - vicentefleitas@icloud.com</div>
			</div>
	`;
}
 
function card(title, description, img, array) {
	let list = ``;
	array.forEach(element => {
		list += `<li class="list-group-item">${element}</li>`;
	});
	return `<div class="card" style="width: 18rem; margin-bottom: 15px;">
			  <img src="${img}" class="card-img-top" alt="...">
				<div class="card-body">
					<h5 class="card-title">${title}</h5>
					<p class="card-text">${description}</p>
				</div>
				<ul class="list-group list-group-flush">
					${list}
				</ul>
				<div class="card-body">
					<a href="#" class="btn btn-primary">Presupuesto</a>
				</div>
			</div>`;
}

export function juegos() {
	return `<div class="card-deck game-content">
				${gameCard(
					'Golden8Bits', 
					'Fantasy Console', 
					'img/headerg8b.png',
					'https://store.steampowered.com/app/794230/Golden8bits/'
				)}
				${gameCard(
					'SolarRuins', 
					'Adventure Game', 
					'img/solarruins.png',
					'https://criptomedia.itch.io/solarruins'
				)}
				${gameCard(
					'Golden8Bits', 
					'Fantasy Console', 
					'img/headerg8b.png',
					'https://store.steampowered.com/app/794230/Golden8bits/'
				)}
			</div>`;
}

function gameCard(title, description, img, link) {
	return `<div class="card" style="width: 18rem; margin-bottom: 15px;">
			  <img src="${img}" class="card-img-top">
				<div class="card-body">
					<h5 class="card-title">${title}</h5>
					<p class="card-text">${description}</p>
				</div>
				<div class="card-body">
					<a href="${link}" class="btn btn-primary">Jugar</a>
				</div>
			</div>`;
}



















