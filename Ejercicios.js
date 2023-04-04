const personajesSimpsons = [
    { nombre: "Homero", edad: 39, rol: "Padre" },
    { nombre: "Marge", edad: 36, rol: "Madre" },
    { nombre: "Bart", edad: 10, rol: "Hijo" },
    { nombre: "Lisa", edad: 8, rol: "Hija" },
    { nombre: "Maggie", edad: 1, rol: "Hija" },
    { nombre: "Ned", edad: 35, rol: "Vecino" },
    { nombre: "Ralph", edad: 8, rol: "Compañero de clase" },
    { nombre: "Milhouse", edad: 10, rol: "Amigo" },
    { nombre: "Nelson", edad: 12, rol: "Bravucón" },
    { nombre: "Martin", edad: 10, rol: "Compañero de clase" }
    ];

    //Ejercicio1
    const menoresDe18 = personajesSimpsons.filter(personajesSimpsons => personajesSimpsons.edad < 18);
    console.log(menoresDe18);

    //Ejercicio2
    const sumaTotalEdad = menoresDe18.reduce((acumulador, menoresDe18) => acumulador + menoresDe18.edad, 0);

    console.log(sumaTotalEdad);

