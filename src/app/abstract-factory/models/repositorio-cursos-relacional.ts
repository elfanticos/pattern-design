import { RepositorioCursos } from './repositorio-cursos';

export class RepositorioCursosRelacional implements RepositorioCursos {
    listaCursos(): String[] {
        return ['curso relacional'];
    }
}