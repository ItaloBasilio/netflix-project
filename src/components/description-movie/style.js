import styled from 'styled-components'

export const Container = styled.div`
    width: 610px;
    padding: 50px 60px 20px;
    display: flex;
    flex-direction: column;
`;

export const Title = styled.h1`
    z-index: 1;
    font-weight: 700;
    font-size: 45px;
    color: #fff;
`;

export const Description = styled.p`
    z-index: 1;
    margin-top: 30px;
    font-weight: 500;
    font-size: 22px;
    color: #fff;
    opacity: 0.8;
`;

export const Button = styled.button`
    z-index: 1;
    cursor: pointer;
    width: 220px;
    height: 60px;
    padding-right: 20px;
    padding-left: 15px;
    margin-top: 50px;
    background: #ff1c0b;
    border-radius: 9px;
    border: none;
    box-shadow: 0 0 0 0.9px black;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;

    font-weight: 500;
    font-size: 22px;
    color: #fff;
    transition: 0.3s;

    &:hover{
        background: #cc1609 ;

    }

    &:active{
        background: #a31607;
    }

`;