
// DESAFÍO CREANDO Y MODIFICANDO OBJETOS

// 1) CREAR FUNCIÓN CONSTRUCTORA
function Paciente(nombre, edad, rut, diagnostico) {
    //a.- Asignámos el valor de los parámetros
    var _nombre = nombre;
    var _edad = edad;
    var _rut = rut;
    var _diagnostico = diagnostico;

    // ENCAPSULAMIENTO DE LA FUNCIÓN CONSTRUCTORA PACIENTE
    // b.- Implementamos método Object.define
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

// 2.- ENCAPSULAMIENTO DE LA FUNCIÓN COSTRUCTORA CONSULTORIO

function Consultorio (nombre, paciente){
    var _nombre = nombre;
    var _paciente =  paciente;

    Object.defineProperty (this, "_nombre",{
        get: function () {
            return _nombre            
        },
        set: function (nuevoNombre) {
            _nombre = nuevoNombre;
        }
    });

    Object.defineProperty (this, "_paciente",{
        get: function () {
            return _paciente            
        },
        set: function (nuevoPaciente) {
            _paciente = nuevoPaciente;
        }
    });   
}

// 3.- AGREGAR MÉTODOS y FUNCIONALIDADES MEDIANTE LA PROPIEDAD PROTOTYPE

// .-PACIENTE
// retornar nombre
Paciente.prototype.getNombre = function(){
    return this._nombre;
};
// modificar o asignar nombre
Paciente.prototype.setNombre = function(nuevoNombre){
    this._nombre = nuevoNombre;
};
// retornar edad
Paciente.prototype.getEdad = function(){
    return this._edad;
};
// modificar o asignar edad
Paciente.prototype.setEdad = function(nuevaEdad){
    this._edad = nuevaEdad;
};
// retornar rut
Paciente.prototype.getRut = function(){
    return this._rut;
};
// modificar o asignar rut
Paciente.prototype.setRut = function(nuevoRut){
    this._rut = nuevoRut;
};
// retornar diagnostico
Paciente.prototype.getDiagnostico = function(){
    return this._diagnostico;
};
// modificar o asignar diagnostigo
Paciente.prototype.setDiagnostico = function(nuevoDiagnostico){
    this._diagnostico = nuevoDiagnostico;
};

// .- CONSULTORIO
// retornar nombre
Consultorio.prototype.getNombre = function(){
    return this._nombre;
};
// modificar o asignar nombre
Consultorio.prototype.setNombre = function(nuevoNombre){
    this._nombre = nuevoNombre;
};

/*

// Consultar o retorna el Nombre de los pacientes desde PACIENTE
Paciente.prototype.getNombrePaciente = function () {
    return this._nombre;
}
// Consultar o retorna el Nombre de los pacientes desde CONSULTORIO
Consultorio.prototype.getNombreConsultorio = function () {
    return this._nombre;
}

// Almacenar y/o modificar datos de los pacientes desde PACIENTE
Paciente.prototype.setNombrePaciente = function (nuevoNombre) {
    this._nombre = nuevoNombre;
}
// Almacenar y/o modificar datos de los pacientes desde CONSULTORIO
Consultorio.prototype.setNombreConsultorio = function (nuevoNombre) {
    this._nombre = nuevoNombre;
}
*/

// 4.- INSTANCIAR LOS OBJETOS
var pacient1 = new Paciente("Juan", 35, "16.439.877-5", "sirrosis");
console.log(pacient1);
// Muestra el nombre de los pacientes y datos personales


var consult1 = new Consultorio(pacient1._nombre, pacient1);
console.log(consult1);
// Muestra el nombre y datos del paciente


// retorna el Nombre de los pacientes desde CONSULTORIO
console.log(consult1.getNombre()); 

// retorna el Nombre de los pacientes desde PACIENTE
console.log(pacient1.getNombre()); 



//modificar datos de los pacientes desde PACIENTE
//pacient1.setNombrePaciente('Andres');      
//console.log(pacient1.getNombrePaciente());

//modificar datos de los pacientes desde CONSULTORIO
consult1.setNombre('Miguel');      
console.log(consult1.getNombre());






/*
// MOSTRAR PACIENTES 1
Consultorio.prototype.mostrarPacientes = function () {
    this.pacientes.map(function (paciente) {
        console.log(`Nombre: ${paciente._getNombre}   Edad: ${paciente._getEdad}  Rut: ${paciente._getRut}   Diagnostico: ${paciente._getDiagnostico}`);
    })
}

// BUSCAR PACIENTES 1
Consultorio.prototype.buscarPaciente = function (nombre) {
    var encontrado = false
    this.pacientes.map(function (paciente) {
        if(paciente._getNombre == nombre) {encontrado = true }
    })

    if(encontrado == true) { 
        console.log(`El paciente "${nombre}" se encuentra en el listado`);
    }else{
        console.log(`El paciente "${nombre}" no se encuentra en el listado`);
    } 
}

*/



/*
// MOSTRAR PACIENTES 2
Consultorio.prototype.allPacientes = function(){
    this.pacientes.forEach(p => {
        console.log(`> Paciente: ${p._getNombre} | ${p._getEdad} | ${p._getRut} | ${p._getDiagnostico}`)
    });
};

// BUSCAR PACIENTES 2
Consultorio.prototype.buscarPaciente = function(nombre){
    result = `No se encontro Paciente ${nombre}`
    this.pacientes.forEach(p => {
        if (p._getNombre == nombre){
            result = `> Paciente encontrado: ${p._getNombre} | ${p._getEdad} | ${p._getRut} | ${p._getDiagnostico}`;
        }
    });
    return result;
};
*/

/*
// MOSTRAR PACIENTES 3
Consultorio.prototype.mostrarTodosLosPacientes = function () {
	this._getPaciente.map((paciente) => {
		console.log("Nombre: " + paciente._getNombre);
		console.log("Edad: " + paciente._getEdad);
		console.log("Rut: " + paciente._getRut);
		console.log("Diagnostico: " + paciente._getDiagnostico);
		console.log("****************************************");
	});
};
consultorioUno.mostrarTodosLosPacientes();

// BUSCAR PACIENTES 3
Consultorio.prototype.filtarPacientePorNombre = function (nombre) {
	this._getPaciente
		.filter((paciente) => paciente._getNombre == nombre)
		.map((paciente) => {
			console.log("Nombre: " + paciente._getNombre);
			console.log("Edad: " + paciente._getEdad);
			console.log("Rut: " + paciente._getRut);
			console.log("Diagnostico: " + paciente._getDiagnostico);
			console.log("****************************************");
		});
};

consultorioUno.filtarPacientePorNombre("Juan");

*/

