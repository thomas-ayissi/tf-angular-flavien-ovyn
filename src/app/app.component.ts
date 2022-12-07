import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'tf2022dotnetsecu';

    form = { username: "Flavian", password: "Ovyn", address: "Rue du trou du cul, 42" }

    fieldUpdate(field: any) {
        console.log(field);
        this.form = { ...this.form, ...field };
    }
}
