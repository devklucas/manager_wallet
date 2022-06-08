// import React from "react";
// import ico from "./img/btnexcluir.png";
// import "./card.css";

// function Card({ description, type, value, listTransactions, setListTransactions, setListFilter }) {

//   const handleClick = (evt) =>{
//       let click = evt.target
//       let card = click.parentElement.className

//       const excluir = listTransactions.filter(item => item.description !== card ? item : null)

//        setListTransactions(excluir)
//        setListFilter(excluir)

//       return
//   }
//   return (
//     <section className={`card ${type}`}>
//       <div>
//         <h2>{description}</h2>
//         <p>{type}</p>
//       </div>
//       <span>
//         <p>{value.toLocaleString("pt-br", {style: "currency",currency: "BRL"})}</p>
//         <button className={description} onClick={(evt)=>handleClick(evt)}>
//           <img src={ico} alt="botao excluir" />
//         </button>
//       </span>
//     </section>
//   );
// }
// export default Card;
import React from "react";
import styled from "styled-components";
import ico from "../../assets/ButtonTrash.png";

const Container = styled.section`
  font-family: "Nunito", sans-serif;
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  background-color: #f8f9fa;
  border-radius: 4px;
  border-left: 4px solid red;
  margin-bottom: 32px;
  //border-left: 4px solid propsentradas#03B898  Despesas#E9ECEF
`;
const MoreDetails = styled.span`
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
  }
`;

const Description = styled.div`
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
const Card = () => {
  return (
    <Container>
      <Description>
        <h2>description</h2>
        <p>tipo</p>
      </Description>
      <MoreDetails>
        <p>R$10</p>
        <button>
          <img src={ico} alt="botao excluir" />
        </button>
      </MoreDetails>
    </Container>
  );
};

export default Card;
