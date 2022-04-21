import React from "react";
import styled from "styled-components";
function Pub() {
  const pubImgNbr = Math.floor(Math.random() * 2);
  return (
    <BannerCard>
      <img
        src={
          pubImgNbr
            ? "https://media.licdn.com/media/AAYQAgTPAAgAAQAAAAAAADVuOvKzTF-3RD6j-qFPqhubBQ.png"
            : "https://media.licdn.com/media/AAYQAgTPAAgAAQAAAAAAACeUyGWuWBhQQLyxe1gEMEaZgw.png"
        }
        alt="Advertise on LinkedIn"
        border="0"
      />
    </BannerCard>
  );
}
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
const BannerCard = styled(FollowCard)`
  height: 200px;
  img {
    width: 100%;
    height: 100%;
    margin: 0 3px;
    cursor: pointer;
  }
`;
export default Pub;
