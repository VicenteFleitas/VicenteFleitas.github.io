function iniciar()
{
	var boton = document.getElementById('grabar');
	boton.addEventListener('click', nuevoitem, false);

	mostrar();
}

function nuevoitem()
{
	var clave = document.getElementById('clave').value;
	var valor = document.getElementById('texto').value;

	sessionStorage.setItem(clave, valor);
	mostrar();
	document.getElementById('clave').value = '';
	document.getElementById('texto').value = '';

	mostrar(clave);
}

function mostrar(clave)
{
	var cajadatos = document.getElementById('cajadatos');
	cajadatos.innerHTML = '<div><buttom onclick="eliminarTodo()">Eliminar Todo</buttom></div>';
	for (var i = 0; i < sessionStorage.length; i++) 
	{
		var clave = sessionStorage.key(i);
		var valor = sessionStorage.getItem(clave);
		cajadatos.innerHTML += '<div>' + clave + ' - ' + valor + '<br><buttom onclick="eliminar(\''+clave+'\')">Eliminar</buttom></div>';
	}
}

function eliminar(clave)
{
	if(confirm('Está seguro?'))
	{
		sessionStorage.removeItem(clave);
		mostrar();
	}
}
function eliminarTodo()
{
	if(confirm('Está seguro?'))
	{
		sessionStorage.clear();
		mostrar();
	}
}

window.addEventListener('load', iniciar, false);