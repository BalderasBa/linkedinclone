import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquare } from "@fortawesome/free-solid-svg-icons";

import { useState } from "react";
import styled from "styled-components";
import Works from "./Works";

// images:
import homelogoSVG from "../images/home-logo.svg";
import searchIconSVG from "../images/search-icon.svg";
import navHomeSVG from "../images/nav-home.svg";
import navNetworkSVG from "../images/nav-network.svg";
import navJobsSVG from "../images/nav-jobs.svg";
import navMessagingSVG from "../images/nav-messaging.svg";
import navNotificationsSVG from "../images/nav-notifications.svg";
import navWorkSVG from "../images/nav-work.svg";
import downIconSVG from "../images/down-icon.svg";

const Header = (props) => {
  const [showWorks, setShowWorks] = useState("close");
  const [me, setMe] = useState(false);

  const handlClickToPost = (e) => {
    e.preventDefault(e);
    if (e.target !== e.currentTarget) {
      return;
    }
    switch (showWorks) {
      case "open":
        setShowWorks("close");
        break;
      case "close":
        setShowWorks("open");
        break;
      default:
        setShowWorks("close");
        break;
    }
  };
  return (
    <Container>
      <Content>
        <Logo>
          <a href="home">
            <img src={homelogoSVG} alt="" />
          </a>
        </Logo>
        <Search>
          <div>
            <input type="text" placeholder="Search" />
          </div>
          <SearchIcon>
            <img src={searchIconSVG} alt="" />
          </SearchIcon>
        </Search>
        <Nav>
          <NavListWrap>
            <NavList className={props.active === "home" ? "active" : ""}>
              <a href="home">
                <img src={navHomeSVG} alt="" />
                <span>Home</span>
              </a>
            </NavList>

            <NavList className={props.active === "network" ? "active" : ""}>
              <a href="network">
                <img src={navNetworkSVG} alt="" />
                <span>My Network</span>
              </a>
            </NavList>

            {/* <NavList className={props.active === "jobs" ? "active" : ""}>
              <a href="jobs">
                <img src={navJobsSVG} alt="" />
                <span>Jobs</span>
              </a>
            </NavList> */}

            <NavList className={props.active === "messaging" ? "active" : ""}>
              <a href="messaging">
                <img src={navMessagingSVG} alt="" />
                <span>
                  Messaging <span>3</span>
                </span>
              </a>
            </NavList>

            <NavList
              className={props.active === "notifications" ? "active" : ""}
            >
              <a href="notifications">
                <img src={navNotificationsSVG} alt="" />
                <span>
                  Notifications <span>11</span>
                </span>
              </a>
            </NavList>

            <User className={props.active === "profile" ? "active" : ""}>
              <a
                href="#"
                onClick={() => {
                  if (me) {
                    setMe(false);
                  } else {
                    setMe(true);
                  }
                }}
              >
                <img src="https://i.ibb.co/ZcJ50Vs/screenshot.jpg" alt="" />
                <div>
                  <span>Me</span>
                  <img src={downIconSVG} alt="" />
                </div>
              </a>
            </User>

            <Works showWorks={showWorks} handlClickToPost={handlClickToPost} />
            <Work>
              <a
                href="#"
                onClick={() => {
                  if (showWorks == "open") {
                    setShowWorks("close");
                  } else {
                    setShowWorks("open");
                  }
                }}
              >
                <img src={navWorkSVG} alt="" />
                <div>
                  <span>Work</span>
                  <img src={downIconSVG} alt="" />
                </div>
              </a>
              <a href="#">Try Premium for free</a>
            </Work>
          </NavListWrap>
        </Nav>
      </Content>
      {me && (
        <Me>
          <UserInfo>
            <div>
              <Photo />
              <div>
                <Link>Hallousse Yehya</Link>
                <span>
                  Informatic engineer Web developer & Graphic Designer
                </span>
              </div>
            </div>
            <a href="profile">View Profile</a>
          </UserInfo>
          <Account>
            <h4>Account</h4>
            <a className="try-primium" href="#">
              <FontAwesomeIcon
                icon={faSquare}
                style={{ color: "#ffc925c4", marginRight: "5px" }}
              />
              Try Premium for free
            </a>
            <a href="#">Settings & Privacy</a>
            <a href="#">Help</a>
            <a href="#">Language</a>
          </Account>
          <Manage>
            <h4>Manage</h4>
            <a href="#">Posts & Activity</a>
            <a href="#">Job Posting Account</a>
          </Manage>
          <Manage>
            <a href="/">Sign Out</a>
          </Manage>
        </Me>
      )}
    </Container>
  );
};
const Manage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  border-bottom: 1px solid #0003;
  margin: 10px;
  padding-bottom: 5px;
  cursor: pointer;
  &:last-of-type {
    margin-bottom: 0;
    border: none;
  }
  h4 {
    padding-bottom: 8px;
  }
  a {
    text-decoration: none;
    color: #555;
    padding-bottom: 8px;
    font-size: 14px;
    &:hover {
      text-decoration: underline;
    }
  }
`;
const Account = styled(Manage)`
  .try-primium:first-child:hover {
    color: #fff;
  }
`;
const Photo = styled.img.attrs({
  src: "https://i.ibb.co/ZcJ50Vs/screenshot.jpg",
})`
  width: 20%;
  border-radius: 50%;
  margin-right: 15px;
  object-fit: cover;
  cursor: pointer;
`;

const Link = styled.a`
  text-decoration: none;
  font-size: 16px;
  line-height: 1.5;
  color: rgba(0, 0, 0, 0.9);
  font-weight: 600;
  cursor: pointer;
`;
const UserInfo = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  padding: 12px 12px 16px;
  display: flex;
  flex-direction: column;

  div {
    display: flex;
    div {
      display: flex;
      flex-direction: column;

      span {
        font-size: 14px;
        color: #555;
      }
    }
  }
  > a {
    border: 1px solid #0a66c2;
    border-radius: 10px;
    text-align: center;
    margin: 10px 0 0 0;
    padding: 5px 10px;
    color: #0a66c2;
    cursor: pointer;
    transition: 200ms ease-out;
    &:hover {
      color: #fff;
      background-color: #0a66c2;
    }
  }
`;
const Me = styled.div`
  position: absolute;
  top: 78px;
  right: 150px;
  background: white;
  border-radius: 0 0 5px 5px;
  width: 300px;
  transition-duration: 250ms;
  z-index: 1001;
  box-shadow: -1px 1px 0 1px rgb(0 0 0 / 10%), 0 0 0 rgb(0 0 0 / 20%);
`;
const Container = styled.div`
  background-color: white;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  left: 0;
  padding: 0 24px;
  margin: 0;
  position: fixed;
  top: 0;
  width: 100vw;
  height: 12.5vh;
  z-index: 1100;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  min-height: 100%;
  width: 90%;
`;

const Logo = styled.span`
  margin-right: 8px;
  font-size: 0px;
`;

const Search = styled.div`
  opacity: 1;
  flex-grow: 1;
  position: relative;
  margin-right: 10px;
  & > div {
    max-width: 280px;
    input {
      border: none;
      outline: none;
      box-shadow: none;
      background-color: #eef3f8;
      border-radius: 5px;
      color: rgba(0, 0, 0, 0.9);
      width: 278px;
      height: 34px;
      padding: 0 8px 0 40px;
      line-height: 1.75;
      font-weight: 200;
      font-size: 15px;
      border-color: #dce6f1;
    }
  }
  @media (max-width: 991px) {
    display: none;
  }
  @media (max-width: 767px) {
    display: block;
  }
`;

const SearchIcon = styled.div`
  position: absolute;
  width: 40px;
  z-index: 1;
  top: 10px;
  left: 2px;
  border-radius: 0 2px 2px 0;
  margin: 0;
  text-align: center;
  pointer-events: none;
`;

const Nav = styled.nav`
  margin-left: auto;
  display: block;
  @media (max-width: 768px) {
    position: fixed;
    left: 0;
    bottom: 0;
    background: white;
    width: 100%;
  }
`;

const NavListWrap = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-evenly;
  list-style-type: none;
`;

const NavList = styled.li`
  &.active {
    > a > span:after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      border-bottom: 2px solid var(--white, #fff);
      border-color: rgba(0, 0, 0, 0.9);
      transition: transform 200ms ease-in-out;
    }
  }
  display: flex;
  align-items: center;
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background: transparent;
    text-decoration: none;
    font-size: 12px;
    font-weight: 400;
    line-height: 1.5;
    min-height: 52px;
    min-width: 80px;
    position: relative;
    cursor: pointer;
    span {
      color: rgba(0, 0, 0, 0.6);
      /* display: flex; */
      /* align-items: center; */
      /* position: relative; */
      span {
        position: absolute;
        top: 0;
        right: 15px;
        width: 15px;
        height: 15px;
        color: #fff;
        background: red;
        font-size: 12px;
        text-align: center;
        border-radius: 50%;
      }
    }
    @media (max-width: 768px) {
      min-width: 70px;
    }
  }
  &:hover,
  &:active {
    a {
      span {
        color: rgba(0, 0, 0, 0.9);
      }
    }
  }
`;

const User = styled(NavList)`
  a > svg {
    width: 24px;
  }
  a > img {
    width: 24px;
    height: 24px;
    border-radius: 50%;
  }
  div {
    position: relative;
    display: flex;
    align-items: center;
  }
`;

const Work = styled(User)`
  border-left: 1px solid rgba(0, 0, 0, 0.08);
  a {
    &:last-child {
      color: #df901a;
      font-weight: 400;
      max-width: 100px;
      text-align: center;
      &:hover {
        color: #6b4205;
        text-decoration: underline;
      }
    }
  }
`;

export default Header;
