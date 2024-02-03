import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Lato', sans-serif;
        scroll-behavior: smooth;
    }

/* Estilo base da barra de rolagem */
::-webkit-scrollbar {
  width: 12px;
}

/* Estilo do trilho da barra de rolagem */
::-webkit-scrollbar-track {
  background-color: #000; /* Cor de fundo do trilho */
}

/* Estilo do "pulso" da barra de rolagem */
::-webkit-scrollbar-thumb {
  background: linear-gradient(to right, #ff1c0b, #ff4500); /* Gradiente de duas cores */
  border-radius: 10px; /* Borda arredondada */
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.9); /* Box shadow para um brilho leve */
}

/* Efeito de hover na barra de rolagem */
::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(to right, #ff4500, #ff1c0b); /* Inverter as cores no hover */
}



`