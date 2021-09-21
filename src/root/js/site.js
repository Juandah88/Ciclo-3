window.onload = function () {

    doSomethingElse();
};

doSomethingElse = function () {


    let item1 = {
        Nombre: 'El profesor',
        Autor: 'Katzenbatch',
        Descripticion: '??????????????'
    }
    let item2 = {
        Nombre: 'Juegos de ingenio',
        Autor: 'Katzenbatch',
        Descripticion: '??????????????'
    }
    let item3 = {
        Nombre: 'El profesor',
        Autor: 'Katzenbatch',
        Descripticion: '??????????????'
    }

    let Libros = [item1, item2, item3]

    
    Libros.forEach(function (libro, indice, array) {
        let x = document.getElementById("tbLibros").rows.length;
        
        let fila = "<tr>" +
            + "<td>" + x + "</td>"
            + "<td>" + libro.Nombre + "</td>"
            + "<td>" + libro.Autor + "</td>"
            + "<td>" + libro.Descripticion + "</td>"
            + "</tr>";

        var tr = document.createElement("tr");
        tr.innerHTML = fila;
        document.getElementById("tbLibros").appendChild(tr);
    })
}
