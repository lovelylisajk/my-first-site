import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kkongdang.vercel.app"),
  title: "맹꽁당 베이킹 스튜디오 | 카페 사장님의 첫 디저트 파트너",
  description:
    "카페 사장님의 첫 디저트 메뉴, 맹꽁당이 함께 굽습니다. 1:1 맞춤형 실전 구움과자·케이크 클래스 및 창업 컨설팅.",
  openGraph: {
    title: "맹꽁당 베이킹 스튜디오 | 카페 사장님의 첫 디저트 파트너",
    description:
      "카페 사장님의 첫 디저트 메뉴, 맹꽁당이 함께 굽습니다. 1:1 맞춤형 실전 구움과자·케이크 클래스 및 창업 컨설팅.",
    url: "https://kkongdang.vercel.app",
    siteName: "맹꽁당 베이킹 스튜디오",
    images: [
      {
        url: "/my-photo.jpg",
        alt: "맹꽁당 베이킹 스튜디오",
      },
    ],
    locale: "ko_KR",
    type: "website",
  },
  verification: {
    google: "Z6_cOvuhW-xR9PRsd_w1acnT2Ma9ibLNB4zksh4WvkY",
    other: {
      "naver-site-verification": "9f239285fe008afe86d116e5777c90b5fe693243",
    },
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ko"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
