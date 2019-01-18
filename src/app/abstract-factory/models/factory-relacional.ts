import { AbstractFactory } from './abstract-factory';
import { RepositorioAlumnos } from './repositorio-alumnos';
import { RepositorioCursos } from './repositorio-cursos';
import { RepositorioAlumnosRelacional } from './repositorio-alumnos-relacional';
import { RepositorioCursosRelacional } from './repositorio-cursos-relacional';

export class FactoryRelacional implements AbstractFactory {
    createRepositorioAlumnos(): RepositorioAlumnos {
        return new RepositorioAlumnosRelacional();
    }    
    createRepositorioCursos() :RepositorioCursos {
        return new RepositorioCursosRelacional();
    }
}