'use strict';


/**
 * Conocer conexion de un sensor identificado por ID
 * Devuelve estado de la conexion del sensor
 *
 * sensoresId Integer Id del sensor del que obtener informacion
 * no response value expected for this operation
 **/
exports.getConexion = function(sensoresId) {
  return new Promise(function(resolve, reject) {
    resolve();
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
    var examples = {};
    examples['application/json'] = [ {
  "latitud" : 0.2222,
  "longitud" : 0.4444
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}
