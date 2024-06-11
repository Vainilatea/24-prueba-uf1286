function generarArrayBidimensional() {
  function generarArray() {
    return [Math.floor(Math.random() * 10)]
  }

  var array = [];
  for (var i = 0; i < 10; i++) {
    array.push(generarArray());
  }
  return array;
}

function mostrarArrayBidimensional(arrayBidimensional) {
  function mostrarArray(array) {
    array.forEach (function (elemento) {
      var formatedElemento = (" " + elemento).slice(-2);
      process.stdout.write(`| ${formatedElemento} `);
    });
    console.log(array);
  }

  function mostrarLinea() {
    for (var i = 0; i < 15; i++) {
      process.stdout.write("-");
    }
    console.log("-");
  }

  mostrarLinea();
  arrayBidimensional.forEach(function (array) {
    mostrarArray(array);
    mostrarLinea();
  });
}

mostrarArrayBidimensional(generarArrayBidimensional());
