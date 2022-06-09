import React from "react";
import ico from "../../assets/ButtonTrash.png";
import {Container, MoreDetails, Description} from './styles'

const Card = ({item}) => {
  return (
    <Container>
      <Description>
        <h2>{item.description}</h2>
        <p>{item.type}</p>
      </Description>
      <MoreDetails>
        <p>{item.value}</p>
        <button>
          <img src={ico} alt="botao excluir" />
        </button>
      </MoreDetails>
    </Container>
  );
};

export default Card;
