export class Prototype {
    constructor(
        public name:string,
        public apellido:string
    ) {}

    public display() {
        console.log(`Mi nombre es ${this.name} y mi apellido es: ${this.apellido}`);
    }

    public clone():Prototype {
        let cloned = Object.create(Prototype.prototype || null);
        Object.keys(this).map((key:string) => {
            cloned[key] = this[key];
        })

        return <Prototype>cloned;
    }

    set SetApellido(apellido:string) {
        this.apellido = apellido;
    }
}