// Encuesta de 6 personas
var  persona1 = {
    nombre: "Pedro Perez",
    numeroIdentificacion: "123456",
    fechaNacimiento: "12/05/2005",
    correoElectronico: "pedro@gnail.com",
    ciudadResidencia: "Bogota",
    ciudadOrigen: "Neiva",
    canciones: [
                {
                titulo: "Te olvide",
                artista: "Maluma"
                },
                {
                    titulo: "Media luna",
                    artista: "Bacilos"
                },
                {
                    titulo: "Tu con el",
                    artista: "Frankie Ruiz"
                }
               ]
};

var  persona2 = {
    nombre: "Carlos Jaramillo",
    numeroIdentificacion: "99999",
    fechaNacimiento: "11/10/2001",
    correoElectronico: "carlos@gnail.com",
    ciudadResidencia: "Bogota",
    ciudadOrigen: "Bogota",
    canciones: [
                {
                    titulo: "Saldra el sol",
                    artista: "Jorge Celedon"
                },
                {
                    titulo: "Me olvide de vivir",
                    artista: "Alejandro Fernandez"
                },
                {
                    titulo: "Reminicencias",
                    artista: "Julio Jaramillo"
                }
               ]
};

var  persona3 = {
    nombre: "Andres Trujillo",
    numeroIdentificacion: "879456",
    fechaNacimiento: "20/11/1980",
    correoElectronico: "andresT@gnail.com",
    ciudadResidencia: "Medellin",
    ciudadOrigen: "Medellin",
    canciones: [
                {
                titulo: "Prometeme",
                artista: "Andres Cepeda"
                },
                {
                    titulo: "Olvidala",
                    artista: "Binomio de oro"
                },
                {
                    titulo: "Malory",
                    artista: "Ryan Castro"
                }
               ]
};

var  persona4 = {
    nombre: "Ismael Diaz",
    numeroIdentificacion: "254136",
    fechaNacimiento: "18/07/1960",
    correoElectronico: "ismaD@gnail.com",
    ciudadResidencia: "Bogota",
    ciudadOrigen: "Guamal",
    canciones: [
                {
                titulo: "La Fama",
                artista: "Hector Lavoe"
                },
                {
                    titulo: "Brujeria",
                    artista: "El gran combo de puerto rico"
                },
                {
                    titulo: "Llorarás",
                    artista: "Dimensión latina"
                }
               ]
};

var  persona5 = {
    nombre: "Samuel Bravo",
    numeroIdentificacion: "798465132",
    fechaNacimiento: "23/11/2006",
    correoElectronico: "samuB@gnail.com",
    ciudadResidencia: "Bogota",
    ciudadOrigen: "Bogotá",
    canciones: [
                {
                titulo: "Sorry 4 that much",
                artista: "Fied"
                },
                {
                    titulo: "Guayeteo ",
                    artista: "Caleb Calloway"
                },
                {
                    titulo: "Flores en anonimo",
                    artista: "Eladio Carrion"
                }
               ]
};

var  persona6 = {
    nombre: "Pablo Ramirez",
    numeroIdentificacion: "25874136",
    fechaNacimiento: "01/03/2007",
    correoElectronico: "pabloR@gnail.com",
    ciudadResidencia: "Bogota",
    ciudadOrigen: "Neiva",
    canciones: [
                {
                titulo: "No renunciaré",
                artista: "Alci Acosta"
                },
                {
                    titulo: "YO AK",
                    artista: "Feid"
                },
                {
                    titulo: "Fly love",
                    artista: "Jamie Foxx"
                }
               ]
};

// Crear un vector para almacenar la información de las personas
let personasEncuestadas = [persona1, persona2, persona3, persona4, persona5, persona6];

// Función para agregar una persona
function agregarPersona() {
    const persona = {
        nombre: prompt("Ingrese el nombre completo:"),
        cedula: prompt("Ingrese el número de identificación (cédula):"),
        fechaNacimiento: prompt("Ingrese la fecha de nacimiento (DD/MM/AAAA):"),
        correo: prompt("Ingrese el correo electrónico:"),
        ciudadResidencia: prompt("Ingrese la ciudad de residencia:"),
        ciudadOrigen: prompt("Ingrese la ciudad de origen:")
    };

    // Agregar canciones favoritas
    persona.cancionesFavoritas = [];
    for (let i = 0; i < 3; i++) {
        const artista = prompt('Ingrese el artista de la canción ', [i], ':' );
        const titulo = prompt('Ingrese el título de la canción ', [i], ':' );
        persona.cancionesFavoritas.push({ artista, titulo });
    }

    personasEncuestadas.push(persona);
    console.log("Persona agregada correctamente.");
}

// Función para mostrar información de una persona por posición
function mostrarInformacionPersona(posicion) {
    const persona = personasEncuestadas[posicion];
    if (persona) {
        console.log(`
        Nombre: ${persona.nombre}
        Cédula: ${persona.cedula}
        Fecha de nacimiento: ${persona.fechaNacimiento}
        Correo electrónico: ${persona.correo}
        Ciudad de residencia: ${persona.ciudadResidencia}
        Ciudad de origen: ${persona.ciudadOrigen}
        Canciones favoritas:`);
        persona.cancionesFavoritas.forEach((cancion, index) => {
            console.log(`   ${index + 1}. ${cancion.artista} - ${cancion.titulo}`);
        });
    } else {
        console.log("No se encontró una persona en esa posición.");
    }
}

// Menú principal
while (true) {
    const opcion = prompt(`
    Menú:
        Ingrese la opción deseada:
        a. Agregar una persona
        b. Mostrar información de una persona por posición
        c. Salir
    `);

    if (opcion === "a") {
        agregarPersona();
    } else if (opcion === "b") {
        const posicion = parseInt(prompt("Ingrese la posición de la persona (0-5):"));
        mostrarInformacionPersona(posicion);
    } else if (opcion === "c") {
        break;
    } else {
        console.log("Opción no válida. Intente nuevamente.");
    }
}