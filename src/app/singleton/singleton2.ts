import { Singleton } from './singleton';
export class Singleton2 {
    constructor()  {
        this.init();
    }

    init () {
        const instance = Singleton.getInstance();
        console.log('instance singleton2', instance.temperature);
    }
}