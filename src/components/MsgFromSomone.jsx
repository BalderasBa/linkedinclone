import React, { useState } from "react";
import styled from "styled-components";
import { faEllipsis, faVideoCamera } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Messages from "./Messages";
import uniqid from "uniqid";
import { msgs } from "../data";
import MsgsFromId from "./MsgsFromId";

const Container = styled.div`
  border: 1px solid #0002;
  background-color: #fff;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  box-shadow: -2px -2px 5px 0 #00000010;
  width: 100%;
  transition: 300ms ease-out;
`;
const Header = styled.div`
  user-select: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
  font-size: 16px;
  color: #00000099;
  border-bottom: 1px solid #0003;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  height: 30px;
  a {
    text-decoration: none;
    font-weight: bold;
    display: block;
    color: #000;
    cursor: pointer;
  }
  svg {
    margin-left: 5px;
    padding: 5px;
    border-radius: 50%;
    cursor: pointer;
    &:hover {
      background-color: #0002;
    }
  }
  .online {
    width: 5px;
    height: 5px;
    display: inline-block;
    border-radius: 50%;
    background-color: #fff;
    border: 3px solid lightgreen;
    margin-right: 5px;
  }
  .availabe {
    font-size: 12px;
  }
`;
const Body = styled.div`
  display: flex;
  flex-direction: column;
  height: 55vh;
  overflow-x: hidden;
  overflow-y: scroll;
  .messages-body {
    .messages-body-body {
      display: flex;
      h3 {
        display: inline-block;
        margin-right: 10px;
        cursor: pointer;
        :hover {
          color: #0a66c2;
          text-decoration: underline;
        }
      }
      p {
        display: block;
      }
    }
    text-decoration: none;
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 5px 0;
    img {
      width: 48px;
      height: 48px;
      border-radius: 50%;
      margin-right: 10px;
      display: inline-block;
    }
    h3 {
      color: #000;
    }
    p {
      color: #0008;
      font-size: 0.8rem;
      line-height: 1.33;
      overflow: hidden;
      height: 30px;
      line-clamp: 1;
      span {
        margin-right: 5px;
      }
    }
    div > span {
      color: #0008;
      font-size: 0.8rem;
    }
  }
`;
const MsgDateTime = styled.p`
  text-align: center;
  position: relative;
  color: #0008;
  font-size: 12px;
  letter-spacing: 2px;
  ::before {
    content: "";
    position: absolute;
    top: 50%;
    transform: translateX(-110%);
    height: 1px;
    width: 20%;
    background-color: #0003;
  }
  ::after {
    content: "";
    position: absolute;
    top: 50%;
    transform: translateX(10%);
    height: 1px;
    width: 20%;
    background-color: #0003;
  }
`;

function MsgFromSomone() {
  // const {...msgsfromHim} = msgs;//spread msgs from id person
  const [messages, setMessages] = useState(false);

  // from here start copy post modal
  const [editorText, setEditorText] = useState("");
  return (
    <Container messagesOn={messages}>
      <Header onClick={() => setMessages(!messages)}>
        <div>
          <a href="/profile">Some One</a>
          <span className="online"></span>
          <span className="availabe">available on mobile</span>
        </div>
        <div>
          <FontAwesomeIcon icon={faEllipsis} />
          <FontAwesomeIcon icon={faVideoCamera} />
        </div>
      </Header>
      <Body>
        {/* {console.log(
          msgs
            .filter((msg) => msg.userid === "1234")
            .map((msgid) => msgid.msgsfromHim[0].time)
        )} */}
        {/* {console.log(
          msgs
            .filter((msgid) => msgid.userid == "1")
            .map((allmsgs) => allmsgs.msgsfromHim.map((m) => m.time))
        )} */}
        {msgs
          .filter((msgid) => msgid.userid == "1")
          .map((allmsgs) =>
            allmsgs.msgsfromHim.map((m) => {
              return <MsgsFromId key={uniqid()} m={m} />;
            })
          )}
      </Body>
      {/* // from here start copy post modal */}

      <Content>
        <Editor>
          <textarea
            value={editorText}
            onChange={(e) => setEditorText(e.target.value)}
            name="post-text"
            id="post-text"
            placeholder="Write a message…"
            autoFocus={true}
          />
        </Editor>
        <SharedCreation>
          <Assets>
            <AssetBtn>
              <img src="/images/image-icon.svg" alt="" />
              <span>Attach a photo</span>
            </AssetBtn>
            <AssetBtn>
              <img src="/images/file-icon.svg" alt="" />
              <span>Attach a file</span>
            </AssetBtn>
            <AssetBtn>
              <img src="/images/gif-icon.svg" alt="" />
              <span>Open GIF Keyboard</span>
            </AssetBtn>
            <AssetBtn>
              <img src="/images/emoji-icon.svg" alt="" />
              <span>Open Emoji Keyboard</span>
            </AssetBtn>
          </Assets>
          <ShareComment>
            <PostButton disabled={!editorText ? true : false}>Send</PostButton>
            <Assetshare>
              <img src="/images/ellipsis.svg" alt="" />
            </Assetshare>
          </ShareComment>
        </SharedCreation>
      </Content>
    </Container>
  );
}
const Content = styled.div`
  width: 100%;
  background-color: white;
  border-radius: 5px;
  position: relative;
  display: flex;
  flex-direction: column;
`;

const Editor = styled.div`
  border-top: 1px solid #0002;
  border-bottom: 1px solid #0002;
  padding: 5px 10px;
  textarea {
    width: 100%;
    min-height: 70px;
    resize: none;
    outline: none;
    border: none;
    font-size: 14px;
    line-height: 1.5;
  }
`;
const SharedCreation = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 12px 24px 12px 16px;
  background-color: #00000014;
`;
const PostButton = styled.div`
  text-align: center;
  min-width: 60px;
  border-radius: 20px;
  padding: 3px 5px;
  margin-right: 10px;
  text-decoration: none;
  background-color: ${(props) => (props.disabled ? "#00000080" : "#0a66c2")};
  color: ${(props) => (props.disabled ? "#c1c1c1" : "#fff")};
  transition: 400ms;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => (props.disabled ? "#00000080" : "#004182")};
  }
`;

const Assets = styled.div`
  display: flex;
  align-items: center;
`;
const AssetBtn = styled.div`
  height: 24px;
  width: 24px;
  min-width: auto;
  color: #00000040;
  padding-right: 10px;
  position: relative;
  cursor: pointer;
  span {
    display: inline-block;
    position: absolute;
    top: -35px;
    left: -20px;
    width: max-content;
    background-color: white;
    color: #00000080;
    padding: 5px 10px;
    border-radius: 5px;
    box-shadow: 0 1px 0 #00000080;
    display: none;
    opacity: 0;
    transition: 300ms;
  }
  img {
    &:hover + span {
      display: block;
      opacity: 1;
    }
  }
`;
const Assetshare = styled(AssetBtn)`
  width: 100%;
  display: flex;
  align-items: center;

  p {
    width: max-content;
    padding: 5px;
    margin-right: 10px;
    color: #8f8f8f;
    &:hover {
      color: #0f0f0f;
    }
  }
`;
const ShareComment = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  ${Assetshare} {
    svg {
      margin-right: 5px;
    }
  }
`;
export default MsgFromSomone;
