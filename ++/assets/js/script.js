const body = document.querySelector('*:not(.bgcolor)');
const input1 = document.querySelector('input[type="radio"]');
const input2 = document.querySelector('input[type="radio"]:nth-child(2)');
const input3 = document.querySelector('input[type="radio"]:nth-child(3)');
let recebeCor;

input1.addEventListener('click', (e) => {
 recebeCor = input1.value;
 populateStorage(recebeCor);
})
input2.addEventListener('click', (e) => {
 recebeCor = input2.value;
 populateStorage(recebeCor);
})
input3.addEventListener('click', (e) => {
 recebeCor = input3.value;
 populateStorage(recebeCor);
})

function populateStorage(e) {
  localStorage.setItem('bgcolor', e);

  setStyle();
}

function setStyle() {
const currentColor = localStorage.getItem('bgcolor');
body.style.backgroundColor = currentColor;
}

if (!localStorage.getItem('bgcolor')) {
  populateStorage();
} else {
  setStyle();
}




//https://jsonplaceholder.typicode.com/posts

/**
 // Objeto para simular um loader no site
const loader = {
    show() {
      console.log("Mostra o loader na tela");
    },
    hide() {
      console.log("Tira o loader da tela");
    },
  };
  
  // Função para simular o fetch para pegar os posts
  async function loadPosts() {
    return [
      { id: 1, title: "post 01", content: "..." },
      { id: 2, title: "post 02", content: "..." },
      { id: 3, title: "post 03", content: "..." },
    ];
  }
  
  async function renderPosts() {
    try {
      loader.show();
      const posts = await loadPosts();
      // código para mostrar os posts na tela...
      console.log(posts);
    } catch (error) {
      console.error("Um erro aconteceu", error);
    } finally {
      loader.hide();
    }
  }
  
  renderPosts();
  console.error('ERRO DESCONHECIDO')
 */






/*class Form {
    method = 'GET';
    items = [];
    constructor(container, method, action) {
        this.container = document.querySelector(container);
        this.method = method;
        this.action = action;
    }

    addItem(item) {
        this.items.push(item);
    }

    render() {
        let formElement = document.createElement('form');
        formElement.setAttribute('method', this.method);
        formElement.setAttribute('action', this.action);

        for(let i in this.items) {
            this.items[i].render(formElement);
        }

        this.container.appendChild(formElement);
    }
}

class Input {

    _type = 'text';
    required = false;

    constructor(name, label) {
        this.name = name;
        this.label = label;
    }

    get type() {
        return this._type;
    }

    set type(t) {
        if(['text', 'password', 'email', 'submit'].includes(t)) {
            this._type = t;
        } else {
            throw new Error('Input '+t + ' type doesn\'t exist.')
        }
    }

    render(formElement) {
        let el = document.createElement('input');
        el.type = this.type;
        el.name = this.name;
        el.placeholder = this.label;
        el.required = this.required;
        formElement.appendChild(el);
    }

}

class Button extends Input {
    constructor(label) {
        super('', label);
        this.type = 'submit';
    }

    render(formElement) {
        let el = document.createElement('input');
        el.type = this.type;
        el.value = this.label;
        formElement.appendChild(el);
    }
}

let form = new Form('.area', 'POST', 'https://site.com.br');

let email = new Input('email', 'Digite seu e-mail');
email.type = 'email';
email.required = true;
form.addItem(email);

let password = new Input('password', 'Digite sua senha');
password.type = 'password';
password.required = true;
form.addItem(password);

let button = new Button('Enviar');
form.addItem(button);

form.render();

document.querySelectorAll('input').forEach((a) => a.style.display = 'block')
document.querySelectorAll('input').forEach((a) => a.style.margin = '5px')
*/