import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  const contactEmail = process.env.CONTACT_EMAIL;

  if (!apiKey || !contactEmail) {
    return NextResponse.json(
      {
        error:
          "버셀(또는 .env)에 RESEND_API_KEY · CONTACT_EMAIL 이 있는지 확인하세요",
      },
      { status: 500 }
    );
  }

  try {
    const { name, message } = await request.json();

    if (!name?.trim() || !message?.trim()) {
      return NextResponse.json(
        { error: "이름과 하고 싶은 말을 모두 입력해 주세요." },
        { status: 400 }
      );
    }

    const resend = new Resend(apiKey);

    const { data, error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: contactEmail,
      subject: `[맹꽁당 연락하기] ${name}님의 메시지`,
      text: `이름: ${name}\n\n하고 싶은 말:\n${message}`,
      html: `
        <div style="font-family: sans-serif; line-height: 1.6; color: #7f5e3e;">
          <h2>[맹꽁당 베이킹 스튜디오] 연락하기 메시지</h2>
          <p><strong>이름:</strong> ${name}</p>
          <p><strong>하고 싶은 말:</strong></p>
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
      err instanceof Error ? err.message : "메일 전송 중 오류가 발생했습니다.";
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}

