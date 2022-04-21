import styled from "styled-components";
import Header from "../components/Header";
import Leftside from "../components/Leftside";
import Main from "../components/Main";
import Rightside from "../components/Rightside";
import Footer from "../components/Footer";
import Messagingcomp from "../components/Messagingcomp";

function Home() {
  return (
    <>
      <Header active="home" />
      <Container>
        <Layout>
          <Leftside />
          <Main />
          <Rightside />
        </Layout>
        <Footer />
        <Messagingcomp />
      </Container>
    </>
  );
}
const Container = styled.div`
  padding-top: 13.5vh;
  max-width: 100%;
`;

const Layout = styled.div`
  display: grid;
  grid-template-areas: "leftside main rightside";
  grid-template-columns: minmax(0, 5fr) minmax(0, 12fr) minmax(300px, 5fr);
  column-gap: 25px;
  row-gap: 25px;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    padding: 0 5px;
  }
`;

export default Home;
