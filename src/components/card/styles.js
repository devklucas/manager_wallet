import styled from 'styled-components'

export const Container = styled.section`
font-family: "Nunito", sans-serif;
width: 100%;
height: 80px;
display: flex;
justify-content: space-between;
background-color: #f8f9fa;
border-radius: 4px;
margin-bottom: 32px;
border-left: 4px solid ${(props) => props.type === "Entradas" ? "var(--secondary-color)" : "var(--Grey-2)"};
`;
export const MoreDetails = styled.span`
display: flex;
justify-content: space-around;
align-items: center;
h2 {
  font-size: 16px;
  font-weight: 700;
}
button {
  margin-left: 27px;
  margin-right: 40px;
  justify-content: flex-end;
  display:flex;
  border-radius:4px;
  align-items: center;
  justify-content: center;
}
`;

export const Description = styled.div`
margin-left: 30px;
height: 100%;
display: flex;
flex-direction: column;
justify-content: space-evenly;
h2 {
  font-weight: 700;
  font-size: 1 rem;
}
p {
  color: #868e96;
  font-size: 12px;
}
`;