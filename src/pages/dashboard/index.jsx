import React from "react";
import { Header } from "../../components/header";
import BoxInputs from "../../components/boxInputs";
import { Total } from "../../components/total";
import ResumeMoney from "../../components/resumeMoney";

import { Container, BoxContent, ContentInputs } from "./styles";

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
