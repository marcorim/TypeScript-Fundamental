
const button = <HTMLInputElement>document.querySelector('button[id="add"');
const acessRadio = <HTMLElement>document.getElementById('accesRadio');
button.addEventListener('click', addEmployee);

enum accesOptions {
  administrator = "Administrador",
  manager  = "Gerente",
  employee = "Funcionário",
}

const accessOptionsValues = Object.values(accesOptions);

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

function addEmployee(): void {
  let content = document.getElementById('content') as HTMLElement;

  let fullName = document.querySelector('#fullName') as HTMLInputElement;
  let register  = document.querySelector('#register') as HTMLInputElement;
  let admin  = document.querySelector('input[name="access"]:checked') as HTMLInputElement;
  let active  = document.querySelector('#active') as HTMLInputElement;

  content.innerHTML += createLine(
    fullName.value,
     register.value,
    admin.value,
    active.checked
  );
}

function createLine(
  fullName: string,
  register: number | string,
  admin: string,
  active: boolean
) {
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
        Acesso: ${admin}
      </div>
  </div>
  `;
}


