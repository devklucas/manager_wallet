import React from 'react'
import logo from '../../assets/logoBlack.png'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Container = styled.div`
    width:100vw;
    background-color:var(--Grey-1);
    height:60px;
    box-shadow: 0px 4px 20px -12px #000000;
`
const BoxContent = styled.div`
    width:90%;
    height:100%;
    margin: 0 auto;
    align-items: center;
    display:flex;
    justify-content:space-between;
`
const ButtonStyled = styled.button`
    width:64px;
    height:40px;
    background-color:var(--Grey-2);
    border-radius: 8px;
`
export const Header = () => {
    return (
        <Container>
            <BoxContent>
                <img src={logo} alt='logomarca'/>
                <Link to='/'><ButtonStyled>Inicio</ButtonStyled></Link>
            </BoxContent>        
        </Container>

    )
}