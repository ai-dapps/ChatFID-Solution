import React from "react";
import { Element } from "react-scroll";

import "../style/component/PaymentSystem.scss";

const PaymentSystem = () => {
  return (
    <Element name="PaymentSystem" className="PaymentSystem">
      <div className="content_wrapper">
        <div className="content_text">
          <h2 className="content_title">요금제</h2>
          <p className="content_desc">
            요금제 및 결제 관련하여 문의사항이 있으실 경우 하단의 ‘요금 문의’
            버튼을 눌러주세요.
          </p>
        </div>

        <div className="content_item_wrapper">
          <div className="content_item">
            <div className="content_item_01">
              <strong>Free</strong>
              <span>
                &#8361; 0 <em>/ 월</em>
              </span>
            </div>
            <ul className="content_item_02">
              <li>60page / PDF</li>
              <li>10MB / PDF</li>
              <li>3PDFs / day</li>
              <li>25 question</li>
            </ul>
          </div>
          <div className="content_item">
            <div className="content_item_01">
              <strong>Basic</strong>
              <span>
                &#8361; 5,000 <em>/ 월</em>
              </span>
            </div>
            <ul className="content_item_02">
              <li>120page / PDF</li>
              <li>16MB / PDF</li>
              <li>5PDFs / day</li>
              <li>50 question</li>
            </ul>
          </div>
          <div className="content_item">
            <div className="content_item_01">
              <strong>Plus</strong>
              <span>
                &#8361; 25,000 <em>/ 월</em>
              </span>
            </div>
            <ul className="content_item_02">
              <li>180page / PDF</li>
              <li>24MB / PDF</li>
              <li>10PDFs / day</li>
              <li>80 question</li>
            </ul>
          </div>
          <div className="content_item">
            <div className="content_item_01">
              <strong>Pro</strong>
              <span>
                &#8361; 49,000 <em>/ 월</em>
              </span>
            </div>
            <ul className="content_item_02">
              <li>300page / PDF</li>
              <li>30MB / PDF</li>
              <li>16PDFs / day</li>
              <li>100 question</li>
            </ul>
          </div>
        </div>

        <div className="inquiry">
          <a href="#!">
            <button>요금 문의</button>
          </a>
        </div>
      </div>
    </Element>
  );
};

export default PaymentSystem;
