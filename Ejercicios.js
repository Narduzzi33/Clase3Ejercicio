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

    //Ejercicio3
    const nombresSolos = personajesSimpsons.map( personajesSimpsons => personajesSimpsons.nombre);
    console.log(nombresSolos);

    //Ejercicio4
    const cambioDeRol = personajesSimpsons.map(personajesSimpsons =>{
        if(personajesSimpsons.edad < 18){
            const {nombre,edad,rol} = personajesSimpsons;
            const estudiante = {nombre, edad, rol: "Estudiante"} 
            return estudiante;  
        }
        return personajesSimpsons;
    })

    console.log(cambioDeRol);

    //Ejercicio5
    const personajesSimpsons2 = [
        { nombre: "Ned", edad: 36, rol: "Vecino" },
        { nombre: "Edna", edad: 42, rol: "Maestra" },
        { nombre: "Montogomety", edad: 100, rol: "Vecino" },
        { nombre: "Krusty", edad: 45, rol: "Payaso" }
        ];

    const todosLosPersonajes = [...personajesSimpsons, ...personajesSimpsons2];
    console.log(todosLosPersonajes);