import React from "react";
import ico from "../../assets/ButtonTrash.png";
import { useRelease } from "../../provider";
import {Container, MoreDetails, Description} from './styles'

const Card = ({item}) => {
  const {removeRelease} = useRelease()
  return (
    <Container type={item.type}>
      <Description>
        <h2>{item.description}</h2>
        <p>{item.type}</p>
      </Description>
      <MoreDetails>
        <p>{(Number(item.value)).toLocaleString("pt-BR", {style: "currency",currency: "BRL",})}</p>
        <button onClick={()=>removeRelease(item.id)}>
          <img src={ico} alt="botao excluir" />
        </button>
      </MoreDetails>
    </Container>
  );
};

export default Card;
