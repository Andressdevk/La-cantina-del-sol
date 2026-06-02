// Estado global de la aplicación
let orden = [];

// Elementos de las Pantallas
const homePage = document.getElementById('pantalla-home');
const menuPage = document.getElementById('pantalla-menu');
const resumenPage = document.getElementById('pantalla-resumen');

// Elementos Dinámicos
const listaPlatillos = document.getElementById('lista-platillos');
const tituloCategoria = document.getElementById('titulo-categoria');
const listaResumen = document.getElementById('lista-resumen');
const precioTotalSpan = document.getElementById('precio-total');
const contadorTotalSpan = document.getElementById('contador-total');

// --- NAVEGACIÓN ENTRE PANTALLAS ---
function cambiarPantalla(pantallaMostrar) {
    document.querySelectorAll('.pantalla').forEach(p => p.classList.remove('active'));
    pantallaMostrar.classList.add('active');
    window.scrollTo(0,0); // Sube la pantalla automáticamente
}

// Botones de las Ventanas de Categoría
document.querySelectorAll('.btn-ventana').forEach(boton => {
    boton.addEventListener('click', () => {
        const categoria = boton.getAttribute('data-cat');
        tituloCategoria.textContent = `Menú ${categoria.toUpperCase()}`;
        renderizarMenu(categoria);
        cambiarPantalla(menuPage);
    });
});

document.getElementById('btn-volver-home').addEventListener('click', () => cambiarPantalla(homePage));
document.getElementById('btn-volver-de-resumen').addEventListener('click', () => cambiarPantalla(homePage));

document.getElementById('btn-ir-orden').addEventListener('click', () => {
    renderizarResumen();
    cambiarPantalla(resumenPage);
});

// --- RENDERIZAR PLATILLOS EN EL MENÚ ---
function renderizarMenu(categoria) {
    listaPlatillos.innerHTML = '';
    const platosFiltrados = menuData.filter(p => p.categoria === categoria);

    platosFiltrados.forEach(plato => {
        const estaSeleccionado = orden.some(item => item.id === plato.id);
        
        const card = document.createElement('div');
        card.className = 'plato-card';
        card.innerHTML = `
            <img src="${plato.imagen}" alt="${plato.nombre}" class="plato-img">
            <div class="plato-info">
                <div class="plato-meta">
                    <h3>${plato.nombre}</h3>
                    <span class="plato-precio">$${plato.precio.toFixed(2)}</span>
                </div>
                <p class="plato-desc">${plato.descripcion}</p>
                
                <div class="plato-acciones">
                    <button class="btn-ingredientes" onclick="toggleIngredientes(${plato.id})">🔍 Ver ingredientes</button>
                    <label class="checkbox-container ${estaSeleccionado ? 'checked' : ''}">
                        <input type="checkbox" ${estaSeleccionado ? 'checked' : ''} onchange="toggleSeleccionPlato(${plato.id}, this)">
                        ${estaSeleccionado ? '✅ Seleccionado' : '➕ Seleccionar'}
                    </label>
                </div>
                <div id="ingredientes-${plato.id}" class="ingredientes-box">
                    <p><strong>Ingredientes:</strong> ${plato.ingredientes}</p>
                </div>
            </div>
        `;
        listaPlatillos.appendChild(card);
    });
}

// --- LÓGICA DE SELECCIÓN ---
function toggleSeleccionPlato(id, checkbox) {
    const plato = menuData.find(p => p.id === id);
    const label = checkbox.parentElement;

    if (checkbox.checked) {
        orden.push(plato);
        label.classList.add('checked');
        label.innerHTML = `<input type="checkbox" checked onchange="toggleSeleccionPlato(${id}, this)"> ✅ Seleccionado`;
    } else {
        orden = orden.filter(item => item.id !== id);
        label.classList.remove('checked');
        label.innerHTML = `<input type="checkbox" onchange="toggleSeleccionPlato(${id}, this)"> ➕ Seleccionar`;
    }
    
    // Actualizar contador del Home
    contadorTotalSpan.textContent = `(${orden.length})`;
}

// Mostrar/Ocultar ingredientes
function toggleIngredientes(id) {
    const box = document.getElementById(`ingredientes-${id}`);
    box.classList.toggle('open');
}

// --- RENDERIZAR PANTALLA RESUMEN ---
function renderizarResumen() {
    listaResumen.innerHTML = '';
    let total = 0;

    if (orden.length === 0) {
        listaResumen.innerHTML = '<p class="orden-vacia">No has seleccionado ningún platillo todavía, carnal. 🌮</p>';
        precioTotalSpan.textContent = "$0.00";
        return;
    }

    orden.forEach(plato => {
        total += plato.precio;
        const item = document.createElement('div');
        item.className = 'resumen-item';
        item.innerHTML = `
            <span>${plato.nombre}</span>
            <strong>$${plato.precio.toFixed(2)}</strong>
        `;
        listaResumen.appendChild(item);
    });

    precioTotalSpan.textContent = `$${total.toFixed(2)}`;
}