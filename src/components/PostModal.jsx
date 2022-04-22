import styled from "styled-components";
import { useState } from "react";
import ReactPlayer from "react-player";
import { useDispatch, useSelector } from "react-redux";

// Images:
import closeSVG from "../images/close-icon.svg";
import userSVG from "../images/user.svg";
import imageSVG from "../images/image-icon.svg";
import videoSVG from "../images/video-icon.svg";
import documentSVG from "../images/document-icon.svg";
import hirringSVG from "../images/hirring-icon.svg";
import celebrateSVG from "../images/celebrate-icon.svg";
import pollSVG from "../images/poll-icon.svg";
import ellipsisSVG from "../images/ellipsis.svg";
import sharedcommentSVG from "../images/sharedcomment.svg";

const PostModal = (props) => {
  const [editorText, setEditorText] = useState("");
  const [shareImage, setShareImage] = useState("");
  const [videoLink, setVideoLink] = useState("");
  const [assetAria, setAssetAria] = useState("");

  const handleChange = (e) => {
    const image = e.target.files[0];
    if (image === "" || image === undefined) {
      alert(`not an image, the file you need to upload is a ${typeof image}`);
      return;
    }
    setShareImage(image);
  };
  const switchAssetArea = (aria) => {
    setShareImage("");
    setVideoLink("");
    setAssetAria(aria);
  };
  const reset = (e) => {
    setEditorText("");
    setShareImage("");
    setVideoLink("");
    setAssetAria("");
    props.handleClick(e);
  };
  return (
    <>
      {props.showModal === "open" && (
        <Container onClick={(e) => reset(e)}>
          <Content>
            <Header>
              <h2>Create a post </h2>
              <button onClick={(e) => reset(e)}>
                <img src={closeSVG} alt="" />
              </button>
            </Header>
            <SharedContent>
              <UserInfo>
                <img src={userSVG} alt="" />
                <span>Yehya Hallousse</span>
                <select>
                  <option value="anyone">Anyone</option>
                  <option value="anyoneplustwitter">Anyone + Twitter</option>
                  <option value="connections">Connections Only</option>
                </select>
              </UserInfo>
              <Editor>
                <textarea
                  value={editorText}
                  onChange={(e) => setEditorText(e.target.value)}
                  name="post-text"
                  id="post-text"
                  placeholder="What do you want to tolk about?"
                  autoFocus={true}
                />
                {assetAria === "image" ? (
                  <UploadImage>
                    <input
                      type="file"
                      accept="image/gif,image/jpeg,image/jpg,image/png"
                      name="image"
                      id="file"
                      style={{
                        display: "none",
                      }}
                      onChange={handleChange}
                    />
                    <p>
                      <label htmlFor="file">Select images to share</label>
                    </p>
                    {shareImage && (
                      <img src={URL.createObjectURL(shareImage)} />
                    )}
                  </UploadImage>
                ) : (
                  assetAria === "media" && (
                    <UploadVideo>
                      <input
                        type="text"
                        placeholder="Please input a video link"
                        value={videoLink}
                        onChange={(e) => setVideoLink(e.target.value)}
                      />
                      {videoLink && (
                        <ReactPlayer width="100%" url={videoLink} />
                      )}
                    </UploadVideo>
                  )
                )}
              </Editor>
            </SharedContent>
            <SharedCreation>
              <Assets>
                <AssetBtn onClick={() => switchAssetArea("image")}>
                  <img src={imageSVG} alt="" />
                  <span>Add a photo</span>
                </AssetBtn>
                <AssetBtn onClick={() => switchAssetArea("media")}>
                  <img src={videoSVG} alt="" />
                  <span>Add a video</span>
                </AssetBtn>
                <AssetBtn onClick={() => switchAssetArea("document")}>
                  <img src={documentSVG} alt="" />
                  <span>Add a document</span>
                </AssetBtn>
                <AssetBtn onClick={() => switchAssetArea("hiring")}>
                  <img src={hirringSVG} alt="" />
                  <span>Share that you’re hiring</span>
                </AssetBtn>
                <AssetBtn onClick={() => switchAssetArea("celebrate")}>
                  <img src={celebrateSVG} alt="" />
                  <span>Celebrate an occasion</span>
                </AssetBtn>
                <AssetBtn onClick={() => switchAssetArea("poll")}>
                  <img src={pollSVG} alt="" />
                  <span>Create a Poll</span>
                </AssetBtn>
                <AssetBtn onClick={() => switchAssetArea("addto")}>
                  <img src={ellipsisSVG} alt="" />
                  <span>Add to your post</span>
                </AssetBtn>
              </Assets>
              <ShareComment>
                <Assetshare>
                  <>
                    <img src={sharedcommentSVG} alt="" />
                    <p> Comments on </p>
                  </>
                </Assetshare>
                <PostButton disabled={!editorText ? true : false}>
                  Post
                </PostButton>
              </ShareComment>
            </SharedCreation>
          </Content>
        </Container>
      )}
    </>
  );
};
const UploadImage = styled.div`
  text-align: center;
  img {
    max-width: 100%;
  }
`;
const UploadVideo = styled.div`
  text-align: center;
  img {
    max-width: 100%;
  }
`;
const PostButton = styled.div`
  text-align: center;
  min-width: 60px;
  border-radius: 20px;
  padding: 7px;
  text-decoration: none;
  background-color: ${(props) => (props.disabled ? "#00000080" : "#0a66c2")};
  color: ${(props) => (props.disabled ? "#c1c1c1" : "#fff")};
  transition: 400ms;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => (props.disabled ? "#00000080" : "#004182")};
  }
`;

// ____________________________________
const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1222;
  background-color: #00000075;
  animation: fadeIn 300ms;
`;
const Content = styled.div`
  width: 100%;
  max-width: 552px;
  max-height: 90%;
  background-color: white;
  border-radius: 5px;
  overflow: initial;
  position: relative;
  display: flex;
  flex-direction: column;
  top: 32px;
  margin: 0 auto;
`;
const Header = styled.div`
  display: block;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 20px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  font-size: 16px;
  line-height: 1.5;
  color: rgba(0, 0, 0, 0.6);
  font-weight: 400;
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
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  overflow-y: auto;
  vertical-align: baseline;
  background: transparent;
  padding: 8px 12px;
`;
const UserInfo = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 24px;

  svg,
  img {
    width: 40px;
    height: 40px;
    background-clip: content-box;
    border: 2px solid transparent;
    border-radius: 50%;
  }
  span {
    font-weight: 600;
    font-size: 16px;
    line-height: 1.5;
    margin: 0 5px;
  }
  select {
    border: none;
    outline: none;
    background-color: #0001;
    padding: 3px 5px;
    border-radius: 5px;
    cursor: pointer;
    :active,
    :hover {
      background-color: #0002;
    }
  }
`;
const Editor = styled.div`
  padding: 12px 24px;
  textarea {
    width: 100%;
    min-height: 100px;
    resize: none;
    outline: none;
    border: none;
    font-size: 16px;
    line-height: 1.5;
  }
`;

const SharedCreation = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 12px 24px 12px 16px;
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
  align-items: center;
  /* justify-content: flex-end; */
  width: 100%;
  padding-left: 8px;
  margin: 0 20px;
  border-left: 1px solid rgba(0, 0, 0, 0.15);
  ${AssetBtn} {
    svg {
      margin-right: 5px;
    }
  }
`;
export default PostModal;
