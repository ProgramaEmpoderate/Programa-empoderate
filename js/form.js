
	const btn = document.getElementById('button');

	document.getElementById('form')
		.addEventListener('submit', function (event) {
			event.preventDefault();

			btn.value = 'Enviando...';

			const serviceID = 'default_service';
			const templateID = 'template_l7xvx77';

			emailjs.sendForm(serviceID, templateID, this)
				.then(() => {
					btn.value = 'ENVIAR';
					alert('Comentario enviado');
				}, (err) => {
					btn.value = 'Escribe tu comentario aquí';
					alert(JSON.stringify(err));
				});
		});
