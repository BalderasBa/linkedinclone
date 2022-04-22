import { useState } from "react";
import styled from "styled-components";
import PostModal from "./PostModal";

// images:
import userSVG from "../images/user.svg";
import imageSVG from "../images/image-icon.svg";
import videoSVG from "../images/video-icon.svg";
import eventSVG from "../images/event-icon.svg";
import articleSVG from "../images/article-icon.svg";
import shoingSVG from "../images/shoing-post.svg";
import ellipsisPNG from "../images/ellipsis.png";
import sharedImageSVG from "../images/shared-image.jpg";
import likeSVG from "../images/like-icon.svg";
import commentSVG from "../images/comment-icon.svg";
import shareSVG from "../images/share-icon.svg";
import sendSVG from "../images/send-icon.svg";

function Main() {
  const [showModal, setShowModal] = useState("close");
  const handlClickToPost = (e) => {
    e.preventDefault(e);
    if (e.target !== e.currentTarget) {
      return;
    }
    switch (showModal) {
      case "open":
        setShowModal("close");
        break;
      case "close":
        setShowModal("open");
        break;
      default:
        setShowModal("close");
        break;
    }
  };
  return (
    <Container>
      <Sharebox>
        <div>
          <img src={userSVG} alt="" />
          <button onClick={handlClickToPost}>Start a post</button>
        </div>
        <div>
          <button>
            <img src={imageSVG} alt="" />

            <span>Photo</span>
          </button>
          <button>
            <img src={videoSVG} alt="" />
            <span>Video</span>
          </button>
          <button>
            <img src={eventSVG} alt="" />
            <span>Event</span>
          </button>
          <button>
            <img src={articleSVG} alt="" />
            <span>Article</span>
          </button>
        </div>
      </Sharebox>
      <div>
        <Article>
          <SharedActor>
            <a>
              <img src={userSVG} alt="" />
              <div>
                <span>Yehya Hallousse</span>
                <span>
                  Informatic engineer, Front-End developer & Graphic Designer
                </span>
                <span>
                  13h
                  <img src={shoingSVG} alt="" />
                </span>
              </div>
            </a>
            <button>
              <img src={ellipsisPNG} alt="" />
            </button>
          </SharedActor>
          <Descrption>I visited this city, it's awsome &#128525;</Descrption>
          <ShareImg>
            <a>
              <img src={sharedImageSVG} alt="" />
            </a>
          </ShareImg>
          <SocialCounter>
            <li>
              <a>
                <img
                  src="https://static-exp1.licdn.com/sc/h/cpho5fghnpme8epox8rdcds22"
                  alt=""
                />
                <img
                  src="https://static-exp1.licdn.com/sc/h/b1dl5jk88euc7e9ri50xy5qo8"
                  alt=""
                />
                <img
                  src="https://static-exp1.licdn.com/sc/h/8ekq8gho1ruaf8i7f86vd1ftt"
                  alt=""
                />
                <img
                  src="https://static-exp1.licdn.com/sc/h/3wqhxqtk2l554o70ur3kessf1"
                  alt=""
                />
                <span>Some One and 145 other people</span>
              </a>
            </li>
            <li>
              <span>34 comments</span>
            </li>
          </SocialCounter>
          <SocialActions>
            <button>
              <img src={likeSVG} alt="" />
              <span>Like</span>
            </button>
            <button>
              <img src={commentSVG} alt="" />
              <span>Comment</span>
            </button>
            <button>
              <img src={shareSVG} alt="" />
              <span>Share</span>
            </button>
            <button>
              <img src={sendSVG} alt="" />
              <span>Send</span>
            </button>
          </SocialActions>
        </Article>
      </div>
      <PostModal showModal={showModal} handleClick={handlClickToPost} />
    </Container>
  );
}

const Container = styled.div`
  grid-area: main;
`;

const CommonCard = styled.div`
  text-align: center;
  overflow: hidden;
  margin-bottom: 8px;
  background-color: #fff;
  border-radius: 5px;
  position: relative;
  border: none;
  box-shadow: 0 0 0 1px rgb(0 0 0 /15%), 0 0 0 rgb(0 0 0 /20%);
`;

const Sharebox = styled(CommonCard)`
  display: flex;
  flex-direction: column;
  color: #958b7b;
  margin: 0 0 8px;
  background-color: white;

  div {
    button {
      outline: none;
      color: rgba(0, 0, 0, 0.6);
      font-size: 14px;
      line-height: 1.5;
      min-height: 48px;
      background: transparent;
      border: none;
      display: flex;
      align-items: center;
      font-weight: 600;
      border-radius: 5px;
      cursor: pointer;
      transition: 300ms;
      &:hover {
        background-color: #eee;
      }
    }
    &:first-child {
      display: flex;
      align-items: center;
      padding: 8px 16px 0 16px;

      img {
        width: 48px;
        border-radius: 50%;
        margin-right: 8px;
        cursor: pointer;
      }
      button {
        margin: 4px 0;
        flex-grow: 1;
        border-radius: 35px;
        padding-left: 60px;
        border: 1px solid rgba(0, 0, 0, 0.15);
        background-color: white;
        text-align: left;
        transition: 300ms;
        &:hover {
          background-color: #eee;
        }
      }
    }
    &:nth-child(2) {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      padding-bottom: 4px;
      overflow: hidden;
      button {
        img {
          margin: 0 4px 0 -2px;
        }
      }
    }
  }
`;

const Article = styled(CommonCard)`
  padding: 0;
  margin: 0 0 8px;
  overflow: visible;
`;

const SharedActor = styled.div`
  padding-right: 40px;
  flex-wrap: nowrap;
  padding: 12px 16px 0;
  display: flex;
  align-items: center;
  a {
    margin-right: 12px;
    flex-grow: 1;
    overflow: hidden;
    display: flex;
    text-decoration: none;

    img {
      width: 48px;
      height: 48px;
      border-radius: 50%;
      cursor: pointer;
    }

    & > div {
      display: flex;
      flex-direction: column;
      flex-grow: 1;
      flex-basis: 0;
      margin-left: 8px;
      overflow: hidden;

      span {
        text-align: left;
        &:first-child {
          color: black;
          font-size: 14px;
          font-weight: 700;
          cursor: pointer;
          &:hover {
            color: #0a66c2;
          }
        }
        &:nth-child(n + 1) {
          display: flex;
          align-items: center;
          font-size: 12px;
          color: rgba(0, 0, 0, 0.6);
          font-size: 13px;
        }
        img {
          margin-left: 3px;
          width: 17px;
          height: 17px;
        }
      }
    }
  }
  button {
    position: absolute;
    right: 12px;
    top: 0;
    background: transparent;
    border: none;
    outline: none;
    border-radius: 50%;
    cursor: pointer;
    img {
      width: 34px;
      height: 34px;
    }
    :hover {
      background-color: #0001;
    }
  }
`;

const Descrption = styled.div`
  padding: 0 16px;
  overflow: hidden;
  color: rgba(0, 0, 0, 0.9);
  font-size: 14px;
  text-align: start;
`;
const ShareImg = styled.div`
  margin-top: 8px;
  width: 100%;
  display: block;
  position: relative;
  background-color: #f9fafb;
  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;
const SocialCounter = styled.ul`
  line-height: 1.3;
  display: flex;
  align-items: flex-end;
  align-items: center;
  overflow: auto;
  margin: 0 16px;
  padding: 8px 0;
  border-bottom: 1px solid #e9e5df;
  list-style: none;

  li {
    margin-right: 5px;
    font-size: 12px;
    a {
      display: flex;

      img {
        margin-right: -5px;
      }
    }
    span {
      padding-left: 5px;
      cursor: pointer;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

const SocialActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 0;
  min-height: 40px;
  padding: 4px 8px;
  overflow: hidden;

  color: #00000099;
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-grow: 1;
    padding: 8px;
    color: #00000099;
    outline: none;
    border: none;
    cursor: pointer;
    border-radius: 3px;
    background-color: transparent;
    &:hover {
      background-color: #b8b8b8;
    }
    img {
      padding-right: 5px;
    }
    @media (max-width: 768px) {
      span {
        margin-left: 8px;
      }
    }
  }
`;

export default Main;
