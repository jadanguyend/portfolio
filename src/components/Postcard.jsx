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

      // SEND TO YOU
      await emailjs.sendForm(
        serviceId,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID_INBOX,
        formRef.current,
        publicKey
      );

      // AUTO REPLY TO USER
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
    <div className="w-full">

      {/* POSTCARD */}
      <div className="relative w-full aspect-[16/6] border border-dashed border-grayLight-300 dark:border-grayDark-300 bg-grayLight-50 dark:bg-grayDark-50 rounded-lg overflow-hidden shadow-sm">

{/* STAMP */}
<img
  src={stamp}
  alt="stamp"
  className="absolute top-4 right-4 w-20 opacity-90 pointer-events-none select-none drop-shadow-[1px_2px_1px_rgba(0,0,0,0.14)]"
/>

        <form
          ref={formRef}
          onSubmit={sendEmail}
          className="h-full grid grid-cols-12"
        >

          {/* ================= LEFT ================= */}
          <div className="col-span-8 p-8 border-r border-grayLight-300 dark:border-grayDark-300 flex flex-col">
            <textarea
              name="message"
              required
              placeholder="Hi Jada! I’ve got an idea I’d love to build together…"
              className="flex-1 w-full bg-transparent outline-none resize-none text-base leading-relaxed"
            />
          </div>

          {/* ================= RIGHT ================= */}
          <div className="col-span-4 p-6 flex flex-col h-full">

            {/* ================= TO (TOP) ================= */}
            <div className="flex flex-col mb-6">
              <span className="text-xs font-mono uppercase text-grayLight-500 dark:text-grayDark-600">
                To
              </span>
              <span className="text-sm text-grayLight-900 dark:text-grayDark-900">
                jadanguyend@gmail.com
              </span>
            </div>

            {/* pushes bottom section down */}
            <div className="flex-1" />

            {/* ================= FROM (BOTTOM) ================= */}
            <div className="flex flex-col gap-4">

              {/* NAME */}
              <div className="flex flex-col">
                <span className="text-xs font-mono uppercase text-grayLight-500 dark:text-grayDark-600">
                  From Name
                </span>
                <input
                  name="from_name"
                  required
                  className="bg-transparent border-b border-grayLight-300 dark:border-grayDark-600 outline-none py-1 text-sm"
                />
              </div>

              {/* EMAIL */}
              <div className="flex flex-col">
                <span className="text-xs font-mono uppercase text-grayLight-500 dark:text-grayDark-600">
                  From Email
                </span>
                <input
                  name="reply_to"
                  required
                  className="bg-transparent border-b border-grayLight-300 dark:border-grayDark-600 outline-none py-1 text-sm"
                />
              </div>

              {/* BUTTON */}
              <button
                type="submit"
                disabled={sending}
                className="mt-2 flex items-center justify-center gap-2 border border-grayLight-400 dark:border-grayDark-500 py-2 text-sm hover:bg-grayLight-200 dark:hover:bg-grayDark-700 transition disabled:opacity-50"
              >
                {sending ? "Sending..." : "Send"}
                <FiSend />
              </button>


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
  );
}