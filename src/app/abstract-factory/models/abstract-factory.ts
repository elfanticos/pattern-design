import { RepositorioAlumnos } from './repositorio-alumnos';
import { RepositorioCursos } from './repositorio-cursos';

export interface AbstractFactory {
    createRepositorioAlumnos():RepositorioAlumnos;
    createRepositorioCursos():RepositorioCursos;
}