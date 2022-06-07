import styled from 'styled-components'

export const Container = styled.main`
    background-color:var(--Grey-4);
    height:100vh;
    width:100vw;
    display:flex;
    justify-content: space-around;
    align-items: center;

`
export const Logo = styled.img`
    width:122px;
    height:20px;

`
export const BoxContent = styled.div`
    width:20%;
    height:50%;
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    color:var(--text-color);
   
@media (max-width:1024px){
    width:80%;
    height: 70%;
    margin: 0 auto;
}
`
export const ButtonStyled = styled.button`
    background-color: var(--primary-color);
    color:var(--text-color);
    width:90%;
    height:3rem;
    border-radius: 8px;
`
export const MainText = styled.span`
    font-size:2.4rem;
    font-weight:800;
    
`
export const DescriptionText = styled.p`
    font-size:1rem;
    font-weight: 400;
`
export const Art = styled.img`
    width: 40%;
    height: 90%;
@media (max-width: 1024px){
    display:none;   
}
`