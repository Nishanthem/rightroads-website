const GOOGLE_SCRIPT_URL = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL ?? "";

interface SubmitResult {
  success: boolean;
  message: string;
}

export async function submitToGoogleSheets(
  formType: string,
  data: Record<string, string>,
): Promise<SubmitResult> {
  if (!GOOGLE_SCRIPT_URL) {
    console.warn("Google Script URL not configured");
    return { success: true, message: "Form submitted (backend not configured)" };
  }

  try {
    const payload = { formType, timestamp: new Date().toISOString(), ...data };
    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    // no-cors mode returns opaque response, so we assume success if no error thrown
    if (response.type === "opaque" || response.ok) {
      return { success: true, message: "Submitted successfully" };
    }

    return { success: false, message: "Submission failed. Please try again." };
  } catch {
    return { success: false, message: "Network error. Please try again." };
  }
}
