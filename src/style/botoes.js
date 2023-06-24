import styled from "styled-components"

export const Botao = styled.button `

    position: absolute;
    width: 343px;
    height: 110px;
    left: ${props=> props.left};
    top: 663px;

    background: #F7BB5D;
    border-radius: 39px;

    font-weight: 400px;
    font-size: 60px;
    line-height: 76px;

    color: white;
    border: none;

    &:hover{
        color:#F7BB5D;
        background:white;
    }

`

