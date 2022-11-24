//DEPENDENCIES
const morgan  = require('morgan');
const express =  require('express');
const app = express();
//ROUTERS
const pokemon = require('./routes/pokemon');
const user = require('./routes/user');
//MIDDLEWARE
const auth = require('./middleware/auth');
const notFound = require('./middleware/notFound');
const index = require('./middleware/index');

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

app.get("/", index);

app.use("/user", user);

app.use(auth);

app.use("/pokemon", pokemon);

app.use(notFound);

app.listen(process.env.PORT || 3000, ()=>{
    console.log("server is running...");
});