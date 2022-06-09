import React from "react"
import styled from 'styled-components'
import emptyCard from '../../assets/NoCard.png'

const Container = styled.div`
    h2{
        margin: 20px 0 20px 0;
        color: var(--Grey-3);
    }
    img{
        width:100%;
    }
    @media (max-width:900px){
        width:100%;
    }
    h2{
        font-size:22px;
    }
`
const NoCard = () => {
    return (
        <Container>
            <h2>Você ainda não possui nenhum lançamento</h2>
            <img src={emptyCard} alt='empty card'/>
            <img src={emptyCard} alt='empty card'/>
            <img src={emptyCard} alt='empty card'/>
        </Container>
    )
}
export default NoCard