
const userModel = require('../models/userModel');

// Obtener todos los Bomberos
exports.getAllBomberos = async (req, res) => {
    try {
        const bomberos = await userModel.getAllBomberos();
        res.json(bomberos);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Obtener todos los informes
exports.getInformes = async (req, res) => {
    try {
        const informes = await userModel.getInformes();
        res.json(informes);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Obtener todos los Partes
exports.getAllPartes = async (req, res) => {
    try {
        const partes = await userModel.getAllPartes();
        res.json(partes);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Modificar un Parte
exports.updateParte = async (req, res) => {
    try {
        await userModel.updateParte(req.params.id, req.body);
        res.json({ message: 'Parte actualizado exitosamente' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Modificar un Bombero
exports.updateBomberos = async (req, res) => {
    try {
        await userModel.updateBomberos(req.params.id, req.body);
        res.json({ message: 'Bombero actualizado exitosamente' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Borrar un Bombero
exports.deleteBomberos = async (req, res) => {
    try {
        await userModel.deleteBomberos(req.params.id);
        res.json({ message: 'Bombero eliminado exitosamente' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


// Añadir un Bombero
exports.addBomberos = async (req, res) => {
    try {
        const newBombero = await userModel.addBomberos(req.body);
        res.status(201).json(newBombero);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};




// Obtener Claves de despacho
exports.getAllClavesDespacho = async (req, res) => {
    try {
        const clavesDespacho = await userModel.getAllClavesDespacho();
        res.json(clavesDespacho);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Obtener clave Recursos
exports.getAllClaveRecurso = async (req, res) => {
    try {
        const clavesRecurso = await userModel.getAllClaveRecurso();
        res.json(clavesRecurso);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Obtener Maquinas
exports.getAllMaquinas = async (req, res) => {
    try {
        const Maquinas = await userModel.getAllMaquinas();
        res.json(Maquinas);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Obtener Maquinas
exports.getAllUnidadExterna = async (req, res) => {
    try {
        const UnidadApoyo = await userModel.getAllUnidadExterna();
        res.json(UnidadApoyo);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


// Obtener Maquinistas
exports.getAllMaquinistas = async (req, res) => {
    try {
        const Maquinistas = await userModel.getAllMaquinistas();
        res.json(Maquinistas);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Añadir un Parte
exports.addPartes = async (req, res) => {
    try {
        const newParte = await userModel.addPartes(req.body);
        res.status(201).json(newParte);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Añadir un Involucrados
exports.addInvolucrados = async (req, res) => {
    try {
        const newInvolucrado = await userModel.addInvolucrados(req.body);
        res.status(201).json(newInvolucrado);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Añadir un Unidad de despacho
exports.addUnidadDespacho = async (req, res) => {
    try {
        const newUnidadDespacho = await userModel.addUnidadDespacho(req.body);
        res.status(201).json(newUnidadDespacho);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Añadir un Recurso
exports.addRecurso = async (req, res) => {
    try {
        const newRecurso = await userModel.addRecurso(req.body);
        res.status(201).json(newRecurso);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Añadir un Apoyo
exports.addApoyo = async (req, res) => {
    try {
        const newApoyo = await userModel.addApoyo(req.body);
        res.status(201).json(newApoyo);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Añadir un Vehiculos
exports.addVehiculo = async (req, res) => {
    try {
        const newApoyo = await userModel.addVehiculo(req.body);
        res.status(201).json(newApoyo);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Añadir un Monitoreo
exports.addMonitoreo = async (req, res) => {
    try {
        const newApoyo = await userModel.addMonitoreo(req.body);
        res.status(201).json(newApoyo);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// // Añadir un Unidad de despacho
// exports.addUnidadDespacho = async (req, res) => {
//     try {
//         const newApoyo = await userModel.addUnidadDespacho(req.body);
//         res.status(201).json(newApoyo);
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// };

////// Aqui estas todavia no se implementan

// Añadir licencias
exports.addLicencia = async (req, res) => {
    try {
        const newLicencia = await userModel.addLicencia(req.body);
        res.status(201).json(newLicencia);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Añadir suspensiones
exports.addSuspension = async (req, res) => {
    try {
        const newSuspension = await userModel.addSuspension(req.body);
        res.status(201).json(newSuspension);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

