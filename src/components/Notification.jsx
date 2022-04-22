import React, { useState } from "react";
import styled from "styled-components";
import { faBellSlash, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ellipsisSVG from "../images/ellipsis.svg";
import userSVG from "../images/user.svg";



const Notific = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: none;
  height: 75px;
  > img {
    width: 50px;
    height: 50px;
    margin-right: 10px;
    cursor: pointer;
    border-radius: 50%;
    object-fit: cover;
  }
  a {
    font-size: 14px;
    color: #000000e6;
    text-decoration: none;
    line-height: 20px;
    display: flex;
  }
  .ellipsis {
    align-self: flex-end;
  }
`;
const Not = styled.div`
  background-color: #fff;
  position: absolute;
  right: 370px;
  z-index: 10;
  display: flex;
  flex-direction: column;
  padding: 10px;
  border-radius: 10px;
  border-top-right-radius: none;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
`;
const Line = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
  padding: 2px;
  .icons {
    width: 20px;
    display: flex;
    justify-content: center;
    margin-right: 5px;
  }
  .icons-desc {
    margin-left: 5px;
    display: flex;
    flex-direction: column;
    span {
      color: #00000070;
    }
  }
  :hover {
    background-color: #00000010;
  }
`;

const Notification = (props) => {
  const [showNot, setShowNot] = useState(false);
  return (
    <Notific>
      <img src={userSVG} alt="" />
      <a href="#">{props.notific.not}</a>
      <div>
        <span>{props.notific.time}</span>
        <a href="#">
          <img
            className="ellipsis"
            src={ellipsisSVG}
            alt=""
            onClick={() => setShowNot(!showNot)}
          />
          {showNot && (
            <Not>
              <Line>
                <FontAwesomeIcon className="icons" icon={faTrash} size="2x" />
                <div className="icons-desc">
                  <span>Delete</span>
                  <span>Delete this notification</span>
                </div>
              </Line>
              <Line>
                <FontAwesomeIcon
                  className="icons"
                  icon={faBellSlash}
                  size="2x"
                />
                <div className="icons-desc">
                  <span>Turn Off</span>
                  <span>Stop receiving notification like this</span>
                </div>
              </Line>
            </Not>
          )}
        </a>
      </div>
    </Notific>
  );
};

export default Notification;
