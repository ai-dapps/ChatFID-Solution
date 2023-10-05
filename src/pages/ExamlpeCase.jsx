import React from "react";
import { Element } from "react-scroll";

import "../style/component/ExamlpeCase.scss";

const ExamlpeCase = () => {
  return (
    <Element name="ExamlpeCase" className="ExamlpeCase">
      <div className="content_wrapper">
        <div className="content_text">
          <h2 className="content_title">예시 사례</h2>
          <p className="content_desc">
            사용자가 요구하는 용도에 따른 여러 PDF파일을 인공지능 기반의 모듈이
            학습하여 챗봇 기능의 형태로 제공됩니다.
          </p>
        </div>

        <div className="content_item_wrapper">
          <div className="content_item">
            <div className="content_item_text">
              <div className="content_item_text_01">
                <div className="text_hover">
                  <strong>학교/학원</strong>
                  <span>
                    여러 대학교들의 모집요강 및 입시결과 문서를 이용하여 각
                    대학교들의 입시 관련 정보를 알 수 있어 빠른 시간 안에 원하는
                    정보를 얻을 수 있습니다.
                  </span>
                </div>
                <div className="content_item_text_01_left">
                  <strong>학교/학원</strong>
                  <span>입시 관련 정보를 한눈에!</span>
                </div>
                <div className="content_item_text_01_right">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/examlpe_item_text_01.png"
                    }
                    alt=""
                  />
                </div>
              </div>
              <div className="content_item_text_01">
                <div className="text_hover">
                  <strong>기업/공공기관</strong>
                  <span>
                    기업내부의 계약서들을 분석한 후 원하는 계약 내용 정보를
                    찾아낼 수 있어 계약관리 및 계약 내용을 확인하기가
                    편리해집니다.
                  </span>
                </div>
                <div className="content_item_text_01_left">
                  <strong>기업/공공기관</strong>
                  <span>편리한 계약관리 및 내용 확인</span>
                </div>
                <div className="content_item_text_01_right">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/examlpe_item_text_02.png"
                    }
                    alt=""
                  />
                </div>
              </div>
              <div className="content_item_text_01">
                <div className="text_hover">
                  <strong>학생 및 다양한 직군</strong>
                  <span>
                    시장조사에 필요한 다양한 참고 문서들을 분석하여 시장
                    동향정보를 추출하여 시장 동향 문서를 만들 수 있습니다.
                  </span>
                </div>
                <div className="content_item_text_01_left">
                  <strong>학생 및 다양한 직군</strong>
                  <span>다양한 시장 동향정보 추출</span>
                </div>
                <div className="content_item_text_01_right">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/examlpe_item_text_03.png"
                    }
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="content_item_img">
              <img
                src={process.env.PUBLIC_URL + "/assets/examlpe_item_img.png"}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default ExamlpeCase;
