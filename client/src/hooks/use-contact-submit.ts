import emailjs from "@emailjs/browser";
import { useMutation } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID as string | undefined;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string | undefined;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string | undefined;

export interface ContactPayload {
  name: string;
  email: string;
  phone?: string;
  message: string;
  captchaToken: string;
}

function getErrorDetail(error: unknown): string {
  // EmailJS rejects with an EmailJSResponseStatus ({ status, text }), not an Error.
  if (typeof error === "object" && error !== null && "text" in error) {
    return String((error as { text: unknown }).text);
  }
  if (error instanceof Error) return error.message;
  return "";
}

export function useContactSubmit({ fallbackEmail }: { fallbackEmail: string }) {
  const { toast } = useToast();

  return useMutation({
    mutationFn: async ({ name, email, phone, message, captchaToken }: ContactPayload) => {
      if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
        throw new Error("Thiếu cấu hình EmailJS (VITE_EMAILJS_*)");
      }

      // Template variable names must match the EmailJS template.
      return emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: name,
          from_email: email,
          phone: phone ?? "",
          message,
          time: new Date().toLocaleString("vi-VN", { timeZone: "Asia/Ho_Chi_Minh" }),
          "g-recaptcha-response": captchaToken,
        },
        { publicKey: EMAILJS_PUBLIC_KEY },
      );
    },
    onSuccess: () => {
      toast({
        title: "Gửi thành công!",
        description: "Mình sẽ phản hồi sớm nhất có thể.",
      });
    },
    onError: (error: unknown) => {
      console.error("[EmailJS error]", error);
      const detail = getErrorDetail(error);
      toast({
        variant: "destructive",
        title: `Gửi thất bại${detail ? ` (${detail})` : ""}`,
        description: `Vui lòng thử lại hoặc liên hệ trực tiếp qua ${fallbackEmail}`,
      });
    },
  });
}
