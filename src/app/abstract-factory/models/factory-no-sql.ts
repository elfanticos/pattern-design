import { AbstractFactory } from './abstract-factory';
import { RepositorioAlumnos } from './repositorio-alumnos';
import { RepositorioCursos } from './repositorio-cursos';
import { RepositorioAlumnosNoSql } from './repositorio-alumnos-nosql';
import { RepositorioCursosNoSql } from './repositorio-cursos-nosql';

export class FactoryNoSql implements AbstractFactory {
    createRepositorioAlumnos(): RepositorioAlumnos {
        return new RepositorioAlumnosNoSql();
    }    
    createRepositorioCursos() :RepositorioCursos {
        return new RepositorioCursosNoSql();
    }
}