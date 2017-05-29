function iniciar()
{
	var boton = document.getElementById('grabar');
	boton.addEventListener('click', nuevoitem, false);
	window.addEventListener("storage", mostrar, false);

	mostrar();
}

function nuevoitem()
{
	var clave = document.getElementById('clave').value;
	var valor = document.getElementById('texto').value;

	localStorage.setItem(clave, valor);
	mostrar();
	document.getElementById('clave').value = '';
	document.getElementById('texto').value = '';
}

function mostrar()
{
	var cajadatos = document.getElementById('cajadatos');
	cajadatos.innerHTML = '';

	for(var i = 0; i < localStorage.length; i++)
	{
		var clave = localStorage.key(i);
		var valor = localStorage.getItem(clave);
		cajadatos.innerHTML += '<div>' + clave + ' - ' + valor + '</div>';
	}
}

window.addEventListener('load', iniciar, false);