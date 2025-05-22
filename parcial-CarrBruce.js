
// Ejercicio 1


// use cafeteria; creo la base de datos


db.cafes_especiales.insertMany([
    // Documento 1
  {
    tipo: "espresso",
    ingredientes: ["chocolate", "canela"],
    peso_gramos: 250,
    intensidad: "alta",
    precio: [
      { tipo: "efectivo", precio: 500 },
      { tipo: "tarjeta", precio: 550 }
    ],
    contiene_leche: false,
    tostador: {
      localidad: "San Justo",
      nombre: "Tostado Sur",
      cuit: "30-12345678-9"
    }
  },
//   Documento 2
  {
    tipo: "cold brew",
    ingredientes: ["vainilla", "caramelo"],
    peso_gramos: 200,
    intensidad: "media",
    precio: [
      { tipo: "efectivo", precio: 600 },
      { tipo: "tarjeta", precio: 660 }
    ],
    contiene_leche: true,
    tostador: {
      localidad: "Santos Lugares",
      nombre: "Café del Norte",
      cuit: "30-87654321-0"
    }
  },
//   Documento 3
  {
    tipo: "filtrado",
    ingredientes: ["caramelo"],
    peso_gramos: 180,
    intensidad: "baja",
    precio: [
      { tipo: "efectivo", precio: 450 },
      { tipo: "tarjeta", precio: 500 }
    ],
    contiene_leche: false,
    tostador: {
      localidad: "San Telmo",
      nombre: "Barista Premium",
      cuit: "30-23456789-1"
    }
  },
//   Documento 4
  {
    tipo: "descafeinado",
    ingredientes: ["vainilla"],
    peso_gramos: 260,
    intensidad: "media",
    precio: [
      { tipo: "efectivo", precio: 480 },
      { tipo: "tarjeta", precio: 530 }
    ],
    contiene_leche: true,
    tostador: {
      localidad: "Mar del Plata",
      nombre: "Despierto Café",
      cuit: "30-98765432-5"
    }
  },
//   Documento 5
  {
    tipo: "cold brew",
    ingredientes: ["chocolate", "whisky"],
    peso_gramos: 300,
    intensidad: "alta",
    precio: [
      { tipo: "efectivo", precio: 700 },
      { tipo: "tarjeta", precio: 750 }
    ],
    contiene_leche: false,
    tostador: {
      localidad: "San Nicolás",
      nombre: "Gran Aroma",
      cuit: "30-45678901-2"
    }
  },
//   Document 6

 {
    tipo: "espresso",
    ingredientes: ["chocolate", "vainilla"],
    peso_gramos: 220,
    intensidad: "media",
    precio: [
      { tipo: "efectivo", precio: 520 },
      { tipo: "tarjeta", precio: 570 }
    ],
    contiene_leche: true,
    tostador: {
      localidad: "Santa Fe",
      nombre: "Finca Espresso",
      cuit: "30112233445"
    }
  },

// Docuemento 7
{
    tipo: "filtrado",
    ingredientes: ["canela"],
    peso_gramos: 240,
    intensidad: "media",
    precio: [
      { tipo: "efectivo", precio: 490 },
      { tipo: "tarjeta", precio: 540 }
    ],
    contiene_leche: false,
    tostador: {
      localidad: "San Rafael",
      nombre: "Monte Café",
      cuit: "30667788991"
    }
  },

// Documento 8
 {
    tipo: "descafeinado",
    ingredientes: ["caramelo", "chocolate"],
    peso_gramos: 210,
    intensidad: "baja",
    precio: [
      { tipo: "efectivo", precio: 470 },
      { tipo: "tarjeta", precio: 510 }
    ],
    contiene_leche: false,
    tostador: {
      localidad: "Córdoba",
      nombre: "Descafe Premium",
      cuit: "30998877663"
    }
  },
// Documento 9
  {
    tipo: "cold brew",
    ingredientes: ["vainilla", "whisky"],
    peso_gramos: 280,
    intensidad: "alta",
    precio: [
      { tipo: "efectivo", precio: 730 },
      { tipo: "tarjeta", precio: 790 }
    ],
    contiene_leche: true,
    tostador: {
      localidad: "San Martín",
      nombre: "Brew Bros",
      cuit: "30554433226"
    }
  },

// Documento 10
  {
    tipo: "espresso",
    ingredientes: ["chocolate", "caramelo"],
    peso_gramos: 190,
    intensidad: "alta",
    precio: [
      { tipo: "efectivo", precio: 510 },
      { tipo: "tarjeta", precio: 560 }
    ],
    contiene_leche: false,
    tostador: {
      localidad: "San Isidro",
      nombre: "Café del Bosque",
      cuit: "30123498765"
    }
  }

]);





//  Ejercicio 2
// 2) Buscar cuántos cafés contienen chocolate entre sus ingredientes.

db.cafes_especiales.find({
    ingredientes: { $in: ["chocolate"]}
})

// Ejercicio 3
// 3) Buscar cuántos cafés son de tipo “cold brew”· y contienen “vainilla” entre sus ingredientes.

db.cafes_especiales.find({
    tipo: "cold blew",
    ingredientes: { $in: ['vainilla']}
})

// Ejercicio 4
// 4) Listar tipo y peso de los cafés que tienen una intensidad “media”.

db.cafes_especiales.find(
    {intensidad: 'media'},
    {tipo: 1, peso_gramos: 1, _id:0},
)

// Ejercicio 5
// 5) Obtener tipo, peso e intensidad de los cafés cuyo peso se encuentre entre 200 y 260 inclusive

db.cafes_especial.find(
    {peso_gramo: { $gte: 200, $lte: 260}},
    {tipo: 1, peso_gramos: 1, intensidad: 1, _id:0},
)
// Ejercicio 6
// 6) Mostrar los cafés que fueron tostados en localidades que contengan “san”, permitiendo buscar por “san”
// y que se muestren también los de “santos”, “san justo”, etc. Ordenar el resultado por peso de manera
// descendente.

db.cafes_especiales.find(
  {
    "tostador.localidad": { $regex: "san", $options: "i" }
  }
).sort({ peso_gramos: -1 })


// Ejercicio 7
// 7) Mostrar la sumar del peso de cada tipo de Café.

db.cafes_especiales.aggregate([
   {
     $group: {
        _id: "$tipo",
        suma_peso: { $sum: "$peso_gramos"},
    }
   }
])


// Ejercicio 8
// 8) Agregar el ingrediente “whisky” todos los cafés cuya intensidad es alta.
db.cafes_especiales.updataeMany(
    {intensidad: 'alta'},
    {$addToSet: { ingredientes: "whisky"}},
)



// Ejercicio 9
// 9) Sumarle 10 al peso de los cafés cuyo peso se encuentre entre 200 y 260 inclusive.
db.cafes_especiales.updataeMany(
    {peso_gramos: { $gte: 200, $lte: 260}},
    {$inc: {peso_gramos: 10}},
)

// Ejercicio 10
// 10) Eliminar los cafés cuyo peso sea menor o igual a 210.

db.cafes_especiales.deleteMany(
    {peso_gramos: { $lte: 210}},
)