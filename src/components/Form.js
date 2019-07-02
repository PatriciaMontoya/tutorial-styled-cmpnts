import React from 'react'
import styled from 'styled-components'

export default function Form() {
    return (
        <FormWrapper>
            <h2>Sign up Form</h2>
            <form>
                <input type="text" name="" id="" placeholder="pmh@correo.com"/>
                <button type="submit">Submit</button>
            </form>
        </FormWrapper>
    )
}

const FormWrapper = styled.section`
    text-align: center;
    font-family: ${props => props.theme.fontFamily};
    background: ${props => props.theme.background};
    color: ${props => props.theme.color};
    padding: 3rem;
    input {
        background: ${props => props.theme.background};
        border: 2px solid ${props => props.theme.color};
        width: 100%;
        margin: 1rem 0;
        padding: 0.25rem;
        ::placeholder {
            color: ${props => props.theme.color};
            font-family: ${props => props.theme.fontFamily};
        }
    }
    button {
        font-family: ${props => props.theme.fontFamily};
        background: ${props => props.theme.background};
        color: ${props => props.theme.color};
        border: 2px solid ${props => props.theme.color};
        transition: all 2s linear;
        width: 100%;
        :hover {
            background: ${props => props.theme.color};
            color: ${props => props.theme.background};
        }
    }

`