import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faChevronDown,
  faChevronUp,
  faContactBook,
  faFile,
  faHashtag,
  faPager,
  faPeopleArrows,
  faUserCheck,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
import SmallFooter from "./SmallFooter";
import Pub from "./Pub";
import { useState } from "react";

function NetworkLeftside() {
  const [up, setUp] = useState(false);
  return (
    <Container>
      <ArtCard>
        <UserInfo>
          <h2>Manage my network</h2>
        </UserInfo>
        <Widget up={up}>
          <li>
            <FontAwesomeIcon icon={faPeopleArrows} />
            <a href="#">
              Connections
              <span>500</span>
            </a>
          </li>
          <li>
            <FontAwesomeIcon icon={faContactBook} />
            <a href="#">
              Contacts
              <span>700</span>
            </a>
          </li>
          <li>
            <FontAwesomeIcon icon={faUserCheck} />
            <a href="#">
              People I Follow
              <span>30</span>
            </a>
          </li>
          <li>
            <FontAwesomeIcon icon={faUserGroup} />
            <a href="#">
              Groups
              <span>9</span>
            </a>
          </li>
          <li>
            <FontAwesomeIcon icon={faCalendar} />
            <a href="#">
              Events
              <span>...</span>
            </a>
          </li>
          <li>
            <FontAwesomeIcon icon={faFile} />
            <a href="#">
              Pages
              <span>65</span>
            </a>
          </li>
          <li>
            <FontAwesomeIcon icon={faPager} />
            <a href="#">
              Newsletters
              <span>...</span>
            </a>
          </li>
          <li>
            <FontAwesomeIcon icon={faHashtag} />
            <a href="#">
              Hashtags
              <span>13</span>
            </a>
          </li>
        </Widget>
        <Up
          onClick={() => {
            setUp(!up);
          }}
        >
          <p>Show {up ? "more" : "less"}</p>
          {up ? (
            <FontAwesomeIcon icon={faChevronDown} />
          ) : (
            <FontAwesomeIcon icon={faChevronUp} />
          )}
        </Up>
      </ArtCard>
      <Pub />
      <SmallFooter />
    </Container>
  );
}

const Container = styled.div`
  grid-area: leftside;
`;
const ArtCard = styled.div`
  text-align: center;
  margin-bottom: 8px;
  background-color: #fff;
  border-radius: 5px;
  transition: box-shadow 83ms;
  position: relative;
  border: none;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
`;
const UserInfo = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  padding: 12px;
`;
const Widget = styled.ul`
  list-style: none;
  width: 100%;
  overflow-y: hidden;
  height: ${(props) => (props.up ? "80px" : "fit-content")};
  li {
    padding: 10px 0;
    font-size: 12px;
    width: 70%;
    font-size: 15px;
    text-align: left;
    background-color: #fff;
    cursor: pointer;
    border-radius: 10px;
    display: flex;
    a {
      text-decoration: none;
      margin-left: 10px;
      font-size: 15px;
      color: #0009;
      display: inline-flex;
      flex: 1;
      justify-content: space-between;
      padding-right: 5px;

    }
    &:hover {
      a {
        color: #000;
      }
      background-color: rgba(0, 0, 0, 0.08);
    }
  }
`;
const Up = styled.button`
  border: none;
  outline: none;
  padding: 12px;
  font-size: 12px;
  width: 100%;
  text-align: center;
  background-color: #fff;
  cursor: pointer;
  p {
    display: inline-block;
    margin-right: 10px;
    font-size: 15px;
  }
  &:hover {
    background-color: rgba(0, 0, 0, 0.08);
  }
`;

export default NetworkLeftside;
