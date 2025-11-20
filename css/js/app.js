// Productos de ejemplo
const productos = [
  { id: 1, nombre: "Audífonos Bluetooth", precio: 19990, img: "https://picsum.photos/id/180/400" },
  { id: 2, nombre: "Teclado Gamer", precio: 24990, img: "https://picsum.photos/id/1080/400" },
  { id: 3, nombre: "Mouse Inalámbrico", precio: 9990, img: "https://picsum.photos/id/1060/400" }
];

// Render Home
const contenedor = document.getElementById("productos");
if (contenedor) {
  productos.forEach(p => {
    contenedor.innerHTML += `
      <div class="card">
        <img src="${p.img}" />
        <h3>${p.nombre}</h3>
        <p>$${p.precio}</p>
        <a class="btn" href="producto.html?id=${p.id}">Ver Detalle</a>
      </div>
    `;
  });
}

// Render Detalle
const params = new URLSearchParams(window.location.search);
const id = params.get("id");
const detalle = document.getElementById("detalle-producto");

if (detalle && id) {
  const p = productos.find(x => x.id == id);
  detalle.innerHTML = `
    <h2>${p.nombre}</h2>
    <img src="${p.img}" style="width:100%; border-radius:8px;">
    <p><strong>Precio:</strong> $${p.precio}</p>
    <button class="btn">Agregar al carrito</button>
  `;
}
