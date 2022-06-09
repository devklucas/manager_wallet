import React from "react";
import { useRelease } from "../../provider";
import {
  Container,
  FormStyled,
  Label,
  InputName,
  Select,
  BoxValue,
  BoxType,
} from "./styles";

const BoxInputs = () => {

    const {releases,setReleases,setFilter} = useRelease()

    const handleSubmit = (evt) => {
        evt.preventDefault();
        let input = evt.target;
        const length = releases.length
        const dados = {};
        dados.id = length === 0 ? 1 : length + 1
        for (let i = 0; i < input.length; i++) {
          const { name, value } = input[i];
          if (name) {
            dados[name] = value;
          }
        }
        setReleases([dados,...releases]);
        setFilter([dados,...releases])
    };
    return (
    <Container>
      <FormStyled onSubmit={(e)=>handleSubmit(e)}>
        <Label>Descriçao</Label>
        <InputName type="text" name="description" placeholder="Digite aqui sua descrição"></InputName>
        <p>Ex.:Compras de roupas</p>

        <Select>
          <BoxValue>
            <label>Valor</label>
            <input type="number" name="value" placeholder="1            R$" />
          </BoxValue>

          <BoxType>
            <label>Tipo de Valor</label>
            <select name="type" placeholder="Entradas">
              <option name="Entradas" value="Entradas">
                Entradas
              </option>
              <option name="Despesas" value="Despesas">
                Despesas
              </option>
            </select>
          </BoxType>
        </Select>
        <button type="submit">Inserir valor</button>
      </FormStyled>
    </Container>
  );
};
export default BoxInputs;
