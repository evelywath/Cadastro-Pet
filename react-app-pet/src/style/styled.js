import styled from 'styled-components'

export const ButtonSubmit = styled.a `
    background-color: #fff;
    border: 2px solid #ddd;
    color: #000;
    padding: 5px;
    &:hover{
        cursor: pointer;
        transition: all 0.4s;
        background-color: #151b26;
        color: #fff;
    }
`


export const FormPet = styled.form`
    width: 50%;
    height: 100%;
    background-color: #fff;
    padding: 40px;


    input {
        border: unset;
        outline: none;
        width: 100%;
        margin: 6px;
        border-bottom: 2px solid #ddd;
    }

    textarea {
        outline:none;   
        border-bottom: 2px solid #ddd;
    }
`


