const caracteres = {
    letrasMaiusculas: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    letrasMinusculas: 'abcdefghijklmnopqrstuvwxyz',
    numeros: '0123456789',
    especiais: '!#$%&()*+,-./:;<=>?@[^_`|~'
  };
 
const readline = require('readline')
 
 
const rl = readline.createInterface({
    input: process.stdin, output: process.stdout
})
 
let letrasMaiusculas_option = false
let letrasMinusculas_option  = false
let numeros_option  = false
let especiais_option  = false
 
function setarprompt(){
    rl.setPrompt(
        `🔐 Gerador de Senhas - Personalize sua senha\n\n` +
        `Escolha as opções que deseja incluir:\n\n` +
        ` 1. Letras minúsculas .......... [${letrasMinusculas_option ? 'ATIVADO' : 'DESATIVADO'}]\n` +
        ` 2. Letras maiúsculas .......... [${letrasMaiusculas_option ? 'ATIVADO' : 'DESATIVADO'}]\n` +
        ` 3. Números .................... [${numeros_option ? 'ATIVADO' : 'DESATIVADO'}]\n` +
        ` 4. Caracteres especiais ....... [${especiais_option ? 'ATIVADO' : 'DESATIVADO'}]\n\n` +
        `Digite o número da opção para ativar/desativar.\n` +
        `Quando terminar, digite "5" para criar sua senha.\n> `
      );    
    rl.prompt()
 
}
 
function GerarPass(){
    if (letrasMaiusculas_option == false && letrasMinusculas_option == false && numeros_option == false && especiais_option == false) {
        console.clear()
        setarprompt()
        console.log('----------------------------------------\n⚠️ Você precisa ativar pelo menos uma opção para continuar. Por favor, tente novamente.\n> ');
 
    } 
    else {
        rl.question('Qual sera o tamanho da sua senha? ', (senha) => {
            senha = parseInt(senha)
            if (isNaN(senha) || senha <= 0 ){
                console.clear()
                console.log('----------------------------------------\n🚫 Opção inválida. Tente novamente.\n----------------------------------------');
                GerarPass()
            } else {
                let dicionario_senha = ''
                if (letrasMaiusculas_option == true) {dicionario_senha += caracteres.letrasMaiusculas} 
                if (letrasMinusculas_option == true) {dicionario_senha += caracteres.letrasMinusculas}
                if (numeros_option == true) {dicionario_senha += caracteres.numeros}
                if (especiais_option == true) {dicionario_senha += caracteres.especiais}
 
                let senha_final = ''
 
 
                for (let loop = 0; loop <= senha; loop++) {
                    let caracteres_random = Math.floor(Math.random() * dicionario_senha.length + 1)
                    senha_final += dicionario_senha[caracteres_random]
                }
 
                console.log(`\n✅ Sua senha foi gerada com sucesso!\n🔐 Senha: ${senha_final}\n`);
                rl.close()
            }
        })
    }
}
 
setarprompt()
 
rl.on('line', (input) => {
    let response = parseInt(input)
    if (isNaN(response)) {
 
        console.clear()
        console.log('----------------------------------------\n🚫 Opção inválida. Tente novamente.\n----------------------------------------');
        rl.prompt()
 
    } 
    else if (response === 1)  {
        if (letrasMinusculas_option == false) {letrasMinusculas_option = true} else {letrasMinusculas_option = false}
        console.clear()
        setarprompt()
    }
     else if(response === 2) {
        if (letrasMaiusculas_option == false) {letrasMaiusculas_option = true} else {letrasMaiusculas_option = false}
        console.clear()
        setarprompt()
    }
     else if (response === 3) {
        if (numeros_option == false) {numeros_option = true} else {numeros_option = false}
        console.clear()
        setarprompt()
    }
     else if (response === 4) {
        if (especiais_option == false) {especiais_option = true} else {especiais_option = false}
        console.clear()
        setarprompt()
    }
    else if (response === 5 ){
        GerarPass()
    } else {
        console.clear()
        console.log('----------------------------------------\n🚫 Opção inválida. Tente novamente.\n----------------------------------------');
        setarprompt()
    }
})

