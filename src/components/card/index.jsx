import React from "react";
import ico from "../../assets/ButtonTrash.png";
import { useRelease } from "../../provider";
import {Container, MoreDetails, Description} from './styles'

const Card = ({item}) => {
  const {removeRelease} = useRelease()
  return (
    <Container>
      <Description>
        <h2>{item.description}</h2>
        <p>{item.type}</p>
      </Description>
      <MoreDetails>
        <p>{item.value}</p>
        <button onClick={()=>removeRelease(item.id)}>
          <img src={ico} alt="botao excluir" />
        </button>
      </MoreDetails>
    </Container>
  );
};

export default Card;
