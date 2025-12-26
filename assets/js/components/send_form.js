function sendEmail() {
	const formDOM = document.querySelector('#form');
	const modalDOM = document.querySelector('#modal');
	const closeModalDOM = document.querySelector('#btn_close-modal');

	if (!formDOM || !modalDOM || !closeModalDOM) return;

	function openModal(isSuccess = true, message = '') {
		const modalContent = modalDOM.querySelector('span') || modalDOM.children[0];
		if (isSuccess) {
			modalContent.textContent = 'Formulario enviado con éxito!';
		} else {
			modalContent.textContent = message || 'Error al enviar el formulario. Intenta de nuevo.';
		}
		modalDOM.showModal();
	}

	function closeModal() {
		modalDOM.close();
	}

	function getInputsData(e) {
		e.preventDefault();
		const infoInputs = {
			name: document.getElementById('name').value,
			email: document.getElementById('email').value,
			subject: document.getElementById('subject').value,
			message: document.getElementById('message').value,
		};

		if (
			infoInputs.name &&
			infoInputs.email &&
			infoInputs.message &&
			infoInputs.subject
		) {
			emailjs.send('service_zerom0s', 'template_0pc6krz', infoInputs).then(
				(response) => {
					console.log('SUCCESS!', response.status, response.text);
					formDOM.reset();
					openModal(true);
				},
				(error) => {
					console.log('FAILED...', error);
					const errorMessage = error.text || 'Error desconocido';
					openModal(false, `Error: ${errorMessage}`);
				},
			);
		} else {
			openModal(false, 'Por favor completa todos los campos del formulario.');
		}
	}

	formDOM.addEventListener('submit', getInputsData);
	closeModalDOM.addEventListener('click', closeModal);
}

export default sendEmail;
// NO OLVIDES HACER TU CUENTA https://www.emailjs.com/
