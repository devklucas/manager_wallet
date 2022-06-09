import React from 'react'
import styled from 'styled-components'
import { useRelease } from '../../provider'
import Card from '../card'


const Container = styled.section`
    display:flex;
    width:60%;
    flex-direction: column;
    @media (max-width:900px){
        display:none; 
    }
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
    @media (max-width:900px){
    
  }
`
const BoxCards = styled.ul`
    margin-top:24px;
    @media (max-width:900px){
    
  }
`
const Title = styled.h2``

const ResumeMoney = () => {
    const {filter,selectFilter} = useRelease()
    return(
        <Container>
            <BoxTitle>    
            <Title>Resumo financeiro</Title>
            <div>
            <button onClick={()=>selectFilter("all")}>Todos</button>
            <button onClick={()=>selectFilter("earn")}>Entradas</button>
            <button onClick={()=>selectFilter("pay")}>Despesas</button>
            </div> 
            </BoxTitle>
            <BoxCards>
                {filter && filter.map((item) =>{ 
                    return <Card key={item.id} item={item}/>
                    }
                )}
            </BoxCards>
        </Container>
    )
}
export default ResumeMoney