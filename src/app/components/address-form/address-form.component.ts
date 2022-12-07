import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { AddressForm } from './address-form.models';

@Component({
    selector: 'address-form',
    templateUrl: './address-form.component.html',
    styleUrls: ['./address-form.component.scss']
})
export class AddressFormComponent implements OnInit {
    private _value: AddressForm | null = null;

    @Output("valueChange")
    valueChangeEvent = new EventEmitter<AddressForm>()

    @Input("value")
    set Value(v: AddressForm) {
        this._value = { ...v };
        this.valueChangeEvent.emit({ ...v })
    }
    get Value(): AddressForm { return this._value as AddressForm; }

    constructor() { }

    ngOnInit(): void {
    }

}
