import { ContactForm } from "@/sections/ContactForm";
import { Header } from "@/sections/Header";

export const metadata = {
  title: "Contact",
  description:
    "Get in touch with me for collaboration opportunities, project inquiries, or just to say hello!",
};

export default function Contact() {
  return (
    <main className="min-h-screen bg-linear-to-br from-gray-900 via-gray-800 to-black">
      <Header />
      <ContactForm />
    </main>
  );
}
