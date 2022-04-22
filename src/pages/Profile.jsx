import React from "react";
import styled from "styled-components";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Rightside from "../components/Rightside";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCamera,
  faEllipsis,
  faPen,
  faPlus,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

import Messagingcomp from "../components/Messagingcomp";

import linkedinSVG from "../images/linkedin.png";
import cardBgSVG from "../images/card-bg.svg";

const Container = styled.div`
  padding-top: 13.5vh;
  max-width: 100%;
  display: grid;
  grid-template-areas: "main rightside";
  grid-template-columns: 3fr 1fr;
  > div {
    margin: 10px;
  }
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

const Section = styled.section`
  display: flex;
  position: relative;
  flex-direction: column;
  box-shadow: -1px 1px 5px 0 #00000010;
  padding: 10px 10px;
  background-color: #fff;
  margin-bottom: 10px;
  border-radius: 10px;
  h1 {
    font-size: 22px;
    margin-bottom: 5px;
  }
  @media (max-width: 768px) {
    padding: 0 5px;
  }
`;
const Cover = styled.img.attrs({ src: { cardBgSVG } })`
  width: 100%;
  height: 150px;
  cursor: pointer;
`;
const UserInfo = styled.div`
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  position: relative;
  span {
    font-size: 14px;
    color: #555;
    margin-bottom: 10px;
  }
  .blue {
    color: #0a66c2;
    cursor: pointer;
    margin-top: 5px;
  }
`;
const Photo = styled.img.attrs({
  src: "https://i.ibb.co/ZcJ50Vs/screenshot.jpg",
})`
  position: absolute;
  width: 150px;
  height: 150px;
  top: 50px;
  left: 40px;
  border-radius: 50%;
  border: 2px solid #fff;
  cursor: pointer;
  z-index: 20;
`;
const Buttons = styled.div`
  display: flex;
  flex-direction: row !important;

  a {
    border-radius: 10px;
    outline: none;
    text-align: center;
    text-decoration: none;
    margin: 10px 20px 0 0;
    padding: 5px 8px;
    color: #fff;
    background-color: #0a66c2;
    border: 1px solid #0a66c2;
    cursor: pointer;
    -webkit-transition: 200ms ease-out;
    transition: 200ms ease-out;
    &:hover {
      color: #0a66c2;
      background-color: #fff;
    }
  }
`;

function Profile() {
  return (
    <div>
      <Header active="profile" />
      <Container>
        <div>
          <UserInfo>
            <Cover />
            <FontAwesomeIcon
              icon={faCamera}
              style={{
                position: "absolute",
                backgroundColor: "#fff",
                color: "#0a66c2",
                padding: "5px",
                borderRadius: "50%",
                top: "20px",
                right: "20px",
                cursor: "pointer",
              }}
            />
            <Photo />
            <Section style={{ paddingTop: "60px" }}>
              <FontAwesomeIcon
                icon={faPen}
                style={{
                  position: "absolute",
                  backgroundColor: "#fff",
                  color: "#0a66c2",
                  padding: "5px",
                  borderRadius: "50%",
                  top: "20px",
                  right: "20px",
                  cursor: "pointer",
                }}
              />
              <h1>Hallousse Yehya</h1>
              <span>Informatic engineer, Web developer & Graphic Designer</span>
              <p>Algerian WP university constantine 2</p>
              <p>
                <span>Algiers, Algeria </span>
                <span className="blue"> Contact info</span>
              </p>
              <span className="blue">+500 connections</span>

              <Buttons>
                <a href="#">Open to</a>
                <a href="#">Add profile section</a>
                <a href="#">
                  More{"  "}
                  <FontAwesomeIcon icon={faEllipsis} />
                </a>
              </Buttons>
            </Section>
          </UserInfo>
          <Section>
            <Head>
              <h3>Education</h3>
              <Hbtns>
                <a href="#">
                  <FontAwesomeIcon icon={faPen} />
                </a>
                <a href="#">
                  <FontAwesomeIcon icon={faPlus} />
                </a>
              </Hbtns>
            </Head>
            <Scontent>
              <img src={linkedinSVG} alt="" />
              <SCInofo>
                <h2>OpenClassrooms</h2>
                <p>Master of Computer Applications - MCA, Web development</p>
                <span>Oct 2017 - Aug 2018</span>
                <p>HTML5, CSS3, javascript, PHP, MySQL</p>
              </SCInofo>
            </Scontent>
            <Scontent>
              <img src={linkedinSVG} alt="" />
              <SCInofo>
                <h2>Udemy</h2>
                <p>React Js Tutorial</p>
                <span>Oct 2020</span>
                <p>javascript, ReactJs, Redux</p>
              </SCInofo>
            </Scontent>
            <All href="#">
              <p> Show All 4 educations</p>
              <FontAwesomeIcon icon={faArrowRight} />
            </All>
          </Section>
          <Section>
            <Head>
              <h3>Experience</h3>
              <Hbtns>
                <a href="#">
                  <FontAwesomeIcon icon={faPen} />
                </a>
                <a href="#">
                  <FontAwesomeIcon icon={faPlus} />
                </a>
              </Hbtns>
            </Head>
            <Scontent>
              <img src={linkedinSVG} alt="" />
              <SCInofo>
                <h2>Front End Developer</h2>
                <p>Company, State</p>
                <span>Oct 2017 - Aug 2018</span>
                <p>
                  HTML5, CSS3, javascript, Jquery, Json, AJAX, Bootstrap, React,
                  Sass, Git
                </p>
              </SCInofo>
            </Scontent>
            <All href="#">
              <p> Show All 4 experiences</p>
              <FontAwesomeIcon icon={faArrowRight} />
            </All>
          </Section>
        </div>
        <Rightside />
      </Container>
      <Messagingcomp />
      <Footer />
    </div>
  );
}

const Head = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 10px;

  h3 {
    line-height: 1.25;
    font-size: 20px;
    font-weight: bold;
  }
`;
const Hbtns = styled.div`
  width: 50px;
  display: flex;
  justify-content: space-between;
  a {
    color: #000;
    font-size: large;
    :hover {
      color: #0a66c2;
    }
  }
`;
const Scontent = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #0005;
  padding: 10px 0;
  margin-bottom: 10px;
  img {
    width: 50px;
    height: 50px;
    margin-right: 15px;
  }
`;
const All = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 10px;
  text-decoration: none;
  font-size: 17px;
  color: #0009;
  padding: 5px 0;
  border-radius: 10px;
  transition: 200ms ease-in;
  :hover {
    color: #fff;
    background: #0005;
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
export default Profile;
