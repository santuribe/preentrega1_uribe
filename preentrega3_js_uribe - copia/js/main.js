/* Sue electronics - CARRITO DE COMPRAS */

//1) Creando la clase producto

class Producto {
    constructor(id, nombre, precio, img) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.img = img;
        this.cantidad = 1;
    }
}

//2) Creando los productos

const sueDelay = new Producto(1, "Delay Flamma", 43900, "img/analogdelayflamma.jpg");
const sueBoost = new Producto(2, "Boost Blackstar", 33900, "img/boostblack.jpg");
const sueChorus = new Producto(3, "Chorus Nux", 23900, "img/chorusnux.jpg");
const sueCompressor = new Producto(4, "Compressor Behringer", 23900, "img/compressorsust.jpg");
const sueGraphic = new Producto(5, "Graphic Equalizer Behringer", 73900, "img/graphiceq.jpg");
const sueHotone = new Producto(6, "Hotone Wood", 23900, "img/hotonewood.jpg");
const sueLoop = new Producto(7, "Loop Flamma", 27900, "img/loopflamma.jpg");
const sueMetal = new Producto(8, "Metal Blackstar", 27900, "img/metalblackstar.jpg");
const sueMulti = new Producto(9, "MultiFx Behringer", 119000, "img/multifxbeh.jpg");
const sueOverdrive = new Producto(10, "Overdrive Flamma", 24990, "img/overdriveflamma.jpg");
const sueReverb = new Producto(11, "Reverb Flamma", 34900, "img/reverbflamma.jpg");

//3) Creando el array con el catalogo de productos

const productos = [sueDelay, sueBoost, sueChorus, sueCompressor, sueGraphic, sueHotone, sueLoop, sueMetal, sueMulti, sueOverdrive, sueReverb]

//4) Creando el array vacio para el carrito

let carrito = [];

/* Cargando Carrito desde el LocalStorage en caso de que haya información en él */
if (localStorage.getItem("carrito")) {
    carrito = JSON.parse(localStorage.getItem("carrito"));
}

//5) Modificando el DOM para mostrando los productos

const ProductosSue = document.getElementById("ProductosSue");

//6) Creando la función para mostrar los productos

const verProductos = () => {
    productos.forEach(Producto => {
        const card = document.createElement("div");
        card.classList.add("col-xl-3", "col-md-6", "col-sm-12");
        card.innerHTML =
            `
      <div class ="card rounded-4">
        <img src = "${Producto.img}" class = "card-img-top imgProductos" alt="${Producto.nombre}">
        <div class="contenedorDescripcion">
          <h2 class="text-center"> ${Producto.nombre} </h2>
          <p class="text-center"> $${Producto.precio} </p>
          <button class="btn botonCards" id="boton${Producto.id}"> Agregar al Carrito </button>
        </div>
      </div>
      `
        ProductosSue.appendChild(card);

        //7) Pusheando los productos al array vacío
        const boton = document.getElementById(`boton${Producto.id}`);
        boton.addEventListener("click", () => {
            agregarProducto(Producto.id);
        })
    })
}

verProductos();

//8) Creando la funcion agregar producto

const agregarProducto = (id) => {
    const busquedaProducto = carrito.find(Producto => Producto.id === id);
    if (busquedaProducto) {
        busquedaProducto.cantidad++;
    } else {
        const producto = productos.find(Producto => Producto.id === id);
        carrito.push(producto);
    }
    calcularTotal();
    //Trabajamos con el localStorage:
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

//9) Mostrando el carrito de compras

const carritoCointainer = document.getElementById("carritoCointainer");
const mostrarCarrito = document.getElementById("mostrarCarrito");

mostrarCarrito.addEventListener("click", () => {
    verCarrito();
})

const verCarrito = () => {
    carritoCointainer.innerHTML = "";
    carrito.forEach(Producto => {
        const card = document.createElement("div");
        card.classList.add("col-xl-3", "col-md-6", "col-sm-12");
        card.innerHTML =
            `
      <div class ="card rounded-4">
        <img src = "${Producto.img}" class = "card-img-top imgProductos" alt="${Producto.nombre}">
        <div class="contenedorDescripcion">
          <h2 class="text-center"> ${Producto.nombre} </h2>
          <p class="text-center"> $${Producto.precio} </p>
          <p class="text-center"> ${Producto.cantidad} </p>
          <button class="btn botonCards" id="eliminar${Producto.id}"> Eliminar </button>
        </div>
      </div>
      `
        carritoCointainer.appendChild(card);

        //10) Habilitando el botón eliminar productos desde el carrito
        const boton = document.getElementById(`eliminar${Producto.id}`);
        boton.addEventListener("click", () => {
            eliminarProducto(Producto.id);
        })
    })
    calcularTotal();
}

//11) Declarando función que elimina el producto del carrito

const eliminarProducto = (id) => {
    const producto = carrito.find(Producto => Producto.id === id);
    const indice = carrito.indexOf(producto);
    carrito.splice(indice, 1);
    verCarrito();

    //Trabajamos con el localStorage:
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

//12) Calculando el total de la compra

const total = document.getElementById("total");

const calcularTotal = () => {
    let totalCompra = 0;
    carrito.forEach(Producto => {
        totalCompra += Producto.precio * Producto.cantidad;
    })
    total.innerHTML = `$ ${totalCompra}`;
}

//13) Vaciando todo el carrito

const vaciarCarrito = document.getElementById("vaciarCarrito");

vaciarCarrito.addEventListener("click", () => {
    vaciarCarritoCompleto();
})

const vaciarCarritoCompleto = () => {
    carrito = [];
    verCarrito();

    //Limpiando el localStorage:
    localStorage.clear();
}
