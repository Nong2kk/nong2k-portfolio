import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Send, Loader2, Mail, Phone, MapPin, Award } from "lucide-react";
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
      {/* Background glow */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <Reveal>
          <div className="mb-16 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 font-display">
              Liên hệ <span className="text-primary">với tôi</span>
            </h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-primary to-transparent rounded-full mx-auto" />
            <p className="text-muted-foreground mt-6 max-w-2xl mx-auto text-lg">
              Nếu bạn đang tìm kiếm ứng viên về SEO / Digital Marketing, mình rất sẵn sàng kết nối và trao đổi thêm.
            </p>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-8">
          <Reveal delay={0.1} className="lg:col-span-2">
            <div className="glass-card p-8 rounded-3xl h-full flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6 font-display">Thông tin liên hệ</h3>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Email</p>
                      <a href="mailto:contact@example.com" className="text-lg font-medium text-foreground hover:text-primary transition-colors">
                        contact@example.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Điện thoại</p>
                      <a href="tel:+84123456789" className="text-lg font-medium text-foreground hover:text-primary transition-colors">
                        +84 123 456 789
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Địa điểm</p>
                      <p className="text-lg font-medium text-foreground">Việt Nam</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-10 p-6 rounded-2xl bg-card border border-border">
                <div className="flex items-center gap-2 mb-3">
                  <Award className="w-4 h-4 text-primary" />
                  <p className="text-sm font-semibold text-foreground">Chứng chỉ</p>
                </div>
                <ul className="text-sm text-muted-foreground space-y-2 list-disc pl-4 marker:text-primary">
                  <li>Chứng chỉ Chiến lược Digital Marketing</li>
                  <li>Chứng chỉ Tối ưu SEO</li>
                </ul>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.2} className="lg:col-span-3">
            <div className="glass-card p-8 md:p-12 rounded-3xl">
              <h3 className="text-xl font-bold text-foreground mb-6 font-display">Gửi tin nhắn cho mình</h3>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-foreground">Họ và tên</label>
                    <input
                      id="name"
                      {...register("name")}
                      data-testid="input-name"
                      className={`w-full px-4 py-3 rounded-xl bg-background border ${errors.name ? 'border-destructive' : 'border-border'} text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all`}
                      placeholder="Nguyễn Văn A"
                    />
                    {errors.name && <p className="text-xs text-destructive">{errors.name.message}</p>}
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-foreground">Email</label>
                    <input
                      id="email"
                      {...register("email")}
                      data-testid="input-email"
                      className={`w-full px-4 py-3 rounded-xl bg-background border ${errors.email ? 'border-destructive' : 'border-border'} text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all`}
                      placeholder="email@congty.com"
                    />
                    {errors.email && <p className="text-xs text-destructive">{errors.email.message}</p>}
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium text-foreground">Số điện thoại <span className="text-muted-foreground font-normal">(Không bắt buộc)</span></label>
                  <input
                    id="phone"
                    {...register("phone")}
                    data-testid="input-phone"
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    placeholder="+84 xxx xxx xxx"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-foreground">Nội dung</label>
                  <textarea
                    id="message"
                    {...register("message")}
                    data-testid="input-message"
                    rows={5}
                    className={`w-full px-4 py-3 rounded-xl bg-background border ${errors.message ? 'border-destructive' : 'border-border'} text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none`}
                    placeholder="Xin chào Long, mình muốn trao đổi về..."
                  />
                  {errors.message && <p className="text-xs text-destructive">{errors.message.message}</p>}
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
                    "Đã gửi thành công!"
                  ) : (
                    <>
                      Gửi tin nhắn <Send className="w-5 h-5 ml-1" />
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
