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
			          Blog de economía
			        </a>
			        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">

			          <a id="indiVsColect" class="dropdown-item">Individualismo y colectivismo</a>
			          <a class="dropdown-item">La información dispersa</a>
			          
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
			  	'Vengo trabajando en desarrollo de Software hace 10 años, y es una de mis grandes pasiones junto con la lectura, economía y el Basquetbol. Me inicie en el mundo del software con flash y el lenguaje as3, luego tuve que migrar a Openfl y haxe. Estuve trabajando 2 años con unity3D y c#. Finalmente terminé trabajando con javascript que es el lenguaje que más uso para desarrollo.'
			  	)}
				${list(
					'img/perfil.jpg',
					'Por qué javascript ?',
					'Creo que js es el lenguaje que todo programador debería conocer: Es fácil iniciarse en la programación con él, es un lenguaje versátil, está en todas partes.'
					)}
				${list(
					'img/perfil.jpg',
					'Firebase para autenticación y base de datos.',
					'Firebase es una plataforma de Google, conocida por su servicio de base de datos en la nube. Este servicio permite conectar aplicaciones web y mobile con esa base de datos y actualizarse a tiempo real bidireccionalmente.'
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
					'WingedMind', 
					'Mobile Game', 
					'img/winged.png',
					'https://play.google.com/store/apps/details?id=com.criptomedia.WingedMindPranikasWorld'
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
					<a href="${link}" target="_blank" class="btn btn-primary">Jugar</a>
				</div>
			</div>`;
}

export function setPost(id) {
	return `<div class="row">
				<div class="col-sm">
					${blogCard(
						"I. Individualismo y Colectivismo", 
						" ", 
						"<span class='font-italic'>'Los socialistas creen en dos cosas que son absolutamente diferentes y hasta quizá contradictorias: libertad y organización.'</span>"
					)}
					${blogCard(
						"II. Error conceptual", 
						" ", 
						"Existe un obstáculo o confusión responsable del camino por el que somos arrastrados hacia cosas que nadie desea.<br>Hablamos del concepto de socialismo."
					)}
					${blogCard(
						"III. Socialismo", 
						"Fines y métodos", 
						"<strong>Fines del socialismo:</strong><br> ideales de justicia social, mayor igualdad y seguridad.<br><br><strong>Métodos del socialismo:</strong><br> Abolición de la empresa privada y la propiedad privada de los medios de producción.<br>Creación de un 'sistema de economía planificada', que reemplaza al empresario que actúa en busca de un beneficio por un 'organismo central de planificación'."
					)}
				</div>
				<div class="col-sm">
					${blogCard(
						"IV. Tipos de socialistas", 
						"", 
						"1. Los que sólo se preocupan por los fines, no comprenden cómo pueden alcanzarse ni les preocupa, para ellos deben alcanzarse a cualquier costo.<br><br>2. Aquellos que lo utilizan como objeto de la práctica política, para ellos tanto métodos como fines son escenciales.<br><br>3. Por último los que valoran los fines pero se niegan a apoyar al socialismo en razón del peligro de sus metodologías."
					)}
					${blogCard(
						"V. El foco erróneo", 
						" ", 
						"La discusión principal es sobre qué medios utilizar, no si pueden alcanzar los fines simultáneamente o a cual costo.<br><br>La situación se complica por el hecho de valer los mismos medios (planificación económica) para otras muchas finalidades.<br><br>Qué implica 'planificación económica'? Centralizar la dirección de la actividad económica, para lograr distribución de la renta según la justicia social."
					)}
				</div>
				<div class="col-sm">
					${blogCard(
						"VI. El problema de la planificación", 
						" ", 
						"Debido a la información dispersa el estado no debe interferir y la capacidad de elección debe ser devuelta a cada persona y así sortear la imposibilidad del cálculo económico.<br><br>La información dispersa existente está al alcance de cada uno, siempre que todos seamos libres de tomar decisiones.<br><br>El estado no puede hacerse con tal información debido a que nadie puede transmitir a un semejante cuanto sabe.<br><br>Por qué la información respecto al tiempo, lugar y circunstancia no puede ser recolectado por un sistema centralizado?: parte de la información disponible, en cada uno, sólo irá tomando forma a medida que nuestras decisiones son adoptadas. Cada sujeto sólo recurre a estas informaciones mientras sigue comportamientos resultantes frente a circunstancias que le afectan (ejemplo: escasez relativa de materias primas, mano de obra calificada etc.)<br><br>El criterio personal sumado esa información intransferible (a excepción del uso de precios) permite descubrir 'lo que vale la pena descubrir'; información que depende también de reacciones de muchos otros sujetos, encriptados en precios de mercado libre, condicionados por sus respectivos entornos."
					)}
				</div>
			</div>
			<div class="row">
				<h4>Planificación económica<hr></h4>
			</div>
			<div class="row">
				<div class="col-sm">
					<ul class="nav nav-tabs" id="myTab" role="tablist">
					  <li class="nav-item">
					    <div style="cursor: pointer;" class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">
							Quienes impulsan?
					    </div>
					  </li>
					  <li class="nav-item">
					    <div style="cursor: pointer;" class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">
							El peligro
					    </div>
					  </li>
					  <li class="nav-item">
					    <div style="cursor: pointer;" class="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">
							Colectivismo
					    </div>
					  </li>
					</ul>
					<div class="tab-content mt-2" id="myTabContent">
					  <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
						<p>Todos aquellos que demandan que la "producción para el uso"
						sustituya a la producción para el beneficio.</p>
					  </div>
					  <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
						<p>Tal planificación es igualmente útil para lograr lo opuesto, distribuir la renta a alguna
						élite, la intelectual por ejemplo.<br>
						Los métodos que habríamos de emplear son los mismos que asegurarían una distribución
						igualitaria.</p>
					  </div>
					  <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
						<p>Estos métodos citados son propios del colectivismo, es por ello que el socialismo
						es una especie de este género.<br>
						La reglamentación de la vida económica pone a los
						gobiernos en tal posición que, en palabras de Adan Smith, "para sostenerse, 
						se veían obligados a ser opresores y tiránicos."</p>
						<p>Colectivismo: planificación en pos de cualquier ideal distributivo determinado.</p>
					  </div>
					</div>
				</div>
				<div class="col-sm">
					<img src="img/planificacionEco.jpg" class="img-fluid" alt="Responsive image">
				</div>
			</div>
			<div class="row">
				<h4>Planificación<hr></h4>
			</div>
			<div class="row">
				<div class="col-sm">
					<ul class="nav nav-tabs" id="myTab2" role="tablist">
					  <li class="nav-item">
					    <div style="cursor: pointer;" class="nav-link active" id="home-tab2" data-toggle="tab" href="#home2" role="tab" aria-controls="home2" aria-selected="true">
							Individual y estatal
					    </div>
					  </li>
					  <li class="nav-item">
					    <div style="cursor: pointer;" class="nav-link" id="profile-tab2" data-toggle="tab" href="#profile2" role="tab" aria-controls="profile2" aria-selected="false">
							La competencia
					    </div>
					  </li>
					  <li class="nav-item">
					    <div style="cursor: pointer;" class="nav-link" id="contact-tab2" data-toggle="tab" href="#contact2" role="tab" aria-controls="contact2" aria-selected="false">
							Hostilidad
					    </div>
					  </li>
					</ul>
					<div class="tab-content mt-2" id="myTabContent">
					  <div class="tab-pane fade show active" id="home2" role="tabpanel" aria-labelledby="home-tab2">
						<p>Todos deseamos tratar nuestros problemas comunes tan racionalmente como sea posible 
						y así obrar con toda previsión que se nos alcance. En este sentido, todo el que no sea 
						un fatalista completo es un partidario de la planificación. Extructura, dentro de la cual 
						las diferentes personas conducirán las diversas actividades, de acuerdo con sus planes 
						individuales, guiados por su situación, lugar y tiempo. Todo esto con la mayor apertura posible.
						<br><br> Pero no es éste el sentido en que nuestros entusiastas de una sociedad planificada 
						emplean ahora el término.<br>
						Lo que nuestros planificadores demandan es la dirección centralizada de toda la actividad económica 
						según un plan único que imponga el uso de los recursos de la sociedad para servir a particulares 
						fines por una vía determinada.<br></p>
						<ul>
							<li>Tanto el individuo como los planificadores modernos no discuten guiarse por la inteligencia, actuar con previsión o raciocinio.</li>
							<li>La verdadera disputa descansa acerca de cuál sea la mejor manera de hacerlo.</li>
							<li>Cuestionan la utilización optima de los recursos y plantean como solución la dirección y organización centralizada de todas nuestras actividades, de acuerdo con algún "modelo" construido expresamente</li>
						</ul>
					  </div>
					  <div class="tab-pane fade" id="profile2" role="tabpanel" aria-labelledby="profile-tab2">
						<p>El individualismo defiende el mejor uso posible de las fuerzas de la competencia como medio
						para coordinar los exfuerzos humanos.<br></p>
						<ul>
							<li>Allí donde pueda crearse una competencia efectiva, ésta es la mejor guía para conducir los esfuerzos individuales.</li>
							<li>La competencia es el único método que permite a nuestras actividades ajustarse a las de cada uno de los demás sin intervención coercitiva o arbitraria de la "autoridad".</li>
							<li>Un mercado competitivo evita la necesidad de un "control social explicito" y da a los individuos una oportunidad para decidir si las perspectivas de una ocupación particular son suficientes para compensar las desventajas y los riesgos que llevan consigo.</li>
						</ul>
						<p>Es esencial que todas las partes presentes en el mercado tengan libertad para vender
						y comprar cualquier cosa que se pueda producir o vender.<br>Y es necesario que el acceso 
						a las diferentes actividades esté abierto a todos en los mismos términos y que la ley
						no tolere ningún intento de individuos o de grupos para restringir este acceso mediante
						poderes abiertos o disfrazados.<br>Cualquier intento de intervenir los precios o las cantidades
						de unas mercancías en particular priva a la competencia de su facultad para realizar una efectiva
						coordinación de los esfuerzos individuales, porque las variaciones de los precios dejan de 
						registrar todas las alteraciones importantes de las circunstancias y no suministran ya una guía
						eficaz para la acción del individuo.<br>El funcionamiento de la competencia no solo exige
						una adecuada organización de ciertas institutciones (generadas de forma evolutiva y
						 auto mantenidas por su capacidad incremental de supervivencia a los pueblos que lo acuñen;
						 no impuestas por el racionalismo constructivista) como el dinero, los mercados y canales
						 de información, la ley, etc.</p>
					  </div>
					  <div class="tab-pane fade" id="contact2" role="tabpanel" aria-labelledby="contact-tab2">
						<p>No es suficiente que la ley reconozca el principio de la propiedad privada y 
						de la libertad de contrato; mucho depende de la definición precisa del derecho de 
						propiedad, las serias deficiencias en este campo, especialmente con respecto a las
						leyes, no sólo han restado eficacia a la competencia, sino que lo llevan a la destrucción.<br><br>
						El moderno movimiento en favor de la planificación es un movimiento contra la competencia cómo tal, 
						una nueva bandera bajo la cual se han alistado todos los enemigos de la competencia.<br>
						Lo que en realidad une a los socialistas de la izquierda y la derecha es esta común hostilidad
						a la competencia y su común deseo de reemplazarla por una economía dirigida.<br>
						El sistema de "economía planificada" como política pone al consumidor a merced de la acción 
						monopolista conjunta del sistema mercantilista, generado por el estado, y los trabajadores 
						de las industrias mejor organizadas (Lobby). Así estos monopolios industriales traen efectos 
						opuestos a los que proclaman los argumentos en favor de la planificación.</p>
					  </div>
					</div>
				</div>
				<div class="col-sm">
					<img src="img/individualismoVsColect.jpg" class="img-fluid" alt="Responsive image">
				</div>
			</div>
			<div class="row">
				<h4>Conclusión<hr></h4>
			</div>
			<div class="row">
				<p>Una vez iluminada la optica contraproducente de la "planificación moderna". Muchos aún 
				creen posible encontrar una "vía intermedia" entre la competencia "atomística" y 
				la dirección centralizada.<br>
				Un error común llega de la mano de intelectuales racionalistas: "nuestro objetivo no debe 
				ser ni la descentralización extrema de la libre competencia ni la centralización completa 
				de un plan único, sino una prudente mezcla de los 2 métodos."<br><br>
				Aunque la competencia puede soportar cierta mezcla de intervención, no puede combinarse
				con la planificación en cualquier grado si ha de seguir operando como guía eficaz de la
				actividad productiva.<br><br>
				La competencia, a medida que se ve interrumpida con pequeñas dosis de dirección centralizada,
				se empobrece y vuelve ineficiente.<br>
				Competencia y "dirección centralizada" son principios alternativos para la resolución del mismo
				problema, y una mezcla de los 2 significa que ninguno operará verdaderamente, y el resultado será
				peor que si se hubiese confiado sólo en uno de ambos sistemas.</p>
			</div>`;
}

function blogCard(header, title, content) {
	return `<div class="card border-light mb-3" style="max-width: 18rem;">
				<div class="card-header">${header}</div>
				<div class="card-body">
					<h5 class="card-title">${title}</h5>
					<p class="card-text">${content}</p>
				</div>
			</div>`;
}















