let nome = prompt("Nome")
let sobrenome = prompt("Sobrenome")
let idade = prompt("Idade")
let nacionalidade = prompt("Nacionalidade")
let estadocivil = prompt("Estado Civil")

console.log(`Eu so:${nome}`)
console.log(`meu sobrenome e:${sobrenome}`)
console.log(`Eu tem:${idade} anos`);
console.log(`Tem nacionalidade:${nacionalidade}`)
console.log(`Estado civil:${estadocivil}`)

let myobj = new Object();
    myobj.Nome = nome
    myobj.Sobrenome = sobrenome
    myobj.Idade = idade
    myobj.Estado_Civil = estadocivil
    myobj.Nacionalidade = nacionalidade

console.table(myobj)