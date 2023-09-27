import { Element } from "react-scroll";

import "../style/component/Service.scss";

//aos
import React, { useEffect, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

//slick
import Slide from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Service = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const sliderSettings = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    afterChange: (idx) => setSNum(idx),
    responsive: [
      {
        breakpoint: 1368,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const s = useRef(null);
  const [sNum, setSNum] = useState();
  useEffect(() => {
    setSNum(0);
  }, []);

  const [isPrevActive, setIsPrevActive] = useState(false);
  const [isNextActive, setIsNextActive] = useState(false);

  const handlePrevClick = () => {
    s.current.slickPrev();
    setIsPrevActive(true);
    setIsNextActive(false);
  };

  const handleNextClick = () => {
    s.current.slickNext();
    setIsPrevActive(false);
    setIsNextActive(true);
  };

  return (
    <Element name="Service" className="Service">
      <div className="content_wrapper">
        <div className="content_text">
          <h2 className="content_title">서비스</h2>
          <p className="content_desc">
            우리는 PDF 문서를 기반으로 AI 학습 기술을 적용하여 챗봇 형태로
            솔루션을 제공합니다.
          </p>
        </div>
        <div className="content_item_wrapper">
          <Slide {...sliderSettings} ref={s}>
            <div className="slide_item_wrapper">
              <div className="slide_item">
                <img
                  src={process.env.PUBLIC_URL + "/assets/service_item_01.png"}
                  alt=""
                />
                <div className="slide_item_text">
                  <strong>높은 정확도</strong>
                  <span>
                    공개된 기존 정보를 기반으로 제공하는 것이 아닌, 특정 PDF
                    파일을 통해 답변을 제공함으로써 기존 AI 채팅 서비스에 비해
                    높은 정확도의 답변을 기대할 수 있습니다.
                  </span>
                </div>
              </div>
              <div className="slide_item">
                <img
                  src={process.env.PUBLIC_URL + "/assets/service_item_02.png"}
                  alt=""
                />
                <div className="slide_item_text">
                  <strong>사용자 맞춤형</strong>
                  <span className="max_width">
                    챗봇 제작 시 사용자가 용도에 따른 특정한 PDF 파일을 학습시킬
                    수 있어, 목적에 맞는 챗봇 제작이 가능합니다.
                  </span>
                </div>
              </div>
            </div>
            <div className="slide_item_wrapper">
              <div className="slide_item">
                <img
                  src={process.env.PUBLIC_URL + "/assets/service_item_03.png"}
                  alt=""
                />
                <div className="slide_item_text">
                  <strong>개발용이성</strong>
                  <span className="max_width">
                    사용자가 직접 개발할 수 있도록 API 문서를 제공하여 원하는
                    스마트 챗봇 제작이 가능합니다.
                  </span>
                </div>
              </div>
              <div className="slide_item">
                <img
                  src={process.env.PUBLIC_URL + "/assets/service_item_04.png"}
                  alt=""
                />
                <div className="slide_item_text">
                  <strong>사용자 맞춤형</strong>
                  <span className="max_width">
                    챗봇 제작 시 사용자가 용도에 따른 특정한 PDF 파일을 학습시킬
                    수 있어, 목적에 맞는 챗봇 제작이 가능합니다.
                  </span>
                </div>
              </div>
            </div>
          </Slide>
        </div>
      </div>
    </Element>
  );
};

export default Service;
