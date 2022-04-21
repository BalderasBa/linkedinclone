import React from "react";

import Header from "../components/Header";
import styled from "styled-components";
import Messages from "../components/Messages";

import SmallFooter from "../components/SmallFooter";
import Pub from "../components/Pub";
import Messagingcomp from "../components/Messagingcomp";

import uniqid from "uniqid";
import { msgs } from "../data";
import MsgFromSomone from "../components/MsgFromSomone";

function Messaging() {
  return (
    <Container>
      <Header active="messaging" />
      <Layout>
        <Leftside>
          {msgs.map((msgid) => {
            return <Messages key={uniqid()} message={msgid} />;
          })}
      {/* <Messagingcomp position={"sidebar"}/> */}
        </Leftside>
        <Content>
          <MsgFromSomone />
        </Content>
        <Rightside>
          <Pub />
          <SmallFooter />
        </Rightside>
      </Layout>
      <Messagingcomp />
    </Container>
  );
}
const Leftside = styled.div`
  grid-area: leftside;
`;
const Rightside = styled.div`
  grid-area: rightside;
  margin-left: 20px;
`;
const Content = styled.div`
  grid-area: main;
`;
const Container = styled.div`
  padding-top: 13.5vh;
  max-width: 100%;
`;
const Layout = styled.div`
  display: grid;
  grid-template-areas: "leftside main rightside";
  grid-template-columns: minmax(0, 3fr) minmax(0, 7fr) minmax(300px, 2fr);
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    padding: 0 5px;
  }
`;
export default Messaging;
