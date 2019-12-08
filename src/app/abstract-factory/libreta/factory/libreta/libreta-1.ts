import { ILibreta } from './libreta.model';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

export class Libreta1 implements ILibreta {

    constructor() {}

    getForm(): FormGroup {
        const formCustom = new FormGroup({
            'name': new FormControl(['Libreta1'])
        });
        return formCustom;
    }

}
