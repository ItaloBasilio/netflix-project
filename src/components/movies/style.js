// style.js
import styled from "styled-components";

export const Container = styled.div`
    padding: 20px 60px;
    width: 100%;

    .react-multi-carousel-list{
        background: rgba(103,101,113,0.34);
        border-radius: 10px;
        border: 1px solid rgba(255,255,255,0.14);
        backdrop-filter: blur(10px);
        

        &li{
            display: flex;
            padding: 8px;
            align-items: center;
        }
    }
    
`;

export const Text = styled.p`
    color: white;
    font-size: 25px;
    font-weight: 600;
    line-height: 30px;
    position: relative;
    margin: 12px 0;

`

export const Movie = styled.img`
    width: 200px;
    padding:5px;
    border-radius: 10px;
    height: 250px;
    cursor: pointer;
    

    transform: scale(0.9);
    transition: 0.3s;

    &:hover {
        transform: scale(1);
    }
`;
