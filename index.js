const express =  require('express');
const morgan  = require('morgan');
const app = express();
const pokemon = require('./routes/pokemon');

//FUNCIONES PARA EXPRESAR PETICIONES
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

/* VERBOS HTTP - MODELO REST
GET - OBTENER RECURSOS
POST - ALMACENAR RECURSOS
PATCH - MODIFICAR UNA PARTE DE UN RECURSO
PUT - MODIFICAR UN RECURSO
DELETE - BORRAR UN RECURSO
*/

app.get("/", (req, res, next) =>{
    return res.status(200).json({code: 1, message: "Bienvenido al Pokédex"})
});

app.use("/pokemon", pokemon);

app.use((req,res,next) => {
    return res.status(404).json({code: 404, message: "URL no encontrada"})
});

app.listen(process.env.PORT || 3000, ()=>{
    console.log("server is running...");
});