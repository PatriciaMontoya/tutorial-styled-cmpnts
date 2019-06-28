import styled from 'styled-components'

const color = '#F15025'
const transition = (time) => `all ${time} linear`

export const ButtonWrapper = styled.button`
  /*Variables*/
  /* color: var(--primaryColor);
  font-size: 1rem;
  background: ${color};
  transition: ${transition("2s")};
  &:hover {
    background:black;
  } */

  /*Props*/
  color: ${props => props.color};
  font-size:  ${props => props.big ? "2rem" : "1rem"};
  ${props => `background:${props.background}`}

`