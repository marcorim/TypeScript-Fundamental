export enum accesOptions {
  administrator = "Administrador",
  manager  = "Gerente",
  employee = "Funcionário",
  undefined = "Não definido"
}

export type userType = {
    fullName: string,
    register: string | number,
    access?: accesOptions,
    active?: boolean
}

interface IPerson {
    fullName: string,
    address?: string[],
}
export interface IUser extends IPerson {
    register?: string | number,
    access?: accesOptions,
    active?: boolean
}

export interface ISpearker extends IPerson {
    eventAsSpearker: string[];
    description: string;
    linkedInURL: string;
}

export interface IParticipant extends IUser, IPerson{
    eventAsParticipant: string[];
}