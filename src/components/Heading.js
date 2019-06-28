import React from 'react'
import './Heading.css'
import { ButtonWrapper } from './Button'


export default function Heading() {
    return (
        <div>
            <h1 className="third"> I'm a separate css file </h1>
            <ButtonWrapper> Heading.js </ButtonWrapper>
        </div>
    )
}
