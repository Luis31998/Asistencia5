const db = require('./db');  // Asume que tienes un archivo 'db.js' para la conexión a la base de datos.

// Obtener todos los Bomberos
exports.getAllBomberos = () => {
    return new Promise((resolve, reject) => {
        db.query('SELECT * FROM BOMBERO', (error, results) => {
            if (error) reject(error);
            resolve(results);
        });
    });
};
// Obtener informes para mostrar
exports.getInformes = () => {
    return new Promise((resolve, reject) => {
        db.query('SELECT * FROM Informe', (error, results) => {
            if (error) reject(error);
            resolve(results);
        });
    });
};
// A Obtener partes para ver
exports.getAllPartes = () => {
    return new Promise((resolve, reject) => {
        db.query('SELECT * FROM PARTE', (error, results) => {
            if (error) reject(error);
            resolve(results);
        });
    });
};

// A MODIFICAR Modificar Partes
exports.updateParte = (id, data) => {
    return new Promise((resolve, reject) => {
        db.query('UPDATE PARTE SET ? WHERE id = ?', [data, id], (error, results) => {
            if (error) reject(error);
            resolve(results);
        });
    });
};

// A MODIFICAR Modificar Bomberos
exports.updateBomberos = (id, data) => {
    return new Promise((resolve, reject) => {
        db.query('UPDATE BOMBERO SET ? WHERE id = ?', [data, id], (error, results) => {
            if (error) reject(error);
            resolve(results);
        });
    });
};

//Borrar Bomberos
exports.deleteBomberos = (id) => {
    return new Promise((resolve, reject) => {
        db.query('DELETE FROM BOMBERO WHERE id = ?', [id], (error, results) => {
            if (error) reject(error);
            resolve(results);
        });
    });
};

// Obtener todos los claves de despacho
exports.getAllClavesDespacho = () => {
    return new Promise((resolve, reject) => {
        db.query('SELECT * FROM CLAVES_DESPACHO', (error, results) => {
            if (error) reject(error);
            resolve(results);
        });
    });
};

// Obtener todos los recursos o otras instituciones
exports.getAllClaveRecurso = () => {
    return new Promise((resolve, reject) => {
        db.query('SELECT * FROM CLAVE_RECURSO', (error, results) => {
            if (error) reject(error);
            resolve(results);
        });
    });
};

// Obtener todas las unidades o maquinas de despacho
exports.getAllMaquinas = () => {
    return new Promise((resolve, reject) => {
        db.query('SELECT * FROM UNIDAD', (error, results) => {
            if (error) reject(error);
            resolve(results);
        });
    });
};
// Obtener todas las unidades o maquinas de despacho
exports.getAllUnidadExterna = () => {
    return new Promise((resolve, reject) => {
        db.query('SELECT * FROM UNIDAD_EXTERNA', (error, results) => {
            if (error) reject(error);
            resolve(results);
        });
    });
};
// Obtener todos los Maquinista
exports.getAllMaquinistas = () => {
    return new Promise((resolve, reject) => {
        db.query('SELECT * FROM MAQUINISTA', (error, results) => {
            if (error) reject(error);
            resolve(results);
        });
    });
};

//// GUARDAR DATOS a PARTIR de AQUI

// Añadir bomberos
exports.addBomberos = (data) => {
    return new Promise((resolve, reject) => {
        db.query('INSERT INTO BOMBERO SET ?', data, (error, results) => {
            if (error) reject(error);
            resolve(results);
        });
    });
};

// Añadir o Guardar partes
exports.addPartes = (data) => {
    return new Promise((resolve, reject) => {
        db.query('INSERT INTO Parte SET ?', data, (error, results) => {
            if (error) reject(error);
            resolve(results);
        });
    });
};

// Añadir Involucrados
exports.addInvolucrados = (data) => {
    return new Promise((resolve, reject) => {
        db.query('INSERT INTO PARTE_INVOLUCRADO SET ?', data, (error, results) => {
            if (error) reject(error);
            resolve(results);
        });
    });
};

// Añadir Unidad de despacho
exports.addUnidadDespacho = (data) => {
    return new Promise((resolve, reject) => {
        db.query('INSERT INTO DESPACHO_UNIDAD SET ?', data, (error, results) => {
            if (error) reject(error);
            resolve(results);
        });
    });
};

// Añadir Recurso
exports.addRecurso = (data) => {
    return new Promise((resolve, reject) => {
        db.query('INSERT INTO RECURSO SET ?', data, (error, results) => {
            if (error) reject(error);
            resolve(results);
        });
    });
};

// Añadir Apoyo
exports.addApoyo = (data) => {
    return new Promise((resolve, reject) => {
        db.query('INSERT INTO APOYO SET ?', data, (error, results) => {
            if (error) reject(error);
            resolve(results);
        });
    });
};

// Añadir VEHICULOS
exports.addVehiculo = (data) => {
    return new Promise((resolve, reject) => {
        db.query('INSERT INTO VEHICULO SET ?', data, (error, results) => {
            if (error) reject(error);
            resolve(results);
        });
    });
};

// Añadir Monitoreo
exports.addMonitoreo = (data) => {
    return new Promise((resolve, reject) => {
        db.query('INSERT INTO MONITOREO SET ?', data, (error, results) => {
            if (error) reject(error);
            resolve(results);
        });
    });
};




//// Guardar LICENCIAS, COMISIONES Y SUSPENCIONES (TODAVIA NO ESTa)

// Añadir LICENCIA
exports.addLicencia = (data) => {
    return new Promise((resolve, reject) => {
        db.query('INSERT INTO LICENCIA SET ?', data, (error, results) => {
            if (error) reject(error);
            resolve(results);
        });
    });
};


// Añadir Suspenciones
exports.addSuspension = (data) => {
    return new Promise((resolve, reject) => {
        db.query('INSERT INTO SUSPENSION SET ?', data, (error, results) => {
            if (error) reject(error);
            resolve(results);
        });
    });
};
