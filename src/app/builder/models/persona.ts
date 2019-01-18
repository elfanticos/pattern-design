export class Persona {

    nombre:string;
    edad:number;
    municipio:string;
    colegio:string;
    lugarTrabajo:string;
	
	constructor() {}
}

export class Builder {
    private persona : Persona;

    constructor(nombre:string) {
        this.persona = new Persona();
        this.persona.nombre = nombre;
    }

    setMunicipio(municipio:string):Builder {
        this.persona.municipio = municipio;
        return this;
    }

    setMayor(edad:number):BuilderMayor {
        if (edad < 18) throw ("es menor de edad " + edad);
        this.persona.edad         = edad;
       return new BuilderMayor(this.persona);
    }

    setMenor(edad:number):BuilderMenor {
        if (edad >= 18) throw ("es mayor de edad " + edad);
        this.persona.edad         = edad;
        return new BuilderMenor(this.persona);
    }

    build():Persona {
        return this.persona;
    }
}


class BuilderMayor {
    private persona:Persona;

    constructor(persona:Persona) {
        this.persona = persona;
    }

    setLugarTrabajo (lugarTrabajo:string):BuilderMayor {
        this.persona.lugarTrabajo = lugarTrabajo;
        return this;
    }

    build():Persona {
        return this.persona;
    }
}

class BuilderMenor {
    private persona:Persona;
		
    constructor(persona:Persona) {
        this.persona = persona;
    }
    
    setColegio(colegio:string):BuilderMenor {
        this.persona.colegio = colegio;
        return this;
    }
    
    build():Persona {
        return this.persona;
    }
}
