const express = require('express');
const userController = require('../Controllers/userController');

const router = express.Router();

// Rutas para Bomberos
router.get('/bomberos', userController.getAllBomberos);
router.post('/bomberos', userController.addBomberos);
router.put('/bomberos/:id', userController.updateBomberos);
router.delete('/bomberos/:id', userController.deleteBomberos);

// Rutas para Informes
router.get('/informes', userController.getInformes);

// Rutas para Partes
router.get('/partes', userController.getAllPartes);
router.post('/partes', userController.addPartes); // Suponiendo que tienes una función addPartes en el controlador
router.put('/partes/:id', userController.updateParte);

// Rutas para Claves de Despacho
router.get('/claves-despacho', userController.getAllClavesDespacho);

// Rutas para Clave Recurso
router.get('/clave-recurso', userController.getAllClaveRecurso);

// Rutas para Maquinistas
router.get('/maquinistas', userController.getAllMaquinistas);

// Rutas para Maquinas (Unidades de Despacho)
router.get('/maquinas', userController.getAllMaquinas);
router.get('/UnidadApoyo', userController.getAllUnidadExterna);

// Rutas para añadir datos


router.post('/involucrados', userController.addInvolucrados);
router.post('/unidad-despacho', userController.addUnidadDespacho);
router.post('/recurso', userController.addRecurso);
router.post('/apoyo', userController.addApoyo);
router.post('/vehiculo', userController.addVehiculo);
router.post('/monitoreo', userController.addMonitoreo);


// Rutas para Licencias, Comisiones y Suspensiones
router.post('/licencia', userController.addLicencia);
router.post('/suspension', userController.addSuspension);

// ... Y así sucesivamente para cada función en tu controlador ...

module.exports = router;