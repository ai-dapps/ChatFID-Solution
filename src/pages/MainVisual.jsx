import React from "react";
import "../style/component/MainVisual.scss";
import { Link as RouterLink } from "react-router-dom";

const MainVisual = () => {
  return (
    <div className="MainVisual">
      <video id="main" muted playsInline loop autoPlay>
        <source
          src={`${process.env.PUBLIC_URL}/assets/main_video.mp4`}
          type="video/mp4"
          alt="ChatFId video"
        />
      </video>
      <div className="main_content">
        <div className="main_slogan">
          <h3>Chat FID</h3>
          <strong>Finding in Documents</strong>
          <p>
            챗 FID는 용도에 따라 사용자의 맞춤형 데이터를 학습하여
            <br />
            챗봇으로 제공하는 문서기반 인공지능 챗봇 솔루션입니다.
          </p>
        </div>
        <div className="go_to_service">
          <button>
            <RouterLink to="/application">서비스 신청</RouterLink>
          </button>
        </div>
      </div>
      <div className="scroll">
        <div className="line">
          <span></span>
        </div>
      </div>
    </div>
  );
};

export default MainVisual;
