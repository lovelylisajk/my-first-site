import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  const contactEmail = process.env.CONTACT_EMAIL;
  const sheetsWebhookUrl =
    process.env.GOOGLE_SHEETS_WEBHOOK_URL ||
    "https://script.google.com/macros/s/AKfycbzqfGVO9Jn7cQ4uDbboTSl1k8H5i5iCP2ZfYvuuEH_SGuJ55hZX3mFyvdb7exQ5sNVfPQ/exec";

  try {
    const body = await request.json();
    const {
      name,
      phone = "",
      inquiryType = "",
      message,
      privacyAgreed = true,
    } = body;

    if (!name?.trim() || !message?.trim()) {
      return NextResponse.json(
        { error: "필수 항목을 모두 입력해 주세요." },
        { status: 400 }
      );
    }

    // 1. 구글 시트 웹훅(Google Apps Script)이 설정되어 있으면 시트에 행 추가
    if (sheetsWebhookUrl) {
      const sheetRes = await fetch(sheetsWebhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          spreadsheetId: "1n5lqKfVp0C68faTnLPnw_w8m07uSFh-S3k0rbgZfKug",
          gid: 877589044,
          timestamp: new Date().toLocaleString("ko-KR", {
            timeZone: "Asia/Seoul",
          }),
          name,
          phone,
          inquiryType,
          message,
          privacyAgreed: privacyAgreed ? "동의" : "미동의",
        }),
      });

      if (!sheetRes.ok) {
        return NextResponse.json(
          { error: "구글 시트 저장 중 오류가 발생했습니다." },
          { status: 500 }
        );
      }
    }

    // 2. Resend 이메일 전송
    if (!apiKey || !contactEmail) {
      if (sheetsWebhookUrl) {
        return NextResponse.json({ ok: true });
      }
      return NextResponse.json(
        {
          error:
            "버셀(또는 .env)에 RESEND_API_KEY · CONTACT_EMAIL 이 있는지 확인하세요",
        },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);

    const { data, error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: contactEmail,
      subject: `[맹꽁당 상담신청] ${name}님 (${inquiryType || "일반문의"})`,
      text: `이름: ${name}\n연락처: ${phone || "-"}\n문의 종류: ${inquiryType || "-"}\n개인정보 동의: ${privacyAgreed ? "동의" : "미동의"}\n\n문의 내용:\n${message}`,
      html: `
        <div style="font-family: sans-serif; line-height: 1.6; color: #7f5e3e;">
          <h2>[맹꽁당 베이킹 스튜디오] 무료 상담 신청</h2>
          <p><strong>이름:</strong> ${name}</p>
          <p><strong>연락처:</strong> ${phone || "-"}</p>
          <p><strong>문의 종류:</strong> ${inquiryType || "-"}</p>
          <p><strong>개인정보 수집 동의:</strong> ${privacyAgreed ? "동의" : "미동의"}</p>
          <p><strong>문의 내용:</strong></p>
          <div style="white-space: pre-wrap; background: #faf7f3; padding: 16px; border-radius: 12px; border: 1px solid #e5e0d8;">${message}</div>
        </div>
      `,
    });

    if (error) {
      return NextResponse.json(
        { error: error.message || JSON.stringify(error) },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: true, data });
  } catch (err) {
    const errorMessage =
      err instanceof Error ? err.message : "상담 신청 전송 중 오류가 발생했습니다.";
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
