

import {TreeNumbers} from './tree-number';

export class TreeNumbersComposite extends TreeNumbers {
    private nombre:string;

    private lista:Array<TreeNumbers>;

    constructor(nombre:string) {
        super();
        this.nombre = nombre;
        this.lista = [];
    }
    add(treeNumbers: TreeNumbers):void {
        if (treeNumbers == null) return;
        this.lista.push(treeNumbers);
    }

    remove(treeNumbers: TreeNumbers):void {
        if (treeNumbers == null) return;
        console.log('this.lista =>>>>',this.lista);
        this.lista = this.lista.filter(fil => fil != treeNumbers);
        console.log('this.lista1 =>>>>',this.lista);
    }

    
    sum(): number {
        let result:number = 0;
        for(let item of this.lista) {
            result += item.sum();
        }
        return result;
    }
    
    higher(): number {
        let result:number = Number.MIN_VALUE;
        for(let item of this.lista) {
            let higher = item.higher();
            if (higher > result) {
                result = higher;
            }
        }
        return result;
    }

    numberOfTreeNumbers(): number {
        return this.lista.length;
    }

    toString():string {
        return `[${this.nombre}]`;
    }
}