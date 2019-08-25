import styled from 'styled-components';

import background from '../../assets/background_connect.png'

export const Container = styled.section`
    background-image: url(${background});
`;

export const Box = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-image: url(${background});
`;

export const Input = styled.input`
    width: 300px;
    height: 50px;
    background: white;
    border: none;
    border-radius: 5px;
    margin-top: 10px;
    padding: 10px;
    font-size: 16px;
    font-weight: bold;
    color: black;
`;

export const Button = styled.button`
    width: 300px;
    height: 50px;
    background: #021443;
    border: none;
    border-radius: 5px;
    margin-top: 20px;
    font-size: 16px;
    font-weight: bold;
    color: white;
`;

export const Img = styled.img`
    margin-top: 10px;
    margin-bottom: 20px;
`;

export const Paragraph = styled.a`
    margin-top: 10px;
    font-weight: bold;
    color: black;
`;


