 import { accesOptions, IUser } from './models';

let content = document.getElementById('content') as HTMLElement;
const button = <HTMLInputElement>document.querySelector('button[id="add"');
const acessRadio = <HTMLElement>document.getElementById('accesRadio');
button.addEventListener('click', addEmployee);

const accessOptionsValues = Object.values(accesOptions);

const updateUserLayout = async (): Promise<void> => {
  const users: IUser[] = await getUser();
  users.map((user: IUser) => {
    content.innerHTML += createLine(user);
  });
}

const getUser = async (): Promise<IUser[]> => {
  const response: Response = await fetch('http://localhost:5011/users');
  const users: IUser[] = await response.json();
  return users;
}

updateUserLayout();

function addEmployee(): void {
  let fullName = document.querySelector('#fullName') as HTMLInputElement;
  let register  = document.querySelector('#register') as HTMLInputElement;
  let admin  = document.querySelector('input[name="access"]:checked') as HTMLInputElement;
  let active  = document.querySelector('#active') as HTMLInputElement;
  let addressHome = document.querySelector('#addressHome') as HTMLInputElement;
  let addressWork = document.querySelector('#addressWork') as HTMLInputElement;

  let user: IUser = {
    fullName: fullName!.value,
    register: register.value != '' ? register.value : undefined,
    access: <accesOptions>admin.value,
    active: active.checked,
    address: [addressHome.value, addressWork.value]
  }
  content.innerHTML += createLine(user);
}

accessOptionsValues.forEach((value: string, i: number) => {
  acessRadio.innerHTML += `
  <div class="form-check">
    <input class="form-check-inputc" type="radio" name="access" id="accesRadio${i}" value="${value} ">
    <label class="form-check-label capitalLetter" for="no">
       ${value} 
    </label>
  </div>
  `
});
(<HTMLInputElement>document.getElementById('accesRadio0')).checked = true;

function createLineByUserField(
  fullName: string,
  register: string | number = Math.random().toString(36).substring(7).toUpperCase(),
  active: boolean = false,
  access: accesOptions = accesOptions.undefined,
  ...address: string[]
): string {
  return `
  <div class="card">
      <div class="card-header">
        Nome: ${fullName}
      </div>
      <div class="card-body">
        <h5 class="card-title">Registro: ${register}</h5>
        <a href="#" class="btn btn-primary">${active ? 'Ativo' : 'Inativo'}</a>
      </div>
      <div class="card-footer text-muted">
        Acesso: ${access == accesOptions.undefined ? 'Não definido' : access}
      </div>
  </div>
  `;
}

function createLine(user: IUser) {
  return `
  <div class="card">
      <div class="card-header">
        Nome: ${user.fullName}
      </div>
      <div class="card-body">
        <h5 class="card-title">Registro: ${user.register}</h5>
        <a href="#" class="btn btn-primary">${user.active ? 'Ativo' : 'Inativo'}</a>
      </div>
      <div class="card-footer text-muted">
        Acesso: ${user.access}
      </div>
  </div>
  `;
}


