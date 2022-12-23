# wallpaperAI
Projetinho em node.js para consumir o serviço de openai para gerar um site de walpapers

## Introdução

Inicialmente a idéia do projeto era prover um microsite de wallpapers gerados por IA, o que seria possível caso a API permitisse a requisição de imagens com dimensões diferentes.

A API usada possui restrição de dimensão de imagem, provendo apenas três variações de tamanho: 256x256, 512x512 e 1024x1024. 

Usando o repositório de Quickstart do tutorial fornecido pelo openai como base para produzir as requisições à API, aprimorar conhecimento da tecnologia Next.js framework com Rest e alterando o código para, ao consumir a API, gerar imagens baseadas no pedido do usuário e apresentá-las na tela.

O repositório base usado para este projeto foi o **openai-quickstart-node** 

```bash
$ git clone https://github.com/openai/openai-quickstart-node.git
```

## Setup
1. Se você não possui Node.js instalado, [Instale ele daqui](https://nodejs.org/en/)

2. Clone este repositório

3. Navegue até o diretório do projeto
    ```bash
    $ cd wallpaperAI
    ```
4. Instale as dependências
   ```bash
   $ npm install
   ```

5. Faça uma cópia do arquivo de exemplo de variáveis de ambiente

   ```bash
   $ cp .env.example .env
   ```
6. Adicione sua [API key](https://beta.openai.com/account/api-keys) no arquivo recentemente criado `.env` 

7. Execute a app

   ```bash
   $ npm run dev
   ```

Agora você deve conseguir acessar o app em [http://localhost:3000](http://localhost:3000)! 
Para mais informações sobre o openai acesse a [documentação](https://beta.openai.com/docs/).