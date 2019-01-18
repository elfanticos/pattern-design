import { RepositorioAlumnos } from './repositorio-alumnos';

export class RepositorioAlumnosNoSql implements RepositorioAlumnos {
    listaAlumnos(): String[] {
        return ['Alumno no sql'];
    }

}