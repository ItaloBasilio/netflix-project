import styled from "styled-components";

export const BackgroundImage = styled.div`
  height: 100vh;
  position: relative;
  background-image: url(${(props) => props?.bgImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: black;
    opacity: 0.5; /* Ajuste o valor de opacidade conforme necessário */
  }
`;

