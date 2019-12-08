import { ILibretaAbstractFactory } from './libreta-abstact-factory.model';
import { ILibreta } from './factory/libreta/libreta.model';
import { Libreta1 } from './factory/libreta/libreta-1';

export class Libreta1Factory implements ILibretaAbstractFactory {
    getLibreta(): ILibreta {
        return new Libreta1();
    }
}
