import React from 'react'
import logo from '../../assets/logo.png'
import art from '../../assets/image.svg'
import {Link} from 'react-router-dom'
import {Container,
    Logo,
    BoxContent,
    ButtonStyled,
    MainText,
    DescriptionText,
    Art} from './styles'
    
const Home = () => {
    return (
        <Container>
            <BoxContent>    
            <Logo src={logo} alt="logomarca da aplicação"/>
            <MainText>Centralize o controle das suas finanças</MainText>
            <DescriptionText>de forma rápida e segura</DescriptionText>
            <Link to='/dashboard'><ButtonStyled>Iniciar</ButtonStyled></Link>
            </BoxContent>
            <Art src={art} alt="arte tela inicial"/>
        </Container>
    )
}
export default Home