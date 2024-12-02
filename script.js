document.getElementById('registrationForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const course = document.getElementById('course').value;

    alert(`¡Gracias por inscribirte, ${name}! Te hemos registrado en el curso ${course}.`);
    this.reset();
});

document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("modal");
    const closeModal = document.getElementById("close-modal");
    const eventList = document.getElementById("event-list");

    // Eventos por mes
    const events = {
        junio: ["Evento A", "Evento B", "Evento C"],
        julio: ["Evento D", "Evento E", "Evento F"],
        agosto: ["Evento G", "Evento H", "Evento I"],
        septiembre: ["Evento J", "Evento K", "Evento L"],
        octubre: ["Evento M", "Evento N", "Evento O"],
        noviembre: ["Evento P", "Evento Q", "Evento R"]
    };

    // Abrir modal al presionar un botón
    document.querySelectorAll(".month-btn").forEach((btn) => {
        btn.addEventListener("click", () => {
            const month = btn.dataset.month;
            const modalTitle = document.getElementById("modal-title");
            modalTitle.textContent = `Eventos de ${month.charAt(0).toUpperCase() + month.slice(1)}`;

            // Limpiar eventos previos
            eventList.innerHTML = "";
            events[month].forEach((event) => {
                const li = document.createElement("li");
                li.textContent = event;
                eventList.appendChild(li);
            });

            // Mostrar modal
            modal.style.display = "flex";
        });
    });

    // Cerrar modal
    closeModal.addEventListener("click", () => {
        modal.style.display = "none";
    });

    // Cerrar modal al hacer clic fuera del contenido
    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });
});
