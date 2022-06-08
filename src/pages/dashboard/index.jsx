import React from "react";
import { Header } from "../../components/header";
import { BoxInputs } from "../../components/boxInputs";
import { Total } from "../../components/total";
import  ResumeMoney  from "../../components/resumeMoney";
import styled from "styled-components";
const Container = styled.section`
  width: 100vw;
`;
const BoxContent = styled.section`
  display: flex;
  width: 90%;
  justify-content: space-between;
  margin: 20px auto;
`;
const ContentInputs = styled.div`
  width: 35%;
`;
const ContainerResume = styled.div`
    width:60%;
    display: flex;
    flex-direction: column;

`
const Dashboard = () => {
  return (
    <Container>
      <Header />
      <BoxContent>
        <ContentInputs>
          <BoxInputs />
          <Total />
        </ContentInputs>
        <ResumeMoney />
      </BoxContent>
    </Container>
  );
};
export default Dashboard;
