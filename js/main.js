document.addEventListener('DOMContentLoaded', function () {
    const burger = document.getElementById('burger');
    const nav = document.querySelector('.header__nav');

    burger.addEventListener('click', () => {
        nav.classList.toggle('active');
    });
});
// formlario
document.getElementById('contactForm').addEventListener('submit', function(event) {
    let isValid = true;

    // Limpiar mensajes previos
    document.querySelectorAll('.error-message').forEach(el => el.textContent = '');

    // Validación Nombre
    let name = document.getElementById('name').value.trim();
    if (name.length < 3 || !/^[a-zA-Z\s]+$/.test(name)) {
        document.getElementById('error-name').textContent = 'El nombre debe tener al menos 3 letras y no contener números.';
        isValid = false;
    }

    // Validación Email
    let email = document.getElementById('email').value.trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        document.getElementById('error-email').textContent = 'Por favor, ingresa un email válido.';
        isValid = false;
    }

    // Validación Teléfono (opcional)
    let phone = document.getElementById('phone').value.trim();
    if (phone !== "" && !/^\d{8,15}$/.test(phone)) {
        document.getElementById('error-phone').textContent = 'El teléfono debe contener entre 8 y 15 dígitos numéricos.';
        isValid = false;
    }

    // Validación Mensaje
    let message = document.getElementById('message').value.trim();
    if (message.length < 10) {
        document.getElementById('error-message').textContent = 'El mensaje debe tener al menos 10 caracteres.';
        isValid = false;
    }

    if (!isValid) {
        event.preventDefault(); // Evita el envío del formulario si hay errores
    }
});




document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");
    const confirmationMessage = document.getElementById("confirmationMessage");

    form.addEventListener("submit", async function (event) {
        event.preventDefault(); // Evita la recarga de la página

        const formData = new FormData(form);

        try {
            const response = await fetch(form.action, {
                method: "POST",
                body: formData,
            });

            if (response.ok) {
                confirmationMessage.style.display = "block"; // Muestra el mensaje
                form.reset(); // Limpia el formulario después de enviarlo
                
                setTimeout(() => {
                    confirmationMessage.style.display = "none"; // Oculta el mensaje tras 3 segundos
                }, 3000);
            } else {
                alert("Hubo un error al enviar el formulario. Inténtalo de nuevo.");
            }
        } catch (error) {
            alert("Error de conexión. Revisa tu internet e inténtalo nuevamente.");
        }
    });
});