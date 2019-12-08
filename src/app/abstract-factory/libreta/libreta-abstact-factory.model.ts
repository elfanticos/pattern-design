import { ILibreta } from './factory/libreta/libreta.model';

export interface ILibretaAbstractFactory {
    getLibreta(): ILibreta;
}
