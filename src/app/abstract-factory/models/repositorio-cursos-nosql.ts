import { RepositorioCursos } from './repositorio-cursos';

export class RepositorioCursosNoSql implements RepositorioCursos {
    listaCursos(): String[] {
        return ['cursos no sql'];
    }
    
}