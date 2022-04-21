import {
  faBullseye,
  faCompass,
  faGraduationCap,
  faGroupArrowsRotate,
  faLightbulb,
  faMoneyBills,
  faPersonCircleCheck,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const Container = styled.div`
  position: fixed;
  top: 12.5vh;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1222;
  background-color: #00000075;
  animation: fadeIn 300ms;
`;
const Content = styled.div`
  position: fixed;
  top: 12.5vh;
  right: 0;
  bottom: 0;
  width: 380px;
  overflow-y: auto;
  background-color: white;
  border-bottom-left-radius: 5px;
  border-top-left-radius: 5px;
  display: flex;
  flex-direction: column;
  transition: 300ms;
  padding: 10px 0;
`;
const Header = styled.div`
  display: block;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  font-size: 16px;
  line-height: 1.5;
  color: rgba(0, 0, 0, 0.6);
  font-weight: 400;
  margin: 0 10px;
  button {
    height: 40px;
    width: 40px;
    min-width: auto;
    color: rgba(0, 0, 0, 0.15);
    border-radius: 50%;
    border: none;
    background-color: transparent;
    cursor: pointer;
    &:hover {
      background-color: #00000010;
    }
    svg,
    img {
      pointer-events: none;
    }
  }
`;
const SharedContent = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  background: transparent;
  margin: 10px;
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  padding: 10px;
`;
const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px;
  cursor: pointer;
  text-align: center;

  svg,
  img {
    width: 30px;
    height: 30px;
    background-clip: content-box;
  }
  &:hover {
    box-shadow: -1px 1px 5px 0 #00000010;
  }
  span {
    padding-top: 5px;
    font-weight: 400;
    font-size: 14px;
    line-height: 1;
  }
`;
const SharedCreation = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const Assets = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid rgba(0, 0, 0, 0.15);
  padding: 10px;
  margin: 0 10px;
  &:last-child {
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }
  a {
    cursor: pointer;
    font-weight: bold;
    span {
      margin-left: 5px;
    }
  }
`;
const AssetBtn = styled.div`
  margin-bottom: 12px;
  cursor: pointer;
  p {
    font-weight: bold;
    font-size: 15px;
  }
  span {
    color: #888;
    font-size: 13px;
  }
  :hover {
    p {
      text-decoration: 1.5px underline #03a9f4;
    }
    span {
      text-decoration: 0.5px underline #03a9f4;
    }
  }
`;

const Works = (props) => {
  const iconsstyle = {
    color: "#0a66c2",
  };
  return (
    <>
      {props.showWorks === "open" && (
        <Container onClick={(e) => props.handlClickToPost(e)}>
          <Content>
            <Header>
              <h2>Visit More LinkedIn Products </h2>
              <button onClick={(e) => props.handlClickToPost(e)}>
                <img src="./images/close-icon.svg" alt="close button" />
              </button>
            </Header>
            <SharedContent>
              <UserInfo>
                <FontAwesomeIcon icon={faGraduationCap} style={iconsstyle} />
                <span>Learnig</span>
              </UserInfo>
              <UserInfo>
                <FontAwesomeIcon icon={faLightbulb} style={iconsstyle} />
                <span>Insights</span>
              </UserInfo>
              <UserInfo>
                <FontAwesomeIcon icon={faBullseye} style={iconsstyle} />
                <span>Advertise</span>
              </UserInfo>
              <UserInfo>
                <FontAwesomeIcon icon={faCompass} style={iconsstyle} />
                <span>Find Leads</span>
              </UserInfo>
              <UserInfo>
                <FontAwesomeIcon
                  icon={faGroupArrowsRotate}
                  style={iconsstyle}
                />
                <span>Groups</span>
              </UserInfo>
              <UserInfo>
                <FontAwesomeIcon
                  icon={faPersonCircleCheck}
                  style={iconsstyle}
                />
                <span>Services Marketplace</span>
              </UserInfo>
              <UserInfo>
                <FontAwesomeIcon icon={faMoneyBills} style={iconsstyle} />
                <span>Salary</span>
              </UserInfo>
            </SharedContent>
            <SharedCreation>
              <Header>
                <h1>LinkedIn Business Services</h1>
              </Header>
              <Assets>
                <AssetBtn>
                  <p>Talent Solutions</p>
                  <span>Find, attract and recruit talent</span>
                </AssetBtn>
                <AssetBtn>
                  <p>Sales Solutions</p>
                  <span>Unlock sales opportunities</span>
                </AssetBtn>
                <AssetBtn>
                  <p>Post a job for free</p>
                  <span>Get your job in front of quality candidates</span>
                </AssetBtn>
                <AssetBtn>
                  <p>Marketing Solutions</p>
                  <span>Acquire customers and grow your business</span>
                </AssetBtn>
                <AssetBtn>
                  <p>Learning Solutions</p>
                  <span>Develop talent across your organization</span>
                </AssetBtn>
              </Assets>
              <Assets>
                <a>
                  Create a Company Page
                  <span>
                    <FontAwesomeIcon icon={faPlus} />
                  </span>
                </a>
              </Assets>
            </SharedCreation>
          </Content>
        </Container>
      )}
    </>
  );
};

// ____________________________________

export default Works;
