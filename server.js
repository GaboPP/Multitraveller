/* Librerias */
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');

/* Incluimos la Api*/
const api = require('./server/api');

/*Crear App de Express*/
const app = express();

/* Parser para POST */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

/* Static Path */
app.use(express.static(path.join(__dirname, 'dist')));

/* Ruta para nuestra API */
app.use('/api/v1', api);

/* Todas las rutas no dirigidas a la API se las enviamos a angular */
app.get('*', (req, res) =>{
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

/* Setear el puerto donde se escucharán las peticiones */
const port = process.env.PORT || '3000';
app.set('port', port);

/* Levantamos el servidor */
const server = http.createServer(app);
server.listen(port,()=> console.log(`API corriendo en el puerto:${port}`));

///////////IO////////////////////
var io = require('socket.io')(server);

//socket.io atento a conexion usuaria:
io.on('connection', (socket) => {
    console.log('Un cliente se ha conectado');
    
    socket.on('disconnect', function(){
      console.log('user disconnected');
    });
    
    socket.on('add-message', (message, usuario,time) => {
      socket.broadcast.emit('message', {type:'new-message', text: message, user: usuario,timeSent:time});    
    });
  });



