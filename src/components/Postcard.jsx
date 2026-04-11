import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FiSend } from "react-icons/fi";

export default function Postcard() {
  const formRef = useRef();

  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();
    setSending(true);

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      // 1. Send to YOU
      await emailjs.sendForm(
        serviceId,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID_INBOX,
        formRef.current,
        publicKey
      );

      // 2. Auto-reply to VISITOR
      await emailjs.sendForm(
        serviceId,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID_AUTOREPLY,
        formRef.current,
        publicKey
      );

      setSent(true);
      formRef.current.reset();
      setTimeout(() => setSent(false), 4000);
    } catch (err) {
      console.error("EmailJS error:", err);
    } finally {
      setSending(false);
    }
  };

  return (
    <section className="relative py-12 px-16">
      {/* SAME SYSTEM AS ABOUT SECTION */}
      <div className="grid grid-cols-12">

        {/* MATCHES YOUR ABOUT RIGHT COLUMN WIDTH */}
        <div className="col-span-12">

          {/* POSTCARD */}
          <div className="relative w-full aspect-[16/9] mb-24 border border-dashed border-grayLight-300 dark:border-grayDark-600 bg-grayLight-100/40 dark:bg-grayDark-800/40 rounded-lg overflow-hidden shadow-sm">

            {/* STAMP */}
            <div className="absolute top-6 right-6 w-12 h-12 border border-grayLight-400 dark:border-grayDark-500 rotate-12 opacity-60" />

            <form ref={formRef} onSubmit={sendEmail} className="h-full grid grid-cols-12">

              {/* ================= LEFT ================= */}
              <div className="col-span-8 p-10 border-r border-grayLight-200 dark:border-grayDark-700 flex flex-col">
                <textarea
                  name="message"
                  required
                  placeholder="Hi Jada! Let’s build together!"
                  className="flex-1 w-full bg-transparent outline-none resize-none text-base leading-relaxed placeholder:opacity-40"
                />
              </div>

              {/* ================= RIGHT ================= */}
              <div className="col-span-4 p-8 flex flex-col justify-end gap-5">

                <input
                  name="from_name"
                  required
                  placeholder="Your Name"
                  className="bg-transparent border-b border-grayLight-300 dark:border-grayDark-600 outline-none py-1 text-sm"
                />

                <input
                  name="reply_to"
                  required
                  placeholder="Your Email"
                  className="bg-transparent border-b border-grayLight-300 dark:border-grayDark-600 outline-none py-1 text-sm"
                />

                <button
                  type="submit"
                  disabled={sending}
                  className="mt-2 flex items-center justify-center gap-2 border border-grayLight-400 dark:border-grayDark-500 py-2 text-sm hover:bg-grayLight-200 dark:hover:bg-grayDark-700 transition disabled:opacity-50"
                >
                  {sending ? "Sending..." : "Send"}
                  <FiSend />
                </button>

                <div className="text-xs font-mono text-grayLight-400 dark:text-grayDark-500">
                  {sent ? "Delivered ✉️" : "Ready to send"}
                </div>

              </div>
            </form>

            {/* SUCCESS OVERLAY */}
            {sent && (
              <div className="absolute inset-0 flex items-center justify-center bg-grayLight-100/80 dark:bg-grayDark-900/80 backdrop-blur-sm">
                <p className="font-mono text-sm uppercase">
                  Message sent ✨
                </p>
              </div>
            )}

          </div>

        </div>
      </div>
    </section>
  );
}