document.addEventListener('DOMContentLoaded', () => {
    
    const actualizarFecha = () => {
        const elementoFecha = document.getElementById('fecha-actualizacion');
        if (elementoFecha) {
            const ahora = new Date();
            const opciones = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
            elementoFecha.textContent = `Actualizado el: ${ahora.toLocaleDateString('es-ES', opciones)}`;
        }
    };

    const configurarReinicios = () => {
        const ids = ['btn-actualizar', 'reinicio-nombre', 'reinicio-logo'];
        ids.forEach(id => {
            const el = document.getElementById(id);
            if (el) {
                el.addEventListener('click', () => window.location.reload());
            }
        });
    };

    const configurarTooltip = () => {
        const tooltip = document.getElementById('tooltip-personalizado');
        const elementosConTooltip = document.querySelectorAll('[data-tooltip]');

        elementosConTooltip.forEach(el => {
            el.addEventListener('mouseenter', () => {
                tooltip.textContent = el.getAttribute('data-tooltip');
                tooltip.style.opacity = '1';
            });

            el.addEventListener('mousemove', (e) => {
                tooltip.style.left = (e.clientX + 15) + 'px';
                tooltip.style.top = (e.clientY + 15) + 'px';
            });

            el.addEventListener('mouseleave', () => {
                tooltip.style.opacity = '0';
            });
        });
    };

    actualizarFecha();
    configurarReinicios();
    configurarTooltip();
});