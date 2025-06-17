import nodemailer from "nodemailer";

// Configure transporter using environment variables for security
export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER, // Your Gmail address
    pass: process.env.EMAIL_PASS, // Your Gmail app password
  },
});

export async function sendContactEmail(data: any) {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: "astrong1109@gmail.com",
    subject: "New Contact Form Submission",
    text: `New contact form submission:\n\nName: ${data.firstName} ${data.lastName}\nEmail: ${data.email}\nPhone: ${data.phone}\nTopic: ${data.topic}\nMessage: ${data.message}`,
  };
  await transporter.sendMail(mailOptions);
}
