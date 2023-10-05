import React from "react";
import { Element } from "react-scroll";

import "../style/component/ApiDocument.scss";

import { RiArrowRightSLine } from "react-icons/ri";

const ApiDocument = () => {
  return (
    <Element name="ApiDocument" className="ApiDocument">
      <div className="content_text_wrapper">
        <div className="content_text">
          <p>
            Chat FID (Finding in Documents)는
            <br />
            인공지능 문서 기반 챗봇을 직접 제작할 수<br />
            있도록 <span>오픈 API를 제공합니다.</span>
          </p>
        </div>

        <div className="go">
          <a href="#!">
            <button>
              바로가기
              <RiArrowRightSLine />
            </button>
          </a>
        </div>
      </div>
    </Element>
  );
};

export default ApiDocument;
