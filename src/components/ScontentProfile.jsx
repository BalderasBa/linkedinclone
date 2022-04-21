import React from "react";
import styled from "styled-components";

function ScontentProfile() {
  return (
    <div>
      
    </div>
  );
}

const Scontent = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #0005;
  padding: 10px 0;
  img {
    width: 50px;
    height: 50px;
    margin-right: 15px;
  }
`;
const SCInofo = styled.div`
  h2 {
    color: #000;
    cursor: pointer;
    :hover {
      color: #0a66c2;
      text-decoration: underline;
    }
  }
  p {
    margin-top: 10px;
    font-weight: 400;
    font-size: 16px;
  }
  span {
    color: #5b5b5b;
    font-size: 14px;
    margin-bottom: 10px;
  }
`;
export default ScontentProfile;
