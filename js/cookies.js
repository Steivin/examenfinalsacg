Swal.fire({
	 html: 'Esta página web utiliza cookies, por favor aceptelas para seguir navegando',
     confirmButtomText: 'Acepto',
	 icon: 'info',
	 padding: '1rem',
	 backdrop: true,
	 toast: true,
	 position: 'bottom',
	 allowOutsideClick: false,
	 allowEscapeKey: false,
	 stopKeydownPropagation: false,
	 showConfirmButton: true,
	 showCancelButton: false,
	 showCloseButton: false,
	 closeButtonAriaLabel: 'Cerrar esta alerta',
     customClass: {
        content: 'content-class',
     }
    });
