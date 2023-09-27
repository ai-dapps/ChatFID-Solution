import React, { useEffect, useRef, useState } from "react";
import { Link as RouterLink } from "react-router-dom";

import "../style/component/HeaderSub.scss";

const HeaderSub = () => {
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
      <header id="header_sub" ref={HeaderScroll}>
        <div className="header_wrapper">
          <h1>
            <a href="/">
              <img src={process.env.PUBLIC_URL + "/assets/logo.png"} alt="" />
            </a>
          </h1>
          <nav className="gnb">
            <ul>
              <li>
                <RouterLink to="/">서비스</RouterLink>
              </li>
              <li>
                <RouterLink to="/">요금제</RouterLink>
              </li>
              <li>
                <RouterLink to="/">예시 사례</RouterLink>
              </li>
              <li>
                <RouterLink to="/">API 문서</RouterLink>
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

export default HeaderSub;
