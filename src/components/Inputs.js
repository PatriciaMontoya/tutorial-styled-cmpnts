import styled from 'styled-components'

export const InputBasic = styled.input`
    font-size: 1rem;
    margin: 1rem;
    padding: 0.5rem;
    color: blue;
    ::placeholder {
        color: red;
    }
`

export const InputEmail = styled.input.attrs(props => ({
        type: 'email',
        placeholder: 'pato@correo.com'
    }))`
    font-size: 1rem;
    margin: 1rem;
    padding: 0.5rem;
    color: blue;
    ::placeholder {
        color: red;
    }
`

export const InputAwesome = styled.input.attrs(props => ({
        type: props.type || 'text',
        placeholder: props.placeholder || 'Enter value'
    }))`
    font-size: 1rem;
    margin: 1rem;
    padding: 0.5rem;
    color: blue;
    ::placeholder {
        color: red;
    }

`