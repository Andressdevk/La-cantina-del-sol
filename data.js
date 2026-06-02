const menuData = [
    // --- PICANTE ---
    {
        id: 1, nombre: "Tacos Infierno Azteca", categoria: "picante", precio: 95.00,
        descripcion: "Tres tacos de costilla de res bañados en nuestra salsa de chile habanero tatemado.",
        ingredientes: "Costilla de res, doble tortilla de maíz, cebolla morada curtida, cilantro y salsa de habanero extra picante.",
        imagen: "img/p_tacos.jpg"
    },
    {
        id: 2, nombre: "Aguachile El Chingón", categoria: "picante", precio: 120.00,
        descripcion: "Camarones frescos curados en limón con un toque extremo de chile serrano y chiltepín.",
        ingredientes: "Camarones, jugo de limón, chile serrano, pepino, cebolla morada y aguacate.",
        imagen: "img/p_aguachile.jpg"
    },
    {
        id: 3, nombre: "Alitas Fuego de la Cantina", categoria: "picante", precio: 85.00,
        descripcion: "Porción de 6 alitas crujientes bañadas en una reducción de chile de árbol y miel de agave.",
        ingredientes: "Alitas de pollo, salsa de chile de árbol, miel de agave, ajonjolí y aderezo de la casa.",
        imagen: "img/p_alitas.jpg"
    },
    // --- VEGETARIANO ---
    {
        id: 4, nombre: "Tacos de Jamaica Crujiente", categoria: "vegetariano", precio: 70.00,
        descripcion: "Tres tacos de flor de jamaica deshidratada y frita, sazonada al estilo pastor.",
        ingredientes: "Flor de jamaica crujiente, piña asada, cebolla, cilantro y salsa verde suave.",
        imagen: "img/v_tacos.jpg"
    },
    {
        id: 5, nombre: "Quesadilla de Flor de Calabaza", categoria: "vegetariano", precio: 65.00,
        descripcion: "Gran tortilla de maíz hecha a mano, rellena de queso oaxaca derretido y flor de calabaza.",
        ingredientes: "Tortilla de maíz, queso oaxaca, flor de calabaza, epazote y champiñones.",
        imagen: "img/v_quesadilla.jpg"
    },
    {
        id: 6, nombre: "Totopos Del Sol", categoria: "vegetariano", precio: 80.00,
        descripcion: "Montaña de totopos caseros bañados en queso fundido, frijoles negros y guacamole.",
        ingredientes: "Totopos de maíz, frijoles negros, queso derretido, guacamole, pico de gallo y jalapeños.",
        imagen: "img/v_totopos.jpg"
    },
    // --- CLÁSICOS ---
    {
        id: 7, nombre: "Tacos al Pastor Tradicional", categoria: "clasicos", precio: 75.00,
        descripcion: "Los reyes de la casa. Tres tacos de cerdo marinado lentamente en nuestro trompo especial.",
        ingredientes: "Carne de cerdo marinada, piña, cebolla, cilantro y salsa roja de la casa.",
        imagen: "img/c_pastor.jpg"
    },
    {
        id: 8, nombre: "Enchiladas Divorciadas", categoria: "clasicos", precio: 90.00,
        descripcion: "Tres tortillas rellenas de pollo, dos bañadas en salsa verde y una en salsa roja.",
        ingredientes: "Tortillas de maíz, pollo, salsa verde, salsa roja, crema, queso fresco y cebolla.",
        imagen: "img/c_enchiladas.jpg"
    },
    {
        id: 9, nombre: "Gringas de Bistec", categoria: "clasicos", precio: 85.00,
        descripcion: "Tortillas de harina con queso derretido y bistec de res picado a la plancha.",
        ingredientes: "Tortilla de harina, queso asadero, bistec de res, cebolla y cilantro.",
        imagen: "img/c_gringas.jpg"
    },
    // --- INFANTIL ---
    {
        id: 10, nombre: "Taquitos Mini Carnal", categoria: "infantil", precio: 50.00,
        descripcion: "Dos tacos suaves de pollo deshebrado o carne asada, sin nada de picante.",
        ingredientes: "Tortilla de maíz, pollo o res, y una porción pequeña de papas fritas.",
        imagen: "img/i_taquitos.jpg"
    },
    {
        id: 11, nombre: "Quesadillitas de la Abuela", categoria: "infantil", precio: 45.00,
        descripcion: "Dos mini quesadillas de harina dobladas, perfectas para los más pequeños.",
        ingredientes: "Tortilla de harina y queso mozzarella derretido (sin verduras).",
        imagen: "img/i_quesadillitas.jpg"
    },
    {
        id: 12, nombre: "Deditos de Pollo Chidos", categoria: "infantil", precio: 55.00,
        descripcion: "Tiras de pechuga de pollo crujientes acompañadas de papas fritas y salsa cátsup.",
        ingredientes: "Pechuga de pollo empanizada, papas a la francesa y cátsup.",
        imagen: "img/i_deditos.jpg"
    },
    // --- BEBIDAS ---
    {
        id: 13, nombre: "Margarita Calavera", categoria: "bebidas", precio: 60.00,
        descripcion: "Nuestra margarita insignia con tequila reposado, licor de naranja y frutos rojos.",
        ingredientes: "Tequila, licor de naranja, pulpa de mora/fresa, limón y borde de chamoy con tajín.",
        imagen: "img/b_margarita.jpg"
    },
    {
        id: 14, nombre: "Agua de Horchata Suprema", categoria: "bebidas", precio: 35.00,
        descripcion: "Bebida tradicional de arroz y leche, súper fría con un toque de vainilla y canela.",
        ingredientes: "Agua de arroz, leche condensada, canela, vainilla y mucho hielo.",
        imagen: "img/b_horchata.jpg"
    },
    {
        id: 15, nombre: "Michelada La Cantina", categoria: "bebidas", precio: 50.00,
        descripcion: "Cerveza nacional preparada con nuestro mix secreto de salsas negras y limón.",
        ingredientes: "Cerveza, jugo de limón, salsa inglesa, jugo maggi, clamato y chile en polvo.",
        imagen: "img/b_michelada.jpg"
    },
    {
        id: 16, nombre: "Jarrito Loco", categoria: "bebidas", precio: 40.00,
        descripcion: "Refresco de toronja servido en cantarito de barro con jugo de naranja y limón.",
        ingredientes: "Refresco de toronja, jugo de naranja, jugo de limón, sal y chile en polvo.",
        imagen: "img/b_jarrito.jpg"
    }
];