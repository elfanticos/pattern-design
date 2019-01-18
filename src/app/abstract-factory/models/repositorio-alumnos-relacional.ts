import { RepositorioAlumnos } from './repositorio-alumnos';

export class RepositorioAlumnosRelacional implements RepositorioAlumnos {

    listaAlumnos(): String[] {
        return ['Alumno relacional'];
    }

}