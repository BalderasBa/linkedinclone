import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarPlus, faPlus } from "@fortawesome/free-solid-svg-icons";

import styled from "styled-components";
import Pub from "./Pub";

import feedSVG from "../images/feed-icon.svg";
import userSVG from "../images/user.svg";
import rightSVG from "../images/right-icon.svg";


function Rightside() {
  return (
    <Container>
      <FollowCard>
        <Title>
          <h2>Add to your feed</h2>
        <img src={feedSVG} alt="" />
        </Title>

        <FeedList>
          <li>
            <FontAwesomeIcon icon={faCalendarPlus} size="3x" />
            <div>
              <span>#Linkedin</span>
              <button>Follow</button>
            </div>
          </li>
          <li>
            <FontAwesomeIcon icon={faCalendarPlus} size="3x" />
            <div>
              <span>#Video</span>
              <button>Follow</button>
            </div>
          </li>
        </FeedList>

        <Recommendation>
          View all recommendations
        <img src={rightSVG} alt="" />
        </Recommendation>
      </FollowCard>
      <Pub/>
      <FollowCard>
        <Title>
          <h2>Add to your feed</h2>
        <img src={feedSVG} alt="" />
        </Title>

        <FeedList>
          <li>
        <img src={userSVG} alt="" />
            <div>
              <span>Missis One</span>
              <button>
                <FontAwesomeIcon icon={faPlus} /> follow
              </button>
            </div>
          </li>
          <li>
        <img src={userSVG} alt="" />
            <div>
              <span>Mister Two</span>
              <button>
                <FontAwesomeIcon icon={faPlus} /> follow
              </button>
            </div>
          </li>
          <li>
        <img src={userSVG} alt="" />
            <div>
              <span>Madame Three</span>
              <button>
                <FontAwesomeIcon icon={faPlus} /> follow
              </button>
            </div>
          </li>
        </FeedList>

        <Recommendation>
          View all recommendations
        <img src={rightSVG} alt="" />
        </Recommendation>
      </FollowCard>
    </Container>
  );
}


const Container = styled.div`
  grid-area: rightside;
`;
const FollowCard = styled.div`
  text-align: center;
  overflow: hidden;
  margin-bottom: 8px;
  background-color: #fff;
  border-radius: 5px;
  position: relative;
  border: none;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
  padding: 12px;
`;

const Title = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  font-size: 16px;
  width: 100%;
  color: rgba(0, 0, 0, 0.6);
`;

const FeedList = styled.ul`
  list-style: none;
  li {
    display: flex;
    align-items: center;
    margin: 12px 0;
    position: relative;
    font-size: 14px;
    > svg,
    > img {
      color: #0a66c2;
      width: 40px;
      margin-right: 20px;
    }
    & > div {
      display: flex;
      flex-direction: column;
    }
    button {
      border: 1px solid #0a66c2;
      border-radius: 10px;
      outline: none;
      text-align: center;
      margin: 10px 0 0 0;
      color: #0a66c2;
      background-color: transparent;
      width: 100px;
      height: 25px;
      cursor: pointer;
      transition: 200ms ease-out;
      &:hover {
        box-shadow: inset 0 0 0 1px rgba(13, 59, 145, 0.9);
      }
    }
  }
`;

const Recommendation = styled.a`
  color: #0a66c2;
  display: flex;
  align-items: center;
  font-size: 14px;
  cursor: pointer;
  img {
    margin-left: 10px;
  }
  &:hover {
    img {
      transform: translateX(5px);
    }
  }
`;

export default Rightside;
