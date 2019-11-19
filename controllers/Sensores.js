'use strict';

var utils = require('../utils/writer.js');
var Sensores = require('../service/SensoresService');

module.exports.getConexion = function getConexion (req, res, next) {
  var sensoresId = req.swagger.params['sensoresId'].value;
  Sensores.getConexion(sensoresId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getParametersSensor = function getParametersSensor (req, res, next) {
  var sensoresId = req.swagger.params['sensoresId'].value;
  Sensores.getParametersSensor(sensoresId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getParametersSensorbyTimeStamp = function getParametersSensorbyTimeStamp (req, res, next) {
  var sensoresId = req.swagger.params['sensoresId'].value;
  var timeStamp = req.swagger.params['timeStamp'].value;
  Sensores.getParametersSensorbyTimeStamp(sensoresId,timeStamp)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getUbicacion = function getUbicacion (req, res, next) {
  var sensoresId = req.swagger.params['sensoresId'].value;
  Sensores.getUbicacion(sensoresId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
