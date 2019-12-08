import { ILibreta } from './libreta.model';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

export class Libreta2 implements ILibreta {

    constructor() {}

    getForm(): FormGroup {
        const formCustom = new FormGroup({
            'name': new FormControl(['Libreta2'])
        });
        return formCustom;
    }

}
