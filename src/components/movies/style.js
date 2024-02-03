// style.js
import styled from "styled-components";

export const Container = styled.div`
    padding: 20px 50px;
    width: 100%;

`;

export const Text = styled.p`
    color: white;
    font-size: 25px;
    font-weight: 600;
    line-height: 30px;
    position: relative;
    margin: 12px 0;
`;

export const Movie = styled.img`
    width: 210px;
    padding: 20px 5px 20px 5px;
    border-radius: 10px;
    cursor: pointer;
    position: relative; 

    &:hover{
        opacity: 0.8;
    }
`;
