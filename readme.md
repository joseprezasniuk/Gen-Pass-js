---

# 🔐 Gerador de Senhas Interativo (Node.js CLI)

Este é um gerador de senhas personalizável executado via terminal (linha de comando) usando Node.js. O usuário pode escolher quais tipos de caracteres incluir (letras maiúsculas, minúsculas, números e símbolos especiais) e definir o comprimento da senha gerada.

## 📦 Requisitos

* [Node.js](https://nodejs.org) instalado (versão 12 ou superior)

## 🚀 Como usar

1. Clone ou salve o script localmente como `gerador-senhas.js`.
2. No terminal, execute:

```bash
node gerador-senhas.js
```

3. Siga as instruções interativas no terminal:

   * Ative ou desative os tipos de caracteres digitando os números de 1 a 4.
   * Quando estiver satisfeito com as configurações, digite `5` para gerar sua senha.

## ✅ Exemplo de uso

```bash
🔐 Gerador de Senhas - Personalize sua senha

Escolha as opções que deseja incluir:

 1. Letras minúsculas .......... [DESATIVADO]
 2. Letras maiúsculas .......... [DESATIVADO]
 3. Números .................... [DESATIVADO]
 4. Caracteres especiais ....... [DESATIVADO]

Digite o número da opção para ativar/desativar.
Quando terminar, digite "5" para criar sua senha.
> 1
> 2
> 5
Qual sera o tamanho da sua senha? 12

✅ Sua senha foi gerada com sucesso!
🔐 Senha: XcLdphwYtNkQ
```

## 🧠 Funcionamento interno

* O script utiliza o módulo `readline` do Node.js para criar uma interface interativa no terminal.
* O usuário seleciona dinamicamente quais tipos de caracteres deseja incluir.
* Após definir o comprimento, uma senha aleatória é gerada com base nas escolhas do usuário.

## ⚠️ Validações

* Não é possível gerar senha sem selecionar pelo menos uma categoria de caracteres.
* O tamanho da senha precisa ser um número maior que zero.

## 📄 Licença

Este projeto é livre para uso educacional, pessoal e profissional. Nenhuma licença específica foi definida.

---
