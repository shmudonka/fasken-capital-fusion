import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const { firstName, lastName, email, phone, service, message } = req.body;

    const response = await resend.emails.send({
      from: "Website Contact <onboarding@resend.dev>",
      to: "info@citizenshipcapitalgroup.com",
      subject: `New Inquiry from ${firstName} ${lastName}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "N/A"}</p>
        <p><strong>Interested In:</strong> ${service || "N/A"}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    });

    if (response.error) {
      console.error("Resend Error:", response.error);
      return res.status(500).json({ error: response.error });
    }

    return res.status(200).json({ success: true });

  } catch (error) {
    console.error("Server Error:", error);
    return res.status(500).json({ error: "Email failed to send" });
  }
}