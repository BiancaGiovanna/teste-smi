# Projeto de Gestão de Demandas

Este é um projeto de gestão de demandas desenvolvido com frontend em ReactJS e backend em AdonisJS. O objetivo deste sistema é permitir que os usuários visualizem, criem e excluam demandas de produção de forma simples e eficiente.

## Funcionalidades

### Visualização de Demandas

A página principal do sistema exibe uma tabela com todas as demandas cadastradas. Cada linha da tabela representa uma demanda e exibe as seguintes informações:

- **ID:** Um identificador único para a demanda.
- **Período:** O período de início e fim da demanda.
- **SKU:** O código SKU associado à demanda.
- **Total Planejado:** A quantidade planejada para a demanda.
- **Total Produzido:** A quantidade produzida até o momento.
- **Status:** O status atual da demanda, que pode ser "PLANEJADO", "EM ANDAMENTO" ou "CONCLUÍDO".
- **Editar:** Um botão de edição que permite ao usuário modificar os detalhes da demanda.

### Criação de Novas Demandas

Os usuários podem criar novas demandas clicando no botão "+ ADICIONAR" na página principal. Isso os levará a uma página de criação de demandas, onde podem preencher as seguintes informações:

- **Período de Início:** A data de início da demanda.
- **Período de Fim:** A data de término da demanda.
- **Descrição:** Uma breve descrição da demanda.
- **Total Planejado:** A quantidade planejada para a demanda.
- **Total Produzido:** A quantidade produzida até o momento.
- **SKU:** O código SKU associado à demanda.

Depois de preencher todas as informações, o usuário pode clicar no botão "Enviar" para criar a demanda. A nova demanda será adicionada à tabela na página principal.

### Exclusão de Demandas

Os usuários também têm a opção de excluir demandas existentes. Para excluir uma demanda, basta clicar no ícone de lixeira (representado por um ícone de lixeira) na tabela ao lado da demanda que deseja excluir. Uma confirmação será solicitada antes que a demanda seja excluída definitivamente.

## Como Executar o Projeto

### Backend (AdonisJS)

Para executar o backend do projeto em AdonisJS, siga estas etapas:

1. Navegue até a pasta do projeto backend.

2. Instale as dependências do projeto executando o comando:

   ```bash
   npm install
   ```

3. Configure as variáveis de ambiente no arquivo `.env` conforme necessário.

4. Execute o servidor AdonisJS com o comando:

   ```bash
   node ace serve --watch
   ```

5. O servidor backend estará em execução em `http://localhost:3333`.

### Frontend (ReactJS)

Para executar o frontend do projeto em ReactJS, siga estas etapas:

1. Navegue até a pasta do projeto frontend.

2. Instale as dependências do projeto executando o comando:

   ```bash
   npm install
   ```

3. Inicie o aplicativo ReactJS com o comando:

   ```bash
   npm run dev
   ```

4. O aplicativo frontend estará em execução em `http://localhost:5173/`.

## Tecnologias Utilizadas

- Frontend: ReactJS, React Router, Axios, React Icons
- Backend: AdonisJS, SQLite3;
- Gerenciamento de Estado (Frontend): React Hooks (useState, useEffect)
- Estilização (Frontend): CSS e CSS Modules

Este projeto foi desenvolvido como um exemplo simples de uma aplicação de gestão de demandas e pode ser expandido com recursos adicionais, autenticação de usuário e muito mais.

---

Este README fornece uma visão geral das funcionalidades do projeto e como executá-lo. Certifique-se de fornecer documentação adicional e instruções de implantação, conforme necessário, para que outros desenvolvedores possam usar e contribuir para o projeto com facilidade.
