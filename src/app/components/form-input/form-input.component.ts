import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'form-input',
    templateUrl: './form-input.component.html',
    styleUrls: ['./form-input.component.scss']
})
export class FormInputComponent implements OnInit {
    @Output("valueChange")
    valueChangeEvent = new EventEmitter<any>();

    private _label: string = "";
    private _type: "text" | "password" = "text";
    private _value: any | null;

    @Input("label")
    set Label(v: string) { this._label = v; }
    get Label(): string { return this._label; }

    @Input("type")
    set Type(v: "text" | "password") { this._type = v; }
    get Type(): "text" | "password" { return this._type; }

    @Input("value")
    set Value(v: any) {
        this._value = v;
        this.valueChangeEvent.emit(v);
    }
    get Value(): any { return this._value; }

    constructor() { }

    ngOnInit(): void {
    }

}
