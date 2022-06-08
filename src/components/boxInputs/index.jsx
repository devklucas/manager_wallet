import React from 'react'
import styled from 'styled-components'

const Container = styled.section`
    width:100%;
    height:351px;
    border:2px solid var(--Grey-2);
    margin-bottom:16px;
`
const FormStyled = styled.form`
    width:90%;
    height:100%;
    display:flex;
    flex-direction: column;
    justify-content: space-around;
    flex-wrap: wrap;
    margin: 0 auto;
    color:var(--Grey-4);
    button{
        background-color: var(--primary-color);
        color:var(--text-color);
        height:48px;
        border-radius: 8px;
    }
    input{
        height:48px;
        border-radius:8px;
    }
    p{
        color:var(--Grey-3);
    }
` 
const Label = styled.label`
    
`
const InputName = styled.input`
    width:100%;
    background-color: var(--Grey-1);
    color:var(--Grey-3);
    outline: none;
    border:none;
    ::placeholder{
        padding-left:10px;
        color:var(--Grey-3);
    }
`
const Select = styled.section`
     display:flex; 
    justify-content: space-between;
    
`
const BoxValue = styled.div`
    display:flex;
    flex-direction: column;
    input{
    width:128px;
    background-color: var(--Grey-1);
    color:var(--Grey-3);
    outline: none;
    border:none;
    }
    input::placeholder{
        padding-left:10px;
    }
`
const BoxType = styled.div`
    display: flex;
    flex-direction: column;
    select{
    width:128px;
    height:48px;
    background-color: var(--Grey-1);
    color:var(--Grey-3);
    outline: none;
    border:none;
    border-radius:8px;
} 
`
export const BoxInputs = () => {
    return (
        <Container>
            <FormStyled>
                <Label>Descriçao</Label>
                <InputName placeholder='Digite aqui sua descrição'></InputName>
                <p>Ex.:Compras de roupas</p> 
                
                <Select>
                
                <BoxValue>
                <label >Valor</label>
                <input type="number" name="value" placeholder="1            R$"/>
                </BoxValue>

                <BoxType>
                <label >Tipo de Valor</label>
                <select name="type" placeholder="Entrada">
                <option name="Entradas" value="Entradas">
                    Entradas
                </option>
                <option name="Despesas" value="Despesas">
                    Despesas
                </option>
                </select>
                </BoxType>

                </Select>
                
                <button type='submit'>Inserir valor</button>
            </FormStyled>
        </Container>
    )
}