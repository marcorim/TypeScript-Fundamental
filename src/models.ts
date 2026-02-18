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