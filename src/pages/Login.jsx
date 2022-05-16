import styled from "styled-components";
// import { connect } from "react-redux";
import { signInAPI } from "../actions";
import { useNavigate } from "react-router-dom";

// test from here
import { useSelector, useDispatch } from "react-redux";
// to here
import { SET_USER } from "../actions/actionTypes";

import loginSVG from "../images/login-logo.svg";
import welcomeSVG from "../images/login-welcom.svg";
import rightSVG from "../images/right-icon.svg";
import googleSVG from "../images/google.svg";

const Login = () => {
  // test from here
  const { user } = useSelector((user) => user.userState);
  const dispatch = useDispatch({ type: SET_USER });

  console.log(user);
  const route = useNavigate();
  user && route("home");

  // to here

  return (
    <Container>
      <Nav>
        <a href="/linkedinclone">
          <img src={loginSVG} alt="" />
        </a>
        <div>
          <Join href="https://balderasba.github.io/linkedinclone/signup">Join now</Join>
          <SignIn href="https://balderasba.github.io/linkedinclone/signin">Sign in</SignIn>
        </div>
      </Nav>
      <Section>
        <Hero>
          <h1>Welcome to your professional community</h1>
          <img src={welcomeSVG} alt="" />
        </Hero>
        <Form>
          {/* <Google onClick={() => dispatch(signInAPI())}> */}
          <Google>
            Search for a job
            <img src={rightSVG} alt="" />
          </Google>
          <Google>
            Find a person you know
            <img src={rightSVG} alt="" />
          </Google>
          <Google>
            Learn a new skill
            <img src={rightSVG} alt="" />
          </Google>
          <Google onClick={() => dispatch(signInAPI())}>
            <img src={googleSVG} alt="" />
            Sign in with Google
          </Google>
        </Form>
      </Section>
    </Container>
  );
};

const Container = styled.div`
  padding: 0px;
`;

const Nav = styled.nav`
  max-width: 1128px;
  margin: auto;
  padding: 12px 0 16px;
  display: flex;
  align-items: center;
  position: relative;
  justify-content: space-between;
  flex-wrap: nowrap;
  & > a {
    width: 135px;
    height: 34px;
    @media (max-width: 768px) {
      padding: 0 5px;
    }
  }
`;

const Join = styled.a`
  font-size: 16px;
  padding: 10px 12px;
  text-decoration: none;
  border-radius: 4px;
  color: rgba(0, 0, 0, 0.6);
  margin-right: 12px;
  cursor: pointer;
  &:hover {
    background-color: rgba(0, 0, 0, 0.08);
    color: rgba(0, 0, 0, 0.9);
    text-decoration: none;
  }
`;
const SignIn = styled.a`
  box-shadow: inset 0 0 0 1px #0a66c2;
  color: #0a66c2;
  border-radius: 24px;
  transition: 167ms;
  font-size: 16px;
  font-weight: 600;
  line-height: 40px;
  padding: 10px 24px;
  text-align: center;
  background-color: rgba(0, 0, 0, 0);
  cursor: pointer;

  &:hover {
    background-color: rgba(112, 181, 249, 0.15);
    color: #0a66c2;
    text-decoration: none;
  }
`;

const Section = styled.section`
  display: flex;
  align-content: start;
  min-height: 700px;
  padding-bottom: 138px;
  padding-top: 40px;
  padding: 60px 0;
  position: relative;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1128px;
  align-items: center;
  margin: auto;
  @media (max-width: 768px) {
    margin: auto;
    min-height: 0px;
  }
`;

const Hero = styled.div`
  width: 100%;
  h1 {
    padding-bottom: 0;
    width: 55%;
    font-size: 50px;
    color: #8f5849;
    font-weight: 200;
    line-height: 70px;
    @media (max-width: 768px) {
      text-align: center;
      font-size: 30px;
      width: 100%;
      line-height: 2;
    }
  }
  img {
    width: 700px;
    height: 670px;
    position: absolute;
    bottom: -2px;
    right: -150px;
    @media (max-width: 768px) {
      top: 230px;
      width: initial;
      position: initial;
      height: initial;
    }
  }
`;

const Form = styled.div`
  margin-top: 20px;
  width: 408px;
  @media (max-width: 768px) {
    margin-top: 20px;
    vertical-align: middle;
  }
`;

const Google = styled.button`
  display: flex;
  justify-content: space-between;
  background-color: #fff;
  align-items: center;
  height: 56px;
  width: 100%;
  padding: 20px;
  margin-bottom: 15px;
  border-radius: 28px;
  box-shadow: inset 0 0 0 1px rgb(0 0 0 / 60%),
    inset 0 0 0 2px rgb(0 0 0 / 0%) inset 0 0 0 1px rgb(0 0 0 / 0);
  vertical-align: middle;
  z-index: 0;
  font-size: 20px;
  color: rgba(0, 0, 0, 0.6);
  cursor: pointer;
  transition: all 300ms ease-in;
  img {
    margin-right: 5px;
  }
  &:last-of-type {
    margin-top: 40px;
    justify-content: center;
  }
  &:hover {
    background-color: rgba(207, 207, 207, 0.25);
    color: rgba(0, 0, 0, 0.75);
  }
  &:hover:not(:last-of-type) {
    background-color: rgba(207, 207, 207, 0.25);
    color: rgba(0, 0, 0, 0.75);
    img,
    svg {
      transform: translateX(10px);
    }
  }
`;

// const mapStateToProps = (state) => {
//   return {};
// };
// const mapDispatchToProps = (dispatch) => ({
//   SignIn: () => dispatch(signInAPI()),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(Login);
export default Login;
