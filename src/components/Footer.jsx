import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faCircleQuestion,
  faGear,
} from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { langues } from "../data";
import logo from "../images/linkedin-logo.svg"

const Container = styled.div`
  margin: 20px 30px;
  > p {
    display: block;
    text-align: center;
  }
`;
const Logo = styled.div`
  display: block;
  img {
    width: 100px;
  }
`;
const Content = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 991px) {
    display: grid;
    grid-template-columns: auto auto;
  }
`;
const Ul = styled.ul`
  list-style: none;
  li {
    padding: 5px 10px;
    display: flex;
    cursor: pointer;
    a {
      display: block;
      text-decoration: none;
      color: #0009;
      font-size: 12px;
    }
    span {
      font-size: 12px;
      color: #00000099;
    }
    &:hover a {
      text-decoration: underline;
      color: #0a66c2;
    }
    &:hover span {
      text-decoration: underline;
    }
    .footertext {
      margin-left: 10px;
    }
  }
  select {
    cursor: pointer;
    width: 200px;
    padding: 5px 10px;
    border-radius: 5px;
    outline: none;
  }
`;

function Footer() {
  return (
    <Container>
      <Logo>
        <img src={logo} alt="logo" />
      </Logo>
      <Content>
        <Ul>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Community Guidelines</a>
          </li>
          <li>
            <a href="#">
              Privacy & Terms <FontAwesomeIcon icon={faChevronDown} />
            </a>
          </li>
          <li>
            <a href="#">Sales Solutions</a>
          </li>
          <li>
            <a href="#">Safety Center</a>
          </li>
        </Ul>

        <Ul>
          <li>
            <a href="#">Accessibility</a>
          </li>
          <li>
            <a href="#">Careers</a>
          </li>
          <li>
            <a href="#">Ad Choices</a>
          </li>
          <li>
            <a href="#">Mobile</a>
          </li>
        </Ul>

        <Ul>
          <li>
            <a href="#">Talent Solutions</a>
          </li>
          <li>
            <a href="#">Marketing Solutions</a>
          </li>
          <li>
            <a href="#">Advertising</a>
          </li>
          <li>
            <a href="#">Small Business</a>
          </li>
        </Ul>

        <Ul>
          <li>
            <FontAwesomeIcon
              style={{ marginRight: "5px", fontSize: "25px" }}
              icon={faCircleQuestion}
            />
            <div className="footertext">
              <a href="#">Questions?</a>
              <span>Visit our Help Center.</span>
            </div>
          </li>
          <li>
            <FontAwesomeIcon
              icon={faGear}
              style={{ marginRight: "5px", fontSize: "25px" }}
            />
            <div className="footertext">
              <a href="#">Manage your account and privacy</a>
              <span>Go to your Settings.</span>
            </div>
          </li>
        </Ul>
        <Ul>
          <li>
            <span>Select Language</span>
          </li>
          <select name="" id="">
            {/* {langues.map((language) => {
              console.log(language);
              <option value={language.value}>{language.langue}</option>;
            })} */}
            <option value="en_US">English (English)</option>
            <option value="ar_AE">العربية (Arabic)</option>
            <option value="cs_CZ">Čeština (Czech)</option>
            <option value="da_DK">Dansk (Danish)</option>
            <option value="de_DE">Deutsch (German)</option>
            <option value="es_ES">Español (Spanish)</option>
            <option value="fr_FR">Français (French)</option>
            <option value="hi_IN">हिंदी (Hindi)</option>
            <option value="in_ID">Bahasa Indonesia (Bahasa Indonesia)</option>
            <option value="it_IT">Italiano (Italian)</option>
            <option value="ja_JP">日本語 (Japanese)</option>
            <option value="ko_KR">한국어 (Korean)</option>
            <option value="ms_MY">Bahasa Malaysia (Malay)</option>
            <option value="nl_NL">Nederlands (Dutch)</option>
            <option value="no_NO">Norsk (Norwegian)</option>
            <option value="pl_PL">Polski (Polish)</option>
            <option value="pt_BR">Português (Portuguese)</option>
            <option value="ro_RO">Română (Romanian)</option>
            <option value="ru_RU">Русский (Russian)</option>
            <option value="sv_SE">Svenska (Swedish)</option>
            <option value="th_TH">ภาษาไทย (Thai)</option>
            <option value="tl_PH">Tagalog (Tagalog)</option>
            <option value="tr_TR">Türkçe (Turkish)</option>
            <option value="zh_CN">简体中文 (Chinese (Simplified))</option>
            <option value="zh_TW">正體中文 (Chinese (Traditional))</option>
          </select>
        </Ul>
      </Content>
      <p>
        <img src={logo} alt="logo" /> Corporation &copy;
        {new Date().getFullYear()}
      </p>
    </Container>
  );
}

export default Footer;
