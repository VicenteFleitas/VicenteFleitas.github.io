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
			        <a id="btn-jobs" class="nav-link" href="#">Trabajos</a>
			      </li>
			      <li class="nav-item">
			        <a class="nav-link" href="#">Juegos</a>
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
	return `<div class="jumbotron jumbotron-fluid">
			  <div class="container">
			    <h1 class="display-4">${name}</h1>
			    <p class="lead">${description}</p>
			  </div>
			</div>`;
}

export function trabajos() {
	return `<div class="container">
				<div class="row">
					
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
// 
function card(title, description, img, array) {
	let list = ``;
	array.forEach(element => {
		list += `<li class="list-group-item">${element}</li>`;
	});
	return `<div class="card" style="width: 18rem;">
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























