// const {frutas, dinero} = require("./math");
// const cowsay = require("cowsay");

// frutas.forEach(item => {
//     console.log(item);
// })

// console.log(dinero);

// console.log(cowsay.say({
// 	text : "HEHEHEEHEHE",
// 	e : "oO",
// 	T : "U "
// }));

// // Funciones flecha - si son mas de 2 parametros va con ()
// const Just = numero => {
//     return numero
// }
// let NN = Just(330);
// console.log(NN);

// const mul = (num1,  num2 = 0) => (num1 * num2);
// var mulT = mul(2,2) + 2;
// console.log(mulT);

// var mulT2 = mul(2) + 2;
// console.log("mul 2: ",mulT2);

// const mensaje = nombre => 'Hola ' + nombre + ' Hpta'
// var saludo = mensaje("Loca")
// console.log(saludo);

// // Template String (``)
// const dato = (num, num2 = 2) => `El numero es: ${num * num2}`
// var fulldat = dato(77,4)
// console.log(fulldat);

// // Objetos
// const mascota = {
//     nombreM: "Raw",
//     edadM: 10,
//     dangerous: true,
//     colores: ["Blanco","Gris","Negro"]
// }

// console.log(mascota);
// console.log(mascota.edadM);
// console.log(mascota.dangerous);
// mascota.id = 1001;
// console.log(mascota);
// console.log(mascota.colores[1]);

// // Destructuring Objects
// const {edadM, dangerous} = mascota
// console.log(dangerous);

// // Array de Objetos
// const web = {
//     nombre: "Zwebb",
//     links: {
//         enlace: "www.google.com"
//     },
//     redesSociales: {
//         youtube:{
//             enlace: "WWWWWW",
//             nombre: "Zyoutube"
//         },
//         facebook: {
//             enlace: "fb WWWWW",
//             nombre: "FaceZ"
//         }
//     }
// }

// console.log(web.redesSociales.youtube.enlace)
// const obtEn = web.redesSociales.facebook.enlace
// console.log(obtEn);

// const {enlace, nombre} = web.redesSociales.facebook
// console.log(nombre);

// Fetch API
const fetch = require("node-fetch")
// fetch("https://pokeapi.co/api/v2/pokemon/")
//     .then(res => res.json())
//     .then(data => {
//         // console.log(data.results);
//         data.results.forEach(element => {
//             console.log(element.name);
//         });
// })
// .catch(error => console.log(error))

// // Async & Await
// const obtenerPokemones = async() => {
//     try {
//         const res = await fetch("https://pokeapi.co/api/v2/pokemon/")
//         const data = await res.json()
//         // console.log(data.results)

//         // // Map (crea un array)
//         // const arrayNombres = data.results.map(poke => poke.url)
//         // console.log(arrayNombres);
        
//         // Filter (manda en array)
//         const soloN = data.results.filter(poke => poke.name !== "bulbasaur")
//         console.log(soloN);
//     } catch (error) {
//         console.log(error);
//     }
// }

// obtenerPokemones()

// // Fundamentos de servidor HTTP
// const http = require("http");
// const server = http.createServer((req, res) => {
//     res.end("Estoy respondiendo a tu solicitud v3")
// })

// const puerto = 3000

// server.listen(puerto, () => {
//     console.log("Escuchando solicitudes");
// })

// Express.js


const express = require("express");
const app = express();
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
const port = process.env.PORT || 3000;

app.use(express.static(__dirname + "/public"))

app.get("/", (req, res) => {
    res.render("index", {titulo: "mi titulo dinamico"})
})

app.get("/servicios", (req, res) =>{
    res.render("servicios", 
    {tituloServicios: "Este es un mensaje dinamico de servicios"})
})

app.use((req, res, next) => {
    res.status(404).render("404", {
        titulo: "404",
        descripcion: "ERROR 404 PAGE NOT FOUND HEHEHE :)"
    })
})

app.listen(port, () =>{
    console.log("servidor a su servicio en el puerto: ", port);
})