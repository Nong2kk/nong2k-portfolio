import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Send, Loader2, Mail, Phone, MapPin, Linkedin } from "lucide-react";
import { z } from "zod";
import { Reveal } from "../ui/Reveal";
import { useCreateMessage } from "@/hooks/use-messages";

const formSchema = z.object({
  name: z.string().min(2, "Vui lòng nhập họ tên"),
  email: z.string().email("Địa chỉ email không hợp lệ"),
  phone: z.string().optional(),
  message: z.string().min(10, "Tin nhắn cần ít nhất 10 ký tự"),
});

type FormValues = z.infer<typeof formSchema>;

const contactInfo = [
  {
    icon: <Mail className="w-5 h-5 text-primary" />,
    label: "Email",
    value: "tronglongledgt@gmail.com",
    href: "mailto:tronglongledgt@gmail.com"
  },
  {
    icon: <Phone className="w-5 h-5 text-primary" />,
    label: "Điện thoại",
    value: "0982 319 344",
    href: "tel:+84982319344"
  },
  {
    icon: <Linkedin className="w-5 h-5 text-primary" />,
    label: "LinkedIn",
    value: "linkedin.com/in/tronglongledgt",
    href: "https://linkedin.com/in/tronglongledgt"
  },
  {
    icon: <MapPin className="w-5 h-5 text-primary" />,
    label: "Địa chỉ",
    value: "Tân Bình, TP.HCM",
    href: null
  },
];

export function Contact() {
  const { mutate: sendMessage, isPending } = useCreateMessage();
  const [isSuccess, setIsSuccess] = useState(false);

  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: FormValues) => {
    sendMessage(data, {
      onSuccess: () => {
        setIsSuccess(true);
        reset();
        setTimeout(() => setIsSuccess(false), 5000);
      }
    });
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <Reveal>
          <div className="mb-16 text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">Liên hệ</p>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 font-display">
              Kết nối <span className="text-primary">với tôi</span>
            </h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-primary to-transparent rounded-full mx-auto" />
            <p className="text-muted-foreground mt-6 max-w-2xl mx-auto text-lg leading-relaxed">
              Nếu bạn đang tìm kiếm một Digital Marketer có kinh nghiệm SEO, Content Strategy và tối ưu hiệu suất website, mình luôn sẵn sàng kết nối và trao đổi để cùng tạo ra giá trị tăng trưởng cho doanh nghiệp.
            </p>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Contact Info */}
          <Reveal delay={0.1} className="lg:col-span-2">
            <div className="glass-card p-8 rounded-3xl h-full flex flex-col gap-8">
              <div>
                <h3 className="text-xl font-bold text-foreground mb-6 font-display">Thông tin liên hệ</h3>
                <div className="space-y-5">
                  {contactInfo.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-4">
                      <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground mb-0.5 uppercase tracking-wider">{item.label}</p>
                        {item.href ? (
                          <a
                            href={item.href}
                            target={item.href.startsWith("http") ? "_blank" : undefined}
                            rel="noreferrer"
                            className="text-base font-medium text-foreground hover:text-primary transition-colors break-all"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-base font-medium text-foreground">{item.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-auto p-5 rounded-2xl bg-primary/5 border border-primary/15">
                <p className="text-sm font-semibold text-foreground mb-1">Sẵn sàng làm việc</p>
                <p className="text-sm text-muted-foreground leading-relaxed">Có thể bắt đầu trong 1–2 tuần. Ưu tiên vị trí tại TP.HCM hoặc làm việc hybrid/remote.</p>
              </div>
            </div>
          </Reveal>

          {/* Contact Form */}
          <Reveal delay={0.2} className="lg:col-span-3">
            <div className="glass-card p-8 md:p-10 rounded-3xl">
              <h3 className="text-xl font-bold text-foreground mb-2 font-display">Gửi tin nhắn cho mình</h3>
              <p className="text-sm text-muted-foreground mb-7">Điền thông tin bên dưới, mình sẽ phản hồi sớm nhất có thể.</p>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="text-sm font-medium text-foreground">Họ và tên</label>
                    <input
                      id="name"
                      {...register("name")}
                      data-testid="input-name"
                      className={`w-full px-4 py-3 rounded-xl bg-background border ${errors.name ? 'border-destructive' : 'border-border'} text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-sm`}
                      placeholder="Nguyễn Văn A"
                    />
                    {errors.name && <p className="text-xs text-destructive mt-1">{errors.name.message}</p>}
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="email" className="text-sm font-medium text-foreground">Email</label>
                    <input
                      id="email"
                      {...register("email")}
                      data-testid="input-email"
                      className={`w-full px-4 py-3 rounded-xl bg-background border ${errors.email ? 'border-destructive' : 'border-border'} text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-sm`}
                      placeholder="email@company.com"
                    />
                    {errors.email && <p className="text-xs text-destructive mt-1">{errors.email.message}</p>}
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="phone" className="text-sm font-medium text-foreground">
                    Điện thoại <span className="text-muted-foreground font-normal text-xs">(không bắt buộc)</span>
                  </label>
                  <input
                    id="phone"
                    {...register("phone")}
                    data-testid="input-phone"
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-sm"
                    placeholder="+84 xxx xxx xxx"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="message" className="text-sm font-medium text-foreground">Nội dung</label>
                  <textarea
                    id="message"
                    {...register("message")}
                    data-testid="input-message"
                    rows={5}
                    className={`w-full px-4 py-3 rounded-xl bg-background border ${errors.message ? 'border-destructive' : 'border-border'} text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none text-sm`}
                    placeholder="Xin chào Long, mình muốn trao đổi với bạn về vị trí Digital Marketing / SEO..."
                  />
                  {errors.message && <p className="text-xs text-destructive mt-1">{errors.message.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={isPending}
                  data-testid="button-submit"
                  className="w-full px-6 py-4 rounded-xl font-semibold bg-primary text-primary-foreground shadow-lg shadow-primary/25 hover:shadow-xl hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center gap-2"
                >
                  {isPending ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" /> Đang gửi...
                    </>
                  ) : isSuccess ? (
                    "Đã gửi thành công! Mình sẽ phản hồi sớm."
                  ) : (
                    <>
                      Gửi liên hệ <Send className="w-5 h-5" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
