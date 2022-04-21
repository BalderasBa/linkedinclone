import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styled from "styled-components";

const Container = styled.div`
  margin: 100px 0;
`;
const Section = styled.section`
  display: flex;
  justify-content: center;
  max-height: 30px;
  text-align: center;
  text-decoration: underline;
  box-sizing: content-box;
  h5 {
    font-size: 14px;
    a {
      color: #0a66c2;
      font-weight: 700;
    }
  }
  p {
    font-size: 14px;
    color: #434649;
    font-weight: 600;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0 5px;
  }
`;

function Jobs() {
  return (
    <div>
      <Header active="jobs" />
      <Container>
        <Section>
          <h5>
            <a href=""> Hiring in a hurry? - </a>
          </h5>
          <p>
            Find talented pros in record time with Upwork and keep business
            moving.
          </p>
        </Section>
        <br />
        <h1>Not Implemented yet</h1>
      </Container>
      <Footer />
    </div>
  );
}

export default Jobs;
