import { NextResponse } from "next/server";

import { contactLeadSchema } from "@/lib/form-schemas";
import { submitContactLead } from "@/lib/form-submissions";

export async function POST(request: Request) {
  try {
    const json = await request.json();
    const data = contactLeadSchema.parse(json);

    await submitContactLead(data);

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