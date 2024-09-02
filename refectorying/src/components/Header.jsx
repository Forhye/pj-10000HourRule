import React from "react";
import title from "../assets/title.svg";

export default function Header() {
  return (
    <header>
      <h1 class="sr-only">1만 시간의 법칙 제목</h1>
      <img src={title} alt="1만 시간의 법칙 텍스트가 강조되어 있다." />
    </header>
  );
}
