import React from "react";
import finger from "../assets/click-hand.svg";

export default function Main() {
  return (
    <main>
      <h2 class="sr-only">1만 시간의 법칙 표어</h2>
      <p class="slogan">"연습은 어제의 당신보다 당신을 더 낫게 만든다."</p>

      <section class="accent">
        <h3 class="sr-only">1만 시간의 법칙 설명</h3>
        {/* <!-- <p class="quotes">
          <img src="./src/accent.svg" alt="따옴표 아이콘" />
        </p> --> */}
        <p class="discription">
          <span class="text-bold">1만 시간의 법칙</span>
          은
          <br />
          어떤 분야의 전문가가 되기 위해서는
          <br />
          최소한 1만 시간의 훈련이 필요하다는 법칙이다.
        </p>
      </section>

      <section class="challenge">
        <h3 class="sr-only">나의 목표 전문가와 훈련시간 입력하기</h3>
        <p>
          나는
          <input type="text" name="tr-job" placeholder="예)프로그래밍" />
          전문가가 될 것이다.
        </p>
        <p>
          그래서 앞으로 매일 하루에
          <input type="text" name="tr-time" placeholder="예)5시간" />
          <span>시간씩 훈련할 것이다.</span>
        </p>
      </section>

      <section class="btn-count">
        <h3 class="sr-only">훈련시간 계산 결과 보기 버튼</h3>
        <button>나는 며칠 동안 훈련을 해야 1만 시간이 될까?</button>
        <img src={finger} alt="클릭하는 손가락 아이콘" />
      </section>

      <section class="complete">
        <h3 class="sr-only">훈련시간 계산 결과</h3>
        <p>
          당신은
          <span class="text-bold-xl">프로그래밍</span>
          전문가가 되기 위해서
        </p>
        <p>
          대략
          <span class="text-bold-xl">5110</span>일 이상 훈련하셔야 합니다! :)
        </p>
      </section>

      <section class="btn-area">
        <h3 class="sr-only">훈련하러가기 및 공유 버튼 영역</h3>
        <button class="btn-training">훈련하러 가기 GO!GO!</button>
        <button class="btn-share">공유하기</button>
      </section>
    </main>
  );
}
