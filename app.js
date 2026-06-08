// Estado global de la aplicación (La orden ahora guardará objetos con cantidad)
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
    window.scrollTo(0,0);
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
        // Buscamos si el plato ya está en la orden para saber su cantidad
        const itemEnOrden = orden.find(item => item.id === plato.id);
        const cantidad = itemEnOrden ? itemEnOrden.cantidad : 0;
        
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
                    
                    <div class="selector-cantidad-container">
                        ${cantidad === 0 ? `
                            <button class="btn-agregar-inicial" onclick="modificarCantidad(${plato.id}, 1)">➕ Seleccionar</button>
                        ` : `
                            <div class="control-contador">
                                <button class="btn-contador menos" onclick="modificarCantidad(${plato.id}, -1)">-</button>
                                <span class="numero-cantidad">${cantidad}</span>
                                <button class="btn-contador mas" onclick="modificarCantidad(${plato.id}, 1)">+</button>
                            </div>
                        `}
                    </div>
                </div>
                <div id="ingredientes-${plato.id}" class="ingredientes-box">
                    <p><strong>Ingredientes:</strong> ${plato.ingredientes}</p>
                </div>
            </div>
        `;
        listaPlatillos.appendChild(card);
    });
}

// --- LÓGICA DE CONTROL DE CANTIDADES (SUMAR / RESTAR) ---
function modificarCantidad(id, cambio) {
    const plato = menuData.find(p => p.id === id);
    const itemEnOrden = orden.find(item => item.id === id);

    if (itemEnOrden) {
        // Si ya existe, sumamos o restamos
        itemEnOrden.cantidad += cambio;
        
        // Si la cantidad llega a 0, lo eliminamos de la orden
        if (itemEnOrden.cantidad <= 0) {
            orden = orden.filter(item => item.id !== id);
        }
    } else if (cambio > 0) {
        // Si no existe y le dieron a "Seleccionar" (+1), lo agregamos con cantidad 1
        orden.push({ ...plato, cantidad: 1 });
    }

    // Volvemos a dibujar el menú de la categoría actual para actualizar los números en pantalla
    const categoriaActual = tituloCategoria.textContent.replace('Menú ', '').toLowerCase();
    renderizarMenu(categoriaActual);
    
    // Actualizamos el botón del Home
    actualizarContadorHome();
}

// Actualiza el número de artículos totales en el Home
function actualizarContadorHome() {
    const totalArticulos = orden.reduce((acumulado, item) => acumulado + item.cantidad, 0);
    contadorTotalSpan.textContent = `(${totalArticulos} ${totalArticulos === 1 ? 'artículo' : 'artículos'})`;
}

// Mostrar/Ocultar ingredientes
function toggleIngredientes(id) {
    const box = document.getElementById(`ingredientes-${id}`);
    box.classList.toggle('open');
}

// --- RENDERIZAR PANTALLAS DE RESUMEN (PARA EL MESERO) ---
function renderizarResumen() {
    listaResumen.innerHTML = '';
    let totalGeneral = 0;

    if (orden.length === 0) {
        listaResumen.innerHTML = '<p class="orden-vacia">No has seleccionado ningún platillo todavía, carnal. 🌮</p>';
        precioTotalSpan.textContent = "$0.00";
        return;
    }

    orden.forEach(plato => {
        const subtotalPlato = plato.precio * plato.cantidad;
        totalGeneral += subtotalPlato;
        
        const item = document.createElement('div');
        item.className = 'resumen-item';
        item.innerHTML = `
            <div class="resumen-item-izq">
                <span class="resumen-cantidad">${plato.cantidad}x</span>
                <span class="resumen-nombre">${plato.nombre}</span>
            </div>
            <strong class="resumen-subtotal">$${subtotalPlato.toFixed(2)}</strong>
        `;
        listaResumen.appendChild(item);
    });

    precioTotalSpan.textContent = `$${totalGeneral.toFixed(2)}`;
}
