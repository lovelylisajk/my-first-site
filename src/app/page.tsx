"use client";

import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white text-[#906f4e] selection:bg-[#7bb26e]/20 selection:text-[#7f5e3e]">
      {/* ── 0. 상단 네비게이션 헤더 ── */}
      <header className="sticky top-0 z-50 w-full border-b border-[#906f4e]/10 bg-white/90 backdrop-blur-md transition-all">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <a href="#" className="flex items-center gap-2 group">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#7bb26e]/15 text-[#7bb26e] group-hover:bg-[#7bb26e] group-hover:text-white transition-colors text-base font-bold">
              맹
            </span>
            <span className="text-xl font-black tracking-tight text-[#7f5e3e]">
              맹꽁당 <span className="text-xs font-medium text-[#7bb26e]">Baking Studio</span>
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-6 text-sm font-semibold text-[#906f4e]">
            <a href="#story" className="hover:text-[#7f5e3e] transition-colors">스토리</a>
            <a href="#target" className="hover:text-[#7f5e3e] transition-colors">수강대상</a>
            <a href="#programs" className="hover:text-[#7f5e3e] transition-colors">프로그램</a>
            <a href="#healthy" className="hover:text-[#7f5e3e] transition-colors">저당 디저트</a>
            <a href="#why" className="hover:text-[#7f5e3e] transition-colors">차별점</a>
            <a href="#class" className="hover:text-[#7f5e3e] transition-colors">클래스 현장</a>
            <a href="#faq" className="hover:text-[#7f5e3e] transition-colors">FAQ</a>
            <a href="#contact" className="hover:text-[#7f5e3e] transition-colors">문의/위치</a>
          </nav>

          <a
            href="https://pf.kakao.com/_NQslxj"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full bg-[#7bb26e] px-4 py-2 text-xs sm:text-sm font-semibold text-white shadow-sm hover:bg-[#6da161] hover:shadow-md hover:shadow-[#7bb26e]/20 transition-all"
          >
            <span>상담 신청</span>
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </div>
      </header>

      {/* ── 1. 히어로 섹션 (카피 + CTA 2개 + 프로필) ── */}
      <section className="relative overflow-hidden pt-12 pb-20 sm:pt-20 sm:pb-28">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#faf7f3] via-white to-white opacity-80" />
        
        <div className="mx-auto max-w-4xl px-6 text-center space-y-8">
          {/* 2026 클래스 모집 중 배지 */}
          <div className="inline-flex items-center gap-2 rounded-full bg-[#7bb26e]/10 px-4 py-1.5 text-xs sm:text-sm font-bold text-[#7bb26e] border border-[#7bb26e]/30 shadow-sm animate-fade-in">
            <span className="h-2 w-2 rounded-full bg-[#7bb26e] animate-ping" />
            <span className="h-2 w-2 rounded-full bg-[#7bb26e] -ml-4" />
            2026 클래스 모집 중
          </div>

          {/* 메인 히어로 카피 */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-[#7f5e3e] leading-[1.2] break-keep">
            카페 사장님의 첫 디저트 메뉴,<br className="hidden sm:inline" />
            <span className="text-[#7bb26e] underline decoration-[#7bb26e]/30 decoration-wavy decoration-2 underline-offset-8"> 맹꽁당</span>이 함께 굽습니다
          </h1>

          {/* 원형 프로필 사진 */}
          <div className="flex flex-col items-center justify-center pt-2">
            <div className="relative group">
              <div className="absolute -inset-1.5 rounded-full bg-gradient-to-r from-[#7bb26e]/40 to-[#906f4e]/30 blur-sm group-hover:blur-md transition-all" />
              <div className="relative h-28 w-28 sm:h-32 sm:w-32 overflow-hidden rounded-full border-4 border-white shadow-xl">
                <Image
                  src="/my-photo.jpg"
                  alt="맹꽁당 프로필"
                  width={128}
                  height={128}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  priority
                />
              </div>
            </div>
            <span className="mt-3 text-xs font-semibold uppercase tracking-wider text-[#7bb26e] bg-[#7bb26e]/10 px-2.5 py-0.5 rounded-full">
              Chef 맹꽁당
            </span>
          </div>

          {/* 서브 카피 */}
          <p className="mx-auto max-w-2xl text-base sm:text-lg md:text-xl font-medium text-[#906f4e] leading-relaxed break-keep">
            오븐 앞에서 더 이상 막막해하지 마세요. 취미 베이킹이 아닌, 매장에서 혼자서도 빠르고 일관되게 구워내는 실전 디저트 레시피와 공정을 1:1로 전수합니다.
          </p>

          {/* CTA 버튼 2개 */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-4">
            <a
              href="https://pf.kakao.com/_NQslxj"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-[#7bb26e] px-7 py-4 text-base font-bold text-white shadow-lg shadow-[#7bb26e]/25 hover:bg-[#6da161] hover:-translate-y-0.5 active:translate-y-0 transition-all"
            >
              <span>클래스 문의하기</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </a>

            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border-2 border-[#906f4e]/30 bg-white px-7 py-4 text-base font-bold text-[#7f5e3e] shadow-sm hover:border-[#7bb26e] hover:text-[#7bb26e] hover:-translate-y-0.5 active:translate-y-0 transition-all"
            >
              <span>창업 상담 신청</span>
              <svg className="w-5 h-5 text-[#906f4e]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 3c-5.52 0-10 3.63-10 8.1 0 2.89 1.88 5.43 4.73 6.82-.21.78-.77 2.84-.88 3.29-.14.56.2.55.43.4.18-.12 2.82-1.92 3.96-2.7.57.08 1.15.13 1.76.13 5.52 0 10-3.63 10-8.1 0-4.48-4.48-8.1-10-8.1z" />
              </svg>
            </a>
          </div>

          {/* 신뢰 포인트 */}
          <div className="pt-6 grid grid-cols-3 gap-2 sm:gap-6 border-t border-[#906f4e]/10 text-center max-w-lg mx-auto">
            <div>
              <p className="text-xl sm:text-2xl font-black text-[#7f5e3e]">1:1</p>
              <p className="text-xs text-[#906f4e]/80 mt-0.5">밀착 실전 코칭</p>
            </div>
            <div>
              <p className="text-xl sm:text-2xl font-black text-[#7bb26e]">100%</p>
              <p className="text-xs text-[#906f4e]/80 mt-0.5">상업용 실전 레시피</p>
            </div>
            <div>
              <p className="text-xl sm:text-2xl font-black text-[#7f5e3e]">A/S</p>
              <p className="text-xs text-[#906f4e]/80 mt-0.5">매장 오픈 후 피드백</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. 브랜드 스토리 섹션 ── */}
      <section id="story" className="py-20 bg-[#faf7f3] border-y border-[#906f4e]/10">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center space-y-3 mb-12">
            <span className="inline-block rounded-full bg-[#7bb26e]/15 px-3 py-1 text-xs font-bold text-[#7bb26e] uppercase tracking-wider">
              Brand Story
            </span>
            <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-[#7f5e3e] break-keep">
              단순히 굽는 법이 아닌, <br className="hidden sm:inline" />
              매장에서 살아남는 ‘실전 시스템’을 나눕니다
            </h2>
          </div>

          <div className="rounded-3xl bg-white p-8 sm:p-12 border border-[#906f4e]/15 shadow-sm space-y-6 text-base sm:text-lg leading-relaxed text-[#906f4e] break-keep">
            <p>
              취미로 구울 때 완벽했던 디저트가 왜 매장 오븐에만 들어가면 실패할까요?
              음료 주문을 받으며 손이 바쁜 1인 매장에서, 복잡한 공정의 레시피는 금세 사장님을 지치게 만듭니다.
            </p>
            <p className="font-semibold text-[#7f5e3e] border-l-4 border-[#7bb26e] pl-4 italic">
              “디저트는 손님을 끌어들이는 가장 강력한 무기이지만, 사장님의 일상을 무너뜨려선 안 됩니다.”
            </p>
            <p>
              맹꽁당은 수많은 테스트를 통해 <strong className="text-[#7f5e3e]">매장의 작업 동선, 전날 사전 준비(냉동 생지화), 원가 마진율(70% 이상), 보관성</strong>까지 철저하게 검증된 레시피만 수업합니다.
              초보 사장님도 첫 오픈 날 흔들림 없이 구워내고, 손님들이 먼저 “이 구움과자 어디서 떼오신 거예요?”가 아닌 “여기 디저트 찐맛집이네요!”라고 감탄할 수 있도록 가장 든든한 파트너가 되어 드리겠습니다.
            </p>
          </div>

          {/* 가족을 위한 디저트 이야기 */}
          <div className="mt-8 rounded-3xl bg-white/80 border border-[#7bb26e]/30 p-8 sm:p-10 text-center space-y-4 shadow-sm backdrop-blur-sm">
            <span className="inline-block text-3xl text-[#7bb26e] font-serif leading-none">“</span>
            <h3 className="text-xl sm:text-2xl font-black text-[#7f5e3e] tracking-tight">
              가족을 위한 디저트 이야기
            </h3>
            <p className="mx-auto max-w-2xl text-base sm:text-lg leading-relaxed text-[#906f4e] italic break-keep">
              소중한 가족과 사랑하는 사람들에게 언제나 마음 편히 권할 수 있는 디저트를 굽고 싶었습니다.
              정제된 설탕과 밀가루에 대한 부담을 덜어내고, 좋은 원재료 본연의 깊고 구수한 풍미를 살려
              마지막 한 입까지 속 편안하고 기분 좋은 달콤함을 전하는 것.
              맹꽁당이 정성을 다해 따뜻한 오븐 앞에 서는 또 하나의 진심 어린 이유입니다.
            </p>
            <div className="pt-2 flex items-center justify-center gap-2">
              <span className="h-0.5 w-6 bg-[#7bb26e]/30" />
              <span className="text-xs font-semibold text-[#7bb26e]">맹꽁당의 다정한 마음</span>
              <span className="h-0.5 w-6 bg-[#7bb26e]/30" />
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. 대상별 카드 4개 ── */}
      <section id="target" className="py-20 bg-white">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center space-y-3 mb-14">
            <span className="inline-block rounded-full bg-[#7bb26e]/15 px-3 py-1 text-xs font-bold text-[#7bb26e] uppercase tracking-wider">
              For You
            </span>
            <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-[#7f5e3e]">
              이런 고민을 하고 계신다면, 맹꽁당과 함께하세요
            </h2>
            <p className="text-sm sm:text-base text-[#906f4e]/80">
              사장님의 현재 상황에 맞추어 가장 필요한 솔루션을 드립니다.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* 카드 1 */}
            <div className="group rounded-2xl border border-[#906f4e]/15 bg-[#fdfbf9] p-7 hover:border-[#7bb26e] hover:shadow-lg hover:shadow-[#7bb26e]/10 transition-all">
              <div className="flex items-center gap-3 mb-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-2xl shadow-sm border border-[#906f4e]/10">
                  ☕
                </span>
                <div>
                  <span className="text-xs font-bold text-[#7bb26e]">CASE 01</span>
                  <h3 className="text-lg font-bold text-[#7f5e3e]">디저트 라인업이 고민인 예비 사장님</h3>
                </div>
              </div>
              <p className="text-sm text-[#906f4e] leading-relaxed break-keep">
                커피와 가장 잘 어울리는 시그니처 구움과자 3~4종을 빠르게 안착시키고, 실패 없이 오픈 초기 매출을 견인하고 싶은 분.
              </p>
            </div>

            {/* 카드 2 */}
            <div className="group rounded-2xl border border-[#906f4e]/15 bg-[#fdfbf9] p-7 hover:border-[#7bb26e] hover:shadow-lg hover:shadow-[#7bb26e]/10 transition-all">
              <div className="flex items-center gap-3 mb-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-2xl shadow-sm border border-[#906f4e]/10">
                  ⏱️
                </span>
                <div>
                  <span className="text-xs font-bold text-[#7bb26e]">CASE 02</span>
                  <h3 className="text-lg font-bold text-[#7f5e3e]">혼자 일하는 1인 카페 사장님</h3>
                </div>
              </div>
              <p className="text-sm text-[#906f4e] leading-relaxed break-keep">
                주문받고 음료 제조하기도 벅찬 매일, 당일 아침 15분 만에 오븐에 넣고 뺄 수 있는 고효율 전날 반죽 공정이 절실한 분.
              </p>
            </div>

            {/* 카드 3 */}
            <div className="group rounded-2xl border border-[#906f4e]/15 bg-[#fdfbf9] p-7 hover:border-[#7bb26e] hover:shadow-lg hover:shadow-[#7bb26e]/10 transition-all">
              <div className="flex items-center gap-3 mb-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-2xl shadow-sm border border-[#906f4e]/10">
                  📸
                </span>
                <div>
                  <span className="text-xs font-bold text-[#7bb26e]">CASE 03</span>
                  <h3 className="text-lg font-bold text-[#7f5e3e]">시그니처 비주얼이 필요한 매장</h3>
                </div>
              </div>
              <p className="text-sm text-[#906f4e] leading-relaxed break-keep">
                기성 납품 디저트의 뻔한 맛에서 벗어나, 손님들이 사진 찍고 인스타그램에 올려 자연 바이럴되는 차별화된 메뉴를 찾는 분.
              </p>
            </div>

            {/* 카드 4 */}
            <div className="group rounded-2xl border border-[#906f4e]/15 bg-[#fdfbf9] p-7 hover:border-[#7bb26e] hover:shadow-lg hover:shadow-[#7bb26e]/10 transition-all">
              <div className="flex items-center gap-3 mb-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-2xl shadow-sm border border-[#906f4e]/10">
                  👩‍🍳
                </span>
                <div>
                  <span className="text-xs font-bold text-[#7bb26e]">CASE 04</span>
                  <h3 className="text-lg font-bold text-[#7f5e3e]">홈베이커에서 프로 창업으로 도약</h3>
                </div>
              </div>
              <p className="text-sm text-[#906f4e] leading-relaxed break-keep">
                가정용 오븐에서 상업용 컨벡션/데크 오븐으로 넘어가며 온도 편차와 대량 생산 배합 조절에 어려움을 겪고 계신 분.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. 프로그램 카드 3개 ── */}
      <section id="programs" className="py-20 bg-[#faf7f3] border-y border-[#906f4e]/10">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center space-y-3 mb-14">
            <span className="inline-block rounded-full bg-[#7bb26e]/15 px-3 py-1 text-xs font-bold text-[#7bb26e] uppercase tracking-wider">
              Class Programs
            </span>
            <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-[#7f5e3e]">
              매장 상황에 꼭 맞춘 실전 커리큘럼
            </h2>
            <p className="text-sm sm:text-base text-[#906f4e]/80">
              배운 다음 날 곧바로 매장 쇼케이스에 올릴 수 있는 살아있는 수업입니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* 프로그램 1 */}
            <div className="flex flex-col justify-between rounded-3xl bg-white p-7 border border-[#906f4e]/15 shadow-sm hover:border-[#7bb26e] hover:shadow-xl transition-all">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-[#7bb26e]/10 px-3 py-1 text-xs font-bold text-[#7bb26e]">
                    인기 코스
                  </span>
                  <span className="text-xs font-medium text-[#906f4e]/70">4주 정규 / 1:1</span>
                </div>
                <h3 className="text-xl font-black text-[#7f5e3e]">카페 시그니처 구움과자 마스터</h3>
                <p className="text-sm text-[#906f4e] leading-relaxed break-keep">
                  겉바속촉 휘낭시에 6종, 결이 살아있는 통통 마들렌, 진한 버터 풍미의 티그레까지 카페 불패 스테디셀러 총망라.
                </p>
                <ul className="text-xs text-[#906f4e]/90 space-y-2 pt-2 border-t border-[#906f4e]/10">
                  <li className="flex items-center gap-1.5">
                    <span className="text-[#7bb26e]">✔</span> 대량 믹싱 및 냉동 숙성 보관 노하우
                  </li>
                  <li className="flex items-center gap-1.5">
                    <span className="text-[#7bb26e]">✔</span> 매장 오븐별 구움색 & 터짐각 잡기
                  </li>
                  <li className="flex items-center gap-1.5">
                    <span className="text-[#7bb26e]">✔</span> 개별 포장 및 상온 진열 수명 관리
                  </li>
                </ul>
              </div>
              <div className="pt-6">
                <a
                  href="https://pf.kakao.com/_NQslxj"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center rounded-xl bg-[#fdfbf9] border border-[#7bb26e]/40 py-3 text-sm font-bold text-[#7f5e3e] hover:bg-[#7bb26e] hover:text-white transition-colors"
                >
                  과정 상세 문의하기
                </a>
              </div>
            </div>

            {/* 프로그램 2 (추천) */}
            <div className="relative flex flex-col justify-between rounded-3xl bg-white p-7 border-2 border-[#7bb26e] shadow-md hover:shadow-xl transition-all">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#7bb26e] px-3.5 py-0.5 text-xs font-bold text-white shadow-sm">
                창업 추천
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between pt-1">
                  <span className="rounded-full bg-[#7bb26e]/10 px-3 py-1 text-xs font-bold text-[#7bb26e]">
                    쇼케이스 중심
                  </span>
                  <span className="text-xs font-medium text-[#906f4e]/70">3주 집중 / 1:1</span>
                </div>
                <h3 className="text-xl font-black text-[#7f5e3e]">쇼케이스 케이크 & 타르트 실전반</h3>
                <p className="text-sm text-[#906f4e] leading-relaxed break-keep">
                  사계절 제철 과일을 활용한 보틀/조각 케이크와 바삭함이 오래 유지되는 파트 사브레 타르트 라인업 완성.
                </p>
                <ul className="text-xs text-[#906f4e]/90 space-y-2 pt-2 border-t border-[#906f4e]/10">
                  <li className="flex items-center gap-1.5">
                    <span className="text-[#7bb26e]">✔</span> 녹아내리지 않는 동물성 생크림 배합
                  </li>
                  <li className="flex items-center gap-1.5">
                    <span className="text-[#7bb26e]">✔</span> 쇼케이스 진열 시 마름 방지 코팅
                  </li>
                  <li className="flex items-center gap-1.5">
                    <span className="text-[#7bb26e]">✔</span> 홀케이크 예약 주문 시스템 구축
                  </li>
                </ul>
              </div>
              <div className="pt-6">
                <a
                  href="https://pf.kakao.com/_NQslxj"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center rounded-xl bg-[#7bb26e] py-3 text-sm font-bold text-white hover:bg-[#6da161] shadow-sm transition-colors"
                >
                  과정 상세 문의하기
                </a>
              </div>
            </div>

            {/* 프로그램 3 */}
            <div className="flex flex-col justify-between rounded-3xl bg-white p-7 border border-[#906f4e]/15 shadow-sm hover:border-[#7bb26e] hover:shadow-xl transition-all">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-[#7bb26e]/10 px-3 py-1 text-xs font-bold text-[#7bb26e]">
                    밀착 컨설팅
                  </span>
                  <span className="text-xs font-medium text-[#906f4e]/70">원데이 or 맞춤형</span>
                </div>
                <h3 className="text-xl font-black text-[#7f5e3e]">카페 디저트 1:1 맞춤 컨설팅</h3>
                <p className="text-sm text-[#906f4e] leading-relaxed break-keep">
                  현재 매장의 주방 동선, 오븐 기종, 상권 타겟에 맞춘 디저트 메뉴 선별부터 원가 계산표 작성까지 토탈 솔루션.
                </p>
                <ul className="text-xs text-[#906f4e]/90 space-y-2 pt-2 border-t border-[#906f4e]/10">
                  <li className="flex items-center gap-1.5">
                    <span className="text-[#7bb26e]">✔</span> 매장 오븐 현장 온도 커브 교정
                  </li>
                  <li className="flex items-center gap-1.5">
                    <span className="text-[#7bb26e]">✔</span> 가성비 식자재 거래처 리스트 제공
                  </li>
                  <li className="flex items-center gap-1.5">
                    <span className="text-[#7bb26e]">✔</span> 메뉴판 단가 & 마진율 자동 계산 시트
                  </li>
                </ul>
              </div>
              <div className="pt-6">
                <a
                  href="https://pf.kakao.com/_NQslxj"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center rounded-xl bg-[#fdfbf9] border border-[#7bb26e]/40 py-3 text-sm font-bold text-[#7f5e3e] hover:bg-[#7bb26e] hover:text-white transition-colors"
                >
                  과정 상세 문의하기
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. 저당 디저트 전용 섹션 (id="healthy", 배경: #eef6ea) ── */}
      <section id="healthy" className="py-20 bg-[#eef6ea] border-b border-[#906f4e]/10">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center space-y-3 mb-12 max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/80 border border-[#7bb26e]/40 px-3.5 py-1 text-xs font-bold text-[#7bb26e] uppercase tracking-wider shadow-sm">
              <span className="h-2 w-2 rounded-full bg-[#7bb26e] animate-pulse" />
              Healthy & Delicious
            </span>
            <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-[#7f5e3e] break-keep">
              당 관리가 필요한 가족을 생각하며 만든 저당 디저트
            </h2>
            <p className="text-base sm:text-lg font-medium text-[#906f4e] leading-relaxed break-keep">
              설탕 대신 대체당, 정제 밀가루 대신 통밀. 맛은 지키고 부담은 덜었어요.
            </p>
          </div>

          {/* 카드 3개 (모바일 세로 적층: grid-cols-1 md:grid-cols-3) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* 카드 1 */}
            <div className="rounded-3xl bg-white p-7 border border-[#7bb26e]/25 shadow-sm hover:border-[#7bb26e] hover:shadow-xl transition-all space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#eef6ea] text-2xl">
                  🌿
                </div>
                <h3 className="text-xl font-black text-[#7f5e3e]">가족 원데이 클래스</h3>
                <p className="text-sm text-[#906f4e] leading-relaxed break-keep">
                  집에서도 가족과 함께 안심하고 즐길 수 있는 홈베이킹 맞춤 코스. 대체당 특유의 텁텁함 없이 촉촉한 구움과자와 머핀을 배웁니다.
                </p>
                <div className="pt-2 text-xs font-semibold text-[#7bb26e]">
                  #가족간식 #통밀베이킹 #부담없는달콤함
                </div>
              </div>
              <div className="pt-4 border-t border-[#906f4e]/10">
                <a
                  href="https://pf.kakao.com/_NQslxj"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center rounded-xl bg-[#eef6ea] py-2.5 text-xs font-bold text-[#7f5e3e] hover:bg-[#7bb26e] hover:text-white transition-colors"
                >
                  가족 클래스 문의
                </a>
              </div>
            </div>

            {/* 카드 2 */}
            <div className="rounded-3xl bg-white p-7 border-2 border-[#7bb26e] shadow-md hover:shadow-xl transition-all space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#eef6ea] text-2xl">
                  ☕
                </div>
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-black text-[#7f5e3e]">카페용 저당 메뉴 개발</h3>
                  <span className="rounded-full bg-[#7bb26e] px-2.5 py-0.5 text-[11px] font-bold text-white">
                    추천
                  </span>
                </div>
                <p className="text-sm text-[#906f4e] leading-relaxed break-keep">
                  건강을 생각하는 손님들의 발길을 잡는 매장용 저당 시그니처 라인업. 식감과 보관성을 일반 디저트 수준으로 유지하는 상업 레시피.
                </p>
                <div className="pt-2 text-xs font-semibold text-[#7bb26e]">
                  #카페신메뉴 #저당구움과자 #단골확보
                </div>
              </div>
              <div className="pt-4 border-t border-[#906f4e]/10">
                <a
                  href="https://pf.kakao.com/_NQslxj"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center rounded-xl bg-[#7bb26e] py-2.5 text-xs font-bold text-white hover:bg-[#6da161] transition-colors"
                >
                  메뉴 개발 문의
                </a>
              </div>
            </div>

            {/* 카드 3 */}
            <div className="rounded-3xl bg-white p-7 border border-[#7bb26e]/25 shadow-sm hover:border-[#7bb26e] hover:shadow-xl transition-all space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#eef6ea] text-2xl">
                  📘
                </div>
                <h3 className="text-xl font-black text-[#7f5e3e]">대체당 가이드</h3>
                <p className="text-sm text-[#906f4e] leading-relaxed break-keep">
                  알룰로스, 에리스리톨, 스테비아 등 감미료별 감미도 비율과 구움색 발색 특성, 흡습성을 완벽하게 정리한 이론 가이드 전수.
                </p>
                <div className="pt-2 text-xs font-semibold text-[#7bb26e]">
                  #대체당배합비 #열반응가이드 #이론정복
                </div>
              </div>
              <div className="pt-4 border-t border-[#906f4e]/10">
                <a
                  href="https://pf.kakao.com/_NQslxj"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center rounded-xl bg-[#eef6ea] py-2.5 text-xs font-bold text-[#7f5e3e] hover:bg-[#7bb26e] hover:text-white transition-colors"
                >
                  가이드 커리큘럼 문의
                </a>
              </div>
            </div>
          </div>

          {/* 중앙 CTA 버튼 */}
          <div className="pt-10 text-center">
            <a
              href="https://pf.kakao.com/_NQslxj"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-[#7bb26e] px-9 py-4 text-base font-bold text-white shadow-lg shadow-[#7bb26e]/25 hover:bg-[#6da161] hover:-translate-y-0.5 transition-all"
            >
              <span>저당 디저트 클래스 문의</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* ── 5. 차별점 (Why 맹꽁당) ── */}
      <section id="why" className="py-20 bg-white">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center space-y-3 mb-14">
            <span className="inline-block rounded-full bg-[#7bb26e]/15 px-3 py-1 text-xs font-bold text-[#7bb26e] uppercase tracking-wider">
              Why Kkongdang
            </span>
            <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-[#7f5e3e]">
              왜 전국의 사장님들이 맹꽁당을 찾을까요?
            </h2>
            <p className="text-sm sm:text-base text-[#906f4e]/80">
              틀에 박힌 공장식 학원 수업과는 시작부터 다릅니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="rounded-2xl border border-[#906f4e]/15 p-8 bg-[#fdfbf9] hover:-translate-y-1 transition-all space-y-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#7bb26e]/15 text-[#7bb26e] font-black text-2xl">
                01
              </div>
              <h3 className="text-xl font-bold text-[#7f5e3e]">1:1 소수정예 집중 지도</h3>
              <p className="text-sm text-[#906f4e] leading-relaxed break-keep">
                여러 명이서 나눠 만드는 실습이 아닙니다. 계량부터 반죽, 팬닝, 굽기까지 전 과정을 수강생 혼자 100% 손에 익힐 때까지 밀착 코칭합니다.
              </p>
            </div>

            <div className="rounded-2xl border border-[#906f4e]/15 p-8 bg-[#fdfbf9] hover:-translate-y-1 transition-all space-y-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#7bb26e]/15 text-[#7bb26e] font-black text-2xl">
                02
              </div>
              <h3 className="text-xl font-bold text-[#7f5e3e]">철저한 원가표 & 거래처 공유</h3>
              <p className="text-sm text-[#906f4e] leading-relaxed break-keep">
                맛있어도 마진이 안 남으면 장사가 아닙니다. g 단위 원가 계산 엑셀 시트와 합리적인 대량 구매 식자재 거래처를 투명하게 공유합니다.
              </p>
            </div>

            <div className="rounded-2xl border border-[#906f4e]/15 p-8 bg-[#fdfbf9] hover:-translate-y-1 transition-all space-y-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#7bb26e]/15 text-[#7bb26e] font-black text-2xl">
                03
              </div>
              <h3 className="text-xl font-bold text-[#7f5e3e]">평생 이어지는 1:1 카톡 A/S</h3>
              <p className="text-sm text-[#906f4e] leading-relaxed break-keep">
                수업이 끝나도 홀로 남겨두지 않습니다. 매장 오픈 후 오븐 온도가 튈 때, 계절별 습도가 바뀔 때 언제든 사진과 영상을 보내주시면 즉시 진단해 드립니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. 클래스 현장 섹션 ── */}
      <section id="class" className="py-20 bg-[#faf7f3] border-y border-[#906f4e]/10">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center space-y-3 mb-14">
            <span className="inline-block rounded-full bg-[#7bb26e]/15 px-3.5 py-1 text-xs font-bold text-[#7bb26e] uppercase tracking-wider">
              Studio Gallery
            </span>
            <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-[#7f5e3e]">
              맹꽁당 베이킹 클래스 현장
            </h2>
            <p className="text-sm sm:text-base text-[#906f4e]/80">
              오븐의 온기와 달콤한 버터 향이 가득한 1:1 밀착 실전 수업의 순간들입니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* 사진 1 */}
            <div className="group rounded-3xl bg-white p-4 border border-[#906f4e]/15 shadow-sm hover:border-[#7bb26e] hover:shadow-xl transition-all space-y-4">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-[#fdfbf9] border border-[#906f4e]/10">
                <Image
                  src="/class-1.jpg"
                  alt="맹꽁당 클래스 현장 1"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="px-2 pb-2 space-y-1">
                <span className="text-xs font-bold text-[#7bb26e]">구움과자 실전반</span>
                <h3 className="text-base font-bold text-[#7f5e3e]">휘낭시에 팬닝 & 배꼽 교정</h3>
                <p className="text-xs text-[#906f4e]/80">
                  반죽 농도와 오븐 열풍 제어로 완벽한 배꼽과 겉바속촉 식감을 완성합니다.
                </p>
              </div>
            </div>

            {/* 사진 2 */}
            <div className="group rounded-3xl bg-white p-4 border border-[#906f4e]/15 shadow-sm hover:border-[#7bb26e] hover:shadow-xl transition-all space-y-4">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-[#fdfbf9] border border-[#906f4e]/10">
                <Image
                  src="/class-2.jpg"
                  alt="맹꽁당 클래스 현장 2"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="px-2 pb-2 space-y-1">
                <span className="text-xs font-bold text-[#7bb26e]">쇼케이스 실전반</span>
                <h3 className="text-base font-bold text-[#7f5e3e]">제철 타르트 사브레 크러스트</h3>
                <p className="text-xs text-[#906f4e]/80">
                  냉장 쇼케이스에서도 눅눅해지지 않는 바삭한 파트 사브레 공정 전수.
                </p>
              </div>
            </div>

            {/* 사진 3 */}
            <div className="group rounded-3xl bg-white p-4 border border-[#906f4e]/15 shadow-sm hover:border-[#7bb26e] hover:shadow-xl transition-all space-y-4">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-[#fdfbf9] border border-[#906f4e]/10">
                <Image
                  src="/class-3.jpg"
                  alt="맹꽁당 클래스 현장 3"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="px-2 pb-2 space-y-1">
                <span className="text-xs font-bold text-[#7bb26e]">1:1 맞춤 컨설팅</span>
                <h3 className="text-base font-bold text-[#7f5e3e]">매장 오븐 환경 온도 최적화</h3>
                <p className="text-xs text-[#906f4e]/80">
                  수강생 매장의 실제 오븐 기종에 맞춘 프로파일링 및 대량 생산 세팅.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── [보존 코드] 기존 수강 후기 섹션 (숨김 보존) ──
      <section id="reviews" className="py-20 bg-[#faf7f3] border-y border-[#906f4e]/10">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center space-y-3 mb-14">
            <span className="inline-block rounded-full bg-[#7bb26e]/15 px-3 py-1 text-xs font-bold text-[#7bb26e] uppercase tracking-wider">
              Reviews
            </span>
            <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-[#7f5e3e]">
              맹꽁당을 거쳐 간 사장님들의 생생한 후기
            </h2>
            <p className="text-sm sm:text-base text-[#906f4e]/80">
              이미 많은 매장에서 검증된 매출 상승의 주인공들입니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-2xl bg-white p-7 border border-[#906f4e]/15 shadow-sm space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex text-amber-400 text-sm">★★★★★</div>
                <p className="text-sm text-[#906f4e] leading-relaxed break-keep">
                  “오픈 첫 달 구움과자 매출만 400만 원 돌파했습니다. 납품 쓰다가 직접 굽기 시작했는데 손님들이 먼저 휘낭시에 인생 맛집이라고 소문내주셨어요. 맹꽁당 쌤 레시피는 진짜 금입니다.”
                </p>
              </div>
              <div className="pt-3 border-t border-[#906f4e]/10 flex items-center justify-between text-xs">
                <span className="font-bold text-[#7f5e3e]">연남동 C카페 사장님</span>
                <span className="text-[#7bb26e] font-semibold">구움과자 마스터 수강</span>
              </div>
            </div>

            <div className="rounded-2xl bg-white p-7 border border-[#906f4e]/15 shadow-sm space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex text-amber-400 text-sm">★★★★★</div>
                <p className="text-sm text-[#906f4e] leading-relaxed break-keep">
                  “1인 카페라 베이킹은 꿈도 못 꿨는데, 전날 20분 반죽해두고 다음 날 오븐에 넣기만 하는 냉동 공정 루틴을 짜주셔서 신세계를 맛봤습니다. 몸도 덜 힘들고 마진은 두 배가 됐어요.”
                </p>
              </div>
              <div className="pt-3 border-t border-[#906f4e]/10 flex items-center justify-between text-xs">
                <span className="font-bold text-[#7f5e3e]">성수동 B카페 대표님</span>
                <span className="text-[#7bb26e] font-semibold">1:1 창업 컨설팅 수강</span>
              </div>
            </div>

            <div className="rounded-2xl bg-white p-7 border border-[#906f4e]/15 shadow-sm space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex text-amber-400 text-sm">★★★★★</div>
                <p className="text-sm text-[#906f4e] leading-relaxed break-keep">
                  “우녹스 오븐 바람 때문에 디저트가 한쪽으로 쏠려서 매일 울며 겨자 먹기로 버렸는데, 선생님이 팬닝 위치랑 바람막이 조절법을 알려주신 뒤로 불량률 0% 됐습니다. 진작 배울 걸 그랬어요!”
                </p>
              </div>
              <div className="pt-3 border-t border-[#906f4e]/10 flex items-center justify-between text-xs">
                <span className="font-bold text-[#7f5e3e]">일산 D디저트샵 사장님</span>
                <span className="text-[#7bb26e] font-semibold">타르트 & 케이크 수강</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      ── */}

      {/* ── 7. FAQ (아코디언) ── */}
      <section id="faq" className="py-20 bg-white">
        <div className="mx-auto max-w-3xl px-6">
          <div className="text-center space-y-3 mb-14">
            <span className="inline-block rounded-full bg-[#7bb26e]/15 px-3 py-1 text-xs font-bold text-[#7bb26e] uppercase tracking-wider">
              FAQ
            </span>
            <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-[#7f5e3e]">
              자주 묻는 질문
            </h2>
            <p className="text-sm sm:text-base text-[#906f4e]/80">
              궁금하신 점을 빠르게 확인해 보세요.
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "베이킹을 한 번도 안 해본 왕초보도 들을 수 있나요?",
                a: "네, 전 과정이 1:1 또는 최대 2인의 소수정예로 진행되기 때문에 계량법, 주걱 쥐는 법, 오븐 다루는 기초부터 꼼꼼하게 알려드립니다. 수강생의 60% 이상이 베이킹이 처음인 카페 사장님들입니다.",
              },
              {
                q: "수업에서 배운 레시피는 매장에서 바로 판매해도 되나요?",
                a: "물론입니다! 맹꽁당의 모든 클래스 레시피는 상업적 판매를 목적으로 완성된 실전 레시피입니다. 수강 후 별도 허가 없이 매장의 대표 시그니처 메뉴로 곧바로 출시하실 수 있습니다.",
              },
              {
                q: "수업 일정은 어떻게 조율하나요?",
                a: "카페 운영이나 오픈 일정에 맞춰 평일/주말, 오전/오후 시간대를 1:1로 유연하게 협의하여 결정합니다. 단기 속성(원데이 집중) 또는 주 1회 코스 모두 가능합니다.",
              },
              {
                q: "공방 오븐과 제 매장 오븐 기종이 다른데 괜찮을까요?",
                a: "우녹스, 스메그, 지에라 등 상업용 컨벡션 오븐부터 데크오븐까지 각 제조사별 열풍 특성과 온도 보정값을 상세히 가이드해 드립니다. 매장 오븐 사진을 보여주시면 맞춤형 온도 커브를 잡아드립니다.",
              },
              {
                q: "수강이 끝난 뒤에도 질문이나 피드백을 받을 수 있나요?",
                a: "네, 맹꽁당의 가장 큰 강점입니다! 매장에서 직접 굽다가 색이 덜 나거나 식감이 다를 때 카카오톡 채널로 사진이나 영상을 보내주시면 원인을 즉시 분석하고 피드백해 드립니다.",
              },
              {
                q: "저당 디저트는 일반 디저트와 맛이나 식감이 많이 다른가요?",
                a: "설탕과 정제 밀가루를 덜어내고 대체당과 통밀을 사용하더라도, 맹꽁당만의 섬세한 배합 연구를 거쳐 일반 디저트 못지않은 깊은 풍미와 부드럽고 촉촉한 식감을 그대로 구현했습니다. 부담 없이 안심하고 즐기실 수 있습니다.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="overflow-hidden rounded-2xl border border-[#906f4e]/15 bg-[#fdfbf9] transition-all"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="flex w-full items-center justify-between p-6 text-left font-bold text-[#7f5e3e] hover:text-[#7bb26e] transition-colors"
                >
                  <span className="text-base sm:text-lg flex items-center gap-3">
                    <span className="text-[#7bb26e] text-sm font-black">Q{idx + 1}.</span>
                    {item.q}
                  </span>
                  <span
                    className={`ml-4 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-white border border-[#906f4e]/20 text-[#7bb26e] text-lg font-bold transition-transform duration-300 ${
                      openFaq === idx ? "rotate-180 bg-[#7bb26e] text-white border-[#7bb26e]" : ""
                    }`}
                  >
                    ▾
                  </span>
                </button>
                {openFaq === idx && (
                  <div className="border-t border-[#906f4e]/10 bg-white p-6 text-sm sm:text-base leading-relaxed text-[#906f4e] break-keep animate-fadeIn">
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8. 위치 / 문의 / SNS 섹션 ── */}
      <section id="contact" className="py-20 bg-[#faf7f3] border-t border-[#906f4e]/10">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center space-y-3 mb-12">
            <span className="inline-block rounded-full bg-[#7bb26e]/15 px-3 py-1 text-xs font-bold text-[#7bb26e] uppercase tracking-wider">
              Contact & Location
            </span>
            <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-[#7f5e3e]">
              맹꽁당 공방과 함께 맛있는 내일을 구워보세요
            </h2>
            <p className="text-sm sm:text-base text-[#906f4e]">
              클래스 신청 및 맞춤 창업 상담은 카카오톡 채널로 가장 빠르고 친절하게 답변드립니다.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-8 sm:p-12 border border-[#906f4e]/15 shadow-sm space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm">
              <div className="space-y-2 rounded-2xl bg-[#fdfbf9] p-6 border border-[#906f4e]/10">
                <span className="text-xs font-bold text-[#7bb26e] uppercase">Location</span>
                <h4 className="text-base font-bold text-[#7f5e3e]">맹꽁당 베이킹 스튜디오</h4>
                <p className="text-[#906f4e]/90 text-xs sm:text-sm leading-relaxed">
                  100% 사전 예약제 클래스 및 1:1 맞춤 상담 운영<br />
                  (상세 위치는 클래스 예약 확정 후 개별 안내드립니다)
                </p>
              </div>

              <div className="space-y-2 rounded-2xl bg-[#fdfbf9] p-6 border border-[#906f4e]/10">
                <span className="text-xs font-bold text-[#7bb26e] uppercase">Consulting</span>
                <h4 className="text-base font-bold text-[#7f5e3e]">빠른 1:1 상담 안내</h4>
                <p className="text-[#906f4e]/90 text-xs sm:text-sm leading-relaxed">
                  운영 시간: 연중무휴 상담 접수 가능<br />
                  원하시는 메뉴, 매장 오픈 예정일과 함께 문의해 주세요.
                </p>
              </div>
            </div>

            {/* 메인 카카오톡 문의 큰 버튼 */}
            <div className="pt-2 text-center">
              <a
                href="https://pf.kakao.com/_NQslxj"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full sm:w-auto items-center justify-center gap-3 rounded-2xl bg-[#7bb26e] px-10 py-5 text-lg font-black text-white shadow-xl shadow-[#7bb26e]/25 hover:bg-[#6da161] hover:-translate-y-0.5 transition-all"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 3c-5.52 0-10 3.63-10 8.1 0 2.89 1.88 5.43 4.73 6.82-.21.78-.77 2.84-.88 3.29-.14.56.2.55.43.4.18-.12 2.82-1.92 3.96-2.7.57.08 1.15.13 1.76.13 5.52 0 10-3.63 10-8.1 0-4.48-4.48-8.1-10-8.1z" />
                </svg>
                <span>카카오톡으로 빠른 클래스 문의하기</span>
              </a>
            </div>

            {/* 공식 SNS 채널 3종 */}
            <div className="pt-6 border-t border-[#906f4e]/10 text-center space-y-3">
              <p className="text-xs font-bold uppercase tracking-wider text-[#906f4e]/70">
                Official Channels
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3">
                {/* 인스타그램 */}
                <a
                  href="https://www.instagram.com/kkongdang/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[#fdfbf9] border border-[#906f4e]/20 px-4 py-2 text-sm font-medium text-[#906f4e] hover:text-[#7f5e3e] hover:border-[#7bb26e]/50 hover:bg-white transition-all shadow-sm group"
                >
                  <svg className="w-4 h-4 text-[#7bb26e] group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  <span>인스타그램 @kkongdang</span>
                </a>

                {/* 네이버 블로그 */}
                <a
                  href="https://blog.naver.com/mkkongdang"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[#fdfbf9] border border-[#906f4e]/20 px-4 py-2 text-sm font-medium text-[#906f4e] hover:text-[#7f5e3e] hover:border-[#7bb26e]/50 hover:bg-white transition-all shadow-sm group"
                >
                  <svg className="w-3.5 h-3.5 text-[#7bb26e] group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M16.273 12.845L7.376 0H0v24h7.727V11.155L16.624 24H24V0h-7.727z" />
                  </svg>
                  <span>네이버 블로그</span>
                </a>

                {/* 카카오톡 채널 */}
                <a
                  href="https://pf.kakao.com/_NQslxj"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[#fdfbf9] border border-[#906f4e]/20 px-4 py-2 text-sm font-medium text-[#906f4e] hover:text-[#7f5e3e] hover:border-[#7bb26e]/50 hover:bg-white transition-all shadow-sm group"
                >
                  <svg className="w-4 h-4 text-[#7bb26e] group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 3c-5.52 0-10 3.63-10 8.1 0 2.89 1.88 5.43 4.73 6.82-.21.78-.77 2.84-.88 3.29-.14.56.2.55.43.4.18-.12 2.82-1.92 3.96-2.7.57.08 1.15.13 1.76.13 5.52 0 10-3.63 10-8.1 0-4.48-4.48-8.1-10-8.1z" />
                  </svg>
                  <span>카카오톡 채널</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 9. 푸터 ── */}
      <footer className="border-t border-[#906f4e]/10 py-10 bg-white text-center text-xs text-[#906f4e]/70 space-y-2">
        <p className="font-bold text-[#7f5e3e]">맹꽁당 베이킹 스튜디오</p>
        <p>사업자등록번호 및 통신판매업 신고 정보는 예약 시 제공됩니다.</p>
        <p>© 2026 맹꽁당 Baking Studio. All rights reserved.</p>
      </footer>
    </div>
  );
}
