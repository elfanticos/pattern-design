import { ILibretaAbstractFactory } from './libreta-abstact-factory.model';
import { ILibreta } from './factory/libreta/libreta.model';
import { Libreta2 } from './factory/libreta/libreta-2';

export class Libreta2Factory implements ILibretaAbstractFactory {
    getLibreta(): ILibreta {
        return new Libreta2();
    }
}
