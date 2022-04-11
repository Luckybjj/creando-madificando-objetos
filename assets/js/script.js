
// DESAFÍO CREANDO Y MODIFICANDO OBJETOS

// 1) CREAR FUNCIÓN CONSTRUCTORA PACIENTE
function Paciente(nombre, edad, rut, diagnostico) {
    //a.- Asignámos el valor de los parámetros
    var _nombre = nombre;
    var _edad = edad;
    var _rut = rut;
    var _diagnostico = diagnostico;

    // ENCAPSULAMIENTO DE LA FUNCIÓN CONSTRUCTORA PACIENTE
    // b.- Implementamos método Object.defineProperty
    // c. Inicializamos la propiedades
    // d.- Función get y set

    Object.defineProperty(this, "_nombre", {
        // .-Función get (retorno)
        get: function () {
            return _nombre;
        },
        // .- Función set (asignación)
        set: function (nuevoNombre) {
            _nombre = nuevoNombre;
        }
    });


    Object.defineProperty(this, "_edad", {
        // .- Función ger (retorno)
        get: function () {
            return _edad;
        },
        // .- Función set (asignación)
        set: function (nuevaEdad) {
            _edad = nuevaEdad;
        }
    });


    Object.defineProperty(this, "_rut", {
        // .- Función set (retorno)
        get: function () {
            return _rut;
        },
        // .- Función set (asignación)
        set: function (nuevoRut) {
            _rut = nuevoRut;
        }
    });

    Object.defineProperty(this, "_diagnostico", {
        // .- Función get (retorno)
        get: function () {
            return _diagnostico;
        },
        // .- Función set (asignación)
        set: function (nuevoDiagnostico) {
            _diagnostico = nuevoDiagnostico;
        }
    });
}

// 2.-  CREAR FUNCIÓN CONSTRUCTURA CONSULTORIO

function Consultorio(nombre, paciente) {
    var _nombre = nombre;
    var _paciente = paciente;

    //.- ENCAPSULAMIENTO DE LA FUNCIÓN COSTRUCTORA CONSULTORIO

    Object.defineProperty(this, "_nombre", {
        get: function () {
            return _nombre
        },
        set: function (nuevoNombre) {
            _nombre = nuevoNombre;
        }
    });

    Object.defineProperty(this, "_paciente", {
        get: function () {
            return _paciente
        },
        set: function (nuevoPaciente) {
            _paciente = nuevoPaciente;
        }
    });
}

// 3.- AGREGAR MÉTODOS y FUNCIONALIDADES MEDIANTE LA PROPIEDAD PROTOTYPE

// .- PACIENTE
// Retornar nombre
Paciente.prototype.getNombre = function () {
    return this._nombre;
};
// Modificar o asignar nombre
Paciente.prototype.setNombre = function (nuevoNombre) {
    this._nombre = nuevoNombre;
};
// Retornar edad
Paciente.prototype.getEdad = function () {
    return this._edad;
};
// Modificar o asignar edad
Paciente.prototype.setEdad = function (nuevaEdad) {
    this._edad = nuevaEdad;
};
// Retornar rut
Paciente.prototype.getRut = function () {
    return this._rut;
};
// Modificar o asignar rut
Paciente.prototype.setRut = function (nuevoRut) {
    this._rut = nuevoRut;
};
// Retornar diagnostico
Paciente.prototype.getDiagnostico = function () {
    return this._diagnostico;
};
// Modificar o asignar diagnostigo
Paciente.prototype.setDiagnostico = function (nuevoDiagnostico) {
    this._diagnostico = nuevoDiagnostico;
};

// .- CONSULTORIO
// Retornar nombre del Consultorio
Consultorio.prototype.getNombre = function () {
    return this._nombre;
};
// Modificar o asignar nombre del Consultorio
Consultorio.prototype.setNombre = function (nuevoNombre) {
    this._nombre = nuevoNombre;
};

// MOSTRAR PACIENTES 
Consultorio.prototype.mostrarPacientes = function () {
    this._paciente.forEach(function (paciente) {
        console.log(
            "\nNombre: " + paciente._nombre +
            "\nEdad: " + paciente._edad +
            "\nRut: " + paciente._rut +
            "\nDiagnostico: " + paciente._diagnostico + "\n\n"
        );

    });
}

// BUSCAR PACIENTES POR SU NOMBRE
Consultorio.prototype.buscarPaciente = function (nombre) {
    this._paciente.filter(function (paciente) {
        return paciente._nombre == nombre;
    }).forEach(function (paciente) {
        console.log(
            "\nPaciente Encontrado" +
            "\n    Nombre: " + paciente._nombre +
            "\n    Edad: " + paciente._edad +
            "\n    Rut: " + paciente._rut +
            "\n    Diagnostico: " + paciente._diagnostico + "\n\n");
    });

    var encontrado = false
    this._paciente.forEach(function (paciente) {
        if (paciente._nombre == nombre) {
            encontrado = true
        }
    })
    if (encontrado == false) {
        console.log("\nEl paciente " + nombre + " no se encuentra listado en este consultorio\n\n");
    }
};


// 4.- INSTANCIAR LOS OBJETOS
// Pacientes
var p1 = new Paciente("Juan Perez", 35, "16.439.877-5", "sirrosis");
console.log(p1);
var p2 = new Paciente("Pedro Toro", 25, "13.439.437-9", "resfrio común");
console.log(p2);
var p3 = new Paciente("Diego Alves", 55, "9.789.743-5", "covid-19");
console.log(p3);
var p4 = new Paciente("Camilo Rojas", 23, "23.439.877-5", "colera");
console.log(p4);
var p5 = new Paciente("Andres Gatica", 21, "24.439.877-5", "gripe porcina");
console.log(p4);

// Consultrorio
var c1 = new Consultorio("Clavo Makena", [p1, p2, p3, p4, p5]);
console.log(c1);


// 5.- PROBANDO LAS FUNCIONES

// Retorna el Nombre del Consultorio
console.log(c1.getNombre());
console.log()

// Retorna el Dato que se requiere del Paciente 1
console.log(p1.getNombre());
console.log(p1.getEdad());
console.log(p1.getRut());
console.log(p1.getDiagnostico());


// Retorna el Dato que se requiere del Paciente 3
console.log(p3.getNombre());
console.log(p3.getEdad());
console.log(p3.getRut());
console.log(p3.getDiagnostico());


// Modificar datos del Paciente 3
p3.setNombre('Carlos Miranda');
p3.setDiagnostico('Q.E.P.D ')
console.log(p3.getNombre());
console.log(p3.getDiagnostico());
console.log(p3)

// Modificar datos del Conslturio 1
c1.setNombre('Cesfam el Palomar');
console.log(c1.getNombre());
console.log(c1);

// Funcion MOSTRAR todos los pacientes del Consultorio(c1)
c1.mostrarPacientes();

// Funcion BUSCAR pacientes listados en el Consultorio(c1)
c1.buscarPaciente("Juan Perez")
c1.buscarPaciente("Andres Gatica");
c1.buscarPaciente("Carlos Miranda")
// Pacientes que no se encuentran listados
c1.buscarPaciente("Diego Alves"); //Este fue el paciente que se modifico en la linea 217
c1.buscarPaciente("Diego Maradona")
c1.buscarPaciente("Pedro Carcuro")









