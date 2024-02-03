import styled from 'styled-components';

export const Container = styled.header`
    background: linear-gradient(to bottom ,rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0) 100%);
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 60px;
    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.1);
    border:none;

    nav{
        display: flex;
        align-items: center;
        gap: 16px;

    }

    a{
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        line-height: 25px;
        letter-spacing: 0.03em;
        color: #e1e1e1;
        transform: 0.3s;
        text-decoration: none;
        position: relative;
    }


    a::after{
        content:"";
        width: 0;
        height: 1px;
        background-color: #ffffff;
        position:absolute ;
        bottom: -3px;
        left: 0;
        transition: 0.3s;
    }

    a:hover::after{
        width: 100%;
    }

`
