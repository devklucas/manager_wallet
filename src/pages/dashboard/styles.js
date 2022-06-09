import styled from 'styled-components'

export const Container = styled.section`
  width: 100vw;
`;
export const BoxContent = styled.section`
  display: flex;
  width: 90%;
  justify-content: space-between;
  margin: 20px auto;
  @media (max-width:900px){
    flex-direction: column;
  }
`;
export const ContentInputs = styled.div`
  width: 35%;
  @media (max-width:900px){
   width: 90%;
   margin: 0 auto ;
  }
`;
export const ContainerResume = styled.div`
    width:60%;
    display: flex;
    flex-direction: column;

`