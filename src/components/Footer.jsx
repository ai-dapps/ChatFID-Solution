import React from "react";

import { animateScroll as scroll } from "react-scroll";

import "../style/component/Footer.scss";
import { RiArrowUpLine } from "react-icons/ri";

const Footer = () => {
  const scrollToTop = () => {
    scroll.scrollToTop({
      duration: 500, // 스크롤 애니메이션 지속 시간
    });
  };

  return (
    <footer>
      <div className="footer_wrapper">
        <div className="to_top">
          <button onClick={scrollToTop}>
            <RiArrowUpLine />
          </button>
        </div>
        <div className="footer_left">
          <div className="footer_left_01">
            <img
              src={process.env.PUBLIC_URL + "/assets/footer_logo.png"}
              alt=""
            />
            <ul>
              <li>서비스 이용약관</li>
              <li>개인정보처리방침</li>
            </ul>
          </div>
          <div className="footer_left_02">
            <ul className="company_info">
              <li>
                주)에이아이댑스 대표 : 허태인 사업자등록번호 : 118-81-33489
              </li>
              <li>서울시 영등포구 여의대방로65길 6, 호성센터빌딩 9층</li>
            </ul>
          </div>
          <div className="copyright">
            Copyright © 2023 DCS. Ltd. All Rights Reserved.
          </div>
        </div>

        <div className="footer_right">
          <div className="footer_right_01">
            <span>Contact Us</span>
            <span>ai.chatfid@gmail.com</span>
          </div>
          <div className="sns">
            <a href="https://t.me/chat_fid" target="_blank">
              <img
                src={process.env.PUBLIC_URL + "/assets/footer_sns_01.png"}
                alt="텔레그램"
              />
            </a>
            <a href="https://twitter.com/Chat__FID" target="_blank">
              <img
                src={process.env.PUBLIC_URL + "/assets/footer_sns_02.png"}
                alt="트위터"
              />
            </a>
            <a href="https://blog.naver.com/chat-fid" target="_blank">
              <img
                src={process.env.PUBLIC_URL + "/assets/footer_sns_03.png"}
                alt="블로그"
              />
            </a>
            <a
              href="https://www.youtube.com/@Chat_FID/featured"
              target="_blank"
            >
              <img
                src={process.env.PUBLIC_URL + "/assets/footer_sns_04.png"}
                alt="유투브"
              />
            </a>
            <a href="https://github.com/ChatFID-project" target="_blank">
              <img
                src={process.env.PUBLIC_URL + "/assets/footer_sns_05.png"}
                alt="깃허브"
              />
            </a>
          </div>
          <div className="family_site">
            <form action="">
              <select id="f_link">
                <option value="">Family Site</option>
                <option value="http://naver.com">Naver</option>
                <option value="http://daum.net">Daum</option>
                <option value="http://google.com">Google</option>
              </select>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
