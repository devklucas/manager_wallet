import React from 'react'
import styled from 'styled-components'
import Card from '../card'


const Container = styled.section`
    display:flex;
    width:60%;
    flex-direction: column;
`
const BoxTitle = styled.div`
    display:flex;
    width:100%;
    justify-content:space-between;
    align-items:center;
    div{
        display:flex;
    }
    button{
        height:40px;
        background-color:var(--Grey-2);
        border-radius:8px;
        margin-left:16px;
        padding:15px;
        display:flex;
        align-items: center;
        justify-content:center;
    }
    button:hover{
        background-color: var(--primary-color);
        color:var(--text-color);
    }
`
const BoxCards = styled.ul`
    margin-top:24px;
`
const Title = styled.h2``

const ResumeMoney = () => {
    return(
        <Container>
            <BoxTitle>    
            <Title>Resumo financeiro</Title>
            <div>
            <button>Todos</button>
            <button>Entradas</button>
            <button>Despesas</button>
            </div> 
            </BoxTitle>
            <BoxCards>
                <Card />
                <Card />
                <Card />
            </BoxCards>
        </Container>
    )
}
export default ResumeMoney