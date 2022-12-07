import { AddressForm, DEFAULT_VALUE as AdDValue } from "../address-form/address-form.models";
export type UserForm = { username: string, password: string, address: AddressForm }

export const DEFAULT_VALUE: UserForm = {
    "username": "",
    "password": "",
    "address": { ...AdDValue }
}