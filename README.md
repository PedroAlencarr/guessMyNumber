# Guess My Number

Este é um jogo desenvolvido com React Native e Expo, onde o objetivo é adivinhar um número. O aplicativo faz uma série de palpites, e o usuário informa se o palpite deve ser maior ou menor, até que o número escolhido seja acertado.

## Funcionalidades

- **Geração de Número Aleatório**  
  Um número inicial é gerado usando a função [`generateRandomBetween`](src/screens/GameScreen.tsx#L6) em `GameScreen.tsx`.
- **Lógica do Jogo**  
  Controla os palpites do oponente e valida se o palpite está correto, atualizando o estado do jogo conforme a interação do usuário.
- **Histórico de Palpites**  
  Registra e exibe os palpites feitos pelo oponente em uma lista, permitindo ao usuário acompanhar o progresso do jogo.

## Estrutura do Projeto

- **App.tsx**  
  Arquivo principal que inicializa e configura a aplicação. É o ponto de entrada do app.
- **src/screens/GameScreen.tsx**  
  Contém a tela principal do jogo com toda a lógica de geração de números, gerenciamento de palpites e verificação do acerto do número.
- **src/components/**
  - **game/GuessLogItem.tsx:**  
    Componente que renderiza cada item do histórico de palpites do usuário.
  - **game/NumberContainer.tsx:**  
    Componente responsável por exibir o número atual adivinhado.
  - **ui/Card.tsx, InstructionText.tsx, PrimaryButton.tsx, Title.tsx:**  
    Componentes de interface que ajudam a compor o layout do jogo e a estilizar os elementos de interface.
- **assets/**  
  Contém imagens, fontes e outros recursos visuais utilizados no aplicativo.
- **android/** e **ios/**  
  Pastas específicas para configuração nativa e build dos projetos Android e iOS, respectivamente.

## Requisitos

- Node.js (LTS recomendado)
- Expo CLI (para desenvolvimento e gerenciamento do app)
- Android Studio e/ou Xcode (opcional, para testes em emuladores ou dispositivos reais)

## Como Executar

1. Instale as dependências:
   - Usando npm:
     ```sh
     npm install
     ```
   - Usando Yarn:
     ```sh
     yarn install
     ```
   - Usando Bun:
     ```sh
     bun install
     ```
2. Execute o aplicativo:
   - Com npm:
     ```sh
     npm start
     ```
   - Com Yarn:
     ```sh
     yarn start
     ```
   - Com Bun:
     ```sh
     bun run start
     ```
3. Abra o aplicativo utilizando o Expo Go em seu dispositivo ou emulador.

## Considerações

- O projeto utiliza Expo para facilitar o desenvolvimento, gerenciamento de recursos e a compilação em diferentes plataformas.
- A lógica do jogo é centralizada em [GameScreen.tsx](http://_vscodecontentref_/0), onde são definidas as regras e a atualização dos palpites.
- Componentes reutilizáveis e estilos são organizados nas pastas [components](http://_vscodecontentref_/1) e [assets](http://_vscodecontentref_/2) para manter o código modular e de fácil manutenção.
