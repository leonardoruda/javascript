const texto = 'João e maria são casados há 10 anos, nos quais tiveram 9 filhos, dos quais dois se chamam joãozinho e mariazinha. Seus filhos também tiveram filhos e filhas, os quais por sua vez, tiveram seus próprios filhos e filhas, de modo que João e Maria se tornaram muitos joãos e muitas marias.';

const q = 'QWERTY qwerty 123456 atenção!';

console.log(texto.replace(/João|Maria/gi, (a) => {
  let first = a.slice(0, 1);
  let rest = a.slice(1, a.length);
  return first.toUpperCase() + rest;
}));

const cpfs = `Os CFPs são:
254.224.877-45 
215.978.456-12
047.258.369-96
963.987.321.55
087.050.319-75
002,892.452-00`;

console.log(cpfs.match(/([0-9]{3}\.){2}[0-9]{3}\-[0-9]{2}/g))

const html = `<p>Olá, Mundo!</p> <p data-teste="teste" 
class='teste teste'>
Olá de novo</p> <div>Sou uma div</div>`;
console.log(html.match(/<(\w+)[\s\S]*?>[\s\S]*?<\/\1>/g));
console.log(html.replace(/(<(\w+)(?:[\s\S]*?)>)([\s\S]*?)(<\/\2>)/g, '$1 --$2-- >>$3<< $4'));

let cpf = `
123.145.563-20
123.456.789-10
222.222.222-22
987.654.321-00
`;

console.log(cpf.match(/(?!^(\d)\1{2}\.\1{3}\.\1{3}\-\1{2}$)(\d{3}\.){2}\d{3}\-\d{2}/gim));

const emails = `válidos (5):
email@example.com
firstname.lastname@example.com
firstname_surname@example.com
email@subdomain.example.com
curtisjackson187@gmail.com.br

inválidos (3):
email@example@example
 email@example.com
.email@example.com
email.@example.com
`

console.log(emails.match(/^[^\s|\.](\w)+(\.\w+)?@(\w+)+\.\w+(\.\w+)?/gm));