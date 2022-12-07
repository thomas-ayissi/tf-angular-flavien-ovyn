import { Component, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { UserFormComponent } from './components/user-form/user-form.component';
import { UserListComponent } from './components/user-list/user-list.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    @ViewChild(UserListComponent)
    private list: UserListComponent | null = null;

    @ViewChild(UserFormComponent)
    private form: UserFormComponent | null = null;

    private index: number = -1;

    title = 'tf2022dotnetsecu';

    handleNewUser(newUser: any) {
        this.list?.addUser(newUser);
    }

    handleRemove() {
        // this.list?.removeUser({ username: 'Flavian' })
    }

    handleEditUser(u: { user: any, index: number }) {
        if (this.form) {
            this.form.Form = u.user;
            this.index = u.index;
            this.form.isEdit = true;
        }
    }

    handleUpdateUser(u: any) {
        this.list?.updateUser(this.index, u);
        console.log(u);
    }
}
