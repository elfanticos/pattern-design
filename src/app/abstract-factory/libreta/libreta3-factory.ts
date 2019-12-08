import { ILibretaAbstractFactory } from './libreta-abstact-factory.model';
import { ILibreta } from './factory/libreta/libreta.model';
import { Libreta3 } from './factory/libreta/libreta-3';

export class Libreta3Factory implements ILibretaAbstractFactory {
    getLibreta(): ILibreta {
        return new Libreta3();
    }
}
