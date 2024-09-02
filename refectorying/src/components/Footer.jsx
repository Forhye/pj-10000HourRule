import React from "react";
import logo from "../assets/weniv-logo.svg";

export default function Footer() {
  return (
    <footer>
      <h2 class="sr-only">위니브 저작권 표시</h2>
      <img src={logo} alt="weniv 로고" />
      <dl>
        <dt>
          ※ 본 서비스 내 이미지 및 콘텐츠의 저작권은 주식회사 WeNiv에 있습니다.
        </dt>
        <dd>수정 및 재배포, 무단 도용 시 법적인 문제가 발생할 수 있습니다.</dd>
      </dl>
    </footer>
  );
}
