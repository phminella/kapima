import { FooterStyle } from "./styles/FooterStyle";
import Link from "next/link";

const Footer = () => {
  return (
    <FooterStyle>
      <div className="site-details">
        <ul className="footer-list">
          <li>
            <div className="list-img">
              <img src="/img/icon-react.svg" alt="" />
            </div>{" "}
            <span>React</span>
          </li>
          <li>
            <div className="list-img">
              <img src="/img/icon-next-black.svg" alt="" />
            </div>{" "}
            <span>Next.js</span>
          </li>
          <li>
            <div className="list-img">
              <img src="/img/icon-keystonejs.svg" alt="" />
            </div>{" "}
            <span>Keystonejs</span>
          </li>
          <li>
            <div className="list-img">
              <img src="/img/icon-apollo.svg" alt="" />
            </div>{" "}
            <span>Apollo</span>
          </li>
          <li>
            <div className="list-img">
              <img src="/img/icon-graphql-pink.svg" alt="" />
            </div>{" "}
            <span>Graphql</span>
          </li>
        </ul>
        <ul className="footer-list">
          <li>
            <div className="list-img">
              <img src="/img/icon-pdf.svg" alt="" />
            </div>{" "}
            <a href="minella-resume-english.pdf" download>
              Resume
            </a>
          </li>
          <li>
            <div className="list-img">
              <img src="/img/icon-excel.svg" alt="" />
            </div>{" "}
            <a href="ミネラパウロ履歴書.xlsx" download>
              履歴書
            </a>
          </li>
          <li>
            <div className="list-img">
              <img src="/img/icon-pdf.svg" alt="" />
            </div>{" "}
            <a href="職務経歴書.pdf" download>
              職務経歴書
            </a>
          </li>
        </ul>
        <ul className="footer-list">
          <li>
            <div className="list-img">
              <img src="/img/icon-email.svg" alt="" />
            </div>{" "}
            <span>phminella@gmail.com</span>
          </li>
          <li>
            <div className="list-img">
              <img src="/img/icon-github.svg" alt="" />
            </div>{" "}
            <a href="https://github.com/phminella" target="_blank">
              Github
            </a>
          </li>
          <li>
            <div className="list-img">
              <img src="/img/icon-freelancer.svg" alt="" />
            </div>{" "}
            <a
              href="https://www.freelancer.com/u/projectcapybara"
              target="_blank"
            >
              Freelancer
            </a>
          </li>
          <li>
            <div className="list-img">
              <img src="/img/icon-phone.svg" alt="" />
            </div>{" "}
            <span>070-2797-1994</span>
          </li>
        </ul>
        <ul className="residence-card">
          <li>
            <img src="/img/residence-card.png" />
          </li>
          <li>
            <p>技術・人文知識・国際業務</p>
          </li>
          <li>
            <p>until 12/2026</p>
          </li>
        </ul>
      </div>
      <p className="project-capybara">
        Powered by <span>project:capybara</span>{" "}
        <img height={40} src="../img/projectcapybara-logo.png" />
      </p>
    </FooterStyle>
  );
};

export default Footer;
