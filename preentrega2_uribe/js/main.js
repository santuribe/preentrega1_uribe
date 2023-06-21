alert("Bienvenido a la mejor tienda de pedales")

function ingreseNombre () {
    let nameEmpty = prompt ("Ingresa tu nombre o apodo")
    if (nameEmpty === "") {
        ingreseNombre();
    }
    alert("El nombre que ingresaste es " + nameEmpty)
}

ingreseNombre ();


const opcion1 = { nombre: "Pedal Boss", tipo: "Distortion", precio: 100, id:1
}
const opcion2 = { nombre: "Pedal Fender", tipo: "Overdrive", precio: 200, id:2
}
const opcion3 = { nombre: "Pedal Danelectro", tipo: "Fuzz", precio: 50, id:3
}

const articulos = [opcion1, opcion2, opcion3];

const arrayProductos = [];

function elegirPedal() {

    let pedal;
        do {
        pedal = parseInt(prompt("Ingrese el pedal que deseas.\n\nEjemplo seleccione '1' para Boss.\n\n1- Boss\n2- Fender\n3- Danelectro"));
        
            } while (pedal !=1 && pedal !=2 && pedal !=3);
            switch(pedal){
                case 1:
                return (opcion1.nombre);
                case 2:
                return (opcion2.nombre);
                case 3:
                return (opcion3.nombre);
                

            default:
            console.log("Solo puedes elegir un número entre 1 y 3");
            alert("Solo puedes elegir un número entre 1 y 3");
            break;
        }
}

elegirPedal ()

alert("Elegiste el pedal" + pedal)