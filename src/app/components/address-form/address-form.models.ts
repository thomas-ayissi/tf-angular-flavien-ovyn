
export type AddressForm = {
    rue: string,
    ville: string,
    numero: number,
    pays: string
}


export const DEFAULT_VALUE: AddressForm = {
    rue: "",
    ville: "",
    numero: 0,
    pays: ""
}