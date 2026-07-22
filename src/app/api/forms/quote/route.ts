import { NextResponse } from "next/server";

import { quoteSchema } from "@/lib/form-schemas";
import { submitQuoteRequest } from "@/lib/form-submissions";

export async function POST(request: Request) {
  try {
    const contentLength = Number(request.headers.get("content-length") ?? 0);
    const origin = request.headers.get("origin");

    if (contentLength > 20_000) {
      return NextResponse.json({ error: "Request is too large." }, { status: 413 });
    }

    if (origin && new URL(origin).origin !== new URL(request.url).origin) {
      return NextResponse.json({ error: "Request origin is not allowed." }, { status: 403 });
    }

    const json = await request.json();
    const data = quoteSchema.parse(json);

    await submitQuoteRequest(data);

    return NextResponse.json({ ok: true });
  } catch (error) {
    if (error instanceof Error && "name" in error && error.name === "ZodError") {
      return NextResponse.json(
        { error: "Please check the form fields and try again." },
        { status: 400 },
      );
    }

    return NextResponse.json(
      { error: "Unable to submit your request right now. Please try again shortly." },
      { status: 500 },
    );
  }
}
