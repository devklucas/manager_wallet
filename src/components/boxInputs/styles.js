import styled from 'styled-components'

export const Container = styled.section`
    width:100%;
    height:300px;
    border:2px solid var(--Grey-2);
    margin-bottom:16px;
`
export const FormStyled = styled.form`
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
        height:38px;
        border-radius: 8px;
    }
    input{
        height:38px;
        border-radius:8px;
    }
    p{
        color:var(--Grey-3);
    }
` 
export const Label = styled.label`
    
`
export const InputName = styled.input`
    width:100%;
    background-color: var(--Grey-1);
    color:var(--Grey-4);
    outline: none;
    border:none;
    padding:10px;
    ::placeholder{
        padding-left: 10px;
        color:var(--Grey-3);
    }
`
export const Select = styled.section`
     display:flex; 
    justify-content: space-between;
    
`
export const BoxValue = styled.div`
    display:flex;
    flex-direction: column;
    width:40%;
    input{
    width:100%;
    background-color: var(--Grey-1);
    color:var(--Grey-3);
    outline: none;
    border:none;
    }
    input::placeholder{
        padding-left:10px;
    }
`
export const BoxType = styled.div`
    display: flex;
    flex-direction: column;
    width:55%;
    select{
    width:100%;
    height:38px;
    background-color: var(--Grey-1);
    color:var(--Grey-3);
    outline: none;
    border:none;
    border-radius:8px;
} 
`
