import React, { useEffect, useRef, useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  Link as ScrollLink,
  Element,
  Events,
  animateScroll as scroll,
} from "react-scroll";

import "../style/component/Header.scss";

const Header = () => {
  const HeaderScroll = useRef(null);

  // --- { 스크롤 내렸을때 header className에 active를 붙이는 코드
  useEffect(() => {
    const headerElement = HeaderScroll.current; // DOM 요소 참조
    if (headerElement) {
      const handleScroll = () => {
        let sct = window.scrollY;
        sct > 0
          ? headerElement.classList.add("active")
          : headerElement.classList.remove("active");
      };

      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  return (
    <>
      <header id="header" ref={HeaderScroll}>
        <div className="header_wrapper">
          <h1>
            <a href="/">
              <img src={process.env.PUBLIC_URL + "/assets/logo.png"} alt="" />
            </a>
          </h1>
          <nav className="gnb">
            <ul>
              <li>
                <ScrollLink
                  activeClass="active"
                  to="Service"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                >
                  서비스
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  activeClass="active"
                  to="PaymentSystem"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                >
                  요금제
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  activeClass="active"
                  to="ExamlpeCase"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                >
                  예시 사례
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  activeClass="active"
                  to="ApiDocument"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                >
                  API 문서
                </ScrollLink>
              </li>
            </ul>
          </nav>
          <ul className="login">
            <li>
              <RouterLink to="/">로그인</RouterLink>
            </li>
            <li>
              <RouterLink to="/signup" className="sign_up">
                회원가입
              </RouterLink>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
};

export default Header;
