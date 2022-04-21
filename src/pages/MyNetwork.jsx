import Header from "../components/Header";
import Networker from "../components/Networker";

import NetworkLeftside from "../components/NetworkLeftside";

import styled from "styled-components";
import Messagingcomp from "../components/Messagingcomp";

function MyNetwork() {
  return (
    <Container>
      <Header active="network" />
      <Layout>
        <NetworkLeftside />
        <Networker />
      </Layout>
      <Messagingcomp />
    </Container>
  );
}
const Container = styled.div`
  padding-top: 13.5vh;
  max-width: 100%;
  grid-area: main;
`;
const Layout = styled.div`
  display: grid;
  grid-template-areas: "leftside main";
  grid-template-columns: minmax(0, 3fr) minmax(0, 9fr);
  column-gap: 25px;
  row-gap: 25px;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column-reverse;
    padding: 0 5px;
  }
`;

export default MyNetwork;
