import { Component, OnInit, Output, EventEmitter, SimpleChanges, Input } from '@angular/core';
import { UserForm, DEFAULT_VALUE } from './user-form.models';

@Component({
    selector: 'user-form',
    templateUrl: './user-form.component.html',
    styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
    @Output("newUser")
    newUserEvent = new EventEmitter<any>();

    @Output("updateUser")
    updateUserEvent = new EventEmitter<any>();

    isEdit = false;

    private _form: UserForm = { ...DEFAULT_VALUE }

    get Form(): UserForm { return this._form; }
    set Form(v: UserForm) { this._form = { ...v } }

    set NewUserEvent(v: any) {
        this.newUserEvent.emit(v);
    }

    constructor() { }

    ngOnInit(): void {
    }

    handleSubmit() {
        if (this.isEdit) {
            this.updateUserEvent.emit({ ...this.Form })
            this.isEdit = false;
        } else {
            this.NewUserEvent = { ...this.Form };
        }
        this._form = { ...DEFAULT_VALUE };
        this._form.address = { ...DEFAULT_VALUE.address };
    }

}
