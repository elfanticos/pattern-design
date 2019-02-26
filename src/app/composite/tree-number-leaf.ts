import {TreeNumbers} from './tree-number';

export class TreeNumbersLeaf extends TreeNumbers {
    private valor:number;

    constructor(valor:number) {
        super();
        this.valor = valor;
    }
    add(treeNumbers: TreeNumbers):void {
        throw new Error("Operación no soportada");
    }

    remove(treeNumbers: TreeNumbers):void {}

    numberOfTreeNumbers(): number {
        return 1;
    }

    sum(): number {
        return this.valor;
    }

    higher(): number {
        return this.valor;
    }
    toString():string {
        return `Hoja[${this.valor}]`;
    }
}
