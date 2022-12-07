import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from './user-list.models';

@Component({
    selector: 'user-list',
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
    @Output("edit")
    editEvent = new EventEmitter<{ user: User, index: number }>();

    @Input("type")
    _type: "user" | "admin" = "user";

    private _users: Array<User> = []

    set Users(v: Array<User>) { this._users = [...v]; }
    get Users(): Array<User> { return [...this._users]; }

    constructor() { }

    ngOnInit(): void {
    }

    addUser(u: User) {
        this._users.push(u);
    }

    removeUser(u: Partial<User>) {
        const index = this._users.findIndex(it => it.username == u.username);
        this._users.splice(index, 1);
    }

    editUser(u: User, index: number) {
        this.editEvent.emit({ user: u, index });
    }

    updateUser(index: number, u: User) {
        this._users[index] = u;
        this._users = [...this._users];
    }
}
