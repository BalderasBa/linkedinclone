import uniqid from "uniqid";
import { networks } from "../data";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

import cardBgSVG from "../images/card-bg.svg";

function Networker() {
  return (
    <Container>
      {networks.map((network) => {
        return (
          <Layout key={uniqid()}>
            <img src={cardBgSVG} alt="cover" />
            <LayoutContnet>
              <img src={network.profileImg} alt="avatar" />
              <h3>
                <a href="profile">{network.name}</a>
              </h3>
              <p>{network.bio}</p>
              <span>
                <FontAwesomeIcon icon={faLink} style={{ marginRight: "5px" }} />
                {network.mutfriends} mutuel connections
              </span>
              <a href="#">Connect</a>
            </LayoutContnet>
          </Layout>
        );
      })}
    </Container>
  );
}

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  /* height */
  height: fit-content;
  @media (max-width: 991px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 767px) {
    grid-template-columns: repeat(2, 1fr);
    margin-bottom: 100px;
  }
`;
const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  border-radius: 5px;
  overflow: hidden;
  min-height: 230px;
  > img {
    width: 100%;
    height: 60px;
  }
`;
const LayoutContnet = styled.div`
  position: relative;
  padding: 10px;
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  img {
    position: absolute;
    top: -20px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    cursor: pointer;
  }
  h3 {
    a {
      text-decoration: none;
      color: #000;
      :hover {
        text-decoration: underline;
      }
    }
  }
  p {
    margin-top: 10px;
    line-clamp: 2;
  }
  span {
    align-self: flex-start;
    color: #0009;
    font-size: 13px;
    display: flex;
    margin-top: 12px;
  }
  > a {
    text-decoration: none;
    border: 1px solid #0a66c2;
    border-radius: 10px;
    text-align: center;
    margin-top: 15px;
    padding: 5px;
    color: #0a66c2;
    background-color: transparent;
    width: 100px;
    cursor: pointer;
    transition: 200ms ease-out;
    &:hover {
      box-shadow: inset 0 0 0 1px rgba(13, 59, 145, 0.9);
      background-color: #9bc7f4;
    }
  }
`;

export default Networker;
