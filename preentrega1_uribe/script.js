// SIMULADOR INTERACTIVO PRIMERA PRE-ENTREGA


let alumno = String(prompt("Ingrese el nombre del alumno"))


function calcularNotaFinal(nota1, nota2, nota3) {

    let notaFinal = (nota1 + nota2 + nota3) / 3;

    return notaFinal.toFixed(2);
}

// Bucle para pedir las cuatro notas del alumno

for (let i = 1; i <= 4; i++) {

    let nota = parseFloat(prompt("Ingresa la nota del desafio " + i + " de " + alumno + ":"));


    if (nota < 0 || nota > 10) {
        alert("La nota debe estar entre 0 y 10");
        nota = parseInt(prompt("Ingresa la nota del desafio " + i + " de " + alumno + ":"));
    }


    else if (i === 1) {
        var nota1 = nota;
    } else if (i === 2) {
        var nota2 = nota;
    } else {
        var nota3 = nota;
    }
}

let notaFinal = calcularNotaFinal(nota1, nota2, nota3);

//nota final del alumno por pantalla

if (notaFinal <= 7) {

    alert("La nota final de " + alumno + " es: " + notaFinal + ". A reprobado, debe reforzar");

} else if (notaFinal >= 8 & notaFinal <= 10) {

    alert("La nota final de " + alumno + " es: " + notaFinal + ". Aprobado, que buen trabajo");
}
