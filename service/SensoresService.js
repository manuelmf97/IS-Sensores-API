'use strict';
const net    = require('net');
const apikey = "1d7466f3-9a6b-49a4-91ed-beea68bf9126";

/**
 * Conocer conexion de un sensor identificado por ID
 * Devuelve estado de la conexion del sensor
 *
 * sensoresId Integer Id del sensor del que obtener informacion
 * no response value expected for this operation
 **/
exports.getConexion = function(sensoresId) {
  return new Promise(function(resolve, reject) {
    var error = Math.round( Math.random() * (10 - 1) + 1 );
    if(error == 1 || error == 2){
        var socket = net.createConnection(2003, "carbon.hostedgraphite.com", function() {
          socket.write(apikey + ".sensores.conexion.error1 1\n");
          socket.end();
        });
    }else{
     error = Math.random() * (10 - 1) + 1;
     if(error <= 1.5){
          var socket1 = net.createConnection(2003, "carbon.hostedgraphite.com", function() {
            socket.write(apikey + ".sensores.conexion.error2 1\n");
            socket.end();
        });
     }
    }
    var examples = {};
    var conexion;
    var random = Math.random();
    random =  Math.round(random);
    if(random == 0){
      conexion = false;
    }else{
      conexion = true;
    }
    examples['application/json'] ={
      "conexion" : conexion
      };
    resolve(examples[Object.keys(examples)[0]]);
  });
}


/**
 * Encontrar parametros de un sensor identificado por ID
 * Devuelve parametros de un unico sensor
 *
 * sensoresId Long Id del sensor del que obtener informacion
 * no response value expected for this operation
 **/
exports.getParametersSensor = function(sensoresId) {
  return new Promise(function(resolve, reject) {
    var time1 = Date.now();
    var time2;
    var totalTime;
    var examples = {};
    var parameter;
    if(sensoresId == 0){
      parameter = Math.round(Math.random() * (180 - 50) + 50);
      examples['application/json'] = {
        "Bpm" : parameter
      };
      time2 = Date.now();
      totalTime = time2 - time1;
      var socket = net.createConnection(2003, "carbon.hostedgraphite.com", function() {
        socket.write(apikey + ".sensores.parameter "+ String(totalTime) +"\n");
        socket.end();
      });
      resolve(examples[Object.keys(examples)[0]]);
    }else{
      if(sensoresId == 1){
        parameter = Math.round(Math.random() * (99 - 95) + 95);
        examples['application/json'] = {
          "Oxygen(%)" : parameter
        };
        time2 = Date.now();
        totalTime = time2 - time1;
        var socket1 = net.createConnection(2003, "carbon.hostedgraphite.com", function() {
          socket1.write(apikey + ".sensores.parameter "+ String(totalTime) +"\n");
          socket1.end();
        });
        resolve(examples[Object.keys(examples)[0]]);
      }
    }
    time2 = Date.now();
    totalTime = time2 - time1;
    var socket2 = net.createConnection(2003, "carbon.hostedgraphite.com", function() {
        socket2.write(apikey + ".sensores.parameter "+ String(totalTime) +"\n");
        socket2.end();
    });
    resolve();
  });
}


/**
 * Encontrar parametros de un sensor identificado por ID
 * Devuelve parametros cardiacos de un unico sensor
 *
 * sensoresId Integer Id del sensor del que obtener informacion
 * timeStamp String timeStamp del momento del que se quiere obtener informacion
 * no response value expected for this operation
 **/
exports.getParametersSensorbyTimeStamp = function(sensoresId,timeStamp) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    var parameter;
    if(sensoresId == 0){
      parameter = Math.round(Math.random() * (180 -50) + 50);
      examples['application/json'] = {
        "Bpm" : parameter
      };
      resolve(examples[Object.keys(examples)[0]]);
    }else{
      if(sensoresId == 1){
        parameter = Math.round(Math.random() * (99 -95) + 95);
        examples['application/json'] = {
          "Oxygen(%)" : parameter
        };
        resolve(examples[Object.keys(examples)[0]]);
      }
    }
    resolve();
  });
}
  

/**
 * Encontrar ubicacion del dispositivo
 * Devuelve la posicion del sensor GPS
 *
 * sensoresId Integer Id del sensor del que obtener informacion
 * returns List
 **/
exports.getUbicacion = function(sensoresId) {
  return new Promise(function(resolve, reject) {
    var time1 = Date.now();
    var examples = {};
    examples['application/json'] = {
      "latitud" : 0.8008281904610115,
      "longitud" : 6.027456183070403
    };
    var time2 = Date.now();
    var totalTime = time2 - time1;
    var socket = net.createConnection(2003, "carbon.hostedgraphite.com", function() {
      socket.write(apikey + ".sensores.ubicacion "+ String(totalTime) +"\n");
      socket.end();
    });
    resolve(examples[Object.keys(examples)[0]]);
  });
}
