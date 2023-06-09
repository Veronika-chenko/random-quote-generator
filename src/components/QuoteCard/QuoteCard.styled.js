import styled from "styled-components";

export const Card = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 400px;

    padding: 30px;
    background-color: #fff;
    border-radius: 20px;
    box-shadow: 0 25px 45px rgba(0, 0, 0, 0.05);

    @media screen and (min-width: 768px) {
        max-width: 600px;
    }
    
    &::before {
        position: absolute;
        top: -200px;
        left: -250px;
        content: "";
        display: block;
        width: 380px;
        height: 380px;
        border-radius: 50%;
        box-shadow: rgba(255, 255, 255, 0.15) inset -10px -10px 10px 2px; 
    }

    &::after {
        position: absolute;
        top: 20px;
        right: -370px;
        content: "";
        display: block;
        width: 400px;
        height: 400px;
        border-radius: 50%;
        box-shadow: rgba(255, 255, 255, 0.15) inset -20px -20px 30px; 
    }
`

export const Title = styled.h1`
    font-size: 35px;
    font-weight: 600;
    margin-bottom: 35px;
`

export const Quote = styled.p`
    font-size: 22px;
    text-align: center;
    margin-bottom: 35px;
    
`

export const Author = styled.p`
    display: flex;
    align-self: flex-end;
    align-items: center;
    gap: 5px;
    margin-bottom: 35px;

    font-size: 18px;
    font-style: italic;

    &::before {
        content: "";
        display: block;
        width: 20px;
        height: 1px;
        background-color: #000;
        border-radius: 1px;
    }
`

export const Footer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 16px;
    width: 100%;
    padding-top: 16px;
    border-top: 1px solid #ccc;
    @media screen and (min-width: 768px) {
        flex-direction: row;
    }
`

export const FeaturesContainer = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    @media screen and (max-width: 767.98px) {
        align-self: flex-end;
    }
`

export const FeatureButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 47px;
    height: 47px;
    border-radius: 50%;
    border: 1px solid #5372F0;
    transition: background-color 300ms linear;

    &:hover {
        background-color: #5372F0;
        & svg {
            fill: #fff;
        }
    }

    & svg {
        width: 15px;
        height: 15px;
        fill: #5372F0;
        transition: fill 300ms linear;
    }
`

export const FeatureLink = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 47px;
    height: 47px;
    border-radius: 50%;
    border: 1px solid #5372F0;
    transition: background-color 300ms linear;

    &:hover {
        background-color: #5372F0;
        & svg {
            fill: #fff;
        }
    }

    & svg {
        width: 15px;
        height: 15px;
        fill: #5372F0;
        transition: fill 300ms linear;
    }
`

export const NewQuoteButton = styled.button`
    padding: 10px 20px;

    font-family: 'Poppins';
    font-size: 16px;

    color: #fff;
    background-color: #5372F0;
    border-radius: 30px;
    border: 1px solid transparent;

    transition: color 300ms linear, background-color 300ms linear;

    &:hover {
        color: #5372F0;
        background-color: #fff;
        border: 1px solid #5372F0;
    }

    @media screen and (max-width: 767.98px) {
        width: 100%;
    }
`
