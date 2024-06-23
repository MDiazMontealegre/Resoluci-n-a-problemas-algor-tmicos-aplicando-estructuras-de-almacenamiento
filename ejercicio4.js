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
                }
               ]
}

let encuestaPersonas = [persona1, persona2];

for (i = 0; i < encuestaPersonas.length; i++)
{
    console.log('Posición ' + i, encuestaPersonas[i]);
}