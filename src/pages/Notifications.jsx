import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Leftside from "../components/Leftside";

import Notification from "../components/Notification";
import uniqid from "uniqid";
import Messagingcomp from "../components/Messagingcomp";
import { notifics } from "../data";
import Pub from "../components/Pub";
import SmallFooter from "../components/SmallFooter";

const Rightside = styled.div`
  grid-area: rightside;
  @media (max-width: 767px) {
    display: flex;
    margin-bottom: 60px;
  }
`;
const Content = styled.div`
  grid-area: main;
`;
const Container = styled.div`
  padding-top: 13.5vh;
  max-width: 100%;
  .mobile {
    @media (max-width: 767px) {
      display: none;
    }
  }
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

const Notifications = () => {
  return (
    <div>
      <Container>
        <Header active="notifications" />
        <Layout>
          <div className="mobile">
            <Leftside />
          </div>
          <Content>
            {notifics.map((notif) => {
              return <Notification notific={notif} key={uniqid()} />;
            })}
          </Content>
          <Rightside>
            <Pub />
            <SmallFooter />
          </Rightside>
        </Layout>
      </Container>
      <Messagingcomp />
    </div>
  );
};

export default Notifications;
