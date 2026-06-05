import { NextResponse } from "next/server";

import { quoteSchema } from "@/lib/form-schemas";
import { submitQuoteRequest } from "@/lib/form-submissions";

export async function POST(request: Request) {
  try {
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